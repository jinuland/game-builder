# TEST-RESULTS-SNOW.md — 스노우 로얄

실행: `node --test game/snow/test/engine.test.mjs` → **22/22 PASS, 0 FAIL**
브라우저 self-validation(`app.__validate`, headless Chrome) → **7/7 PASS, error 0**

## 단위 테스트 (효과 전후 실제 수치 검증)

| TC ID | 입력 | 기대 | 실제 | 판정 |
|---|---|---|---|---|
| TC-001 | E 제작 후 이동 | 취소, 눈뭉치 0 | 일치 | PASS |
| TC-002 | 3.01초 경과 | 눈뭉치 +10, 쿨다운 | 10, cooldown>0 | PASS |
| TC-003 | 제작 중 피격 취소 | 획득 0 | 0 | PASS |
| TC-004 | charge 0.2s/1.5s | 사거리 min/max | 100/400 | PASS |
| TC-005 | 투척 | 눈뭉치-1, 발사체 생성 | 일치 | PASS |
| TC-006 | 발사체 이동 | 사거리 후 소멸 | 소멸 | PASS |
| TC-007 | 피격/엄폐 | 기본/절반 피해 | 14/7 | PASS |
| TC-008 | ⌈100/14⌉회 피격 | 탈락 | 탈락 | PASS |
| TC-009 | 설벽 건설 | 비용·내구도·상한 | 일치 | PASS |
| TC-010 | 설벽에 투척 | 차단·내구도 감소 | 감소 | PASS |
| TC-011 | 미끼 배치 | 비용5·최대2 | 일치 | PASS |
| TC-012 | firstShrink 경과 | 구역 축소·피해 | 축소·피해 | PASS |
| TC-013 | 구역 밖 1초 | ≈dps 피해 | 10±1 | PASS |
| TC-014 | nearestPile | 사거리·쿨다운 반영 | 일치 | PASS |
| TC-015 | 마지막 생존 | gameover·winner | 일치 | PASS |
| TC-016 | 인간 최후 | won=true | true | PASS |
| TC-017 | 20인 생성 | NPC19 [봇] | 일치 | PASS |
| TC-018 | 워밍업 중 | 인간 미타겟 | 미타겟 | PASS |
| TC-019 | 전체 시뮬 | 승자 1인 완주 | 완주 | PASS |
| TC-020 | 직렬화 왕복 | 상태 보존 | 일치 | PASS |
| TC-021 | result() | 순위·킬 | 일치 | PASS |
| TC-022 | 제작 중 이동 | 이동 불가 | 불가 | PASS |

## 브라우저 self-validation (headless Chrome)
| 검증 | 기대 | 실제 | 판정 |
|---|---|---|---|
| 20인 생성(플레이어1+NPC19) | 참 | 참 | PASS |
| NPC [봇] 접두사 | 전부 | 전부 | PASS |
| 3초 제작 +10 | 10 | 10 | PASS |
| 투척 생성 | 참 | 참 | PASS |
| 에셋 로드 | 참 | 참 | PASS |
| 매치 완주(승자 1인) | 참 | t=219s | PASS |
| console error | 0 | 0 | PASS |

## 소스 감사
eval/alert/confirm/prompt/TODO/외부CDN = **0건**. `innerHTML`은 `=''` 초기화만
(동적 삽입 없음, DOM은 createElement/textContent). 엔진 로직 `Math.random` 0건
(시드 RNG만; 렌더/오디오의 Math.random은 비결정 연출 전용).

## 밸런스 시뮬레이션
`node game/snow/sim/simulate.mjs 150` → BALANCE-REPORT-SNOW.md.
8개 passCriteria 중 3개 통과(승률 8%, 미끼스팸 6%, 크래시 0), 5개 목표 밖(세션·구역
피해·설벽top5·제작성공률·순위중앙값). 사유는 FUN-ITERATION-LOG-SNOW.md 참조.
