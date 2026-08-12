import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, DollarSign, CheckCircle, ChevronDown } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import GHLForm from "@/components/GHLForm";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services, getServiceBySlug } from "@/lib/services";
import { locations } from "@/lib/locations";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Los Angeles | DG Detailing`,
    description: `${service.name} starting at $${service.priceFrom}. ${service.shortDescription} Mobile service across LA. Call (310) 692-4495.`,
    canonical: `/services/${slug}`,
    keywords: [
      `${service.name} Los Angeles`,
      `mobile ${service.vehicleClass} detailing LA`,
      `${service.tier} auto detail Los Angeles`,
      "mobile auto detailing Los Angeles",
    ],
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean);

  return (
    <>
      <SchemaJsonLd
        schema={serviceSchema({
          name: service.name,
          description: service.shortDescription,
          price: service.priceFrom.toString(),
          duration: service.duration,
          url: `https://www.dgautodetailing.com/services/${service.slug}`,
        })}
      />
      <SchemaJsonLd schema={faqSchema(service.faqs)} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Services", url: "https://www.dgautodetailing.com/services" },
          { name: service.name, url: `https://www.dgautodetailing.com/services/${service.slug}` },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
        />

        {/* Hero */}
        <section
          className="py-16 lg:py-24 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label={`${service.name} hero`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full border"
                  style={{ color: "#00B8E6", borderColor: "rgba(0,184,230,0.3)", backgroundColor: "rgba(0,184,230,0.08)" }}
                >
                  {service.tier} tier
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                  {service.name}{" "}
                  <span style={{ color: "#00B8E6" }}>in Los Angeles</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6">{service.shortDescription}</p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} style={{ color: "#00B8E6" }} />
                    <div>
                      <p className="text-xs text-gray-500">Starting at</p>
                      <p className="text-2xl font-black text-white">${service.priceFrom}</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" aria-hidden />
                  <div className="flex items-center gap-2">
                    <Clock size={18} style={{ color: "#00B8E6" }} />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-lg font-bold text-white">{service.duration}</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#book"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black glow-blue transition-all"
                  style={{ backgroundColor: "#00B8E6" }}
                >
                  Book This Service
                </a>
              </div>

              <PlaceholderImage
                width={600}
                height={400}
                alt={`${service.name} — DG Detailing Los Angeles`}
                label={`${service.name} — coming soon`}
                className="aspect-[3/2]"
              />
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-[#161616]" aria-label="Service inclusions">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              What&apos;s Included
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: "#00B8E6" }} className="mt-0.5 shrink-0" />
                  <span className="text-gray-300">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 Key Benefits */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Service benefits">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              Why Choose the {service.name}?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#161616] border border-white/10 p-5"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-black"
                    style={{ backgroundColor: "rgba(0,184,230,0.12)", color: "#00B8E6" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-[#161616]" aria-label="Service areas">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-6">
              Service Areas We Cover
            </h2>
            <div className="flex flex-wrap gap-3">
              {locations.map((loc) => (
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

        {/* FAQs */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-[#161616] overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="font-semibold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-[#161616]" aria-label="Related services">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-black text-white mb-6">Related Services</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedServices.map((s) => s && (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-2xl border border-white/10 hover:border-[#00B8E6]/40 bg-[#0A0A0A] p-4 transition-all group"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#00B8E6" }}>
                      {s.tier}
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#00B8E6] transition-colors">
                      {s.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">From ${s.priceFrom}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book Form */}
        <section id="book" className="py-16 bg-[#0A0A0A]" aria-label="Book this service">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Ready to Book the {service.name}?
              </h2>
              <p className="text-gray-400">
                Fill out the form below and we&apos;ll confirm your appointment within hours.
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
