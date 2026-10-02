"use client";

import { useEffect, useState } from "react";
import BookingFrame from "@/components/BookingFrame";
import { DESKTOP_QUERY, openBooking } from "@/components/BookingOverlay";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

interface GHLFormProps {
  className?: string;
  /** Skip lazy-loading. Only for an embed that is genuinely above the fold. */
  eager?: boolean;
}

/**
 * Booking section: the widget inline on desktop, and on phones a launcher card
 * that opens the full-screen overlay (see BookingOverlay for why).
 */
export default function GHLForm({ className = "", eager = false }: GHLFormProps) {
  const isDesktop = useIsDesktop();

  return (
    <div className={className}>
      {/* The frame is only mounted once we know we're on desktop, so phones
          never load a second copy behind the overlay. */}
      <div className="ghl-form-container relative hidden h-[820px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 lg:block">
        {isDesktop && <BookingFrame eager={eager} />}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-2xl shadow-black/50 lg:hidden">
        <p className="text-lg font-semibold text-white">Book your detail online</p>
        <p className="mt-1 text-sm text-gray-400">
          Pick your service and a time that works. Takes less than 60 seconds.
        </p>
        <button
          type="button"
          onClick={openBooking}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#00B8E6] px-6 text-base font-bold text-black transition-transform active:scale-[0.97]"
        >
          See Services &amp; Book
        </button>
      </div>
    </div>
  );
}
