"use client";

import { useState } from "react";

interface InquiryFormProps {
    propertyName?: string;
}

export function InquiryForm({ propertyName }: InquiryFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        property: propertyName || "",
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
                    body: JSON.stringify(formData),
                });
            }
            setStatus("success");
            setFormData({ name: "", phone: "", email: "", property: propertyName || "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="inquiry-name" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                        Name
                    </label>
                    <input
                        id="inquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                        placeholder="Your full name"
                    />
                </div>
                <div>
                    <label htmlFor="inquiry-phone" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                        Phone
                    </label>
                    <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                        placeholder="+254 700 000 000"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="inquiry-email" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                    Email
                </label>
                <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                    placeholder="you@email.com"
                />
            </div>

            <div>
                <label htmlFor="inquiry-property" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                    Property Interest
                </label>
                <input
                    id="inquiry-property"
                    type="text"
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300"
                    placeholder="Property name or type"
                />
            </div>

            <div>
                <label htmlFor="inquiry-message" className="block text-sm text-[#a0a0a0] mb-2 uppercase tracking-wider">
                    Message
                </label>
                <textarea
                    id="inquiry-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#D4A017] transition-colors duration-300 resize-none"
                    placeholder="Tell us what you're looking for..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#D4A017] text-black font-semibold text-sm uppercase tracking-widest py-4 rounded-sm hover:bg-[#e8b82e] hover:shadow-[0_0_30px_rgba(212,160,23,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading"
                    ? "Sending..."
                    : status === "success"
                        ? "✓ Message Sent"
                        : status === "error"
                            ? "Failed — Try Again"
                            : "Send Inquiry"}
            </button>

            {status === "success" && (
                <p className="text-[#D4A017] text-sm text-center">
                    Thank you! We&apos;ll get back to you within 24 hours.
                </p>
            )}
        </form>
    );
}
