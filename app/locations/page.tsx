import type { Metadata } from "next";
import LocationCard from "@/components/LocationCard";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing Service Areas | Greater Los Angeles | DG Detailing",
  description:
    "DG Detailing serves Los Angeles, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood. Mobile — we come to you. Call (310) 855-4277.",
  canonical: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <SchemaJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "DG Detailing Service Areas",
          url: "https://www.dgautodetailing.com/locations",
          itemListElement: locations.map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.dgautodetailing.com/locations/${l.slug}`,
            name: l.city,
          })),
        }}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Service Areas" }]} />

        <section className="py-16 bg-[#0A0A0A] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Mobile Detailing Across{" "}
              <span style={{ color: "#00B8E6" }}>Greater Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              DG Detailing brings premium mobile auto detailing directly to your location.
              No drop-off. No waiting. We serve 7 cities across the LA metro.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((loc) => (
                <LocationCard key={loc.slug} location={loc} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
