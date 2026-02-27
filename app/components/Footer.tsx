import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 mb-2">
                💡 <strong>Tip:</strong> For best results, paste only Mermaid blocks or wrap diagrams in <code className="bg-gray-100 px-2 py-1 rounded text-xs">```mermaid```</code> fences.
              </p>
              <p className="text-xs text-gray-400">
                Built with Next.js and Mermaid.js • Ready for Vercel deployment
              </p>
            </div>

            <div className="flex gap-4 text-sm text-gray-500">
                <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
            </div>
        </div>
    </footer>
  );
}
