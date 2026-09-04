import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  collectOutputReconciliationErrors,
  routeToOutputFile,
} from "../src/core/output-reconciliation";
import { fixedPageCatalog } from "../src/core/fixed-pages";
import { enabledPageCatalog } from "../src/core/site-data";

const fixedRoutes = fixedPageCatalog.map((page) => page.route);

function createOutputFixture() {
  const directory = mkdtempSync(join(tmpdir(), "game-site-output-"));

  for (const route of [
    ...enabledPageCatalog.map((page) => page.route),
    ...fixedRoutes,
  ]) {
    const outputFile = join(directory, routeToOutputFile(route));
    mkdirSync(dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, "<!doctype html><title>Fixture</title>");
  }

  return directory;
}

describe("static output reconciliation", () => {
  it("maps inventory routes to Astro static output files", () => {
    expect(routeToOutputFile("/")).toBe("index.html");
    expect(routeToOutputFile("/guides/")).toBe("guides/index.html");
    expect(routeToOutputFile("/404.html")).toBe("404.html");
  });

  it("accepts a build containing exactly the enabled inventory routes", () => {
    const directory = createOutputFixture();

    try {
      expect(
        collectOutputReconciliationErrors(
          enabledPageCatalog,
          directory,
          fixedRoutes,
        ),
      ).toEqual([]);
    } finally {
      rmSync(directory, { recursive: true });
    }
  });

  it("reports missing and unregistered HTML outputs", () => {
    const directory = createOutputFixture();
    unlinkSync(join(directory, routeToOutputFile("/about/")));
    const unexpectedFile = join(directory, "surprise/index.html");
    mkdirSync(dirname(unexpectedFile), { recursive: true });
    writeFileSync(unexpectedFile, "<!doctype html><title>Surprise</title>");

    try {
      expect(
        collectOutputReconciliationErrors(
          enabledPageCatalog,
          directory,
          fixedRoutes,
        ),
      ).toEqual([
        "Missing HTML output for fixed route: /about/",
        "Unregistered HTML output found: /surprise/",
      ]);
    } finally {
      rmSync(directory, { recursive: true });
    }
  });
});
