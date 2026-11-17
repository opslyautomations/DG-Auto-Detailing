export type ServiceTier = "bronze" | "silver" | "gold";
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

const bronzeBenefits = [
  "Hand-washed by a professional — never automated brushes that scratch your paint.",
  "Quick, thorough, and affordable — ideal for between-detail upkeep.",
  "We come to you — your driveway, garage, or office parking lot.",
];

const bronzeFaqs: ServiceFAQ[] = [
  {
    question: "How is this different from a regular car wash?",
    answer:
      "Every Bronze Detail is hand-washed with pH-balanced shampoos and microfiber towels — no automated tunnels that scratch clear coats and miss interior detail.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No, as long as the vehicle is accessible. We bring our own water and power if needed.",
  },
  {
    question: "How often should I get a Bronze Detail?",
    answer:
      "Every 4–6 weeks for most LA drivers. For weekly, bi-weekly, or monthly upkeep, see our Maintenance Packages.",
  },
];

const silverBenefits = [
  "Adds protection — wax sealant guards your paint from sun, salt air, and bird damage for up to 3 months.",
  "Restores leather and plastic — interior surfaces protected from UV cracking and fading.",
  "Step up from Bronze — perfect for owners who want their car to look factory-fresh longer.",
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
    slug: "bronze-coupe-detail",
    name: "Bronze Coupe Detail",
    tier: "bronze",
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
    benefits: bronzeBenefits,
    faqs: bronzeFaqs,
    relatedSlugs: ["silver-coupe-detail", "gold-coupe-detail", "bronze-sedan-detail"],
  },
  {
    slug: "bronze-sedan-detail",
    name: "Bronze Sedan Detail",
    tier: "bronze",
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
    benefits: bronzeBenefits,
    faqs: bronzeFaqs,
    relatedSlugs: ["silver-sedan-detail", "gold-sedan-detail", "bronze-coupe-detail"],
  },
  {
    slug: "bronze-suv-truck-detail",
    name: "Bronze SUV / Truck Detail",
    tier: "bronze",
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
    benefits: bronzeBenefits,
    faqs: bronzeFaqs,
    relatedSlugs: ["silver-suv-truck-detail", "gold-suv-truck-detail", "bronze-sedan-detail"],
  },
  {
    slug: "silver-coupe-detail",
    name: "Silver Coupe Detail",
    tier: "silver",
    vehicleClass: "coupe",
    priceFrom: 185,
    duration: "2 hrs 30 min",
    shortDescription: "Everything in Bronze plus leather conditioning, 3-month wax protection, and plastic protectant for coupes.",
    inclusions: [
      "Everything in Bronze Detail",
      "Leather Conditioning",
      "Wax for 3 Month Protection",
      "Plastic Protectant on Interior and Exterior",
    ],
    benefits: silverBenefits,
    faqs: silverFaqs,
    relatedSlugs: ["bronze-coupe-detail", "gold-coupe-detail", "silver-sedan-detail"],
  },
  {
    slug: "silver-sedan-detail",
    name: "Silver Sedan Detail",
    tier: "silver",
    vehicleClass: "sedan",
    priceFrom: 215,
    duration: "3 hrs",
    shortDescription: "Everything in Bronze plus leather conditioning, 3-month wax protection, and plastic protectant for sedans.",
    inclusions: [
      "Everything in Bronze Detail",
      "Leather Conditioning",
      "Wax for 3 Month Protection",
      "Plastic Protectant on Interior and Exterior",
    ],
    benefits: silverBenefits,
    faqs: silverFaqs,
    relatedSlugs: ["bronze-sedan-detail", "gold-sedan-detail", "silver-coupe-detail"],
  },
  {
    slug: "silver-suv-truck-detail",
    name: "Silver SUV / Truck Detail",
    tier: "silver",
    vehicleClass: "suv-truck",
    priceFrom: 265,
    duration: "3 hrs 30 min",
    shortDescription: "Everything in Bronze plus leather conditioning, 3-month wax protection, and plastic protectant for SUVs & trucks.",
    inclusions: [
      "Everything in Bronze Detail",
      "Leather Conditioning",
      "Wax for 3 Month Protection",
      "Plastic Protectant on Interior and Exterior",
    ],
    benefits: silverBenefits,
    faqs: silverFaqs,
    relatedSlugs: ["bronze-suv-truck-detail", "gold-suv-truck-detail", "silver-sedan-detail"],
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
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
};

export const tierDescriptions: Record<ServiceTier, string> = {
  bronze: "Professional hand wash & interior clean — the perfect regular refresh.",
  silver: "Everything in Bronze plus wax protection, leather care, and plastic protectant.",
  gold: "Full restoration with clay bar, 6-month sealant, deep carpet & seat shampoo, and steam clean.",
};

export const tierColors: Record<ServiceTier, string> = {
  bronze: "from-orange-800 to-stone-900",
  silver: "from-slate-500 to-slate-700",
  gold: "from-yellow-600 to-amber-800",
};

export const vehicleClassLabels: Record<VehicleClass, string> = {
  coupe: "Coupe",
  sedan: "Sedan",
  "suv-truck": "SUV / Truck",
};
