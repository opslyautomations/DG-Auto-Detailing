"use client";

import { useEffect, useRef, useState } from "react";
import BookingFrame from "@/components/BookingFrame";

const OPEN_EVENT = "dg:open-booking";

/**
 * The GHL widget lays itself out as a fixed 900px-tall box with its own
 * scrolling service list inside, plus a few px of document overflow (GHL's
 * own embed script adds 5px for the same reason). Measured from the live
 * widget; it does not change with the frame size or heightMode.
 */
const WIDGET_HEIGHT = 905;

/** Matches Tailwind's `lg` breakpoint. */
export const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Open the full-screen booking overlay. Returns false on desktop, where the
 * overlay is never shown, so callers can fall back to navigating instead.
 */
export function openBooking(): boolean {
  if (window.matchMedia(DESKTOP_QUERY).matches) return false;
  window.dispatchEvent(new Event(OPEN_EVENT));
  return true;
}

/**
 * A frame shorter than the widget's height leaves the widget's own document
 * scrollable around its inner list: two scrollers inside one iframe, which
 * iOS Safari can't chain between (swipe down works, swipe back up doesn't).
 * So the frame is always exactly the widget's height and scaled down to fit the screen,
 * leaving the inner list as the only scroller anywhere.
 */
function FittedBookingFrame() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ width, height });
    });
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  const scale = size ? Math.min(1, size.height / WIDGET_HEIGHT) : 1;

  return (
    <div ref={boxRef} className="ghl-form-container relative h-full w-full overflow-hidden">
      {size && (
        <BookingFrame
          eager
          frameStyle={{
            width: `${size.width / scale}px`,
            height: `${WIDGET_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
          }}
        />
      )}
    </div>
  );
}

/**
 * Full-screen booking widget for phones, mounted once in the root layout so
 * any button on any page can open it via `openBooking()`.
 *
 * Phones never get the widget inline. An inline widget is a scroller nested in
 * the page scroller, and on touch screens the two fight over swipes. Full
 * screen, with the page locked behind it, the widget is the only thing that
 * scrolls.
 */
export default function BookingOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    // Server-rendered pages can't attach handlers, so any link marked
    // `data-open-booking` opens the overlay on phones and navigates as
    // normal on desktop. Capture phase, so it runs before next/link navigates.
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest?.("[data-open-booking]") && openBooking()) {
        event.preventDefault();
      }
    };
    // Close if the viewport grows into the desktop layout.
    const query = window.matchMedia(DESKTOP_QUERY);
    const onResize = () => {
      if (query.matches) setOpen(false);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    document.addEventListener("click", onClick, true);
    query.addEventListener("change", onResize);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      document.removeEventListener("click", onClick, true);
      query.removeEventListener("change", onResize);
    };
  }, []);

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

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a detail with DG Detailing"
      className="fixed inset-0 z-[2147483646] flex h-[100dvh] flex-col bg-[#0A0A0A] lg:hidden"
    >
      {/* The widget's own header carries the business name, so the close
          button floats over its empty right side instead of taking a row. */}
      <div className="relative min-h-0 flex-1 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <FittedBookingFrame />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close booking"
          className="absolute right-3 top-[calc(0.5rem+env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
