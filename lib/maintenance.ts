import type { ServiceFAQ, VehicleClass } from "@/lib/services";

/**
 * Recurring maintenance packages: one page per vehicle class, each booked on a
 * weekly, bi-weekly, or monthly routine. The pages live at static routes under
 * /services (static segments win over app/services/[service]).
 */
export interface MaintenancePackage {
  slug: string;
  vehicleClass: VehicleClass;
  /** Short vehicle label, e.g. "Coupe". */
  vehicle: string;
  /** Plural noun used in body copy, e.g. "coupes". */
  vehiclePlural: string;
  name: string;
  /** Short label for the nav menu. */
  navLabel: string;
  pricePerVisit: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroIntro: string;
  /** Why upkeep matters for this vehicle type specifically. */
  vehicleAngle: { heading: string; body: string };
  routines: { weekly: string; biweekly: string; monthly: string };
  /** The Silver and Gold detail for this vehicle class: the usual first visit. */
  resetSlugs: { silver: string; gold: string };
  faqs: ServiceFAQ[];
}

export const maintenanceCities = [
  { slug: "los-angeles", city: "Los Angeles" },
  { slug: "santa-monica", city: "Santa Monica" },
  { slug: "marina-del-rey", city: "Marina Del Rey" },
  { slug: "venice-beach", city: "Venice Beach" },
  { slug: "culver-city", city: "Culver City" },
  { slug: "playa-vista", city: "Playa Vista" },
  { slug: "brentwood", city: "Brentwood" },
];

/** What every maintenance visit covers (same for all vehicle classes). */
export const maintenanceInclusions = [
  "Exterior Hand Wash",
  "Interior Vacuuming and Surface Wipe Down",
  "High-Gloss Detail Spray",
  "Tire Shine",
];

/** Why frequent cleaning beats waiting for a big detail. Shared by all three pages. */
export const maintenanceBenefits = [
  {
    title: "You avoid the big, expensive cleans",
    body: "Dirt that's removed every week or two never gets the chance to bake on, stain, or bond to the paint. Stay on a routine and your vehicle rarely needs a heavy decontamination, carpet extraction, or paint correction to bring it back.",
  },
  {
    title: "Your paint is protected from LA's worst offenders",
    body: "Bird droppings, tree sap, salt air off the coast, and freeway brake dust start etching into clear coat within days. Regular hand washes take them off before they leave permanent marks.",
  },
  {
    title: "Your Silver or Gold protection lasts longer",
    body: "Wax and sealant wear down faster under a layer of grime. Gentle, pH-balanced maintenance washes keep that protection working for its full 3 or 6 months instead of fading early.",
  },
  {
    title: "The interior stays fresh, not just clean",
    body: "Sand, crumbs, and grit grind into carpet and leather every time you get in. Vacuuming and wiping surfaces on a schedule stops wear, odors, and stains from building up in the first place.",
  },
  {
    title: "It holds its value",
    body: "A vehicle that's been cleaned consistently shows it at trade-in or sale: no swirled, etched paint, no stained seats, no musty smell. Regular upkeep is one of the cheapest ways to protect resale value.",
  },
  {
    title: "It's always ready, and you never think about it",
    body: "Same routine, same care, same result. We come to your home or office on your schedule, so your car is clean for the client meeting, the date night, or the weekend drive without you having to book every time.",
  },
];

