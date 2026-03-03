import Link from "next/link";
import { posts } from "./posts";

export default function BlogIndex() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Editor
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Mermaid.js Blog
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Tutorials, guides, and best practices for creating diagrams as code.
        </p>

        <div className="grid gap-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all"
            >
              <time className="text-sm text-gray-400">{post.date}</time>
              <h2 className="text-xl font-semibold text-gray-800 mt-1 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Try the Mermaid Live Editor →
          </Link>
        </div>
      </div>
    </main>
  );
}
