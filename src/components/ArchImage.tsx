import { useState } from "react";
import { motion } from "framer-motion";

interface ArchImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
}

export default function ArchImage({ src, alt, className = "", lazy = true }: ArchImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // If it's an SVG data URL, render it directly (it already has data: prefix)
  if (src.startsWith("data:image/svg")) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={lazy ? "lazy" : "eager"}
      />
    );
  }

  // For regular images, add loading state and error handling
  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-[var(--color-subtle)] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[var(--color-rule)] border-t-[var(--color-ink)] rounded-full animate-spin" />
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-[var(--color-subtle)] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 border border-[var(--color-rule)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="type-meta text-[var(--color-muted)]">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading={lazy ? "lazy" : "eager"}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
