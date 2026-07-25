#!/usr/bin/env bash
set -euo pipefail

PROFILE="${AWS_PROFILE:-game-forge}"
REGION="${AWS_REGION:-ap-northeast-2}"
IDENTITY_STACK="${GAMEFORGE_IDENTITY_STACK:-game-forge-identity}"
APP_STACK="${GAMEFORGE_APP_STACK:-game-forge-app}"
DOMAIN_PREFIX="${GAMEFORGE_COGNITO_DOMAIN_PREFIX:-game-forge-jinuland-748254788664}"
TAG="$(git rev-parse --short=12 HEAD)"
GRAPH_STACK="${GAMEFORGE_GRAPH_STACK:-game-forge-graph}"

aws cloudformation deploy \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$IDENTITY_STACK" \
  --template-file infra/identity-data.yml \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides CognitoDomainPrefix="$DOMAIN_PREFIX" \
  --no-fail-on-empty-changeset

outputs="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$IDENTITY_STACK" \
  --query 'Stacks[0].Outputs' \
  --output json)"

value() {
  node -e 'const o=JSON.parse(process.argv[1]); console.log(o.find(x=>x.OutputKey===process.argv[2]).OutputValue)' "$outputs" "$1"
}

repository="$(value EcrRepositoryUri)"
graph_worker_arn="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$GRAPH_STACK" \
  --query 'Stacks[0].Outputs[?OutputKey==`GraphWorkerArn`].OutputValue | [0]' \
  --output text 2>/dev/null || true)"
if [[ "$graph_worker_arn" == "None" ]]; then graph_worker_arn=""; fi
source_zip="$(mktemp -t game-forge-source-XXXXXX.zip)"
git archive --format=zip --output="$source_zip" HEAD
aws s3 cp "$source_zip" "s3://$(value BuildBucketName)/game-forge-source.zip" \
  --profile "$PROFILE" \
  --region "$REGION"

build_id="$(aws codebuild start-build \
  --profile "$PROFILE" \
  --region "$REGION" \
  --project-name "$(value CodeBuildProjectName)" \
  --environment-variables-override name=IMAGE_TAG,value="$TAG",type=PLAINTEXT \
  --query 'build.id' \
  --output text)"

while true; do
  build_status="$(aws codebuild batch-get-builds \
    --profile "$PROFILE" \
    --region "$REGION" \
    --ids "$build_id" \
    --query 'builds[0].buildStatus' \
    --output text)"
  case "$build_status" in
    SUCCEEDED) break ;;
    FAILED|FAULT|STOPPED|TIMED_OUT) echo "CodeBuild failed: $build_status" >&2; exit 1 ;;
  esac
  sleep 10
done

existing_app_url="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$APP_STACK" \
  --query 'Stacks[0].Outputs[?OutputKey==`ApplicationUrl`].OutputValue | [0]' \
  --output text 2>/dev/null || true)"

aws cloudformation deploy \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$APP_STACK" \
  --template-file infra/app.yml \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides \
    ImageUri="$repository:$TAG" \
    TableName="$(value TableName)" \
    UserPoolId="$(value UserPoolId)" \
    UserPoolClientId="$(value UserPoolClientId)" \
    CognitoDomain="$(value CognitoDomain)" \
    AppSecretArn="$(value AppSecretArn)" \
    InviteSecretArn="$(value InviteSecretArn)" \
    BuildSigningSecretArn="$(value BuildSigningSecretArn)" \
    OntologySnapshotBucketName="$(value OntologySnapshotBucketName)" \
    GraphWorkerArn="$graph_worker_arn" \
    PublicUrl="$existing_app_url" \
  --no-fail-on-empty-changeset

app_url="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$APP_STACK" \
  --query 'Stacks[0].Outputs[?OutputKey==`ApplicationUrl`].OutputValue | [0]' \
  --output text)"

if [[ "$existing_app_url" != "$app_url" ]]; then
  aws cloudformation deploy \
    --profile "$PROFILE" \
    --region "$REGION" \
    --stack-name "$APP_STACK" \
    --template-file infra/app.yml \
    --capabilities CAPABILITY_IAM \
    --parameter-overrides \
      ImageUri="$repository:$TAG" \
      TableName="$(value TableName)" \
      UserPoolId="$(value UserPoolId)" \
      UserPoolClientId="$(value UserPoolClientId)" \
      CognitoDomain="$(value CognitoDomain)" \
      AppSecretArn="$(value AppSecretArn)" \
      InviteSecretArn="$(value InviteSecretArn)" \
      BuildSigningSecretArn="$(value BuildSigningSecretArn)" \
      OntologySnapshotBucketName="$(value OntologySnapshotBucketName)" \
      GraphWorkerArn="$graph_worker_arn" \
      PublicUrl="$app_url" \
    --no-fail-on-empty-changeset
fi

aws cognito-idp update-user-pool-client \
  --profile "$PROFILE" \
  --region "$REGION" \
  --user-pool-id "$(value UserPoolId)" \
  --client-id "$(value UserPoolClientId)" \
  --client-name game-forge-web \
  --supported-identity-providers COGNITO \
  --allowed-o-auth-flows-user-pool-client \
  --allowed-o-auth-flows code \
  --allowed-o-auth-scopes openid email profile \
  --callback-urls "${app_url}api/auth/callback" \
  --logout-urls "$app_url" \
  --explicit-auth-flows ALLOW_REFRESH_TOKEN_AUTH ALLOW_USER_AUTH \
  --prevent-user-existence-errors ENABLED \
  --enable-token-revocation

echo "$app_url"
