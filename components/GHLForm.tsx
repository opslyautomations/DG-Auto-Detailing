"use client";

import { useState } from "react";

/**
 * Embed URL as supplied by the GHL booking calendar. `form_embed.js` (loaded in
 * the root layout) matches the iframe by its `id`.
 */
const BOOKING_SRC =
  "https://api.opslyautomations.com/booking/dg-car-detailing-zerhza1hzz9?heightMode=fixed&showHeader=true";

/**
 * The widget lives in a bounded window that scrolls on its own. On a phone the
 * full widget is several screens tall; letting it fill the viewport leaves no
 * surface for the page to scroll from, so a swipe anywhere just moves the
 * widget. Capping it at ~70% of the screen, with the page gutters left visible
 * around it, keeps both the widget and the page reachable.
 *
 * `svh` tracks the visible viewport with the mobile browser chrome showing;
 * plain `vh` is the fallback where `svh` is unsupported.
 */
const FRAME_HEIGHT_CLASSES =
  "h-[70vh] supports-[height:100svh]:h-[70svh] min-h-[480px] max-h-[720px] lg:h-[820px] lg:max-h-none";

interface GHLFormProps {
  className?: string;
  /** Skip lazy-loading. Only for an embed that is genuinely above the fold. */
  eager?: boolean;
}

export default function GHLForm({ className = "", eager = false }: GHLFormProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className}>
      <div
        className={`ghl-form-container relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 ${FRAME_HEIGHT_CLASSES}`}
      >
        <iframe
          src={BOOKING_SRC}
          // `!` because form_embed.js writes `iframe.style.height`; the frame
          // must stay the size of its window or the widget's own scroller
          // would run past the clip and hide the confirm button.
          className="block h-full! w-full border-0"
          allow="payment"
          loading={eager ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          id="Z48P3v4VaWrAZifhwqd9_1790915597006"
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
      </div>

      <p className="mt-2 text-center text-xs text-gray-500 lg:hidden">
        Scroll inside the box to browse services. Scroll outside it to move the page.
      </p>
    </div>
  );
}
