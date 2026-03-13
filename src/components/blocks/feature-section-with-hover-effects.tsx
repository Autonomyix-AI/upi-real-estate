"use client";

import { cn } from "@/lib/utils";
import {
    IconClock24,
    IconShieldCheck,
    IconWorld,
    IconCalendarTime,
} from "@tabler/icons-react";

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: Feature[] = [
    {
        title: "24/7 Support",
        description:
            "We're always available for our expat clients. Round-the-clock assistance whenever you need it.",
        icon: <IconClock24 className="w-8 h-8" />,
    },
    {
        title: "Verified Properties",
        description:
            "Every listing is personally inspected by our team. No surprises, only premium quality.",
        icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
        title: "Expat Specialists",
        description:
            "We understand what international clients need. Tailored service for your unique requirements.",
        icon: <IconWorld className="w-8 h-8" />,
    },
    {
        title: "Flexible Terms",
        description:
            "Short stay or long term, we accommodate you. Lease terms designed around your lifestyle.",
        icon: <IconCalendarTime className="w-8 h-8" />,
    },
];

export function FeaturesSectionWithHoverEffects() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#D4A017] text-sm uppercase tracking-[0.3em] mb-4 block">
                        Why Choose Us
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        The Unique Advantage
                    </h2>
                    <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
                        Trusted by expats and diaspora clients for premium property services
                        in Nairobi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative p-8 rounded-lg border border-[#1e1e1e] bg-[#141414]",
                                "transition-all duration-500 hover:border-[#D4A017]/30",
                                "hover:bg-gradient-to-b hover:from-[#D4A017]/5 hover:to-transparent",
                                "hover:shadow-[0_20px_40px_rgba(212,160,23,0.1)]"
                            )}
                        >
                            {/* Icon */}
                            <div className="text-[#D4A017] mb-6 transition-transform duration-500 group-hover:scale-110">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3
                                className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A017] transition-colors duration-300"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#a0a0a0] text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-3 right-3 w-8 h-[1px] bg-[#D4A017]/50" />
                                <div className="absolute top-3 right-3 w-[1px] h-8 bg-[#D4A017]/50" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
