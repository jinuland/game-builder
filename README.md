# GAME FORGE

사용자의 게임 아이디어를 장르별 재미 공식에 매핑하고, 편집 가능한 스토리·온톨로지·게임 기획안과 코딩 에이전트용 Build Goal을 생성하는 로컬 워크숍입니다.

## 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 `http://localhost:3000/game-builder`를 엽니다.

## Bedrock 설정

`.env.local`에 자신의 Bedrock API key를 입력합니다.

```dotenv
AWS_BEARER_TOKEN_BEDROCK=your-own-bedrock-api-key
GAMEFORGE_BEDROCK_REGION=ap-northeast-2
GAMEFORGE_BEDROCK_MODEL_ID=us.anthropic.claude-sonnet-4-6
```

`.env.local`은 Git에서 제외됩니다. 비밀값을 `NEXT_PUBLIC_*`, 클라이언트 코드, HTML 또는 브라우저 저장소에 넣지 마세요. 운영 AWS에서는 가능하면 장기 키 대신 IAM 실행 역할과 비밀 저장소를 사용하세요.

## 주요 기능

- 대표 장르 선택과 게임 아이디어 확장
- 3·5·7막 스토리보드 생성 및 직접 편집
- 게임 온톨로지 노드·관계 편집과 그래프 보기
- 캐릭터·배경·게임 방식·조작·성장 구조를 포함한 기획안 검토
- 사용자 피드백을 반영한 기획안 재생성
- Bedrock 기반 Build Goal 생성
- 이미지 제작, 밸런스, 플레이테스트, 완료 계약을 포함한 실행 명세
- **워크숍 내 이미지 생성**: Build Goal의 캐릭터·배경 프롬프트마다 `이미지 생성` 버튼을 눌러 Bedrock(Stability)으로 바로 PNG를 만들고 미리보기·다운로드 (`.env.local`의 `AWS_BEARER_TOKEN_BEDROCK` 키 하나로 동작, 별도 설정 불필요)
- 프로젝트별 브라우저 저장과 JSON·Markdown 내보내기

## 검증

```bash
npm run build:aws
npm run lint
```
