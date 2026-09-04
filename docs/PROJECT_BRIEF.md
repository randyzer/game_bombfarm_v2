# Bomb Farm Project Brief

## Version Provenance

- SOP repository: `https://github.com/randyzer/GAME_SOP_2.2.git`
- SOP version/tag/commit: `GAME_SOP_2.2` / `0a80e09e9e2aa658c1a34bf84590cd3e86df167d`
- Starter repository: `https://github.com/randyzer/GAME_SITE_STARTER_BASED_gamesop2.2.git`
- Starter version/tag/commit: `starter-v2.0.0` / `e4964e1f640763f2c55db9f48446ac0dbe87afa3`
- Master Prompt version: `CodexMasterPrompt_v2.4Final`
- Master Prompt file: `CodexMasterPrompt_v2.4Final.md`, `1352` lines, object hash `95541c9e7d48f24c7ed4c71ff9e30394e7da253f`
- Project repository: `https://github.com/randyzer/game_bombfarm_v2.git`
- Phase 1 checked date: `2026-09-04`

## Game

- Game name: `Bomb Farm`
- Platform: Steam, Windows
- Steam app ID: `4892010`
- Release date: `Aug 28, 2026`
- Developer: `Stream On`
- Publisher: `Stream On`
- Official store URL: `https://store.steampowered.com/app/4892010/Bomb_Farm/`
- Official website: `Unavailable in Steam appdetails; not verified`
- Official wiki: `Unverified`
- Official Discord: `Unverified`
- Official YouTube: `Unverified`; Steam-hosted store trailer is verified, but no first-party YouTube channel was verified in Phase 1
- Official social: `Unverified`; current Twitter/X backend is unauthenticated

Verified Steam positioning:

- Free-to-play idle RPG where a bomber squad gathers resources.
- Core systems named by the Steam store: heroes in four roles, 20 hero abilities from level 1 to 10, three teams, gear drops, sealed drops, forge upgrades from +0 to +15, duplicate fusion/stars, a large account skill tree, Steam Community Market trading, five worlds, five difficulties, and 600 stages.
- Steam categories include single-player, Steam achievements, in-app purchases, Steam Cloud, and Family Sharing.
- Steam lists 21 achievements.
- Steam discloses pre-made AI-assisted art assets and says no live AI generation occurs during play.

## Site

- Domain: `bombfarmwiki.wiki`
- Deployment platform: Vercel
- Primary language: English
- Additional languages: Not in launch scope unless explicitly approved later. Steam supports English, Portuguese - Brazil, Spanish - Spain, and Simplified Chinese interface/subtitles, but this project target language is English.
- Site type: independent fan wiki / guides / database planning project
- Brand working name: `Bomb Farm Wiki`
- Primary CTA: `Play Bomb Farm on Steam`

## Competitive Position

- Primary competitors:
  - `https://bomb-farm.wiki`
  - `https://bombfarm.wiki`
  - `https://bombfarmdb.wiki/`
- Intended differentiation:
  - More explicit source labeling and patch-sensitive warnings than competitor pages.
  - Stronger beginner path from install/account link to first progression decisions.
  - Better split between verified facts, observed community questions, partial pages, and deferred meta claims.
  - Wiki coverage that combines guide hubs, reference pages, update tracking, and player-facing UX without exposing internal planning metadata.
- Minimum competitive coverage target:
  - Cover launch-useful beginner, systems, progression, market/codes, achievements, updates, and FAQ intents.
  - Publish partial pages where player value exists but entity/database completeness is not yet verified.
- Important page families we must not omit without review:
  - Getting Started, How to Play, Controls, Heroes, Hero Roles, Energy Rotation, Gear/Ritual, Skill Tree, Progression/Worlds, Steam Market, Codes/Friend Codes, Achievements, Updates, System Requirements, FAQ.
- Known competitor strengths:
  - `bombfarm.wiki` has broad navigation and many guide family links.
  - `bombfarmdb.wiki` emphasizes databases for abilities, equipment, worlds, gems, skill tree, achievements, guides, search, and Portuguese support.
  - `bomb-farm.wiki` is simple and beginner-oriented.
- Known competitor weaknesses:
  - Some competitor factual depth appears to rely on observed or self-published data that requires independent verification before reuse.
  - Media rights are not transferable to this project.
  - Tier/meta claims need methodology and patch stability before publication.

## Game Visual Identity

Use first-party visuals as the primary brand reference.

### Official visual references

