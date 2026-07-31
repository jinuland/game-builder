# 한 입의 성 (One Bite Fortress) — GOAL 2 완성·검증 실행 계약

> 이 문서는 기존 구현 결과를 “조금 개선”하는 요청이 아니다. 아래 원본 명세 전체를 충족하는 완성본을 만들고, 실제 플레이와 배포본으로 증명하는 교정 실행 Goal이다. 기존 코드가 있다면 전 파일을 먼저 감사하고 재사용 가능한 부분만 보존한다.

## A. 최종 Goal

`한 입의 성`을 타이틀부터 웨이브 25, 보스, 승리·부분 승리·게임 오버, 재도전, 저장, 배포까지 실제로 완주 가능한 서비스 품질의 브라우저 게임으로 완성한다. 명세의 모든 필수 요구사항과 TC01~TC15를 구현하고 로컬 및 배포 URL에서 검증한 경우에만 Goal 달성을 선언한다.

부분 구현, 첫 화면 렌더링, 프로토타입, 빌드 성공, 일부 테스트 통과는 Goal 달성이 아니다. 시간·토큰·난이도를 이유로 범위를 축소하거나 기능 이름만 남겨서는 안 된다.

## B. 실행 전 필수 감사

1. 저장소의 모든 HTML, CSS, JavaScript, 설정, 테스트 파일을 열어 검사한다.
2. 실제 엔트리에서 출발하는 전체 import 그래프를 작성한다.
3. 아래 원본 명세의 요구사항을 빠짐없이 원자 단위로 분해하여 `REQUIREMENTS-TRACE.md`를 만든다.
4. 각 요구사항에 `REQ-001` 형식의 고유 ID를 부여하고 다음 열을 사용한다.

| 요구 ID | 원본 명세 위치 | 요구사항 | 구현 파일·심볼 | 구현 상태 | 검증 방법 | 검증 상태 | 증거 |
|---|---|---|---|---|---|---|---|
| REQ-001 | 예: 3. 상태 머신 | TITLE→WAVE 전환 | `src/state.js#transitionTo` | 미구현 | 브라우저 시작 클릭 | 미검증 | - |

상태 값은 `미구현`, `부분 구현`, `구현 완료`, `검증 불가`, `검증 완료`만 사용한다. 최종적으로 모든 필수 행이 `구현 완료`이면서 `검증 완료`여야 한다.

## C. 구현 완전성 규칙

- 클래스, 상수, 카드, 시너지, 보스, 환경, 애니메이션 상태의 이름만 존재하는 구현을 금지한다.
- 모든 카드와 시너지는 적용 전후 실제 수치가 달라지는 테스트를 가진다.
- 보스는 일반 손님의 HP·속도 변경 버전이 아니라 전용 AI, 예고, 상태 전환, 연출을 가진다.
- 비 환경은 시각 오버레이뿐 아니라 자원 생산 주기와 우산 손님 스폰에 실제 영향을 준다.
- 모든 버튼과 단축키는 실제 상태 전환 또는 게임 동작에 연결한다.
- 선언됐지만 사용되지 않는 상수, 상태, 효과, 함수를 제거하거나 완전히 연결한다.
- 원본 명세와 코드가 충돌하면 임의로 생략하지 말고 원본 명세를 기준으로 수정한다.

## D. 필수 검증 게이트

### Gate 1 — 전체 정적 검사

- 모든 JavaScript 모듈에 문법 검사를 실행한다.
- 엔트리에서 로드되는 전체 import가 성공하는지 검사한다.
- 프로젝트 전체에서 `eval`, `innerHTML`, `alert`, `confirm`, `prompt`, `TODO`, `TBD`, `placeholder`를 검색한다.
- 외부 이미지·오디오 네트워크 요청이 없는지 검사한다.
- `state.phase`가 `transitionTo()` 외부에서 직접 변경되는지 검색한다.
- 콘솔 error, uncaught exception, module load failure, 정적 파일 404가 하나라도 있으면 Gate 실패다.

### Gate 2 — 실제 브라우저 핵심 흐름

로컬 서버를 실행하고 실제 브라우저에서 다음을 순서대로 조작하여 확인한다.

1. 타이틀 화면과 제목, 시작 버튼이 보인다.
2. 시작 버튼으로 튜토리얼에 진입한다.
3. 튜토리얼 3단계를 완료한다.
4. 마우스 또는 터치로 유닛을 선택하고 유효 슬롯에 배치한다.
5. 손님이 스폰, 이동, 피격, 격퇴 또는 식당 진입한다.
6. 웨이브 클리어 후 DRAFT로 전환한다.
7. 카드 선택 후 덱과 실제 전투 수치가 변경된다.
8. 막 3에서 비 렌더링, 자원 주기 변경, 우산 손님 등장이 모두 작동한다.
9. 웨이브 20에서 보스 예고, 전용 AI, 보스전, 격퇴가 작동한다.
10. 웨이브 25 이후 올바른 결과 화면과 엔딩 분기가 나타난다.
11. 재도전 후 런 상태가 초기화되고 웨이브 1로 돌아간다.

Canvas의 실제 픽셀 결과를 최소 다음 시점에 스크린샷으로 남긴다: 타이틀, 튜토리얼, 일반 전투, 드래프트, 비 환경, 보스 예고, 보스전, 승리 결과, 게임 오버.

