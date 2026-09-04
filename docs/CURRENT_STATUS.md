# Current Status

## Project

- Game: `Bomb Farm`
- Repository: `git@github.com:randyzer/game_bombfarm_v2.git`
- Deployment: `Vercel`
- Domain: `bombfarmwiki.wiki`
- Last updated: `2026-09-04`

## Version Provenance

- SOP: `GAME_SOP_2.2`
- SOP commit/tag: `0a80e09e9e2aa658c1a34bf84590cd3e86df167d`
- Starter: `starter-v2.0.0`
- Starter commit/tag: `e4964e1f640763f2c55db9f48446ac0dbe87afa3`
- Master Prompt: `CodexMasterPrompt_v2.4Final`
- Master Prompt baseline: `CodexMasterPrompt_v2.4Final.md`, `1352` lines, hash `95541c9e7d48f24c7ed4c71ff9e30394e7da253f`

## Current Phase

- [x] Opportunity validation
- [x] Official source scan
- [x] Discovery Research
- [x] Competitor analysis
- [x] Competitive Coverage Gate
- [ ] Fact layer
- [ ] Entity map
- [ ] Player journey
- [x] Keyword research
- [x] Site structure
- [x] Minimum Wiki Coverage Gate
- [x] Navigation Coverage Gate
- [x] Runtime Page Inventory
- [x] P0/P1/P2 planning
- [x] Visual Identity
- [x] Media Plan
- [x] P0 writing
- [x] Phase 3 Content / Data / Media Integration
- [x] Implementation
- [x] Plan/implementation reconciliation
- [x] Phase 4 QA and planning/implementation reconciliation
- [ ] Deployment
- [ ] Post-launch expansion
- [ ] Patch maintenance

## Completed

- Phase 0 passed human review.
- Phase 1 C2C PLAN received from ChatGPT and followed as a planning/review constraint.
- Official Steam source verification completed for store metadata, announcements, achievements, screenshots/trailer provenance, reviews sample, and Steam Community evidence.
- Discovery research completed within available tool limits.
- Keyword research completed without invented volume metrics.
- Competitor analysis completed for user-named competitors.
- Competitive Coverage Matrix completed.
- Minimum Wiki Coverage review completed.
- Proposed site structure, navigation coverage, media plan, game visual identity plan, planning inventory, and P0/P1/P2 roadmap completed.
- Human Planning Gate passed with minor reconciliation.
- Phase 1 reconciliation completed for page counts, canonical runtime pageType values, and Steam Market scope.
- Starter 2.0 implementation baseline installed in the current project directory only.
- Runtime inventory implemented with `34` entries: `19` P0 public/published pages, `10` P1 draft/private entries, and `5` P2 draft/private entries.
- P0 guide content implemented for `8` `/guides/` contentRef pages.
- Static wiki route family implemented for approved non-content P0 pages under `/heroes/`, `/updates/`, `/tools/`, and `/faq/`.
- Fixed noindex pages implemented separately for `/about/`, `/privacy/`, `/terms/`, and `/404.html` without changing the approved 34-entry business inventory.
- Phase 3 C2C PLAN received from ChatGPT and followed as a content/data/media integration constraint.
- Phase 3 official-source freshness checks completed for `codes`, `latest update`, and `Steam Market` safety scope.
- Phase 3 expanded all `8` authored P0 guide content files and added player-facing static copy for the `9` non-MDX P0 wiki pages under `/heroes/`, `/updates/`, `/tools/`, and `/faq/`.
- Phase 3 connected homepage Quick Facts and FAQ content while keeping the media manifest empty.
- Phase 3 removed public exposure of internal `Confidence` and Phase 1 inventory wording from static wiki pages.
- Phase 3 Player-facing Content Polish completed after Human Review REVISE: `8` MDX guides and `9` static P0 wiki pages were rewritten to reduce internal editorial language while preserving factual boundaries.
- Static P0 copy was split by page family into `home`, `heroes`, `updates`, `tools`, and `faq` files behind the existing `p0-static-wiki-copy.ts` aggregator.
- Local Phase 3 QA passed: `npm run validate`, `npm test`, `npm run check`, `npm run build`, and `git diff --check`.
- Phase 4 reconciled all `34` planning rows against runtime `pageId`, route, canonical `pageType`, and phase; all rows now match exactly.
- Phase 4 verified all `19` P0 routes in generated HTML, sitemap, Pagefind, and the internal-link graph with no orphaned route.
- Phase 4 audited titles, descriptions, one-H1 behavior, canonicals, breadcrumbs, structured data, robots/noindex, and player-facing metadata.
- Phase 4 responsive QA covered `390x844`, `768x1024`, and `1440x1000` across homepage, guide, hub, heroes, updates, tools, and FAQ views.
- A desktop navigation overflow at the `1024px` boundary was fixed and covered by a focused test.
- Phase 4 C2C PLAN was received from ChatGPT and used to cross-check the final reconciliation/report requirements.

