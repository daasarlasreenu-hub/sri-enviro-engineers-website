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
  metadataBase: new URL("https://sri-enviro-engineers-website.vercel.app"),
  title: "Sri Enviro Engineers | Sewage & Effluent Treatment Plant Manufacturers Hyderabad",
  description:
    "Sri Enviro Engineers is a premier manufacturer and turnkey EPC specialist in Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), MBBR, SBR, Chlorination, & Swimming Pool Filtration in Hyderabad, Telangana.",
  keywords: [
    "Sri Enviro Engineers",
    "Sewage Treatment Plant Manufacturer Hyderabad",
    "STP Plant Telangana",
    "ETP Plant Manufacturer India",
    "Effluent Treatment Plants Hyderabad",
    "MBBR Sewage Treatment Plant",
    "SBR Technology STP",
    "STP Maintenance AMC Hyderabad",
    "Water Treatment Plant Dilsukhnagar",
    "Chlorination Systems Hyderabad",
    "Swimming Pool Filtration Equipment"
  ],
  authors: [{ name: "Sri Enviro Engineers" }],
  verification: {
    google: [
      "nsf_i-EYvgrhB8SLQrv-q884Qf53Gmj1rZwaGNK3Dgk",
      "P7GptsTTWFwS6sqJcGW3JtADJ45AbUV6-gVDGh9wi64"
    ],
  },
  openGraph: {
    title: "Sri Enviro Engineers | Sewage & Effluent Treatment Plants",
    description:
      "Leading Specialists in Water & Wastewater Treatment. Turnkey EPC, MBBR, SBR, Chlorination, and AMC services in Hyderabad.",
    url: "https://sri-enviro-engineers-website.vercel.app",
    siteName: "Sri Enviro Engineers",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Enviro Engineers",
    "image": "https://sri-enviro-engineers-website.vercel.app/images/hero_water_plant.png",
    "@id": "https://sri-enviro-engineers-website.vercel.app",
    "url": "https://sri-enviro-engineers-website.vercel.app",
    "telephone": "+919676909782",
    "email": "daasarlasreenu@gmail.com",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "# 16-11-741/C/1/1/A/B, Opp: Asian Hospital, Dilsukhnagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500060",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3688,
      "longitude": 78.5247
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://github.com/daasarlasreenu-hub/sri-enviro-engineers-website"
    ],
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Telangana & Andhra Pradesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wastewater Treatment Systems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewage Treatment Plant (STP) Design & Erection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Effluent Treatment Plant (ETP) Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MBBR & SBR Biological Water Treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "STP & ETP Operation & Maintenance (AMC)"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="nsf_i-EYvgrhB8SLQrv-q884Qf53Gmj1rZwaGNK3Dgk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f7fafc] text-[#181c1e] font-body antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