### Gate 3 — 전체 플레이 경로

테스트 전용 시간 가속 기능을 구현하되 프로덕션 기본값에서는 비활성화한다. 이를 사용해 웨이브 1부터 25까지 다음 세 경로를 각각 완주한다.

- HP 손실 없는 승리
- HP를 잃은 상태의 승리
- 게임 오버

재도전 후 런 상태 전체가 초기화되는지 확인한다. 최고 기록은 유지되고 임시 런 데이터는 남지 않는지 새로고침 전후로 확인한다.

### Gate 4 — TC01~TC15

원본 명세의 TC01~TC15를 모두 실행한다. `TEST-REPORT.md`에 테스트 ID, 사전 조건, 입력, 기대 결과, 실제 결과, PASS/FAIL, 로그·스크린샷 증거를 기록한다. 한 건이라도 FAIL이면 수정 후 TC01~TC15 전체를 다시 실행한다.

### Gate 4.5 — 재미 반복 개선

실제 브라우저에서 최소 3회의 전체 플레이 개선 사이클을 수행한다. 각 회차는 `PLAY → OBSERVE → LOG → PRIORITIZE → CHANGE → REGRESSION TEST → REPLAY` 순서를 따른다.

- 첫 60초 안에 목표와 핵심 조작을 이해할 수 있는지 확인한다.
- 지루한 대기, 무의미한 선택, 불공정한 실패, 피드백 부족, 한 가지 지배 전략을 찾는다.
- 초보자, 숙련자, 최적화 플레이어 관점과 서로 다른 빌드로 플레이한다.
- 발견한 문제의 재현 단계, 심각도, 원인 가설, 변경 사항, 전후 지표를 `FUN-ITERATION-LOG.md`에 기록한다.
- 한 번에 하나의 주요 원인을 수정하고 전체 회귀 테스트 후 다시 플레이한다.
- 자동 테스트 통과나 개발자의 근거 없는 “재미있음” 판단은 통과 증거가 아니다.
- 문제를 발견하지 못한 회차는 관찰 실패로 간주하고 다른 관점과 빌드로 재실행한다.

최소 종료 기준: 치명적·높음 재미 이슈 0건, 첫 60초 핵심 조작 성공, 실패 원인 식별 가능, 의미 있는 선택이 각 웨이브에 존재, 서로 다른 3개 빌드가 유효, 세 플레이 관점에서 재도전 의향을 방해하는 문제가 없음.

### Gate 5 — 배포

로컬 Gate 1~4를 모두 통과한 정확한 커밋만 배포한다. 배포 후 URL에서 타이틀, 시작, 튜토리얼, 유닛 배치, 손님 스폰까지 다시 실행한다. 배포본 콘솔 오류와 404를 검사한다. 로컬 성공·배포 실패는 Goal 미완료다.

## E. 완료 선언 정책

다음 조건을 모두 만족하기 전에는 `완료`, `Goal 달성`, `서비스 준비 완료`라는 표현을 사용하지 않는다.

- `REQUIREMENTS-TRACE.md`의 모든 필수 요구가 구현 완료 + 검증 완료
- TC01~TC15 전부 PASS
- 세 전체 플레이 경로 검증 완료
- 콘솔 오류, import 실패, 404, 금지사항 위반 0건
- 로컬과 배포본 검증 완료

하나라도 남으면 최종 상태는 `미완료`이며, 남은 항목과 재현 방법을 명시한다. 시간이나 토큰 부족은 완료 기준을 낮추는 근거가 아니다.

## F. 최종 제출물

- 완전한 게임 소스
- `README.md`
- `REQUIREMENTS-TRACE.md`
- `TEST-REPORT.md`
- `FUN-ITERATION-LOG.md`
- 브라우저 검증 스크린샷
- 로컬 실행 URL 및 배포 URL
- 구현 기능 목록
- 미구현·부분 구현·검증 불가 항목 목록
- 사용한 검증 명령과 결과 요약

최종 보고에서는 주장보다 증거를 우선한다. 각 완료 주장은 파일·심볼, 테스트 결과, 브라우저 관찰 또는 스크린샷 중 하나 이상과 연결되어야 한다.

---

# 원본 구현 명세 — 전 항목 필수

## 0. 구현 순서 및 금지 사항

### 구현 순서 (이 순서를 반드시 준수한다)
1. 프로젝트 폴더 구조 생성 및 index.html 작성
2. Canvas 렌더링 루프 및 입력 시스템 구축 (Goal: Gameplay)
3. 게임 상태 머신 구현 (TITLE→WAVE→DRAFT→BOSS→RESULT)
4. 손님 웨이브 스폰 및 이동 시스템
5. 방어 유닛 배치 및 공격 시스템
6. 시너지 콤보 및 상성 카운터 시스템
7. 카드 드래프트 및 덱 정제 UI
8. 환경 변수 시스템 (비/야간)
9. 보스 손님 AI 및 예고 시스템
10. HUD·메뉴·결과 화면 렌더링
11. Web Audio API 사운드 시스템
12. localStorage 저장 및 불러오기
13. 접근성·성능 최적화 및 QA 테스트