## In Progress

- Phase 4 QA and the release freshness gate are complete. Waiting for Human Release Gate review.

## Blockers

- None identified by the completed Phase 4 QA and release freshness gate.

## Warnings / Known Unknowns

- Reddit first-party/logged backend is unavailable in current process; no Reddit conclusion was made.
- Twitter/X CLI is unauthenticated; candidate official social account is not verified.
- Official website, official public wiki, official Discord, and first-party official YouTube are not verified.
- Media reuse rights are not approved. Official Steam media has provenance only, not reuse permission.
- Steam-hosted trailer is verified but not directly compatible with Starter Media V1 YouTube trailer placement.
- Phase 3 validation/check/test/build ran on Node `v22.22.0` through `nvm` in bash. The default zsh process still resolves `/usr/local/bin/node` as `v22.16.0`, so future commands should explicitly use `.nvmrc` before release checks.
- The September 4, 2026 freshness check found official KENDO code details in the September 2 Steam announcement, expiring September 8, 2026 at `11:59 PM UTC-3`; recheck immediately before release and after expiration.
- Exact hero roster, item stats, drop rates, skill tree nodes/costs, gem rules, world details, and detailed market restrictions need further verification.
- Steam Market Guide / safety content is P0; market value, economy, profit, and price-tracking product content remains out of V1 and deferred.
- Tier/meta/review/market-value content is deferred because it requires methodology, testing, current evidence, and human approval.
- Current repository has no commits on `main`; this is expected for this new repo.
- The September 4, 2026 release-gate recheck classified codes, updates, latest update, Steam Market, and FAQ as `CURRENT` through the approved Chrome path. No public fact changed.

## Coverage Status

- Major families identified: Getting Started, How to Play, Controls, Heroes, Gear/Ritual, Abilities, Progression, Worlds, Skill Tree, Achievements, Market, Codes, Updates, FAQ, Tools, Troubleshooting, Tier/Meta, Review.
- COVER_NOW: Getting Started, How to Play/Core Loop, Controls, Progression Guide, Achievements, Market Guide, Updates, FAQ.
- COVER_PARTIAL: Heroes, Gear/Items, Abilities, Worlds/Maps, Skill Tree, Codes, Tools, Troubleshooting/Performance merged into FAQ, System Requirements, Controls, Steam Market, and Updates.
- DEFER: Tier/Builds, Review, Market Values/Profit, price tracking, exact drop rates, named hero rankings.
- Material deferrals approved: Human Planning Gate passed with minor reconciliation; market value/economy/price tracking remains deferred.

## Page Counts

- Planned: `34`
- P0: `19`
- P1: `10`
- P2: `5`
- Live local build: `19` business pages plus `4` fixed noindex pages.
- Indexed local build: `19`
- Phase 3 readiness: all `19` P0 public/published inventory pages are content-ready locally.
- Freshness: `codes`, `updates`, `updates/latest`, `steam-market`, and `faq` are `CURRENT` as of the September 4, 2026 release-gate recheck.

