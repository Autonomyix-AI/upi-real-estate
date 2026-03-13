"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-28">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <Image
                            src="/logo-transparent.png"
                            alt="Unique Property Investments"
                            width={300}
                            height={120}
                            className="w-48 md:w-56 h-auto object-contain"
                            priority
                            quality={100}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-1",
                                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#D4A017] after:transition-all after:duration-300",
                                    pathname === link.href
                                        ? "text-[#D4A017] after:w-full"
                                        : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={cn(
                                "w-6 h-0.5 bg-white transition-all duration-300",
                                isOpen && "rotate-45 translate-y-2"
                            )}
                        />
                        <span
                            className={cn(
                                "w-6 h-0.5 bg-white transition-all duration-300",
                                isOpen && "opacity-0"
                            )}
                        />
                        <span
                            className={cn(
                                "w-6 h-0.5 bg-white transition-all duration-300",
                                isOpen && "-rotate-45 -translate-y-2"
                            )}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8",
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "text-2xl font-heading tracking-widest uppercase transition-colors duration-300",
                            pathname === link.href
                                ? "text-[#D4A017]"
                                : "text-white/70 hover:text-[#D4A017]"
                        )}
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
