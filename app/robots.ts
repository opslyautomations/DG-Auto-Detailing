import type { MetadataRoute } from "next";

/**
 * Everything is open to every crawler (the "*" rule). The named AI agents are
 * listed explicitly anyway so the intent is unambiguous to bots that look for
 * their own name: we want to be crawled, indexed, and cited by AI search and
 * assistants. Grouped by vendor; reviewed November 2026.
 */
const AI_AGENTS = [
  // OpenAI: ChatGPT search index, user-triggered browsing, training
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  // Anthropic: Claude search index, user-triggered fetches, training
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  // Perplexity: index and user-triggered fetches
  "PerplexityBot",
  "Perplexity-User",
  // Google Gemini / AI Overviews grounding, and Apple Intelligence
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  // Microsoft Copilot runs on the Bing index
  "Bingbot",
  // Meta AI, Amazon (Alexa / Rufus), DuckDuckGo Duck.ai, Mistral, You.com, Common Crawl
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, { userAgent: AI_AGENTS, allow: "/" }],
    sitemap: "https://www.dgautodetailing.com/sitemap.xml",
    host: "https://www.dgautodetailing.com",
  };
}
