/**
 * Builds /llms.txt (a short, linked index) and /llms-full.txt (the full fact
 * sheet) for AI assistants, following the llmstxt.org format. Generated from
 * the same data the pages use, so prices, services and contact details can't
 * go stale the way a hand-edited file does.
 */
import { services, vehicleClassLabels, tierLabels, type ServiceTier } from "@/lib/services";
import {
  maintenancePackages,
  maintenanceInclusions,
  maintenanceBenefits,
  sharedMaintenanceFaqs,
} from "@/lib/maintenance";
import { ceramicPricing } from "@/lib/ceramic";
import { locations } from "@/lib/locations";
import { blogPosts } from "@/lib/blog";
import { reviews } from "@/lib/reviews";

const BASE_URL = "https://www.dgautodetailing.com";
const TIERS: ServiceTier[] = ["bronze", "silver", "gold"];
const CITIES = locations.map((l) => l.city);

const cityList = `${CITIES.slice(0, -1).join(", ")}, and ${CITIES[CITIES.length - 1]}`;

const SUMMARY = `> DG Detailing is a mobile auto detailing company in Los Angeles, CA. A professional detailer comes to your home, condo, or office and hand-washes and details your vehicle on-site, bringing their own water and power. Serving ${cityList}. Founded 2019, 1,500+ vehicles detailed.`;

const CONTACT = `## Contact & booking
- Phone: (310) 692-4495
- Email: diego@dgautodetailing.com
- Hours: Mon–Sat 7:00 AM – 7:00 PM, Sun 8:00 AM – 5:00 PM
- Book online: ${BASE_URL}/contact (booking calendar is also at the bottom of every service page)
- Google Business Profile: https://share.google/FpW0qKoCtS0gZTKRu`;

const KEY_FACTS = `## Key facts
- Mobile only: DG Detailing comes to you; there is no shop to drive to.
- Every wash is by hand with pH-balanced shampoo and microfiber, never automated brushes.
- Three detail tiers for each vehicle class (coupe, sedan, SUV/truck): Bronze (from $105), Silver (from $185), Gold (from $425).
- Recurring maintenance packages, weekly, bi-weekly, or monthly: coupe $105, sedan $115, SUV/truck $135 per visit.
- Most clients book a Silver or Gold detail first to reset the vehicle, then schedule recurring maintenance to keep it clean.
- Ceramic coating: 5-year from $${ceramicPricing[0].five} or 7-year from $${ceramicPricing[0].seven}, depending on vehicle size.
- New clients get 15% off their first Silver or Gold detail, no code needed: ${BASE_URL}/specials`;

const serviceLine = (s: (typeof services)[number]) =>
  `- [${s.name} — from $${s.priceFrom}](${BASE_URL}/services/${s.slug}): ${s.shortDescription} About ${s.duration}.`;

export function buildLlmsTxt(): string {
  return [
    "# DG Detailing",
    SUMMARY,
    KEY_FACTS,
    CONTACT,
    "## Detail packages",
    ...services.map(serviceLine),
    "## Maintenance packages (weekly, bi-weekly, or monthly)",
    ...maintenancePackages.map(
      (p) =>
        `- [${p.name} — $${p.pricePerVisit} per visit](${BASE_URL}/services/${p.slug}): Recurring mobile hand wash and interior refresh for ${p.vehiclePlural}.`,
    ),
    "## Paint protection",
    `- [Ceramic Coating — from $${ceramicPricing[0].five}](${BASE_URL}/services/ceramic-coating): Decontamination wash, clay bar, machine polish, and a 5- or 7-year ceramic coating applied on-site.`,
    "## Service areas",
    ...locations.map((l) => `- [${l.city}, ${l.state}](${BASE_URL}/locations/${l.slug}): ${l.metaDescription}`),
    "## Company",
    `- [About](${BASE_URL}/about): Founding story, process, and team.`,
    `- [Reviews](${BASE_URL}/reviews): Client reviews from across Los Angeles.`,
    `- [Gallery](${BASE_URL}/gallery): Before-and-after detail work.`,
    `- [Specials](${BASE_URL}/specials): 15% off a first Silver or Gold detail for new clients.`,
    `- [Contact](${BASE_URL}/contact): Book a detail or request a quote.`,
    "## Optional",
    `- [Full fact sheet](${BASE_URL}/llms-full.txt): Every package's inclusions, ceramic pricing table, FAQs, and the full blog index.`,
    `- [Blog](${BASE_URL}/blog): ${blogPosts.length} detailing guides and Los Angeles car care articles.`,
    "",
  ]
    .join("\n\n")
    // Keep consecutive list items together as one list.
    .replace(/^(- .*)\n\n(?=- )/gm, "$1\n");
}

