import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CheckCircle,
  ChevronDown,
  DollarSign,
  Repeat,
  Sparkles,
} from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import GHLForm from "@/components/GHLForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  maintenanceBenefits,
  maintenanceCities,
  maintenanceInclusions,
  maintenancePackages,
  sharedMaintenanceFaqs,
  type MaintenancePackage,
} from "@/lib/maintenance";
import { serviceImages } from "@/lib/siteImages";
import { breadcrumbSchema, faqSchema, imageObjectSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const BASE_URL = "https://www.dgautodetailing.com";
const BLUE = "#00B8E6";

export function maintenanceMetadata(pkg: MaintenancePackage): Metadata {
  const image = serviceImages[pkg.slug];
  return buildMetadata({
    title: pkg.metaTitle,
    description: pkg.metaDescription,
    canonical: `/services/${pkg.slug}`,
    ogImage: image.ogSrc,
    ogImageAlt: image.alt,
    keywords: pkg.keywords,
  });
}

export default function MaintenancePage({ pkg }: { pkg: MaintenancePackage }) {
  const image = serviceImages[pkg.slug];
  const pageUrl = `${BASE_URL}/services/${pkg.slug}`;
  const faqs = [...pkg.faqs, ...sharedMaintenanceFaqs];
  const otherPackages = maintenancePackages.filter((p) => p.slug !== pkg.slug);
  const vehicleLower = pkg.vehicle.toLowerCase();

  const routines = [
    { icon: CalendarCheck, label: "Weekly", tag: "Best for daily drivers", body: pkg.routines.weekly },
    { icon: CalendarDays, label: "Bi-Weekly", tag: "Most popular", body: pkg.routines.biweekly, featured: true },
    { icon: CalendarClock, label: "Monthly", tag: "Best for garaged vehicles", body: pkg.routines.monthly },
  ];

  return (
    <>
      <SchemaJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: pkg.name,
          serviceType: "Recurring mobile car cleaning",
          description: pkg.metaDescription,
          url: pageUrl,
          image: `${BASE_URL}${image.src}`,
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: maintenanceCities.map((c) => ({ "@type": "City", name: `${c.city}, CA` })),
          offers: ["Weekly", "Bi-weekly", "Monthly"].map((frequency) => ({
            "@type": "Offer",
            name: `${frequency} ${pkg.name}`,
            price: pkg.pricePerVisit.toString(),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: pkg.pricePerVisit.toString(),
              priceCurrency: "USD",
              unitText: "per visit",
            },
          })),
        }}
      />
      <SchemaJsonLd schema={imageObjectSchema(image, pageUrl)} />
      <SchemaJsonLd schema={faqSchema(faqs)} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Services", url: `${BASE_URL}/services` },
          { name: pkg.name, url: pageUrl },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: pkg.name }]} />

        {/* Hero */}
        <section
          className="py-10 sm:py-16 lg:py-24 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label={`${pkg.name} hero`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full border"
                  style={{ color: BLUE, borderColor: "rgba(0,184,230,0.3)", backgroundColor: "rgba(0,184,230,0.08)" }}
                >
                  <Repeat size={12} aria-hidden /> Maintenance Package
                </span>
                <h1 className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-tight font-black text-white mb-4">
                  {pkg.name}: <span style={{ color: BLUE }}>Recurring Car Cleaning in Los Angeles</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6">{pkg.heroIntro}</p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} style={{ color: BLUE }} aria-hidden />
                    <div>
                      <p className="text-xs text-gray-500">Per visit</p>
                      <p className="text-2xl font-black text-white">${pkg.pricePerVisit}</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden />
                  <ul className="flex flex-wrap gap-2" aria-label="Available routines">
                    {["Weekly", "Bi-Weekly", "Monthly"].map((f) => (
                      <li
                        key={f}
                        className="px-3 py-1 rounded-full text-xs font-semibold border border-white/15 text-gray-300"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#benefits"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-black glow-blue transition-all"
                    style={{ backgroundColor: BLUE }}
                  >
                    Read About the Benefits of Maintenance Below
                    <ArrowDown size={16} aria-hidden />
                  </a>
                  <a
                    href="#book"
                    data-open-booking
                    className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Skip to Booking
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  fill
                  priority
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Start with Silver or Gold */}
        <section className="py-10 sm:py-14 bg-[#161616]" aria-label="How most clients start">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 text-center">
              How Most Clients Start: Reset First, Then Maintain
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-8">
              Most of our clients book a Silver or Gold detail first to fully reset their {vehicleLower} and lock
              in wax or sealant protection. Then they schedule recurring maintenance cleans to keep it that clean
              from then on.
            </p>
            <ol className="grid sm:grid-cols-2 gap-4">
              <li className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
                  Step 1 · The reset
                </p>
                <p className="text-white font-semibold mb-2">Book a Silver or Gold detail</p>
                <p className="text-sm text-gray-400 mb-4">
                  A deep clean inside and out, plus 3-month wax (Silver) or clay bar and 6-month sealant (Gold),
                  so your maintenance visits start from a protected, like-new finish.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/services/${pkg.resetSlugs.silver}`}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/40 transition-colors"
                  >
                    Silver {pkg.vehicle} Detail
                  </Link>
                  <Link
                    href={`/services/${pkg.resetSlugs.gold}`}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/40 transition-colors"
                  >
                    Gold {pkg.vehicle} Detail
                  </Link>
                </div>
              </li>
              <li className="rounded-2xl border border-[#00B8E6]/30 bg-[#0A0A0A] p-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
                  Step 2 · The routine
                </p>
                <p className="text-white font-semibold mb-2">Schedule recurring maintenance</p>
                <p className="text-sm text-gray-400">
                  Weekly, bi-weekly, or monthly visits at ${pkg.pricePerVisit} each keep the dirt from ever
                  building up again, so you never need another big restoration clean.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="benefits"
          className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-16 bg-[#0A0A0A]"
          aria-label="Benefits of regular maintenance cleaning"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              The Benefits of Cleaning Your {pkg.vehicle} Frequently
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Small, regular cleans cost far less than one big rescue job. Here&apos;s what a recurring
              routine does for your {vehicleLower}, and why it means you won&apos;t need larger, more expensive
              details down the road.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {maintenanceBenefits.map((b, i) => (
                <div key={b.title} className="rounded-2xl bg-[#161616] border border-white/10 p-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-black"
                    style={{ backgroundColor: "rgba(0,184,230,0.12)", color: BLUE }}
                    aria-hidden
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-white font-bold mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-[#161616] p-6 sm:p-8">
              <h3 className="text-xl font-black text-white mb-3">{pkg.vehicleAngle.heading}</h3>
              <p className="text-gray-400 leading-relaxed">{pkg.vehicleAngle.body}</p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-white font-semibold mb-4">
                Ready to keep your {vehicleLower} clean for good? Pick a day and time below.
              </p>
              <a
                href="#book"
                data-open-booking
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-black glow-blue transition-all"
                style={{ backgroundColor: BLUE }}
              >
                Book Your Recurring Clean
                <ArrowDown size={16} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* Routines */}
        <section className="py-10 sm:py-16 bg-[#161616]" aria-label="Weekly, bi-weekly, and monthly routines">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Choose Your Routine: Weekly, Bi-Weekly, or Monthly
            </h2>
            <p className="text-gray-400 max-w-3xl mb-10">
              Same ${pkg.pricePerVisit} per visit on every schedule. Pick the frequency that matches how you drive
              and where you park.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {routines.map(({ icon: Icon, label, tag, body, featured }) => (
                <div
                  key={label}
                  className={`relative rounded-2xl p-6 bg-[#0A0A0A] border ${
                    featured ? "border-[#00B8E6]/50 shadow-xl shadow-[#00B8E6]/5" : "border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={22} style={{ color: BLUE }} aria-hidden />
                    <h3 className="text-xl font-black text-white">{label}</h3>
                  </div>
                  <p
                    className={`inline-block text-xs font-bold uppercase tracking-wider mb-3 ${
                      featured ? "text-[#00B8E6]" : "text-gray-500"
                    }`}
                  >
                    {tag}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{body}</p>
                  <p className="text-white font-bold">
                    ${pkg.pricePerVisit} <span className="text-sm font-normal text-gray-500">per visit</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-10 sm:py-16 bg-[#0A0A0A]" aria-label="What's included in every visit">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">What&apos;s Included in Every Visit</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {maintenanceInclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: BLUE }} className="mt-0.5 shrink-0" aria-hidden />
                  <span className="text-gray-300">{inc}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-6 flex items-start gap-2">
              <Sparkles size={16} className="mt-0.5 shrink-0" style={{ color: BLUE }} aria-hidden />
              Hand-washed with pH-balanced shampoo and clean microfiber every time, never automated brushes. We
              bring our own water and power.
            </p>
          </div>
        </section>

        {/* Cities */}
        <section className="py-10 sm:py-16 bg-[#161616]" aria-label="Recurring car cleaning service areas">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Recurring Car Cleaning in Los Angeles, Santa Monica, Marina Del Rey &amp; Beyond
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              DG Detailing brings recurring {vehicleLower} cleaning to your driveway, garage, or office parking
              lot across the LA Westside. Whether you need weekly car washes in Santa Monica, bi-weekly detailing
              in Culver City or Playa Vista, or a monthly maintenance clean in Brentwood, we keep{" "}
              {pkg.vehiclePlural} clean on a schedule that works for you.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Coastal neighborhoods like Marina Del Rey and Venice Beach get daily salt air and sand, which makes a
              regular wash routine especially important for protecting paint. In Los Angeles traffic, freeway
              grime and brake dust build up fast. A recurring clean stops both before they become a problem.
            </p>
            <div className="flex flex-wrap gap-3">
              {maintenanceCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/40 transition-colors"
                >
                  Recurring cleaning in {c.city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10 sm:py-16 bg-[#0A0A0A]" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-[#161616] overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="font-semibold text-white text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other maintenance packages */}
        <section className="py-10 sm:py-16 bg-[#161616]" aria-label="Other maintenance packages">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-6">Other Maintenance Packages</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherPackages.map((p) => (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="rounded-2xl border border-white/10 hover:border-[#00B8E6]/40 bg-[#0A0A0A] p-4 transition-all group"
                >
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: BLUE }}>
                    maintenance
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#00B8E6] transition-colors">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">${p.pricePerVisit} per visit</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Booking calendar */}
        <section
          id="book"
          className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-16 bg-[#0A0A0A]"
          aria-label="Book your recurring maintenance clean"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Book Your Recurring {pkg.vehicle} Maintenance Clean
              </h2>
              <p className="text-gray-400">
                Pick a day and time for your first visit, then let us know if you&apos;d like it weekly,
                bi-weekly, or monthly. ${pkg.pricePerVisit} per visit.
              </p>
            </div>
            <GHLForm />
          </div>
        </section>
      </div>
    </>
  );
}
