# Research Sources

All usage must follow `SOURCE_POLICY.md`.

## Official Sources

| Source | URL | Type | Reliability | Allowed Usage | Last Checked | Notes |
|---|---|---|---|---|---|---|
| Steam Store | `https://store.steampowered.com/app/4892010/Bomb_Farm/` | official_store | High | Facts, screenshots/trailer provenance, system requirements, release metadata | `2026-09-04` | Verified game name, release date, developer/publisher, genres, Windows support, languages, features, description, AI disclosure, system requirements. |
| Steam appdetails endpoint | `https://store.steampowered.com/api/appdetails?appids=4892010&cc=us&l=english` | official_store_api | High | Structured facts and media inventory | `2026-09-04` | Verified Steam app ID, free-to-play status, categories, screenshots count, movie count, highlighted achievements, no official website field. |
| Steam Community Hub | `https://steamcommunity.com/app/4892010` | official_platform_community | Medium-High | Official announcements, community/discovery signals, guide/discussion presence | `2026-09-04` | Includes official weekly announcements, guides, discussions, reviews, screenshots. Use community content as discovery unless authored by developer. |
| Steam News API | `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4892010&count=5&maxlength=1000&format=json` | official_patch_api | High for developer announcements | Facts/Updates | `2026-09-04` | Recent announcements mention weekly ranking rewards, stash capacity, XP sharing, chest info, Market improvements, Birth Rank, Ritual changes, stability fixes. |
| Steam Achievements | `https://steamcommunity.com/stats/4892010/achievements` | official_platform | High | Achievement names/descriptions and progression milestone signals | `2026-09-04` | Verified 21 achievement names/descriptions including difficulty clears, Stage 600, 9 heroes, level 500 hero, +15 gear, level 300 gear, five homes. |
| Steam Reviews API | `https://store.steampowered.com/appreviews/4892010?json=1&filter=recent&language=english&purchase_type=all&num_per_page=20` | official_platform_community | Medium | Community pain points and player questions | `2026-09-04` | Recent English review sample only. Do not use as all-time score authority. |
| Official Website | Not available in Steam appdetails | official_site | Unavailable | None | `2026-09-04` | No official website field was returned. |
| Official Wiki | Not verified | official_wiki | Unverified | None | `2026-09-04` | Steam announcements mention in-game/wiki info changes, but no public official wiki URL was verified. |
| Official Discord | Not verified | official_social | Unverified | None | `2026-09-04` | No first-party Discord URL verified. |
| Official YouTube | Not verified | official_video | Unverified | None | `2026-09-04` | YouTube search found videos, but no first-party developer channel was verified. |
| Official X / Twitter | `https://x.com/bombherox?lang=en` | official_social_candidate | Unverified | None until authenticated/verified | `2026-09-04` | Search result suggests a Bomb Farm account, but Twitter CLI is unauthenticated in current process. |

## Visual Identity References

| Source | URL | What it supports | Last checked | Notes |
|---|---|---|---|---|
| Key art | `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/e734040683a5bc6f4cb4d323dfd0c026b64c6d95/header.jpg?t=1787954440` | Logo, bombs, mine, gold, crystals, pixel squad | `2026-09-04` | Temporarily inspected from `/tmp` only; not copied into project. |
| Screenshots | Steam appdetails screenshots | In-game UI tone, compact overlay layout, battle grid, ritual panels | `2026-09-04` | Six screenshot URLs observed. Rights approval required before reuse. |
| Trailer | Steam store movie ID `257376181` | Trailer presence and gameplay media need | `2026-09-04` | Steam-hosted movie is not a YouTube ID, so it does not directly fit Starter Media V1 trailer support. |
| AI disclosure | Steam store AI Generated Content Disclosure | Visual/legal planning constraint | `2026-09-04` | Store says some art assets were AI-assisted and pre-made. |

## Media Asset Inventory

Record assets that may be useful in public pages. No asset was copied into the repository during Phase 1.

