import type { Metadata } from "next";
import Link from "next/link";
import { Clock, DollarSign, Shield, CheckCircle, MinusCircle, ChevronDown } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import GHLForm from "@/components/GHLForm";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderImage from "@/components/PlaceholderImage";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ceramic Coating in Los Angeles | DG Detailing",
  description:
    "Mobile ceramic coating in Los Angeles from $750. Choose 5-year or 7-year paint protection — clay bar, machine polish & pro ceramic application. We come to you.",
  canonical: "/services/ceramic-coating",
  keywords: [
    "ceramic coating Los Angeles",
    "mobile ceramic coating LA",
    "car ceramic coating Los Angeles",
    "paint protection Los Angeles",
  ],
});

const inclusions = [
  "Thorough hand wash & decontamination — pH-neutral wash, iron and tar removal, and a clay bar to pull embedded contaminants a normal wash leaves behind.",
  "Machine polish (paint correction) — a single-stage polish to remove light swirls, oxidation, and haze so the coating bonds to corrected paint, not damaged paint.",
  "Surface prep & panel wipe — polishing oils and residue stripped so the coating bonds cleanly to bare clear coat.",
  "Professional ceramic coating application — applied panel by panel and leveled by hand for an even, streak-free bond.",
  "Cure & aftercare guidance — initial cure on-site, plus a plain-English wash routine so the coating actually lasts.",
];

const processSteps = [
  {
    lead: "Decontaminate.",
    rest: "We wash, remove iron and tar, and clay-bar the paint so the surface is truly clean before anything else — bonding to a dirty surface is why cheap coatings fail early.",
  },
  {
    lead: "Correct.",
    rest: "We machine-polish out the light swirls and oxidation that a clear coating would otherwise magnify. This is the step most spray-on \"coatings\" skip.",
  },
  {
    lead: "Coat.",
    rest: "We apply your chosen ceramic coating — 5-year or 7-year — by hand, panel by panel, for an even, hydrophobic, multi-year layer.",
  },
  {
    lead: "Cure & protect.",
    rest: "The coating sets on-site, and we hand you a simple wash routine so it performs for years instead of months.",
  },
];

const whyChoose = [
  {
    lead: "Correction-first prep.",
    rest: "We machine-polish before we coat, so you're not sealing swirl marks under a multi-year layer — the mistake that ruins most budget coating jobs.",
  },
  {
    lead: "Mobile and honest.",
    rest: "We come to you across the Westside and tell you what your paint actually needs, not the biggest number on a product label.",
  },
  {
    lead: "Built for LA conditions.",
    rest: "Coastal sun, marine layer, and street parking are hard on paint. A coating is genuine UV and contamination defense between details.",
  },
];

const wontDo = [
  "It won't stop rock chips or deep scratches. For impact protection from road debris, paint protection film (PPF) is the right tool.",
  "It won't hide swirls already in your paint — it's clear, so we correct the paint first or those flaws get sealed in.",
  "It won't make washing optional. It makes washing easier and less frequent, not unnecessary.",
  "It won't prevent every water spot. Minerals left when water evaporates can still spot, and acidic bird droppings need to be rinsed off promptly.",
];

const serviceAreas = [
  { slug: "los-angeles", city: "Los Angeles" },
  { slug: "marina-del-rey", city: "Marina Del Rey" },
  { slug: "santa-monica", city: "Santa Monica" },
  { slug: "culver-city", city: "Culver City" },
  { slug: "venice-beach", city: "Venice Beach" },
  { slug: "playa-vista", city: "Playa Vista" },
  { slug: "brentwood", city: "Brentwood" },
];

