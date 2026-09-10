"use client";

import { useEffect, useRef, useState } from "react";

const BOOKING_ORIGIN = "https://api.opslyautomations.com";

/**
 * `heightMode=auto` is the whole trick. In `fixed` mode the widget builds its
 * own scroll container inside our iframe, and on a phone — where the month
 * grid, the slot list and the contact fields stack instead of sitting side by
 * side — that container is far taller than the frame. The result is a nested
 * scroller: a swipe over the calendar moves the widget's inner viewport (or
 * dies at its end) instead of the page, and the confirm button hides below the
 * clip. In `auto` mode the widget reports its natural height, we grow the
 * iframe to match, and the page is a single scroll surface again.
 */
const BOOKING_SRC = `${BOOKING_ORIGIN}/booking/dg-car-detailing-zerhza1hzz9?heightMode=auto&showHeader=false`;

/**
 * Used until the widget reports a height, and if it never does (script blocked,
 * message shape changed). Generous on purpose: too tall costs some dead space,
 * too short hides the booking button.
 */
const FALLBACK_HEIGHT_CLASSES = "h-[1600px] sm:h-[1200px] lg:h-[1100px]";

/** Guard rails against a bogus postMessage collapsing or ballooning the frame. */
const MIN_HEIGHT = 420;
const MAX_HEIGHT = 6000;

/** Ignore sub-pixel chatter so we don't re-render on every widget repaint. */
const HEIGHT_EPSILON = 8;

function coerceHeight(value: unknown): number | null {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

/**
 * GHL has shipped several message shapes for iframe resize — a bare object, a
 * JSON string, a `{ type, payload }` envelope — so probe rather than assume.
 */
function extractHeight(data: unknown, depth = 0): number | null {
  if (depth > 3) return null;

  if (typeof data === "string") {
    const trimmed = data.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        return extractHeight(JSON.parse(trimmed), depth + 1);
      } catch {
        // Not JSON — fall through to the loose match below.
      }
    }
    const match = trimmed.match(/height["':\s]+([\d.]+)/i);
    return match ? coerceHeight(match[1]) : null;
  }

  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    for (const key of ["height", "iframeHeight", "scrollHeight", "docHeight"]) {
      const height = coerceHeight(record[key]);
      if (height !== null) return height;
    }
    for (const key of ["data", "payload", "detail"]) {
      if (record[key] !== undefined) {
        const height = extractHeight(record[key], depth + 1);
        if (height !== null) return height;
      }
    }
  }

  return null;
}

interface GHLFormProps {
  className?: string;
  /** Skip lazy-loading. Only for an embed that is genuinely above the fold. */
  eager?: boolean;
  /**
   * Cancel the parent section's `px-4` on phones so the date grid gets the full
   * screen width — 32px more is the difference between comfortable and fiddly
   * tap targets on the month view. Assumes a `px-4 sm:px-6` parent.
   */
  fullBleedMobile?: boolean;
}

export default function GHLForm({
  className = "",
  eager = false,
  fullBleedMobile = true,
}: GHLFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== BOOKING_ORIGIN) return;
      // Ignore the chat widget and anything else on the same origin.
      const frame = iframeRef.current;
      if (frame && event.source && event.source !== frame.contentWindow) return;

      const next = extractHeight(event.data);
      if (next === null || next < MIN_HEIGHT || next > MAX_HEIGHT) return;

      setHeight((current) =>
        current !== null && Math.abs(current - next) < HEIGHT_EPSILON
          ? current
          : Math.round(next),
      );
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const measured = height !== null;

  return (
    <div
      className={[
        "ghl-form-container relative overflow-hidden",
        "shadow-2xl shadow-black/50",
        fullBleedMobile ? "-mx-4 rounded-none sm:mx-0 sm:rounded-2xl" : "rounded-2xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <iframe
        ref={iframeRef}
        src={BOOKING_SRC}
        // Height lives here, not on the wrapper: GHL's own form_embed.js also
        // writes `iframe.style.height`, and a wrapper with its own fixed height
        // would clip whenever the two disagreed. The wrapper hugs the iframe.
        className={`block w-full border-0 ${measured ? "" : FALLBACK_HEIGHT_CLASSES}`}
        style={measured ? { height: `${height}px` } : undefined}
        // The page owns scrolling. Any scroller inside a cross-origin iframe
        // swallows touch swipes on iOS, which is what stranded clients here.
        scrolling="no"
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        id="Z48P3v4VaWrAZifhwqd9_1783720246857"
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
  );
}
