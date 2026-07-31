export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: "exterior" | "interior";
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/work/IMG_7338.jpg",
    alt: "Finished mobile detail on a Lexus with a deep, swirl-free gloss finish",
    caption: "Lexus — Finished Detail",
    category: "exterior",
    width: 4284,
    height: 5712,
  },
  {
    src: "/images/work/IMG_4779.jpg",
    alt: "Finished mobile detail on an orange Dodge Challenger in a residential driveway",
    caption: "Dodge Challenger — Finished Detail",
    category: "exterior",
    width: 3024,
    height: 4032,
  },
  {
    src: "/images/work/IMG_7552.jpg",
    alt: "Finished mobile detail on a blue Mercedes-AMG GT with a glossy, freshly washed finish",
    caption: "Mercedes-AMG GT — Finished Detail",
    category: "exterior",
    width: 4284,
    height: 5712,
  },
  {
    src: "/images/work/IMG_4818.jpg",
    alt: "Interior detail on a McLaren showing clean tan leather seats and dashboard",
    caption: "McLaren — Interior Detail",
    category: "interior",
    width: 3024,
    height: 4032,
  },
  {
    src: "/images/work/IMG_4810.jpg",
    alt: "McLaren covered in thick foam during the pre-wash decontamination stage",
    caption: "McLaren — Foam Pre-Wash",
    category: "exterior",
    width: 3024,
    height: 4032,
  },
  {
    src: "/images/work/IMG_6016.jpg",
    alt: "Ford Raptor truck covered in foam during the pre-wash stage in a driveway",
    caption: "Ford Raptor — Foam Pre-Wash",
    category: "exterior",
    width: 3024,
    height: 4032,
  },
  {
    src: "/images/work/IMG_7597.jpg",
    alt: "Dodge Charger covered in foam during the pre-wash stage next to a hedge",
    caption: "Dodge Charger — Foam Pre-Wash",
    category: "exterior",
    width: 4284,
    height: 5712,
  },
  {
    src: "/images/work/IMG_5991.jpg",
    alt: "Toyota Camry covered in foam during the pre-wash stage on a residential street",
    caption: "Toyota Camry — Foam Pre-Wash",
    category: "exterior",
    width: 3024,
    height: 4032,
  },
  {
    src: "/images/work/IMG_7705.jpg",
    alt: "Close-up of a foam-covered wheel and fender during the pre-wash stage",
    caption: "Wheel & Fender Detail — Foam Pre-Wash",
    category: "exterior",
    width: 4284,
    height: 5712,
  },
];

export interface BeforeAfterPair {
  before: GalleryImage;
  after: GalleryImage;
  label: string;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    label: "Mercedes-AMG GT",
    before: {
      src: "/images/work/IMG_7551.jpg",
      alt: "Mercedes-AMG GT covered in foam during the pre-wash decontamination stage",
      caption: "Before — Foam Pre-Wash",
      category: "exterior",
      width: 4284,
      height: 5712,
    },
    after: {
      src: "/images/work/IMG_7552.jpg",
      alt: "The same Mercedes-AMG GT finished, with a deep glossy exterior shine",
      caption: "After — Finished Detail",
      category: "exterior",
      width: 4284,
      height: 5712,
    },
  },
];

export function getGalleryByCategory(category: GalleryImage["category"]): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category);
}