| Asset ID | Type | Source URL | First-party/Observed? | Intended Page(s) | Usage/Rights Note | Alt/Caption Note | Last Checked |
|---|---|---|---|---|---|---|---|
| `steam-header` | key-art | Steam header image URL in Project Brief | First-party observed | Homepage, Project overview | Rights not approved; source provenance only | Bomb Farm header with miners, bomb logo, gold, blue crystals | `2026-09-04` |
| `steam-screenshot-battle` | screenshot | Steam screenshot 0 from appdetails | First-party observed | How to Play, Controls, Getting Started | Rights not approved | Battle grid in compact overlay window | `2026-09-04` |
| `steam-screenshot-ritual-1` | screenshot | Steam screenshot 1 from appdetails | First-party observed | Gear and Ritual | Rights not approved | Ritual panel with item slots | `2026-09-04` |
| `steam-screenshot-ritual-2` | screenshot | Steam screenshot 2 from appdetails | First-party observed | Gear and Ritual, Market safety | Rights not approved | Forge/merchant-like ritual interface | `2026-09-04` |
| `steam-trailer` | video | Steam movie ID `257376181` | First-party observed | Homepage, media gallery | Not Starter-compatible as YouTube without later decision | Official Steam store trailer | `2026-09-04` |

Do not treat publicly visible media as automatic permission to copy or redistribute.

## Discovery - Web / SERP

| Query | Platform | Page Title | URL | Date | Source Class | Observed Intent | Planning Effect |
|---|---|---|---|---|---|---|---|
| `Bomb Farm Steam guide beginner skill tree gear market codes` | Web search | Steam Community :: Bomb Farm | `https://steamcommunity.com/app/4892010` | `2026-09-04` | discovery/community | Players look for guides, codes, market, skill tree, and beginner help. | Supports P0 beginner, codes, market, skill tree, updates, and FAQ pages. |
| `Bomb Farm Steam guide beginner skill tree gear market codes` | Web search | Bomb Farm Guide & Wiki: Heroes, Gear and Progression | `https://bombfarm.online/` | `2026-09-04` | discovery/competitor-candidate | Another guide site covers beginner progression, forge, ritual, skill tree, market, energy rotation. | Add as candidate later if Human Gate wants broader competitor review; not a user-named competitor. |
| `Bomb Farm wiki heroes gear skill tree abilities achievements` | Web search | Bomb Farm DB | `https://bombfarmdb.wiki/` | `2026-09-04` | competitor | Database searches revolve around abilities, equipment, worlds, gems, skill tree, achievements. | Confirms P1 database coverage and P0 database landing/hubs. |
| `Bomb Farm Steam friend code bonus code SORRY KENDO` | Web search | GamesFuze codes result | `https://gamesfuze.com/` | `2026-09-04` | discovery/unverified | Public guides chase friend codes and redeem instructions. | Codes page should exist, but exact active codes need official/current verification before publish. |
| `Bomb Farm game review Steam idle RPG Stream On` | Web search | Steam store and SteamDB result | Steam / SteamDB | `2026-09-04` | official/discovery | Players evaluate whether the idle RPG is worth playing and compare Steam review sentiment. | Review/meta page is P2 unless methodology and source policy are approved. |

## Discovery - Competitors

