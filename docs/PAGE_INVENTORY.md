# Page Inventory

## Purpose

Define the planning view of Bomb Farm Wiki pages for Human Planning Gate.

This Markdown file is a planning/review representation only. It is not the runtime publication SSOT. Future implementation must use the Starter 2.0 runtime Page Inventory as the single source of truth for publication, routes, visibility, indexing, generated pages, navigation inclusion, sitemap inclusion, and search inclusion.

## Conceptual Fields Used In This Planning View

| Field | Purpose |
|---|---|
| pageId | Stable planning identifier. |
| route | Proposed canonical internal route. |
| pageType | Runtime-compatible canonical type: home, guide, hub, database, meta, patch, planner, or calculator. |
| cluster | Owner topic cluster. |
| phase | P0, P1, or P2. |
| coverageMode | full, partial, deferred. |
| primaryIntent | Player-facing intent, not an internal keyword field. |
| sourceStatus | Official, observed, community/discovery, competitor-only, or mixed. |
| launchStatus | planned, partial-planned, or deferred. |
| notes | Human review notes and missing evidence. |

## Runtime SSOT Rules

- Do not create `src/data/page-inventory.json` in Phase 1.
- Do not maintain this Markdown file as a second publication ledger after implementation.
- Future runtime inventory rows must reconcile with this plan and with `SITE_STRUCTURE.md` / `P0_P1_P2.md`.
- Draft/private/internal planning fields must not leak into public navigation, sitemap, generated HTML, or search.
- Partial pages are valid only when public content clearly stays within verified scope.

## Planning Inventory

