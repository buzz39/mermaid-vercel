import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Mermaid Live Editor</h1>

        <section className="mb-12">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Mermaid Live Editor is a powerful, free online tool that lets you create complex diagrams using simple text definitions. It is built on top of the open-source <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mermaid.js</a> library, allowing you to generate flowcharts, sequence diagrams, gantt charts, and more without needing any design skills.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Start Creating Now
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Use Mermaid Live Editor?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">🚀 Text-to-Diagram</h3>
              <p className="text-gray-600">Write code, get diagrams. It's that simple. Version control your diagrams just like your code.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-purple-700">🔒 Privacy First</h3>
              <p className="text-gray-600">Your diagrams are rendered locally in your browser. We don't store your sensitive data on our servers.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-green-700">📤 Export Options</h3>
              <p className="text-gray-600">Download your creations as high-quality SVG or PNG images for use in documents and presentations.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-orange-700">🔗 Easy Sharing</h3>
              <p className="text-gray-600">Share your diagrams instantly with a unique URL. Collaborate with your team effortlessly.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Supported Diagram Types</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Flowchart</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Sequence Diagram</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Gantt Chart</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Class Diagram</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>State Diagram</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Pie Chart</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Entity Relationship</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>User Journey</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Git Graph</li>
          </ul>
        </section>

        <section className="mb-8">
           <h2 className="text-2xl font-bold mb-4 text-gray-800">FAQ</h2>
           <div className="space-y-4">
             <div>
                <h3 className="font-semibold text-gray-900">Is it free?</h3>
                <p className="text-gray-600">Yes, Mermaid Live Editor is 100% free to use.</p>
             </div>
             <div>
                <h3 className="font-semibold text-gray-900">Do you save my data?</h3>
                <p className="text-gray-600">No. All rendering happens in your browser. When you create a share link, the diagram code is encoded into the URL itself.</p>
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
