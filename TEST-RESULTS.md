# TEST-RESULTS.md — 아키텍트 제로

실행: `node --test game/test/engine.test.mjs` · 결과 **22/22 PASS, 0 FAIL**
브라우저 검증: `game/src/validate.js` (headless Chrome) **7/7 PASS, console error 0, 404 0**

## 단위 테스트 (엔진 로직 — 효과 전후 실제 수치 검증)

| TC ID | 입력 | 기대 | 실제 | 판정 | 근거 |
|---|---|---|---|---|---|
| TC-01 | 막 1→5 진행 | grid 4×4,6×6,6×6,8×6,8×8 | 동일 | PASS | startAct/ACTS |
| TC-02 | setTechDebt(-5),(250),(43) | 0,100,43 (클램프) | 0,100,43 | PASS | setter 클램프 |
| TC-03 | cache 배치 후 동일칸 재배치 | 점유·중복차단 | ok/차단 | PASS | placeModule/canPlace |
| TC-04 | 4×4 밖·DB 3열 배치 | 거부 | 거부 | PASS | inBounds/absCells |
| TC-05 | 고립 배치 vs 연결 배치 | 고립 부채↑, 연결 부채↓ | 6>3 | PASS | evaluateConnections |
| TC-06 | 부채 72, 요구無, 턴 종료 | 정확히 +3 =75 | 75 | PASS | DEBT_INTEREST |
| TC-07 | 요구 충족/미충족 턴 종료 | 보상 시너지↑ / -10, streak+1 | 일치 | PASS | endTurn 요구 처리 |
| TC-08 | 3연속 미충족 | projectWarning=true | true | PASS | unmetStreak≥3 |
| TC-09 | 배치 후 undo | 배치 제거·부채 복원 | 일치 | PASS | undo/snapshot |
| TC-10 | api+cache 배치 후 p_micro_split | 시너지 +12 | +12↑ | PASS | pickPattern/computeSynergy |
| TC-11 | micro 3장 덱 + 고립 micro 모듈 | 부채 절반 | withPhil<base | PASS | activeFamilies |
| TC-12 | 부채50 + 리팩터링 카드 | 부채 35 | 35 | PASS | useRefactor |
| TC-13 | fast/stable 경로 선택 | 부채±·슬롯·카드·제약 반영 | 일치 | PASS | chooseRoadmap |
| TC-14 | 시너지85·부채15·전제약충족 | S | S | PASS | computeGrade |
| TC-15 | 시너지5·부채100·미충족 | F | F | PASS | computeGrade |
| TC-16 | F 후 restartFromAct4 (부채80) | actIndex=3, 부채40 | 3, 40 | PASS | restartFromAct4 |
| TC-17 | 장애 발생 후 재배치 | 다운·부채↑, 복구·부채↓ | 일치 | PASS | maybeSpawnIncident/relocate |
| TC-18 | 페일오버 카드 사용 | 다운 슬롯 복구 | 복구 | PASS | useFailover |
| TC-19 | 부채100 턴 종료 | 모듈3제거·60리셋 | crash, 60 | PASS | crash |
| TC-20 | L-shape 90° 회전 | 정규화 좌표 ≥0 | 일치 | PASS | rotateCells |
| TC-21 | 직렬화→역직렬화 | 상태 동일 | 일치 | PASS | serialize/deserialize |
| TC-22 | 동일 시드 두 게임 | 동일 hand | 동일 | PASS | makeRng 결정론 |

## 브라우저 자동 검증 (headless Chrome, 단일 파일 빌드 포함)

| 검증 | 기대 | 실제 | 판정 |
|---|---|---|---|
| 막 그리드 크기 시퀀스 | [[4,4],[6,6],[6,6],[8,6],[8,8]] | 동일 | PASS |
| 막5 도달·등급 산출 | 유효 등급 | grade=S | PASS |
| 유효 등급(S~F) | 참 | S | PASS |
| 시너지≥80·부채≤20 → S | S | S | PASS |
| 부채100·미충족 → F | F | F | PASS |
| 부채>70 이자 +3 | 75 | 75 | PASS |
| 저장·복원 라운드트립 | 부채40 유지 | 40 | PASS |
| console error | 0 | 0 | PASS |
| 정적 파일 404 | 0 | 0 | PASS |

## 회귀
밸런스/톤 조정(이벤트 계열 시너지·혁신 배율·클린턴 페이백) 후 전체 22 TC + 7 브라우저 검증 재실행 → 전부 PASS 유지.