| Competitor/Page | URL | Date | Coverage | Navigation/UX Observation | Media Observation | Planning Effect |
|---|---|---|---|---|---|---|
| `bomb-farm.wiki` homepage | `https://bomb-farm.wiki/` | `2026-09-04` | Guides, heroes/gear, updates, FAQ, Steam CTA | Simple nav and beginner entry; lightweight site | Uses artwork/video references; rights not reusable | Baseline minimum: a simple P0 can still be useful if it answers first-session tasks. |
| `bomb-farm.wiki` guides | `https://bomb-farm.wiki/guides` | `2026-09-04` | 9 guides across 7 categories | Category cards for Getting Started, Heroes, Gear, Worlds, Skill Tree, Market, Updates | Minimal observed from text extract | Confirms major P0 guide families. |
| `bombfarm.wiki` homepage | `https://bombfarm.wiki/` | `2026-09-04` | Broad guides, heroes, tier list, review, updates, tools | Strong primary/dropdown nav, featured guides, popular pages, browse everything, FAQ | Uses multiple image placements | Our nav must be broad enough to expose P0/P1 pages and Browse All/search. |
| `bombfarm.wiki` guides hub | `https://bombfarm.wiki/guides/` | `2026-09-04` | Getting Started, How to Play, Controls, Skill Tree, Gear/Ritual, Equipment Sets, Market, Progression, Bonus Code | Clear suggested reading order and related tools | Image per hub | Confirms P0 guide map and internal linking need. |
| `bombfarm.wiki` heroes hub | `https://bombfarm.wiki/heroes/` | `2026-09-04` | Roles, fusion, energy, House capsules | Emphasizes role questions before named roster | Hero hub imagery | Supports P0 hero roles and energy pages; named hero pages can be deferred until verified. |
| `bombfarm.wiki` tier hub | `https://bombfarm.wiki/tier-list/` | `2026-09-04` | Tier list overview, early-game tiers, squad tiers | Separates meta family from system explanation | Unknown from extract | Tier pages are P2 unless repeatable methodology exists. |
| `bombfarmdb.wiki` homepage | `https://bombfarmdb.wiki/` | `2026-09-04` | Abilities, equipment, worlds, gems, skill tree, achievements, guides, search | Database-first IA with search and bilingual link | Multiple entity images | Confirms need for P1 database plan and P0 achievements/tool entry. |
| `bombfarmdb.wiki` abilities | `https://bombfarmdb.wiki/abilities/` | `2026-09-04` | 20 abilities with effects | Filterable/database framing | Ability icons | Deep ability DB is valuable but needs independent verification. |
| `bombfarmdb.wiki` equipment | `https://bombfarmdb.wiki/equipment/` | `2026-09-04` | 30 gear sets | Database ladder framing | Gear images | P1 unless data can be sourced directly from game/official source. |
| `bombfarmdb.wiki` worlds | `https://bombfarmdb.wiki/worlds/` | `2026-09-04` | 5 worlds and 5 difficulties | World reference with progression framing | World images | P0 progression overview, P1 world reference details. |
| `bombfarmdb.wiki` gems | `https://bombfarmdb.wiki/gems/` | `2026-09-04` | 9 gems and star ritual | Entity list plus ritual rule | Gem icons | P1 database; P0 Ritual guide can mention verified high-level gem use only after source confirmation. |
| `bombfarmdb.wiki` skill tree | `https://bombfarmdb.wiki/skill-tree/` | `2026-09-04` | 19 named nodes and field slots/inventory tabs | Branch filters by upgrade type | Node imagery | P0 skill tree overview; P1 node database after direct verification. |
| `bombfarmdb.wiki` achievements | `https://bombfarmdb.wiki/achievements/` | `2026-09-04` | 21 achievements | Achievement roadmap | Achievement icons | P0 achievements checklist can use Steam Achievements as authoritative source. |

## Discovery - YouTube / Community

| Query/Surface | Platform | URL | Date | Source Class | Observed Question | Planning Effect |
|---|---|---|---|---|---|---|
| `ytsearch8:Bomb Farm Steam game` | YouTube via `yt-dlp` | `https://www.youtube.com/results?search_query=Bomb+Farm+Steam+game` | `2026-09-04` | community/discovery | Videos emphasize beginner tips, farming wrong/right, Steam profit/market, first look, getting ahead. | Supports P0 beginner/market/how-to pages and P2 review/meta deferral. |
| `Bomb Farm Community Hub` | Steam Community | `https://steamcommunity.com/app/4892010` | `2026-09-04` | community/discovery | Community content includes official announcements, friend-code discussions, beginner guides, reviews, screenshots. | Supports Updates, Codes, FAQ, Beginner Guide, and UX warnings. |
| `Friends code mass share` | Steam Discussion | `https://steamcommunity.com/app/4892010/discussions/0/589561964325560093/` | `2026-09-04` | community/discovery | Players repeatedly post friend codes. | Codes/Friend Codes page should answer where codes live and how source freshness works. |
| `Free loot with friend code + EXTRA CODE` | Steam Discussion | `https://steamcommunity.com/app/4892010/discussions/0/589562598193688309/` | `2026-09-04` | community/discovery | Players ask where to input codes and share `SORRY` / `KENDO` code mentions. | Codes page should be P0 partial, with official/current verification required before listing active codes. |
| Recent English review sample | Steam Reviews API | Steam appreviews endpoint | `2026-09-04` | community/discovery | Reviews mention unclear onboarding, UI responsiveness, lag/server issues, inventory limits, market concerns, idle-game appeal. | Strengthens Getting Started, Troubleshooting/FAQ, Market Safety, System Requirements, and Player-facing UX priorities. |

