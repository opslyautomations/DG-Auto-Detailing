import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import GHLForm from "@/components/GHLForm";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { specialsSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/lib/locations";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Specials & Offers | 15% Off First Detail | DG Detailing Los Angeles",
  description:
    "New client special: 15% off your first Silver or Gold mobile auto detail. No code needed. Serving Los Angeles, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood.",
  canonical: "/specials",
});

export default function SpecialsPage() {
  return (
    <>
      <SchemaJsonLd schema={specialsSchema()} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Specials", url: "https://www.dgautodetailing.com/specials" },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Specials" }]} />

        {/* Hero */}
        <section
          className="py-16 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="Specials hero"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Current Specials & Offers from{" "}
              <span style={{ color: "#00B8E6" }}>DG Detailing</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Limited-time offers for new and returning clients across Greater Los Angeles.
            </p>
          </div>
        </section>

        {/* Featured Offer Card */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="New client special offer">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl border p-8 sm:p-12 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,184,230,0.08) 0%, rgba(0,150,199,0.04) 100%)",
                borderColor: "rgba(0,184,230,0.3)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,184,230,0.15) 0%, transparent 70%)" }}
                aria-hidden
              />

              <div className="relative">
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  New Client Special — 15% Off Your First Detail
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Book any <strong className="text-white">Silver or Gold package</strong> as a first-time client
                  and get <strong style={{ color: "#00B8E6" }}>15% off</strong>. No code needed — discount is
                  applied at booking.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  Mobile detailing across LA, Marina Del Rey, Santa Monica, Culver City, Venice Beach,
                  Playa Vista, and Brentwood.
                </p>

                {/* Eligible services */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">
                    Eligible Packages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Silver Coupe Detail",
                      "Silver Sedan Detail",
                      "Silver SUV/Truck Detail",
                      "Gold Coupe Detail",
                      "Gold Sedan Detail",
                      "Gold SUV/Truck Detail",
                    ].map((pkg) => (
                      <span
                        key={pkg}
                        className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-gray-300"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-black glow-blue"
                    style={{ backgroundColor: "#00B8E6" }}
                  >
                    Claim This Offer
                  </a>
                  <a
                    href="tel:+13106924495"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Call (310) 692-4495
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plan Callout */}
        <section className="py-12 bg-[#161616]" aria-label="Monthly maintenance plan">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl font-black text-white mb-3">
              Looking for Long-Term Savings?
            </h2>
            <p className="text-gray-400 mb-6">
              Ask about our monthly maintenance plan — consistent, professional detailing at exceptional value.
              The best way to protect your car year-round.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
            >
              Ask About Maintenance Plan
            </Link>
          </div>
        </section>

        {/* Service Area pills */}
        <section className="py-8 bg-[#0A0A0A] border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Offer valid in all service areas
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="px-3 py-1.5 rounded-full text-xs border border-white/10 text-gray-400 hover:text-[#00B8E6] hover:border-[#00B8E6]/30 transition-colors"
                >
                  {loc.city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="book" className="py-16 bg-[#161616]" aria-label="Book special offer">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Book Your First Detail — 15% Off
              </h2>
              <p className="text-gray-400">
                Select a Silver or Gold package below. Discount applied automatically.
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
