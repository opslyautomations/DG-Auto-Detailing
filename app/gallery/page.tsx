import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Before & After Detail Work | DG Detailing Los Angeles",
  description:
    "View before-and-after photos from DG Detailing's mobile auto detailing work across Los Angeles, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood.",
  canonical: "/gallery",
});

// TODO: Replace placeholder images with real photos from Diego's library.
// Add entries to /lib/gallery.ts when photos are ready (see README for instructions).
const galleryItems = [
  { label: "Gold Exterior — Range Rover, Brentwood", category: "Exterior", alt: "DG Detailing gold exterior detail on Range Rover in Brentwood" },
  { label: "Gold Interior — Tesla Model S, Playa Vista", category: "Interior", alt: "DG Detailing gold interior deep clean on Tesla in Playa Vista" },
  { label: "Paint Correction — BMW 5 Series, Santa Monica", category: "Paint Correction", alt: "DG Detailing paint correction on BMW in Santa Monica" },
  { label: "Ceramic Coating — Porsche, Brentwood", category: "Ceramic Coating", alt: "DG Detailing ceramic coating application on Porsche in Brentwood" },
  { label: "Silver Exterior — Honda Accord, Culver City", category: "Exterior", alt: "DG Detailing silver detail exterior on Honda in Culver City" },
  { label: "Gold Interior — Ford F-150, Marina Del Rey", category: "Interior", alt: "DG Detailing gold interior detail on F-150 truck in Marina Del Rey" },
  { label: "Paint Correction — Mercedes GLE, Los Angeles", category: "Paint Correction", alt: "DG Detailing paint correction on Mercedes in Los Angeles" },
  { label: "Gold Exterior — Jeep Wrangler, Venice Beach", category: "Exterior", alt: "DG Detailing gold detail exterior on Jeep in Venice Beach" },
  { label: "Basic Detail — Hyundai Tucson, Culver City", category: "Exterior", alt: "DG Detailing basic hand wash exterior on Hyundai in Culver City" },
  { label: "Gold Interior — Chevrolet Suburban, Brentwood", category: "Interior", alt: "DG Detailing gold interior shampoo on Chevrolet SUV in Brentwood" },
  { label: "Silver Detail — Toyota Camry, Venice Beach", category: "Exterior", alt: "DG Detailing silver detail on Toyota Camry in Venice Beach" },
  { label: "Ceramic Coating — Audi A7, Santa Monica", category: "Ceramic Coating", alt: "DG Detailing ceramic coating on Audi A7 in Santa Monica" },
];

const filterCategories = ["All", "Exterior", "Interior", "Paint Correction", "Ceramic Coating"];

export default function GalleryPage() {
  return (
    <>
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Gallery", url: "https://www.dgautodetailing.com/gallery" },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Gallery" }]} />

        {/* Hero */}
        <section
          className="py-16 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="Gallery hero"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Our Work — Before & After{" "}
              <span style={{ color: "#00B8E6" }}>Detail Work</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Photos from real details across Los Angeles, Marina Del Rey, Santa Monica, Culver City,
              Venice Beach, Playa Vista, and Brentwood.
            </p>
          </div>
        </section>

        {/* Filter tabs (visual only — no JS required for SSG) */}
        <section className="py-6 bg-[#161616] border-b border-white/10" aria-label="Gallery filter categories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {filterCategories.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    i === 0
                      ? "text-black"
                      : "border border-white/10 text-gray-400"
                  }`}
                  style={i === 0 ? { backgroundColor: "#00B8E6" } : undefined}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Gallery photos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryItems.map((item, i) => (
                <div key={i} className="break-inside-avoid">
                  <PlaceholderImage
                    width={600}
                    height={i % 3 === 0 ? 500 : 400}
                    alt={item.alt}
                    label={item.label}
                    className={`w-full ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[3/2]"}`}
                  />
                  <div className="mt-1.5 flex items-center justify-between px-1">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "rgba(0,184,230,0.12)", color: "#00B8E6" }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="Like What You See?"
          subheading="Your car could look exactly like this. Book your detail today."
        />
      </div>
    </>
  );
}
