# Competitor Analysis

## Scope

- Snapshot date: `2026-09-04`
- Search/discovery method: user-provided competitor URLs, Web/SERP discovery, Steam Community/Store sources, and `yt-dlp` YouTube search for player-intent signals.
- Competitors inspected:
  - `https://bomb-farm.wiki`
  - `https://bombfarm.wiki`
  - `https://bombfarmdb.wiki/`
- Pages/sitemaps sampled: homepage and key hubs/pages for guides, heroes, tier list, abilities, equipment, worlds, gems, skill tree, achievements, and updates where available.
- Known access limitations: no traffic/revenue/search-volume data; competitor claims are not factual authority; competitor images/assets are not reusable.

## Competitor Summary

| Competitor | URL | Observed scale | Main model | Strongest page families | Main weakness |
|---|---|---:|---|---|---|
| `bomb-farm.wiki` | `https://bomb-farm.wiki/` | Small | Lightweight fan guide | Getting started, heroes/gear, updates, FAQ, Steam CTA | Limited database depth and navigation breadth. |
| `bombfarm.wiki` | `https://bombfarm.wiki/` | Medium | Broad guide/wiki portal | Guides, heroes, tier list, review, updates, tools, homepage browse/FAQ | Some meta/detail pages need independent verification before mirroring their approach. |
| `bombfarmdb.wiki` | `https://bombfarmdb.wiki/` | Medium-large | Database plus guides | Abilities, equipment, worlds, gems, skill tree, achievements, search, guides | Database claims need source verification; media/rights not transferable. |

Do not invent traffic, revenue, or search volume.

## Per-Competitor Structure

### Competitor: bomb-farm.wiki

- URL: `https://bomb-farm.wiki/`
- Observed launch timing: current crawl on `2026-09-04`; footer says 2026.
- Main content type: independent fan guide.
- Main navigation: Guides, Heroes & gear, Updates, FAQ, Play on Steam.
- Secondary/dropdown navigation: not clearly observed beyond guide categories.
- Sitemap/page count if directly observed: guides page says 9 guides across 7 categories.

```text
/
├── guides
│   ├── getting started
│   ├── heroes and teams
│   ├── gear and rituals
│   ├── worlds and drops
│   ├── skill tree
│   ├── steam market
│   └── updates
├── heroes-gear
├── updates
├── faq
├── system requirements
└── troubleshooting
```

Strong coverage:

- Simple first-session framing.
- Guides grouped by major player task.
- Clear independent fan wiki disclosure.

Weak / thin coverage:

- Less evidence of deep entity/database pages.
- Limited navigation depth compared with other competitors.

Tools / Database / Entity Depth:

- Not a database-first competitor in observed pages.

Media / Visual UX:

- Uses image/video-oriented sections on homepage.
- Competitor media cannot be copied.

### Competitor: bombfarm.wiki

- URL: `https://bombfarm.wiki/`
- Observed launch timing: pages show September 2026 context and last-updated dates around `2026-08-29` / `2026-09-03`.
- Main content type: broad fan wiki and guide portal.
- Main navigation: Home, Guides, Heroes, Tier List, Review, Updates, Tools, Play on Steam.
- Secondary/dropdown navigation: Getting Started, How to Play, Controls, Skill Tree, Gear and Ritual, Equipment Sets, Steam Market, Progression, Bonus Code, Hero Roles, Fusion and Rarity, Energy Rotation, House Capsules, Early-Game Tiers, Squad Tiers, System Requirements, Squad Planner, Achievements, Community.
- Sitemap/page count if directly observed: not directly counted; homepage exposes at least 25 linked content/navigation entries.

