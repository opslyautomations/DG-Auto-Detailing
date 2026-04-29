export const DIEGO_PORTRAIT = {
  src: "/images/about/diego-founder-dg-detailing-los-angeles.jpg",
  alt: "Diego, founder of DG Detailing, professional mobile auto detailer in Los Angeles",
  width: 600,
  height: 700,
};

export const HERO_IMAGE = {
  src: "/images/hero/dg-detailing-hero-los-angeles.jpg",
  alt: "DG Detailing mobile auto detailing service in Los Angeles",
  width: 1200,
  height: 800,
};

export const OG_DEFAULT = {
  src: "/images/og/og-default.jpg",
  alt: "DG Detailing — Mobile Auto Detailing Los Angeles",
  width: 1200,
  height: 630,
};

/** Cycle through work images by index for service/location hero sections */
export const WORK_IMAGES = [
  {
    src: "/images/work/dg-gold-exterior-range-rover-brentwood-2024.jpg",
    alt: "DG Detailing Gold Exterior Detail — Range Rover, Brentwood Los Angeles",
  },
  {
    src: "/images/work/dg-silver-exterior-bmw-marina-del-rey-2024.jpg",
    alt: "DG Detailing Silver Exterior Detail — BMW, Marina Del Rey Los Angeles",
  },
  {
    src: "/images/work/dg-interior-detail-mercedes-santa-monica-2024.jpg",
    alt: "DG Detailing Interior Deep Clean — Mercedes, Santa Monica Los Angeles",
  },
  {
    src: "/images/work/dg-gold-exterior-porsche-playa-vista-2024.jpg",
    alt: "DG Detailing Gold Exterior Detail — Porsche, Playa Vista Los Angeles",
  },
  {
    src: "/images/work/dg-basic-exterior-honda-culver-city-2024.jpg",
    alt: "DG Detailing Basic Exterior Detail — Honda, Culver City Los Angeles",
  },
  {
    src: "/images/work/dg-interior-tesla-venice-beach-2024.jpg",
    alt: "DG Detailing Interior Detail — Tesla, Venice Beach Los Angeles",
  },
];

/** Pick a work image by index (wraps around) */
export function getWorkImage(index: number) {
  return WORK_IMAGES[index % WORK_IMAGES.length];
}
