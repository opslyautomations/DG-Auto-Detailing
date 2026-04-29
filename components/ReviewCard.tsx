import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="rounded-2xl bg-[#161616] border border-white/10 p-6 flex flex-col gap-3">
      {/* Stars */}
      <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <blockquote className="text-sm text-gray-300 leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <div>
          <p className="text-sm font-semibold text-white">{review.author}</p>
          <p className="text-xs text-gray-500">{review.city}</p>
        </div>
        {review.service && (
          <span className="text-xs text-gray-600 italic text-right max-w-[120px] leading-tight">
            {review.service}
          </span>
        )}
      </div>
    </article>
  );
}
