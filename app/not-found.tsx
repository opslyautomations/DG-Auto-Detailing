import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4 py-20">
      <div className="text-center max-w-xl">
        <div className="text-8xl font-black mb-4" style={{ color: "rgba(0,184,230,0.3)" }}>
          404
        </div>
        <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          That page doesn&apos;t exist. Let us help you find what you&apos;re looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-black glow-blue"
            style={{ backgroundColor: "#00B8E6" }}
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Services</p>
            <ul className="space-y-1">
              {services.slice(0, 4).map((s) => (
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
                <Link href="/services" className="text-sm font-semibold" style={{ color: "#00B8E6" }}>
                  All Services →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Service Areas</p>
            <ul className="space-y-1">
              {locations.slice(0, 4).map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="text-sm text-gray-400 hover:text-[#00B8E6] transition-colors"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-sm font-semibold" style={{ color: "#00B8E6" }}>
                  All Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
