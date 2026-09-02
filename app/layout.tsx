import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import MobileCtaBar from "@/components/MobileCtaBar";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { services, vehicleClassLabels } from "@/lib/services";
import { locations } from "@/lib/locations";

/**
 * Nav is the only client component on the site. Projecting these down to the
 * fields it actually renders keeps lib/services.ts and lib/locations.ts (and
 * all their prose) out of the client bundle.
 */
const navServices = services.map((s) => ({
  slug: s.slug,
  tier: s.tier,
  label: `${vehicleClassLabels[s.vehicleClass]} Detail`,
}));
const navLocations = locations.map((l) => ({ slug: l.slug, city: l.city }));

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dgautodetailing.com"),
  title: {
    default: "Mobile Auto Detailing in Los Angeles | DG Detailing",
    template: "%s | DG Detailing",
  },
  description:
    "Premium mobile auto detailing across LA, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood. Hand-wash only. We come to you. Call (310) 692-4495.",
  applicationName: "DG Detailing",
  authors: [{ name: "DG Detailing" }],
  generator: "Next.js",
  keywords: [
    "mobile auto detailing Los Angeles",
    "car detailing near me Los Angeles",
    "mobile car wash Marina Del Rey",
    "ceramic coating Santa Monica",
    "interior car detailing Culver City",
    "mobile detailer Venice Beach",
    "premium auto detailing Playa Vista",
    "luxury car detailing Brentwood",
    "paint correction Los Angeles",
    "monthly car detailing maintenance Los Angeles",
  ],
  referrer: "origin-when-cross-origin",
  creator: "DG Detailing",
  publisher: "DG Detailing",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "https://www.dgautodetailing.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dgautodetailing.com",
    siteName: "DG Detailing",
    title: "Mobile Auto Detailing in Los Angeles | DG Detailing",
    description:
      "Premium mobile auto detailing across LA, Marina Del Rey, Santa Monica, Culver City, Venice Beach, Playa Vista, and Brentwood. Hand-wash only. We come to you.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DG Detailing — Mobile Auto Detailing Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Auto Detailing in Los Angeles | DG Detailing",
    description:
      "Premium mobile auto detailing across LA. Hand-wash only. We come to you. Call (310) 692-4495.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Automotive",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="preconnect" href="https://api.opslyautomations.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F3F4F6] pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <SchemaJsonLd schema={organizationSchema} />
        <SchemaJsonLd schema={websiteSchema} />
        <Nav services={navServices} locations={navLocations} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar />
        {/* GHL Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="695d89b06f90aeb962a41c5c"
          strategy="lazyOnload"
        />
        {/* GHL Form Embed Script */}
        <Script
          src="https://api.opslyautomations.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