| Source | URL | What it supports | Last checked |
|---|---|---|---|
| Store / key art | `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/e734040683a5bc6f4cb4d323dfd0c026b64c6d95/header.jpg?t=1787954440` | Logo, mine setting, bombs, gold, blue crystals, pixel characters | `2026-09-04` |
| Official website | Not listed in Steam appdetails | No project website provenance verified | `2026-09-04` |
| Logo | Steam header/key art | Chunky stone logo with bomb and gold lettering | `2026-09-04` |
| Screenshots | Six Steam screenshots from appdetails | Compact overlay UI, battle grid, ritual screen, dark framed panels, mountainous/cloud background | `2026-09-04` |
| Trailer imagery | Steam store movie ID `257376181` | Verified Steam-hosted trailer presence; not Starter-compatible YouTube media by default | `2026-09-04` |

### Derived direction

- Visual status: `provisional`, derived from Steam first-party visuals and requires Human Planning Gate approval.
- Light / dark balance: dark UI surfaces over brighter scenic backgrounds.
- Dominant hue: charcoal, mine brown, warm amber/gold.
- Accent hue: bright crystal cyan/blue, ember orange, small red UI accents.
- Saturation: high accents on otherwise dark, textured surfaces.
- Contrast: strong, game-like contrast; readable panels should avoid over-busy background texture.
- Atmosphere: pixel-art mining, treasure, bombs, fantasy-idle progression, compact overlay client.

### Implementation palette

- Background: deep charcoal / cave black.
- Surface: dark brown-black panel with subtle stone/metal feel.
- Primary: treasure gold.
- Accent: crystal cyan.
- Secondary accent: ember orange.
- Text: warm off-white.
- Muted text: soft gray-beige.
- Border: aged brass / dark gold.

These are planning values only. Do not create a theme engine or page-specific palette system.

## Visual Richness Direction

- Homepage visual treatment: first viewport should make Bomb Farm immediately recognizable through official/approved key art or a faithful layout using mine, bomb, crystal, and squad motifs.
- Guide-page visual treatment: use system-specific screenshots or simple diagrams only when rights and provenance are approved.
- Hub visual treatment: each hub should have a player-task framing and a small visual cue connected to the relevant in-game room/system.
- Entity/database visual treatment: use icons/art only after rights and source status are approved; otherwise rely on structured tables and text.
- Page-family accent approach: consistent dark mine UI with gold/cyan accents; avoid generic Starter-only styling.
- Internal pages must visually remain connected to the game: Yes.

## Media Plan

- Homepage hero/key art: official Steam key art is relevant, but reuse rights need Human Gate approval before copying into `public/media/`.
- Official trailer/video: Steam store trailer exists; no first-party YouTube ID verified, so Starter Media V1 cannot embed it as a YouTube trailer without later approval/alternative.
- Screenshot source: Steam official screenshots observed via appdetails. Rights approval required before local use.
- P0 guide image expectation: Getting Started, How to Play, Gear/Ritual, Skill Tree, Progression, Steam Market, and Codes pages would benefit from UI screenshots.
- Entity art expectation: defer named hero/item art until verified source and rights approval.
- Rights/usage constraints: Steam page states game content and artwork are protected; provenance does not equal reuse permission.
- Media fallback when no approved asset exists: use no competitor assets; use text-first guide structure and possibly original diagrams in later implementation after approval.

## Goals

Primary:

- [x] SEO traffic
- [x] Wiki/database
- [x] Guides
- [x] Tools
- [x] Market safety guide
- [ ] Market value / economy / price-tracking product
- [ ] Tier/meta
- [x] Community utility

Secondary:

- Build a planning foundation that can move into Starter 2.0 implementation after Human Planning Gate approval.
- Keep patch-sensitive claims easy to revisit after official updates.
- Treat Steam Market Guide / safety content as P0, while market value, economy, profit, and price-tracking product work remains out of V1 and deferred.

## Constraints

- Time-to-launch: Not specified.
- V1 page target: 19 P0 pages, 10 P1 expansions, 5 P2/deferred/meta items, 34 total planning entries.
- Must-not-copy competitors: Yes. Competitor pages inform coverage and UX gaps only.
- Must-not-publish speculative data: Yes. Discovery evidence is not game fact.
- Media/legal constraints: Official assets require rights approval before copying or embedding; competitor media cannot be reused.
- Technical constraints: No implementation in Phase 1; do not copy Starter code, install dependencies, deploy, commit, or push.
- Other notes: Main branch has no commits yet; this is expected and not a blocker.
