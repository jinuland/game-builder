# FINAL-REPORT-SNOW.md — 스노우 로얄 (Snow Royale)

빌드 스펙(`스노우 로얄 (Snow Royale)-build-spec.md`) 구현 보고.

## 1. 구현 기능
- **핵심 루프(G01)**: 눈더미 3초 제작(+10, 이동/피격 취소, 60초 쿨다운), 마우스 홀드 차징 포물선 투척(0.2~1.5s→100~400 사거리), 피격 판정·엄폐 50% 감소.
- **전술 오브젝트(G02)**: 설벽(비용4·내구도3·최대2·붕괴14s·65% 차단), 눈사람 미끼(비용5·최대2·NPC 시선 유인).
- **맵·눈보라 구역(G03)**: 1200×1200 top-down 2.5D, 눈더미 40개, 4지형 배경(마을/평야/호수/로비), 눈보라 구역 축소(첫 75s·이후 간격·구역 밖 초당 피해), 미니맵(M).
- **낙하·이동·엄폐(G04)**: 낙하산 하강(20s)+착지 지점 클릭 조준→1인칭 전환, WASD 이동, 마우스 조준, C 엄폐.
- **NPC AI(G05)**: 19인 자동 충원, 상태머신(PATROL/SEEK_PILE/CRAFT/ATTACK/RETREAT/ZONE_MOVE), 난이도 3단계, '[봇]' 접두사, 45s 워밍업 유예, 회색 저채도 스킨 구분.
- **HUD·결과(G06)**: HP·눈뭉치·설벽/미끼·생존수·구역 타이머·막 표시, 제작 카운트다운 원형 바, 결과 화면(순위·킬·생존)·Space 재도전.
- **오디오(G07)**: Web Audio 절차적 BGM(생존자 감소 시 템포 상승)+제작 3초 BGM 감쇄·심장박동, 착지/투척/피격/설벽/미끼/구역경고/팡파레 SFX.
- **밸런스·배포(G08)**: seed 고정 시뮬레이터, 22 단위 TC, 단일 HTML 빌드(605KB, 에셋 base64 인라인, 외부 요청 0).

## 2. 검증 결과
- 엔진 단위 테스트 **22/22 PASS** (`node --test`).
- 브라우저 self-validation **7/7 PASS, console error 0** (headless Chrome) — 20인 생성·[봇]·3초제작·투척·에셋·매치 완주.
- 소스 감사: eval/alert/TODO/외부CDN **0건**, 상태변경은 setter 경유, 엔진 로직 결정론(시드 RNG).
- 증거 스크린샷: `deliverables/screens/snow_title.png`, `snow_drop.png`, `snow_play.png`, `snow_win.png`, `snow_validate.png`, `snow_singlefile.png`.

## 3. 밸런스 (BALANCE-REPORT-SNOW.md)
`sim/simulate.mjs` 150회. **8개 passCriteria 중 3개 통과**:
- ✅ 플레이어 승률 8.0% (목표 4~8%)
- ✅ 미끼 스팸 승률 6% (≤15%)
- ✅ 무한루프/크래시 0
- ❌ 세션 길이 4.5분 (목표 8~12분)
- ❌ 구역 이탈 피해 2% (목표 15~25%)
- ❌ 설벽 스팸 top5 44% (목표 ≤25%, 초기 88%에서 대폭 완화)
- ❌ 제작 성공률 90% (목표 60~80%)
- ❌ 순위 중앙값

## 4. 재미 개선 3회 (FUN-ITERATION-LOG-SNOW.md)
- 사이클1(초보): 초반 학살 → 스폰 분산 + 온보딩 토스트.
- 사이클2(숙련): 워밍업 과보호 버그(승률 57%) → 45s로 단축, 설벽 약화 → 승률 8%, 설벽 top5 88%→44%.
- 사이클3(최적화): 세션 짧음 → 치사율 하향(피해 14)·도주 AI·구역 강화. P0 0건.

## 5. 미구현·제한 사항 (정직 보고)
- **8~15분/실시간 멀티플레이·모드(듀오/트리오/스쿼드)·랭크·시즌패스**: 스펙 contentPlan의 확장 항목. 본 구현은 스펙의 "솔로 1인+NPC 19, 단일 HTML" MVP 범위에 집중. 실시간 netcode·서버는 범위 밖 → DEFERRED.
- **밸런스 5개 지표 목표 밖**: 봇-대-봇 시뮬레이션의 근사 한계. 세션길이·구역피해·순위중앙값은 상호 상충(유능한 봇은 구역 피해를 피하고 빠르게 소거). 설벽 top5는 NPC 측면 우회 AI 부재로 44%에 머묾(후속 개선 항목). 승률(가장 중요)은 통과.
- **3D 풀 렌더링**: 스펙이 허용한 Canvas 2.5D top-down으로 구현(브라우저 성능·개발 범위 고려).

## 6. 실행
```bash
cd game/snow && python3 -m http.server 8130   # http://localhost:8130/
node game/snow/build.mjs                        # → dist/snow-royale.html (단독 실행)
node --test game/snow/test/engine.test.mjs      # 22 TC
node game/snow/sim/simulate.mjs 150             # 밸런스
```

## 정직성 선언
핵심 게임(5막 루프·8 Goal·30 REQ)은 구현되고 22 TC + 브라우저 실행 증거로 검증됐으나,
**밸런스 passCriteria 8개 중 5개가 목표 범위 밖**이고 확장 콘텐츠(멀티플레이·모드)는
DEFERRED다. 따라서 스펙의 완료 판정 계약 기준으로 **"전체 Goal 달성"으로 선언하지 않으며**,
통과 항목과 미달 항목을 위와 같이 구분해 보고한다.
