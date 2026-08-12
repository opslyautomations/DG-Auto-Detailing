import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-black mb-4 glow-blue transition-all"
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
                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                aria-label="View DG Detailing on Google Business Profile"
              >
                <ExternalLink size={12} />
                Google Business Profile
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/ceramic-coating"
                  className="text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                >
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-[#00B8E6] hover:text-[#48D1F0] transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                  >
                    {loc.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm font-semibold text-[#00B8E6] hover:text-[#48D1F0] transition-colors"
                >
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/reviews", label: "Reviews" },
                { href: "/gallery", label: "Gallery" },
                { href: "/specials", label: "Specials" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+13106924495"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  (310) 692-4495
                </a>
              </li>
              <li>
                <a
                  href="mailto:diego@dgautodetailing.com"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
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
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-medium text-gray-300 hover:text-[#00B8E6] hover:border-[#00B8E6]/30 transition-colors"
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
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-[#00B8E6] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-[#00B8E6] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
