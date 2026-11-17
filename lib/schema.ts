import type { SiteImage } from "@/lib/siteImages";
import { services } from "@/lib/services";
import { maintenancePackages } from "@/lib/maintenance";
import { ceramicPricing } from "@/lib/ceramic";

const BASE_URL = "https://www.dgautodetailing.com";
const ORG_ID = `${BASE_URL}/#organization`;

/**
 * Service areas, each linked to its Wikipedia entry so search engines and AI
 * models resolve the right place (e.g. "Brentwood" the LA neighborhood, not
 * one of the other Brentwoods).
 */
const SERVICE_AREAS = [
  { name: "Los Angeles", sameAs: "https://en.wikipedia.org/wiki/Los_Angeles" },
  { name: "Marina Del Rey", sameAs: "https://en.wikipedia.org/wiki/Marina_del_Rey,_California" },
  { name: "Santa Monica", sameAs: "https://en.wikipedia.org/wiki/Santa_Monica,_California" },
  { name: "Culver City", sameAs: "https://en.wikipedia.org/wiki/Culver_City,_California" },
  { name: "Venice Beach", sameAs: "https://en.wikipedia.org/wiki/Venice,_Los_Angeles" },
  { name: "Playa Vista", sameAs: "https://en.wikipedia.org/wiki/Playa_Vista,_Los_Angeles" },
  { name: "Brentwood", sameAs: "https://en.wikipedia.org/wiki/Brentwood,_Los_Angeles" },
];

export const areaServedSchema = SERVICE_AREAS.map((a) => ({ "@type": "City", name: a.name, sameAs: a.sameAs }));

function cityArea(city: string) {
  const area = SERVICE_AREAS.find((a) => a.name === city);
  return { "@type": "City", name: city, ...(area && { sameAs: area.sameAs }) };
}

const offer = (name: string, url: string, price: number, unitText?: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name, url },
  price: String(price),
  priceCurrency: "USD",
  ...(unitText && {
    priceSpecification: { "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "USD", unitText },
  }),
});

