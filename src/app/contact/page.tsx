"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactPage() {
    const containerRef = useScrollReveal();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
            if (webhookUrl && webhookUrl !== "https://your-webhook-url.com") {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...formData, type: "contact" }),
                });
            }
            setStatus("success");
            setFormData({ name: "", phone: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <div ref={containerRef} className="pt-28 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="text-[#D4A017] text-sm uppercase tracking-[0.3em] mb-4 block">
                        Get In Touch
                    </span>
                    <h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Contact Us
                    </h1>
                    <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
                        Ready to find your perfect property in Nairobi? Our team is here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="reveal">
                        <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-8 md:p-10">
                            <h2
                                className="text-2xl font-bold text-white mb-6"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                                            Phone
                                        </label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                                            placeholder="+254 700 000 000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300 resize-none"
                                        placeholder="Tell us what you're looking for..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-[#D4A017] text-black font-semibold text-sm uppercase tracking-widest py-4 rounded-sm hover:bg-[#e8b82e] hover:shadow-[0_0_30px_rgba(212,160,23,0.2)] transition-all duration-300 disabled:opacity-50"
                                >
                                    {status === "loading"
                                        ? "Sending..."
                                        : status === "success"
                                            ? "✓ Message Sent"
                                            : status === "error"
                                                ? "Failed — Try Again"
                                                : "Send Message"}
                                </button>

                                {status === "success" && (
                                    <p className="text-[#D4A017] text-sm text-center">
                                        Thank you! We&apos;ll respond within 24 hours.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Contact Info + Map */}
                    <div className="space-y-8 reveal">
                        {/* Contact Details */}
                        <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-8 md:p-10">
                            <h2
                                className="text-2xl font-bold text-white mb-8"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mb-1">Phone</p>
                                        <p className="text-white font-medium">+254 700 000 000</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-white font-medium">info@uniqueproperty.co.ke</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center shrink-0">
                                        <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mb-1">Office</p>
                                        <p className="text-white font-medium">Nairobi, Kenya</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743!2d36.68258!3d-1.30326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1"
                                width="100%"
                                height="300"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Nairobi Office Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
