export interface QuickFact {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StaticWikiSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface StaticWikiCopy {
  quickFacts?: QuickFact[];
  sections: StaticWikiSection[];
  faq?: FaqItem[];
}
