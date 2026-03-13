import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unique Property Investments | Premium Nairobi Rentals",
  description:
    "Premium rentals and Airbnb properties for expats and diaspora clients in Nairobi's finest neighbourhoods. Luxury living, elevated.",
  keywords: [
    "Nairobi rentals",
    "expat housing Kenya",
    "luxury apartments Nairobi",
    "Airbnb Nairobi",
    "diaspora housing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
