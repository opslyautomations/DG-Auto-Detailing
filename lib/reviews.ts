export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  text: string;
  service?: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    id: "1",
    author: "Marcus T.",
    city: "Brentwood",
    rating: 5,
    text: "Had the Gold detail done on my Range Rover and it looked better than the day I drove it off the lot. Diego showed up on time, set up in my driveway, and worked carefully for almost 6 hours. The clay bar and sealant made a massive difference. Will absolutely keep using them.",
    service: "Gold SUV / Truck Detail",
    featured: true,
  },
  {
    id: "2",
    author: "Sarah L.",
    city: "Santa Monica",
    rating: 5,
    text: "Living near the beach destroys cars. I've been using DG monthly for almost a year and my paint has never looked better. Hand wash, no scratches, fair pricing. Highly recommend the maintenance plan.",
    service: "Silver Sedan Detail",
    featured: true,
  },
  {
    id: "3",
    author: "Jordan K.",
    city: "Marina Del Rey",
    rating: 5,
    text: "Booked a Silver detail for my BMW and was blown away. Interior leather looks brand new, paint feels like glass. Diego is a true professional and clearly takes pride in his work.",
    service: "Silver Coupe Detail",
    featured: true,
  },
  {
    id: "4",
    author: "Priya N.",
    city: "Playa Vista",
    rating: 5,
    text: "Worked from home while my car got detailed in the garage downstairs. Came back to pick it up at lunch and it was unreal. The interior smelled fresh, hard surfaces sanitized, carpets shampooed. Worth every dollar.",
    service: "Gold Sedan Detail",
  },
  {
    id: "5",
    author: "David R.",
    city: "Culver City",
    rating: 5,
    text: "I commute on the 405 every day so my car collects brake dust and tar like a magnet. DG Detailing did a Gold package and the transformation was night and day. Clay bar made my paint feel like silk. Booked for next month already.",
    service: "Gold Sedan Detail",
  },
  {
    id: "6",
    author: "Emma S.",
    city: "Venice Beach",
    rating: 5,
    text: "Finally found a detailer who actually understands what beach air does to cars. The Silver package with wax has kept my paint looking protected for months. Diego's team is professional, punctual, and thorough.",
    service: "Silver Sedan Detail",
  },
  {
    id: "7",
    author: "Carlos M.",
    city: "Los Angeles",
    rating: 5,
    text: "I've tried three other mobile detailers in LA and none compare. DG Detailing is the real deal — no rushing, no shortcuts, no mystery products. My car looked showroom-new when they left. Signed up for the monthly plan.",
    service: "Basic Sedan Detail",
  },
  {
    id: "8",
    author: "Rachel B.",
    city: "Brentwood",
    rating: 5,
    text: "I drive a Porsche and I'm extremely particular about who touches my car. Diego earned my trust on the first appointment. Showed up with all the right products, worked carefully, and the results were flawless. This is the only detailer I'll use.",
    service: "Gold Coupe Detail",
  },
  {
    id: "9",
    author: "Tyler W.",
    city: "Santa Monica",
    rating: 5,
    text: "Booked the Gold package for my Tesla and couldn't be happier. Steam cleaned the interior, carpet looks fresh, paint is protected. Diego communicated throughout the whole process. Five stars, no question.",
    service: "Gold Sedan Detail",
  },
  {
    id: "10",
    author: "Mia H.",
    city: "Marina Del Rey",
    rating: 5,
    text: "My car sits outside near the marina so it gets hammered by salt air. The Silver package with wax makes such a difference. I can actually see it repel water now. Great service, great price, great guy.",
    service: "Silver Coupe Detail",
  },
  {
    id: "11",
    author: "Kevin J.",
    city: "Playa Vista",
    rating: 5,
    text: "The Gold detail is worth every penny. Six hours of careful, professional work. My SUV looks better than it has in years. Booked while I worked from my condo — couldn't have been easier.",
    service: "Gold SUV / Truck Detail",
  },
];

export function getFeaturedReviews(): Review[] {
  return reviews.filter((r) => r.featured);
}
