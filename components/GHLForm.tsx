"use client";

import { useEffect, useState } from "react";

/**
 * Embed URL as supplied by the GHL booking calendar. `form_embed.js` (loaded in
 * the root layout) matches the iframe by its `id`.
 */
const BOOKING_SRC =
  "https://api.opslyautomations.com/booking/dg-car-detailing-zerhza1hzz9?heightMode=fixed&showHeader=true";
const BOOKING_IFRAME_ID = "Z48P3v4VaWrAZifhwqd9_1790915597006";

/** Matches Tailwind's `lg` breakpoint. */
const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Phones never get the widget inline. An inline widget is a scroller nested in
 * the page scroller, and on touch screens the two fight: swipes over the frame
 * get trapped, and form_embed.js's resizer restores the page scroll position
 * on every widget resize, which pins the page. Instead, phones get a button
 * that opens the widget full screen, where it is the only thing that scrolls.
 */
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

function BookingFrame({ eager }: { eager: boolean }) {
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

interface GHLFormProps {
  className?: string;
  /** Skip lazy-loading. Only for an embed that is genuinely above the fold. */
  eager?: boolean;
}

export default function GHLForm({ className = "", eager = false }: GHLFormProps) {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = useState(false);

  // Close the overlay if the viewport grows into the inline layout.
  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  // Lock the page behind the overlay and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={className}>
      {/* Desktop: inline widget. The frame is only mounted once we know we're
          on desktop, so phones never load a second copy behind the overlay. */}
      <div className="ghl-form-container relative hidden h-[820px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 lg:block">
        {isDesktop && <BookingFrame eager={eager} />}
      </div>

      {/* Phones: a launcher card that opens the widget full screen. */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-2xl shadow-black/50 lg:hidden">
        <p className="text-lg font-semibold text-white">Book your detail online</p>
        <p className="mt-1 text-sm text-gray-400">
          Pick your service and a time that works. Takes less than 60 seconds.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#00B8E6] px-6 text-base font-bold text-black transition-transform active:scale-[0.97]"
        >
          See Services &amp; Book
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a detail with DG Detailing"
          className="fixed inset-0 z-[2147483646] flex h-[100dvh] flex-col bg-[#0A0A0A] lg:hidden"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))]">
            <p className="text-base font-semibold text-white">Book Your Detail</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close booking"
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-gray-300 active:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="ghl-form-container relative min-h-0 flex-1 overflow-hidden pb-[env(safe-area-inset-bottom)]">
            <BookingFrame eager />
          </div>
        </div>
      )}
    </div>
  );
}
