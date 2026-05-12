import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ExternalLink } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About DG Detailing — Los Angeles's Trusted Mobile Auto Detailer",
  description:
    "6+ years, 1,500+ vehicles detailed. DG Detailing was built to raise the standard of mobile auto detailing in Los Angeles. Learn our story and process.",
  canonical: "/about",
});

const processSteps = [
  {
    step: "01",
    title: "Book Online",
    desc: "Choose your package and schedule in under 60 seconds. We confirm your appointment within hours.",
  },
  {
    step: "02",
    title: "We Come to You",
    desc: "We arrive at your home, office, or condo lot with all equipment — water, power, and every product we need.",
  },
  {
    step: "03",
    title: "Full Hand-Detail",
    desc: "Every step is performed by hand using pH-balanced, paint-safe products and professional microfiber tools.",
  },
  {
    step: "04",
    title: "Walkthrough & Care Tips",
    desc: "We walk you through the results, explain what was done, and give maintenance tips to extend your detail.",
  },
];

const standards = [
  {
    title: "pH-balanced products",
    desc: "We only use pH-neutral shampoos and professionally formulated detailing products — nothing that strips your paint.",
  },
  {
    title: "Hand-wash only",
    desc: "No automated brushes, no tunnel washes. Every surface is cleaned by hand with proper technique.",
  },
  {
    title: "Insured & professional",
    desc: "DG Detailing is fully insured. You can trust us to work on any vehicle — from daily drivers to exotic cars.",
  },
  {
    title: "100% satisfaction guarantee",
    desc: "If you're not satisfied with the results, we make it right. That's our commitment on every detail.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd schema={organizationSchema} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "About", url: "https://www.dgautodetailing.com/about" },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "About" }]} />

        {/* Hero */}
        <section
          className="py-16 lg:py-24 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="About DG Detailing"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                  About DG Detailing —{" "}
                  <span style={{ color: "#00B8E6" }}>
                    Los Angeles&apos;s Trusted Mobile Auto Detailing Service
                  </span>
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  DG Detailing was founded with one clear mission: to raise the standard of mobile car detailing
                  in Los Angeles and surrounding areas. After witnessing how traditional car washes rushed vehicles
                  through inefficient systems using harsh, sub-par products, we knew vehicle owners deserved a
                  safer, more professional solution.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  For over 6 years, DG Detailing has been Los Angeles&apos;s trusted auto detailer, restoring and
                  protecting more than 1,500 vehicles across LA, Marina Del Rey, Playa Del Rey, and surrounding
                  communities.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  As a premier mobile detailing company, we bring high-level auto detailing directly to your home
                  or workplace — no drop-offs, no waiting rooms, no wasted time. Our services include exterior
                  detailing, interior deep cleaning, paint enhancement, and long-term ceramic coating solutions
                  designed to keep your vehicle protected and looking its best year-round.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-black glow-blue"
                    style={{ backgroundColor: "#00B8E6" }}
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="https://share.google/FpW0qKoCtS0gZTKRu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Google Business Profile
                  </a>
                </div>
              </div>

              {/* Diego's portrait */}
              <div className="max-w-sm mx-auto">
                <Image
                  src="/images/about/diego-portrait.jpg"
                  alt="Diego — Owner of DG Detailing, mobile auto detailing Los Angeles"
                  width={1024}
                  height={1536}
                  className="rounded-2xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plan Callout */}
        <section className="py-12 bg-[#161616] border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 border"
              style={{ backgroundColor: "rgba(0,184,230,0.05)", borderColor: "rgba(0,184,230,0.2)" }}
            >
              <h2 className="text-xl font-black text-white mb-3">
                The Monthly Maintenance Detailing Plan
              </h2>
              <p className="text-gray-300 leading-relaxed">
                What truly sets DG Detailing apart is our structured monthly maintenance detailing plan. Rather than
                subjecting your vehicle to damaging automated washes, our maintenance clients enjoy consistent,
                professional mobile car detailing at exceptional value. Your car is always protected, always clean,
                and always looked after by the same professional.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold hover:underline"
                style={{ color: "#00B8E6" }}
              >
                Ask about our maintenance plan →
              </Link>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Our detailing process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 text-center">
              Our Process
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl bg-[#161616] border border-white/10 p-6"
                >
                  <div
                    className="text-4xl font-black mb-3"
                    style={{ color: "rgba(0,184,230,0.2)" }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Standards */}
        <section className="py-16 bg-[#161616]" aria-label="Our standards">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 text-center">
              Our Standards
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard) => (
                <div
                  key={standard.title}
                  className="rounded-2xl bg-[#0A0A0A] border border-white/10 p-6"
                >
                  <div className="mb-3">
                    <CheckCircle size={24} style={{ color: "#00B8E6" }} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{standard.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{standard.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          heading="Ready to experience the difference?"
          subheading="Join 1,500+ LA drivers who trust DG Detailing with their vehicles."
        />
      </div>
    </>
  );
}