### 금지 사항
- 외부 이미지 파일(.png/.jpg/.webp) 로드 금지 — 모든 그래픽은 Canvas 2D API로 절차적 생성
- 외부 오디오 파일(.mp3/.ogg/.wav) 로드 금지 — 모든 사운드는 Web Audio API oscillator로 생성
- jQuery, React, Vue 등 프레임워크 사용 금지 — 순수 Vanilla JS ES2020+
- `eval()`, `innerHTML` 직접 조작 금지 (XSS 방지)
- `alert()`, `confirm()`, `prompt()` 사용 금지 — 모든 UI는 Canvas 위에 렌더링
- TODO, 미정, placeholder 주석 금지 — 모든 함수는 완전 구현 상태로 작성

---

## 1. 제품 목표 및 플레이 세션

### 제품 목표
- 장르: 라인 디펜스 + 카드 드래프트 하이브리드
- 세션 길이: 8~15분 (5막 25웨이브 기준 평균 11분)
- 플랫폼: 데스크톱/모바일 브라우저 (Chrome 100+, Firefox 100+, Safari 15+)
- 목표: 식당 '한 입의 성' 체력(HP 20)을 유지하며 5막 전체를 클리어

### 플레이 흐름
```
타이틀 화면
  → [시작] 클릭
  → 막 1 웨이브 1~5 (튜토리얼 오버레이 포함)
  → 웨이브 클리어 → 카드 드래프트 화면 (3장 중 1장 선택)
  → 막 2 웨이브 6~10 (시너지 튜토리얼)
  → 웨이브 클리어 → 카드 드래프트
  → 막 3 웨이브 11~15 (환경 변수 '비' 활성화)
  → 웨이브 클리어 → 카드 드래프트 + 덱 정제 선택
  → 막 4 웨이브 16~20 (보스 예고 시스템)
  → 웨이브 클리어 → 카드 드래프트
  → 막 5 웨이브 21~25 (최종 복합 웨이브)
  → 결과 화면 (완벽 방어 / 부분 실패 분기)
  → [재도전] 또는 [타이틀로]
```

### 승패 조건
- **승리**: 웨이브 25 클리어 시 명성 게이지 MAX (100점)
- **완벽 방어 엔딩**: 식당 HP 20 유지 (손실 0)
- **부분 실패 엔딩**: 식당 HP 1~19로 클리어
- **게임 오버**: 식당 HP 0 → 즉시 결과 화면(실패) → 재도전 가능

### 재도전 흐름
- 게임 오버 또는 클리어 후 결과 화면에서 [재도전] 클릭 시 상태 완전 초기화 후 막 1부터 재시작
- localStorage에 최고 명성 점수(bestScore)만 유지

---

## 2. 기술 스택 및 파일/폴더 구조

### 기술 스택
- HTML5 Canvas 2D API (렌더링)
- Vanilla JavaScript ES2020+ (모듈 시스템: ES Modules)
- Web Audio API (사운드)
- localStorage API (저장)
- CSS: 최소한의 인라인 스타일 (캔버스 중앙 정렬만)

### 폴더 구조
```
one-bite-fortress/
├── index.html              # 진입점, Canvas 태그, 모듈 로드
├── src/
│   ├── main.js             # 게임 초기화, requestAnimationFrame 루프
│   ├── constants.js        # 모든 수치 상수 (수정 금지 구역)
│   ├── state.js            # 전역 게임 상태 객체 및 상태 머신
│   ├── input.js            # 마우스/터치 입력 통합 처리
│   ├── renderer.js         # 배경·HUD·오버레이 렌더링
│   ├── audio.js            # Web Audio API 사운드 생성기
│   ├── storage.js          # localStorage 저장/불러오기
│   ├── game/
│   │   ├── wave.js         # 웨이브 스폰 테이블 및 스폰 로직
│   │   ├── guest.js        # 손님 클래스 (이동·피격·퇴장)
│   │   ├── unit.js         # 방어 유닛 클래스 (배치·공격·사거리)
│   │   ├── synergy.js      # 시너지 콤보 감지 및 발동
│   │   ├── card.js         # 레시피 카드 클래스 및 덱 관리
│   │   ├── environment.js  # 환경 변수 (비/야간) 로직
│   │   ├── boss.js         # 보스 손님 AI 및 예고 시스템
│   │   └── collision.js    # 유닛-손님 충돌 감지
│   └── ui/
│       ├── hud.js          # 상단 HUD 렌더링
│       ├── draft.js        # 카드 드래프트 화면
│       ├── refine.js       # 덱 정제 화면
│       ├── tutorial.js     # 튜토리얼 오버레이
│       └── result.js       # 결과 화면
└── README.md               # 로컬 실행 방법
```

---

## 3. 프레임 루프·렌더링·입력·충돌·상태 머신

### 프레임 루프 (main.js)
```
requestAnimationFrame(gameLoop)
  ├── deltaTime = (now - lastTime) / 1000  // 초 단위
  ├── update(deltaTime)                    // 로직 업데이트
  └── render()                             // 렌더링
```
- 목표 프레임: 60fps (deltaTime 기반 물리 계산으로 프레임 독립)
- 최대 deltaTime 클램프: 0.05초 (탭 전환 후 복귀 시 튀는 현상 방지)