const faqs = [
  {
    question: "How long does ceramic coating last?",
    answer:
      "A professional ceramic coating typically lasts 2 to 5 years, versus a few weeks for wax or about six months for a sealant. Real-world lifespan depends on the coating chemistry, how well the paint was prepped, and how the car is washed afterward. A garage-kept car that's hand-washed correctly holds its coating far longer than one left outside and run through brush washes.",
  },
  {
    question: "Does ceramic coating make my paint scratch-proof?",
    answer:
      "No — and any installer who says otherwise is overselling it. A coating adds hardness that resists fine swirl marks from washing, but it won't stop rock chips, key scratches, or deep gouges. For impact protection against road debris, paint protection film (PPF) is the right tool. Think of ceramic as a durable chemical shield for gloss, UV, and contamination — not body armor.",
  },
  {
    question: "Will the coating hide the swirls and scratches already in my paint?",
    answer:
      "No. A coating is clear and locks in whatever is underneath it. That's exactly why we machine-polish the paint before application — any swirl marks, oxidation, or haze get corrected first, or they'd be sealed in for years. This matters most on black and dark-colored cars, where imperfections show hardest in direct sunlight.",
  },
  {
    question: "Do I still have to wash my car after it's coated?",
    answer:
      "Yes, just less often and with far less effort. The hydrophobic surface makes dirt and water slide off, so most contamination rinses away. Plan on a gentle hand wash every two to three weeks with a pH-neutral soap and a clean microfiber mitt. Skip automatic brush tunnels — they inflict the exact swirl marks the coating is meant to help you avoid.",
  },
  {
    question: "What's the difference between ceramic coating, sealant, and wax?",
    answer:
      "Wax sits on top of the paint and lasts a few weeks to a couple of months. A synthetic sealant lasts around six months. A ceramic coating chemically bonds to the clear coat and lasts years, with stronger UV, chemical, and water resistance. It's a bigger upfront investment that pays off in durability and lower maintenance if you're keeping the car a while.",
  },
  {
    question: "Why does the price depend on my vehicle's size?",
    answer:
      "More surface area means more prep time, more polishing, and more coating product. A coupe has noticeably less paint to correct and coat than a sedan, a midsized SUV more still, and a truck the most — so the price steps up by vehicle class rather than being one flat rate. You'll see the exact price for your vehicle type in the pricing section above before you book.",
  },
  {
    question: "What's the difference between the 5-year and 7-year coating?",
    answer:
      "Both start with the same correction-first prep — decontamination wash, clay bar, and machine polish. The 7-year is a longer-life coating system with additional application time (about 6 hours versus 4), built to hold its protection and gloss longer against LA sun and road exposure. The 5-year is the standard choice most drivers pick; the 7-year makes the most sense if you're keeping the vehicle long-term and want the longest-lasting protection.",
  },
  {
    question: "Can you apply ceramic coating over my existing wax or sealant?",
    answer:
      "No. A coating has to bond directly to bare clear coat, so any wax or sealant has to be stripped off first. Our wash and decontamination stage handles that, which is one reason a proper coating job is more involved than a spray-on product. Skipping that step is a big reason cheap coatings fail early.",
  },
  {
    question: "How soon can I wash it after the coating is applied?",
    answer:
      "Give it about seven days before the first wash so the coating fully cures and hardens. During that window, keep the car out of rain where you can and avoid parking under trees. After the cure period, normal gentle hand washing is fine and actually helps the coating perform.",
  },
  {
    question: "Is ceramic coating actually worth it?",
    answer:
      "It depends on how long you keep your car. If you trade vehicles every year and park in a garage, the payoff is smaller. If you're keeping the car and want it to hold its gloss, stay cleaner between washes, and resist UV and oxidation, it's one of the better protection investments — especially for daily drivers that rack up sun, road film, and parking-lot exposure.",
  },
  {
    question: "Do you come to me, or do I drop the car off?",
    answer:
      "We're fully mobile — we bring everything to your driveway or workplace across the LA Westside. Ceramic coating does need a cure window and is best applied on a clean, dry surface out of direct blazing sun, so we'll talk through the ideal spot when you book. Covered driveways and shaded areas work well.",
  },
  {
    question: "Does ceramic coating protect against water spots and bird droppings?",
    answer:
      "It helps, but it's not immune. The slick surface makes water bead and roll off, but minerals left behind when water evaporates can still spot, and acidic bird droppings or bug guts can etch the coating if left to bake on. The fix is simple — rinse those off promptly rather than letting them sit.",
  },
  {
    question: "Should I get paint correction before the coating?",
    answer:
      "For most vehicles, yes — at least a single-stage polish, which is built into our process. Correction removes the light scratches and swirls a clear coating would otherwise magnify. Heavily neglected or badly swirled paint may need more involved multi-stage correction; we'll assess your paint honestly and tell you what it actually needs before coating day.",
  },
];

