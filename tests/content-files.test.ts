import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { readContentEntriesFromDirectory } from "../src/core/content-files";
import { pageInventory } from "../src/core/site-data";

describe("readContentEntriesFromDirectory", () => {
  const guideDirectory = fileURLToPath(
    new URL("../src/content/guides", import.meta.url),
  );

  it("reads every project guide id and pageId from MDX frontmatter", () => {
    expect(readContentEntriesFromDirectory(guideDirectory, "guides")).toEqual(
      pageInventory
        .flatMap((page) =>
          page.contentRef?.collection === "guides"
            ? [
                {
                  collection: "guides",
                  id: page.contentRef.slug,
                  data: { pageId: page.pageId },
                },
              ]
            : [],
        )
        .sort((left, right) => left.id.localeCompare(right.id)),
    );
  });

  it("keeps every authored P0 guide substantive after Phase 3", () => {
    const guidePages = pageInventory.filter(
      (page) =>
        page.tags.includes("phase:p0") &&
        page.contentRef?.collection === "guides",
    );

    expect(guidePages).toHaveLength(8);
    for (const page of guidePages) {
      const body = readFileSync(
        join(guideDirectory, `${page.contentRef!.slug}.mdx`),
        "utf8",
      );
      const bodyOnly = body.split("---").slice(2).join("---");

      expect(bodyOnly.length, `${page.pageId} body length`).toBeGreaterThan(900);
      expect(bodyOnly, `${page.pageId} has player sections`).toMatch(/## /);
      expect(bodyOnly, `${page.pageId} has internal links`).toMatch(
        /\]\(\/.+\/\)/,
      );
    }
  });

  it("does not publish unsupported codes, rankings, drop rates, or Market values", () => {
    const allGuides = pageInventory
      .flatMap((page) =>
        page.contentRef?.collection === "guides"
          ? [
              readFileSync(
                join(guideDirectory, `${page.contentRef.slug}.mdx`),
                "utf8",
              ),
            ]
          : [],
      )
      .join("\n");

    expect(allGuides).not.toMatch(
      /S[- ]?tier|price chart|guaranteed profit|buy low, sell high/i,
    );
    expect(allGuides).toMatch(/KENDO/);
    expect(allGuides).toMatch(/September 8, 2026 at 11:59 PM UTC-3/);
  });

  it("keeps authored guide copy in a player-facing voice", () => {
    const allGuides = pageInventory
      .flatMap((page) =>
        page.contentRef?.collection === "guides"
          ? [
              readFileSync(
                join(guideDirectory, `${page.contentRef.slug}.mdx`),
                "utf8",
              ),
            ]
          : [],
      )
      .join("\n");

    expect(allGuides).not.toMatch(
      /\bV1\b|P0|P1|P2|launch scope|verified scope|safe to publish|this wiki does not publish|not enough evidence for this project/i,
    );
  });
});
