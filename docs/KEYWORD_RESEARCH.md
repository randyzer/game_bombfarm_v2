# Keyword Research

## Purpose

Turn raw searches, entities, player questions, competitor evidence, and community language into structured SEO opportunities for Bomb Farm.

Keyword research names demand and maps it to player tasks. It does not prove gameplay facts and does not replace source policy.

## Evidence Limits

- Discovery surfaces checked: Steam Store, Steam Community Hub, Steam reviews sample, Steam discussions sample, Steam achievements, Steam announcements, Web/SERP results, YouTube search via `yt-dlp`, and the three user-named competitor sites.
- Available keyword tools: Web search and first-party/community surface inspection only.
- Reliable volume/trend/difficulty: Not available in Phase 1. Metrics are recorded as `unknown`, not invented.
- Inaccessible surfaces: Reddit backend unavailable, Twitter/X unauthenticated, official Discord unverified, Exa semantic search unavailable.

## Seed Cluster

```text
Bomb Farm
Bomb Farm wiki
Bomb Farm guide
Bomb Farm beginner guide
Bomb Farm how to play
Bomb Farm heroes
Bomb Farm gear
Bomb Farm ritual
Bomb Farm skill tree
Bomb Farm abilities
Bomb Farm equipment
Bomb Farm worlds
Bomb Farm stages
Bomb Farm achievements
Bomb Farm Steam Market
Bomb Farm codes
Bomb Farm friend code
Bomb Farm KENDO code
Bomb Farm system requirements
Bomb Farm review
Bomb Farm tier list
```

## Keyword Table

