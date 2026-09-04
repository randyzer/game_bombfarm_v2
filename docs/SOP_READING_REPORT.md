# Bomb Farm - SOP Reading Report

## Verification Metadata

- Phase: `Phase 0 Reconciliation - Baseline + SOP Verification`
- Verification date: `2026-09-04`
- Reconciliation date: `2026-09-04`
- Project root: `/Users/randyz/work/coding/hot_words_web/gameweb/game_bombfarm_v2`
- Game name: `Bomb Farm`
- Platform: `Steam`
- Official URL: `https://store.steampowered.com/app/4892010/Bomb_Farm/?curator_clanid=4777282`
- Target language: `English`
- Target market: `US / Global`
- Domain: `bombfarmwiki.wiki`
- Project repository: `https://github.com/randyzer/game_bombfarm_v2.git`
- Deployment target: `Vercel`
- Phase boundary: Phase 0 reconciliation only. Discovery, competitor research, keyword research, site structure, page inventory planning, implementation, dependency installation, deployment, commit, and push were not performed.

## Current Project Directory

Confirmed current project directory:

```text
/Users/randyz/work/coding/hot_words_web/gameweb/game_bombfarm_v2
```

Observed top-level project contents during Phase 0:

```text
.DS_Store
.git/
CodexMasterPrompt_v2.4Final.md
CodexMasterPrompt_v2.4Final.md.error
docs/SOP_READING_REPORT.md
```

The repository is a new local Git repository. The absence of prior commits on `main` is expected and is not a blocker.

## Git Status Baseline

Initial Git status observed during the first Phase 0 run:

```text
## No commits yet on main
?? CodexMasterPrompt_v2.4Final.md
```

Current Git status observed during Phase 0 reconciliation:

```text
## No commits yet on main
?? .DS_Store
?? CodexMasterPrompt_v2.4Final.md
?? CodexMasterPrompt_v2.4Final.md.error
?? docs/SOP_READING_REPORT.md
```

Current branch: `main`

Current commit: `none - main has no commits yet; git rev-parse HEAD fails because HEAD is unborn`

Expected Phase 0-produced project document:

```text
docs/SOP_READING_REPORT.md
```

No commit or push was performed.

## Master Prompt Baseline

| Field | Value |
|---|---|
| Local file | `CodexMasterPrompt_v2.4Final.md` |
| Prompt title | `CodexMasterPrompt_v2.4Final` |
| Prompt version | `v2.4Final` |
| SOP named by prompt | `GAME_SOP_2.2` |
| SOP reference commit in prompt | `0a80e09e9e2aa658c1a34bf84590cd3e86df167d` |
| Starter named by prompt | `GAME_SITE_STARTER 2.0` |
| Starter release tag in prompt/user input | `starter-v2.0.0` |
| Starter release commit in prompt/user input | `e4964e1f640763f2c55db9f48446ac0dbe87afa3` |
| Local prompt line count | `1352` |
| Local prompt object hash | `95541c9e7d48f24c7ed4c71ff9e30394e7da253f` |
| Complete prompt structure | Sections `0` through `63`, ending with `# END` and `# CodexMasterPrompt_v2.4Final` |
| Authority role | Execution entry and phase controller; not the SOP and not the Starter architecture spec |

Master Prompt rule confirmed: keep `GAME_SOP_2.2`, `CodexMasterPrompt_v2.4Final`, `starter-v2.0.0`, and the real project as separate authority layers.

## SOP Baseline

| Field | Value |
|---|---|
| Repository | `https://github.com/randyzer/GAME_SOP_2.2.git` |
| Version | `GAME_SOP_2.2` |
| Reference commit | `0a80e09e9e2aa658c1a34bf84590cd3e86df167d` |
| Remote branch verification | `main -> 0a80e09e9e2aa658c1a34bf84590cd3e86df167d` |
| Access path | Read-only GitHub/raw GitHub and read-only remote refs |
| Clone/copy status | SOP repository was not cloned or copied into this project |
| Modification status | SOP repository was not modified |

## SOP MUST READ Files

The complete `CodexMasterPrompt_v2.4Final.md` states that Phase 0 core MUST READ includes at least the following 17 SOP files. The first Phase 0 evidence was preserved; reconciliation adds `README.md`, `docs/EXECUTION_PROMPT.md`, and `docs/PROJECT_BRIEF_TEMPLATE.md` to the formal MUST READ matrix.

