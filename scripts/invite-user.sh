#!/usr/bin/env bash
set -euo pipefail

PROFILE="${AWS_PROFILE:-game-forge}"
REGION="${AWS_REGION:-ap-northeast-2}"
STACK="${GAMEFORGE_IDENTITY_STACK:-game-forge-identity}"
EMAIL="${1:?사용법: npm run user:invite -- user@example.com [이름]}"
NAME="${2:-$EMAIL}"

user_pool_id="$(aws cloudformation describe-stacks \
  --profile "$PROFILE" \
  --region "$REGION" \
  --stack-name "$STACK" \
  --query 'Stacks[0].Outputs[?OutputKey==`UserPoolId`].OutputValue | [0]' \
  --output text)"

aws cognito-idp admin-create-user \
  --profile "$PROFILE" \
  --region "$REGION" \
  --user-pool-id "$user_pool_id" \
  --username "$EMAIL" \
  --user-attributes \
    "Name=email,Value=$EMAIL" \
    "Name=email_verified,Value=true" \
    "Name=name,Value=$NAME" \
  --desired-delivery-mediums EMAIL

echo "$EMAIL 사용자에게 Cognito 초대 이메일을 보냈습니다."
echo "사용자는 임시 비밀번호로 로그인한 뒤 새 비밀번호를 설정합니다."