### 상태 머신 (state.js)
```
STATES = {
  TITLE,        // 타이틀 화면
  TUTORIAL,     // 튜토리얼 오버레이 (막 1 웨이브 1 전)
  WAVE,         // 웨이브 진행 중
  WAVE_CLEAR,   // 웨이브 클리어 연출 (0.8초)
  DRAFT,        // 카드 드래프트 화면 (웨이브 간)
  REFINE,       // 덱 정제 화면 (막 3 클리어 후)
  BOSS_INTRO,   // 보스 등장 연출 (1.2초)
  BOSS_HINT,    // 보스 예고 힌트 표시 (2초)
  GAME_OVER,    // 식당 HP 0
  RESULT        // 최종 결과 화면
}
```
- 상태 전환은 반드시 `transitionTo(newState)` 함수를 통해서만 수행
- 각 상태 진입 시 `onEnter()`, 매 프레임 `onUpdate()`, 퇴장 시 `onExit()` 호출

### 렌더링 레이어 순서 (매 프레임)
1. 배경 레이어 0 (하늘)
2. 배경 레이어 1 (건물 실루엣)
3. 배경 레이어 2 (라인 바닥)
4. 방어 유닛 스프라이트
5. 손님 스프라이트
6. 이펙트 파티클
7. 환경 오버레이 (비/야간)
8. HUD (상단 80px 바)
9. UI 오버레이 (드래프트/정제/결과 화면)
10. 튜토리얼 오버레이 (최상위)

### 입력 시스템 (input.js)
- `pointerdown`, `pointermove`, `pointerup` 이벤트 통합 (마우스+터치 동일 처리)
- 클릭 좌표를 Canvas 논리 좌표로 변환: `x = e.offsetX * (CANVAS_W / canvas.clientWidth)`
- 드래그 배치: pointerdown(유닛 선택) → pointermove(고스트 표시) → pointerup(라인 슬롯에 드롭)
- 키보드: Space(일시정지), Escape(메뉴), 1/2/3(카드 선택 단축키)

### 충돌 감지 (collision.js)
- 유닛 사거리(원형) vs 손님 위치(점): `distance(unit, guest) <= unit.range`
- 매 프레임 O(n×m) 순회 (유닛 최대 12개, 손님 최대 20개 → 240회 연산, 성능 안전)
- 충돌 시 `unit.attack(guest)` 호출, 쿨다운 타이머로 연속 공격 제어

---

## 4. 전체 게임 규칙 및 밸런스 표

### 라인 구성
| 라인 | Y 좌표 (px) | 슬롯 수 | 특성 |
|------|------------|---------|------|
| 상단 | 160 | 4 | 원거리 손님 경로 |
| 중단 | 320 | 4 | 기본 경로 |
| 하단 | 480 | 4 | 고속 손님 경로 |

- 슬롯 간격: 240px (x: 80, 320, 560, 800)
- 손님 등장 x: 0, 이동 방향: 우측(+x), 식당 도달 x: 1200

### 식재료 자원
| 항목 | 수치 |
|------|------|
| 초기 자원 | 10 |
| 자원 최대치 | 20 |
| 자동 생산 | +1 / 3초 |
| 비 환경 시 생산 | +1 / 4초 (-25%) |
| 웨이브 클리어 보너스 | +3 |
| 손님 격퇴 보너스 | +0 (자원 보너스 없음, 웨이브 단위로만 지급) |

### 방어 유닛 스탯
| 유닛 | 비용 | HP | 공격력 | 공격속도(초) | 사거리(px) | 속성 | 특수 효과 |
|------|------|-----|--------|------------|-----------|------|----------|
| 소금구이(짠) | 3 | 30 | 5 | 1.5 | 120 | 짠 | 단일 타겟 |
| 고추장볶음(매운) | 4 | 25 | 8 | 2.0 | 100 | 매운 | 범위(반경 60px) |
| 식초절임(신) | 3 | 20 | 3 | 1.0 | 140 | 신 | 슬로우 -30% 2초 |
| 꿀떡(단) | 5 | 40 | 2 | 3.0 | 80 | 단 | 인접 유닛 HP+5 회복 |

### 손님 아키타입 스탯
| 아키타입 | HP | 이동속도(px/초) | 방어력 | 약점 속성 | 등장 막 |
|---------|-----|--------------|--------|---------|--------|
| 단맛추구 손님 | 20 | 60 | 0 | 짠 | 1 |
| 고소함추구 손님 | 30 | 50 | 5 | 매운 | 1 |
| 우산 손님 | 25 | 70 | 0 | 신 | 3(비 환경) |
| 급식왕 손님 | 40 | 80 | 10 | 단 | 4 |
| 평론가 추종자 | 35 | 55 | 8 | 짠+신 | 5 |
| 미식가 평론가(보스) | 200 | 40 | 20 | 전체 | 4 |

- 약점 속성 공격 시 데미지 ×1.5 배율 적용
- 식당 도달 시 식당 HP -2 (보스는 -5)

### 웨이브 스폰 테이블
| 막 | 웨이브 | 손님 수 | 구성 | 스폰 간격(초) |
|----|--------|--------|------|------------|
| 1 | 1~5 | 5~8 | 단맛+고소함 혼합 | 2.0 |
| 2 | 6~10 | 8~12 | 단맛+고소함+신규 1종 | 1.8 |
| 3 | 11~15 | 10~14 | 우산 포함, 비 환경 | 1.6 |
| 4 | 16~19 | 12~16 | 급식왕+추종자 | 1.4 |
| 4 | 20 | 보스 | 미식가 평론가 단독 | - |
| 5 | 21~25 | 15~20 | 전 아키타입 혼합 | 1.2 |

