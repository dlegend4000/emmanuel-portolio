"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/hackeurope.jpg",
    alt: "Hackeurope Grand Winner",
  },
  {
    src: "/YC voice ai event.JPG",
    alt: "Invited to the Y Combinator office",
  },
  {
    src: "/Boston dynamics ceo.png",
    alt: "Meeting with Robert Playter, Boston Dynamics CEO",
  },
  {
    src: "/des traynor intercom co founder.png",
    alt: "Meeting with Des Traynor, Intercom Co-founder",
  },
  {
    src: "/cloudflare ceo.JPG",
    alt: "Meeting with Matthew Prince, Cloudflare CEO",
  },
  {
    src: "/web summit ceo paddy cosgrave.png",
    alt: "Chilling with Paddy Cosgrave",
  },
  {
    src: "/Working  with Imogen Heap.jpg",
    alt: "Working with Imogen Heap",
  },
  {
    src: "/shadowing cristiano Amon.png",
    alt: "Shadowing Cristiano Amon, Qualcomm CEO",
  },
  {
    src: "/graduation.JPG",
    alt: "Graduation",
  },
];

export default function CoverflowGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );
  }, []);

  // Auto-rotate when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  const getItemStyle = (index: number) => {
    const diff = index - activeIndex;
    const absD = Math.abs(diff);
    const translateX = diff * 100;
    const translateZ = -absD * 80;
    const rotateY = diff * -35;
    const zIndex = galleryImages.length - absD;
    const opacity = absD > 2 ? 0.3 : 1 - absD * 0.2;
    const scale = absD > 2 ? 0.7 : 1 - absD * 0.1;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section className="pt-8">
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-gray-200/30 isolate"
        style={{ aspectRatio: "4 / 3", background: "var(--gray-50)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gallery label */}
        <div
          className={`absolute top-2 left-2 z-20 flex items-center gap-2 transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="inline-flex items-center rounded-md border border-gray-600/10 bg-white/70 px-1.5 py-0.5 text-xs text-gray-800 backdrop-blur-sm">
            Moments
          </span>
        </div>

        {/* Navigation buttons */}
        <div
          className={`absolute bottom-2 left-2 z-20 flex items-center gap-1 transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="button"
            aria-label="Previous image"
            onClick={handlePrev}
            className="inline-flex px-2 py-1 items-center justify-center rounded-md border border-gray-600/10 bg-white/70 text-xs text-gray-800 hover:text-gray-900 backdrop-blur-sm hover:bg-white hover:border-gray-600/30 transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={handleNext}
            className="inline-flex px-2 py-1 items-center justify-center rounded-md border border-gray-600/10 bg-white/70 text-xs text-gray-800 hover:text-gray-900 backdrop-blur-sm hover:bg-white hover:border-gray-600/30 transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicator */}
        <div
          className={`absolute bottom-2 right-2 z-20 flex items-center gap-1 transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-gray-800 w-4 h-1.5"
                  : "bg-gray-400 w-1.5 h-1.5 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Coverflow items */}
        <div className="coverflow-container">
          <div className="coverflow-track">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="coverflow-item"
                style={getItemStyle(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveIndex(index);
                }}
                role="button"
                tabIndex={0}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={140}
                  height={140}
                  className="w-full h-full object-cover"
                  loading={index === activeIndex ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Caption for active image */}
      <p className="mt-2 text-xs text-center text-gray-500 italic font-sentient transition-all duration-300">
        {galleryImages[activeIndex].alt}
      </p>
    </section>
  );
}