| Keyword | Source | Intent | Entity | Player Task | Cluster | Volume | Trend | Difficulty | Priority | Target URL | Status |
|---|---|---|---|---|---|---:|---|---:|---:|---|---|
| Bomb Farm wiki | SERP / competitors | navigational | Site | Find a complete English wiki | Wiki/Home | unknown | unknown | unknown | P0 | `/` | proposed |
| Bomb Farm guide | SERP / Steam guides / competitors | informational | Game | Choose what to read first | Guides hub | unknown | unknown | unknown | P0 | `/guides/` | proposed |
| Bomb Farm beginner guide | Steam guides / YouTube / competitors | how-to | New player | Install, link account, start first mine run | Beginner | unknown | unknown | unknown | P0 | `/guides/getting-started/` | proposed |
| how to play Bomb Farm | Competitors / YouTube | how-to | Core loop | Understand Battle, House, Ritual, Map loop | How to Play | unknown | unknown | unknown | P0 | `/guides/how-to-play/` | proposed |
| Bomb Farm controls | Competitors / Steam accessibility categories | how-to | Client UI | Learn compact overlay, mouse/keyboard options | Controls | unknown | unknown | unknown | P0 | `/guides/controls/` | proposed |
| Bomb Farm progression | Steam store / achievements / competitors | informational | Progression | Understand worlds, difficulties, stages, gates | Progression | unknown | unknown | unknown | P0 | `/guides/progression/` | proposed |
| Bomb Farm worlds | Steam store / achievements / competitors | database | Worlds | See five worlds/difficulty structure | Worlds | unknown | unknown | unknown | P1 | `/worlds/` | partial target |
| Bomb Farm stage 600 | Steam store / achievements | informational | Endgame | Understand campaign endpoint and Inferno goal | Progression | unknown | unknown | unknown | P0 | `/guides/progression/` | merged |
| Bomb Farm heroes | Steam store / competitors | database | Heroes | Understand roles, rarity, team usage | Heroes | unknown | unknown | unknown | P0 | `/heroes/` | proposed |
| Bomb Farm hero roles | Steam store / competitors | informational | Roles | Decide Attacker, Support, Collector, Specialist roles | Heroes | unknown | unknown | unknown | P0 | `/heroes/roles/` | proposed |
| Bomb Farm energy rotation | Reviews / competitors | how-to | Heroes/House | Keep three teams farming | Heroes | unknown | unknown | unknown | P0 | `/heroes/energy-rotation/` | proposed |
| Bomb Farm House capsules | Competitors | informational | House | Understand storage/recovery and five homes | Heroes | unknown | unknown | unknown | P1 | `/heroes/house-capsules/` | partial target |
| Bomb Farm gear | Steam store / competitors | informational | Equipment | Learn gear, drops, upgrades | Gear/Ritual | unknown | unknown | unknown | P0 | `/guides/gear-and-ritual/` | proposed |
| Bomb Farm ritual | Steam announcements / competitors | how-to | Ritual | Avoid wasting duplicates/gems/items | Gear/Ritual | unknown | unknown | unknown | P0 | `/guides/gear-and-ritual/` | merged |
| Bomb Farm equipment sets | Competitors | database | Equipment | Browse gear ladder/slots | Equipment DB | unknown | unknown | unknown | P1 | `/equipment/` | partial target |
| Bomb Farm abilities | Steam store / competitors | database | Abilities | Compare 20 ability effects | Abilities DB | unknown | unknown | unknown | P1 | `/abilities/` | partial target |
| Bomb Farm skill tree | Steam store / announcements / competitors | how-to | Skill tree | Spend permanent upgrades safely | Skill Tree | unknown | unknown | unknown | P0 | `/guides/skill-tree/` | proposed |
| Bomb Farm skill tree nodes | Competitors | database | Skill tree nodes | Browse node names/costs/effects | Skill Tree DB | unknown | unknown | unknown | P1 | `/skill-tree/` | partial target |
| Bomb Farm Steam Market | Steam store / announcements / reviews | how-to | Market | Understand eligible trading and risks | Market | unknown | unknown | unknown | P0 | `/guides/steam-market/` | proposed |
| Bomb Farm market access | Steam announcements / Steam reviews | troubleshooting | Market | Know why market transfer/listing may fail | Market | unknown | unknown | unknown | P0 | `/guides/steam-market/` | merged |
| Bomb Farm codes | Steam discussions / announcements / SERP | obtain/unlock | Codes | Find redeem rules and expiration warnings | Codes | unknown | unknown | unknown | P0 | `/guides/codes/` | partial target |
| Bomb Farm friend code | Steam discussions / community guides | obtain/unlock | Friend code | Find where to enter/share friend codes | Codes | unknown | unknown | unknown | P0 | `/guides/codes/` | merged |
| Bomb Farm KENDO code | Steam announcement / discussions | update/patch | Code | Verify temporary boost code | Codes/Updates | unknown | rising? unverified | unknown | P0 | `/guides/codes/` | patch-sensitive |
| Bomb Farm achievements | Steam achievements / competitors | database | Achievements | Track 21 unlock goals | Achievements | unknown | unknown | unknown | P0 | `/tools/achievements/` | proposed |
| Bomb Farm system requirements | Steam store / competitors | informational | Tech specs | Know if PC can run the game | Tools | unknown | unknown | unknown | P0 | `/tools/system-requirements/` | proposed |
| Bomb Farm update | Steam announcements / competitors | update/patch | Patch notes | Understand recent changes | Updates | unknown | unknown | unknown | P0 | `/updates/` | proposed |
| Bomb Farm patch notes | Steam announcements | update/patch | Patch notes | Track weekly rewards, XP sharing, market changes | Updates | unknown | unknown | unknown | P0 | `/updates/latest/` | proposed |
| Bomb Farm tier list | Competitors / YouTube | best/meta | Heroes/Squads | Compare early-game or squad rankings | Meta | unknown | unknown | unknown | P2 | `/tier-list/` | defer |
| Bomb Farm best heroes | Competitors | best/meta | Heroes | Pick optimal heroes | Meta | unknown | unknown | unknown | P2 | `/tier-list/best-heroes/` | defer |
| Bomb Farm review | Steam reviews / SERP | comparison | Game | Decide whether to play | Review | unknown | unknown | unknown | P2 | `/review/` | defer |

## Intent Labels

- `navigational`
- `informational`
- `how-to`
- `comparison`
- `best/meta`
- `obtain/unlock`
- `farm`
- `troubleshooting`
- `database`
- `calculator/tool`
- `update/patch`

## Search-Intent Merge

Keyword is not page. Phase 1 maps multiple terms into shared page intents:

