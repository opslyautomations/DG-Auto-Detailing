import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import type { Location } from "@/lib/locations";
import { locationImages } from "@/lib/siteImages";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const image = locationImages[location.slug];

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 hover:border-[#00B8E6]/40 bg-[#161616] hover:bg-[#1a1a1a] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B8E6]/5">
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            title={image.title}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
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
      </div>
    </article>
  );
}
