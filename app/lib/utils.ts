// Extract mermaid code blocks from raw text
export function extractMermaidBlocks(raw: string): string[] {
  const blocks: string[] = [];
  if (!raw) return blocks;
  const reMermaidFence = /```mermaid\s*([\s\S]*?)```/gi;
  let m;
  while ((m = reMermaidFence.exec(raw)) !== null) blocks.push(m[1].trim());
  if (blocks.length) return blocks;
  const reFence = /```(?:\w+)?\s*([\s\S]*?)```/gi;
  while ((m = reFence.exec(raw)) !== null) blocks.push(m[1].trim());
  if (blocks.length) return blocks;
  const keywords = ['graph', 'flowchart', 'sequenceDiagram', 'classDiagram', 'gantt', 'stateDiagram', 'pie', 'journey', 'erDiagram', 'mindmap', 'timeline', 'quadrantChart', 'sankey-beta', 'requirementDiagram', 'gitGraph', 'c4Context'];
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

// Parse intrinsic dimensions from an SVG string
export function parseSvgDimensions(svgStr: string): { width: number; height: number } | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgStr, 'image/svg+xml');
  const svgEl = doc.querySelector('svg');
  if (!svgEl) return null;

  const w = parseFloat(svgEl.getAttribute('width') || '');
  const h = parseFloat(svgEl.getAttribute('height') || '');
  if (w > 0 && h > 0) return { width: w, height: h };

  const viewBox = svgEl.getAttribute('viewBox');
  if (viewBox) {
    const parts = viewBox.split(/[\s,]+/);
    if (parts.length === 4) {
      const vw = parseFloat(parts[2]);
      const vh = parseFloat(parts[3]);
      if (vw > 0 && vh > 0) return { width: vw, height: vh };
    }
  }

  return null;
}

// Convert SVG string to PNG blob
export async function svgToPngBlob(svgStr: string, scale = 2): Promise<Blob> {
  const dims = parseSvgDimensions(svgStr);

  return new Promise<Blob>((resolve, reject) => {
    try {
      const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      img.onload = () => {
        try {
          const w = dims?.width || img.naturalWidth || 800;
          const h = dims?.height || img.naturalHeight || 600;
          const canvas = document.createElement('canvas');
          canvas.width = w * scale;
          canvas.height = h * scale;
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

// Download blob
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Download text content
export function downloadTextFile(textContent: string, filename: string, mime = 'image/svg+xml') {
  const blob = new Blob([textContent], { type: `${mime};charset=utf-8` });
  downloadBlob(blob, filename);
}

// Encode state for URL sharing
export const encodeState = (code: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(code)));
  } catch (e) {
    console.error("Encoding failed", e);
    return "";
  }
};

// Decode state from URL
export const decodeState = (encoded: string): string => {
  try {
    return decodeURIComponent(escape(atob(encoded)));
  } catch (e) {
    console.error("Decoding failed", e);
    return "";
  }
};
