import type { PageInventoryEntry } from "../data/schemas/page-inventory";

const checkedAt = "2026-09-04";

const fixedPages = [
  {
    pageId: "about",
    route: "/about/",
    pageType: "about",
    cluster: "legal",
    module: "core",
    priority: 1,
    visibility: "public",
    publicationStatus: "published",
    contentStatus: "ready",
    developmentStatus: "ready",
    needsReview: true,
    needsUpdate: false,
    indexability: "noindex",
    title: "About Bomb Farm Wiki",
    description:
      "Learn how Bomb Farm Wiki checks game facts, handles fast-changing information, and helps players choose what to read next.",
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    primaryKeyword: "about Bomb Farm Wiki",
    tags: ["fixed", "about"],
    relatedPageIds: ["home"],
    relatedEntityRefs: [],
    sources: [
      {
        sourceUrl: "https://bombfarmwiki.wiki/",
        sourceType: "official",
        accessedAt: checkedAt,
        evidenceNote:
          "Fixed site metadata page for the production Bomb Farm Wiki domain.",
      },
    ],
    confidence: "high",
  },
  {
    pageId: "privacy",
    route: "/privacy/",
    pageType: "privacy",
    cluster: "legal",
    module: "core",
    priority: 1,
    visibility: "public",
    publicationStatus: "published",
    contentStatus: "ready",
    developmentStatus: "ready",
    needsReview: true,
    needsUpdate: false,
    indexability: "noindex",
    title: "Bomb Farm Wiki Privacy Notice",
    description:
      "Read how Bomb Farm Wiki handles visitor data, hosting logs, and links to external services.",
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    primaryKeyword: "Bomb Farm Wiki privacy",
    tags: ["fixed", "privacy"],
    relatedPageIds: ["home"],
    relatedEntityRefs: [],
    sources: [
      {
        sourceUrl: "https://bombfarmwiki.wiki/privacy/",
        sourceType: "official",
        accessedAt: checkedAt,
        evidenceNote:
          "Fixed privacy page metadata for the production Bomb Farm Wiki domain.",
      },
    ],
    confidence: "medium",
  },
  {
    pageId: "terms",
    route: "/terms/",
    pageType: "terms",
    cluster: "legal",
    module: "core",
    priority: 1,
    visibility: "public",
    publicationStatus: "published",
    contentStatus: "ready",
    developmentStatus: "ready",
    needsReview: true,
    needsUpdate: false,
    indexability: "noindex",
    title: "Bomb Farm Wiki Terms of Use",
    description:
      "Read the terms for using Bomb Farm Wiki guides, update summaries, references, and external links.",
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    primaryKeyword: "Bomb Farm Wiki terms",
    tags: ["fixed", "terms"],
    relatedPageIds: ["home"],
    relatedEntityRefs: [],
    sources: [
      {
        sourceUrl: "https://bombfarmwiki.wiki/terms/",
        sourceType: "official",
        accessedAt: checkedAt,
        evidenceNote:
          "Fixed terms page metadata for the production Bomb Farm Wiki domain.",
      },
    ],
    confidence: "medium",
  },
  {
    pageId: "not-found",
    route: "/404.html",
    pageType: "not-found",
    cluster: "core",
    module: "core",
    priority: 0,
    visibility: "public",
    publicationStatus: "published",
    contentStatus: "ready",
    developmentStatus: "ready",
    needsReview: false,
    needsUpdate: false,
    indexability: "noindex",
    title: "Bomb Farm Wiki Page Not Found",
    description:
      "This Bomb Farm Wiki page is not available. Return to the guide hub, homepage, or another player reference.",
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    primaryKeyword: "Bomb Farm Wiki 404",
    tags: ["fixed", "not-found"],
    relatedPageIds: ["home", "hub.guides"],
    relatedEntityRefs: [],
    sources: [
      {
        sourceUrl: "https://bombfarmwiki.wiki/",
        sourceType: "official",
        accessedAt: checkedAt,
        evidenceNote:
          "Fixed 404 metadata page for the production Bomb Farm Wiki domain.",
      },
    ],
    confidence: "high",
  },
] satisfies PageInventoryEntry[];

export const fixedPageCatalog = fixedPages;

export const fixedFooterPages = fixedPages.filter((page) =>
  ["about", "privacy", "terms"].includes(page.pageId),
);

const fixedPagesByRoute = new Map(fixedPages.map((page) => [page.route, page]));

export function getFixedPageByRoute(route: string): PageInventoryEntry {
  const page = fixedPagesByRoute.get(route);
  if (!page) {
    throw new Error(`No fixed page is registered for route: ${route}`);
  }

  return page;
}