export const maintenancePackages: MaintenancePackage[] = [
  {
    slug: "coupe-maintenance-package",
    vehicleClass: "coupe",
    vehicle: "Coupe",
    vehiclePlural: "coupes",
    name: "Coupe Maintenance Package",
    navLabel: "Coupe",
    pricePerVisit: 105,
    metaTitle: "Coupe Maintenance Package | Recurring Car Cleaning Los Angeles",
    metaDescription:
      "Recurring coupe cleaning in Los Angeles, Santa Monica, Brentwood & Marina Del Rey. Weekly, bi-weekly, or monthly mobile hand washes from $105 per visit. Keep your car clean year-round.",
    keywords: [
      "coupe maintenance package",
      "recurring car cleaning Los Angeles",
      "recurring car cleaning Santa Monica",
      "weekly car wash Brentwood",
      "bi-weekly car detailing Marina Del Rey",
      "monthly car detail Los Angeles",
      "exotic car maintenance wash Los Angeles",
      "mobile car wash subscription LA",
    ],
    heroIntro:
      "Keep your coupe showroom-clean every week, every other week, or every month. A professional mobile hand wash and interior refresh at your home or office across Los Angeles, from $105 per visit.",
    vehicleAngle: {
      heading: "Why coupes benefit most from a routine",
      body: "Performance and luxury coupes tend to wear soft, high-gloss paint that shows every swirl and water spot, and low-slung bodies pick up more road spray and brake dust. Automatic car washes are the fastest way to ruin that finish. A recurring hand wash keeps your Ferrari, Porsche, AMG, or daily-driven coupe gleaming without ever putting a brush on the paint.",
    },
    routines: {
      weekly:
        "For the coupe that's driven daily or parked outside near the coast. Weekly washes stop salt, dust, and bird droppings from ever sitting on the paint long enough to etch.",
      biweekly:
        "The sweet spot for most coupe owners. Every two weeks keeps the paint and interior consistently clean and makes your Silver or Gold wax and sealant last its full life.",
      monthly:
        "For the garaged weekend car or low-mileage coupe. A monthly visit clears dust and keeps everything fresh so it's ready whenever you want to drive it.",
    },
    resetSlugs: { silver: "silver-coupe-detail", gold: "gold-coupe-detail" },
    faqs: [
      {
        question: "How much does the Coupe Maintenance Package cost?",
        answer:
          "$105 per visit, the same rate whether you choose weekly, bi-weekly, or monthly.",
      },
      {
        question: "Is a maintenance wash safe for exotic and high-end paint?",
        answer:
          "Yes. Every visit is a hand wash with pH-balanced shampoo and clean microfiber, never automated brushes. It's the same safe wash method we use on exotic and high-end cars.",
      },
    ],
  },
  {
    slug: "sedan-maintenance-package",
    vehicleClass: "sedan",
    vehicle: "Sedan",
    vehiclePlural: "sedans",
    name: "Sedan Maintenance Package",
    navLabel: "Sedan",
    pricePerVisit: 115,
    metaTitle: "Sedan Maintenance Package | Recurring Car Cleaning Los Angeles",
    metaDescription:
      "Recurring sedan cleaning in Los Angeles, Culver City, Santa Monica & Playa Vista. Weekly, bi-weekly, or monthly mobile hand washes from $115 per visit, at your home or office.",
    keywords: [
      "sedan maintenance package",
      "recurring car cleaning Los Angeles",
      "recurring car cleaning Culver City",
      "weekly car wash Santa Monica",
      "bi-weekly car detailing Playa Vista",
      "monthly car detail Los Angeles",
      "mobile car wash at work Los Angeles",
      "car cleaning subscription LA",
    ],
    heroIntro:
      "Keep your sedan clean inside and out on a weekly, bi-weekly, or monthly routine. A professional mobile hand wash and interior refresh at your home or office across Los Angeles, from $115 per visit.",
    vehicleAngle: {
      heading: "Why sedans benefit most from a routine",
      body: "Sedans are the daily drivers: commutes on the 405 and 10, client meetings, school runs, and long days in office garages. That mileage brings freeway grime, brake dust, and a lived-in interior fast. A recurring clean keeps your Mercedes, BMW, Tesla, or Lexus looking professional every day, without you giving up a Saturday to wash it.",
    },
    routines: {
      weekly:
        "For heavy commuters, rideshare and business drivers, or anyone who meets clients in their car. Weekly visits keep the interior presentable and the paint free of road film.",
      biweekly:
        "Our recommendation for most sedan owners. Every two weeks keeps the car consistently clean and makes your Silver or Gold protection last its full life.",
      monthly:
        "For lighter drivers or garaged sedans. A monthly visit clears the build-up before it turns into stains, etching, or a car that needs a full detail again.",
    },
    resetSlugs: { silver: "silver-sedan-detail", gold: "gold-sedan-detail" },
    faqs: [
      {
        question: "How much does the Sedan Maintenance Package cost?",
        answer:
          "$115 per visit, the same rate whether you choose weekly, bi-weekly, or monthly.",
      },
      {
        question: "Can you clean my sedan at my office while I work?",
        answer:
          "Yes. We regularly service office and corporate parking lots in Culver City, Playa Vista, and Santa Monica, so your car can be cleaned during the workday. We bring our own water and power.",
      },
    ],
  },
  {
    slug: "suv-truck-maintenance-package",
    vehicleClass: "suv-truck",
    vehicle: "SUV / Truck",
    vehiclePlural: "SUVs and trucks",
    name: "SUV / Truck Maintenance Package",
    navLabel: "SUV/Truck",
    pricePerVisit: 135,
    metaTitle: "SUV & Truck Maintenance Package | Recurring Cleaning Los Angeles",
    metaDescription:
      "Recurring SUV and truck cleaning in Los Angeles, Brentwood, Santa Monica & Venice Beach. Weekly, bi-weekly, or monthly mobile hand washes from $135 per visit. We come to you.",
    keywords: [
      "SUV maintenance package",
      "truck maintenance wash",
      "recurring car cleaning Los Angeles",
      "recurring SUV cleaning Brentwood",
      "weekly SUV wash Santa Monica",
      "bi-weekly truck detailing Venice Beach",
      "monthly SUV detail Los Angeles",
      "family car cleaning Los Angeles",
    ],
    heroIntro:
      "Keep your SUV or truck clean inside and out on a weekly, bi-weekly, or monthly routine. A professional mobile hand wash and interior refresh at your home or office across Los Angeles, from $135 per visit.",
    vehicleAngle: {
      heading: "Why SUVs and trucks benefit most from a routine",
      body: "SUVs and trucks carry the most: kids, pets, sports gear, beach sand, and job-site dust, across more paint and more carpet than any other vehicle. Left for months, that turns into ground-in stains and odors that need a full extraction. A recurring clean keeps your Escalade, Range Rover, Tahoe, or pickup fresh and family-ready every week.",
    },
    routines: {
      weekly:
        "For family haulers, pet owners, and work trucks. Weekly visits keep sand, crumbs, and hair from grinding into the carpet and seats.",
      biweekly:
        "Our recommendation for most SUV owners. Every two weeks keeps the large paint surfaces and the cabin consistently clean and protects your Silver or Gold finish.",
      monthly:
        "For lighter-use SUVs and weekend trucks. A monthly visit clears the build-up before it turns into stains, odors, or a vehicle that needs a full detail again.",
    },
    resetSlugs: { silver: "silver-suv-truck-detail", gold: "gold-suv-truck-detail" },
    faqs: [
      {
        question: "How much does the SUV / Truck Maintenance Package cost?",
        answer:
          "$135 per visit, the same rate whether you choose weekly, bi-weekly, or monthly.",
      },
      {
        question: "Do you handle third-row SUVs and full-size trucks?",
        answer:
          "Yes. Third-row SUVs like the Escalade, Suburban, and Tahoe, plus full-size and heavy-duty pickups, are all covered by this package.",
      },
    ],
  },
];

