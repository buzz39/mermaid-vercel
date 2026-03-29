import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import FeedbackWidget from './components/FeedbackWidget';
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
  metadataBase: new URL('https://mermaideditor.lol'),
  title: "Mermaid Live Editor — Free Online Diagram Tool | Export PNG & SVG",
  description: "Create flowcharts, sequence diagrams, class diagrams, and more with our free Mermaid live editor. Real-time preview, export to PNG/SVG, dark mode. No signup required.",
  keywords: ["mermaid live editor", "mermaid editor", "diagram", "chart", "flowchart", "sequence diagram", "gantt", "online diagram tool", "svg", "png", "free mermaid editor"],
  authors: [{ name: "Gagan Thakur", url: "https://www.linkedin.com/in/gaganthakur" }],
  creator: "Gagan Thakur",
  alternates: {
    canonical: 'https://mermaideditor.lol',
  },
  openGraph: {
    title: "Mermaid Live Editor — Free Diagram Tool",
    description: "Create Mermaid diagrams online. Flowcharts, sequence diagrams, ER diagrams & more. Export to PNG, SVG. Free, no signup.",
    type: "website",
    url: 'https://mermaideditor.lol',
    siteName: 'Mermaid Live Editor',
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
    "author": {
      "@type": "Person",
      "name": "Gagan Thakur",
      "url": "https://www.linkedin.com/in/gaganthakur"
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
          {/* Replace with Bing Webmaster Tools verification code */}
          <meta name="msvalidate.01" content="E8526A596FF6783F9177B38EF141F88C" />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4PTPSJ13E0" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4PTPSJ13E0');`}
          </Script>
          <script
             async
             src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2892900713777311"
             crossOrigin="anonymous"
          />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}
