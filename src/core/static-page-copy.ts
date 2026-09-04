export type StaticPageType = "about" | "privacy" | "terms";

export interface StaticPageCopy {
  intro: string;
  reviewNotice?: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
}

const staticPageCopy = {
  about: {
    intro:
      "Bomb Farm Wiki is a player-facing guide site for answering Bomb Farm questions with clear source boundaries and cautious update handling.",
    sections: [
      {
        heading: "Sources before claims",
        paragraphs: [
          "Game facts link to their sources and show when they were last checked. Community posts can point to player questions, but they are not presented as official Bomb Farm information.",
        ],
      },
      {
        heading: "Facts live once",
        paragraphs: [
          "Fast-changing Bomb Farm details stay attached to a check date. When an update affects codes, rewards, the Market, or another system, revisit the dated source before acting.",
        ],
      },
      {
        heading: "Useful limits stay visible",
        paragraphs: [
          "When exact values, rankings, or drop rates are not supported by current evidence, the guide keeps them out and directs players to the live game or official Steam information.",
        ],
      },
    ],
  },
  privacy: {
    intro:
      "Bomb Farm Wiki does not ask visitors to create accounts or submit personal information. It currently has no contact forms, behavioral analytics, advertising pixels, or customer database.",
    sections: [
      {
        heading: "Data handling defaults",
        paragraphs: [
          "The site does not ask visitors to submit personal information. This notice should be updated if forms, analytics, advertising, embedded media, or account features are added later.",
        ],
      },
      {
        heading: "Hosting and technical logs",
        paragraphs: [
          "Hosting and security providers may process IP addresses, request headers, and diagnostic logs to deliver and protect the site. Their own privacy terms govern that processing.",
        ],
      },
      {
        heading: "External sources and links",
        paragraphs: [
          "Source links lead to third-party sites with their own privacy policies. Visiting those services is governed by the destination provider.",
        ],
      },
    ],
  },
  terms: {
    intro:
      "Bomb Farm Wiki provides independent informational guides and update summaries. Game behavior, availability, and platform rules can change after a page is checked.",
    sections: [
      {
        heading: "Editorial and informational use",
        paragraphs: [
          "Guides and reference pages are provided for general informational purposes. Check the current game and official Steam notices before relying on time-sensitive details.",
        ],
      },
      {
        heading: "Names, marks, and source material",
        paragraphs: [
          "Bomb Farm names, marks, screenshots, videos, and other game material belong to their respective owners. Bomb Farm Wiki does not claim ownership of the game or its official assets.",
        ],
      },
      {
        heading: "Availability and changes",
        paragraphs: [
          "Bomb Farm Wiki may correct, update, or remove content as the game and available evidence change. External links and services remain subject to their own terms.",
        ],
      },
    ],
  },
} satisfies Record<StaticPageType, StaticPageCopy>;

export function getStaticPageCopy(pageType: StaticPageType): StaticPageCopy {
  return staticPageCopy[pageType];
}