```text
/
├── guides/
│   ├── getting-started/
│   ├── how-to-play/
│   ├── controls/
│   ├── skill-tree/
│   ├── gear-and-ritual/
│   ├── equipment-sets/
│   ├── steam-market/
│   ├── progression/
│   └── bonus-code/
├── heroes/
│   ├── roles/
│   ├── fusion-and-rarity/
│   ├── energy-rotation/
│   └── house-capsules/
├── tier-list/
│   ├── early-game-tiers/
│   └── squad-tiers/
├── review/
├── updates/
│   ├── launch-notes/
│   ├── marketplace-open/
│   ├── seasons/
│   └── daily-rewards/
└── tools/
    ├── system-requirements/
    ├── squad-planner/
    ├── achievements/
    └── community/
```

Strong coverage:

- Strong nav and homepage discovery.
- Many player-task pages.
- Browse everything and FAQ patterns.
- Good separation of guides, heroes, meta, updates, and tools.

Weak / thin coverage:

- Tier/meta pages need independent methodology before this project publishes comparable claims.
- Some detailed claims should be verified against official/in-game sources before use.

Tools / Database / Entity Depth:

- Has a squad planner and achievements/tools section, but not as database-heavy as `bombfarmdb.wiki`.

Media / Visual UX:

- Image-rich homepage/hubs.
- Visuals are useful as competitive UX evidence only, not reusable assets.

### Competitor: bombfarmdb.wiki

- URL: `https://bombfarmdb.wiki/`
- Observed launch timing: pages show `Updated August 30, 2026`.
- Main content type: database and guides.
- Main navigation: Abilities, Equipment, Worlds, Guides, Search, Portuguese (BR), Gems, Skill Tree, Achievements.
- Secondary/dropdown navigation: Database and Learn footer groups.
- Sitemap/page count if directly observed: homepage claims current ability, equipment, world, gem, hero, skill tree, and achievement references; exact page count not independently counted.

```text
/
├── abilities/
├── equipment/
├── worlds/
├── guides/
│   ├── getting-started/
│   ├── equipment-forging/
│   ├── rituals/
│   ├── skill-tree-priorities/
│   ├── world-progression/
│   └── steam-market-safety/
├── gems/
├── skill-tree/
├── achievements/
├── heroes/
└── search
```

Strong coverage:

- Database-first positioning.
- Pages for abilities, gear sets, worlds, gems, skill tree, achievements.
- Search and language toggle increase usability.

Weak / thin coverage:

- Exact database completeness and provenance need independent verification.
- Some details are not official unless traced to game UI or official sources.

Tools / Database / Entity Depth:

- Strongest database competitor among named sites.

Media / Visual UX:

- Uses entity images and icon-like visuals.
- Media rights are not transferable to this project.

## Competitive Coverage Matrix

