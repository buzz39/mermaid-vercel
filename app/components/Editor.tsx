interface EditorProps {
    text: string;
    setText: (text: string) => void;
}

export default function Editor({ text, setText }: EditorProps) {
    return (
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
    );
}
