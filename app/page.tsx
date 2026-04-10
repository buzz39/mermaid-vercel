"use client";

import React, { useEffect, useState } from 'react';
import type { MermaidConfig } from 'mermaid';
import { extractMermaidBlocks, decodeState } from './lib/utils';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import MermaidRenderer from './components/MermaidRenderer';
import ErrorBoundary from './components/ErrorBoundary';
import AdUnit from './components/AdUnit';
import Footer from './components/Footer';

// Initialize mermaid once
if (typeof window !== 'undefined') {
  // We use require inside a check to avoid any possible bundler hoisting issues that might trigger before 'window' check
  // However, dynamic import is cleaner.
  import('mermaid').then(m => {
    m.default.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
  }).catch(e => console.error("Failed to load mermaid", e));
}

export default function MermaidReaderApp() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState(`graph TD\nA[Start] --> B{Is it ok?}\nB -- Yes --> C[Do work]\nB -- No --> D[Fix it]\nC --> E[Done]\nD --> B`);
  const [theme, setTheme] = useState('default');
  const [diagrams, setDiagrams] = useState<string[]>([]);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Decode URL state
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        if (code) {
            const decoded = decodeState(code);
            if (decoded) {
                setText(decoded);
                // Auto-render if loaded from share
                const blocks = extractMermaidBlocks(decoded);
                if (blocks.length === 0 && decoded.trim()) {
                    setDiagrams([decoded.trim()]);
                } else {
                    setDiagrams(blocks);
                }
                setHasRendered(true);
            }
        }
    }
  }, []);

  // Re-initialize mermaid when theme changes
  useEffect(() => {
    if (mounted) {
      (async () => {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({ startOnLoad: false, theme: theme as MermaidConfig['theme'], securityLevel: 'loose' });
      })();
    }
  }, [theme, mounted]);

  const handleRender = () => {
    const blocks = extractMermaidBlocks(text);
    if (blocks.length === 0 && text.trim()) {
        // If no blocks found but text exists, treat the whole text as one block
        setDiagrams([text.trim()]);
    } else {
        setDiagrams(blocks);
    }
    setHasRendered(true);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mermaid Live Editor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your Mermaid diagrams into beautiful visuals. Paste code, render, and download as SVG or PNG.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2 space-y-6">
              <Editor text={text} setText={setText} />

              <Toolbar
                theme={theme}
                setTheme={setTheme}
                onTextChange={setText}
                onRender={handleRender}
                text={text}
              />
            </div>

            {/* Side Panel (Instructions/Info) - Replaces Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Instructions</h3>
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 space-y-2">
                <p>1. Paste your Mermaid code or load a file.</p>
                <p>2. Select a theme.</p>
                <p>3. Click <strong>Render</strong>.</p>
                <p>4. Download SVG or PNG for each diagram.</p>
              </div>
              <div className="text-xs text-gray-500 mt-4">
                Supported diagrams: Flowchart, Sequence, Gantt, Class, State, Pie, and more.
              </div>

              {/* Ad Unit in Sidebar */}
              <div className="mt-8">
                  <AdUnit slotId="sidebar-ad-1" />
              </div>
            </div>
          </div>

          {/* Rendered Diagrams */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Rendered Diagrams
            </h2>

            <div className="space-y-8">
              {!hasRendered && diagrams.length === 0 && (
                 <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500 text-lg">No diagrams rendered yet</p>
                  <p className="text-gray-400 text-sm mt-2">Paste your Mermaid code and click Render to get started</p>
                </div>
              )}

              {diagrams.map((code, idx) => (
                <ErrorBoundary key={`${idx}-${theme}-${code.length}`}>
                  <MermaidRenderer
                      code={code}
                      theme={theme}
                      index={idx}
                  />
                </ErrorBoundary>
              ))}

              {/* Ad Unit after diagrams */}
              {hasRendered && <AdUnit slotId="post-render-ad" responsive={true} />}
            </div>
          </section>

          {/* Editorial Content */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Mermaid.js?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mermaid.js</a> is an open-source JavaScript library that generates diagrams and charts from simple text definitions. Instead of dragging shapes around in a design tool, you write human-readable code — and Mermaid turns it into professional diagrams instantly.
              </p>
              <p>
                It was created to make documentation easier for developers and teams who already work in text-based environments like Markdown, Git, and code editors. Whether you need a quick flowchart for a README or a detailed sequence diagram for an architecture review, Mermaid handles it all.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Why Use an Online Mermaid Editor?</h3>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                While Mermaid.js can be used in many environments — GitHub Markdown, Notion, VS Code extensions — having a dedicated live editor offers key advantages:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Instant preview:</strong> See your diagram update as you type, catching syntax errors immediately.</li>
                <li><strong>Export options:</strong> Download diagrams as high-quality SVG or PNG files for presentations, documentation, or design tools.</li>
                <li><strong>Share with a link:</strong> Your diagram code is encoded in the URL — share it with teammates without any accounts or sign-ups.</li>
                <li><strong>No installation needed:</strong> Works entirely in your browser. No dependencies, no setup, no accounts.</li>
                <li><strong>Theme support:</strong> Switch between default, dark, forest, and neutral themes to match your project's style.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Diagram Types You Can Create</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Flowcharts', desc: 'Visualize processes, decision trees, and workflows with nodes and edges.' },
                { title: 'Sequence Diagrams', desc: 'Show interactions between systems, APIs, or users over time.' },
                { title: 'Gantt Charts', desc: 'Plan project timelines, milestones, and task dependencies.' },
                { title: 'Class Diagrams', desc: 'Document object-oriented designs with classes, methods, and relationships.' },
                { title: 'State Diagrams', desc: 'Model state machines and lifecycle transitions for your applications.' },
                { title: 'Entity Relationship', desc: 'Design database schemas with entities, attributes, and relationships.' },
                { title: 'Pie Charts', desc: 'Create simple pie charts to visualize proportional data.' },
                { title: 'Git Graphs', desc: 'Illustrate branching strategies and Git workflows visually.' },
                { title: 'User Journey Maps', desc: 'Map out user experiences and touchpoints across your product.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Who Uses Mermaid Diagrams?</h3>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Mermaid.js has been adopted across the tech industry and beyond. Here's who benefits most from a live Mermaid editor:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Software developers</strong> who need to document architectures, APIs, and system designs directly alongside their code.</li>
                <li><strong>Technical writers</strong> creating documentation that stays in sync with codebases.</li>
                <li><strong>Project managers</strong> building Gantt charts and workflow diagrams for sprint planning.</li>
                <li><strong>Students and educators</strong> learning data structures, algorithms, and software design patterns.</li>
                <li><strong>DevOps engineers</strong> mapping CI/CD pipelines, infrastructure, and deployment flows.</li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-3">📚 Learn More</h3>
              <p className="text-blue-700 mb-4">
                Check out our blog for tutorials, tips, and examples to help you master Mermaid.js diagrams.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/blog" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold">Read the Blog</a>
                <a href="/cheat-sheet" className="px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm font-semibold">Cheat Sheet</a>
                <a href="/templates" className="px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm font-semibold">Templates</a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
