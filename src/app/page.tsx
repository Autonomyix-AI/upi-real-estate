"use client";

import { Hero } from "@/components/hero";
import { PropertyCard } from "@/components/property-card";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import listings from "@/data/listings.json";

export default function HomePage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-[#D4A017] text-sm uppercase tracking-[0.3em] mb-4 block">
              Featured Properties
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Handpicked For You
            </h2>
            <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
              Discover our curated selection of premium properties in Nairobi&apos;s
              most sought-after neighbourhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {listings.slice(0, 3).map((listing) => (
              <PropertyCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="reveal">
        <FeaturesSectionWithHoverEffects />
      </div>

      {/* CTA Section */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-16 rounded-lg border border-[#1e1e1e] bg-gradient-to-b from-[#141414] to-[#0a0a0a] overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-6 left-6 w-12 h-[1px] bg-[#D4A017]/30" />
              <div className="absolute top-6 left-6 w-[1px] h-12 bg-[#D4A017]/30" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-6 right-6 w-12 h-[1px] bg-[#D4A017]/30" />
              <div className="absolute bottom-6 right-6 w-[1px] h-12 bg-[#D4A017]/30" />
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8 max-w-xl mx-auto">
              Let our team of expat specialists help you find the ideal property
              in Nairobi.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#D4A017] text-black font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-[#e8b82e] hover:shadow-[0_0_40px_rgba(212,160,23,0.3)] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
