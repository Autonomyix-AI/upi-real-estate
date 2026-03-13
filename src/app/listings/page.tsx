"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import listings from "@/data/listings.json";

const filters = ["All", "Airbnb", "Long Term"];

export default function ListingsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const containerRef = useScrollReveal();

    const filteredListings =
        activeFilter === "All"
            ? listings
            : listings.filter((listing) => listing.type === activeFilter);

    return (
        <div ref={containerRef} className="pt-28 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="text-[#D4A017] text-sm uppercase tracking-[0.3em] mb-4 block">
                        Our Portfolio
                    </span>
                    <h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Premium Properties
                    </h1>
                    <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
                        Browse our curated collection of luxury rentals in Nairobi&apos;s finest
                        neighbourhoods.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex items-center justify-center gap-3 mb-12 reveal">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider rounded-sm border transition-all duration-300 ${activeFilter === filter
                                    ? "bg-[#D4A017] text-black border-[#D4A017]"
                                    : "bg-transparent text-[#a0a0a0] border-[#2a2a2a] hover:border-[#D4A017]/50 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                    {filteredListings.map((listing) => (
                        <PropertyCard key={listing.id} {...listing} />
                    ))}
                </div>

                {filteredListings.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-[#a0a0a0] text-lg">
                            No properties found for this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
