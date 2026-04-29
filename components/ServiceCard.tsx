import Link from "next/link";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  showDetails?: boolean;
}

const tierColors = {
  basic: { bg: "from-zinc-800 to-zinc-900", badge: "bg-zinc-700 text-zinc-200" },
  silver: { bg: "from-slate-700 to-slate-900", badge: "bg-slate-600 text-slate-100" },
  gold: { bg: "from-yellow-900/60 to-amber-950", badge: "bg-yellow-700/80 text-yellow-100" },
};

export default function ServiceCard({ service, showDetails = false }: ServiceCardProps) {
  const colors = tierColors[service.tier];

  return (
    <article className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#00B8E6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#00B8E6]/5">
      <div className={`bg-gradient-to-br ${colors.bg} p-6 h-full flex flex-col`}>
        {/* Tier Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${colors.badge}`}>
            {service.tier}
          </span>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <DollarSign size={11} />
              From ${service.priceFrom}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {service.duration}
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>

        {/* Inclusions (optional) */}
        {showDetails && (
          <ul className="mb-4 space-y-1">
            {service.inclusions.slice(0, 4).map((inc) => (
              <li key={inc} className="flex items-start gap-2 text-xs text-gray-300">
                <span style={{ color: "#00B8E6" }} className="mt-0.5 shrink-0">✓</span>
                {inc}
              </li>
            ))}
            {service.inclusions.length > 4 && (
              <li className="text-xs text-gray-500">+{service.inclusions.length - 4} more included</li>
            )}
          </ul>
        )}

        {/* CTA */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3 mt-auto"
          style={{ color: "#00B8E6" }}
          aria-label={`View ${service.name} details and pricing`}
        >
          View Details
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