const vehiclePricing = [
  { vehicle: "Coupe", five: 750, seven: 895 },
  { vehicle: "Sedan", five: 875, seven: 1120 },
  { vehicle: "Midsized SUV", five: 1075, seven: 1420 },
  { vehicle: "Truck / Large SUV", five: 1265, seven: 1710 },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ceramic Coating",
  serviceType: "Automotive ceramic coating",
  description:
    "Professional mobile ceramic coating in Los Angeles — decontamination wash, machine polish, and multi-year ceramic paint protection applied at your location.",
  provider: {
    "@type": "AutoDetailing",
    name: "DG Detailing",
    telephone: "+13106924495",
    email: "diego@dgautodetailing.com",
    url: "https://www.dgautodetailing.com/",
    areaServed: [
      "Los Angeles",
      "Marina Del Rey",
      "Santa Monica",
      "Culver City",
      "Venice Beach",
      "Playa Vista",
      "Brentwood",
    ],
  },
  areaServed: [
    "Los Angeles",
    "Marina Del Rey",
    "Santa Monica",
    "Culver City",
    "Venice Beach",
    "Playa Vista",
    "Brentwood",
  ],
  offers: [
    { "@type": "Offer", name: "5-Year Ceramic Coating — Coupe", price: "750", priceCurrency: "USD" },
    { "@type": "Offer", name: "5-Year Ceramic Coating — Sedan", price: "875", priceCurrency: "USD" },
    { "@type": "Offer", name: "5-Year Ceramic Coating — Midsized SUV", price: "1075", priceCurrency: "USD" },
    { "@type": "Offer", name: "5-Year Ceramic Coating — Truck / Large SUV", price: "1265", priceCurrency: "USD" },
    { "@type": "Offer", name: "7-Year Ceramic Coating — Coupe", price: "895", priceCurrency: "USD" },
    { "@type": "Offer", name: "7-Year Ceramic Coating — Sedan", price: "1120", priceCurrency: "USD" },
    { "@type": "Offer", name: "7-Year Ceramic Coating — Midsized SUV", price: "1420", priceCurrency: "USD" },
    { "@type": "Offer", name: "7-Year Ceramic Coating — Truck / Large SUV", price: "1710", priceCurrency: "USD" },
  ],
  url: "https://www.dgautodetailing.com/services/ceramic-coating",
};

