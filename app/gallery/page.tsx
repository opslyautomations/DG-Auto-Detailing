import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { galleryImages, beforeAfterPairs } from "@/lib/gallery";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Before & After Detail Work | DG Detailing Los Angeles",
  description:
    "View real before-and-after photos from DG Detailing's mobile auto detailing work across Los Angeles, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood.",
  canonical: "/gallery",
});

const filterCategories = ["All", "Exterior", "Interior"];

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

        {/* Before & After */}
        <section className="py-16 bg-[#0A0A0A] border-b border-white/10" aria-label="Before and after">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">Before &amp; After</h2>
            {beforeAfterPairs.map((pair) => (
              <div key={pair.label} className="grid sm:grid-cols-2 gap-4">
                {[pair.before, pair.after].map((img) => (
                  <div key={img.src} className="rounded-2xl overflow-hidden border border-white/10">
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-center text-sm font-semibold text-white py-3 bg-[#161616]">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Gallery photos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((item) => (
                <div key={item.src} className="break-inside-avoid">
                  <div
                    className="relative w-full rounded-2xl overflow-hidden border border-white/10"
                    style={{ aspectRatio: `${item.width} / ${item.height}` }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between px-1">
                    <p className="text-xs text-gray-500">{item.caption}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full capitalize"
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
