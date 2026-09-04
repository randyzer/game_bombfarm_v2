# Site Structure

## Structure Status

- Planning status: `Phase 1 proposed; awaiting Human Planning Gate`
- Human approval: `Pending`
- Runtime Page Inventory SSOT: `Not created in Phase 1. Future implementation must use Starter 2.0 runtime inventory as publication SSOT.`
- Total proposed planning entries: `34`
- P0: `19`
- P1: `10`
- P2: `5`

## Primary Navigation

| Label | Target | Player task | Why primary |
|---|---|---|---|
| Guides | `/guides/` | Start, learn the loop, find major systems | Highest beginner and system intent. |
| Heroes | `/heroes/` | Understand roles, teams, energy | Official store positions squads/heroes as core. |
| Gear & Ritual | `/guides/gear-and-ritual/` | Upgrade safely and avoid wasting drops | Store, achievements, and patch notes emphasize gear/ritual. |
| Progression | `/guides/progression/` | Understand worlds, difficulty, Stage 600 | Official store and achievements support macro progression. |
| Updates | `/updates/` | Track patch-sensitive changes | Game is newly launched and changing quickly. |
| Tools | `/tools/` | Use achievements/specs/checklists | Competitors expose tools; Steam gives reliable achievements/specs. |

## Secondary / Dropdown Navigation

| Parent | Child label | Target | Why exposed |
|---|---|---|---|
| Guides | Getting Started | `/guides/getting-started/` | P0 onboarding path. |
| Guides | How to Play | `/guides/how-to-play/` | P0 loop explanation. |
| Guides | Controls | `/guides/controls/` | UI/control confusion is visible in reviews. |
| Guides | Skill Tree | `/guides/skill-tree/` | Official store names it as major system. |
| Guides | Steam Market | `/guides/steam-market/` | Differentiator and risk area. |
| Guides | Codes | `/guides/codes/` | Strong current player intent. |
| Heroes | Hero Roles | `/heroes/roles/` | Official roles are verified. |
| Heroes | Energy Rotation | `/heroes/energy-rotation/` | Three-team idle loop needs player explanation. |
| Heroes | House Capsules | `/heroes/house-capsules/` | P1 expansion but important enough to expose once available. |
| Tools | Achievements | `/tools/achievements/` | Official 21-achievement list is launch-useful. |
| Tools | System Requirements | `/tools/system-requirements/` | Official specs answer install friction. |
| Tools | Browse All | `/browse/` | Avoid orphan pages and support wiki scanning. |

Navigation should reflect player tasks and major content families, not technical modules.

## Proposed Site Tree

```text
/
├── guides/
│   ├── getting-started/
│   ├── how-to-play/
│   ├── controls/
│   ├── progression/
│   ├── gear-and-ritual/
│   ├── skill-tree/
│   ├── steam-market/
│   └── codes/
├── heroes/
│   ├── roles/
│   ├── energy-rotation/
│   ├── house-capsules/
│   └── fusion-and-rarity/
├── equipment/
├── abilities/
├── worlds/
├── gems/
├── skill-tree/
├── updates/
│   └── latest/
├── tools/
│   ├── achievements/
│   ├── system-requirements/
│   └── squad-planner/
├── tier-list/
├── review/
├── faq/
└── browse/
```

## Topic Clusters

### Cluster: Home / Orientation

- Hub: `/`
- Primary intent: understand what the site covers and jump to key player tasks.
- Primary entities: game, platform, launch context, major systems.
- Main data source: Steam store, Steam announcements, Steam achievements.
- Competitive coverage decision: COVER_NOW.
- P0/P1/P2: P0.

Child pages:

- `/faq/`
- `/browse/`

Page types:

- [x] FACT
- [x] GUIDE
- [ ] DATABASE
- [ ] META
- [ ] TOOL
- [ ] NEWS

### Cluster: Guides

- Hub: `/guides/`
- Primary intent: learn how to play and progress.
- Primary entities: Battle, House, Ritual, Map, Market, Codes.
- Main data source: Steam store, announcements, achievements, community pain-point signals.
- Competitive coverage decision: COVER_NOW.
- P0/P1/P2: P0 with partial factual depth.

Child pages:

