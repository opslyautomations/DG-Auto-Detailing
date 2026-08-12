import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, ExternalLink } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import GHLForm from "@/components/GHLForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/lib/locations";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Quote — Mobile Auto Detailing Los Angeles | DG Detailing",
  description:
    "Book your mobile auto detail in Los Angeles. Call (310) 692-4495 or fill out our quick form. We serve LA, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd schema={organizationSchema} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Contact", url: "https://www.dgautodetailing.com/contact" },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        {/* Hero */}
        <section
          className="py-16 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="Contact hero"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Get a Free Quote —{" "}
              <span style={{ color: "#00B8E6" }}>Mobile Auto Detailing</span>{" "}
              in Los Angeles
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Fill out the quick form or call us directly. We&apos;ll confirm your appointment and come
              to your location with everything we need.
            </p>
          </div>
        </section>

        {/* Two-Column Layout */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Contact information and booking form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Info */}
              <div>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
                    >
                      <Phone size={18} style={{ color: "#00B8E6" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">Phone</p>
                      <a
                        href="tel:+13106924495"
                        className="text-xl font-bold text-white hover:text-[#00B8E6] transition-colors"
                      >
                        (310) 692-4495
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">Call or text anytime during business hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
                    >
                      <Mail size={18} style={{ color: "#00B8E6" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">Email</p>
                      <a
                        href="mailto:diego@dgautodetailing.com"
                        className="text-base font-semibold text-white hover:text-[#00B8E6] transition-colors"
                      >
                        diego@dgautodetailing.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
                    >
                      <Clock size={18} style={{ color: "#00B8E6" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">Hours</p>
                      <p className="text-white font-medium">Mon–Sat: 7:00 AM – 7:00 PM</p>
                      <p className="text-white font-medium">Sun: 8:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
                    >
                      <MapPin size={18} style={{ color: "#00B8E6" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                        Service Area
                      </p>
                      <p className="text-white font-medium">Greater Los Angeles, CA</p>
                      <p className="text-sm text-gray-400 mt-1">
                        We come to you — no storefront. Home, office, or condo parking.
                      </p>
                    </div>
                  </div>

                  {/* Google Business */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
                    >
                      <ExternalLink size={18} style={{ color: "#00B8E6" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Google Business Profile
                      </p>
                      <a
                        href="https://share.google/FpW0qKoCtS0gZTKRu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/30 transition-colors"
                      >
                        <ExternalLink size={12} />
                        View on Google
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service cities */}
                <div className="mt-10">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                    Cities We Serve
                  </p>
                  <div className="flex flex-wrap gap-2">
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

                {/* Static service area map placeholder */}
                <div
                  className="mt-8 rounded-2xl border border-white/10 h-48 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,184,230,0.03)" }}
                  aria-label="DG Detailing service area map — Greater Los Angeles"
                >
                  <div className="text-center">
                    <MapPin size={24} style={{ color: "#00B8E6" }} className="mx-auto mb-2" />
                    <p className="text-xs text-gray-500">Service Area Map</p>
                    <p className="text-xs text-gray-600 mt-0.5">Greater Los Angeles, CA</p>
                  </div>
                </div>
              </div>

              {/* Right: GHL Form */}
              <div>
                <div className="mb-4">
                  <p className="text-base font-bold text-white">Book Your Mobile Detail</p>
                  <p className="text-sm text-gray-500">Fill out the form and we&apos;ll confirm within hours.</p>
                </div>
                <GHLForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
