import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRONOS — Freelance Web Design & Digital Engineering Studio",
  description:
    "A premier monochromatic web design agency engineering high-converting digital products, design systems, and Next.js applications for visionaries.",
  keywords: [
    "Web Design Agency",
    "Freelance Designer",
    "Next.js Developer",
    "Tailwind CSS",
    "Framer Motion",
    "UI/UX Design",
    "Linear Design",
    "Apple Minimalist",
  ],
  authors: [{ name: "KRONOS Studio" }],
  openGraph: {
    title: "KRONOS — Web Design & Digital Engineering Studio",
    description:
      "Crafting world-class digital experiences with Apple-grade precision and Linear-style speed.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
