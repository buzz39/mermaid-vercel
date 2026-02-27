// mermaid-vercel-app (single-file React app)
// Drop this into a Next.js project at /app/page.jsx (or use as a standalone React file in Vite/CRA)
// Includes client-side Mermaid rendering and per-diagram Download SVG / Download PNG / Copy SVG.
// Instructions to deploy on Vercel are included at the bottom of this file.

"use client";

import React, { useEffect, useRef, useState } from 'react';

// Type declarations for dynamically loaded mermaid
declare global {
  interface Window {
    mermaid?: {
      initialize: (config: { startOnLoad: boolean; theme: string; securityLevel: string }) => void;
      render: (id: string, text: string) => Promise<{ svg: string }>;
    };
  }
}

interface RenderedDiagram {
  svg: string;
  src: string;
}

// Note: This component is fully client-side only. If using Next.js App Router place it in app/page.jsx
// and ensure `"use client";` is at the top of the file. For this single-file example we include the directive.

export default function MermaidReaderApp() {
  const [text, setText] = useState(`graph TD\nA[Start] --> B{Is it ok?}\nB -- Yes --> C[Do work]\nB -- No --> D[Fix it]\nC --> E[Done]\nD --> B`);
  const [theme, setTheme] = useState('default');
  const [rendered, setRendered] = useState<RenderedDiagram[]>([]);
  const [youtubeApiKey, setYoutubeApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const mermaidRef = useRef<{
    initialize: (config: { startOnLoad: boolean; theme: string; securityLevel: string }) => void;
    render: (id: string, text: string) => Promise<{ svg: string }>;
  } | null>(null);

  // load mermaid dynamically on client
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let cancelled = false;
    (async () => {
      if (!window.mermaid) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
        script.async = true;
        document.head.appendChild(script);
        await new Promise((res) => { script.onload = res; script.onerror = res; });
      }
      if (!cancelled && window.mermaid) {
        // Security update: use strict security level
        window.mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'strict' });
        mermaidRef.current = window.mermaid;
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // re-init mermaid when theme changes
  useEffect(() => {
    if (mermaidRef.current) {
      mermaidRef.current.initialize({ startOnLoad: false, theme, securityLevel: 'strict' });
    }
  }, [theme]);

  // Load/Save YouTube API Key
  useEffect(() => {
    const storedKey = localStorage.getItem('youtubeApiKey');
    if (storedKey) setYoutubeApiKey(storedKey);
  }, []);

  const handleSaveApiKey = () => {
    localStorage.setItem('youtubeApiKey', youtubeApiKey);
    setShowSettings(false);
  };

  // helpers
  function extractMermaidBlocks(raw: string): string[] {
    const blocks: string[] = [];
    if (!raw) return blocks;
    const reMermaidFence = /```mermaid\s*([\s\S]*?)```/gi;
    let m;
    while ((m = reMermaidFence.exec(raw)) !== null) blocks.push(m[1].trim());
    if (blocks.length) return blocks;
    const reFence = /```(?:\w+)?\s*([\s\S]*?)```/gi;
    while ((m = reFence.exec(raw)) !== null) blocks.push(m[1].trim());
    if (blocks.length) return blocks;
    const keywords = ['graph', 'flowchart', 'sequenceDiagram', 'classDiagram', 'gantt', 'stateDiagram', 'pie', 'journey', 'erDiagram'];
    const lines = raw.split('\n');
    for (let i = 0; i < lines.length; i++) {
      for (const kw of keywords) {
        const regex = new RegExp('^\\s*' + kw + '\\b', 'i');
        if (regex.test(lines[i])) {
          blocks.push(lines.slice(i).join('\n').trim());
          return blocks;
        }
      }
    }
    return blocks;
  }

  async function renderAll() {
    if (!mermaidRef.current) return;
    
    const raw = text || '';
    const diagrams = extractMermaidBlocks(raw);
    const results: RenderedDiagram[] = [];
    if (diagrams.length === 0) {
      // try raw
      const candidate = raw.trim();
      if (!candidate) { setRendered([]); return; }
      try {
        const id = 'm_' + Math.random().toString(36).slice(2, 9);
        const { svg } = await mermaidRef.current.render(id, candidate);
        results.push({ svg, src: candidate });
      } catch (err) {
        // store error as svg-like preblock
        results.push({ svg: `<pre style=\"color:#b91c1c;white-space:pre-wrap;\">Render error:\n${String(err)}</pre>`, src: candidate });
      }
    } else {
      for (let i = 0; i < diagrams.length; i++) {
        const src = diagrams[i];
        try {
          const id = 'm_' + Math.random().toString(36).slice(2, 9);
          const { svg } = await mermaidRef.current.render(id, src);
          results.push({ svg, src });
        } catch (err) {
          results.push({ svg: `<pre style=\"color:#b91c1c;white-space:pre-wrap;\">Render error for Diagram ${i+1}:\n${String(err)}\n\nSource preview:\n${src.slice(0,1000)}</pre>`, src });
        }
      }
    }
    setRendered(results);
  }

  // convert svg string to png blob URL (client-side)
  async function svgToPngBlob(svgStr: string, width = 1200, height = 800) {
    return new Promise<Blob>((resolve, reject) => {
      try {
        const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = width || img.naturalWidth || 1200;
            canvas.height = height || img.naturalHeight || 800;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              URL.revokeObjectURL(url);
              reject(new Error('Failed to get canvas context'));
              return;
            }
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob) => {
              URL.revokeObjectURL(url);
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to create blob'));
              }
            }, 'image/png');
          } catch (e) {
            URL.revokeObjectURL(url);
            reject(e);
          }
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error('Image load error'));
        };
        img.src = url;
      } catch (err) {
        reject(err);
      }
    });
  }

  function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function downloadTextFile(textContent: string, filename: string, mime = 'image/svg+xml') {
    const blob = new Blob([textContent], { type: `${mime};charset=utf-8` });
    downloadBlob(blob, filename);
  }

  // UI
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Settings</h3>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                YouTube API Key
              </label>
              <input
                type="password"
                value={youtubeApiKey}
                onChange={(e) => setYoutubeApiKey(e.target.value)}
                placeholder="Enter your API Key"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <p className="text-xs text-gray-500 mt-2">
                Stored locally in your browser.
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveApiKey}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout - Split View on Desktop */}
      <div className="flex-1 flex flex-col md:flex-row h-screen overflow-hidden">

        {/* Left Pane: Editor */}
        <div className="w-full md:w-1/2 bg-white border-r border-gray-200 flex flex-col h-1/2 md:h-full">
          {/* Header/Toolbar */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white z-10">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mermaid Editor
            </h1>
            <div className="flex gap-2">
               <button
                  onClick={() => setShowSettings(true)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Settings"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
            </div>
          </div>

          {/* Editor Area */}
          <div className="flex-1 relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your Mermaid diagram code here..."
              className="absolute inset-0 w-full h-full p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-100"
            />
          </div>

          {/* Bottom Controls */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
             <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1">
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full text-sm rounded-lg border border-gray-300 p-2 bg-white"
                  >
                    <option value="default">Theme: Default</option>
                    <option value="forest">Theme: Forest</option>
                    <option value="dark">Theme: Dark</option>
                    <option value="neutral">Theme: Neutral</option>
                  </select>
                </div>

                <div className="flex-1">
                   <label className="flex items-center gap-2 cursor-pointer w-full justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-sm text-gray-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Load File
                    <input
                      type="file"
                      accept=".mmd,.md,.txt"
                      className="hidden"
                      onChange={async (e) => {
                        const f = e.target.files?.[0];
                        if (!f) return;
                        const txt = await f.text();
                        setText(txt);
                      }}
                    />
                  </label>
                </div>

                <button
                  onClick={renderAll}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Render
                </button>
              </div>
          </div>
        </div>

        {/* Right Pane: Preview */}
        <div className="w-full md:w-1/2 bg-gray-50 flex flex-col h-1/2 md:h-full overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-white shadow-sm z-10 flex justify-between items-center">
             <h2 className="text-lg font-semibold text-gray-700 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </h2>
            {rendered.length > 0 && (
               <div className="flex gap-2">
                 <button
                    onClick={() => downloadTextFile(rendered[0].svg, 'diagram.svg')}
                    className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 font-medium transition-colors"
                  >
                    Download SVG
                  </button>
               </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
             {rendered.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>Ready to render</p>
                </div>
              )}

             {rendered.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                   <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Diagram {idx + 1}</span>
                      <div className="flex gap-2">
                          <button
                            title="Download SVG"
                            className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                            onClick={() => downloadTextFile(item.svg, `diagram-${idx+1}.svg`)}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                          <button
                             title="Download PNG"
                            className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                             onClick={async () => {
                              try {
                                const blob = await svgToPngBlob(item.svg);
                                downloadBlob(blob, `diagram-${idx+1}.png`);
                              } catch { alert('PNG export failed'); }
                            }}
                          >
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                          </button>
                           <button
                             title="Copy SVG Code"
                             className="p-1.5 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                             onClick={() => { navigator.clipboard?.writeText(item.svg); }}
                           >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                           </button>
                      </div>
                   </div>
                   <div className="overflow-x-auto">
                     <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                   </div>
                </div>
              ))}

              <footer className="pt-8 pb-4 text-center">
                 <a
                   href="https://linkedin.com/in/gaganthakur"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-xs text-gray-400 hover:text-blue-500 transition-colors"
                 >
                   Connect with me on LinkedIn
                 </a>
              </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
