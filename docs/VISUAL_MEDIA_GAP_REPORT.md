# Bomb Farm V2 Visual and Media Gap Report

## Audit Status

- Audit date: `2026-09-05`
- Mode: analysis and research only
- Production site: `https://bombfarmwiki.wiki/`
- Production repository SHA: `3dd9ec3281bec0419f80b993300d7ca6672718b9`
- Vercel project: `game-bombfarm-v2`
- Primary visual competitor: `https://bombfarm.wiki/`
- Official visual authority: Bomb Farm Steam store, Steam appdetails, and developer-authored Steam announcements
- Report verdict: **BLOCKED BY MEDIA RIGHTS**

The site is technically coherent and readable, but it is not yet visually identifiable as Bomb Farm without reading the words. The largest gap is not general polish. It is the absence of approved game media combined with a largely unchanged Starter hero, editorial typography, and generic presentation motifs.

`P0`, `P1`, and `P2` in this report are visual-audit severity labels only. They do not change the approved Page Inventory, publication phases, routes, or scope.

## 1. Baseline and Evidence

### Repository baseline

| Check | Result |
|---|---|
| Git branch | `main` |
| HEAD | `3dd9ec3281bec0419f80b993300d7ca6672718b9` |
| Initial working tree | Clean; `main...origin/main` |
| P0 public routes | 19 |
| Production media manifest | `src/data/media/media.json` contains `assets: []` and `pages: []` |
| Media files in `public/media/` | None |
| Production P0 main-content media | 0 images, 0 videos, and 0 media placements on every one of the 19 routes |

The 19 production pages were opened individually in Chrome. Every page had one H1 and working text content, but every page returned zero `main img`, zero `main video`/`iframe`, and no `data-media-placement` node.

### Local implementation inspected

- `game.config.ts`
- `src/styles/theme.css`
- `src/styles/global.css`
- `src/styles/page-families.css`
- `src/pages/index.astro`
- `src/pages/guides/[...slug].astro`
- `src/pages/[...path].astro`
- `src/components/home/GameHero.astro`
- `src/components/home/WikiCategories.astro`
- `src/components/home/PageCollection.astro`
- `src/components/wiki/WikiArticle.astro`
- `src/components/StaticWikiPage.astro`
- `src/components/EditorialArticle.astro`
- `src/components/media/GameMedia.astro`
- `src/components/media/ScreenshotGallery.astro`
- `src/components/media/VideoEmbed.astro`
- `src/data/media/catalog.ts`
- `src/data/media/media.json`
- all eight P0 MDX guides and all static P0 copy families
- `docs/PROJECT_BRIEF.md`, `docs/COMPETITOR_ANALYSIS.md`, `docs/CURRENT_STATUS.md`, and the Phase 4 report

### Online evidence inspected

