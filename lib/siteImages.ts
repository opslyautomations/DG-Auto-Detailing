/**
 * Photos for the service and location pages, with the SEO metadata each one
 * carries (alt, title, caption, keywords) and its credit. Credits are never
 * rendered on the page: they go into ImageObject structured data and are also
 * embedded in each JPEG's EXIF/XMP. Stock images are CC0 or public domain, so
 * no visible attribution is required.
 */
export interface SiteImage {
  src: string;
  /** 1200x630 crop for Open Graph / Twitter cards. */
  ogSrc: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
  keywords: string[];
  /** Service images: the class of vehicle shown, and the vehicle itself. */
  vehicleType?: "Coupe" | "Sedan" | "SUV / Truck";
  vehicle?: string;
  /** Location images: the landmark shown. */
  place?: string;
  credit: {
    creator: string;
    license: string;
    licenseUrl?: string;
    sourceUrl?: string;
    copyright: string;
  };
}

/** Keyed by service slug (plus "ceramic-coating"). */
export const serviceImages: Record<string, SiteImage> = {
  "basic-coupe-detail": {
    src: "/images/services/basic-coupe-detail-mercedes-amg-gt-foam-hand-wash.jpg",
    ogSrc: "/images/og/basic-coupe-detail-mercedes-amg-gt-foam-hand-wash-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Mercedes-AMG GT coupe covered in thick snow foam during a Basic Coupe Detail hand wash by DG Detailing in Los Angeles",
    title: "Basic Coupe Detail — Mercedes-AMG GT foam hand wash",
    caption: "Basic Coupe Detail: snow foam pre-wash on a Mercedes-AMG GT before a pH-balanced hand wash.",
    keywords: ["basic coupe detail", "coupe hand wash", "Mercedes-AMG GT detailing", "snow foam pre-wash", "mobile car wash Los Angeles"],
    vehicleType: "Coupe",
    vehicle: "Mercedes-AMG GT",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "basic-sedan-detail": {
    src: "/images/services/basic-sedan-detail-toyota-camry-foam-hand-wash.jpg",
    ogSrc: "/images/og/basic-sedan-detail-toyota-camry-foam-hand-wash-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Toyota Camry sedan covered in snow foam during a Basic Sedan Detail mobile hand wash on a Los Angeles street",
    title: "Basic Sedan Detail — Toyota Camry foam hand wash",
    caption: "Basic Sedan Detail: foam pre-wash on a Toyota Camry, washed curbside with DG Detailing's own water supply.",
    keywords: ["basic sedan detail", "sedan hand wash", "Toyota Camry detailing", "mobile car wash Los Angeles", "foam pre-wash"],
    vehicleType: "Sedan",
    vehicle: "Toyota Camry",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "basic-suv-truck-detail": {
    src: "/images/services/basic-suv-truck-detail-ford-raptor-foam-hand-wash.jpg",
    ogSrc: "/images/og/basic-suv-truck-detail-ford-raptor-foam-hand-wash-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Ford F-150 Raptor pickup truck covered in snow foam during a Basic SUV / Truck Detail hand wash in a Los Angeles driveway",
    title: "Basic SUV / Truck Detail — Ford Raptor foam hand wash",
    caption: "Basic SUV / Truck Detail: snow foam loosens road grime across a full-size Ford Raptor before hand washing.",
    keywords: ["basic truck detail", "SUV hand wash", "pickup truck detailing", "Ford Raptor detailing", "mobile truck wash Los Angeles"],
    vehicleType: "SUV / Truck",
    vehicle: "Ford F-150 Raptor",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "silver-coupe-detail": {
    src: "/images/services/silver-coupe-detail-dodge-challenger-wax-gloss.jpg",
    ogSrc: "/images/og/silver-coupe-detail-dodge-challenger-wax-gloss-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Orange Dodge Challenger coupe with a deep waxed gloss after a Silver Coupe Detail by DG Detailing in Los Angeles",
    title: "Silver Coupe Detail — Dodge Challenger wax finish",
    caption: "Silver Coupe Detail: a Dodge Challenger finished with 3-month wax protection for a deep, glossy shine.",
    keywords: ["silver coupe detail", "coupe wax detail", "Dodge Challenger detailing", "car wax Los Angeles", "paint protection"],
    vehicleType: "Coupe",
    vehicle: "Dodge Challenger",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "silver-sedan-detail": {
    src: "/images/services/silver-sedan-detail-dodge-charger-foam-pre-wash.jpg",
    ogSrc: "/images/og/silver-sedan-detail-dodge-charger-foam-pre-wash-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Dodge Charger sedan in snow foam during the pre-wash stage of a Silver Sedan Detail in Los Angeles",
    title: "Silver Sedan Detail — Dodge Charger pre-wash",
    caption: "Silver Sedan Detail: the Dodge Charger is foamed and hand washed before wax and leather conditioning.",
    keywords: ["silver sedan detail", "sedan wax detail", "Dodge Charger detailing", "leather conditioning", "mobile detailing Los Angeles"],
    vehicleType: "Sedan",
    vehicle: "Dodge Charger",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "silver-suv-truck-detail": {
    src: "/images/services/silver-suv-truck-detail-lexus-suv-gloss-finish.jpg",
    ogSrc: "/images/og/silver-suv-truck-detail-lexus-suv-gloss-finish-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Lexus SUV with a glossy waxed finish after a Silver SUV / Truck Detail, under hexagon detailing lights",
    title: "Silver SUV / Truck Detail — Lexus SUV wax finish",
    caption: "Silver SUV / Truck Detail: a Lexus SUV with a fresh wax finish, inspected under detailing lights.",
    keywords: ["silver SUV detail", "SUV wax detail", "Lexus SUV detailing", "SUV paint protection", "mobile SUV detailing Los Angeles"],
    vehicleType: "SUV / Truck",
    vehicle: "Lexus SUV",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "gold-coupe-detail": {
    src: "/images/services/gold-coupe-detail-mclaren-leather-interior.jpg",
    ogSrc: "/images/og/gold-coupe-detail-mclaren-leather-interior-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Clean tan leather seats, steering wheel and dashboard of a McLaren coupe after a Gold Coupe Detail interior reset",
    title: "Gold Coupe Detail — McLaren leather interior",
    caption: "Gold Coupe Detail: a McLaren cabin after deep cleaning and leather conditioning.",
    keywords: ["gold coupe detail", "full coupe detail", "McLaren interior detailing", "leather seat cleaning", "interior detailing Los Angeles"],
    vehicleType: "Coupe",
    vehicle: "McLaren",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
  "gold-sedan-detail": {
    src: "/images/services/gold-sedan-detail-tesla-model-3-interior.jpg",
    ogSrc: "/images/og/gold-sedan-detail-tesla-model-3-interior-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Spotless black interior, steering wheel and touchscreen of a Tesla Model 3 sedan, the cabin finish of a Gold Sedan Detail",
    title: "Gold Sedan Detail — Tesla Model 3 interior",
    caption: "Gold Sedan Detail: the full interior reset brings sedan cabins like this Tesla Model 3 back to showroom condition.",
    keywords: ["gold sedan detail", "full sedan detail", "Tesla Model 3 interior detailing", "interior shampoo", "interior detailing Los Angeles"],
    vehicleType: "Sedan",
    vehicle: "Tesla Model 3",
    credit: {
      creator: "Mpelas199",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Upgraded_Tesla_Model_3_-_2023_-_Interior.jpg",
      copyright: "No known copyright restrictions",
    },
  },
  "gold-suv-truck-detail": {
    src: "/images/services/gold-suv-truck-detail-range-rover-velar-interior.jpg",
    ogSrc: "/images/og/gold-suv-truck-detail-range-rover-velar-interior-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Clean leather dashboard, steering wheel and center console of a Range Rover Velar SUV, the cabin finish of a Gold SUV / Truck Detail",
    title: "Gold SUV / Truck Detail — Range Rover Velar interior",
    caption: "Gold SUV / Truck Detail: deep interior cleaning and steam sanitizing for large SUV cabins like the Range Rover Velar.",
    keywords: ["gold SUV detail", "full SUV detail", "Range Rover interior detailing", "SUV interior steam clean", "interior detailing Los Angeles"],
    vehicleType: "SUV / Truck",
    vehicle: "Range Rover Velar",
    credit: {
      creator: "160SX",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Range-Rover_Velar_R-Dynamic_interior.jpg",
      copyright: "No known copyright restrictions",
    },
  },
  "ceramic-coating": {
    src: "/images/services/ceramic-coating-mercedes-amg-gt-high-gloss.jpg",
    ogSrc: "/images/og/ceramic-coating-mercedes-amg-gt-high-gloss-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Blue Mercedes-AMG GT coupe with a mirror-like high-gloss paint finish, the result ceramic coating protects in Los Angeles",
    title: "Ceramic Coating — Mercedes-AMG GT high-gloss finish",
    caption: "Ceramic coating locks in a high-gloss finish like this Mercedes-AMG GT's for 5 or 7 years.",
    keywords: ["ceramic coating Los Angeles", "ceramic coating Mercedes-AMG GT", "paint protection coating", "high gloss paint", "mobile ceramic coating"],
    vehicleType: "Coupe",
    vehicle: "Mercedes-AMG GT",
    credit: {
      creator: "DG Detailing",
      license: "All rights reserved",
      copyright: "© DG Detailing. All rights reserved.",
    },
  },
};

/** Keyed by location slug. */
export const locationImages: Record<string, SiteImage> = {
  "los-angeles": {
    src: "/images/locations/mobile-auto-detailing-los-angeles-downtown-skyline.jpg",
    ogSrc: "/images/og/mobile-auto-detailing-los-angeles-downtown-skyline-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Downtown Los Angeles skyline at dusk, the heart of DG Detailing's mobile auto detailing service area",
    title: "Mobile auto detailing in Los Angeles — downtown skyline",
    caption: "Downtown Los Angeles skyline at dusk.",
    keywords: ["mobile auto detailing Los Angeles", "car detailing Los Angeles CA", "downtown Los Angeles", "Los Angeles skyline"],
    place: "Downtown Los Angeles skyline",
    credit: {
      creator: "Carol M. Highsmith",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Skyline_view_of_Los_Angeles,_California_LCCN2013631694.tif",
      copyright: "No known copyright restrictions",
    },
  },
  "santa-monica": {
    src: "/images/locations/mobile-car-detailing-santa-monica-pier.jpg",
    ogSrc: "/images/og/mobile-car-detailing-santa-monica-pier-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Santa Monica Pier and Pacific Park Ferris wheel lit up at sunset, reflected on the beach in Santa Monica, California",
    title: "Mobile car detailing in Santa Monica — Santa Monica Pier",
    caption: "Santa Monica Pier and the Pacific Park Ferris wheel at sunset.",
    keywords: ["mobile car detailing Santa Monica", "car detailing Santa Monica CA", "Santa Monica Pier", "Pacific Park Ferris wheel"],
    place: "Santa Monica Pier",
    credit: {
      creator: "Carol M. Highsmith",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://www.loc.gov/pictures/item/2017656571/",
      copyright: "No known copyright restrictions",
    },
  },
  "venice-beach": {
    src: "/images/locations/mobile-car-detailing-venice-beach-canals.jpg",
    ogSrc: "/images/og/mobile-car-detailing-venice-beach-canals-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Palm trees and homes along the Venice Canals in Venice Beach, Los Angeles, on a sunny day",
    title: "Mobile car detailing in Venice Beach — Venice Canals",
    caption: "The Venice Canals Historic District in Venice Beach.",
    keywords: ["mobile car detailing Venice Beach", "car detailing Venice CA", "Venice Canals", "Venice Beach Los Angeles"],
    place: "Venice Canals",
    credit: {
      creator: "Carol M. Highsmith",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Highsmithvenicecanals.jpg",
      copyright: "No known copyright restrictions",
    },
  },
  "marina-del-rey": {
    src: "/images/locations/mobile-car-detailing-marina-del-rey-harbor-aerial.jpg",
    ogSrc: "/images/og/mobile-car-detailing-marina-del-rey-harbor-aerial-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Aerial view of the Marina del Rey harbor, boat slips and coastline along Santa Monica Bay in Los Angeles",
    title: "Mobile car detailing in Marina del Rey — harbor aerial view",
    caption: "Aerial view of the Marina del Rey harbor on Santa Monica Bay.",
    keywords: ["mobile car detailing Marina del Rey", "car detailing Marina del Rey CA", "Marina del Rey harbor", "coastal paint protection"],
    place: "Marina del Rey harbor",
    credit: {
      creator: "Albaum",
      license: "Public domain",
      licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marina_Del_Rey_Looking_South.jpg",
      copyright: "No known copyright restrictions",
    },
  },
  "playa-vista": {
    src: "/images/locations/mobile-car-detailing-playa-vista-aerial.jpg",
    ogSrc: "/images/og/mobile-car-detailing-playa-vista-aerial-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Aerial view of Playa Vista, Ballona Creek and the Marina del Rey coastline on Los Angeles' Westside",
    title: "Mobile car detailing in Playa Vista — Westside aerial view",
    caption: "Playa Vista, Ballona Creek and the Marina del Rey coastline from the air.",
    keywords: ["mobile car detailing Playa Vista", "car detailing Playa Vista CA", "Playa Vista Los Angeles", "Silicon Beach"],
    place: "Playa Vista and Ballona Creek",
    credit: {
      creator: "Alfred Twu",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marina_Del_Rey,_Playa_Vista,_and_Los_Angeles_International_Airport.jpg",
      copyright: "No known copyright restrictions",
    },
  },
  "culver-city": {
    src: "/images/locations/mobile-car-detailing-culver-city-city-hall.jpg",
    ogSrc: "/images/og/mobile-car-detailing-culver-city-city-hall-og.jpg",
    width: 1600,
    height: 1200,
    alt: "Culver City City Hall's landmark arched entrance on Culver Boulevard in Culver City, California",
    title: "Mobile car detailing in Culver City — Culver City City Hall",
    caption: "Culver City City Hall on Culver Boulevard.",
    keywords: ["mobile car detailing Culver City", "car detailing Culver City CA", "Culver City City Hall", "Culver Boulevard"],
    place: "Culver City City Hall",
    credit: {
      creator: "Northwalker",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Culver_City_City_Hall_.jpg",
      copyright: "No known copyright restrictions",
    },
  },
  "brentwood": {
    src: "/images/locations/luxury-mobile-car-detailing-brentwood-country-mart.jpg",
    ogSrc: "/images/og/luxury-mobile-car-detailing-brentwood-country-mart-og.jpg",
    width: 1600,
    height: 1200,
    alt: "The red barn-style shops of the Brentwood Country Mart on 26th Street in Brentwood, Los Angeles",
    title: "Luxury mobile car detailing in Brentwood — Brentwood Country Mart",
    caption: "The Brentwood Country Mart on 26th Street.",
    keywords: ["luxury mobile car detailing Brentwood", "car detailing Brentwood CA", "Brentwood Country Mart", "Brentwood Los Angeles"],
    place: "Brentwood Country Mart",
    credit: {
      creator: "Mx. Granger",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Brentwood_Country_Mart_4.jpg",
      copyright: "No known copyright restrictions",
    },
  },
};
