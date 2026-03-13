"use client";

import { TestimonialsWithMarquee } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
    {
        name: "James Whitfield",
        handle: "British Expat, Westlands",
        avatar:
            "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop",
        text: "Unique Property made my move to Nairobi completely seamless. Found my apartment within 3 days and the support has been incredible ever since.",
    },
    {
        name: "David Omondi",
        handle: "Kenyan Diaspora, Canada",
        avatar:
            "https://plus.unsplash.com/premium_photo-1726768854379-105f9aeef18d?q=80&w=1023&auto=format&fit=crop",
        text: "As someone returning from abroad I needed a place I could trust. The team handled everything remotely before I even landed. Truly professional.",
    },
    {
        name: "Amara Nwosu",
        handle: "Nigerian Expat, Kilimani",
        avatar:
            "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=687&auto=format&fit=crop",
        text: "The apartment was exactly as listed, spotless on arrival, and the team has been responsive to every request. Best rental experience in Nairobi.",
    },
];

export default function TestimonialsPage() {
    return (
        <div className="pt-28 pb-24 min-h-screen">
            {/* Header */}
            <div className="text-center mb-8 px-6">
                <span className="text-[#D4A017] text-sm uppercase tracking-[0.3em] mb-4 block">
                    Client Stories
                </span>
                <h1
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    What Our Clients Say
                </h1>
                <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
                    Trusted by expats and diaspora clients across Nairobi&apos;s finest
                    neighbourhoods.
                </p>
            </div>

            {/* Marquee Testimonials */}
            <TestimonialsWithMarquee
                title=""
                description=""
                testimonials={testimonials}
            />

            {/* Static Testimonials */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-8 hover:border-[#D4A017]/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4A017]/30">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p
                                        className="text-white font-semibold"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {testimonial.name}
                                    </p>
                                    <p className="text-[#D4A017] text-sm">{testimonial.handle}</p>
                                </div>
                            </div>
                            <p className="text-[#a0a0a0] leading-relaxed italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            {/* Star Rating */}
                            <div className="flex gap-1 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-[#D4A017]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
