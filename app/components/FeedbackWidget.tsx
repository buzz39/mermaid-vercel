"use client";

import React, { useState } from 'react';

const FEATURE_OPTIONS = [
  "AI Diagram Generator",
  "More Templates",
  "Team Collaboration",
  "API Access",
  "VS Code Extension",
];

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleSubmit = async () => {
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          email,
          name,
          features: Object.keys(checked).filter(k => checked[k]),
        }),
      });
    } catch {}
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setText("");
      setEmail("");
      setName("");
      setChecked({});
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-gray-600 border border-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:border-blue-300 hover:text-blue-600 transition-all text-sm font-medium"
      >
        💡 Suggest a Feature
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl border border-gray-100" onClick={e => e.stopPropagation()}>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-2xl mb-2">🎉</p>
                <p className="text-lg font-semibold text-gray-800">Thank you!</p>
                <p className="text-gray-500 text-sm">Your feedback has been recorded.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Suggest a Feature</h3>
                <p className="text-sm text-gray-500 mb-4">What would make Mermaid Editor better for you?</p>

                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email (optional)"
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2 mb-4">
                  {FEATURE_OPTIONS.map(opt => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!checked[opt]}
                        onChange={() => setChecked(p => ({ ...p, [opt]: !p[opt] }))}
                        className="rounded border-gray-300"
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Other ideas or suggestions..."
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm mb-4 resize-none h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
