# 이미지 MCP 서버

GAME FORGE가 뽑은 Build Goal(실행 명세)에는 "이미지 제작"이 들어 있습니다. 그 명세를
실행하는 코딩 에이전트(Claude Code 등)에게 Amazon Bedrock 이미지 생성/편집 도구를 주는
MCP 서버입니다.

## 유저가 하는 일 = 토큰 1회 입력

베어러 토큰은 앱과 이 서버가 **`.env.local` 하나를 공유**합니다. `.mcp.json`에 토큰을
복붙하지 않습니다 — 서버가 `node --env-file-if-exists=.env.local`로 실행되어 같은 파일을
읽습니다.

```dotenv
# .env.local
AWS_BEARER_TOKEN_BEDROCK=<본인 Bedrock API key>   # 앱과 공유, 1회만 입력
GAMEFORGE_IMAGE_REGION=us-west-2                   # 이미지 생성 모델 활성 리전
GAMEFORGE_IMAGE_MODEL=stable-core                  # 기본 생성 모델
```

`.mcp.json`에는 이미 등록돼 있습니다:

```json
{
  "mcpServers": {
    "bedrock-image": {
      "command": "node",
      "args": ["--env-file-if-exists=.env.local", "image-mcp/server.mjs"]
    }
  }
}
```

Claude Code를 이 폴더에서 다시 시작하면 서버가 자동으로 붙습니다.

## 도구

| 도구 | 설명 |
|---|---|
| `list_image_models` | 사용 가능한 모델 별칭 목록 |
| `generate_image` | 프롬프트로 새 이미지 생성 → PNG 저장 |
| `edit_image` | 기존 이미지 배경제거/업스케일/아웃페인트 |

유저는 모델 ID를 외울 필요 없이 **별칭**으로 고릅니다. 대화 중 "Ultra로 뽑아줘",
"배경 지워줘"처럼 말하면 에이전트가 해당 별칭으로 호출합니다.

### 생성 모델 (text→image)
- `stable-core` — 빠르고 저렴 (기본)
- `stable-ultra` — 최고 품질
- `sd3.5-large` — SD 계열, 커스텀 스타일

### 편집 모델 (image→image, 입력 이미지 필요)
- `remove-background` — 배경 제거 (투명 PNG)
- `upscale` / `upscale-creative` — 업스케일
- `outpaint` — 캔버스 확장

결과 PNG는 프로젝트 폴더 안에만 저장됩니다(경로 탈출 차단). 기본 산출 위치인
`public/generated/`는 `.gitignore`에 있습니다.

## 이 계정의 Bedrock 이미지 모델 접근 현황 (2026-07 기준)

- 생성 모델(Stability core/ultra/sd3.5)은 **us-west-2**에서만 활성 → 그래서 이미지
  리전을 텍스트용(`GAMEFORGE_BEDROCK_REGION=us-east-1`)과 분리했습니다.
- 편집 모델은 on-demand 미지원이라 `us.` inference profile ID로 호출합니다(서버가 처리).
- Amazon Nova Canvas / Titan Image는 이 계정에서 legacy·EOL 상태로 접근 불가.
  콘솔에서 접근을 켜면 서버 `MODELS` 표에 별칭만 추가하면 됩니다.
