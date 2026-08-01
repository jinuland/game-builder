# TRACEABILITY-SNOW.md — 스노우 로얄 (Snow Royale)

요구사항(REQ) → 구현 → 검증 → 증거. 파일 경로는 `game/snow/` 기준.

| REQ ID | 요구사항 | 구현 위치 | TC/검증 | 증거 | 상태 |
|---|---|---|---|---|---|
| REQ-001 | 눈더미 반경 내 E 3초 제작, snowball+=10 | `src/engine.js:startCraft/finishCraft/step` | TC-001,002 | 단위테스트 | ✅ |
| REQ-002 | 제작 중 이동/피격 시 취소(획득 0) | `src/engine.js:cancelCraft`, step 충돌 | TC-001,003,022 | 단위테스트 | ✅ |
| REQ-003 | 동일 눈더미 60초 쿨다운 | `src/engine.js:finishCraft`, `config.pileCooldown` | TC-002,014 | 단위테스트 | ✅ |
| REQ-004 | 마우스 홀드 차징 0.2~1.5s → 100~400 사거리 | `src/engine.js:chargeFromMs/rangeForCharge/throwSnowball` | TC-004,005 | 단위테스트 | ✅ |
| REQ-005 | 투척 포물선 이동·사거리 만료 | `src/engine.js:step`(snowball travel) | TC-006 | 단위테스트 | ✅ |
| REQ-006 | 명중 시 피해, 엄폐 시 절반 | `src/engine.js:damage`, `config.coverDamageMul` | TC-007,008 | 단위테스트 | ✅ |
| REQ-007 | 설벽 비용/내구도/개수 제한/붕괴 | `src/engine.js:buildWall`, `config.wall` | TC-009 | 단위테스트 | ✅ |
| REQ-008 | 설벽이 투척 차단·내구도 감소 | `src/engine.js:wallBlocks/step` | TC-010 | 단위테스트 | ✅ |
| REQ-009 | 눈사람 미끼 비용/개수/유인 | `src/engine.js:placeDecoy`, NPC 타겟팅 | TC-011 | 단위테스트 | ✅ |
| REQ-010 | 눈보라 구역 축소(첫 축소·간격) | `src/engine.js:step`(zone), `config.zone` | TC-012 | 단위테스트 | ✅ |
| REQ-011 | 구역 밖 초당 피해 | `src/engine.js:step` zone dps | TC-013 | 단위테스트 | ✅ |
| REQ-012 | 최후 1인 승리 판정 | `src/engine.js:eliminate/checkWin` | TC-015,016 | 단위테스트·snow_win.png | ✅ |
| REQ-013 | 플레이어1 + NPC19 자동 충원 | `src/engine.js:spawnPlayers`, `config.match` | TC-017, validate | snow_validate.png | ✅ |
| REQ-014 | NPC 상태머신(PATROL/SEEK/CRAFT/ATTACK/RETREAT/ZONE_MOVE) | `src/engine.js:npcThink` | TC-019, 시뮬 | BALANCE-REPORT-SNOW | ✅ |
| REQ-015 | NPC 난이도 3단계 차등 | `config.npcDifficulty`, `npcThink` | 시뮬(쉬움/보통/어려움) | BALANCE-REPORT-SNOW | ✅ |
| REQ-016 | NPC '[봇]' 접두사·워밍업 유예 | `src/engine.js:spawnPlayers/npcThink` | TC-017,018 | 단위테스트 | ✅ |
| REQ-017 | 낙하산 하강→착지 지점 조준→1인칭 전환 | `src/app.js:newGame/_enterPlay/_update` | 육안 | snow_drop.png,snow_play.png | ✅ |
| REQ-018 | WASD 이동·마우스 조준·C 엄폐 | `src/app.js:_update/_bindInput` | 육안 | snow_play.png | ✅ |
| REQ-019 | HUD(HP·눈뭉치·생존수·구역타이머·막) | `src/app.js:_renderHud` | 육안 | snow_play.png | ✅ |
| REQ-020 | 제작 카운트다운 원형 바(흰→주황→빨강) | `src/app.js:_render`(craft ring) | 육안 | 코드 | ✅ |
| REQ-021 | 미니맵(M): 구역·눈더미 30m·플레이어 | `src/app.js:_minimapEl` | 육안 | snow_drop.png | ✅ |
| REQ-022 | 결과 화면(순위·킬·생존)·재도전 | `src/app.js:_showResult` | 육안 | snow_win.png | ✅ |
| REQ-023 | 5막 서사(생존자 수 기반) | `config.js:ACTS/actForSurvivors`, HUD | 육안 | snow_play.png(막1) | ✅ |
| REQ-024 | Web Audio 절차적 BGM+SFX, 제작 감쇄 | `src/audio.js` | 헤드리스 오류0 | snow_validate.png | ✅ |
| REQ-025 | 생존자 감소 시 BGM 템포 상승 | `src/audio.js:setIntensity` | 코드 | audio.js | ✅ |
| REQ-026 | 캐릭터 4종·배경 4종 에셋 생성·적용 | `assets/*.webp`, `_drawPlayer`/`_render` | 크기·404=0 | snow_play.png | ✅ |
| REQ-027 | NPC 채도 구분(회색 봇) | `config.SKINS.bot`, 에셋 | 육안 | snow_play.png | ✅ |
| REQ-028 | 결정론 시드·시뮬레이션 | `src/rng.js`, `sim/simulate.mjs` | TC-020, 100회 | BALANCE-REPORT-SNOW | ✅ |
| REQ-029 | 단일 HTML 빌드(에셋 인라인, 외부0) | `build.mjs`→`dist/snow-royale.html` | 로드 확인 | snow_singlefile.png | ✅ |
| REQ-030 | setter 통한 상태 변경, 금지패턴 0 | `src/engine.js` setters | 소스감사 grep | FINAL-REPORT-SNOW | ✅ |

## Goal ↔ 검증 매핑
- GOAL-01 핵심루프 → REQ-001~006 / TC-001~008
- GOAL-02 전술오브젝트 → REQ-007~009 / TC-009~011
- GOAL-03 맵·구역 → REQ-010,011,021 / TC-012~014
- GOAL-04 낙하·이동·엄폐 → REQ-017,018 / snow_drop·snow_play
- GOAL-05 NPC AI → REQ-013~016 / TC-017~019
- GOAL-06 HUD·결과 → REQ-019,020,022,023 / snow_play·snow_win
- GOAL-07 오디오 → REQ-024,025 / 헤드리스 오류0
- GOAL-08 밸런스·TC·배포 → REQ-028,029,030 / BALANCE-REPORT·22 TC·single-file

## 제한/미달 (정직 보고)
- 밸런스 passCriteria 8개 중 3개 통과(승률·미끼스팸·크래시), 5개 목표 밖:
  세션길이(4.5분<8), 구역이탈피해(2%<15), 설벽top5(44%>25), 제작성공률(90%>80),
  순위중앙값. 상세·사유는 BALANCE-REPORT-SNOW.md / FUN-ITERATION-LOG-SNOW.md.
