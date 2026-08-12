import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Clock, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { services, tierLabels, tierDescriptions } from "@/lib/services";
import type { ServiceTier } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing Services Los Angeles | DG Detailing",
  description:
    "View all DG Detailing service packages — Basic, Silver, and Gold — for coupes, sedans, SUVs & trucks. Starting from $105. Mobile, we come to you across Greater LA.",
  canonical: "/services",
});

const tiers: ServiceTier[] = ["basic", "silver", "gold"];

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "DG Detailing Services",
          description: "Mobile auto detailing packages for Los Angeles drivers",
          url: "https://www.dgautodetailing.com/services",
          itemListElement: [
            ...services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://www.dgautodetailing.com/services/${s.slug}`,
              name: s.name,
            })),
            {
              "@type": "ListItem",
              position: services.length + 1,
              url: "https://www.dgautodetailing.com/services/ceramic-coating",
              name: "Ceramic Coating",
            },
          ],
        }}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Hero */}
        <section className="py-16 bg-[#0A0A0A] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Mobile Auto Detailing Services{" "}
              <span style={{ color: "#00B8E6" }}>in Los Angeles</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose from three professional tiers — Basic, Silver, or Gold — for coupes, sedans, SUVs & trucks.
              Every detail is hand-done at your location across Greater LA.
            </p>
          </div>
        </section>

        {/* Services by Tier */}
        {tiers.map((tier) => {
          const tierServices = services.filter((s) => s.tier === tier);
          return (
            <section
              key={tier}
              className={`py-16 ${tier === "silver" ? "bg-[#161616]" : "bg-[#0A0A0A]"}`}
              aria-label={`${tierLabels[tier]} tier services`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {tierLabels[tier]} Tier
                  </h2>
                  <p className="text-gray-400">{tierDescriptions[tier]}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierServices.map((service) => (
                    <ServiceCard key={service.slug} service={service} showDetails />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Ceramic Coating */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Paint protection services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Paint Protection</h2>
              <p className="text-gray-400">Multi-year ceramic coating protection, mobile across the LA Westside.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#00B8E6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#00B8E6]/5">
                <div className="bg-gradient-to-br from-sky-900/60 to-cyan-950 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-700/80 text-cyan-100">
                      paint protection
                    </span>
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        <DollarSign size={11} />
                        From $750
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        4–6 hrs
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">Ceramic Coating</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                    Multi-year paint protection, applied at your driveway. Deeper gloss, easier washes, real UV and
                    contamination defense — choose a 5-year or 7-year coating, mobile across the LA Westside.
                  </p>
                  <Link
                    href="/services/ceramic-coating"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3 mt-auto"
                    style={{ color: "#00B8E6" }}
                    aria-label="View Ceramic Coating details and pricing"
                  >
                    View Details
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Comparison note */}
        <section className="py-16 bg-[#161616] border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Not Sure Which Package?</h2>
            <p className="text-gray-400 mb-6">
              Call us at{" "}
              <a href="tel:+13106924495" className="font-semibold" style={{ color: "#00B8E6" }}>
                (310) 692-4495
              </a>{" "}
              and we&apos;ll help you choose based on your vehicle&apos;s condition and your goals. Most first-time clients
              start with Silver or Gold to reset their vehicle, then switch to Basic for monthly maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-black glow-blue"
                style={{ backgroundColor: "#00B8E6" }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+13106924495"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Call (310) 692-4495
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