## Unsupported / Inaccessible Evidence

- Reddit: `agent-reach doctor --json` reported no Reddit backend installed. Reddit has no zero-config path in this environment. No Reddit market/player conclusion is made.
- Twitter/X: `twitter-cli` is installed but unauthenticated. The candidate X account is not treated as verified official social.
- Exa semantic search: unavailable because Exa MCP is not configured.
- Official Discord: not verified.
- Official public wiki URL: not verified.
- Official first-party YouTube channel: not verified.
- Exact active codes and friend-code rewards: patch-sensitive and not fully verified as publishable facts from official sources in this phase, except official announcement text for `KENDO` timing should still be rechecked before release.
- Named hero roster, exact item stats, drop rates, skill-node costs, market rules, and tier rankings: not verified for publication.
- Media reuse rights: not approved. Human Gate required before copying official Steam assets into the project.

## Phase 3 Freshness Recheck

| Topic | Source | URL | Checked | Result | Phase 3 Content Use |
|---|---|---|---|---|---|
| Latest update | Steam News API / Community Announcements | `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4892010&count=10&maxlength=5000&format=json` | `2026-09-04` | Latest official item found: `Weekly Rewards, Expandable Stashes, and Stability Improvements`, dated `2026-09-03 21:33 UTC`. | `/updates/` and `/updates/latest/` summarize weekly rewards, stash expansion, Return Bonus, Market/Ritual UI, and stability/security notes. |
| Codes | Steam News API / Community Announcements | `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=4892010&count=10&maxlength=5000&format=json` | `2026-09-04` | September 2 announcement states `KENDO` grants `3 hours` of `+100% Gold, XP, and Drop`, once per account until `2026-09-08 11:59 PM UTC-3`. | `/guides/codes/` records the dated official announcement and keeps the page patch-sensitive. |
| Steam Market safety | Steam store, Bomb Farm EULA, Steam Support | `https://store.steampowered.com/app/4892010/Bomb_Farm/`; `https://store.steampowered.com/eula/4892010_eula_0`; `https://help.steampowered.com/en/faqs/view/451E-96B3-D194-50FC`; `https://help.steampowered.com/en/faqs/view/1047-EDFM-2932-B81D` | `2026-09-04` | Store verifies Steam Market trading support; EULA verifies virtual-item and outside real-money trading boundaries; Steam Support verifies platform hold/restriction context. | `/guides/steam-market/` focuses on safety and explicitly excludes price tracking, profit advice, and market-value products. |

## Reliability Labels

- `official`: first-party Steam/store/news/achievement data.
- `observed`: directly observed in first-party platform surfaces, but not necessarily a stable gameplay fact.
- `community`: Steam reviews/discussions/guides or YouTube videos.
- `competitor`: inspected competitor pages.
- `discovery`: search result or player intent signal.
- `unverified`: found or suspected but not reliable enough for factual publication.

## Recording Rule

For factual claims:

```text
source_name
source_url
source_type
source_date
last_verified
confidence
what_it_supports
```

For useful discovery:

```text
query
platform
title
url
accessed_date
source_class
observed_intent_or_question
planning_effect
```