### 시너지 콤보 표
| 조합 | 조건 | 효과 | 지속 시간 |
|------|------|------|---------|
| 입맛 마비 | 짠+신 유닛 동일 라인 | 라인 손님 이동속도 -20% | 웨이브 종료까지 |
| 매운 폭풍 | 매운+신 유닛 동일 라인 | 범위 데미지 +50% | 10초 |
| 달콤짭짤 | 단+짠 유닛 동일 라인 | 유닛 HP 전체 회복 | 즉시 1회 |
| 풀코스 | 4속성 모두 배치 | 전 라인 손님 이동속도 -30% | 웨이브 종료까지 |

### 카드 드래프트 풀
| 카드명 | 효과 | 희귀도 |
|--------|------|--------|
| 짠맛 강화 | 짠 유닛 공격력 +3 | 일반 |
| 매운맛 강화 | 매운 유닛 범위 +20px | 일반 |
| 신맛 강화 | 신 유닛 슬로우 -10% 추가 | 일반 |
| 단맛 강화 | 꿀떡 회복량 +3 | 일반 |
| 빠른 손 | 모든 유닛 배치 비용 -1 | 희귀 |
| 재료 창고 | 자원 최대치 +5 | 희귀 |
| 비법 레시피 | 시너지 효과 지속 +5초 | 희귀 |
| 철벽 수비 | 식당 HP +3 | 희귀 |

- 드래프트 시 풀에서 무작위 3장 제시, 1장 선택
- 덱 최대 카드 수: 10장
- 정제: 덱에서 카드 1장 제거 (막 3 클리어 후 1회 기회 제공)

### 명성 게이지 계산
- 웨이브 클리어 시 +4점 (25웨이브 × 4 = 100점 기준)
- 식당 HP 손실 시 -2점/회
- 시너지 발동 시 +1점/회
- 최종 점수 0~100점, 80점 이상 = 완벽 방어 엔딩

---

## 5. 캐릭터·적·배경·이펙트 제작 사양

### Canvas 절차적 드로잉 규칙
모든 스프라이트는 `draw(ctx, x, y, frame)` 함수 형태로 구현한다.
외부 이미지 파일을 일절 사용하지 않는다.

### 방어 유닛 드로잉 (unit.js)
```javascript
// 소금구이(짠) 예시
function drawSaltGrill(ctx, x, y) {
  ctx.save();
  // 본체: 흰색 원
  ctx.fillStyle = '#F0F0F0';
  ctx.strokeStyle = '#222222';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, 18, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  // 소금 결정: 작은 다이아몬드 3개
  ctx.fillStyle = '#CCDDFF';
  [[0,-8],[6,4],[-6,4]].forEach(([dx,dy]) => {
    ctx.beginPath();
    ctx.moveTo(x+dx, y+dy-4); ctx.lineTo(x+dx+4, y+dy);
    ctx.lineTo(x+dx, y+dy+4); ctx.lineTo(x+dx-4, y+dy);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  });
  ctx.restore();
}
```
각 유닛 draw 함수를 동일한 패턴으로 구현한다.

### 손님 드로잉 (guest.js)
```javascript
// 2프레임 걷기 애니메이션
function drawGuest(ctx, x, y, type, frame) {
  const legOffset = frame === 0 ? 6 : -6;
  ctx.save();
  ctx.strokeStyle = '#222222'; ctx.lineWidth = 2;
  // 몸통
  ctx.fillStyle = GUEST_COLORS[type];
  ctx.fillRect(x-10, y-20, 20, 22);
  ctx.strokeRect(x-10, y-20, 20, 22);
  // 머리
  ctx.beginPath(); ctx.arc(x, y-28, 10, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // 다리 (2프레임)
  ctx.beginPath();
  ctx.moveTo(x-5, y+2); ctx.lineTo(x-5+legOffset, y+18);
  ctx.moveTo(x+5, y+2); ctx.lineTo(x+5-legOffset, y+18);
  ctx.stroke();
  ctx.restore();
}
```

### 배경 드로잉 (renderer.js)
```javascript
function drawBackground(ctx, environmentState) {
  // 레이어 0: 하늘
  const skyColors = { day: '#FFE4C4', rain: '#8899AA', night: '#1A1A3E' };
  ctx.fillStyle = skyColors[environmentState] || '#FFE4C4';
  ctx.fillRect(0, 0, 1280, 720);
  // 레이어 1: 건물 실루엣 (기와 처마)
  ctx.fillStyle = '#5C4033';
  // 처마 삼각형 반복 패턴
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(i*160, 80); ctx.lineTo(i*160+80, 20); ctx.lineTo(i*160+160, 80);
    ctx.closePath(); ctx.fill();
  }
  // 레이어 2: 라인 바닥
  const lineColors = ['#D4C5B0', '#C8B89A', '#BCA882'];
  [160, 320, 480].forEach((lineY, i) => {
    ctx.fillStyle = lineColors[i];
    ctx.fillRect(0, lineY-60, 1280, 120);
    // 돌바닥 타일 패턴
    ctx.strokeStyle = '#A09080'; ctx.lineWidth = 1;
    for (let tx = 0; tx < 1280; tx += 80) {
      ctx.strokeRect(tx, lineY-60, 80, 120);
    }
  });
}
```

