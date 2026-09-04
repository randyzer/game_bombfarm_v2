import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import rawInventory from "../src/data/page-inventory.json";

const componentUrls = {
  wikiArticle: new URL(
    "../src/components/wiki/WikiArticle.astro",
    import.meta.url,
  ),
  editorialArticle: new URL(
    "../src/components/EditorialArticle.astro",
    import.meta.url,
  ),
  entityDetail: new URL(
    "../src/components/EntityDetail.astro",
    import.meta.url,
  ),
  staticWikiPage: new URL(
    "../src/components/StaticWikiPage.astro",
    import.meta.url,
  ),
  guideRoute: new URL(
    "../src/pages/guides/[...slug].astro",
    import.meta.url,
  ),
  toolShell: new URL(
    "../src/components/ToolShell.astro",
    import.meta.url,
  ),
  home: new URL("../src/pages/index.astro", import.meta.url),
  staticPageCopy: new URL(
    "../src/core/static-page-copy.ts",
    import.meta.url,
  ),
};

const publicCopyUrls = [
  ...Object.values(
    import.meta.glob("../src/content/guides/*.mdx", {
      eager: true,
      query: "?raw",
      import: "default",
    }),
  ),
  ...Object.values(
    import.meta.glob("../src/core/p0-static-wiki-copy/*.ts", {
      eager: true,
      query: "?raw",
      import: "default",
    }),
  ),
] as string[];

function source(url: URL) {
  return readFileSync(url, "utf8");
}

function template(url: URL) {
  return source(url).split("---").slice(2).join("---");
}

describe("player-facing metadata", () => {
  it("keeps internal research labels out of public article and entity markup", () => {
    const forbiddenLabels =
      /Priority|Confidence|Search Signal|>Signal<|Internal tags|Filed under|Editorial brief|Evidence ledger|Provenance ledger|Current fact set|Formula ledger|before this route is published/i;

    for (const url of Object.values(componentUrls)) {
      expect(template(url)).not.toMatch(forbiddenLabels);
    }
  });

  it("removes internal sorting fields from the Guide Hub presentation", () => {
    const guideRoute = template(componentUrls.guideRoute);

    expect(guideRoute).not.toMatch(
      /guide\.priority|guide\.primaryKeyword|guide\.cluster/,
    );
    expect(guideRoute).toContain("Guide library");
    expect(guideRoute).toContain("Last updated");
  });

  it("uses shared player-facing primitives for editorial and entity pages", () => {
    const editorial = source(componentUrls.editorialArticle);
    const entity = source(componentUrls.entityDetail);

    expect(editorial).toContain("<Sources");
    expect(editorial).toContain("<RelatedPages");
    expect(editorial).not.toContain("sectionDescription");
    expect(entity).toContain("<QuickFacts");
    expect(entity).toContain("<Sources");
    expect(entity).toContain("<RelatedPages");
  });

  it("keeps P0 metadata and authored copy free of internal editorial language", () => {
    const p0Metadata = rawInventory
      .filter((page) => page.tags.includes("phase:p0"))
      .flatMap((page) => [page.title, page.description])
      .join("\n");
    const visibleCopy = [
      p0Metadata,
      ...publicCopyUrls,
      source(componentUrls.staticPageCopy),
    ].join("\n");
    const forbiddenCopy =
      /fake meta claims|what this wiki will not claim|sourced safely now|source status|wiki limits|inventory record|feature flag|confidence level|starter text|operator action required|replace (?:it|this)|future scope|what stays deferred|deferred detail|claims held back|this wiki does not list|does not give this wiki permission/i;

    expect(visibleCopy).not.toMatch(forbiddenCopy);
  });

  it("keeps the homepage and guide hub connected to shared source and related-page UI", () => {
    const home = source(componentUrls.home);
    const guideRoute = source(componentUrls.guideRoute);

    expect(home).toContain("<RelatedPages");
    expect(home).toContain("<Sources");
    expect(guideRoute).toContain("<RelatedPages");
    expect(guideRoute).toContain("<Sources");
    expect(guideRoute).toContain("buildBreadcrumbSchema");
  });
});
