import type { PageInventoryEntry } from "../data/schemas/page-inventory";

const directlyHandledRoutes = new Set([
  "/",
  "/404.html",
  "/about/",
  "/guides/",
  "/privacy/",
  "/search/",
  "/terms/",
]);

const directPageTypes = new Set([
  "home",
  "about",
  "privacy",
  "terms",
  "not-found",
  "search",
  "calculator",
  "planner",
]);

export interface StaticRouteRecord {
  path: string;
  page: PageInventoryEntry;
}

export function routeToStaticPath(route: string): string {
  if (route === "/" || route === "/404.html") {
    throw new Error(`Route "${route}" is not a catch-all static wiki route.`);
  }

  return route.replace(/^\/|\/$/g, "");
}

export function selectStaticWikiPages(catalog: PageInventoryEntry[]) {
  return catalog.filter((page) => {
    if (directlyHandledRoutes.has(page.route)) return false;
    if (directPageTypes.has(page.pageType)) return false;
    if (page.contentRef || page.entityRef) return false;

    return true;
  });
}

export function buildStaticRouteRecords(
  catalog: PageInventoryEntry[],
): StaticRouteRecord[] {
  return selectStaticWikiPages(catalog).map((page) => ({
    path: routeToStaticPath(page.route),
    page,
  }));
}
