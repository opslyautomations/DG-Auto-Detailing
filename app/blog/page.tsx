import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Auto Detailing Blog — Tips, Guides & LA City Guides | DG Detailing",
  description:
    "Expert auto detailing tips, service guides, and city-specific articles for Los Angeles drivers. Learn about hand washing, ceramic coating, paint correction, and more from DG Detailing.",
  canonical: "/blog",
});

const categories = ["All", "Service Guide", "Location Guide", "Detailing Tips", "Maintenance"];

export default function BlogPage() {
  return (
    <>
      <SchemaJsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "DG Detailing Blog",
          url: "https://www.dgautodetailing.com/blog",
          description: "Auto detailing tips, guides, and city-specific content for LA drivers",
          publisher: {
            "@id": "https://www.dgautodetailing.com/#organization",
          },
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `https://www.dgautodetailing.com/blog/${p.slug}`,
            datePublished: p.publishedAt,
          })),
        }}
      />

      <div className="pt-20">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        {/* Hero */}
        <section
          className="py-16 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
          aria-label="Blog hero"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Detailing Tips, Guides &{" "}
              <span style={{ color: "#00B8E6" }}>LA Insights</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Expert content from DG Detailing — how to protect your vehicle, when to detail, and
              what each service actually does.
            </p>
          </div>
        </section>

        {/* Category pills */}
        <section className="py-6 bg-[#161616] border-b border-white/10" aria-label="Blog categories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                    i === 0
                      ? "text-black"
                      : "border border-white/10 text-gray-400"
                  }`}
                  style={i === 0 ? { backgroundColor: "#00B8E6" } : undefined}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-[#0A0A0A]" aria-label="Blog posts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
