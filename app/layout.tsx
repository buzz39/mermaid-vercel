import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
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
  title: "Mermaid Live Editor - Render & Export Mermaid Diagrams",
  description: "Free online Mermaid editor. Render Mermaid charts, diagrams, and graphs instantly. Export to SVG and PNG. Supports Flowchart, Sequence, Gantt, and more.",
  keywords: ["mermaid", "editor", "diagram", "chart", "flowchart", "sequence diagram", "gantt", "live editor", "svg", "png"],
  openGraph: {
    title: "Mermaid Live Editor",
    description: "Render and export Mermaid diagrams instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mermaid Live Editor",
    "operatingSystem": "Web",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A free online editor to generate diagrams and charts from text using Mermaid.js syntax.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {/* AdSense Script Placeholder - Replace client ID when approved */}
          <Script
             async
             src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXX"
             crossOrigin="anonymous"
             strategy="lazyOnload"
          />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
