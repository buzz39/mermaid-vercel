import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-2">
            Welcome to Mermaid Live Editor ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Personal Data:</strong> We do not require you to register to use our service. We do not collect personally identifiable information (PII) such as your name or email address unless you voluntarily provide it to us.</li>
            <li><strong>Usage Data:</strong> We may collect non-personal information about your visit, including your IP address, browser type, operating system, and the pages you view. This is done via standard server logs and analytics tools.</li>
            <li><strong>Diagram Data:</strong> The diagrams you create are processed locally in your browser. When you use the "Share" feature, the diagram code is encoded into the URL. We do not store your diagram data on our servers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Use of Your Information</h2>
          <p className="mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Operate and maintain the website.</li>
            <li>Improve your user experience.</li>
            <li>Monitor and analyze usage and trends to improve our website.</li>
            <li>Display third-party advertisements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Third-Party Advertising</h2>
          <p className="mb-2">
            We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit the Site. These companies may use information about your visits to the Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
          </p>
          <p className="mb-2">
            Google's use of the DART cookie enables it to serve ads to users based on their visit to our Site and other sites on the Internet. You may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
          <p className="mb-2">
            We use cookies to enhance your experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, some parts of the Site may not function properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">6. Changes to This Privacy Policy</h2>
          <p className="mb-2">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
             <a href="/" className="text-blue-600 hover:underline">← Back to Editor</a>
        </div>
      </div>
    </main>
  );
}
