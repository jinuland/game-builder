#!/usr/bin/env bash
set -euo pipefail

PROFILE="${AWS_PROFILE:-game-forge}"
REGION="${AWS_REGION:-ap-northeast-2}"
IDENTITY_STACK="${GAMEFORGE_IDENTITY_STACK:-game-forge-identity}"
GRAPH_STACK="${GAMEFORGE_GRAPH_STACK:-game-forge-graph}"

if [[ "${GAMEFORGE_CONFIRM_NEPTUNE_COST:-}" != "I_UNDERSTAND_NEPTUNE_COST" ]]; then
  echo "Neptune Analytics 16 m-NCU의 지속 비용을 확인한 뒤 GAMEFORGE_CONFIRM_NEPTUNE_COST=I_UNDERSTAND_NEPTUNE_COST로 실행하세요." >&2
  exit 2
fi

outputs="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$IDENTITY_STACK" \
  --query 'Stacks[0].Outputs' \
  --output json)"

value() {
  node -e 'const o=JSON.parse(process.argv[1]); console.log(o.find(x=>x.OutputKey===process.argv[2]).OutputValue)' "$outputs" "$1"
}

artifact="dist/game-forge-graph-worker.zip"
scripts/package-graph-worker.sh "$artifact" >/dev/null
artifact_key="graph-worker/$(git rev-parse --short=12 HEAD).zip"
aws s3 cp "$artifact" "s3://$(value BuildBucketName)/$artifact_key" \
  --profile "$PROFILE" \
  --region "$REGION"

aws cloudformation deploy \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$GRAPH_STACK" \
  --template-file infra/graph-worker.yml \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides \
    ArtifactBucketName="$(value BuildBucketName)" \
    ArtifactKey="$artifact_key" \
    OntologySnapshotBucketName="$(value OntologySnapshotBucketName)"

aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$GRAPH_STACK" \
  --query 'Stacks[0].Outputs' \
  --output table
