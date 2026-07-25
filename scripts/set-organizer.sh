#!/usr/bin/env bash
set -euo pipefail

PROFILE="${AWS_PROFILE:-game-forge}"
REGION="${AWS_REGION:-ap-northeast-2}"
STACK="${GAMEFORGE_IDENTITY_STACK:-game-forge-identity}"
EMAIL="${1:?사용법: scripts/set-organizer.sh admin@example.com}"

user_pool_id="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$STACK" \
  --query 'Stacks[0].Outputs[?OutputKey==`UserPoolId`].OutputValue | [0]' \
  --output text)"

username="$(aws cognito-idp list-users \
  --profile "$PROFILE" \
  --region "$REGION" \
  --user-pool-id "$user_pool_id" \
  --filter "email = \"$EMAIL\"" \
  --query 'Users[0].Username' \
  --output text)"

if [[ -z "$username" || "$username" == "None" ]]; then
  echo "Cognito에서 $EMAIL 계정을 찾지 못했습니다." >&2
  echo "관리자가 aws cognito-idp admin-create-user로 계정을 생성한 뒤 다시 실행하세요." >&2
  exit 1
fi

aws cognito-idp admin-add-user-to-group \
  --profile "$PROFILE" \
  --region "$REGION" \
  --user-pool-id "$user_pool_id" \
  --username "$username" \
  --group-name organizer

echo "$EMAIL 계정에 organizer 권한을 부여했습니다."
echo "이미 로그인 중이면 로그아웃 후 다시 로그인해야 새 권한이 적용됩니다."