export function buildLlmsFullTxt(): string {
  const out: string[] = ["# DG Detailing — Full Fact Sheet", SUMMARY, KEY_FACTS, CONTACT];

  out.push("## Detail packages");
  for (const tier of TIERS) {
    const tierServices = services.filter((s) => s.tier === tier);
    out.push(`### ${tierLabels[tier]} tier`);
    out.push(
      `Prices: ${tierServices.map((s) => `${vehicleClassLabels[s.vehicleClass]} from $${s.priceFrom} (${s.duration})`).join("; ")}.`,
    );
    out.push(`Includes:\n${tierServices[0].inclusions.map((i) => `- ${i}`).join("\n")}`);
    out.push(`Why choose it:\n${tierServices[0].benefits.map((b) => `- ${b}`).join("\n")}`);
    out.push(
      `Pages: ${tierServices.map((s) => `[${s.name}](${BASE_URL}/services/${s.slug})`).join(", ")}`,
    );
    out.push(tierServices[0].faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n"));
  }

  out.push("## Recurring maintenance packages");
  out.push(
    `Weekly, bi-weekly, or monthly mobile cleans, same price per visit on every schedule. Most clients book a Silver or Gold detail first, then schedule maintenance to keep the vehicle clean so it never needs another big restoration clean.`,
  );
  out.push(
    maintenancePackages
      .map((p) => `- [${p.name}](${BASE_URL}/services/${p.slug}): $${p.pricePerVisit} per visit`)
      .join("\n"),
  );
  out.push(`Every visit includes:\n${maintenanceInclusions.map((i) => `- ${i}`).join("\n")}`);
  out.push(
    `Benefits of frequent cleaning:\n${maintenanceBenefits.map((b) => `- ${b.title}: ${b.body}`).join("\n")}`,
  );
  out.push(
    [...maintenancePackages.flatMap((p) => p.faqs), ...sharedMaintenanceFaqs]
      .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
      .join("\n\n"),
  );

  out.push("## Ceramic coating");
  out.push(
    `[Ceramic Coating](${BASE_URL}/services/ceramic-coating): decontamination wash, clay bar, single-stage machine polish, panel prep, and hand-applied ceramic coating, cured on-site.\n\n| Vehicle | 5-year coating | 7-year coating |\n|---|---|---|\n${ceramicPricing
      .map((c) => `| ${c.vehicle} | $${c.five} | $${c.seven} |`)
      .join("\n")}`,
  );

  out.push("## Service areas");
  for (const l of locations) {
    out.push(`### [${l.city}, ${l.state}](${BASE_URL}/locations/${l.slug})\n${l.intro}\n\n${l.whyUs}`);
  }

  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  out.push("## Reviews");
  out.push(
    `${reviews.length} client reviews on the website, averaging ${avg.toFixed(1)} out of 5. Read them at ${BASE_URL}/reviews.`,
  );

  out.push("## Blog index");
  out.push(blogPosts.map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.description}`).join("\n"));

  out.push("");
  return out.join("\n\n");
}
