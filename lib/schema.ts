import type { SiteImage } from "@/lib/siteImages";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "@id": "https://www.dgautodetailing.com/#organization",
  name: "DG Detailing",
  url: "https://www.dgautodetailing.com",
  logo: "https://www.dgautodetailing.com/logo.svg",
  image: "https://www.dgautodetailing.com/og-default.jpg",
  telephone: "+13106924495",
  email: "diego@dgautodetailing.com",
  priceRange: "$$-$$$",
  founder: { "@type": "Person", name: "Diego" },
  foundingDate: "2019",
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "Marina Del Rey" },
    { "@type": "City", name: "Santa Monica" },
    { "@type": "City", name: "Culver City" },
    { "@type": "City", name: "Venice Beach" },
    { "@type": "City", name: "Playa Vista" },
    { "@type": "City", name: "Brentwood" },
  ],
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
  sameAs: ["https://share.google/FpW0qKoCtS0gZTKRu"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Detailing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basic Coupe Detail" }, price: "105", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basic Sedan Detail" }, price: "125", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basic SUV/Truck Detail" }, price: "155", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Silver Coupe Detail" }, price: "185", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Silver Sedan Detail" }, price: "215", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Silver SUV/Truck Detail" }, price: "265", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gold Coupe Detail" }, price: "425", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gold Sedan Detail" }, price: "455", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gold SUV/Truck Detail" }, price: "505", priceCurrency: "USD" },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.dgautodetailing.com/#website",
  name: "DG Detailing",
  url: "https://www.dgautodetailing.com",
  publisher: { "@id": "https://www.dgautodetailing.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.dgautodetailing.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.image && { image: `https://www.dgautodetailing.com${opts.image.src}` }),
    provider: { "@id": "https://www.dgautodetailing.com/#organization" },
    areaServed: { "@type": "State", name: "California" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: opts.name,
      itemListElement: [
        {
          "@type": "Offer",
          price: opts.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: opts.price,
            priceCurrency: "USD",
            valueAddedTaxIncluded: false,
          },
        },
      ],
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
      ratingValue: "5.0",
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
    areaServed: { "@type": "City", name: city },
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
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: `https://www.dgautodetailing.com/blog/${opts.slug}`,
    datePublished: opts.date,
    dateModified: opts.date,
    author: {
      "@type": "Organization",
      name: "DG Detailing",
      url: "https://www.dgautodetailing.com",
    },
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