export const organizationSchema = {
  "@context": "https://schema.org",
  // AutoWash is schema.org's type for car washing/detailing businesses
  // (LocalBusiness > AutomotiveBusiness > AutoWash).
  "@type": ["LocalBusiness", "AutoWash"],
  "@id": ORG_ID,
  name: "DG Detailing",
  alternateName: "DG Auto Detailing",
  description:
    "DG Detailing is a mobile auto detailing company in Los Angeles. A professional detailer comes to your home or office and hand-washes and details your car on-site: Bronze, Silver, and Gold detail packages, recurring weekly, bi-weekly, or monthly maintenance cleans, and 5- or 7-year ceramic coating. Serving Los Angeles, Santa Monica, Marina Del Rey, Venice Beach, Culver City, Playa Vista, and Brentwood.",
  slogan: "Premium mobile detailing that comes to you.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  image: `${BASE_URL}/og-default.jpg`,
  telephone: "+13106924495",
  email: "diego@dgautodetailing.com",
  priceRange: "$$-$$$",
  currenciesAccepted: "USD",
  founder: { "@type": "Person", name: "Diego", jobTitle: "Founder" },
  foundingDate: "2019",
  areaServed: areaServedSchema,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  knowsAbout: [
    "Mobile auto detailing",
    "Car hand washing",
    "Interior car detailing",
    "Recurring car cleaning",
    "Paint sealant",
    "Car wax",
    "Clay bar treatment",
    "Carpet and upholstery shampoo extraction",
    "Ceramic coating",
    "Paint correction",
  ],
  sameAs: ["https://share.google/FpW0qKoCtS0gZTKRu"],
  potentialAction: {
    "@type": "ReserveAction",
    name: "Book a mobile detail",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/contact` },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Detailing Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Detail Packages",
        itemListElement: services.map((s) => offer(s.name, `${BASE_URL}/services/${s.slug}`, s.priceFrom)),
      },
      {
        "@type": "OfferCatalog",
        name: "Recurring Maintenance Packages (weekly, bi-weekly, or monthly)",
        itemListElement: maintenancePackages.map((p) =>
          offer(p.name, `${BASE_URL}/services/${p.slug}`, p.pricePerVisit, "per visit"),
        ),
      },
      {
        "@type": "OfferCatalog",
        name: "Ceramic Coating",
        itemListElement: ceramicPricing.flatMap((c) => [
          offer(`5-Year Ceramic Coating — ${c.vehicle}`, `${BASE_URL}/services/ceramic-coating`, c.five),
          offer(`7-Year Ceramic Coating — ${c.vehicle}`, `${BASE_URL}/services/ceramic-coating`, c.seven),
        ]),
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "DG Detailing",
  url: BASE_URL,
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  price: string;
  duration: string;
  url: string;
  image?: SiteImage;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: opts.name,
    serviceType: "Mobile auto detailing",
    description: `${opts.description} Takes about ${opts.duration}, done on-site at your home or office.`,
    url: opts.url,
    ...(opts.image && { image: `${BASE_URL}${opts.image.src}` }),
    provider: { "@id": ORG_ID },
    areaServed: areaServedSchema,
    offers: {
      "@type": "Offer",
      price: opts.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: opts.url,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: opts.price,
        price: opts.price,
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewsPageSchema(reviews: { author: string; rating: number; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.dgautodetailing.com/#organization",
    name: "DG Detailing",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.text,
    })),
  };
}

export function locationSchema(city: string, description: string, image?: SiteImage) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.dgautodetailing.com/locations/${city.toLowerCase().replace(/\s+/g, "-")}#local`,
    name: `DG Detailing — ${city}`,
    description,
    ...(image && { image: `https://www.dgautodetailing.com${image.src}` }),
    url: `https://www.dgautodetailing.com/locations/${city.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: "+13106924495",
    email: "diego@dgautodetailing.com",
    areaServed: cityArea(city),
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "CA",
      addressCountry: "US",
    },
    parentOrganization: { "@id": "https://www.dgautodetailing.com/#organization" },
  };
}

/**
 * ImageObject for a page photo. This is where the photo credit lives: it is
 * machine-readable for search engines but never rendered on the page.
 */
export function imageObjectSchema(image: SiteImage, pageUrl: string) {
  const url = `https://www.dgautodetailing.com${image.src}`;
  const licenses = new Set(image.credits.map((c) => c.licenseUrl));
  const sources = image.credits.flatMap((c) => (c.sourceUrl ? [c.sourceUrl] : []));
  const creators = [...new Set(image.credits.map((c) => c.creator))];
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${url}#image`,
    url,
    contentUrl: url,
    width: image.width,
    height: image.height,
    name: image.title,
    caption: image.caption,
    description: image.alt,
    keywords: image.keywords.join(", "),
    ...(image.place && { contentLocation: { "@type": "Place", name: `${image.place}, Los Angeles, CA` } }),
    ...(image.vehicles && {
      about: image.vehicles.map((v) => ({ "@type": "Vehicle", name: v.name, bodyType: v.type })),
    }),
    mainEntityOfPage: pageUrl,
    creator: creators.map((name) => ({
      "@type": name === "DG Detailing" ? "Organization" : "Person",
      name,
    })),
    creditText: creators.join(" and "),
    copyrightNotice: [...new Set(image.credits.map((c) => c.copyright))].join(" / "),
    // A single licence only applies when every source photo shares it.
    ...(licenses.size === 1 && image.credits[0].licenseUrl && { license: image.credits[0].licenseUrl }),
    ...(sources.length > 0 && { isBasedOn: sources.length === 1 ? sources[0] : sources }),
    acquireLicensePage: sources[0] ?? "https://www.dgautodetailing.com/contact",
  };
}

export function blogPostSchema(opts: {
  title: string;
  slug: string;
  description: string;
  date: string;
  modified?: string;
  image?: string;
  author?: "Diego" | "DG Detailing Team";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: `https://www.dgautodetailing.com/blog/${opts.slug}`,
    datePublished: opts.date,
    dateModified: opts.modified ?? opts.date,
    author:
      opts.author === "Diego"
        ? { "@type": "Person", name: "Diego", jobTitle: "Founder, DG Detailing", worksFor: { "@id": ORG_ID } }
        : { "@type": "Organization", name: "DG Detailing", url: BASE_URL },
    inLanguage: "en-US",
    publisher: { "@id": "https://www.dgautodetailing.com/#organization" },
    image: opts.image
      ? `https://www.dgautodetailing.com${opts.image}`
      : "https://www.dgautodetailing.com/og-default.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dgautodetailing.com/blog/${opts.slug}`,
    },
  };
}

export function specialsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "New Client Special — 15% Off First Detail",
    description:
      "15% off your first Silver or Gold detail package. No code needed — discount applied at booking.",
    discount: "15%",
    eligibleCustomerType: "https://schema.org/NewCustomer",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://www.dgautodetailing.com/#organization" },
    url: "https://www.dgautodetailing.com/specials",
  };
}
