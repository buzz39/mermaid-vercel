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

// Convert SVG string to PNG blob
export async function svgToPngBlob(svgStr: string, width = 1200, height = 800): Promise<Blob> {
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
