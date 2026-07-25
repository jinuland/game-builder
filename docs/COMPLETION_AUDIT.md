# GAME FORGE completion audit

Last verified: 2026-07-23 (Asia/Seoul)

This document records evidence against the full product goal. A green unit test
alone is not treated as proof for an external integration.

| Requirement | Status | Authoritative evidence |
| --- | --- | --- |
| Separate codebase; do not modify existing projects | Proven | GAME FORGE is its own Git repository at this workspace root. The sibling StoryForge tree contains no `GAME FORGE`, `game-forge`, or `Project Mnemosyne` markers. Unity output is restricted to ignored `exports/unity/`. |
| Shared model adapter for StoryForge key, direct Bedrock, local LLM, and demo | Implemented | `lib/model-adapter.ts` exposes all four providers through `runWorkshopModel`. Provider access is resolved server-side. |
| Local LLM real inference | Proven | Ollama 0.32.1 runs as a Homebrew service; `qwen3:8b` is installed. `npm run verify:local-llm` returned 3 ontology operations and 1 story beat with real usage counts. |
| Bedrock real inference with existing key | Proven | A live Claude Sonnet 4.6 request returned 8 ontology operations and 3 story beats. D1 recorded 1,820 input tokens, 3,185 output tokens, USD 0.053235 estimated cost, and 8 operations. The StoryForge-key provider separately returned 15 operations and 3 beats. |
| Structured conversational ontology proposals | Proven | Ollama structured output uses the shared JSON Schema. A live request produced valid `WorldRule`, `StoryBeat`, and relationship operations; sanitization and application tests pass. |
| Explicit approval before mutation | Proven in code and local runtime | The client keeps `pendingProposal` separate and only updates graph state in `approveProposal`. A live proposal was applied with `applyProposal`, then persisted and recovered as a canonical graph. |
| Canonical persistence and recovery | Proven | Local HTTP verification saved and recovered revision 1 with 3 canonical nodes, 1 edge, and 2 story beats. A stale revision returned HTTP 409. D1 ownership checks prevent cross-user writes. |
| Anonymous workshop recovery | Proven in production | Public visitors receive an unguessable HttpOnly, Secure, SameSite cookie and one cookie-scoped D1 session capped at 128 KB; authenticated users retain their account-scoped sessions. A production create/read cycle recovered the canonical graph and messages. The response uses the `anonymous` alias and omits owner, cookie-derived ID, and raw JSON columns. Origin `localStorage` remains a fallback. Bedrock Key and Companion token state are excluded from persistence payloads. |
| Story beats, choices, endings, and game systems | Proven | A live local request produced one `Choice`, two `Ending` nodes, two choice-to-ending edges, and two story beats. Unity generation materialized mechanic settings from ontology nodes. |
| StoryForge import | Proven | The running sibling API imported the current `디텍티브 슬라임` state with 58 nodes and 102 edges without modifying it. |
| Safe StoryForge export | Proven | Export preflighted the model, saved a timestamped backup, automatically restored the original project after an intentionally observed generation failure, then succeeded with a constrained retry. StoryForge saved `GAME FORGE · Project Mnemosyne` with 26 nodes, 35 edges, and 4 chapters. Reimport returned a canonical GAME FORGE graph with 22 supported nodes and 31 edges. The original `디텍티브 슬라임 시즌 1` and backup projects remain available. |
| Unity diagnosis and project generation | Proven | Companion detected Unity Hub and Editor 6000.5.2f1, generated 4 scenes, 2 character prefabs, ontology/system assets, runtime/editor scripts, and fixed-origin loopback transport. |
| Playable Unity build | Proven | Unity batch mode compiled the generated project, created all assets, and built `Builds/project-mnemosyne.app` (103 MB). |
| Unity AI continuation | Implemented; account consent remains external | Each project includes ontology context, generator prompts, and a consent-aware workflow. Unity 6000.5.2f1 bundles AI Inference 2.6.1 and AI Navigation 2.0.13, but Unity AI Assistant is not installed in the generated project. Installing it through the Editor AI button requires the maker's Unity account, organization permission, and credits. |
| Public demo vs private workshop | Proven | Sites access revision 2 is public. An anonymous production request returned HTTP 200 without a ChatGPT sign-in page. The provider API exposed only Safe Demo as configured; hosted private providers remained unavailable. |
| Usage/cost limits and audit | Proven | Server enforces request size, per-minute/day calls, daily tokens and estimated cost. Tests cover limit decisions. Production demo returned remaining budget; success, denial, and failure actions use distinct audit records. |
| Participant-owned Bedrock workshop | Proven | A participant can connect a short-term API Key to the authenticated loopback Companion and use `companion-bedrock` without sending the Key to Sites or browser storage. The Key is process-memory-only; health responses expose status but not the value. A mock Bedrock integration test proves the Authorization boundary, structured proposal, usage, and local budget result. |
| Unity AI participant onboarding | Implemented | The workshop presents participant-owned Unity ID, terms, organization permission/Credits, and data-choice steps. Generated projects include an AI handoff, while GAME FORGE never accepts account or legal choices for participants. |
| Security and deployment | Proven | Public traffic receives only Safe Demo. Participant Keys stay in the loopback Companion. Companion binds to loopback with origin/token/private-network/output-root controls. Production local-workshop trust is disabled unless explicitly opted in, preventing a forged localhost Host from unlocking private APIs, and SIWC names are decoded only with the official encoding header. Ten tests and lint pass. Production v13 is public on environment revision 2. The exposed organizer Bedrock Secret was removed from Sites and cleared from `.env.local`; it is no longer used by GAME FORGE. |

## Owner security follow-up

Revoke the previously exposed organizer Bedrock Key in AWS. This is an
AWS-account hygiene action rather than a GAME FORGE runtime dependency: the
product no longer stores or uses that credential.

All model, ontology, StoryForge, persistence, and Unity build gates now have live
evidence. Unity account, terms, organization permission, Credits, and data
choices are intentionally participant-owned workshop steps rather than a
central deployment gate.
