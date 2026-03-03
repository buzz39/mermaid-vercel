import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mermaid.js Cheat Sheet — Syntax Quick Reference",
  description: "Complete Mermaid.js syntax cheat sheet. Quick reference for flowcharts, sequence diagrams, Gantt charts, class diagrams, ER diagrams, state diagrams, pie charts, mind maps, and git graphs.",
  keywords: ["mermaid cheat sheet", "mermaid syntax reference", "mermaid quick reference", "mermaid.js cheat sheet", "mermaid diagram syntax"],
  alternates: {
    canonical: 'https://mermaideditor.lol/cheat-sheet',
  },
  openGraph: {
    title: "Mermaid.js Cheat Sheet — Syntax Quick Reference",
    description: "Complete Mermaid.js syntax reference with copy-paste examples for all diagram types.",
    type: "website",
    url: 'https://mermaideditor.lol/cheat-sheet',
  },
};

export default function CheatSheetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
