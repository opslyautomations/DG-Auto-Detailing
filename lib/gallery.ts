export interface GalleryImage {
  src: string;
  alt: string;
  category: "exterior" | "interior" | "engine" | "before-after";
  service?: string;
  city?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/work/dg-gold-exterior-range-rover-brentwood-2024.jpg",
    alt: "DG Detailing Gold Exterior Detail — Range Rover, Brentwood Los Angeles",
    category: "exterior",
    service: "gold-exterior-suv-truck",
    city: "brentwood",
  },
  {
    src: "/images/work/dg-silver-exterior-bmw-marina-del-rey-2024.jpg",
    alt: "DG Detailing Silver Exterior Detail — BMW, Marina Del Rey Los Angeles",
    category: "exterior",
    service: "silver-exterior-sedan",
    city: "marina-del-rey",
  },
  {
    src: "/images/work/dg-interior-detail-mercedes-santa-monica-2024.jpg",
    alt: "DG Detailing Interior Deep Clean — Mercedes, Santa Monica Los Angeles",
    category: "interior",
    service: "gold-interior-sedan",
    city: "santa-monica",
  },
  {
    src: "/images/work/dg-gold-exterior-porsche-playa-vista-2024.jpg",
    alt: "DG Detailing Gold Exterior Detail — Porsche, Playa Vista Los Angeles",
    category: "exterior",
    service: "gold-exterior-coupe",
    city: "playa-vista",
  },
  {
    src: "/images/work/dg-basic-exterior-honda-culver-city-2024.jpg",
    alt: "DG Detailing Basic Exterior Detail — Honda, Culver City Los Angeles",
    category: "exterior",
    service: "basic-exterior-sedan",
    city: "culver-city",
  },
  {
    src: "/images/work/dg-interior-tesla-venice-beach-2024.jpg",
    alt: "DG Detailing Interior Detail — Tesla, Venice Beach Los Angeles",
    category: "interior",
    service: "silver-interior-sedan",
    city: "venice-beach",
  },
  {
    src: "/images/work/dg-before-after-paint-correction-la-2024.jpg",
    alt: "DG Detailing before and after paint correction — Los Angeles",
    category: "before-after",
  },
  {
    src: "/images/work/dg-engine-bay-detail-suv-la-2024.jpg",
    alt: "DG Detailing engine bay detail — SUV, Los Angeles",
    category: "engine",
  },
];

export function getGalleryByCategory(category: GalleryImage["category"]): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category);
}

export function getGalleryByCity(city: string): GalleryImage[] {
  return galleryImages.filter((img) => img.city === city);
}

export function getGalleryByService(service: string): GalleryImage[] {
  return galleryImages.filter((img) => img.service === service);
}
