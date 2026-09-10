import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";

/**
 * Fixed call/book bar for phones. Below `lg` the site otherwise offers no way
 * to reach the phone number without scrolling to the footer or opening the menu.
 *
 * Sits at z-40 so the full-screen mobile menu (z-50) covers it when open.
 */
export default function MobileCtaBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch gap-2 px-3 py-2.5">
        <a
          href="tel:+13106924495"
          className="flex flex-1 items-center justify-center gap-2 min-h-[48px] rounded-xl text-base font-bold text-black transition-transform active:scale-[0.97]"
          style={{ backgroundColor: "#00B8E6" }}
        >
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/contact#book"
          className="flex flex-1 items-center justify-center gap-2 min-h-[48px] rounded-xl text-base font-bold text-white border border-white/25 transition-transform active:scale-[0.97] active:bg-white/10"
        >
          <CalendarCheck size={18} aria-hidden="true" />
          Book
        </Link>
      </div>
    </div>
  );
}
