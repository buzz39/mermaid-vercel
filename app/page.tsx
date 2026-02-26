"use client";

import React, { useEffect, useState } from 'react';
import mermaid, { type MermaidConfig } from 'mermaid';
import { extractMermaidBlocks } from './lib/utils';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import MermaidRenderer from './components/MermaidRenderer';
import ErrorBoundary from './components/ErrorBoundary';

// Initialize mermaid once
if (typeof window !== 'undefined') {
  mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
}

export default function MermaidReaderApp() {
  const [text, setText] = useState(`graph TD\nA[Start] --> B{Is it ok?}\nB -- Yes --> C[Do work]\nB -- No --> D[Fix it]\nC --> E[Done]\nD --> B`);
  const [theme, setTheme] = useState('default');
  const [diagrams, setDiagrams] = useState<string[]>([]);
  const [hasRendered, setHasRendered] = useState(false);

  // Re-initialize mermaid when theme changes
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: theme as MermaidConfig['theme'], securityLevel: 'loose' });
  }, [theme]);

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
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                💡 <strong>Tip:</strong> For best results, paste only Mermaid blocks or wrap diagrams in <code className="bg-gray-100 px-2 py-1 rounded text-xs">```mermaid```</code> fences.
              </p>
              <p className="text-xs text-gray-400">
                Built with Next.js and Mermaid.js • Ready for Vercel deployment
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
