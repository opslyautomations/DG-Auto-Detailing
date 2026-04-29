interface PlaceholderImageProps {
  width: number;
  height: number;
  alt: string;
  label?: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  alt,
  label,
  className = "",
}: PlaceholderImageProps) {
  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#161616] border border-white/10 ${className}`}
      style={{ paddingBottom: `${aspectRatio}%` }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        {/* Car silhouette SVG */}
        <svg
          viewBox="0 0 64 32"
          className="w-16 h-8 opacity-20"
          fill="currentColor"
          style={{ color: "#00B8E6" }}
          aria-hidden="true"
        >
          <path d="M60 20H56L50 10H14L8 20H4C2 20 2 22 2 22V26C2 27 3 28 4 28H6C6 30 8 32 10 32C12 32 14 30 14 28H50C50 30 52 32 54 32C56 32 58 30 58 28H60C61 28 62 27 62 26V22C62 22 62 20 60 20ZM10 30C9 30 8 29 8 28C8 27 9 26 10 26C11 26 12 27 12 28C12 29 11 30 10 30ZM54 30C53 30 52 29 52 28C52 27 53 26 54 26C55 26 56 27 56 28C56 29 55 30 54 30ZM48 18H16L20 12H44L48 18Z" />
        </svg>
        <span className="text-xs text-gray-600 text-center leading-tight max-w-[120px]">
          {label || "Photo coming soon"}
        </span>
      </div>
    </div>
  );
}
