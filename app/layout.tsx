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
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
