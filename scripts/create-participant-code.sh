#!/usr/bin/env bash
set -euo pipefail

PROFILE="${AWS_PROFILE:-game-forge}"
REGION="${AWS_REGION:-ap-northeast-2}"
STACK="${GAMEFORGE_IDENTITY_STACK:-game-forge-identity}"
WORKSHOP_ID="${1:-workshop-$(date +%Y-%m-%d)}"
LABEL="${2:-GAME FORGE WORKSHOP}"

output() {
  aws cloudformation describe-stacks \
    --profile "$PROFILE" \
    --region "$REGION" \
    --stack-name "$STACK" \
    --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue | [0]" \
    --output text
}

table_name="$(output TableName)"
secret_arn="$(output InviteSecretArn)"
secret_json="$(aws secretsmanager get-secret-value \
  --profile "$PROFILE" \
  --region "$REGION" \
  --secret-id "$secret_arn" \
  --query SecretString \
  --output text)"
invite_secret="$(SECRET_JSON="$secret_json" node -e 'console.log(JSON.parse(process.env.SECRET_JSON).inviteSecret)')"
raw="$(node -e 'const {randomBytes}=require("node:crypto"); const a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; console.log([...randomBytes(12)].map(v=>a[v%a.length]).join(""))')"
code="${raw:0:4}-${raw:4:4}-${raw:8:4}"
code_hash="$(GAMEFORGE_INVITE_SECRET="$invite_secret" CODE="$code" node -e 'const {createHmac}=require("node:crypto"); console.log(createHmac("sha256",process.env.GAMEFORGE_INVITE_SECRET).update(process.env.CODE).digest("hex"))')"
invite_id="$(uuidgen | tr '[:upper:]' '[:lower:]')"
created_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
expires_at="$(node -e 'console.log(Math.floor(Date.now()/1000)+5*24*60*60)')"

aws dynamodb put-item \
  --profile "$PROFILE" \
  --region "$REGION" \
  --table-name "$table_name" \
  --condition-expression "attribute_not_exists(pk)" \
  --item "{
    \"pk\":{\"S\":\"INVITE#$code_hash\"},
    \"sk\":{\"S\":\"META\"},
    \"entity\":{\"S\":\"INVITE\"},
    \"inviteId\":{\"S\":\"$invite_id\"},
    \"workshopId\":{\"S\":\"$WORKSHOP_ID\"},
    \"label\":{\"S\":\"$LABEL\"},
    \"organizerSub\":{\"S\":\"bootstrap-admin\"},
    \"createdAt\":{\"S\":\"$created_at\"},
    \"expiresAt\":{\"N\":\"$expires_at\"},
    \"enabled\":{\"BOOL\":true}
  }" >/dev/null

printf '%s\n' "$code"
