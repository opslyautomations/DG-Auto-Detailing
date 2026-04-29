import Link from "next/link";
import { Phone } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
  variant?: "dark" | "blue";
}

export default function CTASection({
  heading = "Ready for the Cleanest Your Car Has Ever Been?",
  subheading = "Book in under 60 seconds. We'll be at your driveway with everything we need.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact",
  showPhone = true,
  variant = "dark",
}: CTASectionProps) {
  return (
    <section
      className={`py-20 px-4 text-center ${
        variant === "blue"
          ? "bg-gradient-to-r from-[#0096C7] to-[#00B8E6]"
          : "bg-[#0A0A0A] border-t border-white/10"
      }`}
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight ${
            variant === "blue" ? "text-black" : "text-white"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`text-lg mb-8 ${
            variant === "blue" ? "text-black/80" : "text-gray-400"
          }`}
        >
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all glow-blue ${
              variant === "blue"
                ? "bg-black text-white hover:bg-gray-900"
                : "text-black"
            }`}
            style={variant !== "blue" ? { backgroundColor: "#00B8E6" } : undefined}
          >
            {primaryLabel}
          </Link>
          {showPhone && (
            <a
              href="tel:+13108554277"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border transition-colors ${
                variant === "blue"
                  ? "border-black/20 text-black hover:bg-black/10"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <Phone size={18} />
              (310) 855-4277
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
