# DEPLOY.md — AWS 러닝 아케이드 배포

## 라이브 URL
**https://djiumrv99kfeg.cloudfront.net/**
- `/` (또는 `/home.html`) — 랜딩(3개 모드 선택)
- `/story.html` — AWS 스페셜리스트 사가 (스토리 심화 + 수료증)
- `/aws.html` — AWS 아키텍트 트레이너 (기본 퀴즈)
- `/index.html` — 아키텍트 제로 (퍼즐)

## 인프라 (계정 claude-cowork · 748254788664)
- S3 버킷: `architect-zero-748254788664` (비공개, CloudFront OAC로만 접근)
- CloudFront: `E1UUPTGXKDOFKK` · `djiumrv99kfeg.cloudfront.net` · DefaultRootObject=home.html
- OAC: `EBVBTZ16K4JRS` (SigV4 always) · 버킷 정책은 이 배포 ARN으로만 GetObject 허용
- HTTPS 강제(redirect-to-https), gzip 압축, PriceClass_100
- 계정 퍼블릭 액세스 차단 설정은 변경하지 않음 (OAC로 우회)

## 업데이트
```bash
export AWS_PROFILE=claude-cowork
aws s3 sync public/game s3://architect-zero-748254788664/ --delete --cache-control "public,max-age=300"
aws cloudfront create-invalidation --distribution-id E1UUPTGXKDOFKK --paths "/*"
```

## 내리기
```bash
aws cloudfront get-distribution-config --id E1UUPTGXKDOFKK   # disable then delete
aws s3 rm s3://architect-zero-748254788664 --recursive
aws s3api delete-bucket --bucket architect-zero-748254788664
```