/** FAQs shared by every maintenance page (appended after the vehicle-specific ones). */
export const sharedMaintenanceFaqs: ServiceFAQ[] = [
  {
    question: "Do I need a full detail before starting maintenance?",
    answer:
      "We recommend it, and most clients do exactly that: they book a Silver or Gold detail first to fully reset the vehicle and add wax or sealant protection, then schedule recurring maintenance cleans to keep it that way. Maintenance is designed to hold a clean car's condition, not to restore a neglected one.",
  },
  {
    question: "Should I choose weekly, bi-weekly, or monthly?",
    answer:
      "Bi-weekly is what we recommend for most drivers. Choose weekly if you drive daily, park outside, live near the coast, or have kids or pets. Monthly works well for garaged or low-mileage vehicles. Not sure? Call us at (310) 692-4495 and we'll recommend a routine for how you drive.",
  },
  {
    question: "How does frequent cleaning save me money?",
    answer:
      "Dirt, sap, salt, and droppings cause damage the longer they sit. Cleaning on a schedule removes them before they etch the paint or stain the interior, so you rarely need heavy decontamination, shampoo extraction, or paint correction, which cost far more than routine visits.",
  },
  {
    question: "Which areas do you cover for recurring cleaning?",
    answer:
      "We offer recurring mobile cleaning across Los Angeles, including Santa Monica, Marina Del Rey, Venice Beach, Culver City, Playa Vista, and Brentwood. We come to your home, condo, or office.",
  },
  {
    question: "Do I need to be home for each visit?",
    answer:
      "No. As long as the vehicle is accessible, we can complete the visit while you're at work or busy. We bring our own water and power if needed.",
  },
];

export function getMaintenanceBySlug(slug: string): MaintenancePackage | undefined {
  return maintenancePackages.find((p) => p.slug === slug);
}
