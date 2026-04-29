import type { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/lib/reviews";
import { reviewsPageSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Customer Reviews | DG Detailing — Mobile Auto Detailing Los Angeles",
  description:
    "Read verified client reviews for DG Detailing's mobile auto detailing service across Los Angeles, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood.",
  canonical: "/reviews",
});

export default function ReviewsPage() {
  const cities = [...new Set(reviews.map((r) => r.city))].sort();

  return (
    <>
      <SchemaJsonLd
        schema={reviewsPageSchema(
          reviews.map((r) => ({ author: r.author, rating: r.rating, text: r.text }))
        )}
      />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Reviews", url: "https://www.dgautodetailing.com/reviews" },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Reviews" }]} />

        {/* Hero */}
        <section
          className="py-16 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="Reviews hero"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Aggregate rating */}
            <div className="flex items-center justify-center gap-1 mb-4" aria-label="5 star average rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-5xl font-black text-white mb-2">5.0</p>
            <p className="text-gray-400 mb-6">Based on {reviews.length}+ verified reviews across Greater LA</p>

            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What LA Drivers Say About{" "}
              <span style={{ color: "#00B8E6" }}>DG Detailing</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Real reviews from real clients across Los Angeles, Marina Del Rey, Santa Monica, Culver City,
              Venice Beach, Playa Vista, and Brentwood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://share.google/FpW0qKoCtS0gZTKRu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
              >
                <ExternalLink size={14} />
                Leave a Google Review
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-black text-sm glow-blue"
                style={{ backgroundColor: "#00B8E6" }}
              >
                Book Your Detail
              </Link>
            </div>
          </div>
        </section>

        {/* City filter pills (static display, no JS filter) */}
        <section className="py-6 bg-[#161616] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-black" style={{ backgroundColor: "#00B8E6" }}>
                All Cities
              </span>
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/10 text-gray-400"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="All customer reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* Google CTA */}
        <section className="py-12 bg-[#161616] border-t border-white/10 text-center">
          <div className="max-w-xl mx-auto px-4">
            <p className="text-white font-bold text-lg mb-2">Had a great experience?</p>
            <p className="text-gray-400 text-sm mb-6">
              Share your review on Google — it helps other LA drivers find professional mobile detailing.
            </p>
            <a
              href="https://share.google/FpW0qKoCtS0gZTKRu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={16} />
              Write a Review on Google
            </a>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
