import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Mermaid Live Editor Blog",
    default: "Blog — Mermaid.js Tutorials, Guides & Tips",
  },
  description:
    "Learn Mermaid.js with tutorials, examples, and best practices. Create flowcharts, sequence diagrams, Gantt charts, ER diagrams, and more.",
  keywords: [
    "mermaid.js tutorials",
    "mermaid diagram guide",
    "mermaid examples",
    "diagrams as code",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
