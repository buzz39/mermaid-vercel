import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Mermaid Live Editor',
  description: 'Get in touch with the team behind Mermaid Live Editor. Report bugs, suggest features, or just say hello.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white p-8 font-sans text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Have a question, found a bug, or want to suggest a feature? We'd love to hear from you.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">📧 Email</h3>
              <p className="text-gray-600 mb-2">For general enquiries, bug reports, or feature requests:</p>
              <a
                href="mailto:hello@gaganthakur.com"
                className="text-blue-600 hover:underline font-medium"
              >
                hello@gaganthakur.com
              </a>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">💼 LinkedIn</h3>
              <p className="text-gray-600 mb-2">Connect with the creator and maintainer:</p>
              <a
                href="https://www.linkedin.com/in/gaganthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                linkedin.com/in/gaganthakur
              </a>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">🐛 Report a Bug</h3>
              <p className="text-gray-600 mb-2">Found something broken? Open an issue on GitHub:</p>
              <a
                href="https://github.com/buzz39/mermaid-vercel/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                github.com/buzz39/mermaid-vercel/issues
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">How do I report a bug?</h3>
              <p className="text-gray-600">
                Please email us at <a href="mailto:hello@gaganthakur.com" className="text-blue-600 hover:underline">hello@gaganthakur.com</a> with a description of the issue and steps to reproduce it, or open a GitHub issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can I request a new diagram type?</h3>
              <p className="text-gray-600">
                Absolutely! Mermaid Live Editor is built on the open-source Mermaid.js library. If a diagram type is supported by Mermaid.js, we can add it. Send us your suggestion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Is there an API or embed option?</h3>
              <p className="text-gray-600">
                Not currently, but it's on our roadmap. Get in touch if this is something you need.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Editor</Link>
        </div>
      </div>
    </main>
  );
}