### 이펙트 파티클 시스템
```javascript
class Particle {
  constructor(x, y, color, vx, vy, life) {
    this.x = x; this.y = y; this.color = color;
    this.vx = vx; this.vy = vy; this.life = life; this.maxLife = life;
  }
  update(dt) { this.x += this.vx*dt; this.y += this.vy*dt; this.life -= dt; }
  draw(ctx) {
    ctx.globalAlpha = this.life / this.maxLife;
    ctx.fillStyle = this.color;
    ctx.beginPath(); ctx.arc(this.x, this.y, 4, 0, Math.PI*2); ctx.fill();
    ctx.globalAlpha = 1;
  }
}
// 웨이브 클리어 시 골드 파티클 40개 생성
function spawnClearParticles(particles, x, y) {
  for (let i = 0; i < 40; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 80 + Math.random() * 120;
    particles.push(new Particle(x, y, '#FFD700',
      Math.cos(angle)*speed, Math.sin(angle)*speed, 0.8));
  }
}
```

---

## 6. 애니메이션 상태와 전환

### 방어 유닛 애니메이션 상태
```
IDLE → (적 사거리 진입) → ATTACK → (공격 완료) → IDLE
IDLE → (HP 0) → DESTROYED (페이드아웃 300ms 후 제거)
```
- IDLE: 1프레임 정지
- ATTACK: 2프레임 플립 (60ms/프레임), 공격 이펙트 파티클 생성

### 손님 애니메이션 상태
```
WALK → (유닛 공격 받음) → HIT_FLASH (100ms) → WALK
WALK → (HP 0) → DEFEATED (점프+페이드 300ms 후 제거)
WALK → (식당 도달) → ENTER (식당 HP 감소 후 제거)
```
- WALK: 2프레임 루프 (100ms/프레임)
- HIT_FLASH: globalAlpha 1→0.3→1 (100ms)

### 보스 애니메이션 상태
```
OFF_SCREEN → (웨이브 20 시작) → INTRO_SLIDE (600ms) → HINT_DISPLAY (2초)
→ WALK → HIT_FLASH → WALK (반복)
→ (HP 0) → DEFEATED_BOSS (특수 이펙트 1초)
```

---

## 7. HUD·메뉴·튜토리얼·결과 화면 레이아웃

### HUD (상단 80px 고정 바)
```
[주방장 초상화 60×60] [식당HP: ❤️×20] [자원: 🌾 10/20] [명성: ⭐ 0/100]
[막 1 / 웨이브 3/5]                              [일시정지 ⏸]
```
- 배경: rgba(40,20,10,0.85), 하단 경계선 2px #FFD700
- 폰트: Noto Sans KR 700, 16px, 흰색
- 식당 HP: 하트 아이콘(Canvas arc) × HP값 표시, 5개 초과 시 숫자로 전환
- 자원 바: 너비 120px, 채움 비율 = 현재/최대, 색상 #7CFC00

### 유닛 선택 팔레트 (하단 80px 고정 바)
```
[소금구이 비용:3] [고추장볶음 비용:4] [식초절임 비용:3] [꿀떡 비용:5] | [덱 카드 목록]
```
- 유닛 버튼: 80×60px, 선택 시 황금 테두리 강조
- 자원 부족 시 버튼 반투명(opacity 0.4) + 클릭 불가
- 드래그 시 고스트 이미지(opacity 0.6) 커서 위치에 표시

### 카드 드래프트 화면 (전체 오버레이)
```
[반투명 검정 배경]
[제목: "레시피 선택" 중앙 상단]
[카드 3장 가로 배열: 각 200×280px]
  카드 구성: 카드명 / 효과 설명 / 희귀도 색상 테두리
[선택 단축키 안내: 1 / 2 / 3]
```
- 카드 호버: 1.05 scale 트랜지션 (Canvas transform)
- 선택 후 0.5초 애니메이션 후 WAVE 상태로 전환

### 덱 정제 화면 (막 3 클리어 후)
```
[반투명 배경]
[제목: "덱 정제 - 카드 1장을 제거하세요"]
[현재 덱 카드 목록 (최대 10장) 그리드]
[선택한 카드 강조 표시]
[확인 버튼] [건너뛰기 버튼]
```

### 튜토리얼 오버레이 (막 1 웨이브 1)
- 3단계 순차 표시 (클릭으로 넘김)
  1. "하단 팔레트에서 유닛을 드래그해 라인에 배치하세요"
  2. "같은 라인에 짠맛+신맛 유닛을 배치하면 시너지가 발동됩니다"
  3. "식당 HP가 0이 되기 전에 모든 웨이브를 막아내세요"
- 화살표 포인터 애니메이션(Canvas arc 펄스)으로 UI 요소 강조

### 결과 화면
```
[배경: 식당 일러스트 (승리=화사, 패배=어두운 색조)]
[제목: "한 입의 성을 지켰습니다!" 또는 "문을 닫았습니다..."]
[최종 명성 점수: XXX / 100]
[최고 기록: XXX]
[통계: 격퇴 손님 수 / 발동 시너지 수 / 남은 HP]
[엔딩 텍스트: 완벽 방어 또는 부분 실패 분기]
[버튼: 재도전 | 타이틀로]
```