- `/guides/getting-started/`
- `/guides/how-to-play/`
- `/guides/controls/`
- `/guides/progression/`
- `/guides/gear-and-ritual/`
- `/guides/skill-tree/`
- `/guides/steam-market/`
- `/guides/codes/`

Page types:

- [ ] FACT
- [x] GUIDE
- [ ] DATABASE
- [ ] META
- [ ] TOOL
- [ ] NEWS

### Cluster: Heroes

- Hub: `/heroes/`
- Primary intent: understand roles, teams, energy, storage, fusion.
- Primary entities: Attacker, Support, Collector, Specialist, teams, House.
- Main data source: Steam store and patch announcements, later in-game verification.
- Competitive coverage decision: COVER_PARTIAL.
- P0/P1/P2: P0 partial, P1 expansions.

Child pages:

- `/heroes/roles/`
- `/heroes/energy-rotation/`
- `/heroes/house-capsules/`
- `/heroes/fusion-and-rarity/`

Page types:

- [x] FACT
- [x] GUIDE
- [ ] DATABASE
- [ ] META
- [ ] TOOL
- [ ] NEWS

### Cluster: Databases

- Hub: `/browse/` and family index pages.
- Primary intent: look up abilities, equipment, worlds, gems, skill tree nodes.
- Primary entities: abilities, equipment sets, world references, gem types, skill nodes.
- Main data source: later verified in-game/official data; competitors only prove demand.
- Competitive coverage decision: COVER_PARTIAL.
- P0/P1/P2: P1.

Child pages:

- `/abilities/`
- `/equipment/`
- `/worlds/`
- `/gems/`
- `/skill-tree/`

Page types:

- [ ] FACT
- [ ] GUIDE
- [x] DATABASE
- [ ] META
- [ ] TOOL
- [ ] NEWS

### Cluster: Updates

- Hub: `/updates/`
- Primary intent: understand recent changes and patch-sensitive rules.
- Primary entities: patches, weekly rewards, XP sharing, Market, codes, stability.
- Main data source: Steam News API and Steam Community announcements.
- Competitive coverage decision: COVER_NOW.
- P0/P1/P2: P0.

Child pages:

- `/updates/latest/`

Page types:

- [ ] FACT
- [ ] GUIDE
- [ ] DATABASE
- [ ] META
- [ ] TOOL
- [x] NEWS

### Cluster: Tools

- Hub: `/tools/`
- Primary intent: practical utility and checklists.
- Primary entities: achievements, system requirements, squad planning.
- Main data source: Steam achievements and store specs, later approved game data.
- Competitive coverage decision: COVER_PARTIAL.
- P0/P1/P2: P0 for achievements/specs, P1 for planner.

Child pages:

- `/tools/achievements/`
- `/tools/system-requirements/`
- `/tools/squad-planner/`

Page types:

- [x] FACT
- [ ] GUIDE
- [ ] DATABASE
- [ ] META
- [x] TOOL
- [ ] NEWS

### Cluster: Meta / Review

- Hub: `/tier-list/`
- Primary intent: decide best heroes/squads and whether to play.
- Primary entities: heroes, squads, market economy, review sentiment.
- Main data source: future methodology, testing, current community evidence.
- Competitive coverage decision: DEFER.
- P0/P1/P2: P2.

Child pages:

- `/tier-list/best-heroes/`
- `/tier-list/best-squads/`
- `/review/`

Page types:

- [ ] FACT
- [ ] GUIDE
- [ ] DATABASE
- [x] META
- [ ] TOOL
- [ ] NEWS

## Minimum Wiki Coverage Review

