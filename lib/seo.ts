import type { Metadata } from "next";

const BASE_URL = "https://www.dgautodetailing.com";
const SITE_NAME = "DG Detailing";
const DEFAULT_OG_IMAGE = "/og-default.jpg";

export function buildMetadata(opts: {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const ogImage = opts.ogImage || DEFAULT_OG_IMAGE;
  const canonical = `${BASE_URL}${opts.canonical}`;

  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical },
    openGraph: {
      type: opts.ogType || "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : {
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
  };
}
