import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
    id: string;
    name: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    type: string;
    image: string;
}

export function PropertyCard({
    id,
    name,
    location,
    price,
    bedrooms,
    bathrooms,
    type,
    image,
}: PropertyCardProps) {
    return (
        <Link href={`/listings/${id}`} className="group block">
            <div className="card-hover bg-[#141414] rounded-lg overflow-hidden border border-[#1e1e1e]">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                    {/* Type Badge */}
                    <span className="absolute top-4 right-4 bg-[#D4A017]/90 text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm backdrop-blur-sm">
                        {type}
                    </span>
                </div>

                {/* Details */}
                <div className="p-6">
                    <h3
                        className="text-xl font-bold text-white mb-1 group-hover:text-[#D4A017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {name}
                    </h3>

                    <p className="text-[#a0a0a0] text-sm mb-4 flex items-center gap-1.5">
                        <svg
                            className="w-4 h-4 text-[#D4A017]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        {location}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-[#a0a0a0] mb-5">
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            {bedrooms} Beds
                        </span>
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            {bathrooms} Baths
                        </span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#1e1e1e]">
                        <span className="text-[#D4A017] font-bold text-lg">{price}</span>
                        <span className="text-sm text-white/60 group-hover:text-[#D4A017] transition-colors duration-300 flex items-center gap-1">
                            View Property
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
