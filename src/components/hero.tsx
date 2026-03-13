"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1741991109902-98bf764fb35d?q=80&w=1173&auto=format&fit=crop"
                alt="Luxury Nairobi property"
                fill
                className="object-cover"
                priority
                quality={90}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0a0a]" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <h1
                    className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Nairobi Living,{" "}
                    <span className="text-gold-gradient">Elevated.</span>
                </h1>

                <p
                    className={`text-lg md:text-xl text-[#a0a0a0] max-w-2xl mb-10 leading-relaxed transition-all duration-1000 delay-300 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    Premium rentals and Airbnb properties for expats and diaspora in
                    Nairobi&apos;s finest neighbourhoods.
                </p>

                <Link
                    href="/listings"
                    className={`group relative inline-flex items-center gap-3 px-10 py-4 bg-[#D4A017] text-black font-semibold text-sm uppercase tracking-widest rounded-sm overflow-hidden transition-all duration-1000 delay-500 hover:bg-[#e8b82e] hover:shadow-[0_0_40px_rgba(212,160,23,0.3)] ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="relative z-10">Explore Properties</span>
                    <svg
                        className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-3 bg-[#D4A017] rounded-full" />
                </div>
            </div>
        </section>
    );
}
