"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

/**
 * Minimal shapes projected by the server layout. Importing lib/services.ts and
 * lib/locations.ts directly here dragged their full prose (descriptions,
 * inclusions, FAQs, meta copy) into a ~38KB client chunk on every page, for a
 * menu that only ever renders slugs and labels.
 */
export interface NavService {
  slug: string;
  tier: "basic" | "silver" | "gold";
  label: string;
}
export interface NavLocation {
  slug: string;
  city: string;
}

interface NavProps {
  services: NavService[];
  locations: NavLocation[];
}

const TIERS = ["Basic", "Silver", "Gold"] as const;
type ServiceTierGroup = (typeof TIERS)[number];

/** Shared row sizing — 48px minimum touch target (WCAG 2.2 target size). */
const MOBILE_ROW =
  "flex items-center min-h-[48px] w-full px-3 rounded-lg transition-colors active:bg-white/10";

export default function Nav({ services, locations }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeTier, setActiveTier] = useState<ServiceTierGroup | null>(null);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileExpandedTier, setMobileExpandedTier] = useState<ServiceTierGroup | null>(null);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const serviceGroups: Record<ServiceTierGroup, NavService[]> = {
    Basic: services.filter((s) => s.tier === "basic"),
    Silver: services.filter((s) => s.tier === "silver"),
    Gold: services.filter((s) => s.tier === "gold"),
  };

  const closeServices = () => {
    setServicesOpen(false);
    setActiveTier(null);
  };

  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locationsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    servicesCloseTimer.current = setTimeout(closeServices, 200);
  };

  const openLocations = () => {
    if (locationsCloseTimer.current) clearTimeout(locationsCloseTimer.current);
    setLocationsOpen(true);
  };
  const scheduleCloseLocations = () => {
    locationsCloseTimer.current = setTimeout(() => setLocationsOpen(false), 200);
  };

  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
      if (locationsCloseTimer.current) clearTimeout(locationsCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * iOS Safari ignores `overflow: hidden` on <body> for touch scrolling, so the
   * page used to scroll behind the open menu. Pin the body and restore the
   * scroll position on close.
   */
  useEffect(() => {
    if (!mobileOpen) return;
    const y = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, y);
    };
  }, [mobileOpen]);

  const openMobileMenu = () => {
    setMobileOpen(true);
    setMobileExpandedTier(null);
    setMobileAreasOpen(false);
  };
  const closeMobile = () => setMobileOpen(false);

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
            <Link
              href="/"
              className="flex items-center gap-2 px-2 py-1 -mx-2 rounded-md hover:bg-white/5 transition-colors"
              aria-label="DG Detailing Home"
            >
              <span className="text-xl lg:text-2xl font-black tracking-tight">
                <span style={{ color: "#00B8E6" }}>DG</span>
                <span className="text-white"> Detailing</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                  aria-haspopup="true"
                >
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-[#161616] border border-white/10 rounded-2xl shadow-2xl p-4"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    {activeTier === null ? (
                      <>
                        {TIERS.map((tier) => (
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
                            {s.label}
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
                  onMouseEnter={openLocations}
                  onMouseLeave={scheduleCloseLocations}
                  aria-haspopup="true"
                >
                  Locations <ChevronDown size={14} />
                </button>
                {locationsOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-[#161616] border border-white/10 rounded-2xl shadow-2xl p-3"
                    onMouseEnter={openLocations}
                    onMouseLeave={scheduleCloseLocations}
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
                href="tel:+13106924495"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-black glow-blue transition-all duration-200"
                style={{ backgroundColor: "#00B8E6" }}
              >
                <Phone size={14} />
                (310) 692-4495
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile menu button — 48px target */}
            <button
              className="lg:hidden flex items-center justify-center -mr-2 w-12 h-12 rounded-lg text-gray-300 active:bg-white/10 transition-colors"
              onClick={openMobileMenu}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col overflow-y-auto overscroll-contain">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <Link
              href="/"
              className="text-xl font-black rounded-md px-1 -mx-1 py-1 active:bg-white/10 transition-colors"
              onClick={closeMobile}
              aria-label="DG Detailing Home"
            >
              <span style={{ color: "#00B8E6" }}>DG</span>
              <span className="text-white"> Detailing</span>
            </Link>
            <button
              onClick={closeMobile}
              className="flex items-center justify-center -mr-2 w-12 h-12 rounded-lg text-gray-400 active:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Phone CTA */}
          <div className="px-4 py-4 border-b border-white/10">
            <a
              href="tel:+13106924495"
              className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-xl font-bold text-black text-lg transition-transform active:scale-[0.98]"
              style={{ backgroundColor: "#00B8E6" }}
              onClick={closeMobile}
            >
              <Phone size={18} />
              (310) 692-4495
            </a>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-3 space-y-0.5">
            <Link
              href="/services"
              className={`${MOBILE_ROW} text-white font-semibold`}
              onClick={closeMobile}
            >
              All Services
            </Link>

            {/* Services tier accordions */}
            {TIERS.map((tier) => (
              <div key={tier}>
                <button
                  onClick={() => setMobileExpandedTier(mobileExpandedTier === tier ? null : tier)}
                  className={`${MOBILE_ROW} justify-between text-sm font-semibold text-gray-300`}
                  aria-expanded={mobileExpandedTier === tier}
                >
                  {tier}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileExpandedTier === tier ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedTier === tier && (
                  <div className="pl-4">
                    {serviceGroups[tier].map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className={`${MOBILE_ROW} text-sm text-gray-400`}
                        onClick={closeMobile}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/services/ceramic-coating"
              className={`${MOBILE_ROW} text-sm text-gray-400`}
              onClick={closeMobile}
            >
              Ceramic Coating
            </Link>

            {/* Service areas accordion — 7 city links used to sit flat in this list */}
            <button
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              className={`${MOBILE_ROW} justify-between text-white font-semibold`}
              aria-expanded={mobileAreasOpen}
            >
              Service Areas
              <ChevronDown
                size={18}
                className={`transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="pl-4">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className={`${MOBILE_ROW} text-sm text-gray-400`}
                    onClick={closeMobile}
                  >
                    {loc.city}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className={`${MOBILE_ROW} text-sm font-semibold text-[#00B8E6]`}
                  onClick={closeMobile}
                >
                  All Service Areas →
                </Link>
              </div>
            )}

            {[
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
                className={`${MOBILE_ROW} text-white font-semibold`}
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className="px-4 py-4 border-t border-white/10"
            style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center w-full min-h-[52px] rounded-xl font-bold text-white border border-white/20 transition-transform active:scale-[0.98] active:bg-white/10"
              onClick={closeMobile}
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
