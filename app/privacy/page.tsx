import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Mermaid Live Editor',
  description: 'Privacy Policy for mermaideditor.lol, a free online Mermaid diagram editor.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last updated: April 10, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-2">
            Welcome to Mermaid Live Editor at mermaideditor.lol (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
          <p className="mb-2">
            Mermaid Live Editor is a free online tool that lets you create diagrams using Mermaid.js syntax. We believe in transparency and want you to understand exactly what data we collect, why we collect it, and how it is used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Data:</strong> We do not require you to register or create an account to use our service. We do not collect personally identifiable information (PII) such as your name, email address, phone number, or mailing address unless you voluntarily contact us.</li>
            <li><strong>Usage Data:</strong> We collect non-personal information about your visit through Google Analytics 4 (GA4), including your approximate geographic location, browser type, device type, operating system, referring URLs, pages viewed, and time spent on pages. This data is aggregated and anonymized.</li>
            <li><strong>Diagram Data:</strong> The diagrams you create are processed entirely in your browser using client-side JavaScript. When you use the &quot;Share&quot; feature, the diagram code is encoded directly into the URL. We do not store, transmit, or have access to your diagram content on our servers.</li>
            <li><strong>Log Data:</strong> Our hosting provider (Vercel) may collect standard server log information including IP addresses, request timestamps, and HTTP headers for security and performance purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Use of Your Information</h2>
          <p className="mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Operate and maintain the website and ensure it functions correctly.</li>
            <li>Understand how visitors use our site so we can improve the user experience.</li>
            <li>Monitor and analyze usage patterns and trends.</li>
            <li>Display third-party advertisements to support the free service.</li>
            <li>Detect and prevent technical issues or abuse.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Google Analytics</h2>
          <p className="mb-2">
            We use Google Analytics 4 (GA4) to understand how visitors interact with our website. GA4 collects data such as pages visited, session duration, and general demographic information. Google Analytics uses cookies to collect this information. The data collected is processed in accordance with <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google&apos;s Privacy Policy</a>.
          </p>
          <p className="mb-2">
            You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Third-Party Advertising</h2>
          <p className="mb-2">
            We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website and other websites on the Internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your browsing history.
          </p>
          <p className="mb-2">
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">aboutads.info</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
          <p className="mb-2">
            Cookies are small text files stored on your device when you visit a website. We use the following types of cookies:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
            <li><strong>Analytics Cookies:</strong> Used by Google Analytics to track website usage (e.g., <code className="bg-gray-100 px-1 rounded text-sm">_ga</code>, <code className="bg-gray-100 px-1 rounded text-sm">_ga_*</code>).</li>
            <li><strong>Advertising Cookies:</strong> Used by Google AdSense to serve relevant ads and measure ad performance.</li>
          </ul>
          <p className="mt-2">
            You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect your experience on the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
          <p className="mb-2">
            Since we do not collect personal data directly, we do not maintain a personal data retention policy. Analytics data collected through Google Analytics is retained according to Google&apos;s data retention settings, which we have configured to the default period.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">8. Children&apos;s Privacy</h2>
          <p className="mb-2">
            Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">9. Third-Party Links</h2>
          <p className="mb-2">
            Our website may contain links to third-party websites, including the official Mermaid.js documentation and our blog resources. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">10. Changes to This Privacy Policy</h2>
          <p className="mb-2">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with a revised &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="mb-2">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@gaganthakur.com" className="text-blue-600 hover:underline">hello@gaganthakur.com</a>
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Editor</Link>
        </div>
      </div>
    </main>
  );
}