- `Bomb Farm beginner guide`, `Bomb Farm guide`, `how to start Bomb Farm`, and Steam beginner-guide signals map to `/guides/getting-started/` plus `/guides/`.
- `Bomb Farm gear`, `Bomb Farm ritual`, `Bomb Farm forging`, `Bomb Farm +15`, and `sealed drops` map to `/guides/gear-and-ritual/` with P1 database expansion at `/equipment/`.
- `Bomb Farm codes`, `friend code`, `KENDO code`, and `SORRY code` map to one patch-sensitive `/guides/codes/` page.
- `Bomb Farm worlds`, `stage 600`, `Inferno`, and difficulty clears map to `/guides/progression/` for launch, with `/worlds/` as P1 reference expansion.
- `Bomb Farm skill tree` and `skill tree nodes` map to `/guides/skill-tree/` for P0 and `/skill-tree/` for P1 database detail.
- `Bomb Farm best heroes`, `tier list`, and `best squad` map to P2 meta pages, not P0 factual pages.

## Target Mapping

| Cluster | Target | Decision | Reason |
|---|---|---|---|
| Wiki/Home | `/` | P0 | Navigational demand and domain homepage need. |
| Guides | `/guides/` | P0 | Central player task entry and competitor norm. |
| Beginner | `/guides/getting-started/` | P0 | Steam reviews cite unclear onboarding; competitor coverage strong. |
| How to Play | `/guides/how-to-play/` | P0 | Needed for loop comprehension and player-facing UX. |
| Controls | `/guides/controls/` | P0 | Steam categories and review complaints support UI/control guidance. |
| Progression | `/guides/progression/` | P0 partial | Official store/achievements support high-level structure; exact world details need further verification. |
| Heroes | `/heroes/`, `/heroes/roles/`, `/heroes/energy-rotation/` | P0 partial | Roles/teams are official; named roster/details need later data. |
| Gear/Ritual | `/guides/gear-and-ritual/` | P0 partial | Store and announcements support high-level systems; exact stats deferred. |
| Skill Tree | `/guides/skill-tree/` | P0 partial | Store and announcements support system; exact nodes/costs deferred. |
| Market | `/guides/steam-market/` | P0 partial | Store and announcements make market a core differentiator; avoid financial/speculative claims. |
| Codes | `/guides/codes/` | P0 partial | Strong community intent and official patch-sensitive code evidence; recheck required before publish. |
| Achievements | `/tools/achievements/` | P0 | Steam achievement list is official and complete enough for checklist. |
| Tools/System | `/tools/system-requirements/` | P0 | Steam source provides requirements. |
| Updates | `/updates/`, `/updates/latest/` | P0 | Official announcements drive freshness and patch-sensitive facts. |
| Deep databases | `/abilities/`, `/equipment/`, `/worlds/`, `/gems/`, `/skill-tree/` | P1 | Competitors prove demand, but detailed data needs direct source verification. |
| Tier/meta/review | `/tier-list/`, `/review/` | P2 | Requires testing, methodology, stable community evidence. |

## Competitive Coverage Interaction

Missing keyword-volume data does not remove coverage requirements. Bomb Farm has structurally important wiki families visible from the official store and competitors: beginner guides, heroes, gear, skill tree, worlds/progression, market, updates, and achievements. These should exist even where claims are partial.

## Deferred Intents

| Intent | Why deferred | Partial possible | Competitor coverage | Missing evidence | Revisit trigger |
|---|---|---|---|---|---|
| Tier list / best heroes | Meta rankings need testing and patch stability. | Yes, an explanatory "how to evaluate heroes" guide can publish without ranking. | `bombfarm.wiki` has tier pages. | Methodology, verified roster, repeated performance observations. | Human approval plus stable data/testing plan. |
| Market profit / item value | Financial/market advice can mislead and changes quickly. | Yes, market safety and mechanics page. | YouTube and reviews mention profit/market. | Official market rules, item eligibility, current economy data. | Official market docs or approved observation workflow. |
| Exact drop rates | Not verified by official source. | No rates; publish "unknown/not published" explanation. | Competitors may imply drop systems. | Official rates or statistically valid dataset. | Official disclosure or approved data collection. |
| Named hero pages | Official store gives roles, not a stable roster. | Yes, roles and energy pages. | Competitors have hero hubs. | Verified names, stats, abilities, art rights. | In-game extraction/official list approval. |
| Full equipment database | Competitor has 30 sets, but not first-party verified. | Yes, gear/ritual guide. | `bombfarmdb.wiki` covers equipment. | Direct item list, slots, levels, attributes. | Approved UI/data extraction. |
