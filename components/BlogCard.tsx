import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-2xl bg-[#161616] border border-white/10 hover:border-[#00B8E6]/40 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#00B8E6]/5">
      {/* Placeholder image area */}
      <div
        className="h-44 flex items-center justify-center border-b border-white/10"
        style={{ backgroundColor: "rgba(0,184,230,0.04)" }}
        aria-hidden="true"
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(0,184,230,0.12)" }}>
          <span className="text-xs font-bold" style={{ color: "#00B8E6" }}>{post.category[0]}</span>
        </div>
      </div>

      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
          <span
            className="px-2 py-0.5 rounded-full font-medium"
            style={{ backgroundColor: "rgba(0,184,230,0.12)", color: "#00B8E6" }}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {post.readTime} min read
          </span>
          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
          style={{ color: "#00B8E6" }}
          aria-label={`Read: ${post.title}`}
        >
          Read Article
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