### 반응형 규칙
- Canvas 논리 해상도: 1280×720 고정
- CSS: `canvas { width: 100vw; height: 56.25vw; max-height: 100vh; max-width: 177.78vh; }`
- 모바일(세로): 90° 회전 안내 오버레이 표시 (innerWidth < innerHeight 감지)

---

## 8. 음악·SFX 목록과 재생 조건·볼륨 정책

### Web Audio API 사운드 생성 규칙
모든 사운드는 `AudioContext`의 `OscillatorNode` + `GainNode`로 생성한다.
외부 파일 없이 코드만으로 완전 구현한다.

### BGM (루프)
| 트랙명 | 재생 조건 | 생성 방법 | 볼륨 |
|--------|---------|---------|------|
| 타이틀 BGM | TITLE 상태 | 펜타토닉 스케일 멜로디 루프, 사각파 0.3 | 0.3 |
| 전투 BGM | WAVE 상태 | 빠른 템포 아르페지오, 삼각파 0.2 | 0.25 |
| 보스 BGM | BOSS_INTRO~보스 격퇴 | 낮은 베이스+긴장감 있는 멜로디, 톱니파 0.15 | 0.3 |
| 결과 BGM | RESULT 상태 | 승리=밝은 팡파레, 패배=단조 멜로디 | 0.3 |

### SFX
| 효과음명 | 재생 조건 | 생성 방법 | 볼륨 |
|---------|---------|---------|------|
| 유닛 배치 | 유닛 드롭 성공 | 짧은 '탁' 소리, 사각파 200Hz 0.1초 | 0.4 |
| 유닛 공격 | 유닛 공격 발동 | 속성별 다른 주파수 (짠:440, 매운:880, 신:660, 단:550Hz) | 0.3 |
| 손님 피격 | 손님 HP 감소 | 짧은 '픽' 소리, 사인파 300Hz 0.05초 | 0.2 |
| 손님 격퇴 | 손님 HP 0 | 상승 글리산도 200→600Hz 0.2초 | 0.35 |
| 시너지 발동 | 시너지 콤보 활성화 | 화음 3음 동시 재생 0.4초 | 0.5 |
| 식당 피격 | 손님 식당 도달 | 낮은 '쿵' 소리, 사인파 80Hz 0.3초 | 0.6 |
| 웨이브 클리어 | 웨이브 종료 | 밝은 3음 상승 팡파레 | 0.5 |
| 카드 선택 | 드래프트 카드 클릭 | 짧은 '딩' 소리, 사인파 880Hz 0.15초 | 0.4 |
| 보스 등장 | BOSS_INTRO 진입 | 낮은 드럼롤 0.8초 | 0.7 |

### 볼륨 정책
- 마스터 볼륨: 1.0 (조절 UI 없음, 브라우저 기본 볼륨 사용)
- BGM과 SFX는 별도 GainNode로 분리
- 탭 비활성화 시 `document.visibilitychange` 이벤트로 BGM 일시정지

---

## 9. 저장 스키마·버전 마이그레이션·오류 복구

### localStorage 스키마 (storage.js)
```javascript
const SAVE_KEY = 'oneBiteFortress_v1';
const DEFAULT_SAVE = {
  version: 1,
  bestScore: 0,
  totalGamesPlayed: 0,
  totalGuestsDefeated: 0
};
```
- 진행 중 게임 상태는 저장하지 않음 (새로고침 시 타이틀로 복귀)
- 저장 항목: 최고 명성 점수, 총 플레이 횟수, 총 격퇴 손님 수

### 버전 마이그레이션
```javascript
function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return { ...DEFAULT_SAVE };
    const data = JSON.parse(raw);
    // v1 → v2 마이그레이션 예시 (현재 v1만 존재)
    if (data.version < 1) return { ...DEFAULT_SAVE };
    return { ...DEFAULT_SAVE, ...data };
  } catch (e) {
    console.warn('저장 데이터 손상, 초기화:', e);
    localStorage.removeItem(SAVE_KEY);
    return { ...DEFAULT_SAVE };
  }
}
```

### 오류 복구
- JSON.parse 실패 시 저장 데이터 삭제 후 기본값으로 복구
- localStorage 쓰기 실패(용량 초과) 시 try-catch로 무시하고 게임 계속 진행

---

## 10. 접근성·성능 목표·브라우저 호환

### 접근성
- Canvas 요소에 `role="application"` + `aria-label="한 입의 성 게임"` 설정
- 키보드 단축키 전체 지원 (Space: 일시정지, 1/2/3: 카드 선택, Escape: 메뉴)
- 색맹 고려: 유닛 속성 구분에 색상 외 아이콘 모양도 함께 사용
- 폰트 최소 크기: 14px

### 성능 목표
- 60fps 유지 (Chrome DevTools Performance 기준)
- 메모리 누수 방지: 격퇴된 손님/파티클 객체 즉시 배열에서 제거
- Canvas clearRect 최적화: 매 프레임 전체 지우기 (dirty rect 최적화 불필요)
- 번들 크기: 200KB 이하 (이미지/오디오 파일 없으므로 달성 용이)

### 브라우저 호환
- Chrome 100+, Firefox 100+, Safari 15+, Edge 100+
- Canvas 2D API, Web Audio API, ES2020, localStorage 모두 지원 범위
- `pointer-events` API 사용 (마우스+터치 통합)
- `requestAnimationFrame` 폴리필 불필요 (모든 타겟 브라우저 지원)