| # | SOP file | Level | Read | Key Rule | Relevance |
|---:|---|---|---|---|---|
| 1 | `README.md` | Core MUST | Success | SOP 2.2 adds competitive coverage, wiki completeness, navigation discoverability, media/visual richness, player-first UX, planning-to-implementation reconciliation, and version provenance. | Establishes the complete production model and confirms later-phase gates to preserve for Bomb Farm. |
| 2 | `docs/NEW_GAME_SITE_SOP_v2.2.md` | Core MUST | Success | Public data first, discovery, competitive coverage, structure, visual identity/media plan, launch-useful coverage, QA, deploy approval, and patch maintenance. | Defines the end-to-end methodology that future phases must follow after human approval. |
| 3 | `docs/EXECUTION_PROMPT.md` | Core MUST | Success | Lists pre-implementation reading requirements, workflow outputs, coverage gates, source rules, and deployment approval requirements. | Cross-checks the Master Prompt's baseline and the SOP production sequence. |
| 4 | `docs/SOURCE_POLICY.md` | Core MUST | Success | Discovery evidence guides planning but does not prove game facts; unverified facts/numbers/rankings/drop rates must not be invented. | Controls all future Bomb Farm claims and source labels. |
| 5 | `docs/PROJECT_BRIEF_TEMPLATE.md` | Core MUST | Success | Records version provenance, game/site inputs, competitors, visual identity, media plan, goals, and constraints. | Provides the future place to record approved project inputs after Phase 0. |
| 6 | `docs/RESEARCH_SOURCES_TEMPLATE.md` | Core MUST | Success | Requires official source records, visual/media provenance, discovery evidence, unsupported evidence, and reliability labels. | Preserves evidence structure for future official/discovery work without starting it now. |
| 7 | `docs/KEYWORD_RESEARCH_TEMPLATE.md` | Core MUST | Success | Keyword research maps query to intent, cluster, player task, and target; missing metrics must not be invented. | Prevents keyword-swapped thin pages in later planning. |
| 8 | `docs/COMPETITOR_ANALYSIS_TEMPLATE.md` | Core MUST | Success | Requires competitor page-family/UX/media observations and Competitive Coverage Matrix decisions. | Supports the future Competitive Coverage Gate while keeping competitor facts non-authoritative. |
| 9 | `docs/SITE_STRUCTURE_TEMPLATE.md` | Core MUST | Success | Requires primary/secondary navigation, topic clusters, site tree, minimum wiki coverage review, partial page plan, media plan, and navigation gate. | Defines later information architecture outputs; not started in reconciliation. |
| 10 | `docs/PAGE_INVENTORY_TEMPLATE.md` | Core MUST | Success | Runtime Page Inventory is the publication SSOT; do not maintain a second competing publication ledger. | Establishes future planning/runtime reconciliation boundaries. |
| 11 | `docs/P0_P1_P2_TEMPLATE.md` | Core MUST | Success | Separate page existence, claim completeness, database completeness, and meta readiness; partial pages may publish verified scope. | Controls launch priority and prevents fake completeness. |
| 12 | `docs/FACT_DATABASE_SCHEMA.md` | Core MUST | Success | Reusable facts need provenance fields; small V1 can use JSON/typed objects; do not introduce a database too early. | Controls future fact layer and patch-sensitive data. |
| 13 | `docs/CONTENT_PAGE_TEMPLATE.md` | Core MUST | Success | Player-facing pages need clear intent, useful structure, media when available, FAQ, related pages, sources, and honest partial scope. | Controls future content page standards. |
| 14 | `docs/TECHNICAL_SEO_SPEC.md` | Core MUST | Success | Canonical, title, H1, schema, sitemap, robots, indexability, URLs, internal links, and media SEO must be intentional. | Controls later technical SEO implementation and QA. |
| 15 | `docs/QA_CHECKLIST.md` | Core MUST | Success | Build success is not enough; coverage, navigation, visual/media richness, player UX, reconciliation, performance, and launch gates can block release. | Defines future release gate evidence. |
| 16 | `docs/PATCH_MAINTENANCE_SOP.md` | Core MUST | Success | Patch changes flow through changed facts, affected entities/pages, freshness, targeted QA, and republishing. | Controls post-launch maintenance model. |
| 17 | `docs/CURRENT_STATUS_TEMPLATE.md` | Core MUST | Success | Tracks phase, blockers, coverage status, page counts, navigation/media/QA/deployment status, and next actions. | Provides future operational handoff structure. |

MUST READ result: `17/17 success`, `0 failed`, `0 unreadable`.

Additional SOP files read for baseline context during the first Phase 0 run:

- `PACKAGE_MANIFEST.json`
- `新手必读.md`

SOP docs directory verification:

