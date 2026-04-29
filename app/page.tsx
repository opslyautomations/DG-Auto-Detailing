import Link from "next/link";
import { Phone, Star, CheckCircle } from "lucide-react";
import GHLForm from "@/components/GHLForm";
import TrustBar from "@/components/TrustBar";
import LocationCard from "@/components/LocationCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services, tierLabels, tierDescriptions } from "@/lib/services";
import { locations } from "@/lib/locations";
import { getFeaturedReviews } from "@/lib/reviews";
import type { ServiceTier } from "@/lib/services";

export default function HomePage() {
  const featuredReviews = getFeaturedReviews();
  const tiers: ServiceTier[] = ["basic", "silver", "gold"];

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 50%, #0A0A0A 100%)" }}
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,184,230,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <p
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full border"
                style={{ color: "#00B8E6", borderColor: "rgba(0,184,230,0.3)", backgroundColor: "rgba(0,184,230,0.08)" }}
              >
                Mobile Auto Detailing • Los Angeles & Surrounding Areas
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Premium Mobile Detailing{" "}
                <span style={{ color: "#00B8E6" }}>That Comes to You</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                6+ years restoring and protecting Los Angeles&apos;s finest vehicles — 1,500+ details and counting.
                Hand-wash only. We bring the studio to your driveway.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-black glow-blue transition-all"
                  style={{ backgroundColor: "#00B8E6" }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+13108554277"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  <Phone size={18} />
                  Call (310) 855-4277
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <div className="flex items-center gap-0.5" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>Trusted across LA</span>
                <span className="text-gray-600">•</span>
                <span>Mobile service</span>
                <span className="text-gray-600">•</span>
                <span>Fully insured</span>
              </div>
            </div>

            {/* Right: GHL Form */}
            <div className="w-full">
              <div className="mb-3">
                <p className="text-sm font-semibold text-white">Book Your Detail</p>
                <p className="text-xs text-gray-500">Takes less than 60 seconds</p>
              </div>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Trust Bar ── */}
      <TrustBar />

      {/* ── Section 3: Services Preview ── */}
      <section className="py-20 bg-[#0A0A0A]" aria-label="Services overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Three Tiers. Every Vehicle Type.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From a quick professional refresh to a full showroom restoration — choose the package that fits your vehicle and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {tiers.map((tier) => {
              const tierServices = services.filter((s) => s.tier === tier);
              const lowestPrice = Math.min(...tierServices.map((s) => s.priceFrom));
              return (
                <div
                  key={tier}
                  className="rounded-2xl border border-white/10 hover:border-[#00B8E6]/40 bg-[#161616] p-6 transition-all duration-300"
                >
                  <h3 className="text-xl font-black text-white mb-2">{tierLabels[tier]} Tier</h3>
                  <p className="text-sm text-gray-400 mb-4">{tierDescriptions[tier]}</p>
                  <p className="text-2xl font-bold mb-4" style={{ color: "#00B8E6" }}>
                    From ${lowestPrice}
                  </p>
                  <ul className="space-y-1 mb-5">
                    {tierServices.map((s) => (
                      <li key={s.slug} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={13} style={{ color: "#00B8E6" }} className="shrink-0" />
                        {s.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: "#00B8E6" }}
                  >
                    View {tierLabels[tier]} Packages →
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why DG Detailing ── */}
      <section className="py-20 bg-[#161616]" aria-label="Why choose DG Detailing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Why LA Drivers Choose DG Detailing
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "No automated brushes",
                desc: "Every wash is hand-done with pH-balanced products that protect your paint.",
              },
              {
                num: "02",
                title: "We come to you",
                desc: "Home, work, condo lot — we set up a full mobile detailing rig wherever you are.",
              },
              {
                num: "03",
                title: "Real protection",
                desc: "Sealants and waxes built to last 3–6 months, not 3–6 days.",
              },
              {
                num: "04",
                title: "Maintenance built in",
                desc: "Monthly plans keep your car showroom-fresh year-round.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="rounded-2xl bg-[#0A0A0A] border border-white/10 p-6 hover:border-[#00B8E6]/30 transition-all"
              >
                <div
                  className="text-4xl font-black mb-3 leading-none"
                  style={{ color: "rgba(0,184,230,0.2)" }}
                >
                  {card.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Service Areas ── */}
      <section className="py-20 bg-[#0A0A0A]" aria-label="Service areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Mobile Detailing Across Greater Los Angeles
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              We come to your location throughout the LA metro — no drop-off, no waiting room.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Gallery Preview ── */}
      <section className="py-20 bg-[#161616]" aria-label="Gallery preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Our Work
            </h2>
            <p className="text-gray-400">Before-and-after detail work across Greater LA.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              "Exterior Detail — Marina Del Rey",
              "Gold Interior — Brentwood",
              "Paint Correction — Santa Monica",
              "Ceramic Coating — Playa Vista",
              "Silver Detail — Venice Beach",
              "Gold Exterior — Culver City",
            ].map((label, i) => (
              <PlaceholderImage
                key={i}
                width={600}
                height={400}
                alt={`DG Detailing — ${label}`}
                label={label}
                className="aspect-[3/2]"
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: Reviews Preview ── */}
      <section className="py-20 bg-[#0A0A0A]" aria-label="Customer reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3" aria-label="5 star average rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              What LA Drivers Say
            </h2>
            <p className="text-gray-400">5.0 ★ — Trusted across Greater Los Angeles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 8: Specials Banner ── */}
      <section
        className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, #0096C7 0%, #00B8E6 50%, #48D1F0 100%)" }}
        aria-label="Current special offer"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-black text-black mb-3">
            🎉 New Client Offer — 15% Off Your First Detail When You Book Silver or Higher
          </p>
          <p className="text-black/70 mb-6 text-base">
            No code needed. Discount applied at booking. Available across all DG Detailing service areas.
          </p>
          <Link
            href="/specials"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold bg-black text-white hover:bg-gray-900 transition-colors"
          >
            See All Specials
          </Link>
        </div>
      </section>

      {/* ── Section 9: Final CTA ── */}
      <CTASection />
    </>
  );
}
