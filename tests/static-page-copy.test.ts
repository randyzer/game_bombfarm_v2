import { existsSync } from "node:fs";

import { describe, expect, it } from "vitest";

import {
  getStaticWikiCopy,
  homepageFaq,
  homepageQuickFacts,
} from "../src/core/p0-static-wiki-copy";
import { getStaticPageCopy } from "../src/core/static-page-copy";

describe("getStaticPageCopy", () => {
  it("provides an evidence-led editorial method for the about page", () => {
    const copy = getStaticPageCopy("about");

    expect(copy.sections.map((section) => section.heading).join(" ")).toMatch(
      /sources|publishing|facts/i,
    );
    expect(copy.reviewNotice).toBeUndefined();
  });

  it.each(["privacy", "terms"] as const)(
    "keeps %s copy player-facing without Starter review instructions",
    (pageType) => {
      const copy = getStaticPageCopy(pageType);
      const visibleCopy = [
        copy.intro,
        copy.reviewNotice,
        ...copy.sections.flatMap((section) => [
          section.heading,
          ...section.paragraphs,
        ]),
      ].join("\n");

      expect(copy.reviewNotice).toBeUndefined();
      expect(visibleCopy).not.toMatch(
        /starter|operator action|required legal review|replace this|before launch/i,
      );
    },
  );
});

describe("getStaticWikiCopy", () => {
  it("provides player-facing authored content for every static P0 wiki page", () => {
    const staticP0PageIds = [
      "hub.heroes",
      "guide.hero-roles",
      "guide.energy-rotation",
      "hub.updates",
      "patch.latest-update",
      "hub.tools",
      "guide.achievements",
      "guide.system-requirements",
      "faq",
    ];

    for (const pageId of staticP0PageIds) {
      const copy = getStaticWikiCopy(pageId);
      const text = JSON.stringify(copy);

      expect(copy?.sections.length, `${pageId} has sections`).toBeGreaterThan(0);
      expect(text).not.toMatch(
        /Phase 1|\bV1\b|P0|P1|P2|launch scope|inventory|Confidence|primaryKeyword|contentStatus|developmentStatus|this wiki does not publish/i,
      );
    }
  });

  it("keeps homepage facts useful without media reuse", () => {
    expect(homepageQuickFacts.map((fact) => fact.label)).toContain("Platform");
    expect(homepageQuickFacts.map((fact) => fact.label)).toContain(
      "Campaign frame",
    );
    expect(homepageFaq.map((item) => item.answer).join(" ")).toMatch(
      /hero rankings|market values|price tracking/i,
    );
  });

  it("preserves Phase 3 sensitive content boundaries", () => {
    const text = JSON.stringify({
      market: getStaticWikiCopy("guide.steam-market"),
      heroes: getStaticWikiCopy("hub.heroes"),
      faq: getStaticWikiCopy("faq"),
    });

    expect(text).toMatch(/Price tracking and item valuation are not covered/i);
    expect(text).toMatch(/Hero rankings|current supporting data/i);
    expect(text).not.toMatch(/best hero|S tier|profit route|drop rate table/i);
  });

  it("keeps P0 static copy split by page family behind the same aggregator", () => {
    for (const family of ["home", "heroes", "updates", "tools", "faq"]) {
      expect(
        existsSync(
          new URL(`../src/core/p0-static-wiki-copy/${family}.ts`, import.meta.url),
        ),
      ).toBe(true);
    }
  });
});