- GitHub web tree at the reference commit listed the 16 `docs/` files above.
- No separate additional SOP files dedicated to `Competitive Coverage`, `Minimum Wiki Coverage`, `Navigation Coverage`, `Media Richness`, `Game Visual Identity`, `Player-facing UX`, or `Planning -> Implementation Reconciliation` were present beyond the files already listed.
- GitHub API directory listing returned HTTP 403 in the current process; the GitHub web tree and raw file reads were used as the successful read-only verification path.

## SOP Rules Captured For Later Phases

- Official/public source verification comes before factual publication.
- Discovery and competitor evidence may guide planning but cannot be sole factual authority.
- Competitive Coverage is a blocking planning gate; every meaningful family/user need needs `COVER_NOW`, `COVER_PARTIAL`, `DEFER`, or `NOT_RELEVANT`.
- Minimum Wiki Coverage must explicitly review major player families such as getting started, progression, entities, gear/items, maps/worlds, updates, tools/codes, and FAQ.
- Navigation Coverage must confirm important approved content is discoverable through navigation, Hubs, homepage, Browse All, related pages, or search.
- Missing complete data does not automatically suppress a useful verified partial page.
- Media Plan must record desired media, source, provenance, rights status, availability, and launch requirement for core pages/families.
- Game Visual Identity must derive project palette and visual direction from first-party/approved game visuals, not generic Starter identity.
- Player-facing UX must not expose internal priority, confidence, search signal, primary keyword, development/content status, editorial brief, evidence ledger, or internal workflow terminology.
- Planning -> Implementation Reconciliation must compare approved plan vs actual routes, runtime inventory, generated output, P0 pages, navigation, media, and theme.
- Human Release Gate must remain separate from automated QA; qualitative usefulness, factual reliability, media rights, visual fit, and launch worthiness are human decisions.
- Deployment Authorization Gate requires explicit user approval before deploy, production alias, domain, or DNS changes; preview/production/launched must be distinguished from evidence.
- The Runtime Page Inventory must remain the single publication SSOT.
- QA and release require human gates beyond successful builds.

No Phase 1+ research or planning decisions were made from these rules in this phase.

## Starter Baseline

| Field | Value |
|---|---|
| Repository | `https://github.com/randyzer/GAME_SITE_STARTER_BASED_gamesop2.2.git` |
| Approved release tag | `starter-v2.0.0` |
| Tag object | `f17e6b718b91f3f7bef684d8168831ad8ea8e864` |
| Tag dereferenced commit | `e4964e1f640763f2c55db9f48446ac0dbe87afa3` |
| Expected approved commit | `e4964e1f640763f2c55db9f48446ac0dbe87afa3` |
| Result | `PASS - tag dereferences to expected approved commit` |
| Access path | Read-only GitHub/raw GitHub and read-only remote refs |
| Clone/copy status | Starter repository was not cloned or copied into this project |
| Implementation status | No Starter implementation code was copied |

Starter root file listing at the approved commit was verified to include the expected technical project shape, including `src/`, `public/`, `scripts/`, `tests/`, `docs/`, `astro.config.ts`, `game.config.ts`, `package.json`, and `package-lock.json`.

## Starter Documents Read

| Starter file | Read result | Phase 0 takeaway |
|---|---|---|
| `README.md` | Success | Starter 2.0 is a static-first Astro foundation for media-rich game wikis; it keeps publication, fact, SEO, route, search, and reconciliation core while adding grouped navigation, Wiki article presentation, media, FAQ, and page-family accents. |
| `package.json` | Success | Confirms Astro 7, React 19 islands, Zod, Tailwind 4, TypeScript, Vitest, Pagefind, and Wrangler; no dependency was installed in this project. |
| `docs/STARTER_2.0_ARCHITECTURE_PROPOSAL.md` | Success | Confirms architecture authority and boundaries: SOP decides coverage and gates; Runtime Page Inventory decides publishing; Config decides navigation/home featuring; Content/Facts/Media provide page data; Presentation renders. |
| `docs/STARTER_2.0_MIGRATION.md` | Success | Confirms adoption guidance: do not replace wholesale, preserve approved project content, use grouped navigation, local media manifest, player-facing metadata cleanup, and validation/build gates. |
| `docs/STARTER_2.0_RELEASE_AUDIT.md` | Success | Confirms Phase A-D accepted, Phase E evidence recorded, deterministic tests/builds passed, and final release remained a human decision. |
| `docs/CONTENT_AND_DATA_GUIDE.md` | Success | Confirms authority boundaries among Inventory, Config, Content, Facts, Tools, Media, Theme, Presentation, and SOP/Human review. |
| `docs/QA_CHECKLIST.md` | Success | Confirms automated deterministic checks do not replace human content, factual, legal, media, and responsive release gates. |
| `docs/DEPLOYMENT.md` | Success | Confirms every deployment upload or production alias/domain/DNS change requires explicit authorization and provider-state verification. |
| `docs/PATCH_WORKFLOW.md` | Success | Confirms patch workflow around source recording, impact query, fact updates, affected prose/tool review, flags, and checks. |
| `docs/SOP_READING_REPORT.md` | Success | Historical Starter report read for provenance context; it records the earlier 2.1 reading baseline and is not used as the Bomb Farm SOP authority. |

