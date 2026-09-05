# Bomb Farm V2.1 Visual and Media Enrichment Report

## 1. Baseline

- Baseline and production Release Candidate: `3dd9ec3281bec0419f80b993300d7ca6672718b9`
- Audit input: `docs/VISUAL_MEDIA_GAP_REPORT.md`
- Implementation date: 2026-09-05
- Public scope reviewed: 19 approved P0 pages
- Result: **PASS — READY FOR HUMAN VISUAL REVIEW**

This work is limited to project-level visual and media enrichment. It does not change the approved routes, inventory authority, publication phases, navigation information architecture, content facts, feature flags, dependencies, deployment, domains, or DNS.

## 2. Files Changed

### Project code and configuration

- `public/favicon.svg`
- `scripts/audit-build.ts`
- `scripts/media-validation.ts`
- `scripts/validate-site.ts`
- `src/components/StaticWikiPage.astro`
- `src/components/home/GameHero.astro`
- `src/components/home/PageCollection.astro`
- `src/components/media/ScreenshotGallery.astro`
- `src/components/media/VideoEmbed.astro`
- `src/data/media/catalog.ts`
- `src/data/media/media.json`
- `src/data/schemas/media.ts`
- `src/layouts/BaseLayout.astro`
- `src/pages/guides/[...slug].astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `src/styles/theme.css`

### Tests

- `tests/bombfarm-project.test.ts`
- `tests/homepage.test.ts`
- `tests/media-audit.test.ts`
- `tests/media-rendering.test.ts`
- `tests/media.test.ts`

### Documentation

- `docs/VISUAL_MEDIA_GAP_REPORT.md` is retained as the approved audit input.
- `docs/V2_1_VISUAL_MEDIA_ENRICHMENT_REPORT.md` records this implementation and verification.

### Local media directories

- `public/media/home/`
- `public/media/heroes/`
- `public/media/systems/`
- `public/media/icons/achievements/`
- `public/media/video/`

No business-content MDX file, page-inventory row, route definition, navigation configuration, feature flag, dependency file, or deployment file changed.

## 3. Media Assets Added

The production media set contains 22 manifest assets backed by 23 local files:

- 7 official Steam images: one battle screen, one key-art image, Map, Ritual drop, Forge, Ritual hero reveal, and House/capsule screen.
- 10 official Steam achievement icons.
- 4 original SVG reference diagrams: skill tree, Market safety, hero roles, and energy rotation.
- 1 official Steam trailer stored as local MP4 with a separate local WebP poster.

All raster images are WebP. The screenshots are 1920 x 1080, the trailer is 1280 x 720 H.264/AAC with a duration of 96.8 seconds, and the local trailer is approximately 14 MB. The video uses `preload="metadata"` and a poster to avoid eager full-download behavior.

## 4. Source and Provenance

| Local asset group | Source type | Provenance | Intended use |
| --- | --- | --- | --- |
| `home/battle-overview.webp` | Official Steam screenshot | [Steam CDN screenshot](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/907f4c81a582429b606a4e5e05d75323172e778f/ss_907f4c81a582429b606a4e5e05d75323172e778f.1920x1080.jpg) | Homepage, guides hub, onboarding, gameplay, and controls |
| `home/bomb-farm-key-art.webp` | Official Steam header art | [Steam CDN header](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/e734040683a5bc6f4cb4d323dfd0c026b64c6d95/header.jpg) | Updates hub and latest update |
| `systems/world-map.webp` | Official Steam screenshot | [Steam CDN screenshot](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/3afbdbe7b600d6994fd384efef7e08dbad749760/ss_3afbdbe7b600d6994fd384efef7e08dbad749760.1920x1080.jpg) | Homepage, getting started, and progression |
| `systems/ritual-sealed-drop.webp` | Official Steam screenshot | [Steam CDN screenshot](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/d2dc164a29f5231157aad200e628b0513a8122c0/ss_d2dc164a29f5231157aad200e628b0513a8122c0.1920x1080.jpg) | How to play and gear/Ritual |
| `systems/forge-equipment.webp` | Official Steam screenshot | [Steam CDN screenshot](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/a9a5d3c6d1fc9cf504c6fad27ab7fc770c29ac44/ss_a9a5d3c6d1fc9cf504c6fad27ab7fc770c29ac44.1920x1080.jpg) | Homepage, how to play, gear/Ritual, and Market context |
| `systems/ritual-heroes.webp` | Official Steam screenshot | [Steam CDN screenshot](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/bfb44de1ea5d6eab9bcfd585de7d0af6c4edc6d1/ss_bfb44de1ea5d6eab9bcfd585de7d0af6c4edc6d1.1920x1080.jpg) | Gear/Ritual and heroes hub |
| `heroes/house-capsules.webp` | Official Steam screenshot | [Steam CDN screenshot](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/c7706d1da92172b7d1f5510dbaece0dfb04e16c3/ss_c7706d1da92172b7d1f5510dbaece0dfb04e16c3.1920x1080.jpg) | Homepage, getting started, heroes, roles, and energy rotation |
| `video/official-trailer.mp4` and poster | Official Steam trailer | [Bomb Farm Steam store](https://store.steampowered.com/app/4892010/Bomb_Farm/), movie ID `257376181` | Homepage and how to play |
| `icons/achievements/*.webp` | Official Steam achievement icons | [Steam achievements](https://steamcommunity.com/stats/4892010/achievements) | Achievements checklist |
| `systems/skill-tree-overview.svg` | Original wiki diagram | Facts from the [Bomb Farm Steam store](https://store.steampowered.com/app/4892010/Bomb_Farm/) | Skill-tree orientation |
| `systems/market-safety.svg` | Original wiki diagram | Official Steam flow and existing verified safety content | Steam Market checklist |
| `heroes/role-summary.svg` | Original wiki diagram | Four official role labels from the Steam description | Hero-role orientation |
| `heroes/energy-rotation.svg` | Original wiki diagram | Official three-team rotation description | Energy-rotation explanation |

Every manifest entry records a source URL, meaningful alt text, a caption, a local path, and page placement. Original diagrams explicitly say they are wiki diagrams rather than in-game UI.

## 5. Page-to-Media Mapping

| P0 route | Media decision | Placement |
| --- | --- | --- |
| `/` | Battle hero, Map/Forge/House gallery, official trailer | Hero and dedicated media section |
| `/guides/` | Battle screenshot | Hub visual anchor |
| `/guides/getting-started/` | Battle hero, Map and House gallery | Header and inline gallery |
| `/guides/how-to-play/` | Battle hero, Ritual/Forge gallery, official trailer | Header, inline gallery, and video |
| `/guides/controls/` | Battle screenshot | Header; provides visible game tabs and interface context |
| `/guides/progression/` | Map hero and battle screenshot | Header and inline context |
| `/guides/gear-and-ritual/` | Ritual hero, Forge and hero-reveal gallery | Header and inline gallery |
| `/guides/skill-tree/` | Original skill-tree diagram | Header visual explanation |
| `/guides/steam-market/` | Original safety diagram and Forge context | Header and inline context |
| `/guides/codes/` | No media needed | Freshness-sensitive answer remains direct and compact |
| `/heroes/` | House/capsule hero and Ritual hero-reveal image | Hub anchor and gallery |
| `/heroes/roles/` | Original role diagram and House screenshot | Header and inline context |
| `/heroes/energy-rotation/` | Original rotation diagram and House screenshot | Header and inline context |
| `/updates/` | Official key art | Hub visual anchor |
| `/updates/latest/` | Official key art | Update header |
| `/tools/` | No media needed | Compact utility index remains scan-first |
| `/tools/achievements/` | Ten official achievement icons | Achievement gallery |
| `/tools/system-requirements/` | No media needed | Hardware reference remains scan-first |
| `/faq/` | No media needed | Answer density and navigation remain the priority |

The four intentional no-media decisions prevent decorative or irrelevant visual filler. All 19 P0 routes were reviewed even when no asset was assigned.

## 6. Homepage Before and After

### Before

- The first viewport was text-led and retained the generic Starter hero structure.
- A large empty or low-information area delayed game recognition.
- Verified game facts appeared later than the primary introduction.
- Repeated card treatments made the page read like a component gallery.
- No trailer or gameplay media established the game's visual identity.

### After

- The first viewport opens with a real Bomb Farm battle screen and the exact H1 `Bomb Farm Wiki`.
- `Start Here`, `Play on Steam`, and `Browse the Wiki` are direct hero actions.
- Five compact fact groups surface platform, release date, price model, campaign frame, and hero structure before the fold on desktop.
- The system/category navigator follows the hero, then a Map/Forge/House overview and local official trailer.
- Featured guides, important systems, latest update, FAQ, Browse All, related pages, and sources retain the approved information hierarchy with denser presentation.

## 7. Theme Changes

- Shifted the background from a cool template-dark treatment toward warm wood-black and iron surfaces.
- Replaced broad orange dominance with aged bronze/gold emphasis, restrained crystal cyan, and limited ember accents.
- Strengthened high-value media frames while keeping prose separators quieter.
- Added an original bomb favicon and a CSS-rendered bomb brand mark without importing unrelated game assets.
- Removed the generic graph-paper grid, radial glow, and coordinate rail.
- Retained strong contrast, visible focus states, and warm off-white body text.

## 8. Typography Changes

- Replaced the dominant editorial serif display treatment with condensed, heavy system display faces.
- Reduced H1 size and empty title-area height across homepage, hubs, articles, and mobile layouts.
- Kept body text in a readable system sans-serif stack.
- Normalized letter spacing to zero and preserved compact uppercase labels through weight and scale instead of compressed tracking.
- Verified that long titles wrap within 360px, 390px, 768px, and 1440px layouts without overlap.

## 9. Starter Residue Removed

- Removed the coordinate rail from the base layout.
- Removed the generic radial glow and graph-grid background motifs.
- Removed `Find your route. Play with a plan.` from the homepage hero.
- Removed the rotated paper-like brand-mark treatment.
- Replaced the oversized editorial hero and pale Start Here block with an integrated media-led game hero.
- Reduced generic repeated arrow/card presentation without changing link destinations or page hierarchy.

## 10. Card and Layout Changes

- Category cards remain because they provide the primary portal taxonomy.
- Featured Guides, Important Systems, Latest Update, and Browse All now use compact rows or index lists.
- Quick Facts, FAQ, guide index rows, and Sources retain their useful framed treatment.
- Static wiki pages and the guides hub now consume optional media from the existing catalog through narrow project-level integrations.
- No arbitrary slot registry, media DSL, CMS, database, page builder, or new routing layer was introduced.
- Achievement media receives a compact icon-grid treatment instead of screenshot-size cards.

## 11. Video Additions

- Added the official Steam trailer to the homepage and `/guides/how-to-play/`.
- Extended the existing `video` asset shape only enough to support a safe local MP4/WebM path and optional local poster while preserving the YouTube no-cookie path.
- The rendered player uses native controls, `playsinline`, `preload="metadata"`, a 16:9 frame, an accessible label, caption, and source link.
- Browser verification reported `readyState: 4`, duration `96.8`, `controls: true`, the expected local source and poster, and no media error.

## 12. Responsive QA

The following pages were visually inspected at 1440px, 390px, 360px, and 768px:

- Homepage
- Guides hub
- Getting Started
- Heroes hub
- Progression
- Gear and Ritual
- Latest Update
- Steam Market
- FAQ

| Viewport | Result |
| --- | --- |
| 1440px desktop | PASS: strong first-screen game recognition, desktop navigation visible, media correctly framed, no overflow or overlap |
| 390px mobile | PASS: media-first homepage hero, mobile menu visible, titles and facts wrap correctly, no horizontal overflow or broken media |
| 360px critical mobile | PASS: all nine required pages fit the narrow viewport; headings, dates, captions, and media remain legible |
| 768px critical tablet | PASS: mobile navigation breakpoint behaves consistently; two-column facts and media keep stable dimensions |

DOM checks on the inspected routes confirmed one H1, `scrollWidth === clientWidth`, the correct desktop/mobile navigation state, and no broken image dimensions. Contact sheets were reviewed for crop, density, CTA placement, caption fit, and page-family differentiation.

## 13. SEO and Accessibility Checks

- Existing titles, descriptions, canonical generation, Open Graph URLs, JSON-LD, robots, sitemap, Pagefind scope, and internal-link behavior remain unchanged.
- Generated build audit passed all 23 built pages and retained exactly 19 Pagefind-indexed P0 pages.
- Every P0 page still renders exactly one H1.
- The media schema requires meaningful alt text, captions, source URLs, and safe local paths.
- Screenshot and diagram components preserve explicit width/height or aspect-ratio constraints to limit layout shift.
- Below-fold images remain lazy-loaded; the trailer preloads metadata only.
- Native video controls are keyboard-accessible and were exposed as buttons and sliders in the browser accessibility tree.
- Browser console inspection found no runtime errors on the homepage.
- Local build output contains no client JavaScript reference and no remote image source.

## 14. Automated Test and Build Results

Executed under the repository's Node environment:

| Command | Result |
| --- | --- |
| `npm run validate` | PASS: 19 enabled pages, 8 content entries |
| `npm test` | PASS: 31 files, 327 tests |
| `npm run check` | PASS: 0 errors, 0 warnings, 0 hints; 31 files and 327 tests |
| `npm run build` | PASS: 23 pages built; 19 inventory routes reconciled; 19 Pagefind pages; build audit passed |
| `git diff --check` | PASS |

Build metrics remained within the existing audit limits: largest HTML 24,654 bytes, CSS reference 61,360 bytes, client JS reference 0 bytes. Astro emitted only the existing expected empty-content-collection warnings for disabled `meta` and `news` collections.

## 15. Remaining Visual Gaps

- Controls reuses the broad battle/interface screenshot because no dedicated operator-captured control image was approved or necessary for this pass.
- Skill Tree uses a clearly labeled original diagram rather than pretending to show unavailable in-game skill values.
- Steam Market uses a safety diagram plus Forge context; it does not fabricate live prices or an unsupported Market UI state.
- Latest Update uses official Bomb Farm key art because no distinct update-specific image was selected from the verified announcement source.
- Codes, Tools hub, System Requirements, and FAQ intentionally remain without decorative media.
- The local official trailer is approximately 14 MB. Metadata-only preload keeps initial impact limited, but a future human performance review could consider a smaller encoded derivative without changing content.

These are transparent quality tradeoffs, not blockers for human visual review.

## 16. Scope-Drift Check

**PASS.** The implementation preserves:

- 34 planned inventory rows.
- 19 P0 public pages, 10 P1 private pages, and 5 P2 private pages.
- All approved routes, page IDs, phases, coverage, indexability, sitemap scope, Pagefind scope, and navigation information architecture.
- Existing factual/source boundaries and unsupported-fact exclusions.
- Canonical, Open Graph, JSON-LD, robots, sitemap, and internal-link behavior.
- Existing dependency baseline and Astro/static architecture.
- Existing feature flags.

No hero roster, stats, drop rates, market values, tier/meta claims, or new game facts were added. No competitor implementation was copied. The old `game-bombfarm` project, production deployment, domain, and DNS were not touched. No commit or push was performed.

## Reusable Learnings

| Classification | Learning |
| --- | --- |
| Bomb Farm-specific | A real battle screen establishes the game faster than logo art alone because it simultaneously shows mining, squads, resources, the grid, and navigation. |
| Bomb Farm-specific | Map, House, Ritual, and Forge screens form a compact visual vocabulary for progression, heroes, drops, and upgrades without requiring unsupported hero or economy data. |
| Candidate GAME_SOP improvement | Require a page-by-page media decision table, including an explicit `no media needed` result, so teams do not add decorative filler merely to satisfy a count. |
| Candidate GAME_SOP improvement | Record provenance, local path, alt text, caption, placement, and source type in the media authority whenever a human rights-policy override is granted. |
| Candidate Starter improvement | The existing manifest can support local video with a small schema/catalog/rendering extension; this is a useful optional capability for game wikis that have official trailers. |
| Candidate Starter improvement | Static pages and hub pages benefit from the same narrow hero/gallery consumer used by MDX pages, without introducing arbitrary content slots. |
| Candidate Master Prompt improvement | Require screenshot review at one desktop, one standard mobile, one narrow mobile, and the relevant navigation breakpoint for visual-enrichment releases. |
| Candidate Master Prompt improvement | Ask implementers to distinguish verified explanatory diagrams from in-game UI in both captions and provenance records. |

No GAME_SOP, Starter, or Master Prompt file was modified in this task.

## Human Review Gate

**PASS — READY FOR HUMAN VISUAL REVIEW**

Human review should focus on game-recognition strength, the warmer bronze/cyan identity, mobile first-screen balance, and whether the 14 MB local official trailer is acceptable for this release.
