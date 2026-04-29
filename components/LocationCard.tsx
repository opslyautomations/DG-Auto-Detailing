import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { Location } from "@/lib/locations";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 hover:border-[#00B8E6]/40 bg-[#161616] hover:bg-[#1a1a1a] transition-all duration-300 p-6 hover:shadow-xl hover:shadow-[#00B8E6]/5">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "rgba(0,184,230,0.12)" }}
        >
          <MapPin size={16} style={{ color: "#00B8E6" }} />
        </div>
        <div>
          <h3 className="font-bold text-white text-base leading-tight">{location.city}</h3>
          <p className="text-xs text-gray-500">{location.state}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
        {location.intro}
      </p>
      <Link
        href={`/locations/${location.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
        style={{ color: "#00B8E6" }}
        aria-label={`Mobile car detailing in ${location.city}`}
      >
        View Service Area
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
