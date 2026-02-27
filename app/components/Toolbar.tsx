interface ToolbarProps {
    theme: string;
    setTheme: (theme: string) => void;
    onTextChange: (text: string) => void;
    onRender: () => void;
}

export default function Toolbar({ theme, setTheme, onTextChange, onRender }: ToolbarProps) {
    return (
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
                        onTextChange(txt);
                    }}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                />
            </div>

            <button
                onClick={onRender}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Render
            </button>
        </div>
    );
}
