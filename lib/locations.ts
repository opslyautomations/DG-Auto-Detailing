export interface Location {
  slug: string;
  city: string;
  state: string;
  intro: string;
  whyUs: string;
  nearbyAreas: string[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: Location[] = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    state: "CA",
    intro:
      "Los Angeles drivers know their cars endure more than most — sun-baked paint, beach salt drift, freeway grime, and weeks between proper washes. DG Detailing brings premium mobile auto detailing directly to LA homes, condos, and offices, restoring vehicles without you ever leaving your driveway.",
    whyUs:
      "Six years serving Greater LA. 1,500+ vehicles detailed across the metro — from Hollywood Hills to South Bay. Hand-wash only, professional-grade products, no rushed tunnel washes. Our maintenance plan keeps your car looking new month after month.",
    nearbyAreas: ["Marina Del Rey", "Santa Monica", "Culver City", "Venice Beach", "Playa Vista", "Brentwood"],
    metaTitle: "Mobile Auto Detailing Los Angeles | DG Detailing",
    metaDescription:
      "Premium mobile auto detailing in Los Angeles. Hand-wash only, 6+ years experience, 1,500+ vehicles detailed. We come to your home or office. Call (310) 855-4277.",
  },
  {
    slug: "marina-del-rey",
    city: "Marina Del Rey",
    state: "CA",
    intro:
      "Living near the marina means salt air every single day — and salt is paint's worst enemy. DG Detailing's mobile detailing service in Marina Del Rey is built around protecting your vehicle from coastal corrosion with proper hand-wash, decontamination, and sealants that actually hold up to ocean exposure.",
    whyUs:
      "We understand boat-adjacent living. Our Silver and Gold packages with wax and 6-month sealant are the most popular choices here, because clients see the difference within weeks of switching from regular car washes.",
    nearbyAreas: ["Venice Beach", "Playa Vista", "Santa Monica", "Culver City"],
    metaTitle: "Mobile Car Detailing Marina Del Rey | DG Detailing",
    metaDescription:
      "Mobile auto detailing in Marina Del Rey, CA. Coastal salt-air protection with hand-wash, decontamination & sealant. We come to you. Call (310) 855-4277.",
  },
  {
    slug: "santa-monica",
    city: "Santa Monica",
    state: "CA",
    intro:
      "Santa Monica's mix of coastal humidity, ocean breeze, and palm-debris means standard car washes simply don't keep up. DG Detailing offers mobile car detailing in Santa Monica that comes to your home, garage, or condo lot — full hand wash, interior detail, and protective sealants tailored to coastal driving.",
    whyUs:
      "Convenience and quality. Our clients in Santa Monica love that we work around their schedule, and they keep coming back because every detail is consistent — same care, same products, same results, every time.",
    nearbyAreas: ["Marina Del Rey", "Venice Beach", "Brentwood", "Playa Vista"],
    metaTitle: "Mobile Car Detailing Santa Monica | DG Detailing",
    metaDescription:
      "Mobile car detailing in Santa Monica, CA. Hand wash, interior detail & protective sealants for coastal driving. We come to you. Call (310) 855-4277.",
  },
  {
    slug: "culver-city",
    city: "Culver City",
    state: "CA",
    intro:
      "Culver City drivers commute through some of LA's heaviest freeway traffic, and that means brake dust, road tar, and bug splatter build up faster than people realize. DG Detailing's mobile detailing in Culver City removes that build-up safely with clay bar, hand wash, and proper decontamination — never harsh tunnel chemicals.",
    whyUs:
      "Proximity to studios, offices, and creative spaces means a clean car matters. We service residential homes, apartment complexes, and corporate parking lots throughout Culver City — flexible scheduling, premium results.",
    nearbyAreas: ["Los Angeles", "Marina Del Rey", "Venice Beach", "Playa Vista"],
    metaTitle: "Mobile Car Detailing Culver City | DG Detailing",
    metaDescription:
      "Mobile auto detailing in Culver City, CA. Remove freeway brake dust, tar & grime with professional hand-wash & clay bar. We come to you. Call (310) 855-4277.",
  },
  {
    slug: "venice-beach",
    city: "Venice Beach",
    state: "CA",
    intro:
      "Venice's beachfront living looks great until your paint starts pitting from sand and salt. DG Detailing offers mobile auto detailing in Venice Beach that handles coastal contaminants the right way — hand wash, clay bar treatment, and protective coatings that actually defend against ocean exposure.",
    whyUs:
      "Our maintenance plan is the smartest move for beach-area drivers. Monthly hand details + protective sealants prevent the slow paint damage that hits Venice cars hardest.",
    nearbyAreas: ["Marina Del Rey", "Santa Monica", "Playa Vista", "Culver City"],
    metaTitle: "Mobile Car Detailing Venice Beach | DG Detailing",
    metaDescription:
      "Mobile auto detailing in Venice Beach, CA. Coastal-grade decontamination, clay bar & sealant protection. We come to you. Call (310) 855-4277.",
  },
  {
    slug: "playa-vista",
    city: "Playa Vista",
    state: "CA",
    intro:
      "Playa Vista's modern condos and tech campus mean quick, professional service matters. DG Detailing brings mobile detailing directly to Playa Vista residents and professionals — work from home or your office while your car gets fully detailed in the same lot.",
    whyUs:
      "Tech-savvy clients want efficiency without sacrificing quality. Our Gold package is popular here because it delivers 6-month sealant protection, full interior shampoo, and steam clean — all done while you handle your day.",
    nearbyAreas: ["Marina Del Rey", "Venice Beach", "Culver City", "Los Angeles"],
    metaTitle: "Mobile Car Detailing Playa Vista | DG Detailing",
    metaDescription:
      "Mobile auto detailing in Playa Vista, CA. On-site detailing for tech professionals & residents. Gold package specialists. Call (310) 855-4277.",
  },
  {
    slug: "brentwood",
    city: "Brentwood",
    state: "CA",
    intro:
      "Brentwood owners drive premium vehicles, and premium vehicles deserve premium care — not strip-mall car washes that scratch clear coats. DG Detailing offers luxury mobile auto detailing in Brentwood with clay bar, sealant, and ceramic-grade finishes designed for high-end paint.",
    whyUs:
      "Discretion, quality, and consistency. We arrive on time, work professionally on the property, and deliver dealership-level finishes — without you ever leaving home.",
    nearbyAreas: ["Santa Monica", "Los Angeles", "Culver City", "Playa Vista"],
    metaTitle: "Luxury Mobile Car Detailing Brentwood | DG Detailing",
    metaDescription:
      "Luxury mobile auto detailing in Brentwood, CA. Clay bar, sealant & ceramic-grade finishes for premium vehicles. We come to you. Call (310) 855-4277.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
