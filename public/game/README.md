# 아키텍트 제로 / AWS 아키텍트 트레이너

두 개의 브라우저 게임 모드:

1. **AWS 아키텍트 트레이너** (`aws.html`) — 실제 AWS 서비스 아이콘으로 아키텍처 다이어그램의 빈칸을 채우고, 서비스 역할·SAA 시나리오를 맞히는 교육형 퀴즈. 6종 아키텍처(3-tier 웹, 서버리스 API, 정적 사이트, 이벤트 기반, 팬아웃, 읽기 확장) + 서비스/시나리오 퀴즈.
2. **아키텍트 제로: 설계자의 계단** (`index.html`) — 그리드 배치 퍼즐 × 패턴 카드 덱빌딩 × 기술 부채 관리 5막 퍼즐·전략 게임.

순수 바닐라 JS(ES 모듈) + Canvas + Web Audio, 외부 런타임 의존성 0. AWS 아이콘은 `aws-icons`(MIT) 기반.

## 실행
```bash
cd game && python3 -m http.server 8123    # 또는 임의 정적 서버
# → http://localhost:8123/aws.html    (AWS 트레이너)
# → http://localhost:8123/index.html  (아키텍트 제로)

# 단일 파일 빌드(아키텍트 제로)
node game/build.mjs        # → game/dist/architect-zero.html
```

## 테스트 / 검증
```bash
node --test game/test/engine.test.mjs   # 엔진 단위 테스트 22개
node game/sim/simulate.mjs 1000         # 밸런스 시뮬레이션 → BALANCE-REPORT.md
node game/sim/playtest.mjs              # 3관점 플레이테스트
# 브라우저 검증: index.html?validate=1 (headless Chrome, window.__AZ_REPORT)
```

## 조작
- 좌측 모듈 클릭 → 그리드 칸 클릭으로 배치
- **R** 회전 · **Ctrl+Z** 취소 · **Space** 턴 종료
- 다운(빨간 X) 슬롯 클릭 → 빈 칸 클릭으로 재배치(페일오버 카드 보유 시 즉시 복구)

## 구조
| 파일 | 역할 |
|---|---|
| `src/rng.js` | 시드 기반 결정론 PRNG |
| `src/content.js` | 모듈·카드·요구사항·막·제약 정적 데이터 |
| `src/engine.js` | 순수 게임 로직(상태·배치·부채·시너지·등급). setter로만 상태 변경 |
| `src/render.js` | Canvas 렌더러 + 이펙트 |
| `src/audio.js` | Web Audio 절차적 BGM 3 + SFX 9 |
| `src/app.js` | 컨트롤러(입력·씬·UI·저장) |
| `assets/` | 생성 캐릭터 4 + 배경 4 (webp) |
| `build.mjs` | 단일 HTML 번들러 |

에셋은 Amazon Bedrock(Stable Image) 생성 후 배경 제거·리사이즈·webp 변환. 사운드는 런타임 합성(외부 파일 없음).
