import type { Metadata } from "next";
import { Inter, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "SUJITH L B | AI & ML Engineer & Full-Stack Developer",
  description:
    "Official portfolio of Sujith L B — AI/ML Engineer & Full-Stack Developer. Specialized in scalable AI architectures, computer vision, deep learning, and high-performance applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-white text-[#222222] antialiased selection:bg-[#222222] selection:text-white min-h-screen flex flex-col relative">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