export default function CeramicCoatingPage() {
  return (
    <>
      <SchemaJsonLd schema={serviceJsonLd} />
      <SchemaJsonLd schema={faqSchema(faqs)} />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com/" },
          { name: "Services", url: "https://www.dgautodetailing.com/services" },
          { name: "Ceramic Coating", url: "https://www.dgautodetailing.com/services/ceramic-coating" },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "Ceramic Coating" },
          ]}
        />

        {/* Hero */}
        <section
          className="py-16 lg:py-24 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="Ceramic Coating hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full border"
                  style={{ color: "#00B8E6", borderColor: "rgba(0,184,230,0.3)", backgroundColor: "rgba(0,184,230,0.08)" }}
                >
                  paint protection
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                  Ceramic Coating{" "}
                  <span style={{ color: "#00B8E6" }}>in Los Angeles</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6">
                  Multi-year paint protection, applied at your driveway. Deeper gloss, easier washes, real UV and
                  contamination defense — choose a 5-year or 7-year coating, mobile across the LA Westside.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} style={{ color: "#00B8E6" }} />
                    <div>
                      <p className="text-xs text-gray-500">Starting at</p>
                      <p className="text-2xl font-black text-white">$750</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" aria-hidden />
                  <div className="flex items-center gap-2">
                    <Clock size={18} style={{ color: "#00B8E6" }} />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-lg font-bold text-white">4–6 hrs</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" aria-hidden />
                  <div className="flex items-center gap-2">
                    <Shield size={18} style={{ color: "#00B8E6" }} />
                    <div>
                      <p className="text-xs text-gray-500">Protection</p>
                      <p className="text-lg font-bold text-white">5 or 7 year</p>
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
                alt="Ceramic Coating — DG Detailing Los Angeles"
                label="Ceramic Coating — coming soon"
                className="aspect-[3/2]"
              />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-[#161616]" aria-label="About ceramic coating">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-300 leading-relaxed">
              A ceramic coating is a liquid polymer that chemically bonds to your car&apos;s clear coat and cures
              into a hard, glossy, water-repelling layer that lasts years — not the few weeks you get from wax. Done
              right, it means deeper gloss, faster washes, and real protection from UV, road film, and chemical
              staining. Done wrong — coated over swirl marks or skipped-prep paint — it locks in every flaw for the
              life of the coating. That&apos;s why every DG ceramic job starts with a full decontamination wash and a
              machine polish before a drop of coating goes on. We offer two coatings — a 5-year and a longer-life
              7-year — and we&apos;re fully mobile, so all of this happens in your driveway across the LA Westside.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Service inclusions">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">What&apos;s Included</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: "#00B8E6" }} className="mt-0.5 shrink-0" />
                  <span className="text-gray-300">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-[#161616]" aria-label="Our ceramic coating process">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Our Ceramic Coating Process</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.lead} className="rounded-2xl bg-[#0A0A0A] border border-white/10 p-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-black"
                    style={{ backgroundColor: "rgba(0,184,230,0.12)", color: "#00B8E6" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">{step.lead}</strong> {step.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose Your Protection */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Choose your protection: 5-year vs 7-year">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Choose Your Protection — 5-Year vs 7-Year
            </h2>
            <p className="text-gray-400 italic mb-8">
              Both coatings start with the same correction-first prep. The difference is how long the protection
              lasts — pick based on how long you&apos;re keeping the car.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-[#161616] p-6">
                <p className="text-sm italic mb-1" style={{ color: "#00B8E6" }}>
                  The standard choice
                </p>
                <h3 className="text-xl font-black text-white mb-4">5-Year Ceramic Coating</h3>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li>
                    <strong className="text-white">Protection:</strong> ~5 years with proper care
                  </li>
                  <li>
                    <strong className="text-white">Application time:</strong> 4 hours
                  </li>
                  <li>
                    Full decontamination wash, clay bar, single-stage machine polish, professional ceramic
                    application
                  </li>
                </ul>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Best for:</strong> most drivers who want years of real gloss and
                  protection without the top-tier spend, or who plan to keep the car a few years
                </p>
              </div>
              <div
                className="rounded-2xl border p-6 bg-[#161616]"
                style={{ borderColor: "rgba(0,184,230,0.4)" }}
              >
                <p className="text-sm italic mb-1" style={{ color: "#00B8E6" }}>
                  Maximum protection
                </p>
                <h3 className="text-xl font-black text-white mb-4">7-Year Ceramic Coating</h3>
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  <li>
                    <strong className="text-white">Protection:</strong> ~7 years with proper care
                  </li>
                  <li>
                    <strong className="text-white">Application time:</strong> 6 hours (additional coating layers and
                    cure time)
                  </li>
                  <li>
                    Everything in the 5-year coating, with a longer-life coating system built to hold up longer
                    against LA sun and road exposure
                  </li>
                </ul>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Best for:</strong> drivers keeping the vehicle long-term, or anyone
                  who wants the longest-lasting protection available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing by Vehicle */}
        <section className="py-16 bg-[#161616]" aria-label="Pricing by vehicle">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Pricing by Vehicle</h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-[#0A0A0A] text-gray-400 uppercase text-xs tracking-wider">
                  <tr>
                    <th scope="col" className="px-4 py-3">Vehicle</th>
                    <th scope="col" className="px-4 py-3">5-Year (4 hr)</th>
                    <th scope="col" className="px-4 py-3">7-Year (6 hr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {vehiclePricing.map((row) => (
                    <tr key={row.vehicle}>
                      <td className="px-4 py-4 font-semibold text-white whitespace-nowrap">{row.vehicle}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white">${row.five.toLocaleString()}</span>
                          <a
                            href="#book"
                            className="px-3 py-1 rounded-full text-xs font-bold text-black whitespace-nowrap"
                            style={{ backgroundColor: "#00B8E6" }}
                          >
                            Book
                          </a>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white">${row.seven.toLocaleString()}</span>
                          <a
                            href="#book"
                            className="px-3 py-1 rounded-full text-xs font-bold text-black whitespace-nowrap"
                            style={{ backgroundColor: "#00B8E6" }}
                          >
                            Book
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic mt-4">
              Pricing steps up by vehicle size — larger vehicles have more surface area to correct and coat. The
              7-year coating adds longer-lasting protection and extra application time. Pick your vehicle and coating
              when you book, or call and we&apos;ll confirm the exact price for your car.
            </p>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Why choose DG for ceramic coating">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Why Choose DG for Ceramic Coating</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {whyChoose.map((item, i) => (
                <div key={item.lead} className="rounded-2xl bg-[#161616] border border-white/10 p-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-sm font-black"
                    style={{ backgroundColor: "rgba(0,184,230,0.12)", color: "#00B8E6" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">{item.lead}</strong> {item.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Ceramic Coating Won't Do */}
        <section className="py-16 bg-[#161616]" aria-label="What ceramic coating won't do">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">What Ceramic Coating Won&apos;t Do</h2>
            <ul className="space-y-3">
              {wontDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <MinusCircle size={18} className="mt-0.5 shrink-0 text-gray-500" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Service areas">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-6">Service Areas We Cover</h2>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((loc) => (
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
        <section className="py-16 bg-[#161616]" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden"
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

        {/* Related Services */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Related services">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white mb-2">Related Services</h2>
            <p className="text-gray-400 italic mb-6">
              Getting the car coated is a great time to knock out a full detail first — start with a Gold detail,
              then protect it.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/services/gold-sedan-detail", label: "Gold Sedan Detail" },
                { href: "/services/gold-coupe-detail", label: "Gold Coupe Detail" },
                { href: "/services/gold-suv-truck-detail", label: "Gold SUV / Truck Detail" },
                { href: "/services", label: "All Services →" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 hover:border-[#00B8E6]/40 bg-[#161616] p-4 transition-all flex items-center"
                >
                  <p className="text-sm font-semibold text-white hover:text-[#00B8E6] transition-colors">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Book Form */}
        <section id="book" className="py-16 bg-[#161616]" aria-label="Book this service">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Ready to Book Your Ceramic Coating?
              </h2>
              <p className="text-gray-400">
                Fill out the form below and we&apos;ll confirm your appointment within hours.
              </p>
            </div>
            <GHLForm />
          </div>
        </section>

        <CTASection
          heading="Ready for the Cleanest — and Best-Protected — Your Car Has Ever Been?"
          subheading="Book in under 60 seconds. We'll be at your driveway with everything we need."
        />
      </div>
    </>
  );
}