## Navigation Status

- Approved primary nav: Guides, Heroes, Gear & Ritual, Progression, Updates, Tools.
- Implemented primary nav: Guides, Heroes, Gear & Ritual, Progression, Updates, Tools.
- Approved secondary nav: Getting Started, How to Play, Controls, Skill Tree, Steam Market, Codes, Hero Roles, Energy Rotation, Achievements, System Requirements.
- Deferred nav items not exposed: House Capsules, Browse All, Squad Planner, Market Values, tier/meta/review pages.
- Actual nav: Implemented from `game.config.ts` using runtime Page IDs.
- Reconciliation status: Runtime inventory, planning inventory, config navigation, rendered desktop/mobile navigation, homepage, sitemap/indexability, related links, and generated output reconciled.

## Visual / Media Status

- Visual Identity: Implemented as a source-aware dark mine UI direction with restrained gold/cyan accents. No copied Steam media assets are included.
- Homepage media: No game media integrated until rights approval.
- Major P0 page media: official screenshots are candidates; rights approval required.
- Media manifest: `src/data/media/media.json` remains empty (`assets: []`, `pages: []`).
- Known media gaps: no verified first-party YouTube ID; no approved local assets; no rights approval; no in-game UI capture workflow yet.

## QA Status

- Content: all `19` P0 public pages reviewed and upgraded for player usefulness inside approved P0 scope.
- Competitive coverage: Matrix complete and awaiting human approval.
- Navigation: Implemented from approved Page IDs.
- SEO: Runtime titles, descriptions, canonical URLs, robots metadata, sitemap, and Pagefind indexing implemented.
- Visual identity: Implemented without unapproved media reuse.
- Visual richness: Implemented through theme/layout only; no unapproved copied media.
- Media richness: Media manifest remains empty for production until rights approval.
- Player-facing UX: Implemented first-screen wiki experience, navigation, source sections, related links, FAQ, Quick Facts, and static guide pages without internal planning metadata.
- Reconciliation: Plan and implementation reconciled locally.
- Validation: `npm run validate` passed on Node `v22.22.0` with `19` enabled pages and `8` content entries.
- Check: `npm run check` passed on Node `v22.22.0` with `0` Astro errors, `0` warnings, `0` hints, and `31` Vitest files / `324` tests passed.
- Test: `npm test` passed on Node `v22.22.0` with `31` files / `324` tests passed.
- Build: `npm run build` passed on Node `v22.22.0`; output reconciliation matched `19` inventory routes; Pagefind indexed `19` pages and `955` words after freshness evidence updates; build audit passed for `23` pages.
- Responsive: representative public pages passed at `390x844`, `768x1024`, and `1440x1000` without horizontal overflow after the navigation containment fix.
- Phase 4 report: `docs/PHASE_4_QA_RECONCILIATION_REPORT.md` records `PASS` and `READY FOR HUMAN RELEASE GATE REVIEW`.
- Whitespace: `git diff --check` passed.
- Performance: Build audit passed Starter budgets.
- Launch: Not authorized.

## Deployment Status

- Production URL: Not deployed.
- Last deploy: None.
- Actual provider target: Vercel planned only.
- Sitemap: Implemented in local build for indexable inventory routes.
- Robots: Implemented in local build for `bombfarmwiki.wiki`.
- Search Console: Not configured.

## Next 3 Actions

1. Complete Human Release Gate review of the updated Phase 4 report.
2. Preserve the September 8 KENDO expiry warning and recheck again if release occurs after that deadline.
3. Deploy only after separate explicit authorization.

## Phase Boundary

`HARD STOP`: Phase 4 and the release freshness gate pass. Do not deploy, commit, or push. Await Human Release Gate review and separate explicit deployment authorization.
