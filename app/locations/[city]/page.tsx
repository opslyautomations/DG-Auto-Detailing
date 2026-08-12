import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import GHLForm from "@/components/GHLForm";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { locations, getLocationBySlug } from "@/lib/locations";
import { services } from "@/lib/services";
import { locationSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    canonical: `/locations/${slug}`,
    keywords: [
      `mobile auto detailing ${location.city}`,
      `car detailing ${location.city} CA`,
      `mobile car wash ${location.city}`,
      "mobile auto detailing Los Angeles",
    ],
  });
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearbyLocations = location.nearbyAreas
    .map((city) => locations.find((l) => l.city === city))
    .filter(Boolean);

  return (
    <>
      <SchemaJsonLd schema={locationSchema(location.city, location.intro)} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Service Areas", url: "https://www.dgautodetailing.com/locations" },
          { name: location.city, url: `https://www.dgautodetailing.com/locations/${location.slug}` },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs
          items={[
            { label: "Service Areas", href: "/locations" },
            { label: location.city },
          ]}
        />

        {/* Hero */}
        <section
          className="py-16 lg:py-24 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label={`${location.city} hero`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} style={{ color: "#00B8E6" }} />
              <span className="text-sm text-gray-400">{location.city}, {location.state}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Mobile Auto Detailing in{" "}
              <span style={{ color: "#00B8E6" }}>{location.city}</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {location.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-black glow-blue"
                style={{ backgroundColor: "#00B8E6" }}
              >
                Book in {location.city}
              </a>
              <a
                href="tel:+13106924495"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Call (310) 692-4495
              </a>
            </div>
          </div>
        </section>

        {/* Why Us in This City */}
        <section className="py-16 bg-[#161616]" aria-label={`Why ${location.city} clients choose DG Detailing`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
              Why {location.city} Drivers Choose DG Detailing
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">{location.whyUs}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                "6+ years serving Greater Los Angeles",
                "1,500+ vehicles professionally detailed",
                "Hand-wash only — no automated brushes",
                "We bring our own water and power equipment",
                "pH-balanced, paint-safe products only",
                "100% satisfaction guarantee",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} style={{ color: "#00B8E6" }} className="mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Available services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              Services Available in {location.city}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        {nearbyLocations.length > 0 && (
          <section className="py-12 bg-[#161616]" aria-label="Nearby service areas">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-black text-white mb-4">
                Also Serving Nearby Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyLocations.map((loc) => loc && (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/40 transition-colors"
                  >
                    {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book Form */}
        <section id="book" className="py-16 bg-[#0A0A0A]" aria-label="Book detailing in this area">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Book Mobile Detailing in {location.city}
              </h2>
              <p className="text-gray-400">
                We&apos;ll confirm your appointment and come to your location with everything we need.
              </p>
            </div>
            <GHLForm />
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
