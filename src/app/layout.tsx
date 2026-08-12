import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sri Enviro Engineers | Water & Wastewater Treatment Specialists",
  description:
    "Leading specialists in Water & Wastewater Treatment Industry providing turnkey design, engineering, erection, and commissioning for Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), MBBR, SBR, Chlorination, and AMC services.",
  keywords: [
    "Sri Enviro Engineers",
    "Water Treatment Plant",
    "Wastewater Treatment",
    "STP Plant Hyderabad",
    "ETP Plant Manufacturer",
    "MBBR STP",
    "SBR Sewage Treatment",
    "Chlorination System",
    "Swimming Pool Filtration",
    "Effluent Treatment Engineers"
  ],
  authors: [{ name: "Sri Enviro Engineers" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#f7fafc] text-[#181c1e] font-body antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
