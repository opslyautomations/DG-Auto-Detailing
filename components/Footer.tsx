import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

interface FooterLink {
  href: string;
  label: string;
  accent?: boolean;
}

/**
 * Collapsible on phones, plain column from `md` up.
 *
 * The two states are rendered separately rather than toggling a single
 * <details> with CSS: browsers hide unopened <details> content via the UA slot,
 * and overriding that at a breakpoint is not reliably supported.
 */
function FooterSection({ title, links }: { title: string; links: FooterLink[] }) {
  const list = (
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.href + l.label}>
          <Link
            href={l.href}
            className={`block py-1 text-sm transition-colors ${
              l.accent
                ? "font-semibold text-[#00B8E6] hover:text-[#48D1F0]"
                : "text-gray-400 hover:text-[#00B8E6]"
            }`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Phones: collapsed by default */}
      <details className="md:hidden border-b border-white/10 group">
        <summary className="flex items-center justify-between min-h-[48px] cursor-pointer list-none text-sm font-bold text-white uppercase tracking-widest [&::-webkit-details-marker]:hidden">
          {title}
          <ChevronDown
            size={18}
            className="text-gray-500 transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="pb-4">{list}</div>
      </details>

      {/* md and up: always-open column */}
      <div className="hidden md:block">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">{title}</h3>
        {list}
      </div>
    </>
  );
}

export default function Footer() {
  const serviceLinks: FooterLink[] = [
    ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
    { href: "/services/ceramic-coating", label: "Ceramic Coating" },
    { href: "/services", label: "All Services →", accent: true },
  ];

  const areaLinks: FooterLink[] = [
    ...locations.map((loc) => ({ href: `/locations/${loc.slug}`, label: loc.city })),
    { href: "/locations", label: "All Service Areas →", accent: true },
  ];

  const companyLinks: FooterLink[] = [
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/gallery", label: "Gallery" },
    { href: "/specials", label: "Specials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="DG Detailing Home">
              <span className="text-2xl font-black">
                <span style={{ color: "#00B8E6" }}>DG</span>
                <span className="text-white"> Detailing</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Premium mobile auto detailing in Los Angeles. We come to you.
            </p>
            <a
              href="tel:+13106924495"
              className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-full text-sm font-bold text-black mb-4 glow-blue transition-all active:scale-95"
              style={{ backgroundColor: "#00B8E6" }}
            >
              <Phone size={14} />
              (310) 692-4495
            </a>
            <div className="mt-2">
              <a
                href="https://share.google/FpW0qKoCtS0gZTKRu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 py-2 text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                aria-label="View DG Detailing on Google Business Profile"
              >
                <ExternalLink size={12} />
                Google Business Profile
              </a>
            </div>
          </div>

          <FooterSection title="Services" links={serviceLinks} />
          <FooterSection title="Service Areas" links={areaLinks} />
          <FooterSection title="Company" links={companyLinks} />

          {/* Column 5: Connect — never collapsed; this is the actionable column */}
          <div className="pt-4 md:pt-0">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+13106924495"
                  className="flex items-start gap-2 py-1 text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  (310) 692-4495
                </a>
              </li>
              <li>
                <a
                  href="mailto:diego@dgautodetailing.com"
                  className="flex items-start gap-2 py-1 text-sm text-gray-400 hover:text-[#00B8E6] transition-colors break-all"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  diego@dgautodetailing.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>Greater Los Angeles, CA<br />Mobile — we come to you</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <Clock size={14} className="mt-0.5 shrink-0" />
                  <span>
                    Mon–Sat: 7:00 AM – 7:00 PM<br />
                    Sun: 8:00 AM – 5:00 PM
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="https://share.google/FpW0qKoCtS0gZTKRu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 min-h-[44px] rounded-lg border border-white/10 text-xs font-medium text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/30 transition-colors"
                >
                  <ExternalLink size={12} />
                  Google Business Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © 2026 DG Detailing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="py-2 text-xs text-gray-500 hover:text-[#00B8E6] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="py-2 text-xs text-gray-500 hover:text-[#00B8E6] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
