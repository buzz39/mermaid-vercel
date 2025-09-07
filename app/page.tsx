// mermaid-vercel-app (single-file React app)
// Drop this into a Next.js project at /app/page.jsx (or use as a standalone React file in Vite/CRA)
// Includes client-side Mermaid rendering and per-diagram Download SVG / Download PNG / Copy SVG.
// Instructions to deploy on Vercel are included at the bottom of this file.

"use client";

import React, { useEffect, useRef, useState } from 'react';

// Note: This component is fully client-side only. If using Next.js App Router place it in app/page.jsx
// and ensure `"use client";` is at the top of the file. For this single-file example we include the directive.

export default function MermaidReaderApp() {
  const [text, setText] = useState(`graph TD\nA[Start] --> B{Is it ok?}\nB -- Yes --> C[Do work]\nB -- No --> D[Fix it]\nC --> E[Done]\nD --> B`);
  const [theme, setTheme] = useState('default');
  const [rendered, setRendered] = useState([]); // [{svg, src}]
  const mermaidRef = useRef(null);
  const mountedRef = useRef(false);

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
        window.mermaid.initialize({ startOnLoad: false, theme, securityLevel: 'loose' });
        mermaidRef.current = window.mermaid;
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // re-init mermaid when theme changes
  useEffect(() => {
    if (mermaidRef.current) {
      mermaidRef.current.initialize({ startOnLoad: false, theme, securityLevel: 'loose' });
    }
  }, [theme]);

  // helpers
  function extractMermaidBlocks(raw) {
    const blocks = [];
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
    const raw = text || '';
    const diagrams = extractMermaidBlocks(raw);
    const results = [];
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
  async function svgToPngBlob(svgStr, width = 1200, height = 800) {
    return new Promise((resolve, reject) => {
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
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob) => {
              URL.revokeObjectURL(url);
              resolve(blob);
            }, 'image/png');
          } catch (e) { URL.revokeObjectURL(url); reject(e); }
        };
        img.onerror = (e) => { URL.revokeObjectURL(url); reject(new Error('Image load error')); };
        img.src = url;
      } catch (err) { reject(err); }
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function downloadTextFile(textContent, filename, mime = 'image/svg+xml') {
    const blob = new Blob([textContent], { type: `${mime};charset=utf-8` });
    downloadBlob(blob, filename);
  }

  // UI
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mermaid Renderer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your Mermaid diagrams into beautiful visuals. Paste code, render, and download as SVG or PNG.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Mermaid Source Code
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste your Mermaid diagram code here..."
                  className="w-full h-80 p-4 border-2 border-gray-200 rounded-xl font-mono text-sm bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                />
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-4 items-end">
                <div className="flex-1 min-w-0">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Theme</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full rounded-lg border-2 border-gray-200 p-3 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  >
                    <option value="default">🌅 Default</option>
                    <option value="forest">🌲 Forest</option>
                    <option value="dark">🌙 Dark</option>
                    <option value="neutral">⚪ Neutral</option>
                  </select>
                </div>

                <div className="flex-1 min-w-0">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Load File</label>
                  <input
                    type="file"
                    accept=".mmd,.md,.txt"
                    onChange={async (e) => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      const txt = await f.text();
                      setText(txt);
                    }}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                  />
                </div>

                <button
                  onClick={renderAll}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Render
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>

              <button
                onClick={() => {
                  if (!rendered.length) return;
                  downloadTextFile(rendered[0].svg, 'diagram-1.svg');
                }}
                disabled={!rendered.length}
                className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download SVG
              </button>

              <div className="text-xs text-gray-500 text-center">
                Render diagrams first to enable downloads
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
              {rendered.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500 text-lg">No diagrams rendered yet</p>
                  <p className="text-gray-400 text-sm mt-2">Paste your Mermaid code and click Render to get started</p>
                </div>
              )}

              {rendered.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 rounded-xl p-6 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>

                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {idx + 1}
                        </div>
                        <span className="text-sm font-medium text-gray-600">Diagram {idx + 1}</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="px-4 py-2 bg-white hover:bg-green-50 text-green-700 border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center text-sm font-medium"
                          onClick={() => downloadTextFile(item.svg, `diagram-${idx+1}.svg`)}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          SVG
                        </button>

                        <button
                          className="px-4 py-2 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center text-sm font-medium"
                          onClick={async () => {
                            try {
                              const blob = await svgToPngBlob(item.svg);
                              downloadBlob(blob, `diagram-${idx+1}.png`);
                            } catch (e) { alert('PNG export failed'); }
                          }}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          PNG
                        </button>

                        <button
                          className="px-4 py-2 bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center text-sm font-medium"
                          onClick={() => { navigator.clipboard?.writeText(item.svg); }}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-inner border border-gray-100">
                      <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                    </div>
                  </div>
                </div>
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

/*
Deployment instructions (Vercel)

Option A — Deploy a new Next.js project
1. Create a Next.js project (if you don't have one):
   npx create-next-app@latest mermaid-vercel --experimental-app
   cd mermaid-vercel

2. Replace the contents of app/page.jsx with this file's component (or import it).
   Ensure the file begins with "use client" and exports the component as default.

3. Install dependencies (none required for mermaid because we load via CDN). If you prefer to install mermaid locally:
   npm install mermaid
   then `import mermaid from 'mermaid';` and remove the dynamic script loading.

4. (Optional) Add Tailwind: follow https://tailwindcss.com/docs/guides/nextjs

5. Commit to git and push to GitHub.

6. In Vercel dashboard, import the GitHub repo and deploy. Vercel will detect Next.js and build automatically.

Option B — Deploy a static React app (Vite/CRA)
1. Create a static site and ensure the build outputs an index.html that loads this React component.
2. Push to GitHub and use Vercel to deploy as a static site.

Advanced: If you want server-side rendering or to process exports on the server (zip generation, saving to Drive), add API routes in Next.js and use server functions.

*/
