export type ServiceTier = "basic" | "silver" | "gold";
export type VehicleClass = "coupe" | "sedan" | "suv-truck";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  tier: ServiceTier;
  vehicleClass: VehicleClass;
  priceFrom: number;
  duration: string;
  shortDescription: string;
  inclusions: string[];
  benefits: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

const basicBenefits = [
  "Hand-washed by a professional — never automated brushes that scratch your paint.",
  "Quick, thorough, and affordable — ideal for between-detail upkeep.",
  "We come to you — your driveway, garage, or office parking lot.",
];

const basicFaqs: ServiceFAQ[] = [
  {
    question: "How is this different from a regular car wash?",
    answer:
      "Every basic detail is hand-washed with pH-balanced shampoos and microfiber towels — no automated tunnels that scratch clear coats and miss interior detail.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No, as long as the vehicle is accessible. We bring our own water and power if needed.",
  },
  {
    question: "How often should I get a basic detail?",
    answer:
      "Every 4–6 weeks for most LA drivers. Ask about our maintenance plan.",
  },
];

const silverBenefits = [
  "Adds protection — wax sealant guards your paint from sun, salt air, and bird damage for up to 3 months.",
  "Restores leather and plastic — interior surfaces protected from UV cracking and fading.",
  "Step up from the basic — perfect for owners who want their car to look factory-fresh longer.",
];

const silverFaqs: ServiceFAQ[] = [
  {
    question: "How long does the wax protection last?",
    answer:
      "About 3 months under normal LA driving conditions, longer if your car is garaged.",
  },
  {
    question: "Will leather conditioning leave a greasy feel?",
    answer:
      "No — we use a matte-finish, non-greasy conditioner that absorbs cleanly.",
  },
  {
    question: "Is this enough if my paint has light swirls?",
    answer:
      "For visible swirls or scratches, our Gold tier with clay bar and sealant is the better choice.",
  },
];

const goldBenefits = [
  "Full restoration — clay bar removes embedded contaminants most washes miss, then sealant locks in shine for 6 months.",
  "Deep interior reset — carpets shampooed and extracted, seats deep-cleaned, hard surfaces steam-sanitized.",
  "The full experience — your vehicle leaves looking and smelling showroom-new.",
];

const goldFaqs: ServiceFAQ[] = [
  {
    question: "How long does the appointment take?",
    answer:
      "5–6 hours depending on vehicle class. We work on-site so you can go about your day.",
  },
  {
    question: "What's the difference between sealant and ceramic coating?",
    answer:
      "Sealant gives 6 months of strong protection at a fraction of ceramic cost; ceramic is a 1–5 year solution available as a separate service.",
  },
  {
    question: "Will the steam clean damage anything?",
    answer:
      "No — controlled-temperature steam is gentle on dashboards, vents, and trim while killing bacteria and lifting grime.",
  },
];