- Current production homepage, all 19 P0 routes, and representative scrolled article/homepage states
- Competitor homepage, Guides hub, How to Play, Heroes hub, Updates hub, and Skill Tree article
- [Official Steam store](https://store.steampowered.com/app/4892010/Bomb_Farm/)
- [Official Steam appdetails response](https://store.steampowered.com/api/appdetails?appids=4892010&l=english)
- Six full-size official Steam screenshots and the official trailer thumbnail returned by appdetails
- [Developer-authored Steam announcements](https://steamcommunity.com/games/4892010/announcements/), inspected for media types only
- [GAME_SOP_2.2 at the approved commit](https://github.com/randyzer/GAME_SOP_2.2/blob/0a80e09e9e2aa658c1a34bf84590cd3e86df167d/docs/NEW_GAME_SITE_SOP_v2.2.md)
- [GAME_SOP QA checklist at the approved commit](https://github.com/randyzer/GAME_SOP_2.2/blob/0a80e09e9e2aa658c1a34bf84590cd3e86df167d/docs/QA_CHECKLIST.md)
- Starter `GameHero`, `WikiArticle`, and fallback theme at `e4964e1f640763f2c55db9f48446ac0dbe87afa3`

### Important evidence limits

- Competitor content and media were used only to observe presentation patterns. They are not factual or rights authority.
- The competitor's How to Play and Skill Tree pages include a third-party GameReed video. That is not a suitable first-party media source for this project.
- The official Steam trailer exists as one highlighted movie named `trailer`. No separate official YouTube identity was verified, and the trailer was not copied or embedded.
- The official store expressly reserves rights in game content and artwork and says reproduction/distribution requires written permission. Steam provenance is therefore not reuse permission.
- No official press kit, explicit fan-site media license, or written reuse approval was found in the first-party surfaces checked.

## 2. Competitor Visual Comparison

The competitor is not a design specification. It has repeated imagery, card-heavy sections, a third-party video, and one Heroes media panel that rendered blank during this audit. Its advantage is narrower: it uses game imagery early and repeatedly enough that visitors immediately recognize the product.

| Area | Bomb Farm V2 | Competitor | Gap | Severity | Recommendation |
|---|---|---|---|---|---|
| Homepage first screen | Generic slogan occupies the left half; the right half is empty because no hero media exists | Literal `Bomb Farm Wiki` heading, gameplay screenshot, Steam CTA, and beginner CTA appear together | Current first screen does not prove what game this is or show the game | P0 | Make an approved Bomb Farm visual the dominant anchor and use a literal display H1 |
| Brand recognition | Small `BF` paper-like mark and small header name | Bomb icon, blocky game-like wordmark treatment, literal game name | Current mark and slogan could belong to almost any guide site | P0 | Replace the generic mark treatment after logo rights are resolved; otherwise use a restrained original bomb/mining symbol |
| Gameplay screenshots | None on any P0 page | Homepage and representative hubs/articles reserve large first-screen screenshot areas | Major player tasks are described but never shown | P0 | Approve and map a small screenshot set to the pages where UI comprehension matters |
| Game UI visibility | No HUD, tabs, Battle grid, Ritual, Map, or House UI appears | Battle/Ritual/Map UI is visible before article prose | Current guides ask players to imagine unfamiliar interfaces | P0 | Surface one system-specific image near the relevant explanation |
| Video | No video | How to Play and Skill Tree contain a video block, though it is third-party and its thumbnail did not fully load | Current site has no motion overview; competitor implementation is not a safe source model | P1 | Link the official Steam trailer now; embed only after source, rights, and supported-host approval |
| Information density | Very large headlines consume most of the viewport; useful facts often begin below the fold | Smaller title block leaves room for a large image | Current typography delays task information | P0 | Reduce display-heading dominance and move verified facts closer to the first screen |
| Homepage rhythm | Hero, fact grid, one large light Start Here block, then repeated portal-card grids | Hero with image, fact cards, alternating media/text overview, then hub cards | Current page has fewer content modes and a longer run of near-identical cards | P1 | Alternate fact strip, compact task list, media/text section, updates, and FAQ |
| Article rhythm | Giant header, TOC plus prose, FAQ, related pages, sources | Title, large screenshot, prose, sticky TOC, video/media break, FAQ | Current long reads have no visual pause tied to the subject | P0 | Use existing hero/gallery/trailer placements and a small set of authored callouts |
| Section variety | Strong ruled layout but mostly heading/paragraph/list patterns | Images, facts, two-column sections, cards, TOC, video block | Current content is consistent but visually flat | P1 | Add only the page-specific modes that improve comprehension; do not create a page builder |
| Palette | Dark green-charcoal, cream, yellow/orange, occasional cyan | Warm black/brown, amber/orange, game screenshot colors | Current palette direction is partly aligned, but reads as abstract editorial branding | P1 | Warm surfaces toward iron/wood/bronze and let approved media carry the full color range |
| Surfaces | Flat dark canvas, thin off-white rules, graph-paper grid | Warm dark panels, amber edges, soft shadows, media frames | Current surfaces lack the game's wood/metal/framed-HUD character | P1 | Introduce restrained material cues through tokens and border treatment, not literal UI copying |
| Cards | Homepage repeats the same tall bordered card; inner pages are mostly ruled text | Competitor also uses many cards, but mixes them with media and prose | The problem is repetition more than the existence of cards | P1 | Keep category cards, simplify Browse All and some featured content into denser lists |
| Pure-color blocks | Large cream Start Here dispatch and orange primary button stand out sharply | Gold buttons and brown cards are more integrated into the base surface | Current light block feels like a Starter/editorial device rather than game UI | P1 | Reduce the light block's area and use dark framed emphasis with one controlled bright action |
| Icons | Text arrows, `+`, `BF`, and generic favicon geometry | Bomb mark, globe, chevrons, and category cues | Current icon language contains almost no game identity | P1 | Use a small original/licensed icon set for bomb, pickaxe, crystal, map, house, and ritual concepts |
| Typography | Iowan/Baskerville-style serif dominates H1 and body prose; mono labels support it | Squared/block display type plus neutral sans body | Current typography reads like a magazine or design portfolio | P0 | Move display headings toward sturdy block/slab/condensed character while preserving readable body text |
| CTA clarity | Start Here and Browse Wiki only; Steam appears mainly as a source link | `Play on Steam` is persistent in header and hero | The approved primary external action is not visually prominent | P0 | Add one verified Steam CTA without changing internal navigation or route scope |
| Navigation | Clear grouped desktop navigation and useful dropdown content | More page families plus a Steam CTA and language control | Current navigation is structurally strong; visual identity and external action are weaker | P1 | Preserve grouping; improve brand/CTA treatment, not information architecture |
| Guides hub | Huge SEO-style title plus text index; no visual anchor | Concise title followed by a large system screenshot and richer prose | Current hub is efficient but feels like an index template | P1 | Add one approved gameplay overview visual and keep the existing efficient guide list |
| Heroes hub | Verified role facts and careful limitations, but no character/HUD visual | Hero-oriented image slot exists, although it rendered blank in this session | Neither competitor behavior nor current page solves rights/completeness cleanly | P0 | Use an approved House or squad-dock screenshot; do not invent roster art or names |
| Updates | Date/freshness facts and sources are good; no announcement art or UI change visual | Large game screenshot establishes context before update prose | Current page looks like every other static page | P1 | Use an official announcement visual only after permission, or a small original changelog motif |
| Detailed article | Strong source discipline and TOC, but long uninterrupted text | Screenshot before prose and a later video block provide clear pauses | Player comprehension and memory suffer on UI-heavy topics | P0 | Match visual to the exact system being discussed; avoid a generic image on every article |
| Wiki completeness signal | 19 useful pages, clear sources, related pages, and navigation | More visible page families and richer screenshots suggest breadth | Current factual quality is stronger than its visual completeness signal | P1 | Surface verified breadth with a compact system navigator and selective media rather than more pages |
| Generic feeling | Removing Bomb Farm text leaves a generic dark editorial Starter | Removing text still leaves gameplay imagery, bomb mark, and game-like type | Current identity is text-dependent | P0 | Customize hero, mark, type character, motifs, and media while retaining architecture |

## 3. Bomb Farm Visual Identity Audit (20-Trait First-Party Review)

Status definitions:

- `VERIFIED`: the official source explicitly establishes the asset or label.
- `OBSERVED`: the trait is directly visible in first-party art, screenshots, or UI.
- `ASSUMED`: a design interpretation; it must not be treated as a game fact.

| Official Trait | Status | Evidence | Current Site | Match / Mismatch | Recommendation |
|---|---|---|---|---|---|
| Primary color | OBSERVED | Gold/bronze dominates the logo, HUD labels, frames, currency, and selected controls | Gold exists as `--color-primary`, but orange/yellow carry more visible emphasis | Partial match | Promote aged gold/bronze as the main structural accent rather than a secondary token |
| Secondary color | OBSERVED | Near-black brown and dark iron/wood dominate HUD panels | Background is cool green-charcoal; surface is olive-charcoal | Mismatch | Warm the dark neutrals toward brown-black iron and wood |
| Background color | OBSERVED | UI sits over bright cloudy mountain or water scenery while panels remain dark | Uniform dark grid background on every page | Mismatch | Keep readable dark pages, but let approved hero media introduce the scenic contrast |
| Accent colors | OBSERVED | Cyan crystal light, ember orange, red notifications, green progress, and purple rarity appear in small roles | Cyan, orange, yellow, green, and blue tokens exist, but several are arbitrary page-family colors | Partial match | Reserve each accent for a clear semantic role; do not rainbow-code families |
| Contrast | OBSERVED | Bright gold/white labels and jewel colors sit on very dark framed panels | Warm text on dark background is highly readable | Match | Preserve accessibility while increasing local contrast around key facts and media |
| Gradients and lighting | OBSERVED | Environmental imagery uses fog/light falloff; UI uses glow and lit edges rather than broad flat gradients | Grid plus one broad orange radial glow | Mismatch | Use restrained edge light/vignette treatment; avoid decorative glow with no game object or media anchor |
| Panel/surface treatment | OBSERVED | Layered dark panels resemble wood, forged metal, and stone | Flat dark surfaces with thin rules | Mismatch | Add subtle depth through layered dark tokens, inset edges, and selected panel hierarchy |
| Border treatment | OBSERVED | Bronze/gold frames, rivets, bevels, and thick containment define the HUD | Mostly one-pixel off-white borders | Mismatch | Shift important frames toward muted bronze and use stronger containment only where it carries meaning |
| Corner/radius treatment | OBSERVED | Game panels are mostly squared with small bevels/cut corners | Cards and media are square; buttons are square | Match | Keep low-radius geometry; add no pill-heavy redesign |
| Button treatment | OBSERVED | Compact dark buttons use gold outlines/icons; red is reserved for close/alerts | Large orange primary button and white bordered quiet button | Partial mismatch | Use compact dark framed actions with one bright gold primary; reserve red/orange for warning/action states |
| Icon treatment | OBSERVED | Pickaxe, map, house, anvil/ritual, mail, trophy, pin, power, gear, bomb, crystal, and item icons are central | Mostly text arrows and generic marks | Mismatch | Introduce a small rights-safe icon vocabulary based on verified system nouns |
| HUD/menu treatment | OBSERVED | Dense top utility bar, eight bottom tabs, selected tab, counters, badges, and squad dock | Spacious editorial header and simple nav text | Mismatch | Borrow hierarchy principles such as compact grouping and active frames, not a pixel-perfect HUD copy |
| Shape language | OBSERVED | Rectangular frames, square inventory cells, tab blocks, banners, and diamond/gem shapes | Rectangles and a diamond favicon exist, but without material or system meaning | Partial match | Keep geometry and connect it to map/gem/inventory semantics |
| Recurring motifs | OBSERVED | Bombs, pickaxes, crystals, treasure chests, lanterns, anvils, caves, map paths, houses/capsules | Graph-paper grid, rotated paper `BF` square, coordinate rail | Mismatch | Replace generic blueprint/editorial motifs with a restrained bomb/mine/crystal/map vocabulary |
| Environment/material | OBSERVED | Cave stone, timber, forged metal, warm lantern light, gems, cloud/mountain scenery | Abstract black/green canvas with no texture or material hierarchy | Mismatch | Use token-level material cues and approved media; do not fabricate game art in CSS |
| Typography character | OBSERVED | Logo is chunky stone/metal; HUD headings are compact uppercase display forms | Elegant old-style serif H1/body with tiny mono labels | Mismatch | Use sturdy, compact display character for game-facing headings and keep body text calm/readable |
| Screenshot composition | VERIFIED / OBSERVED | Appdetails returns six 1920x1080 screenshots; each centers the compact game window over a large scenic background | No screenshots; hero leaves the media column empty | Mismatch | Use approved screenshots in stable 16:9 frames with captions that identify the shown system |
| Character presentation | OBSERVED | Header art groups three pixel-art mining/bomber characters; screenshots show small pixel squads and capsule-contained heroes | No characters or hero portraits | Mismatch | Use approved key art or House/squad imagery; do not construct a named roster from the art |
| World/map presentation | OBSERVED | Map screenshot uses a vertical cave route, gold checks, world list, difficulty emblems, and jewel counters | Progression is text-only; maps token is pale blue and unused by P0 | Mismatch | Make the approved Map screenshot the anchor for progression if rights are granted |
| Mood | ASSUMED from observed art | Industrious, treasure-seeking, compact, busy, slightly playful, and progression-focused | Austere, precise, source-conscious, and editorial | Mismatch | Keep the site's trustworthiness but add energy, reward, and mining activity through approved visuals and denser system cues |

### Identity conclusion

The current palette captures three correct ingredients: dark base, warm gold, and crystal cyan. It misses the relationship between them. Official visuals use dark material frames as structure, gold as navigation/status, and jewel colors as localized game information. The site currently uses color mostly as page decoration, while its dominant identity comes from serif typography and a graph-paper grid that are not grounded in Bomb Farm.

## 4. Current Color, Theme, and Token Gap

Proposed values are directions, not implementation-ready hex codes. The official material supports hue families and relative roles, but it does not establish accessible web-token values.

| Token / Element | Current | Proposed Direction | Bomb Farm Evidence | Confidence |
|---|---|---|---|---|
| Background | `#121413` green-charcoal | Warmer near-black brown/iron | HUD and Ritual/House panels | High |
| Surface | `#20241f` olive-charcoal | Layered dark wood/metal brown, still neutral enough for long reading | Forge, Ritual, Map, and House frames | High |
| Text | `#f1ead7` warm off-white | Keep warm off-white | Official labels use warm white/gold on dark | High |
| Muted text | `#b9b19c` beige-gray | Keep but increase role separation from primary text | Secondary HUD labels and inactive controls | Medium |
| Primary | `#d7a53c` gold | Make aged bronze/gold the principal structural/action color | Logo, frames, selected tabs, currency | High |
| Accent | `#e85d35` orange-red | Restrict to action/warning moments | Close button, notifications, forge fire | High |
| Strong accent | `#ffcb52` bright yellow | Use for active state, coin/reward emphasis, and small highlights | HUD headings, currency, selected controls | High |
| Guides accent | `#ffcb52` | Keep as a restrained gold cue, not a full-page identity | Gold is general game UI color | Medium |
| Heroes accent | `#58c7b3` | Crystal cyan is plausible for hero/capsule energy, but current P0 hero pages do not resolve to this family | House capsules and crystal lighting | Medium |
| Maps accent | `#8fb7ff` | Prefer muted crystal cyan or bronze rather than generic light blue | Map screen is mostly brown/gold with small jewel counters | Medium |
| Updates accent | `#f2a15f` | Keep as subdued ember, not another unrelated family color | Forge/lantern light | Medium |
| Tools accent | `#58c7b3` | Keep as a utility cyan if it remains a small cue | Cyan machine/capsule lighting | Medium |
| Border | Text-derived translucent gray | Muted bronze for important frames; softer dark separators for prose | Bronze/gold HUD frames | High |
| Body background pattern | 32px graph-paper grid plus orange radial glow | Quieter material/vignette treatment or a much fainter grid tied to map/inventory semantics | Official UI uses panels, cells, and framed spaces rather than blueprint paper | Medium |
| Hover state | Card translation plus gray shadow | Keep motion restrained; use selected-frame/light behavior instead of every card lifting | HUD emphasizes state through frames and glow | Medium |
| Highlight card | Large cream block | Dark framed dispatch with controlled gold emphasis | Game surfaces remain dark even when selected | High |
| Badges/labels | Tiny mono uppercase text | Keep compact labels but pair them with game-like display headings and clearer icons | Compact uppercase HUD labels | High |
| Links | Mostly inherited text, underline/arrow | Use gold for actionable inline links and cyan only for utility/info | Gold selected controls; cyan system light | Medium |
| Buttons | Orange solid or transparent white border | Dark framed secondary plus one gold primary | HUD tabs and selected buttons | High |
| Headings | Large old-style serif | Sturdy block/slab/condensed display character; reduce size on hubs/articles | Logo and HUD headings | High |

### Specific theme problems

1. `--color-primary` is visually underused while `--color-accent` and `--color-accent-strong` carry most calls to action.
2. The theme comment says "cyan utility accents," but the dominant public impression is cream/yellow/orange.
3. `--color-heroes` exists but the current public Heroes pages resolve to the `guides` page family, so they render the Guides gold accent. This report does not recommend changing Inventory or feature flags merely for styling.
4. Disabled or unpublished families still have independent green/blue/red token values. They are harmless today, but should not become an excuse for rainbow page branding later.
5. The graph grid and coordinate rail are strong visual motifs with no first-party Bomb Farm provenance.
6. The one large cream Start Here block is the clearest pure-color block and feels disconnected from the dark game HUD.
7. Color customization alone did not remove Starter identity because typography, hero copy, spacing, mark treatment, and content rhythm remained generic.

## 5. Media Inventory, Provenance, and Rights

Rights status is conservative and is not legal advice. The controlling project fact is that no reuse approval is recorded. The Steam store's copyright statement means first-party availability cannot be treated as permission.

| Candidate | Source URL | First-party? | Pages Supported | Information Carried | Likely Usage | Rights Status |
|---|---|---:|---|---|---|---|
| Header/key art with logo and three characters | [Steam header art](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/e734040683a5bc6f4cb4d323dfd0c026b64c6d95/header.jpg?t=1787954440) | Yes | Homepage, global brand, About | Logo treatment, bombs, miners, crystals, cave, treasure | Hero/brand reference; local image only after written permission | **DO-NOT-USE** without written permission |
| Battle grid screenshot | [Screenshot 0](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/907f4c81a582429b606a4e5e05d75323172e778f/ss_907f4c81a582429b606a4e5e05d75323172e778f.1920x1080.jpg?t=1787954440) | Yes | Homepage, Guides, Getting Started, How to Play, Controls, Heroes/roles | Battle grid, tabs, counters, squad dock, resources | Hero or inline screenshot | **DO-NOT-USE** without written permission |
| Ritual sealed/drop interface | [Screenshot 1](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/d2dc164a29f5231157aad200e628b0513a8122c0/ss_d2dc164a29f5231157aad200e628b0513a8122c0.1920x1080.jpg?t=1787954440) | Yes | Gear and Ritual, Getting Started | Ritual room, item row, tabs, forge-like stations | Inline system screenshot | **DO-NOT-USE** without written permission |
| Forge/equipment screen | [Screenshot 2](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/a9a5d3c6d1fc9cf504c6fad27ab7fc770c29ac44/ss_a9a5d3c6d1fc9cf504c6fad27ab7fc770c29ac44.1920x1080.jpg?t=1787954440) | Yes | Gear and Ritual, Achievements | Forge character, equipment row, rarity frames, upgrade values | Inline screenshot or gallery | **DO-NOT-USE** without written permission |
| Ritual hero/capsule screen | [Screenshot 3](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/bfb44de1ea5d6eab9bcfd585de7d0af6c4edc6d1/ss_bfb44de1ea5d6eab9bcfd585de7d0af6c4edc6d1.1920x1080.jpg?t=1787954440) | Yes | Heroes, Hero Roles, Gear and Ritual | Hero in lit capsule, item/resource row, rarity colors | Hero/inline screenshot | **DO-NOT-USE** without written permission |
| Map/progression screen | [Screenshot 4](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/3afbdbe7b600d6994fd384efef7e08dbad749760/ss_3afbdbe7b600d6994fd384efef7e08dbad749760.1920x1080.jpg?t=1787954440) | Yes | Progression, Getting Started, homepage | World list, node path, checks, difficulty emblems, jewel counters | Progression hero or inline screenshot | **DO-NOT-USE** without written permission |
| House/capsule screen | [Screenshot 5](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4892010/c7706d1da92172b7d1f5510dbaece0dfb04e16c3/ss_c7706d1da92172b7d1f5510dbaece0dfb04e16c3.1920x1080.jpg?t=1787954440) | Yes | Heroes, Energy Rotation, Getting Started | Capsules, rarity ladder, recovery/slot controls, squad dock | Hero or inline screenshot | **DO-NOT-USE** without written permission |
| Steam-hosted trailer, movie `257376181` | [Steam store media section](https://store.steampowered.com/app/4892010/Bomb_Farm/) | Yes | Homepage, How to Play | Moving gameplay overview; trailer thumbnail shows a Battle grid and bright environment | Link now; embed only after rights and supported-host decision | **RIGHTS-UNCLEAR** for embed/copy; linking to Steam is acceptable |
| Developer announcement imagery | [Steam announcements](https://steamcommunity.com/games/4892010/announcements/) | Yes, when posted by the developer | Updates and Latest Update | Patch context and selected game screens | Announcement thumbnail/header after explicit permission | **DO-NOT-USE** without written permission |
| Steam achievement icons | [Steam achievements surface](https://steamcommunity.com/stats/4892010/achievements/) | First-party platform presentation of game assets | Achievements | Individual milestone identity | Compact checklist icons after explicit permission | **RIGHTS-UNCLEAR**; no approval recorded |
| New screenshots captured by the site operator from the live client | Not yet created | Direct observation, but still depicts copyrighted game content | Controls, Skill Tree, Market, Codes, any missing P0 UI | Exact current English UI and page-specific steps | Local optimized screenshot with provenance | **LIKELY-USABLE-BUT-NEEDS-CONFIRMATION**; confirm game/developer policy first |
| Original factual diagrams made without copied art | Not an official asset | Project-authored | Energy Rotation, core loop, progression sequence | Relationships already verified in text | Small diagram or process strip | **LIKELY-USABLE-BUT-NEEDS-CONFIRMATION** for factual review; lowest copyright dependency |

### Rights conclusion

- `APPROVED`: no official media candidate is currently approved.
- `LIKELY-USABLE-BUT-NEEDS-CONFIRMATION`: operator-captured UI and original factual diagrams, subject to policy and factual review.
- `RIGHTS-UNCLEAR`: Steam trailer embedding and achievement icons.
- `DO-NOT-USE`: copying Steam artwork/screenshots/announcement imagery into the site without written permission.
- All competitor images and the competitor's third-party video are **DO-NOT-USE**.

The most direct unblock is a narrow written permission decision covering official store art/screenshots and fan-wiki use. If that cannot be obtained, approve a rights-reviewed operator-capture policy plus original diagrams. Do not hotlink Steam assets.

## 6. Media Coverage Gap Across All 19 P0 Pages

| Route | Current Media | Recommended Media | Why | Priority | Rights Dependency |
|---|---|---|---|---|---|
| `/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: approved key art or Battle screenshot as hero; optional 3-image system gallery; official trailer link | The first screen must identify the game immediately | P0 | Written permission for Steam assets, or approved operator capture |
| `/guides/` | CURRENTLY TEXT-ONLY | MEDIA RECOMMENDED: one Battle/HUD overview image above the guide index | Gives the guide library a concrete game anchor without cluttering the index | P1 | Approved Battle screenshot |
| `/guides/getting-started/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: Battle/HUD screenshot plus one Map or House screenshot | New players need screen orientation more than abstract prose | P0 | Approved screenshots; no official account-link screenshot currently identified |
| `/guides/how-to-play/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: Battle screenshot near the loop and official trailer link after the overview | Shows the loop and breaks a long text sequence | P0 | Screenshot permission; trailer link does not require copying |
| `/guides/controls/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: current English-client screenshot with authored labels for the major controls/tabs | This is a visual task; text-only is materially weaker | P0 | New operator capture and game-use confirmation |
| `/guides/progression/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: Map screenshot with caption; optional original five-world/five-difficulty fact strip | The official Map image directly explains the progression model | P0 | Steam screenshot permission or operator capture |
| `/guides/gear-and-ritual/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: Ritual and Forge screenshots as a two-image gallery | Players need to distinguish sealed drops, forge, and Ritual contexts | P0 | Steam screenshot permission |
| `/guides/skill-tree/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: current Abilities/skill-tree screenshot; original planning callout if no image is approved | The page describes a screen absent from the official six screenshots | P0 | New operator capture; factual review; no identified official screenshot candidate |
| `/guides/steam-market/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: current in-game Market confirmation flow, with sensitive account data removed | Safety guidance is more useful when the correct official flow is recognizable | P0 | New operator capture, privacy scrub, and rights confirmation |
| `/guides/codes/` | CURRENTLY TEXT-ONLY | MEDIA RECOMMENDED: current code-entry UI or a rights-approved developer announcement visual | Helps players find the correct entry point and distinguish codes from friend codes | P1 | New operator capture or written permission; must be refreshed when UI changes |
| `/heroes/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: House or squad-dock screenshot; no fabricated roster collage | Character/system identity is otherwise completely absent | P0 | Steam screenshot permission or operator capture |
| `/heroes/roles/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: Battle squad dock or hero panel showing role context; original four-role diagram as fallback | Role labels are easier to understand with team context | P0 | Operator capture likely needed; no complete official role panel identified |
| `/heroes/energy-rotation/` | CURRENTLY TEXT-ONLY | MEDIA RECOMMENDED: House screenshot plus an original three-team rotation diagram | The relationship between active squad and recovery is spatial/temporal | P1 | House screenshot permission; diagram factual review |
| `/updates/` | CURRENTLY TEXT-ONLY | MEDIA RECOMMENDED: one reusable approved changelog/system image or developer announcement header | Differentiates the update family from generic static guides | P1 | Written permission for announcement imagery, or original motif |
| `/updates/latest/` | CURRENTLY TEXT-ONLY | MEDIA HIGH PRIORITY: image tied to the affected system only when the announcement supplies one; otherwise no generic stock image | A patch summary benefits from showing what changed, but stale/generic art would mislead | P0 | Announcement asset permission and freshness ownership |
| `/tools/` | CURRENTLY TEXT-ONLY | MEDIA OPTIONAL: compact original icons for checklist/spec tools | Utility hub can remain dense and text-led | P2 | Original/licensed icons only |
| `/tools/achievements/` | CURRENTLY TEXT-ONLY | MEDIA RECOMMENDED: selected achievement icons or an original milestone strip | A 21-item text checklist is hard to scan | P1 | Steam icon rights confirmation or original icon treatment |
| `/tools/system-requirements/` | CURRENTLY TEXT-ONLY | MEDIA OPTIONAL: no gameplay media required; improve table/fact presentation instead | The task is comparison, not visual identification | P2 | None if kept text/table only |
| `/faq/` | CURRENTLY TEXT-ONLY | MEDIA OPTIONAL: no large hero; small brand/system icon cues only | FAQ should prioritize fast answers and avoid decorative media | P2 | Original/licensed icons only |

### Minimum high-impact media set

The smallest useful launch-quality set is not 19 unique images. It is:

1. One approved homepage key visual or Battle screenshot.
2. One approved Map screenshot.
3. Two approved Ritual/Forge screenshots.
4. One approved House/squad screenshot.
5. Three new rights-reviewed operator captures for Controls, Skill Tree, and Market.
6. One official trailer link, with embedding deferred until rights and hosting support are clear.

This set can serve the highest-priority pages without creating an asset pipeline or repeating irrelevant media everywhere.

## 7. Video Gap

| Video Type | Official Evidence | Useful Page / Placement | Player Value | SEO / Content Value | Embed or Link |
|---|---|---|---|---|---|
| Official trailer | VERIFIED: one highlighted Steam movie named `trailer`, ID `257376181` | Homepage after the first game overview; How to Play after the core-loop explanation | Quickly shows the compact client, movement, combat, and progression feel | Supports game-intent comprehension and time on page | **Link now** to the official Steam page; embed only after written permission and a supported first-party host |
| Gameplay trailer | No separate first-party item identified; the official trailer thumbnail is gameplay-oriented | Same as above if the existing trailer is formally described as gameplay by the developer | Same | Same | Do not rename or claim a separate trailer without evidence |
| Launch trailer | Not identified in appdetails or checked developer announcements | None | Unknown | Unknown | Do not add |
| Developer showcase | Not identified in the checked first-party surfaces | Controls/Skill Tree only if an official walkthrough later exists | Could answer UI-specific questions | High for difficult systems | Do not add until verified |
| Patch/update video | Not identified in checked developer announcements | `/updates/latest/` only when a specific update includes a video | Shows changed behavior | High but freshness-sensitive | Link to the exact official post; do not reuse a generic trailer as patch evidence |

The competitor's GameReed embed demonstrates that a mid-article video creates rhythm, but it does not establish acceptable provenance. Bomb Farm V2 should not match that pattern using third-party media merely to fill space.

Starter Media V1 supports YouTube IDs, not Steam-hosted HLS/DASH. That is a real host-support boundary, but it does not justify adding an arbitrary iframe or remote-video engine. The smallest current action is an external Steam trailer link. A reusable Starter improvement should be considered only if multiple real projects need a rights-safe first-party Steam trailer pattern.

## 8. Homepage Gap

### Ten required answers

1. **Does the homepage immediately look like Bomb Farm?** No. It looks like a polished dark editorial template with Bomb Farm text.
2. **Is there a strong game-specific visual anchor?** No. The hero's second grid column is empty and the only custom brand mark is `BF` in a rotated light square.
3. **Are verified facts visible enough?** They are well selected, but they begin below the first 900px viewport. The first screen spends more space on a generic slogan than on the game.
4. **Are important wiki entry points obvious?** Yes. Start Here, Guides, Heroes, Gear and Ritual, Progression, Updates, and Tools are discoverable. The missing obvious action is `Play on Steam`.
5. **Is the page too card-heavy?** Moderately. Category, featured, important systems, latest updates, and Browse All reuse similar portal cards. The deeper problem is repeated treatment, not card existence.
6. **Are there large pure-color blocks?** Yes, primarily the cream Start Here dispatch. The orange primary button is appropriately small; the dispatch is visually disproportionate.
7. **Does it look like a generic Starter?** Yes. The homepage `GameHero` markup and copy are the same as the authoritative Starter baseline; only theme values and brand inputs differ.
8. **Is it more like a SaaS landing page or a game wiki portal?** It is closer to an editorial/agency landing page than a game wiki. It is not a conventional SaaS page, but the oversized slogan and repeated feature cards create the same distance from the product itself.
9. **What should be visually dominant?** Bomb Farm's name, one approved gameplay/key visual, a concise game description, a Steam CTA, and a compact verified fact strip.
10. **What should be visually quieter?** The generic slogan, coordinate rail, graph grid, large cream block, repeated descriptions, source methodology on the homepage, and redundant Browse All cards.

### Recommended homepage hierarchy

1. **Header:** recognizable rights-safe mark, Bomb Farm Wiki name, current grouped navigation, and one external Play on Steam action.
2. **First viewport:** literal `Bomb Farm Wiki` H1, concise player value statement, approved key visual/gameplay screenshot, Start Here, and Play on Steam.
3. **Compact fact strip:** platform, free-to-play, release date, five worlds/five difficulties/600 stages, four roles/three teams/20 abilities.
4. **Start Here:** one strong beginner path, visually integrated with the dark surface rather than a large pure-light panel.
5. **System navigator:** Guides, Heroes, Gear/Ritual, Progression/Map, Updates, and Tools. Keep only the most useful card form.
6. **How the game fits together:** one media/text section pairing Battle with the main progression loop.
7. **Featured guides:** denser rows or small media-backed links, not another full run of identical tall cards.
8. **Latest update:** date-forward, visually distinct, and tied to an approved announcement/system visual only when current.
9. **FAQ:** retain the existing concise accordion.
10. **Browse All and sources:** compact lists at the end; do not make them compete with primary tasks.

This hierarchy needs no new route, CMS, block registry, or page builder.

## 9. Article Visual Rhythm

| Page Family | Current Rhythm Problem | Better Rhythm | Needed Reusable Capability |
|---|---|---|---|
| MDX guides | Giant title/metadata, then TOC plus uninterrupted serif prose, FAQ, related pages, sources | Compact title, relevant hero image when useful, optional facts, TOC, main explanation, one system screenshot, tips/callout, FAQ, related, sources | Existing `WikiArticle` hero/gallery/trailer mapping plus a minimal authored callout style; no generic slots |
| Guides hub | Giant title plus one long index list | Compact hub title, one Battle overview image, short orientation, existing guide index, related, sources | Minimal hub media support or a project-specific image placement |
| Static Heroes pages | Title, Quick Facts, two text sections, FAQ, related, sources; every page uses the same skeleton | House/squad visual, facts, explanation, original role/rotation diagram where useful, FAQ, related, sources | `StaticWikiPage` needs a narrow optional media input; preserve `StaticWikiCopy` contract |
| Static Updates pages | Same static skeleton as Heroes/Tools | Date/status strip, concise summary, affected-system visual if approved, change list, FAQ, sources | Narrow update visual treatment; avoid a generic news engine |
| Tools/Achievements | Quick Facts followed by long bullet list | Fact strip, grouped checklist/table, optional selected icons, sources | Existing structured copy can be presented with a denser checklist; no database required |
| System Requirements | Text list repeats minimum/recommended patterns | Compact comparison table or paired fact columns, then troubleshooting notes | Existing static presentation can add one purpose-built comparison mode if justified |
| FAQ | Header, facts, prose, accordion, related, sources | Keep answer-first accordion; reduce preamble; use only small system cues | No media engine needed |

Do not force hero media, a trailer, or a gallery onto every page. Media is valuable where it answers a spatial, visual, or identification question. System Requirements and FAQ are valid no-media pages.

## 10. Card and Pure-Color Block Audit

The current site is not broadly dominated by filled cards. Inner pages rely more on thin rules and long text. The template feeling is strongest on the homepage, where the same portal-card treatment repeats across several sections.

| Current Use | Classification | Reason / Recommendation |
|---|---|---|
| Homepage Start Here cream dispatch | SIMPLIFY | Keep its prominence but reduce the pure-light area; use a dark framed dispatch with one gold action |
| Three Browse by Category cards | KEEP | Three clear top-level choices are appropriate; add small rights-safe visual cues only after approval |
| Featured Guides tall cards | CONVERT TO SIMPLE LIST | Four large text cards repeat the category pattern and slow scanning |
| Important Systems single card | CONVERT TO INLINE SECTION | A one-card grid feels like a component artifact; Heroes can be a full-width system row with media |
| Latest Update single card | CONVERT TO FACT STRIP | Date, title, and affected systems need stronger hierarchy than a generic card |
| Browse All tall cards without descriptions | CONVERT TO SIMPLE LIST | The cards retain large minimum height even when descriptions are removed, creating unnecessary empty space |
| Quick Facts grid | KEEP | It is one of the most wiki-like and useful current patterns; make it more compact near the first screen |
| Guide index rows | KEEP | Dense, scannable, and more appropriate than more cards |
| Article H2 sections | CONVERT TO INLINE SECTION | Already inline; retain. Add media only when it explains the section |
| FAQ accordion | KEEP | The structure serves a clear player task and avoids nested cards |
| Related Pages rows | KEEP / SIMPLIFY | Useful, but can become more compact if page media and primary content need visual priority |
| Sources list | KEEP | Source discipline is a differentiator; visually quiet it rather than hiding it |
| Primary orange button | KEEP | One bright action is appropriate; align hue and framing with approved game direction |
| Repeated one-pixel framed surfaces | OTHER: VARY HIERARCHY | Keep rules for reading structure, but use stronger bronze containment only for high-value facts/media |

## 11. Verified Facts Presentation

No new game fact is introduced below. Every fact is already present in current public copy or Quick Facts.

| Fact | Currently Visible? | Current Placement | Better Placement | Confidence |
|---|---:|---|---|---|
| Release date | Yes | Homepage Quick Facts below the hero | Compact first-screen fact strip | High |
| Platform | Yes | Homepage Quick Facts; System Requirements | First-screen badge/fact plus full detail in requirements | High |
| Free to play | Yes | Homepage Quick Facts | First-screen badge beside Steam CTA | High |
| Five worlds | Yes | Homepage Quick Facts and Progression | Homepage strip plus Map-caption context | High |
| Five difficulties | Yes | Homepage Quick Facts and Progression | Homepage strip plus Progression fact row | High |
| 600 stages | Yes | Homepage Quick Facts, Progression, Achievements | Hero-adjacent fact strip and Progression visual caption | High |
| Four hero roles | Yes | Homepage and Heroes Quick Facts | Heroes first screen with a four-role original icon/fact row | High |
| Three teams | Yes | Homepage, Heroes, Energy Rotation | Heroes/How to Play visual caption and rotation diagram | High |
| 20 abilities, levels 1 to 10 | Yes | Homepage and Heroes Quick Facts | Heroes fact strip; avoid presenting it as the account skill-tree node count | High |
| 21 achievements | Yes | Achievements Quick Facts and checklist | Tools/achievements first-screen total and grouped checklist | High |
| Latest checked update date | Yes | Homepage update card and Updates Quick Facts | Date-forward update strip above the summary | High at the recorded verification date |
| Windows requirements | Yes | System Requirements facts and lists | Minimum vs recommended comparison table | High |

The current site often presents verified facts more conservatively than necessary. Stronger placement does not mean stronger claims. It means moving the same sourced facts closer to the player's decision and pairing them with the relevant screen when rights permit.

## 12. Starter Residue and Generic UI Audit

### Direct answer

**If all Bomb Farm-specific text were removed, the site would still look obviously like the generic Starter.**

This is proven, not inferred:

- The current `GameHero.astro` is functionally the same as the Starter baseline at `e4964e1...`, including `Find your route. Play with a plan.`
- The Starter hero always uses a two-column desktop grid. When `heroMedia` is absent, markup hides the media but CSS keeps the second column, producing the large empty right half visible in production.
- The site changed the fallback colors, but retained the Starter's old-style serif display/body rhythm, tiny mono eyebrows, graph grid, coordinate rail, ruled sections, portal cards, and generic text arrows.
- The brand mark is the configurable text `BF`, not a Bomb Farm-derived or rights-safe original symbol.
- The media components are present, but the empty manifest means the most game-specific Starter capability is never seen.

| Element | Classification | Finding |
|---|---|---|
| Dark/gold/cyan palette | Both | Project-specific values in a Starter token mechanism; direction is partly grounded but incomplete |
| `Find your route. Play with a plan.` hero | Starter-level | Exact generic Starter content remains on the real game's homepage |
| Two-column empty hero | Starter-level | Optional media does not collapse the desktop layout when absent |
| Iowan/Baskerville display typography | Starter-level | Dominates identity more than Bomb Farm art or UI character |
| Graph-paper background | Starter-level | Strong generic design motif with no first-party game evidence |
| Coordinate side rail | Starter-level | Decorative Starter residue; does not help a player task |
| `BF` rotated paper mark | Both | Configurable project initials inside a generic Starter treatment |
| Page-family accent lines | Both | Reusable mechanism with project colors; subtle enough, but Heroes currently receives Guides gold |
| Tall portal cards | Starter-level | Useful base primitive overused by homepage composition |
| Quick Facts | Both | Reusable primitive filled with strong Bomb Farm facts; keep |
| Sources and Last Verified | Both | Reusable structure with project evidence; a meaningful strength |
| GameMedia/gallery/video components | Starter-level capability | Good reusable boundary, currently invisible because no asset is approved |
| Favicon diamond/cross | Project-level residue | Current file is not recognizable as Bomb Farm and is not the official logo |
| Text-arrow icon treatment | Starter-level | Functional but generic; no system identity |
| Hero media, gallery, trailer | Both | Starter supports them, but Bomb Farm project data supplies none |

### Starter capability diagnosis

Starter 2.0 is not missing the basic media manifest, image component, gallery, video component, or MDX article placements. It does have narrower reusable gaps:

1. Optional homepage media leaves the desktop hero in a two-column layout even when the second column is absent.
2. `GameHero` hard-codes a generic marketing headline instead of requiring the real project to provide a game-specific display headline.
3. Static wiki pages and guide hubs do not consume the media catalog, while MDX `WikiArticle` does.
4. Page-family styling is tied to runtime module. A partial Heroes hub implemented under `guides` cannot use the Heroes accent without violating the current rule.
5. The supplied visual vocabulary strongly favors editorial cards/rules and offers few lightweight game-wiki alternatives such as a compact system strip, icon list, or comparison table.

These are candidates, not authorization to redesign the Starter or backport changes.

## 13. Root Cause Classification

Ownership codes:

- `A`: Bomb Farm project-specific
- `B`: GAME_SOP methodology gap
- `C`: Starter reusable implementation gap
- `D`: Master Prompt execution/enforcement gap

| Major Finding | Ownership | Evidence | Why This Ownership |
|---|---|---|---|
| No approved media on any P0 page | A + B + D | Empty manifest; 19/19 routes text-only; plan identified media but rights never resolved | Asset rights are project-specific; method and execution allowed the unresolved state to continue through release |
| Homepage remains generic and half-empty | A + C + D | Current hero equals Starter baseline and retains an empty second column | Project did not customize content; Starter no-media state is weak; enforcement did not catch the first-screen result |
| Palette is only partially tied to the game | A + D | Correct dark/gold/cyan ingredients but generic grid, serif, and orange dominance | The project made a provisional palette, but execution treated token replacement as sufficient visual identity |
| Static P0 pages cannot use manifest media | C | `StaticWikiPage` never reads `mediaCatalog`; `WikiArticle` does | Reusable presentation capability is inconsistent by page family |
| Guide hub cannot show a visual anchor | C | Hub branch renders header, index, related, sources only | The hub is a common reusable page type and lacks narrow media support |
| Rights research stopped at `not approved` | A + B | No press-kit/license result, permission request, operator-capture policy, owner, or fallback deadline | SOP records rights but does not define a closure workflow for media availability |
| Human gates accepted 19/19 text-only pages | B + D | SOP blocks text-only only when approved media exists; Master Prompt says no media is legal | Rules protected copyright correctly but did not force a pre-release rights/fallback decision |
| Heroes accent token is not visible on Heroes pages | A + C | Production reports `data-page-family="guides"` and gold accent on `/heroes/` | Project runtime grouping and Starter module-to-visual-family coupling conflict |
| Typography and motifs are not game-specific | A + C + D | Starter global styles dominate; no official visual anchor | Flexible edge was under-customized and qualitative enforcement was too permissive |
| Primary Steam CTA is absent from the visual hierarchy | A + D | Project Brief names it, production hero/header omit it | Project-specific implementation miss not caught by reconciliation |
| Competitor feels richer partly through unapproved/third-party media | A | Competitor screenshots and GameReed video are not reusable evidence | This is a project rights constraint, not a reason to copy or expand architecture |

### What is not a root cause

- Page count is not the problem. The 19 P0 pages cover useful player tasks.
- Factual caution is not the problem. Source boundaries are a strength.
- Lack of a CMS/database/page builder is not the problem.
- Astro, static generation, Page Inventory, routing, or navigation architecture are not the problem.
- The media manifest design is not the problem. It is empty because governance never produced approved assets.

## 14. Proposed Changes by Layer

### A. Bomb Farm V2.1

| Priority | Recommendation | Evidence / Boundary |
|---|---|---|
| MUST | Resolve a written media-rights decision for Steam art/screenshots, or approve a documented operator-capture policy | Without one, the highest-impact visual fixes cannot ship |
| MUST | Replace the generic homepage display message with literal Bomb Farm identity and remove the empty no-media column behavior | First viewport currently fails product recognition |
| MUST | Add one Play on Steam CTA using the verified store URL | Approved project goal; no new route or navigation family |
| MUST | Establish one approved visual for homepage, Getting Started/How to Play, Progression, Gear/Ritual, Heroes, Skill Tree, Market, and Latest Update as available | These are the P0 comprehension gaps |
| SHOULD | Warm background/surface/border roles toward the observed iron/wood/bronze hierarchy | Current hues are close but relationships are generic |
| SHOULD | Replace or quiet graph-grid, coordinate rail, `BF` paper mark, and diamond/cross favicon | They are visually strong and not game-grounded |
| SHOULD | Reduce display-heading scale on hubs/articles and use a sturdier game-like display character | More useful content should enter the first screen |
| SHOULD | Turn Browse All and some featured cards into compact lists; retain category cards and Quick Facts | Reduces repeated template/card rhythm |
| SHOULD | Use original factual diagrams for energy rotation/core loop where screenshot rights remain unresolved | Lowest dependency, high explanatory value |
| COULD | Add a small original icon set for verified systems | Useful after hero/media/typography priorities are solved |
| DO NOT CHANGE | Routes, 34-page Inventory, 19 P0 scope, navigation groups, feature flags, factual boundaries, source policy, or empty unsupported roster/data | None of these caused the visual gap |

### B. GAME_SOP

| Priority | Recommendation | Evidence / Boundary |
|---|---|---|
| MUST | Add a Media Rights Resolution Gate with owner, permission status, fallback, deadline, and explicit `cannot launch visually rich` outcome | Current process recorded rights uncertainty but never closed it |
| MUST | Distinguish `relevant media exists` from `approved media exists`, then require an action plan when the first is true and the second is false | Existing blocking rule activates only after approval, creating a permanent loophole |
| SHOULD | Require a first-viewport comparison against first-party game visuals at Planning and Release Gates | Token review alone did not reveal the empty/generic hero |
| SHOULD | Require proof that identity is carried by at least three dimensions, not palette alone: media/mark, typography, motifs/surfaces, or UI rhythm | Current color swap passed while Starter identity remained dominant |
| SHOULD | Add a minimum media coverage table for core page families, allowing documented no-media exceptions | Prevents all P0 pages defaulting to text-only |
| SHOULD | Record whether operator-captured screenshots are permitted and how privacy/account data will be scrubbed | Controls/Skill Tree/Market need captures absent from official screenshots |
| COULD | Add a post-launch visual debt status distinct from factual/content debt | Keeps media work visible without inventing content |
| DO NOT CHANGE | Provenance-is-not-rights rule, competitor asset prohibition, or Human Rights Gate | Those rules prevented unsafe copying and are correct |

### C. Starter

| Priority | Recommendation | Evidence / Boundary |
|---|---|---|
| MUST | Make the no-media `GameHero` collapse to one intentional column | Current optional state creates an empty half-screen |
| MUST | Remove the hard-coded generic hero slogan from the reusable component; require or allow a game-specific display title | Current project shipped exact Starter headline |
| SHOULD | Give `StaticWikiPage` and guide hub one narrow optional manifest-backed hero/media placement | Common P0 families currently cannot use the same approved media path as MDX guides |
| SHOULD | Provide one compact link-list and one fact/update strip alternative to tall portal cards | Reduces template repetition without a layout DSL |
| SHOULD | Provide a documented, purpose-built external store CTA input/pattern | Store CTA is common across real game wikis |
| COULD | Revisit module-to-visual-family coupling only if a second real project proves the same partial-hub problem | One project is insufficient evidence for a schema change |
| DO NOT CHANGE | Local-image manifest, provenance fields, YouTube privacy embed, Page Inventory authority, or no-remote-image rule | Existing boundaries are sound |

### D. Master Prompt

| Priority | Recommendation | Evidence / Boundary |
|---|---|---|
| MUST | Require the Phase 4 report to count media placements by P0 route and explain every core text-only exception | The current 19/19 zero-media state should have been explicit at the release decision |
| MUST | Add a first-screen question: "Would this page identify the game if its proper nouns were removed?" | Current site fails this test despite changed colors |
| MUST | Require a rights-resolution outcome before accepting `Known Defer`: permission obtained, operator capture approved, original fallback approved, or release explicitly waived | `No media is legal` became an endpoint instead of a temporary safeguard |
| SHOULD | Compare current `GameHero` and theme against the Starter baseline during reconciliation | Exact generic hero copy remained unnoticed |
| SHOULD | Verify approved project CTAs, not only internal navigation | Play on Steam was approved but not visibly implemented |
| SHOULD | Record representative screenshots for homepage, hub, guide, static wiki, update, tool, and FAQ in the Human Gate | DOM checks cannot reveal empty composition or oversized headings |
| COULD | Add a qualitative card/pure-color repetition prompt | Useful, but lower priority than identity and media |
| DO NOT CHANGE | Hard stops, source rules, no-overengineering rules, or explicit deployment authorization | They are unrelated strengths |

## 15. Priority Implementation Phases

### Phase V1 - Rights and Identity Decision

- Goal: unblock a legally and visually grounded Bomb Farm identity.
- Affected pages: all, with homepage first.
- Affected components: brand mark/favicon, `GameHero`, theme tokens.
- Dependencies: written reuse decision or approved operator-capture/original-diagram policy.
- Rights dependency: highest.
- Expected visible impact: very high; removes the generic first impression.
- Risk: legal/brand misuse if rushed.
- Ownership: Bomb Farm-specific, with SOP/Prompt gate learnings.

### Phase V2 - Homepage Recognition

- Goal: make the first viewport unmistakably Bomb Farm and expose the Steam action and strongest facts.
- Affected pages: `/` only.
- Affected components: `GameHero`, Quick Facts placement, Start Here, selected PageCollection treatment.
- Dependencies: at least one approved key visual/gameplay image.
- Rights dependency: high.
- Expected visible impact: highest user-visible gain.
- Risk: overlarge art or SEO text being displaced; preserve canonical content and accessibility.
- Ownership: mostly Bomb Farm-specific; no-media hero collapse is reusable.

### Phase V3 - Core System Media

- Goal: show the UI on pages where players must recognize screens or flows.
- Affected pages: Getting Started, How to Play, Controls, Progression, Gear/Ritual, Skill Tree, Steam Market, Heroes, Hero Roles, Energy Rotation, Latest Update.
- Affected components: existing `WikiArticle` media placements; minimal static/hub media support.
- Dependencies: approved screenshot set, English-client captures for missing systems, captions/alt/provenance.
- Rights dependency: high.
- Expected visible impact: high comprehension and wiki credibility.
- Risk: stale UI and private account data; assign freshness ownership.
- Ownership: project-specific assets plus a small reusable static-page capability.

### Phase V4 - Article Rhythm and Density

- Goal: reduce uninterrupted text and repeated homepage card patterns.
- Affected pages: all eight MDX guides, static Heroes/Updates/Tools/FAQ families, homepage collections.
- Affected components: prose/callout styling, compact lists, update strip, optional comparison table.
- Dependencies: none for no-media rhythm; some improvements become stronger with approved images.
- Rights dependency: low to medium.
- Expected visible impact: medium-high.
- Risk: accidental component proliferation; keep every mode purpose-built.
- Ownership: mixed project and reusable Starter improvements.

### Phase V5 - SOP, Starter, and Prompt Learning Record

- Goal: prevent another real project from passing with unresolved media and unchanged hero identity.
- Affected pages: none in this repository.
- Affected components: none in this repository.
- Dependencies: human approval for separate upstream tasks and evidence from at least one additional project for schema-level changes.
- Rights dependency: none.
- Expected visible impact: none immediately; high process value later.
- Risk: overgeneralizing from one project.
- Ownership: reusable methodology/tooling only.

### Phase V6 - Final Comparison

- Goal: confirm Bomb Farm V2.1 is recognizably game-specific without copying the competitor.
- Affected pages: homepage, Guides, How to Play, Heroes, Updates, one detailed article; desktop and mobile.
- Affected components: no new components expected.
- Dependencies: completed V1-V4, screenshots, and human review.
- Rights dependency: already resolved in V1.
- Expected visible impact: confirms the result rather than adding scope.
- Risk: chasing competitor style instead of player comprehension.
- Ownership: project QA plus Prompt/SOP enforcement.

## 16. Do Not Overbuild

The evidence does not justify any of the following:

- CMS
- generic page builder
- media placement DSL
- arbitrary slot system
- database
- new content engine
- new routing layer
- broad design-system rewrite
- complex media pipeline
- automatic copyright decision
- remote image proxy or hotlink system
- new feature flags or page families

The smallest effective implementation would use the existing manifest, `GameMedia`, `ScreenshotGallery`, and `VideoEmbed` boundaries; add only narrow media access where static/hub pages currently lack it; adjust project theme/hero/brand presentation; and simplify a few repeated card sections.

## 17. Final Verdict

### Top 5 visual gaps

1. The first viewport has no game image and keeps an empty media column.
2. The exact generic Starter hero slogan and editorial serif identity remain dominant.
3. Brand mark, favicon, grid, and coordinate motifs are not grounded in Bomb Farm.
4. Huge headings and repeated portal cards push player facts and tasks too far down.
5. Internal page families are visually near-identical despite different game systems.

### Top 5 media gaps

1. The media manifest is empty and all 19 P0 pages are text-only.
2. No approved homepage key art or gameplay screenshot exists.
3. Controls, Skill Tree, and Market lack identified first-party screenshot candidates and need policy-approved captures.
4. The official Steam trailer exists but has no approved embed path and no verified first-party YouTube ID.
5. Media rights were recorded as unresolved but never converted into permission, fallback, owner, or waiver.

### Top 5 highest-value fixes

1. Resolve official-media/operator-capture rights.
2. Make the homepage literal, image-led, and Bomb Farm-specific.
3. Add the smallest system screenshot set to the highest-comprehension pages.
4. Replace generic typography/motifs and rebalance tokens around bronze, dark material surfaces, and localized crystal/ember accents.
5. Reduce repeated homepage cards and add selective article media/callout rhythm.

### What belongs only to Bomb Farm

- Asset permission and capture policy.
- Bomb/mine/crystal/forge/House/Map identity.
- Exact palette tuning from official visuals.
- Which screenshots support each P0 page.
- Game-specific hero wording, mark, favicon, Steam CTA, captions, and alt text.

### What should update GAME_SOP

- A rights-resolution closure gate, not only rights recording.
- A first-viewport game-recognition review.
- Minimum core-page media coverage or explicit no-media exceptions.
- A documented operator-capture/privacy/freshness policy.
- Multi-dimensional identity evidence beyond palette replacement.

### What should update Starter

- Intentional no-media hero layout.
- Configurable/project-authored hero display text.
- Narrow manifest-backed media support for static wiki pages and hubs.
- Compact list/update-strip alternatives to tall portal cards.
- A reusable external store CTA pattern.

### What should update Master Prompt

- Route-level media-placement counts during reconciliation.
- Explicit resolution for every media defer.
- Starter-baseline comparison for hero/theme residue.
- Visual verification that proper-noun removal does not erase game identity.
- CTA and representative screenshot checks in the Human Gate.

### What should not be changed

- 34-page planning inventory or 19-page P0 launch count.
- P0/P1/P2 scope decisions.
- Routes, canonical behavior, sitemap, indexability, or navigation plan.
- Fact/source boundaries, partial-page discipline, or unsupported-data exclusions.
- Empty-media safety until rights are actually approved.
- Astro/static architecture, Page Inventory authority, feature flags, or dependency baseline.
- No-hotlink, no-competitor-copy, and provenance-is-not-permission rules.

## Verdict: BLOCKED BY MEDIA RIGHTS

The project is ready for non-media visual refinement and for planning the exact manifest mappings. It is **not** ready to integrate the official visual assets that would close the largest gaps because no asset has approved reuse rights. Resolve permission or approve a rights-reviewed operator-capture/original-diagram fallback before implementation.

## 18. Hard Stop

This audit created only `docs/VISUAL_MEDIA_GAP_REPORT.md`. It did not modify implementation, content, routes, navigation, Page Inventory, feature flags, dependencies, media files, deployment, DNS, domains, or the old Vercel project.
