"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
  description: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: "/YC voice ai event.JPG",
    alt: "YC Voice AI Event",
    description: "Invited to the Y Combinator X Gemini event",
  },
  {
    src: "/Boston dynamics ceo.png",
    alt: "Boston Dynamics CEO",
    description: "Meeting with Robert Playter, Boston Dynamics CEO",
  },
  {
    src: "/des traynor intercom co founder.png",
    alt: "Des Traynor",
    description: "Meeting with Des Traynor, Intercom Co-founder",
  },
  {
    src: "/cloudflare ceo.JPG",
    alt: "Cloudflare CEO",
    description: "Meeting with Matthew Prince, Cloudflare CEO",
  },
  {
    src: "/web summit ceo paddy cosgrave.png",
    alt: "Paddy Cosgrave",
    description: "Chilling with Web Summit CEO Paddy Cosgrave",
  },
  {
    src: "/Working  with Imogen Heap.jpg",
    alt: "Imogen Heap",
    description: "Working with Imogen Heap",
  },
  {
    src: "/shadowing cristiano Amon.png",
    alt: "Cristiano Amon",
    description: "Shadowing Cristiano Amon, Qualcomm CEO",
  },
  {
    src: "/graduation.JPG",
    alt: "Graduation",
    description: "Graduation",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
        Moments
      </h2>
      
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Images */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center gap-4"
              >
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-3xl"
                    priority={index === 0}
                  />
                </div>
                <div className="w-full px-6 py-4">
                  <p className="text-center text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-primary w-8 h-3"
                  : "bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

