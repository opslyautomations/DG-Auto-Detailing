"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { services, vehicleClassLabels } from "@/lib/services";
import { locations } from "@/lib/locations";

const serviceGroups = {
  Basic: services.filter((s) => s.tier === "basic"),
  Silver: services.filter((s) => s.tier === "silver"),
  Gold: services.filter((s) => s.tier === "gold"),
};

type ServiceTierGroup = keyof typeof serviceGroups;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeTier, setActiveTier] = useState<ServiceTierGroup | null>(null);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileExpandedTier, setMobileExpandedTier] = useState<ServiceTierGroup | null>(null);

  const closeServices = () => {
    setServicesOpen(false);
    setActiveTier(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "";
      setMobileExpandedTier(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="DG Detailing Home">
              <span className="text-xl lg:text-2xl font-black tracking-tight">
                <span style={{ color: "#00B8E6" }}>DG</span>
                <span className="text-white"> Detailing</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={closeServices}
                  aria-haspopup="true"
                >
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-[#161616] border border-white/10 rounded-2xl shadow-2xl p-4"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={closeServices}
                  >
                    {activeTier === null ? (
                      <>
                        {(Object.keys(serviceGroups) as ServiceTierGroup[]).map((tier) => (
                          <button
                            key={tier}
                            onClick={() => setActiveTier(tier)}
                            className="flex items-center justify-between w-full px-2 py-2 text-sm font-semibold text-[#00B8E6] uppercase tracking-widest hover:text-[#48D1F0] hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {tier}
                            <ChevronRight size={14} />
                          </button>
                        ))}
                        <div className="mt-2">
                          <p className="text-xs font-semibold text-[#00B8E6] uppercase tracking-widest mb-1 px-2">
                            Protection
                          </p>
                          <Link
                            href="/services/ceramic-coating"
                            className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={closeServices}
                          >
                            Ceramic Coating
                          </Link>
                        </div>
                        <div className="border-t border-white/10 mt-3 pt-3">
                          <Link
                            href="/services"
                            className="block px-2 py-1.5 text-sm font-semibold text-[#00B8E6] hover:text-[#48D1F0] transition-colors"
                            onClick={closeServices}
                          >
                            All Services →
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setActiveTier(null)}
                          className="flex items-center gap-1 text-xs font-semibold text-[#00B8E6] uppercase tracking-widest mb-2 px-2 py-1 hover:text-[#48D1F0] transition-colors"
                        >
                          <ChevronLeft size={14} /> {activeTier}
                        </button>
                        {serviceGroups[activeTier].map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={closeServices}
                          >
                            {vehicleClassLabels[s.vehicleClass]} Detail
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                  aria-haspopup="true"
                >
                  Locations <ChevronDown size={14} />
                </button>
                {locationsOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-[#161616] border border-white/10 rounded-2xl shadow-2xl p-3"
                    onMouseEnter={() => setLocationsOpen(true)}
                    onMouseLeave={() => setLocationsOpen(false)}
                  >
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setLocationsOpen(false)}
                      >
                        {loc.city}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2">
                      <Link
                        href="/locations"
                        className="block px-2 py-1.5 text-sm font-semibold text-[#00B8E6] hover:text-[#48D1F0] transition-colors"
                        onClick={() => setLocationsOpen(false)}
                      >
                        All Service Areas →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="/about">About</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/specials">Specials</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+13108554277"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-black glow-blue transition-all duration-200"
                style={{ backgroundColor: "#00B8E6" }}
              >
                <Phone size={14} />
                (310) 855-4277
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <span className="text-xl font-black">
              <span style={{ color: "#00B8E6" }}>DG</span>
              <span className="text-white"> Detailing</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Phone CTA */}
          <div className="px-4 py-4 border-b border-white/10">
            <a
              href="tel:+13108554277"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-black text-lg"
              style={{ backgroundColor: "#00B8E6" }}
              onClick={() => setMobileOpen(false)}
            >
              <Phone size={18} />
              (310) 855-4277
            </a>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg transition-colors text-white font-semibold hover:text-[#00B8E6]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-lg transition-colors text-white font-semibold hover:text-[#00B8E6]"
              onClick={() => setMobileOpen(false)}
            >
              All Services
            </Link>

            {/* Services tier accordion */}
            {(Object.keys(serviceGroups) as ServiceTierGroup[]).map((tier) => (
              <div key={tier}>
                <button
                  onClick={() => setMobileExpandedTier(mobileExpandedTier === tier ? null : tier)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-semibold text-gray-300 hover:text-[#00B8E6] transition-colors"
                  aria-expanded={mobileExpandedTier === tier}
                >
                  {tier}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileExpandedTier === tier ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedTier === tier && (
                  <div className="pl-4">
                    {serviceGroups[tier].map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {vehicleClassLabels[s.vehicleClass]} Detail
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/services/ceramic-coating"
              className="block px-3 py-2 rounded-lg transition-colors text-sm text-gray-400 hover:text-[#00B8E6]"
              onClick={() => setMobileOpen(false)}
            >
              Ceramic Coating
            </Link>

            {[
              { href: "/locations", label: "All Service Areas" },
              ...locations.map((l) => ({ href: `/locations/${l.slug}`, label: `  ${l.city}` })),
              { href: "/about", label: "About" },
              { href: "/reviews", label: "Reviews" },
              { href: "/gallery", label: "Gallery" },
              { href: "/specials", label: "Specials" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  item.label.startsWith("  ")
                    ? "text-sm text-gray-400 hover:text-[#00B8E6]"
                    : "text-white font-semibold hover:text-[#00B8E6]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label.trim()}
              </Link>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-white/10">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-white border border-white/20"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
    >
      {children}
    </Link>
  );
}