export const services: Service[] = [
  {
    slug: "basic-coupe-detail",
    name: "Basic Coupe Detail",
    tier: "basic",
    vehicleClass: "coupe",
    priceFrom: 105,
    duration: "1 hr 30 min",
    shortDescription: "Professional hand wash, interior vacuum & wipe-down, detail spray, and tire shine for coupes.",
    inclusions: [
      "Exterior Hand Wash",
      "Interior Vacuuming and Surface Wipe Down",
      "High-Gloss Detail Spray",
      "Tire Shine",
    ],
    benefits: basicBenefits,
    faqs: basicFaqs,
    relatedSlugs: ["silver-coupe-detail", "gold-coupe-detail", "basic-sedan-detail"],
  },
  {
    slug: "basic-sedan-detail",
    name: "Basic Sedan Detail",
    tier: "basic",
    vehicleClass: "sedan",
    priceFrom: 125,
    duration: "2 hrs",
    shortDescription: "Professional hand wash, interior vacuum & wipe-down, detail spray, and tire shine for sedans.",
    inclusions: [
      "Exterior Hand Wash",
      "Interior Vacuuming and Surface Wipe Down",
      "High-Gloss Detail Spray",
      "Tire Shine",
    ],
    benefits: basicBenefits,
    faqs: basicFaqs,
    relatedSlugs: ["silver-sedan-detail", "gold-sedan-detail", "basic-coupe-detail"],
  },
  {
    slug: "basic-suv-truck-detail",
    name: "Basic SUV / Truck Detail",
    tier: "basic",
    vehicleClass: "suv-truck",
    priceFrom: 155,
    duration: "2 hrs",
    shortDescription: "Professional hand wash, interior vacuum & wipe-down, detail spray, and tire shine for SUVs & trucks.",
    inclusions: [
      "Exterior Hand Wash",
      "Interior Vacuuming and Surface Wipe Down",
      "High-Gloss Detail Spray",
      "Tire Shine",
    ],
    benefits: basicBenefits,
    faqs: basicFaqs,
    relatedSlugs: ["silver-suv-truck-detail", "gold-suv-truck-detail", "basic-sedan-detail"],
  },
  {
    slug: "silver-coupe-detail",
    name: "Silver Coupe Detail",
    tier: "silver",
    vehicleClass: "coupe",
    priceFrom: 185,
    duration: "2 hrs 30 min",
    shortDescription: "Everything in Basic plus leather conditioning, 3-month wax protection, and plastic protectant for coupes.",
    inclusions: [
      "Everything in Basic Detail",
      "Leather Conditioning",
      "Wax for 3 Month Protection",
      "Plastic Protectant on Interior and Exterior",
    ],
    benefits: silverBenefits,
    faqs: silverFaqs,
    relatedSlugs: ["basic-coupe-detail", "gold-coupe-detail", "silver-sedan-detail"],
  },
  {
    slug: "silver-sedan-detail",
    name: "Silver Sedan Detail",
    tier: "silver",
    vehicleClass: "sedan",
    priceFrom: 215,
    duration: "3 hrs",
    shortDescription: "Everything in Basic plus leather conditioning, 3-month wax protection, and plastic protectant for sedans.",
    inclusions: [
      "Everything in Basic Detail",
      "Leather Conditioning",
      "Wax for 3 Month Protection",
      "Plastic Protectant on Interior and Exterior",
    ],
    benefits: silverBenefits,
    faqs: silverFaqs,
    relatedSlugs: ["basic-sedan-detail", "gold-sedan-detail", "silver-coupe-detail"],
  },
  {
    slug: "silver-suv-truck-detail",
    name: "Silver SUV / Truck Detail",
    tier: "silver",
    vehicleClass: "suv-truck",
    priceFrom: 265,
    duration: "3 hrs 30 min",
    shortDescription: "Everything in Basic plus leather conditioning, 3-month wax protection, and plastic protectant for SUVs & trucks.",
    inclusions: [
      "Everything in Basic Detail",
      "Leather Conditioning",
      "Wax for 3 Month Protection",
      "Plastic Protectant on Interior and Exterior",
    ],
    benefits: silverBenefits,
    faqs: silverFaqs,
    relatedSlugs: ["basic-suv-truck-detail", "gold-suv-truck-detail", "silver-sedan-detail"],
  },
  {
    slug: "gold-coupe-detail",
    name: "Gold Coupe Detail",
    tier: "gold",
    vehicleClass: "coupe",
    priceFrom: 425,
    duration: "5 hrs",
    shortDescription: "The full restoration — clay bar, 6-month sealant, carpet & seat shampoo, steam clean for coupes.",
    inclusions: [
      "Everything in Silver Detail",
      "Clay Bar Treatment",
      "Sealant for 6 Month Protection",
      "Plastic Protectant Interior and Exterior",
      "Shampoo Carpet Cleaning / Extractor",
      "Shampoo Seats / Extractor",
      "Steam Clean Hard Surfaces",
    ],
    benefits: goldBenefits,
    faqs: goldFaqs,
    relatedSlugs: ["silver-coupe-detail", "gold-sedan-detail", "gold-suv-truck-detail"],
  },
  {
    slug: "gold-sedan-detail",
    name: "Gold Sedan Detail",
    tier: "gold",
    vehicleClass: "sedan",
    priceFrom: 455,
    duration: "5 hrs",
    shortDescription: "The full restoration — clay bar, 6-month sealant, carpet & seat shampoo, steam clean for sedans.",
    inclusions: [
      "Everything in Silver Detail",
      "Clay Bar Treatment",
      "Sealant for 6 Month Protection",
      "Plastic Protectant Interior and Exterior",
      "Shampoo Carpet Cleaning / Extractor",
      "Shampoo Seats / Extractor",
      "Steam Clean Hard Surfaces",
    ],
    benefits: goldBenefits,
    faqs: goldFaqs,
    relatedSlugs: ["silver-sedan-detail", "gold-coupe-detail", "gold-suv-truck-detail"],
  },
  {
    slug: "gold-suv-truck-detail",
    name: "Gold SUV / Truck Detail",
    tier: "gold",
    vehicleClass: "suv-truck",
    priceFrom: 505,
    duration: "6 hrs",
    shortDescription: "The full restoration — clay bar, 6-month sealant, carpet & seat shampoo, steam clean for SUVs & trucks.",
    inclusions: [
      "Everything in Silver Detail",
      "Clay Bar Treatment",
      "Sealant for 6 Month Protection",
      "Plastic Protectant Interior and Exterior",
      "Shampoo Carpet Cleaning / Extractor",
      "Shampoo Seats / Extractor",
      "Steam Clean Hard Surfaces",
    ],
    benefits: goldBenefits,
    faqs: goldFaqs,
    relatedSlugs: ["silver-suv-truck-detail", "gold-sedan-detail", "gold-coupe-detail"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const tierLabels: Record<ServiceTier, string> = {
  basic: "Basic",
  silver: "Silver",
  gold: "Gold",
};

export const tierDescriptions: Record<ServiceTier, string> = {
  basic: "Professional hand wash & interior clean — the perfect regular refresh.",
  silver: "Everything in Basic plus wax protection, leather care, and plastic protectant.",
  gold: "Full restoration with clay bar, 6-month sealant, deep carpet & seat shampoo, and steam clean.",
};

export const tierColors: Record<ServiceTier, string> = {
  basic: "from-zinc-700 to-zinc-800",
  silver: "from-slate-500 to-slate-700",
  gold: "from-yellow-600 to-amber-800",
};