| Family | Relevant to game? | Coverage decision | Target page(s) | Notes |
|---|---|---|---|---|
| Getting Started / How to Play | Yes | COVER | `/guides/getting-started/`, `/guides/how-to-play/`, `/guides/controls/` | P0 due onboarding complaints and competitor coverage. |
| Core Gameplay / Progression | Yes | COVER | `/guides/progression/` | Official store and achievements support macro structure. |
| Heroes / Characters | Yes | PARTIAL | `/heroes/`, `/heroes/roles/`, `/heroes/energy-rotation/` | Roles/teams verified; named roster deferred. |
| Gear / Items | Yes | PARTIAL | `/guides/gear-and-ritual/`, `/equipment/` | P0 guide, P1 equipment DB. |
| Major Systems | Yes | PARTIAL | `/guides/skill-tree/`, `/skill-tree/`, `/guides/steam-market/` | Verified high-level systems; detailed nodes/rules need more data. |
| Worlds / Maps / Stages | Yes | PARTIAL | `/guides/progression/`, `/worlds/` | Five worlds/difficulties/600 stages verified; world details P1. |
| Skills / Abilities | Yes | PARTIAL | `/guides/skill-tree/`, `/abilities/` | 20 abilities verified; exact effects P1. |
| Builds | Yes | DEFER | `/tier-list/` | Requires testing/methodology. |
| Tier / Meta | Yes | DEFER | `/tier-list/`, `/review/` | P2 only. |
| Updates | Yes | COVER | `/updates/`, `/updates/latest/` | Steam announcements available. |
| Tools | Yes | PARTIAL | `/tools/`, `/tools/achievements/`, `/tools/system-requirements/`, `/tools/squad-planner/` | Achievements/specs P0; planner P1. |
| Codes | Yes | PARTIAL | `/guides/codes/` | Strong current demand; active code facts require recheck before release. |
| FAQ | Yes | COVER | `/faq/` | Must answer platform, account, market, codes, beginner, support/source questions. Troubleshooting/performance is merged into FAQ plus Controls, System Requirements, Steam Market, and Updates instead of a standalone launch page. |
| Multiplayer / Co-op | No for Battle | N/A | FAQ note only | Steam lists single-player; other players matter through Market/community. |
| Mobile / Mac | No for launch | N/A | FAQ/system requirements note only | Steam lists Windows only. |

## Partial Page Plan

| Page | Verified scope we can publish now | Missing deeper data | Deferred expansion |
|---|---|---|---|
| `/heroes/` | Four roles, 20 abilities, three teams from Steam store. | Named roster, stats, rarity details, art rights. | Hero database and individual pages. |
| `/guides/gear-and-ritual/` | Gear drops, +0 to +15 upgrades, duplicate stars, achievements, patch notes. | Full item list, forge costs, odds, drop rates. | Equipment DB and Ritual reference. |
| `/guides/skill-tree/` | Large account tree, upgrade paths, patch notes about skills. | Node list, costs, max levels, recommended order. | Skill node database and build guides. |
| `/guides/progression/` | Five worlds, five difficulties, 600 stages, difficulty achievements. | World names, stage rewards, key costs, timed gates beyond achievements. | World reference database. |
| `/guides/steam-market/` | Steam Market trading is official; announcements mention Market UI/rules fixes. | Eligibility rules and current restrictions. | Market safety checklist and rules tracker. |
| `/guides/codes/` | Official announcements mention KENDO and code letters; community asks where to enter codes. | Active code list, expiration, exact friend-code reward terms. | Code tracker after approved recheck workflow. |
| `/abilities/` | Official store verifies 20 abilities level 1-10. | Names/effects/levels. | Ability DB after direct verification. |
| `/equipment/` | Official store and achievements verify equipment progression up to level 300 and +15. | Set list, slots, stats, attributes. | Equipment DB. |
| `/tools/squad-planner/` | Three teams and roles support a planner concept. | Planner rules and validated calculations. | Interactive tool in implementation after approval. |

## Media Plan by Page Family

| Page family | Hero/cover media | Inline screenshots | Video | Quick facts/cards | Notes |
|---|---|---|---|---|---|
| Homepage | Steam key art if rights approved | 1-3 Steam screenshots if rights approved | No embedded video unless first-party YouTube or approved workaround | Steam facts | Keep brand visible in first viewport. |
| Guides | Official screenshots per system if approved | Battle, Ritual, Map, Market, House screenshots | None required | Checklist cards | Text-first fallback allowed. |
| Heroes/Entities | Hero art only after rights/source approval | House/hero panel screenshot later | None | Role cards | Avoid fake named roster. |
| Gear/Items | Gear/Ritual screenshot if approved | Item tooltip/chest/forge screenshots later | None | Upgrade ladder cards | Do not claim drop rates. |
| Worlds/Maps | Map screenshot if approved | World/difficulty UI later | None | Difficulty/stage facts | Macro structure P0, details P1. |
| Updates | Announcement thumbnail only if approved | Not required | None | Patch summary cards | Must cite Steam announcement. |
| Tools | Icons/diagrams can be original later | Optional | None | Achievement/spec tables | No competitor images. |

