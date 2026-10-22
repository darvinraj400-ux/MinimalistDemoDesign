import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArchImage from "./ArchImage";
import type { ProjectImage } from "../data/projects";

interface ImageViewerProps {
  images: ProjectImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageViewer({ images, initialIndex, isOpen, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goTo = useCallback((dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  }, [images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    switch (e.key) {
      case "Escape":
        onClose();
        break;
      case "ArrowLeft":
        goTo(-1);
        break;
      case "ArrowRight":
        goTo(1);
        break;
    }
  }, [isOpen, onClose, goTo]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? 1 : -1);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 md:px-8 h-14 md:h-16 border-b border-[var(--color-rule)] shrink-0">
        <span className="type-meta text-[var(--color-muted)]">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="touch-target type-meta hover:text-[var(--color-ink)] transition-colors"
          aria-label="Close image viewer"
        >
          Close ✕
        </button>
      </div>

      {/* Image Area */}
      <div
        className="flex-1 relative overflow-hidden flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex items-center justify-center p-5 md:p-12"
          >
            <div className={`max-w-full max-h-full ${
              currentImage.src.startsWith("image/svg") || currentImage.src.startsWith("data:image/svg")
                ? "bg-[var(--color-subtle)] p-4 md:p-8"
                : ""
            }`}>
              <ArchImage
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
                lazy={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => goTo(-1)}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 touch-target w-11 h-11 flex items-center justify-center hover:bg-[var(--color-subtle)] transition-colors"
          aria-label="Previous image"
        >
          <span className="text-xl">←</span>
        </button>
        <button
          onClick={() => goTo(1)}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 touch-target w-11 h-11 flex items-center justify-center hover:bg-[var(--color-subtle)] transition-colors"
          aria-label="Next image"
        >
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Caption */}
      {currentImage.caption && (
        <div className="px-5 md:px-8 py-4 border-t border-[var(--color-rule)] shrink-0">
          <p className="type-meta text-[var(--color-muted)]">{currentImage.caption}</p>
        </div>
      )}

      {/* Thumbnail Strip */}
      <div className="px-5 md:px-8 pb-4 md:pb-6 shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
              className={`shrink-0 w-12 h-12 md:w-16 md:h-16 border transition-colors ${
                i === currentIndex ? "border-[var(--color-ink)]" : "border-[var(--color-rule)]"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <ArchImage src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