---

## 11. 테스트 케이스 및 완료 조건

### 기계적으로 확인 가능한 테스트 케이스

| TC# | 테스트 항목 | 입력 | 기대 결과 | 확인 방법 |
|-----|-----------|------|---------|---------|
| TC01 | 유닛 배치 | 자원 3 보유 시 소금구이 드롭 | 자원 3 차감, 유닛 라인에 등장 | console.assert(state.resources === prev-3) |
| TC02 | 자원 부족 배치 | 자원 2 보유 시 소금구이 드롭 | 배치 거부, 에러 SFX 재생 | 유닛 배열 길이 변화 없음 확인 |
| TC03 | 시너지 발동 | 짠+신 유닛 동일 라인 배치 | 입맛 마비 시너지 활성화, 라인 손님 속도 -20% | synergy.active 플래그 true 확인 |
| TC04 | 손님 식당 도달 | 손님이 x=1200 도달 | 식당 HP -2, 피격 이펙트 재생 | state.restaurantHP === prev-2 |
| TC05 | 게임 오버 | 식당 HP 0 | GAME_OVER 상태 전환, 결과 화면 표시 | state.phase === 'GAME_OVER' |
| TC06 | 웨이브 클리어 | 웨이브 내 모든 손님 격퇴 | 자원 +3, 명성 +4, DRAFT 상태 전환 | state.resources, state.fame 값 확인 |
| TC07 | 카드 드래프트 | 드래프트 화면에서 카드 1 선택 | 덱에 카드 추가, WAVE 상태 복귀 | state.deck.length === prev+1 |
| TC08 | 덱 정제 | 막 3 클리어 후 카드 제거 | 덱 카드 -1, WAVE 상태 복귀 | state.deck.length === prev-1 |
| TC09 | 비 환경 | 막 3 진입 | 자원 생산 주기 4초로 변경, 우산 손님 등장 | environment.type === 'rain' |
| TC10 | 보스 예고 | 웨이브 20 시작 | BOSS_HINT 상태 2초 표시 후 WAVE 전환 | 힌트 텍스트 Canvas에 렌더링 확인 |
| TC11 | 약점 상성 | 짠 유닛이 단맛추구 손님 공격 | 데미지 ×1.5 적용 | guest.hp 감소량 = 5×1.5=7.5 반올림 8 |
| TC12 | 최고 점수 저장 | 게임 클리어 후 결과 화면 | localStorage에 bestScore 저장 | localStorage.getItem('oneBiteFortress_v1') 파싱 확인 |
| TC13 | 반응형 | 브라우저 창 축소 | Canvas 비율 유지, 레이아웃 깨짐 없음 | 시각 확인 |
| TC14 | 60fps 유지 | 손님 20명+파티클 40개 동시 | 프레임 드롭 없음 | Chrome DevTools FPS 60 확인 |
| TC15 | 재도전 | 결과 화면에서 재도전 클릭 | 모든 상태 초기화, 막 1 웨이브 1 시작 | state.wave === 1, state.act === 1 |

---

## 12. 로컬 실행·프로덕션 빌드·배포 절차

### 로컬 실행
```bash
# Python 3 내장 서버 (ES Modules는 file:// 프로토콜 불가)
cd one-bite-fortress
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```
또는
```bash
# Node.js npx serve
npx serve . -p 8080
```

### 프로덕션 빌드
- 번들러 불필요 (ES Modules 네이티브 사용)
- 최적화: HTML/JS 주석 제거 (선택사항, 수동 또는 terser CLI)
```bash
npx terser src/main.js -o dist/main.min.js --compress --mangle
```

### 배포 절차 (GitHub Pages 기준)
```bash
git init
git add .
git commit -m "initial: One Bite Fortress v1.0"
git remote add origin https://github.com/USERNAME/one-bite-fortress.git
git push -u origin main
# GitHub 저장소 Settings → Pages → Source: main branch / root
# 배포 URL: https://USERNAME.github.io/one-bite-fortress/
```

### 검증 명령 (배포 후)
```bash
# Lighthouse CI로 성능 점수 확인
npx lighthouse https://USERNAME.github.io/one-bite-fortress/ --output json | grep '"score"'
# 목표: Performance 80+, Accessibility 90+
```

---

## 13. 구현 시 주의사항 및 금지 사항 재확인

1. **모든 수치는 constants.js에 집중 관리**한다. 하드코딩 금지.
2. **상태 전환은 transitionTo() 함수만 사용**한다. 직접 state.phase 대입 금지.
3. **파티클 배열은 매 프레임 life <= 0인 항목을 filter로 제거**한다. 메모리 누수 방지.
4. **Web Audio AudioContext는 사용자 제스처(클릭) 이후에만 생성**한다. 자동재생 정책 준수.
5. **Canvas 텍스트 렌더링 시 ctx.font 설정 후 반드시 ctx.fillStyle 재설정**한다.
6. **드래프트/정제 화면 진입 시 웨이브 업데이트 루프를 일시정지**한다. 입력 컨텍스트 충돌 방지.
7. **보스 예고 힌트는 BOSS_HINT 상태에서만 표시**하고, 웨이브 진행 중 힌트 UI 렌더링 금지.
8. **모바일 세로 모드 감지 시 게임 루프를 일시정지**하고 회전 안내 오버레이를 표시한다.
