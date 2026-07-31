# REQUIREMENTS-TRACE.md — 원자 단위 REQ 체크리스트

강제 실행 순서 2단계 산출물. 상세 매핑은 [TRACEABILITY.md](./TRACEABILITY.md) 참조.

| REQ | 체크 | 구현 | 검증 | 증거 |
|---|---|---|---|---|
| REQ-001 그리드 렌더 4크기 | ☑ | render.js/content.js | TC-01 | scene_play1full.png |
| REQ-002 배치 엔진 | ☑ | engine.placeModule | TC-03,04 | scene_play1full.png |
| REQ-003 모듈 7종·1~4칸 | ☑ | content.MODULES | TC-03,20 | scene_incident.png |
| REQ-004 연결 규칙 | ☑ | engine.evaluateConnections | TC-05 | 단위테스트 |
| REQ-005 부채 실시간 | ☑ | engine.recompute | TC-05,11 | 단위테스트 |
| REQ-006 이자 +3 | ☑ | engine.endTurn | TC-06 | validate_final.png |
| REQ-007 부채 배경색 | ☑ | render.debtTint | 육안 | 온도계 |
| REQ-008 막 크기 전환 | ☑ | engine.startAct | TC-01 | validate_final.png |
| REQ-009 브리핑 컷씬 | ☑ | app._enterBriefing | 육안 | scene_briefing.png |
| REQ-010 S~F·엔딩 | ☑ | engine.computeGrade | TC-14,15 | scene_endingS.png |
| REQ-011 S조건 | ☑ | engine.computeGrade | TC-14 | scene_endingS.png |
| REQ-012 F조건 | ☑ | engine.computeGrade | TC-15 | validate_final.png |
| REQ-013 마우스+터치 | ☑ | app._bindInput | 헤드리스 | 코드 |
| REQ-014 R 회전 | ☑ | app._rotate | TC-20 | 단위테스트 |
| REQ-015 Ctrl+Z | ☑ | app._undo/engine.undo | TC-09 | 단위테스트 |
| REQ-016 Space+예측 | ☑ | app._confirmEndTurn | 육안 | 코드 |
| REQ-017 초록/붉은X | ☑ | render.draw hover | 육안 | 코드 |
| REQ-018 캐릭터 에셋 | ☑ | assets/char_*.webp | 크기검사 | scene_briefing.png |
| REQ-019 캐릭터 렌더 | ☑ | app._enterBriefing | 404=0 | scene_briefing.png |
| REQ-020 배경 에셋 | ☑ | assets/bg_*.webp | 크기검사 | scene_play1full.png |
| REQ-021 배경 교체 | ☑ | app._updateBackground | 육안 | scene_incident/endingS |
| REQ-022 좌 패널 | ☑ | app._renderLeft | 육안 | scene_play1full.png |
| REQ-023 우 패널 | ☑ | app._renderRight | 육안 | scene_play1full.png |
| REQ-024 드래프트 3→1 | ☑ | engine.offerPatterns | TC-10 | 단위테스트 |
| REQ-025 온도계 | ☑ | app._debtColor | 육안 | scene_incident.png |
| REQ-026 철학 보너스 | ☑ | engine.activeFamilies | TC-11 | 단위테스트 |
| REQ-027 BGM 3트랙 | ☑ | audio.playTrack | 오류=0 | validate_final.png |
| REQ-028 SFX 9종 | ☑ | audio.* | 정책오류=0 | validate_final.png |
| REQ-029 장애 BGM 전환 | ☑ | app.endTurn | 육안 | scene_incident.png |
| REQ-030 저장/복원 | ☑ | app.save/engine.serialize | TC-21 | validate_final.png |
| REQ-031 장애 이벤트 | ☑ | engine.maybeSpawnIncident | TC-17 | 단위테스트 |
| REQ-032 재배치/페일오버 | ☑ | engine.relocateModule | TC-17,18 | 단위테스트 |
| REQ-033 크래시 | ☑ | engine.crash | TC-19 | 단위테스트 |
| REQ-034 로드맵 3경로 | ☑ | engine.chooseRoadmap | TC-13 | 코드/흐름 |
| REQ-035 보스 4제약 | ☑ | engine.evaluateConstraints | TC-14,15 | scene_endingS.png |
| REQ-036 F→막4 50% | ☑ | engine.restartFromAct4 | TC-16 | 단위테스트 |
| REQ-037 시드 재현 | ☑ | rng.makeRng | TC-22 | 단위테스트 |
| REQ-038 시뮬 1000회 | ☑ | sim/simulate.mjs | 7/7 | BALANCE-REPORT.md |
| REQ-039 단일 HTML | ☑ | build.mjs | 로드확인 | singlefile.png |
| REQ-040 프로젝트 경고 | ☑ | engine.endTurn | TC-08 | 단위테스트 |
| REQ-041 챌린지 모드 | ☑ | app.newGame(challenge) | 흐름 | scene_endingS.png(버튼) |
| REQ-042 반응형 | ☑ | style.css @media | 코드 | style.css |
| REQ-043 setter 전용 | ☑ | engine setters | grep 감사 | FINAL-REPORT |
| REQ-044 금지패턴 0 | ☑ | 전 소스 | grep 감사 | FINAL-REPORT |

**총 44개 REQ — 44개 구현·검증 완료, DEFERRED 0.**
