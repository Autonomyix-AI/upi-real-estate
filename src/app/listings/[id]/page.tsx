import Image from "next/image";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";
import listings from "@/data/listings.json";

interface PropertyPageProps {
    params: Promise<{ id: string }>;
}

// Amenity icon mapping
const amenityIcons: Record<string, React.ReactNode> = {
    WiFi: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
        </svg>
    ),
    Parking: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    Pool: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    ),
    Gym: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
    ),
    Security: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    "Backup Power": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    Rooftop: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    Concierge: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    ),
    Garden: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    ),
    "Staff Quarters": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
};

export async function generateStaticParams() {
    return listings.map((listing) => ({
        id: listing.id,
    }));
}

export async function generateMetadata({ params }: PropertyPageProps) {
    const { id } = await params;
    const listing = listings.find((l) => l.id === id);
    if (!listing) return { title: "Property Not Found" };

    return {
        title: `${listing.name} | Unique Property Investments`,
        description: listing.description,
    };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
    const { id } = await params;
    const listing = listings.find((l) => l.id === id);

    if (!listing) {
        notFound();
    }

    return (
        <div className="pt-28 min-h-screen">
            {/* Hero Image */}
            <div className="relative aspect-video md:aspect-[21/9] w-full max-w-[1600px] mx-auto">
                <Image
                    src={listing.image}
                    alt={listing.name}
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-8 right-8">
                    <span className="bg-[#D4A017] text-black text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-sm shadow-lg">
                        {listing.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 md:-mt-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Header */}
                        <div className="mb-8">
                            <h1
                                className="text-4xl md:text-5xl font-bold text-white mb-3"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {listing.name}
                            </h1>
                            <div className="flex items-center gap-4 flex-wrap">
                                <p className="text-[#a0a0a0] flex items-center gap-1.5">
                                    <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {listing.location}
                                </p>
                                <span className="text-[#D4A017] text-2xl font-bold">
                                    {listing.price}
                                </span>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-5 text-center">
                                <p className="text-[#D4A017] text-2xl font-bold">{listing.bedrooms}</p>
                                <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mt-1">Bedrooms</p>
                            </div>
                            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-5 text-center">
                                <p className="text-[#D4A017] text-2xl font-bold">{listing.bathrooms}</p>
                                <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mt-1">Bathrooms</p>
                            </div>
                            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-5 text-center">
                                <p className="text-[#D4A017] text-2xl font-bold">{listing.type === "Airbnb" ? "Short" : "Long"}</p>
                                <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mt-1">Term</p>
                            </div>
                            <div className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-5 text-center">
                                <p className="text-[#D4A017] text-2xl font-bold">{listing.amenities.length}</p>
                                <p className="text-[#a0a0a0] text-sm uppercase tracking-wider mt-1">Amenities</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <h2
                                className="text-2xl font-bold text-white mb-4"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                About This Property
                            </h2>
                            <p className="text-[#a0a0a0] leading-relaxed text-lg">
                                {listing.description}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="mb-10">
                            <h2
                                className="text-2xl font-bold text-white mb-6"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Amenities
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {listing.amenities.map((amenity) => (
                                    <div
                                        key={amenity}
                                        className="flex items-center gap-3 p-4 bg-[#141414] border border-[#1e1e1e] rounded-lg hover:border-[#D4A017]/30 transition-colors duration-300"
                                    >
                                        <span className="text-[#D4A017]">
                                            {amenityIcons[amenity] || (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </span>
                                        <span className="text-white text-sm">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Inquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-[#141414] border border-[#1e1e1e] rounded-lg p-8">
                            <h3
                                className="text-xl font-bold text-white mb-2"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Interested?
                            </h3>
                            <p className="text-[#a0a0a0] text-sm mb-6">
                                Fill in your details and we&apos;ll get back to you within 24 hours.
                            </p>
                            <InquiryForm propertyName={listing.name} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Spacer */}
            <div className="h-24" />
        </div>
    );
}
