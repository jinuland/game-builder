# TRACEABILITY.md — 아키텍트 제로: 설계자의 계단

요구사항(REQ) → 구현 파일/함수 → 테스트(TC)/검증 방법 → 증거 매핑. 모든 파일 경로는 `game/` 기준.

| REQ ID | 요구사항 | 구현 파일·함수 | TC ID / 검증 | 증거 | 상태 |
|---|---|---|---|---|---|
| REQ-001 | N×M 그리드(4×4/6×6/8×6/8×8) 렌더 | `src/render.js:GridRenderer.draw/geom`, `src/content.js:ACTS` | TC-01, validate "그리드 크기" | scene_play1full.png, validate_final.png | ✅ |
| REQ-002 | 모듈 드래그/클릭 배치 엔진 | `src/engine.js:placeModule/canPlace/absCells`, `src/app.js:_onClick` | TC-03, TC-04 | scene_play1full.png | ✅ |
| REQ-003 | 5종+ 모듈, 슬롯 점유 1~4칸 | `src/content.js:MODULES` (7종) | TC-03, TC-20 | scene_incident.png (MQ 2칸 등) | ✅ |
| REQ-004 | 연결 규칙 검증(인접 레이어) | `src/engine.js:evaluateConnections/neighborsOf/layerDistance/cellLayer` | TC-05 | 단위테스트 | ✅ |
| REQ-005 | 기술 부채 실시간 계산 (<100ms) | `src/engine.js:recompute` (동기, ms 미만) | TC-05, TC-11 | 단위테스트 | ✅ |
| REQ-006 | 부채 70 초과 시 +3 이자/턴 | `src/engine.js:endTurn` (DEBT_INTEREST) | TC-06, validate "부채>70 이자" | validate_final.png | ✅ |
| REQ-007 | 부채 70 초과 시 배경 주황 | `src/render.js:debtTint`, `src/app.js:_debtColor` | 육안(온도계/배경) | 온도계 그라데이션 코드 | ✅ |
| REQ-008 | 막 1~5 그리드 크기 전환 | `src/engine.js:startAct/nextAct`, `src/content.js:ACTS` | TC-01 | validate_final.png | ✅ |
| REQ-009 | 막별 브리핑 텍스트/컷씬 | `src/app.js:_enterBriefing`, `ACTS[].briefing` | 육안 | scene_briefing.png | ✅ |
| REQ-010 | S~F 등급 + 5종 엔딩 | `src/engine.js:computeGrade/finalizeAudit/ENDINGS` | TC-14, TC-15 | scene_endingS.png | ✅ |
| REQ-011 | 시너지≥80·부채≤20 → S | `src/engine.js:computeGrade` | TC-14, validate | scene_endingS.png(88/12) | ✅ |
| REQ-012 | 부채 100 → F | `src/engine.js:computeGrade` | TC-15, validate | validate_final.png | ✅ |
| REQ-013 | 마우스+터치 통합 입력 | `src/app.js:_bindInput` (mouse/touch 이벤트) | 육안/헤드리스 클릭 | 코드 리뷰 | ✅ |
| REQ-014 | R키 90° 회전 | `src/app.js:_rotate`, `src/engine.js:rotateCells` | TC-20 | 단위테스트 | ✅ |
| REQ-015 | Ctrl+Z 1회 취소(부채 복원) | `src/app.js:_undo`, `src/engine.js:undo/snapshot` | TC-09 | 단위테스트 | ✅ |
| REQ-016 | Space 턴 종료 + 부채 예측 팝업 | `src/app.js:_confirmEndTurn`, `src/engine.js:predictTurnEndDebt` | 육안 toast | 코드 리뷰 | ✅ |
| REQ-017 | 배치 가능=초록/불가=붉은 X 실시간 | `src/render.js:draw`(hover), `src/app.js:_updateHover` | 육안 | render.js hover 블록 | ✅ |
| REQ-018 | 캐릭터 4종 생성·후처리(256×384 webp ≤100KB) | `game/assets/char_*.webp` (bedrock-image + cwebp) | 파일 크기 검사 | scene_briefing.png(아키) | ✅ |
| REQ-019 | 캐릭터 씬 렌더(브리핑/드래프트/이벤트) | `src/app.js:_enterBriefing/_enterDraft`, CHAR_FILES | 육안, 404 0건 | scene_briefing.png | ✅ |
| REQ-020 | 배경 4종 생성(1280×720 webp ≤200KB) | `game/assets/bg_*.webp` | 파일 크기 검사 | scene_play1full.png | ✅ |
| REQ-021 | 상태별 배경 교체(정상/위기/감사) | `src/app.js:_updateBackground/BG_BY_ACT` | 육안 | scene_incident.png, scene_endingS.png | ✅ |
| REQ-022 | 좌측 카드 패널(요구/덱) | `src/app.js:_renderLeft` | 육안 | scene_play1full.png | ✅ |
| REQ-023 | 우측 상태 패널(부채/시너지/미니맵) | `src/app.js:_renderRight` | 육안 | scene_play1full.png | ✅ |
| REQ-024 | 패턴 3장 중 1장 드래프트 + 즉시 재계산 | `src/app.js:_enterDraft/_pickPattern`, `src/engine.js:offerPatterns/pickPattern` | TC-10 | 단위테스트 | ✅ |
| REQ-025 | 기술 부채 온도계(그라데이션) | `src/app.js:_renderRight/_debtColor`, `src/style.css:.az-therm` | 육안 | scene_incident.png | ✅ |
| REQ-026 | 아키텍처 철학(같은 계열 3장 부채 절반) | `src/engine.js:activeFamilies/recompute` | TC-11 | 단위테스트 | ✅ |
| REQ-027 | Web Audio BGM 3트랙 크로스페이드 | `src/audio.js:playTrack` | 헤드리스 오류 0 | validate_final.png | ✅ |
| REQ-028 | 9종 효과음, 사용자 제스처 후 재생 | `src/audio.js:place/cardAdd/…/crash`, `init()` on gesture | 자동재생 정책 오류 0 | validate_final.png | ✅ |
| REQ-029 | 장애 발생 시 BGM 긴장 전환 + 글리치 | `src/app.js:endTurn`(playTrack tension), `audio.incident` | 육안/코드 | scene_incident.png | ✅ |
| REQ-030 | localStorage 저장/복원(막 첫 턴 재개) | `src/app.js:save/loadSave`, `src/engine.js:serialize/deserialize` | TC-21, validate | validate_final.png | ✅ |
| REQ-031 | 장애 이벤트 다운/3턴/연쇄/+20 | `src/engine.js:maybeSpawnIncident/endTurn` | TC-17 | 단위테스트 | ✅ |
| REQ-032 | 모듈 재배치/페일오버 복구 + 위기 극복 보너스 | `src/engine.js:relocateModule/useFailover/resolveIncidentSuccess` | TC-17, TC-18 | 단위테스트 | ✅ |
| REQ-033 | 크래시(부채100→모듈3제거/60리셋) | `src/engine.js:crash` | TC-19 | 단위테스트 | ✅ |
| REQ-034 | 로드맵 3경로(부채/슬롯/제약) | `src/engine.js:chooseRoadmap`, `ROADMAP_PATHS` | TC-13 | scene 흐름 | ✅ |
| REQ-035 | 보스 4제약(보안/확장/비용/유지보수) | `src/engine.js:evaluateConstraints`, `CONSTRAINTS` | TC-14, TC-15 | scene_endingS.png | ✅ |
| REQ-036 | F등급 → 막4 재시작(부채 50% 유지) | `src/engine.js:restartFromAct4` | TC-16 | 단위테스트 | ✅ |
| REQ-037 | 결정론 시드 재현성 | `src/rng.js:makeRng`, `src/engine.js:createGame` | TC-22 | 단위테스트 | ✅ |
| REQ-038 | 밸런스 시뮬레이션 seed=42 1000회 | `game/sim/simulate.mjs` | passCriteria 7/7 | BALANCE-REPORT.md | ✅ |
| REQ-039 | 단일 HTML 빌드(에셋 인라인) | `game/build.mjs` → `dist/architect-zero.html` | 헤드리스 로드 | singlefile.png | ✅ |
| REQ-040 | 프로젝트 경고(3회 미충족 등급 상한 A) | `src/engine.js:endTurn/computeGrade` | TC-08 | 단위테스트 | ✅ |
| REQ-041 | 챌린지 모드(클리어 후 해금, 랜덤 시드) | `src/app.js:newGame(challenge)/_showEnding` | 코드/흐름 | app.js challenge | ✅ |
| REQ-042 | 반응형(모바일 패널 스택) | `src/style.css @media(max-width:820px)` | 코드 | style.css | ✅ |
| REQ-043 | setter 통한 상태 변경만 허용 | `src/engine.js:setTechDebt/addTechDebt/setSynergy/addSynergy` | sourceAudit grep | FINAL-REPORT.md | ✅ |
| REQ-044 | 금지 패턴 0건(eval/innerHTML/alert 등) | 전 소스 | sourceAudit grep | FINAL-REPORT.md | ✅ |

## Goal ↔ REQ ↔ TC 매핑
- **G01** 그리드 배치 핵심 루프 → REQ-001~007 / TC-01,03,04,05,06,11
- **G02** 5막 흐름·등급 → REQ-008~012,040 / TC-01,08,14,15,16
- **G03** 입력·피드백 → REQ-013~017 / TC-09,20
- **G04** 캐릭터 에셋 → REQ-018,019 / 파일크기·scene_briefing
- **G05** 배경 에셋 → REQ-020,021 / 파일크기·scene_incident
- **G06** UI·카드 → REQ-022~026 / TC-10,11
- **G07** 오디오 → REQ-027~029 / 헤드리스 오류 0
- **G08** 저장·QA·배포 → REQ-030,038,039 / TC-21, BALANCE-REPORT, singlefile