## Starter Rules Captured For Later Phases

- Do not redesign Starter 2.0 in the real game project.
- Do not copy Starter implementation during Phase 0.
- Runtime Page Inventory is the publication SSOT.
- Media is a separate manifest keyed by `pageId`; it does not publish routes.
- Content, FAQ, media, facts, and homepage sections must not become Inventory fields.
- Feature flags remove disabled pages from routes, nav, homepage, sitemap, Pagefind, and generated HTML.
- Local images under `/public/media/` and YouTube IDs are the supported Media V1 model.
- Remote image `src`, CMS, database/ORM, theme engine, layout DSL, arbitrary media placement DSL, recursive mega menu, and automated rights judgment are non-goals.
- Build success is not release approval; human gates remain required.

## Codex With ChatGPT Use

- C2C update check: OK, no update available.
- C2C sandbox allow: OK, state directory already allowed.
- C2C workspace doctor: OK for node, sandbox, workspace, bridge, MCP, OAuth, and secure connection.
- ChatGPT workspace verification: OK; ChatGPT replied with workspace name `game_bombfarm_v2`.
- ChatGPT Phase 0 plan: Received with strict Phase 0 scope and hard-stop requirement.
- Warning: ChatGPT reported an account-connection error while attempting some connector-side workspace checks during PLAN generation. Local Codex independently verified the project directory and Git status. This is recorded as a warning, not as a Phase 0 blocker.

## Actions Not Performed

- Discovery Research: not started.
- Competitor Research: not started.
- Keyword Research: not started.
- Site Structure: not started.
- Page Inventory Planning: not started.
- Official Bomb Farm content/fact extraction beyond recording user-provided project metadata: not started.
- Starter code copying: not performed.
- Business/application code creation: not performed.
- Dependency installation: not performed.
- Build/test/dev server: not run.
- Deployment: not performed.
- Commit: not performed.
- Push: not performed.

## Missing / Unreadable Files

- SOP MUST READ missing files: `0`
- SOP MUST READ unreadable files: `0`
- Starter baseline required unreadable files: `0`
- Complete Master Prompt unreadable status: `0`

## Baseline Deviations

- SOP baseline deviation: `None` - `GAME_SOP_2.2` main resolves to `0a80e09e9e2aa658c1a34bf84590cd3e86df167d`.
- Starter baseline deviation: `None` - `starter-v2.0.0` dereferences to `e4964e1f640763f2c55db9f48446ac0dbe87afa3`.
- Master Prompt baseline deviation: `Resolved` - the first Phase 0 run used an incomplete local prompt; Phase 0 reconciliation read the complete `CodexMasterPrompt_v2.4Final.md` with `1352` lines and updated this report.
- Project Git baseline deviation: `Expected new repository state` - `main` has no commits yet.
- Project file deviation: `Untracked non-report files present` - `.DS_Store`, `CodexMasterPrompt_v2.4Final.md`, and `CodexMasterPrompt_v2.4Final.md.error` are untracked and were not modified by reconciliation.

## Blockers And Warnings

Blockers:

- None for Phase 0 reconciliation.

Warnings:

- Current repository has no commits on `main`; this is expected per project instructions and is not a blocker.
- `CodexMasterPrompt_v2.4Final.md` is currently untracked in this new repository.
- `.DS_Store` is currently untracked and was not modified.
- `CodexMasterPrompt_v2.4Final.md.error` is currently untracked and was not modified.
- `docs/SOP_READING_REPORT.md` is newly created by Phase 0 and remains untracked until a future explicit commit approval.
- ChatGPT connector-side git/status checks showed an account-connection warning during planning, although local C2C doctor and workspace verification were OK.
- Starter release audit text includes pre-final-release wording from its own Phase E process; the actual `starter-v2.0.0` tag was independently verified to dereference to the approved commit `e4964e1f640763f2c55db9f48446ac0dbe87afa3`.

## Phase 0 Decision

`PASS`

Phase 0 Baseline + SOP Verification is preserved, and Phase 0 reconciliation against the complete `CodexMasterPrompt_v2.4Final.md` is complete. Work must stop here until explicit human approval authorizes Phase 1.
