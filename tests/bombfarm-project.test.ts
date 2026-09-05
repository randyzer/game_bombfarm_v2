import { readFileSync } from "node:fs";

import config from "../game.config";
import { buildStaticRouteRecords } from "../src/core/static-routes";
import mediaManifest from "../src/data/media/media.json";
import rawInventory from "../src/data/page-inventory.json";
import { parsePageInventory } from "../src/data/schemas/page-inventory";
import { describe, expect, it } from "vitest";

const inventory = parsePageInventory(rawInventory);

function readPlanningInventory() {
  const markdown = readFileSync(
    new URL("../docs/PAGE_INVENTORY.md", import.meta.url),
    "utf8",
  );

  return markdown
    .split("\n")
    .filter((line) => line.startsWith("| `"))
    .map((line) => {
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim().replace(/^`|`$/g, ""));

      return {
        pageId: cells[0],
        route: cells[1],
        pageType: cells[2],
        phase: cells[4],
      };
    });
}

describe("Bomb Farm project configuration", () => {
  it("uses the approved Bomb Farm brand and site baseline", () => {
    expect(config.brand.name).toBe("Bomb Farm Wiki");
    expect(config.brand.shortName).toBe("Bomb Farm");
    expect(config.site.url).toBe("https://bombfarmwiki.wiki");
    expect(config.site.locale).toBe("en");
  });

  it("keeps the approved 34 page runtime inventory with canonical page types", () => {
    expect(inventory).toHaveLength(34);

    const compositeTypes = inventory.filter((page) => page.pageType.includes("/"));
    expect(compositeTypes).toEqual([]);

    const phaseCounts = inventory.reduce<Record<string, number>>(
      (counts, page) => {
        const phase = page.tags.find((tag) => /^phase:p[0-2]$/.test(tag));
        counts[phase ?? "missing"] = (counts[phase ?? "missing"] ?? 0) + 1;
        return counts;
      },
      {},
    );

    expect(phaseCounts).toEqual({
      "phase:p0": 19,
      "phase:p1": 10,
      "phase:p2": 5,
    });
  });

  it("keeps planning identifiers aligned with the runtime publication inventory", () => {
    const planningEntries = readPlanningInventory();
    const runtimeEntries = inventory.map((page) => ({
      pageId: page.pageId,
      route: page.route,
      pageType: page.pageType,
      phase: page.tags
        .find((tag) => /^phase:p[0-2]$/.test(tag))
        ?.slice("phase:".length)
        .toUpperCase(),
    }));

    expect(planningEntries).toEqual(runtimeEntries);
  });

  it("marks the approved P0 launch pages as content-ready after Phase 3", () => {
    const p0Pages = inventory.filter((page) => page.tags.includes("phase:p0"));

    expect(p0Pages).toHaveLength(19);
    expect(
      p0Pages.map((page) => ({
        pageId: page.pageId,
        contentStatus: page.contentStatus,
        developmentStatus: page.developmentStatus,
      })),
    ).toEqual(
      p0Pages.map((page) => ({
        pageId: page.pageId,
        contentStatus: "ready",
        developmentStatus: "ready",
      })),
    );
  });

  it("preserves the approved Steam Market boundary", () => {
    const marketGuide = inventory.find(
      (page) => page.pageId === "guide.steam-market",
    );
    const marketValues = inventory.find(
      (page) => page.pageId === "tool.market-values",
    );

    expect(marketGuide).toMatchObject({
      route: "/guides/steam-market/",
      pageType: "guide",
      publicationStatus: "published",
      indexability: "index",
    });
    expect(marketGuide?.tags).toContain("phase:p0");
    expect(marketGuide?.description).toMatch(/safety/i);

    expect(marketValues).toMatchObject({
      route: "/tools/market-values/",
      pageType: "calculator",
      publicationStatus: "draft",
      indexability: "noindex",
    });
    expect(marketValues?.visibility).not.toBe("public");
    expect(marketValues?.tags).toContain("phase:p2");
  });

  it("does not publish a standalone troubleshooting page", () => {
    expect(
      inventory.some((page) => page.route.includes("troubleshooting")),
    ).toBe(false);
  });

  it("generates approved static routes without exposing deferred pages", () => {
    const publicPublishedPages = inventory.filter(
      (page) =>
        page.visibility === "public" &&
        page.publicationStatus === "published" &&
        (!page.feature || config.features[page.feature]),
    );
    const routes = buildStaticRouteRecords(publicPublishedPages).map(
      (record) => record.page.route,
    );

    expect(routes).toContain("/heroes/");
    expect(routes).toContain("/tools/achievements/");
    expect(routes).toContain("/updates/latest/");
    expect(routes).not.toContain("/tools/market-values/");
    expect(routes.some((route) => route.includes("troubleshooting"))).toBe(false);
  });

  it("uses the project-approved local V2.1 media manifest", () => {
    expect(mediaManifest.assets).toHaveLength(22);
    expect(mediaManifest.pages).toHaveLength(15);
    expect(mediaManifest.assets.every((asset) => asset.src.startsWith("/media/"))).toBe(true);
    expect(mediaManifest.pages.map((page) => page.pageId)).toContain("home");
  });
});