| pageId | route | pageType | cluster | phase | coverageMode | primaryIntent | sourceStatus | launchStatus | notes |
|---|---|---|---|---|---|---|---|---|---|
| `home` | `/` | home | Home | P0 | partial | Enter Bomb Farm Wiki and pick a task. | official + discovery | planned | Must show Steam CTA and source labels. |
| `hub.guides` | `/guides/` | hub | Guides | P0 | full-enough | Browse all launch guides. | mixed | planned | Hub can be complete before all children are full. |
| `guide.getting-started` | `/guides/getting-started/` | guide | Guides | P0 | partial | Start a new account/session without confusion. | official + community | planned | Needs account-link caveat and screenshots later. |
| `guide.how-to-play` | `/guides/how-to-play/` | guide | Guides | P0 | partial | Understand the idle loop. | official + community | planned | Avoid exact timers unless verified. |
| `guide.controls` | `/guides/controls/` | guide | Guides | P0 | partial | Understand compact overlay controls and input options. | official + community | planned | Complete control map needs in-game verification. |
| `guide.progression` | `/guides/progression/` | guide | Guides | P0 | partial | Understand worlds, difficulties, stage goals. | official | planned | World details are P1. |
| `guide.gear-and-ritual` | `/guides/gear-and-ritual/` | guide | Guides | P0 | partial | Upgrade gear and use Ritual safely. | official + official patch | planned | Exact costs/rates deferred. |
| `guide.skill-tree` | `/guides/skill-tree/` | guide | Guides | P0 | partial | Make early skill tree choices without fake meta. | official + official patch | planned | Node DB P1. |
| `guide.steam-market` | `/guides/steam-market/` | guide | Guides | P0 | partial | Understand Market trading and safety. | official + official patch + community | planned | Avoid profit advice. |
| `guide.codes` | `/guides/codes/` | guide | Guides | P0 | partial | Understand codes/friend-code redemption and freshness. | official patch + community | partial-planned | Recheck active codes before release. |
| `hub.heroes` | `/heroes/` | hub | Heroes | P0 | partial | Understand heroes, roles, teams. | official | planned | No fake roster. |
| `guide.hero-roles` | `/heroes/roles/` | guide | Heroes | P0 | partial | Understand Attacker, Support, Collector, Specialist. | official | planned | Details from tooltips later. |
| `guide.energy-rotation` | `/heroes/energy-rotation/` | guide | Heroes | P0 | partial | Keep three teams working. | official + community | planned | House mechanics deeper in P1. |
| `hub.updates` | `/updates/` | hub | Updates | P0 | full-enough | Browse official update summaries. | official patch | planned | Needs date freshness. |
| `patch.latest-update` | `/updates/latest/` | patch | Updates | P0 | partial | Understand most recent patch. | official patch | planned | Must be updated/rechecked before release. |
| `hub.tools` | `/tools/` | hub | Tools | P0 | partial | Find achievements/specs/tools. | official + competitor | planned | Planner child P1. |
| `guide.achievements` | `/tools/achievements/` | guide | Tools | P0 | full-enough | Track 21 Steam achievements. | official | planned | Achievement percentages dynamic and optional. |
| `guide.system-requirements` | `/tools/system-requirements/` | guide | Tools | P0 | full | Check PC requirements and platform support. | official | planned | Steam source sufficient. |
| `faq` | `/faq/` | guide | Home | P0 | partial | Answer common platform/source/market/code questions. | mixed | planned | Good place for unverified-source disclaimers. |
| `browse-all` | `/browse/` | hub | Home | P1 | partial | List all public pages and families. | internal planning + runtime later | partial-planned | Runtime inventory will drive this after implementation. |
| `guide.house-capsules` | `/heroes/house-capsules/` | guide | Heroes | P1 | partial | Understand storage/recovery/Homes. | official achievements + competitor | partial-planned | Needs direct game UI verification. |
| `guide.fusion-rarity` | `/heroes/fusion-and-rarity/` | guide | Heroes | P1 | partial | Understand duplicates, rarity, stars. | official + competitor | partial-planned | Needs detailed source. |
| `db.abilities` | `/abilities/` | database | Databases | P1 | partial | Browse 20 abilities. | official high-level + competitor-only detail | partial-planned | Effects/names need verification. |
| `db.equipment` | `/equipment/` | database | Databases | P1 | partial | Browse equipment sets/slots/levels. | official high-level + competitor-only detail | partial-planned | Set list and stats need verification. |
| `db.worlds` | `/worlds/` | database | Databases | P1 | partial | Browse worlds/difficulties/stage structure. | official high-level + competitor-only detail | partial-planned | Detailed world data needs verification. |
| `db.gems` | `/gems/` | database | Databases | P1 | partial | Browse gems and ritual use. | competitor-only detail | partial-planned | Requires direct verification. |
| `db.skill-tree` | `/skill-tree/` | database | Databases | P1 | partial | Browse permanent skill nodes. | official high-level + competitor-only detail | partial-planned | Node names/costs need verification. |
| `tool.squad-planner` | `/tools/squad-planner/` | planner | Tools | P1 | partial | Plan three-team role/energy rotation. | official concept + competitor tool signal | partial-planned | Tool logic needs approved model. |
| `community` | `/community/` | guide | Home | P1 | partial | Link verified official/community sources. | official platform + unverified social | partial-planned | Official Discord/X still unverified. |
| `meta.tier-list` | `/tier-list/` | meta | Meta | P2 | deferred | Explain tier methodology and future rankings. | competitor + community | deferred | No ranking until evidence and method. |
| `meta.best-heroes` | `/tier-list/best-heroes/` | meta | Meta | P2 | deferred | Pick best heroes by stage/role. | competitor-only | deferred | Needs roster/testing/patch stability. |
| `meta.best-squads` | `/tier-list/best-squads/` | meta | Meta | P2 | deferred | Recommend role mixes/builds. | competitor-only | deferred | Needs methodology. |
| `meta.review` | `/review/` | meta | Meta | P2 | deferred | Should I play Bomb Farm? | Steam reviews + SERP | deferred | Needs review policy and current sentiment. |
| `tool.market-values` | `/tools/market-values/` | calculator | Tools | P2 | deferred | Understand item values/profit. | community + YouTube | deferred | Out of V1; avoid financial/speculative claims and do not build price tracking without explicit later approval. |

## Human-Readable View Rule

If a Markdown inventory view is needed after implementation, generate it one-way from the runtime inventory and mark it generated.
