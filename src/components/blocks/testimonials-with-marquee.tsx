"use client";

import { TestimonialCard } from "@/components/ui/testimonial-card";
import { cn } from "@/lib/utils";

interface Testimonial {
    name: string;
    handle: string;
    avatar: string;
    text: string;
}

interface TestimonialsWithMarqueeProps {
    title: string;
    description: string;
    testimonials: Testimonial[];
}

function Marquee({
    children,
    className,
    reverse = false,
    duration = "40s",
}: {
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
    duration?: string;
}) {
    return (
        <div
            className={cn("flex overflow-hidden group", className)}
            style={
                {
                    "--duration": duration,
                    "--gap": "1.5rem",
                    maskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                } as React.CSSProperties
            }
        >
            <div
                className={cn(
                    "flex shrink-0 gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]",
                    reverse && "[animation-direction:reverse]"
                )}
            >
                {children}
            </div>
            <div
                className={cn(
                    "flex shrink-0 gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]",
                    reverse && "[animation-direction:reverse]"
                )}
                aria-hidden
            >
                {children}
            </div>
        </div>
    );
}

export function TestimonialsWithMarquee({
    title,
    description,
    testimonials,
}: TestimonialsWithMarqueeProps) {
    return (
        <section className="py-24">
            <div className="text-center mb-16 px-6">
                <h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    {title}
                </h2>
                <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <Marquee duration="30s">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </Marquee>

            <div className="mt-8">
                <Marquee duration="35s" reverse>
                    {[...testimonials].reverse().map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