## Game Visual Identity Plan

- Brand signal: bombs, mine lanterns, gold, crystal blue accents, compact idle overlay, squad miners.
- Layout feel: dense but readable wiki/tool surface, not a marketing-only landing page.
- Surfaces: dark framed panels with warm highlights; avoid heavy texture behind body copy.
- Typography character: sturdy readable display for headings; compact sans for wiki tables/guides.
- Color direction: charcoal/brown surface, gold primary, cyan crystal accent, ember secondary, warm off-white text.
- Screenshot style: show actual Steam/game UI only after rights approval; frame screenshots with captions and source labels.
- Player-facing UX rule: public pages must not expose internal priority, confidence, keyword, development status, evidence ledger, or editorial metadata.

## Internal Linking Rules

Each child page should:

- link to its Hub;
- link to 2-4 related pages;
- link to relevant tools/databases;
- avoid orphan status.

## URL Rules

- lowercase
- hyphen-separated
- stable slugs
- no duplicate intent
- no unnecessary dates in evergreen pages
- predictable Hub/detail hierarchy

## Navigation Coverage Gate

- [x] Major P0 families are visible in primary or secondary navigation.
- [x] Important published pages are not hidden only in deep links.
- [x] Navigation labels match player language.
- [x] Dropdown/grouping is planned where flat nav would hide major content.
- [x] Navigation plan is pending human approval before implementation.

## Navigation Coverage Review

| P0 page | Primary nav | Secondary/dropdown | Homepage entry | Browse All | Related pages | Search discoverability |
|---|---|---|---|---|---|---|
| `/` | Home/logo | N/A | N/A | Yes | Guides, Updates, Tools | Yes |
| `/guides/` | Guides | N/A | Yes | Yes | all guide children | Yes |
| `/guides/getting-started/` | Guides | Yes | Yes | Yes | How to Play, Controls, Codes, FAQ | Yes |
| `/guides/how-to-play/` | Guides | Yes | Yes | Yes | Getting Started, Gear/Ritual, Progression | Yes |
| `/guides/controls/` | Guides | Yes | Optional | Yes | Getting Started, System Requirements, FAQ | Yes |
| `/guides/progression/` | Progression | Yes | Yes | Yes | Worlds, Achievements, Skill Tree | Yes |
| `/guides/gear-and-ritual/` | Gear & Ritual | Yes | Yes | Yes | Equipment, Gems, Steam Market | Yes |
| `/guides/skill-tree/` | Guides | Yes | Yes | Yes | Abilities, Progression, Heroes | Yes |
| `/guides/steam-market/` | Guides | Yes | Yes | Yes | Codes, Gear/Ritual, FAQ | Yes |
| `/guides/codes/` | Guides | Yes | Yes during active code window | Yes | Updates, Steam Market, FAQ | Yes |
| `/heroes/` | Heroes | N/A | Yes | Yes | Roles, Energy Rotation, Skill Tree | Yes |
| `/heroes/roles/` | Heroes | Yes | Optional | Yes | Energy Rotation, Abilities | Yes |
| `/heroes/energy-rotation/` | Heroes | Yes | Optional | Yes | How to Play, House Capsules | Yes |
| `/updates/` | Updates | N/A | Yes | Yes | Latest, Codes, Market | Yes |
| `/updates/latest/` | Updates | Yes | Yes | Yes | Codes, Market, Progression | Yes |
| `/tools/` | Tools | N/A | Optional | Yes | Achievements, Requirements | Yes |
| `/tools/achievements/` | Tools | Yes | Optional | Yes | Progression, Gear/Ritual | Yes |
| `/tools/system-requirements/` | Tools | Yes | Optional | Yes | Controls, FAQ | Yes |
| `/faq/` | Footer/Home | Optional | Yes | Yes | all major P0 pages | Yes |

## Structure Validation

- [x] Every P0 page appears in the tree.
- [x] Every page has one owner Cluster.
- [x] No duplicate intent.
- [x] No page exists only because a competitor has it.
- [x] Every material competitor/player-intent family has a coverage decision.
- [x] Important incomplete-data families considered partial-page coverage before deferral.
