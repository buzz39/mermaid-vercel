"use client";

import Link from "next/link";
import React, { useState } from "react";

const sections = [
  { id: "flowcharts", title: "Flowcharts" },
  { id: "sequence-diagrams", title: "Sequence Diagrams" },
  { id: "gantt-charts", title: "Gantt Charts" },
  { id: "class-diagrams", title: "Class Diagrams" },
  { id: "state-diagrams", title: "State Diagrams" },
  { id: "er-diagrams", title: "ER Diagrams" },
  { id: "pie-charts", title: "Pie Charts" },
  { id: "mind-maps", title: "Mind Maps" },
  { id: "git-graphs", title: "Git Graphs" },
  { id: "timeline", title: "Timeline" },
  { id: "themes", title: "Themes & Config" },
];

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="relative group my-3">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default function CheatSheetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
      <div className="max-w-7xl mx-auto flex">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 p-6 sticky top-0 h-screen overflow-y-auto border-r border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline text-sm block mb-6">← Back to Editor</Link>
          <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-4">Contents</h2>
          <nav className="space-y-1">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors">
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-8 max-w-4xl">
          <div className="lg:hidden mb-6">
            <Link href="/" className="text-blue-600 hover:underline text-sm">← Back to Editor</Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mermaid.js Cheat Sheet
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Quick reference for all Mermaid diagram types. Click &quot;Copy&quot; on any code block.
          </p>

          {/* Flowcharts */}
          <section id="flowcharts" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Flowcharts</h2>

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Direction</h3>
            <CodeBlock code={`graph TD   %% Top to Bottom\ngraph LR   %% Left to Right\ngraph BT   %% Bottom to Top\ngraph RL   %% Right to Left`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Node Shapes</h3>
            <CodeBlock code={`flowchart TD\n    A[Rectangle]\n    B(Rounded)\n    C([Stadium])\n    D[[Subroutine]]\n    E[(Cylinder/DB)]\n    F((Circle))\n    G{Diamond}\n    H{{Hexagon}}\n    I>Flag]\n    J[/Parallelogram/]\n    K[\\Parallelogram Alt\\]\n    L[/Trapezoid\\]`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Edge Types</h3>
            <CodeBlock code={`flowchart LR\n    A --> B           %% Arrow\n    A --- B           %% Line\n    A -.-> B          %% Dotted arrow\n    A ==> B           %% Thick arrow\n    A --o B           %% Circle end\n    A --x B           %% Cross end\n    A -->|label| B    %% Labeled arrow`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Subgraphs</h3>
            <CodeBlock code={`flowchart TB\n    subgraph "Group Name"\n        A --> B\n    end\n    subgraph Another\n        direction LR\n        C --> D\n    end`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Styling</h3>
            <CodeBlock code={`flowchart TD\n    A:::myClass --> B\n    classDef myClass fill:#f9f,stroke:#333,color:black\n    style B fill:#bbf,stroke:#33f`} />
          </section>

          {/* Sequence Diagrams */}
          <section id="sequence-diagrams" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Sequence Diagrams</h2>

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Basics</h3>
            <CodeBlock code={`sequenceDiagram\n    participant A as Alice\n    actor U as User\n    A->>B: Solid arrow (sync)\n    B-->>A: Dotted arrow (response)\n    A-)B: Open arrow (async)\n    A-xB: Cross (lost message)`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Activation</h3>
            <CodeBlock code={`sequenceDiagram\n    A->>+B: Request (activate)\n    B-->>-A: Response (deactivate)`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Blocks</h3>
            <CodeBlock code={`sequenceDiagram\n    autonumber\n\n    loop Every 5s\n        A->>B: Ping\n    end\n\n    alt Success\n        B-->>A: 200 OK\n    else Failure\n        B-->>A: 500 Error\n    end\n\n    opt Optional step\n        A->>B: Maybe\n    end\n\n    par Parallel\n        A->>B: Request 1\n    and\n        A->>C: Request 2\n    end`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Notes</h3>
            <CodeBlock code={`sequenceDiagram\n    Note over A,B: Spanning note\n    Note right of B: Side note\n    rect rgb(200, 220, 255)\n        A->>B: Highlighted section\n    end`} />
          </section>

          {/* Gantt */}
          <section id="gantt-charts" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Gantt Charts</h2>
            <CodeBlock code={`gantt\n    title Project Timeline\n    dateFormat YYYY-MM-DD\n    axisFormat %b %d\n    excludes weekends\n\n    section Phase 1\n    Task 1          :done, t1, 2025-01-01, 7d\n    Task 2          :active, t2, after t1, 5d\n    Milestone       :milestone, m1, after t2, 0d\n\n    section Phase 2\n    Task 3          :t3, after m1, 10d\n    Critical task   :crit, t4, after t3, 3d`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Task States</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1 my-3">
              <li><code className="bg-gray-100 px-1 rounded">done</code> — completed</li>
              <li><code className="bg-gray-100 px-1 rounded">active</code> — in progress</li>
              <li><code className="bg-gray-100 px-1 rounded">crit</code> — critical path</li>
              <li>Combine: <code className="bg-gray-100 px-1 rounded">crit, done</code></li>
            </ul>
          </section>

          {/* Class Diagrams */}
          <section id="class-diagrams" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Class Diagrams</h2>

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Classes</h3>
            <CodeBlock code={`classDiagram\n    class ClassName {\n        +String publicAttr\n        -int privateAttr\n        #bool protectedAttr\n        ~float internalAttr\n        +publicMethod() void\n        -privateMethod(param) String\n        +staticMethod()$ int\n        +abstractMethod()* void\n    }`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Relationships</h3>
            <CodeBlock code={`classDiagram\n    A <|-- B    : Inheritance\n    C *-- D     : Composition\n    E o-- F     : Aggregation\n    G --> H     : Association\n    I ..> J     : Dependency\n    K ..|> L    : Realization\n    M "1" --> "*" N : Cardinality`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Annotations</h3>
            <CodeBlock code={`classDiagram\n    class MyInterface {\n        <<interface>>\n    }\n    class MyAbstract {\n        <<abstract>>\n    }\n    class MyEnum {\n        <<enumeration>>\n        VALUE_A\n        VALUE_B\n    }`} />
          </section>

          {/* State Diagrams */}
          <section id="state-diagrams" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">State Diagrams</h2>
            <CodeBlock code={`stateDiagram-v2\n    direction LR\n    [*] --> Active\n    Active --> Inactive : disable\n    Inactive --> Active : enable\n    Active --> [*] : delete\n\n    state Active {\n        [*] --> Running\n        Running --> Paused : pause\n        Paused --> Running : resume\n    }`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Special States</h3>
            <CodeBlock code={`stateDiagram-v2\n    state check <<choice>>\n    state fork_state <<fork>>\n    state join_state <<join>>\n\n    note right of Active\n        This is a note\n    end note`} />
          </section>

          {/* ER Diagrams */}
          <section id="er-diagrams" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">ER Diagrams</h2>
            <CodeBlock code={`erDiagram\n    CUSTOMER {\n        int id PK\n        string name\n        string email UK\n    }\n    ORDER {\n        int id PK\n        int customer_id FK\n        date ordered_at\n    }\n    CUSTOMER ||--o{ ORDER : places`} />

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Cardinality</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1 my-3">
              <li><code className="bg-gray-100 px-1 rounded">||</code> — exactly one</li>
              <li><code className="bg-gray-100 px-1 rounded">o|</code> — zero or one</li>
              <li><code className="bg-gray-100 px-1 rounded">{`}|`}</code> — one or more</li>
              <li><code className="bg-gray-100 px-1 rounded">{`}o`}</code> — zero or more</li>
              <li><code className="bg-gray-100 px-1 rounded">--</code> solid (identifying) / <code className="bg-gray-100 px-1 rounded">..</code> dashed (non-identifying)</li>
            </ul>
          </section>

          {/* Pie Charts */}
          <section id="pie-charts" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Pie Charts</h2>
            <CodeBlock code={`pie title Distribution\n    "Category A" : 40\n    "Category B" : 30\n    "Category C" : 20\n    "Other" : 10`} />
            <p className="text-sm text-gray-600 my-2">Add <code className="bg-gray-100 px-1 rounded">showData</code> after <code className="bg-gray-100 px-1 rounded">pie</code> to show raw values.</p>
          </section>

          {/* Mind Maps */}
          <section id="mind-maps" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Mind Maps</h2>
            <CodeBlock code={`mindmap\n    root((Central Topic))\n        Branch 1\n            Sub-topic A\n            Sub-topic B\n        Branch 2\n            Sub-topic C\n                Detail 1\n                Detail 2\n        Branch 3`} />
          </section>

          {/* Git Graphs */}
          <section id="git-graphs" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Git Graphs</h2>
            <CodeBlock code={`gitGraph\n    commit\n    commit\n    branch develop\n    checkout develop\n    commit\n    commit\n    checkout main\n    merge develop\n    commit`} />
          </section>

          {/* Timeline */}
          <section id="timeline" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Timeline</h2>
            <CodeBlock code={`timeline\n    title History\n    2020 : Founded\n         : MVP launched\n    2021 : Series A\n         : Reached 10k users\n    2022 : Series B\n         : International expansion`} />
          </section>

          {/* Themes */}
          <section id="themes" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b">Themes & Config</h2>
            <CodeBlock code={`%%{init: {'theme': 'dark'}}%%\ngraph TD\n    A --> B`} />
            <p className="text-sm text-gray-600 my-2">Available themes: <code className="bg-gray-100 px-1 rounded">default</code>, <code className="bg-gray-100 px-1 rounded">dark</code>, <code className="bg-gray-100 px-1 rounded">forest</code>, <code className="bg-gray-100 px-1 rounded">neutral</code>, <code className="bg-gray-100 px-1 rounded">base</code></p>

            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Tips</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1 my-3">
              <li>Use <code className="bg-gray-100 px-1 rounded">%%</code> for comments</li>
              <li>Wrap special characters in quotes: <code className="bg-gray-100 px-1 rounded">{`A["Text (parens)"]`}</code></li>
              <li>Use <code className="bg-gray-100 px-1 rounded">{`<br/>`}</code> for line breaks in labels</li>
            </ul>
          </section>

          <div className="mt-12 text-center mb-8">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Open Mermaid Live Editor →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
