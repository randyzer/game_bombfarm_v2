import { faqStaticWikiCopy } from "./p0-static-wiki-copy/faq";
import { homepageFaq, homepageQuickFacts } from "./p0-static-wiki-copy/home";
import { heroStaticWikiCopy } from "./p0-static-wiki-copy/heroes";
import type { StaticWikiCopy } from "./p0-static-wiki-copy/types";
import { toolsStaticWikiCopy } from "./p0-static-wiki-copy/tools";
import { updatesStaticWikiCopy } from "./p0-static-wiki-copy/updates";

export type {
  FaqItem,
  QuickFact,
  StaticWikiCopy,
  StaticWikiSection,
} from "./p0-static-wiki-copy/types";
export { homepageFaq, homepageQuickFacts };

const staticWikiCopy: Record<string, StaticWikiCopy> = {
  ...heroStaticWikiCopy,
  ...updatesStaticWikiCopy,
  ...toolsStaticWikiCopy,
  faq: faqStaticWikiCopy,
};

export function getStaticWikiCopy(pageId: string): StaticWikiCopy | undefined {
  return staticWikiCopy[pageId];
}
