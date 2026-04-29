import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { blogPostSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `/blog/${slug}`,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const fallbackRelated = blogPosts
    .filter((p) => p.slug !== slug && !relatedPosts.includes(p))
    .slice(0, 3 - relatedPosts.length);

  const displayRelated = [...relatedPosts, ...fallbackRelated].slice(0, 3);

  // Convert markdown-like content to HTML paragraphs
  const contentBlocks = post.body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-black text-white mt-10 mb-4">{block.replace("## ", "")}</h2>;
    }
    if (block.startsWith("# ")) {
      return <h1 key={i} className="text-3xl font-black text-white mt-10 mb-4">{block.replace("# ", "")}</h1>;
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-300">
              <span style={{ color: "#00B8E6" }} className="mt-0.5 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
    }
    if (block.includes("|") && block.includes("---")) {
      return null; // skip table divider
    }
    if (block.startsWith("|")) {
      // Simple table rendering
      const rows = block.split("\n").filter((r) => r.startsWith("|") && !r.includes("---"));
      return (
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            {rows.map((row, ri) => {
              const cells = row.split("|").filter((c) => c.trim());
              return (
                <tr key={ri} className={`border-b border-white/10 ${ri === 0 ? "font-bold text-white" : "text-gray-400"}`}>
                  {cells.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2">{cell.trim()}</td>
                  ))}
                </tr>
              );
            })}
          </table>
        </div>
      );
    }
    // Regular paragraph with bold support
    return (
      <p
        key={i}
        className="text-gray-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{
          __html: block
            .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>")
            .replace(/\n/g, "<br />"),
        }}
      />
    );
  });

  return (
    <>
      <SchemaJsonLd
        schema={blogPostSchema({
          title: post.title,
          slug: post.slug,
          description: post.description,
          date: post.publishedAt,
        })}
      />
      <SchemaJsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "https://www.dgautodetailing.com" },
          { name: "Blog", url: "https://www.dgautodetailing.com/blog" },
          { name: post.title, url: `https://www.dgautodetailing.com/blog/${post.slug}` },
        ])}
      />

      <div className="pt-20">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Article Header */}
        <header
          className="py-16 border-b border-white/10"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #161616 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#00B8E6] transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "rgba(0,184,230,0.12)", color: "#00B8E6" }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock size={11} />
                {post.readTime} read
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar size={11} />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {post.description}
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose-content">
              {contentBlocks}
            </div>

            {/* Author / CTA block */}
            <div
              className="mt-12 p-6 rounded-2xl border"
              style={{ backgroundColor: "rgba(0,184,230,0.05)", borderColor: "rgba(0,184,230,0.2)" }}
            >
              <p className="text-sm font-bold text-white mb-1">About DG Detailing</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                DG Detailing is Los Angeles&apos;s premier mobile auto detailing service — 6+ years, 1,500+
                vehicles, hand-wash only. We serve LA, Marina Del Rey, Santa Monica, Culver City, Venice
                Beach, Playa Vista, and Brentwood.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-black"
                  style={{ backgroundColor: "#00B8E6" }}
                >
                  Book a Detail
                </Link>
                <a
                  href="tel:+13108554277"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  (310) 855-4277
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {displayRelated.length > 0 && (
          <section className="py-16 bg-[#161616] border-t border-white/10" aria-label="Related articles">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-black text-white mb-8">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayRelated.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </div>
    </>
  );
}