| Page Family / Player Task | Competitor Evidence | Player/Search Intent Evidence | Our Decision | Partial Coverage Possible? | Missing Data | Cost of Deferral | Human Approval Needed? |
|---|---|---|---|---|---|---|---|
| Getting Started | All three competitors expose beginner/guide entry points. | Steam reviews mention unclear onboarding; YouTube titles emphasize starting right. | COVER_NOW | Yes | Exact first-run UI screenshots and account-link flow details. | High: new players leave confused. | Yes |
| How to Play / Core Loop | `bombfarm.wiki` and `bombfarmdb.wiki` have how-to/play guides. | Store names idle squad, resources, teams, gear, skill tree, Market. | COVER_NOW | Yes | Detailed UI labels and exact sequence. | High: core intent. | Yes |
| Controls / Client UI | `bombfarm.wiki` has controls. | Steam reviews mention window/UI responsiveness and confusion. | COVER_NOW | Yes | Complete control map. | Medium-high: UX pain is visible. | Yes |
| Heroes / Characters | `bombfarm.wiki` has hero hub; DB competitor has heroes reference. | Store verifies four roles, 20 abilities, three teams. | COVER_PARTIAL | Yes | Named roster, stats, art rights. | High if absent; partial roles page is enough for launch. | Yes |
| Gear / Items | All competitors cover gear/ritual/equipment. | Store and achievements verify gear upgrades, +15, level 300 gear; announcements mention chests and rarity frames. | COVER_PARTIAL | Yes | Full equipment sets, item stats, drop rules. | High: core progression system. | Yes |
| Abilities / Skills | DB competitor has abilities; others have skill tree/hero ability coverage. | Store verifies 20 abilities level 1-10. | COVER_PARTIAL | Yes | Full ability names/effects and balance details. | Medium: overview can launch, DB later. | Yes |
| Progression | Competitors cover progression/worlds. | Store verifies 5 worlds, 5 difficulties, 600 stages; achievements verify difficulty clears. | COVER_NOW | Yes | World names/order and detailed unlock requirements need verification. | High: important player roadmap. | Yes |
| Worlds / Maps / Stages | DB competitor has worlds page. | Store and achievements support macro structure. | COVER_PARTIAL | Yes | Full world names, stage rewards, map keys. | Medium if overview exists. | Yes |
| Skill Tree / Major System | All competitors expose skill tree. | Store verifies large account tree; announcements mention skills and gameplay fixes. | COVER_PARTIAL | Yes | Node names, costs, max levels. | High if missing because it is central in official copy. | Yes |
| Achievements | DB competitor has achievements; `bombfarm.wiki` has tool page. | Steam achievements page provides official list. | COVER_NOW | Yes | Achievement percentages optional and dynamic. | Medium: useful evergreen checklist. | Yes |
| Market / Trading | Competitors and YouTube emphasize market/profit. | Store verifies Steam Community Market trading; announcements discuss Market fixes/access. | COVER_NOW | Yes | Eligibility edge cases and current restrictions. | High: differentiator and risk area. | Yes |
| Codes / Friend Codes | `bombfarm.wiki` has bonus code; Steam discussions full of friend codes. | Search/discussions show code redemption questions; announcements mention code letters and KENDO. | COVER_PARTIAL | Yes | Active code list and expiration recheck. | High if absent during launch window. | Yes |
| Updates / Patch Notes | Competitors have updates. | Steam announcements active after release. | COVER_NOW | Yes | Summaries must stay current. | High: patch-sensitive game. | Yes |
| FAQ | `bomb-farm.wiki` and `bombfarm.wiki` expose FAQ. | Reviews/discussions raise beginner, codes, market, platform questions. | COVER_NOW | Yes | Exact support links and official social. | Medium-high. | Yes |
| Tier / Builds | `bombfarm.wiki` has tier list; YouTube/search suggests "best" intent. | No reliable methodology or stable data in Phase 1. | DEFER | A non-ranking evaluation guide can publish later. | Testing, roster, patch stability, methodology. | Medium: competitor gap, but risk of misinformation high. | Yes |
| Tools | `bombfarm.wiki` has tools; DB competitor has search/database. | Players need achievements, system requirements, potentially squad planning. | COVER_PARTIAL | Yes | Squad planner logic and data model. | Medium. | Yes |
| Review / Should I Play | `bombfarm.wiki` has review; Steam reviews show mixed player concerns. | SERP includes review intent. | DEFER | Yes, FAQ can answer basic "what is it" without review. | Review methodology, current sentiment policy. | Low-medium. | Yes |
| Troubleshooting / Performance | `bomb-farm.wiki` footer has troubleshooting; reviews mention lag/UI/server issues. | Steam requirements and official stability updates. | COVER_PARTIAL | Yes, merged into `/faq/`, `/tools/system-requirements/`, `/guides/controls/`, `/guides/steam-market/`, and `/updates/latest/`; no standalone troubleshooting URL in launch plan. | Known issue list and support paths. | Medium-high due negative review themes. | Yes |

## Competitive Coverage Gate

- [x] Every material competitor/player-intent family has a decision.
- [x] `DEFER` decisions explain why.
- [x] A partial-page option was considered before suppressing high-value families.
- [x] Competitor content was not treated as factual authority.
- [x] Material gaps are surfaced for human approval.

## Rules

- Do not copy competitor wording.
- Do not copy competitor media by default.
- Do not use competitor palette as game-brand authority.
- Use competitor analysis for structure, coverage, UX, gaps, and prioritization.
- Competitor-only game claims require independent verification.
