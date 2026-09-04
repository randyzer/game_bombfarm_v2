import type { StaticWikiCopy } from "./types";

export const updatesStaticWikiCopy = {
  "hub.updates": {
    quickFacts: [
      { label: "Freshness check", value: "Steam News API checked September 4, 2026" },
      { label: "Latest item found", value: "September 3, 2026 community announcement" },
      { label: "Watch closely", value: "Codes, rewards, Market, stash, stability" },
    ],
    sections: [
      {
        heading: "How to follow updates",
        paragraphs: [
          "Bomb Farm update pages start from official Steam announcements. Check them before acting on codes, rewards, Market behavior, stash limits, or anything that could change with a patch.",
          "Use the latest update page for the newest announcement summary, then jump back to Codes or Steam Market Safety when those topics are affected.",
        ],
      },
      {
        heading: "Current recheck result",
        paragraphs: [
          "On September 4, 2026, the newest Steam News API item found for Bomb Farm was the September 3, 2026 announcement titled Weekly Rewards, Expandable Stashes, and Stability Improvements.",
        ],
      },
    ],
    faq: [
      {
        question: "Can older update notes still matter?",
        answer:
          "Yes. Codes, Market eligibility, stash behavior, and rewards may be announced in separate posts. Check the topic page as well as the newest update.",
      },
    ],
  },
  "patch.latest-update": {
    quickFacts: [
      { label: "Latest checked update", value: "Weekly Rewards, Expandable Stashes, and Stability Improvements" },
      { label: "Official date", value: "September 3, 2026, 21:33 UTC" },
      { label: "Source", value: "Steam News API / Community Announcements" },
    ],
    sections: [
      {
        heading: "Latest official update summary",
        paragraphs: [
          "The September 3, 2026 announcement focuses on weekly ranking rewards, expandable stash capacity, Return Bonus behavior, Market and Ritual interface fixes, and server stability/security improvements.",
          "This was the newest Steam News API item found during the September 4, 2026 check. Recheck Steam before relying on it later.",
        ],
      },
      {
        heading: "Changes players should notice",
        bullets: [
          "Weekly ranking rewards were described for five categories: Stage, Total Gold Earned, Playtime, Account Power, and Best Hero.",
          "Chest Stash and Item Stash purchases were described as adding 150 slots per purchase, with Crystal prices increasing by purchase step.",
          "Return Bonus was described as affecting Gold and XP only, while Drop Boost was removed from that bonus.",
          "Market inventories and Ritual previews received clearer item inspection and tooltip behavior.",
          "The announcement also listed reconnect, session, memory, timeout, and security hardening work.",
        ],
      },
      {
        heading: "Related previous code note",
        paragraphs: [
          "The September 2, 2026 announcement, one item before the latest update, stated that the KENDO code grants 3 hours of +100% Gold, XP, and Drop and is available once per account until September 8, 2026 at 11:59 PM UTC-3.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the KENDO code from the latest update?",
        answer:
          "No. The September 4 freshness check found KENDO in the September 2, 2026 official announcement, not the September 3 latest item.",
      },
    ],
  },
} satisfies Record<string, StaticWikiCopy>;
