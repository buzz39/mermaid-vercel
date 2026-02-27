import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mermaid-live-editor.vercel.app'; // Replace with actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
      {
        // Allow OpenAI's ChatGPT crawler
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // Allow Google Gemini / Bard crawler
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Allow Anthropic Claude crawler
        userAgent: 'ClaudeBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
