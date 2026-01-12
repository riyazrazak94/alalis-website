"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const SLIDES = [
  {
    id: 1,
    image: "/images/qatarhero.png", // Qatar Skyline - Local image
    title: "Building Qatar's Future",
    subtitle: "Your Trusted Partner for Construction Materials & Electrical Supplies",
    highlight: "8+ Years of Excellence",
    align: "center"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", // Electrical
    title: "Premium Electrical Supplies",
    subtitle: "Complete range of electrical materials for residential and commercial projects",
    highlight: "Wide Selection",
    align: "left"
  },
  {
    id: 3,
    image: "/images/pprpvchero.png", // Pipes/Industrial - Local image
    title: "PVC & PPR Piping Systems",
    subtitle: "Complete plumbing solutions for residential and commercial projects",
    highlight: "High Quality Materials",
    align: "left"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop", // Power Tools
    title: "Professional Power Tools",
    subtitle: "Equip yourself with the best tools from DeWalt, Makita, and Hilti",
    highlight: "Industrial Grade",
    align: "left"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // Construction/Ladders
    title: "Hardware & Safety Equipment",
    subtitle: "Everything you need for a safe and efficient construction site",
    highlight: "Safety First",
    align: "left"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[550px] md:h-[500px] lg:h-[600px] bg-slate-900 overflow-hidden group">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-10000 ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
              priority={index === 0}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl mx-auto text-center">
              {/* Highlight Badge */}
              <div 
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-6 transform transition-all duration-700 delay-100 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
                <span className="text-white font-medium tracking-wide">{slide.highlight}</span>
              </div>

              {/* Title */}
              <h1 
                className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight transform transition-all duration-700 delay-200 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p 
                className={`text-base md:text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto transform transition-all duration-700 delay-300 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                {slide.subtitle}
              </p>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transform transition-all duration-700 delay-400 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 text-sm sm:text-base"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello! I'm interested in ${slide.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Left Side */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Navigation Arrows - Right Side */}
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Indicators - Centered Bottom */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-12 bg-[#f97316]" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
