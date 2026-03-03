import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "../posts";
import { encodeState } from "../../lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://mermaideditor.lol/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://mermaideditor.lol/blog/${slug}`,
    },
  };
}

function renderContent(content: string) {
  // Simple markdown-ish renderer for our blog content
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = "";
  let codeKey = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("\`\`\`") && !inCodeBlock) {
      inCodeBlock = true;
      codeLang = line.slice(3).trim();
      codeLines = [];
      i++;
      continue;
    }

    if (line.startsWith("\`\`\`") && inCodeBlock) {
      inCodeBlock = false;
      const codeContent = codeLines.join("\n");
      const isMermaid = codeLang === "mermaid" || (!codeLang && /^(graph|flowchart|sequenceDiagram|classDiagram|gantt|stateDiagram|pie|erDiagram|mindmap|gitGraph|timeline|quadrantChart|journey)\b/m.test(codeContent));
      elements.push(
        <div key={`code-${codeKey}`}>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm my-4">
            <code>{codeContent}</code>
          </pre>
          {isMermaid && (
            <a
              href={`/?code=${encodeState(codeContent)}`}
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium mb-4 -mt-2"
            >
              Try in Editor →
            </a>
          )}
        </div>
      );
      codeKey++;
      i++;
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      i++;
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl font-semibold text-gray-800 mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold text-gray-800 mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("| ")) {
      // Table: collect all consecutive | lines
      const tableLines: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith("|")) {
        tableLines.push(lines[j]);
        j++;
      }
      const headerCells = tableLines[0]
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      const bodyRows = tableLines.slice(2).map((row) =>
        row
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
      );
      elements.push(
        <div key={i} className="overflow-x-auto my-4">
          <table className="min-w-full text-sm border border-gray-200 rounded">
            <thead className="bg-gray-50">
              <tr>
                {headerCells.map((c, ci) => (
                  <th
                    key={ci}
                    className="px-4 py-2 text-left font-semibold text-gray-700 border-b"
                  >
                    {c.replace(/\*\*/g, "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? "bg-gray-50" : ""}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-2 text-gray-600 border-b"
                      dangerouslySetInnerHTML={{
                        __html: cell.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      i = j;
      continue;
    } else if (line.startsWith("- **")) {
      // Collect list items
      const items: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith("- ")) {
        items.push(lines[j].slice(2));
        j++;
      }
      elements.push(
        <ul key={i} className="list-disc pl-6 my-3 space-y-1 text-gray-700">
          {items.map((item, ii) => (
            <li
              key={ii}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(
                    /\`(.*?)\`/g,
                    '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$1</code>'
                  ),
              }}
            />
          ))}
        </ul>
      );
      i = j;
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && /^\d+\.\s/.test(lines[j])) {
        items.push(lines[j].replace(/^\d+\.\s/, ""));
        j++;
      }
      elements.push(
        <ol key={i} className="list-decimal pl-6 my-3 space-y-1 text-gray-700">
          {items.map((item, ii) => (
            <li
              key={ii}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(
                    /\`(.*?)\`/g,
                    '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$1</code>'
                  )
                  .replace(
                    /\[(.*?)\]\((.*?)\)/g,
                    '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
                  ),
              }}
            />
          ))}
        </ol>
      );
      i = j;
      continue;
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-700 leading-relaxed my-3"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(
                /\`(.*?)\`/g,
                '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$1</code>'
              )
              .replace(
                /\[(.*?)\]\((.*?)\)/g,
                '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
              ),
          }}
        />
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 font-sans">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline text-sm">
            ← All Articles
          </Link>
        </div>

        <header className="mb-10">
          <time className="text-sm text-gray-400">{post.date}</time>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600">{post.description}</p>
        </header>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
          {renderContent(post.content)}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Try it now in our free Mermaid Live Editor →
          </Link>
        </div>

        <div className="mt-8 mb-4">
          <Link href="/blog" className="text-blue-600 hover:underline text-sm">
            ← All Articles
          </Link>
        </div>
      </article>
    </main>
  );
}
