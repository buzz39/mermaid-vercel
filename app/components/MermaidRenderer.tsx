"use client";

import React, { useEffect, useRef, useState } from 'react';
import type { MermaidConfig } from 'mermaid';
import { downloadBlob, downloadTextFile, svgToPngBlob } from '../lib/utils';

interface MermaidRendererProps {
  code: string;
  theme: string;
  index: number;
}

export default function MermaidRenderer({ code, theme, index }: MermaidRendererProps) {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({ startOnLoad: false, theme: theme as MermaidConfig['theme'], securityLevel: 'loose' });
    })();
  }, [theme]);

  useEffect(() => {
    let isMounted = true;

    const renderDiagram = async () => {
      if (!code) return;

      try {
        setError(null);
        // Unique ID for each render to avoid conflicts
        const id = `mermaid-${index}-${Math.random().toString(36).slice(2, 9)}`;

        const mermaid = (await import('mermaid')).default;
        // mermaid.render returns { svg }
        const { svg: svgContent } = await mermaid.render(id, code);

        if (isMounted) {
          setSvg(svgContent);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Mermaid render error:", err);
          setError(err instanceof Error ? err.message : String(err));
        }
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [code, theme, index]);

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 relative">
        <h3 className="text-red-700 font-bold mb-2">Render Error</h3>
        <pre className="text-red-600 whitespace-pre-wrap text-sm">{error}</pre>
        <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Source:</h4>
            <pre className="text-gray-600 text-xs overflow-auto max-h-40 bg-gray-50 p-2 rounded border border-gray-200">{code}</pre>
        </div>
      </div>
    );
  }

  if (!svg) {
      return (
          <div className="flex justify-center items-center p-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
      )
  }

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>

      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
              {index + 1}
            </div>
            <span className="text-sm font-medium text-gray-600">Diagram {index + 1}</span>
          </div>

          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-white hover:bg-green-50 text-green-700 border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center text-sm font-medium"
              onClick={() => downloadTextFile(svg, `diagram-${index + 1}.svg`)}
              title="Download SVG"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">SVG</span>
            </button>

            <button
              className="px-4 py-2 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center text-sm font-medium"
              onClick={async () => {
                try {
                  const blob = await svgToPngBlob(svg);
                  downloadBlob(blob, `diagram-${index + 1}.png`);
                } catch { alert('PNG export failed'); }
              }}
              title="Download PNG"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">PNG</span>
            </button>

            <button
              className="px-4 py-2 bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center text-sm font-medium"
              onClick={() => { navigator.clipboard?.writeText(svg); }}
              title="Copy SVG Code"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Copy</span>
            </button>
          </div>
        </div>

        <div
            ref={containerRef}
            className="bg-white rounded-lg p-4 shadow-inner border border-gray-100 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
}
