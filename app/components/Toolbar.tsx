import { encodeState } from '../lib/utils';
import { useState } from 'react';

interface ToolbarProps {
    theme: string;
    setTheme: (theme: string) => void;
    onTextChange: (text: string) => void;
    onRender: () => void;
    text?: string;
}

const EXAMPLES = {
  'flowchart': `graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`,
  'sequence': `sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!`,
  'class': `classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }`,
  'state': `stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]`,
  'gantt': `gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d`,
  'pie': `pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15`,
  'er': `erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses`
};

export default function Toolbar({ theme, setTheme, onTextChange, onRender, text = "" }: ToolbarProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        const encoded = encodeState(text);
        const url = new URL(window.location.href);
        url.searchParams.set('code', encoded);
        window.history.pushState({}, '', url.toString());
        navigator.clipboard.writeText(url.toString());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-wrap gap-4 items-end bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex-1 min-w-[140px]">
                <label htmlFor="theme-select" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Theme</label>
                <select
                    id="theme-select"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-2.5 bg-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm outline-none"
                >
                    <option value="default">🌅 Default</option>
                    <option value="forest">🌲 Forest</option>
                    <option value="dark">🌙 Dark</option>
                    <option value="neutral">⚪ Neutral</option>
                    <option value="base">🏗️ Base</option>
                </select>
            </div>

            <div className="flex-1 min-w-[140px]">
                 <label htmlFor="examples-select" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Examples</label>
                 <select
                    id="examples-select"
                    onChange={(e) => {
                        const val = e.target.value;
                        if (val && EXAMPLES[val as keyof typeof EXAMPLES]) {
                            onTextChange(EXAMPLES[val as keyof typeof EXAMPLES]);
                        }
                    }}
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 p-2.5 bg-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm outline-none"
                 >
                     <option value="" disabled>Select Template...</option>
                     <option value="flowchart">Flowchart</option>
                     <option value="sequence">Sequence Diagram</option>
                     <option value="class">Class Diagram</option>
                     <option value="state">State Diagram</option>
                     <option value="gantt">Gantt Chart</option>
                     <option value="pie">Pie Chart</option>
                     <option value="er">ER Diagram</option>
                 </select>
            </div>

             <div className="flex-1 min-w-[140px]">
                <label htmlFor="file-upload" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Load File</label>
                <div className="relative">
                    <input
                        id="file-upload"
                        type="file"
                        accept=".mmd,.md,.txt"
                        onChange={async (e) => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            const txt = await f.text();
                            onTextChange(txt);
                        }}
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2.5 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-100 file:text-blue-700
                          hover:file:bg-blue-200
                          cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
                <button
                    onClick={handleShare}
                    className="flex-1 md:flex-none px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center min-w-[100px]"
                >
                    {copied ? (
                        <>
                            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Copied
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                            Share
                        </>
                    )}
                </button>

                <button
                    onClick={onRender}
                    className="flex-1 md:flex-none px-8 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 flex items-center justify-center min-w-[120px]"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Render
                </button>
            </div>
        </div>
    );
}
