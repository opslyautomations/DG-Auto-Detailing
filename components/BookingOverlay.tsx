"use client";

import { useEffect, useState } from "react";
import BookingFrame from "@/components/BookingFrame";

const OPEN_EVENT = "dg:open-booking";

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
  );
}
