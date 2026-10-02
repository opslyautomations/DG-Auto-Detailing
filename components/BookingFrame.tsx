"use client";

import { useState } from "react";

/**
 * Embed URL as supplied by the GHL booking calendar. `form_embed.js` (loaded in
 * the root layout) matches the iframe by its `id`.
 */
const BOOKING_SRC =
  "https://api.opslyautomations.com/booking/dg-car-detailing-zerhza1hzz9?heightMode=fixed&showHeader=true";
const BOOKING_IFRAME_ID = "Z48P3v4VaWrAZifhwqd9_1790915597006";

/**
 * The GHL booking iframe plus its loading placeholder. Fills its parent, which
 * must be `relative` with a definite height. Only one may be mounted at a time:
 * form_embed.js tracks the frame by id.
 */
export default function BookingFrame({ eager }: { eager: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <iframe
        src={BOOKING_SRC}
        // `!` because form_embed.js writes `iframe.style.height`; the frame
        // must stay the size of its container or the widget's own scroller
        // would run past the clip and hide the confirm button.
        className="block h-full! w-full border-0"
        allow="payment"
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        id={BOOKING_IFRAME_ID}
        title="Book a Mobile Auto Detail with DG Detailing"
        aria-label="Booking calendar for DG Detailing mobile auto detail services"
      />

      {/* Placeholder so the reserved space doesn't read as a blank void while
          the cross-origin widget boots on a phone connection. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-start justify-center bg-[#0A0A0A] pt-24 transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-[#00B8E6]" />
          <p className="text-sm text-gray-500">Loading available times…</p>
        </div>
      </div>
    </>
  );
}
