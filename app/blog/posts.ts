export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "what-is-mermaid-js",
    title: "What is Mermaid.js? A Beginner's Introduction to Diagrams as Code",
    description: "Learn what Mermaid.js is, how it works, and why developers love creating diagrams from simple text. A complete beginner's guide to diagrams as code.",
    date: "2025-12-01",
    keywords: ["mermaid.js", "diagrams as code", "what is mermaid", "mermaid introduction", "text to diagram"],
    content: `
## What is Mermaid.js?

Mermaid.js is a JavaScript-based diagramming and charting tool that turns simple text definitions into rich, visual diagrams. Instead of dragging boxes and arrows around in a GUI, you write a few lines of human-readable text, and Mermaid renders the diagram for you.

Think of it as **Markdown, but for diagrams**. Just as Markdown lets you write formatted documents without a word processor, Mermaid lets you create flowcharts, sequence diagrams, Gantt charts, and more without a drawing tool.

### A Quick Example

Here's how simple it is. This text:

\`\`\`
graph TD
    A[Write Code] --> B[Commit]
    B --> C[Push to GitHub]
    C --> D[Deploy]
\`\`\`

Produces a clean flowchart showing a basic deployment pipeline. No mouse dragging, no alignment headaches — just text.

## Why Developers Love Mermaid.js

### 1. Version Control Friendly

Because diagrams are plain text, they live in your Git repository alongside your code. You can track changes, review diffs, and merge updates just like any other source file. Try doing that with a PNG exported from a drawing tool.

### 2. Speed of Creation

Creating a diagram in Mermaid takes seconds, not minutes. Once you learn the syntax, you can sketch out architectures, flows, and relationships faster than you could open a GUI tool. The mental model stays in text, which is where developers already live.

### 3. Always Up to Date

When diagrams live next to the code they describe, they're far more likely to stay current. A diagram in a README file gets updated in the same pull request that changes the architecture. Traditional diagrams in separate files or external tools tend to go stale quickly.

### 4. Platform Support

Mermaid diagrams render natively in **GitHub**, **GitLab**, **Notion**, **Obsidian**, **Confluence** (via plugins), and many other platforms. You don't need a special viewer — the platforms render them inline.

### 5. No Account Required

Unlike SaaS diagramming tools, Mermaid is open-source and runs in the browser. There's no sign-up, no subscription, no vendor lock-in. Your diagrams are portable text files.

## What Types of Diagrams Can You Create?

Mermaid supports a wide variety of diagram types, each suited for different use cases:

| Diagram Type | Best For |
|---|---|
| **Flowchart** | Process flows, decision trees, algorithms |
| **Sequence Diagram** | API calls, service interactions, protocols |
| **Gantt Chart** | Project timelines, sprint planning |
| **Class Diagram** | UML modeling, object-oriented design |
| **State Diagram** | State machines, workflow states |
| **Entity Relationship** | Database schema, data modeling |
| **Pie Chart** | Simple data distribution |
| **Mind Map** | Brainstorming, topic organization |
| **Git Graph** | Branch visualization |
| **Timeline** | Historical events, roadmaps |

Each diagram type has its own simple syntax, but they all follow the same pattern: a declaration line followed by relationships.

## Getting Started with Mermaid.js

### Option 1: Use a Live Editor

The fastest way to try Mermaid is with an online editor. You type on the left, see the diagram on the right. No installation needed.

### Option 2: Add to Your Website

Include Mermaid in any HTML page:

\`\`\`html
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>

<pre class="mermaid">
graph LR
    A --> B --> C
</pre>
\`\`\`

### Option 3: Use in Markdown

On platforms like GitHub, simply wrap your diagram in a mermaid code fence:

\`\`\`
\`\`\`mermaid
graph TD
    A --> B
\`\`\`
\`\`\`

GitHub will render it automatically — no plugins needed.

### Option 4: Install via npm

For programmatic use in Node.js or build tools:

\`\`\`bash
npm install mermaid
\`\`\`

## Your First Flowchart

Let's build a practical example — a user login flow:

\`\`\`
graph TD
    Start([User visits site]) --> Check{Logged in?}
    Check -- Yes --> Dashboard[Show Dashboard]
    Check -- No --> Login[Show Login Form]
    Login --> Submit[User submits credentials]
    Submit --> Validate{Valid?}
    Validate -- Yes --> Dashboard
    Validate -- No --> Error[Show Error]
    Error --> Login
\`\`\`

This creates a complete login flow diagram with decision points, loops, and clear labels. Notice how readable the source text is — even without rendering, you can understand the flow.

## Key Syntax Concepts

**Nodes** are defined with text in brackets:
- \`A[Rectangle]\` — standard box
- \`A(Rounded)\` — rounded corners
- \`A{Diamond}\` — decision/rhombus
- \`A([Stadium])\` — stadium shape
- \`A([Circle])\` — circle

**Edges** connect nodes:
- \`A --> B\` — arrow
- \`A --- B\` — line without arrow
- \`A -->|label| B\` — arrow with label
- \`A -.-> B\` — dotted arrow
- \`A ==> B\` — thick arrow

**Direction** is set on the first line:
- \`graph TD\` — top to bottom
- \`graph LR\` — left to right
- \`graph BT\` — bottom to top
- \`graph RL\` — right to left

## Mermaid.js vs Traditional Tools

How does Mermaid compare to tools like Draw.io, Lucidchart, or Visio?

**Mermaid wins at:** speed, version control, documentation integration, automation, and cost (free).

**Traditional tools win at:** pixel-perfect layouts, complex custom styling, non-technical users, and presentation-ready output.

The sweet spot for Mermaid is **technical documentation** — README files, architecture docs, design documents, and wikis. For marketing materials or highly styled presentations, a GUI tool may be better.

## Common Use Cases

1. **Architecture diagrams** in project READMEs
2. **API flow documentation** with sequence diagrams
3. **Database schemas** with ER diagrams
4. **Sprint planning** with Gantt charts
5. **Decision trees** for business logic
6. **Onboarding docs** showing system overview
7. **State machines** for UI components or workflows

## Tips for Beginners

- **Start simple.** Get a basic flowchart working, then explore other diagram types.
- **Use a live editor** to see results instantly as you type.
- **Read the official docs** at [mermaid.js.org](https://mermaid.js.org) for syntax details.
- **Copy examples** and modify them — it's the fastest way to learn.
- **Keep diagrams focused.** One diagram per concept. If it's getting complex, split it.

## Conclusion

Mermaid.js bridges the gap between text-based documentation and visual communication. It's fast, free, version-controllable, and increasingly supported across the platforms developers already use. Whether you're documenting an API, planning a project, or modeling a database, Mermaid lets you create professional diagrams without leaving your text editor.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "how-to-create-flowchart-mermaid",
    title: "How to Create a Flowchart with Mermaid.js — Complete Guide",
    description: "Step-by-step guide to creating flowcharts with Mermaid.js. Learn node shapes, edge types, styling, subgraphs, and best practices with copy-paste examples.",
    date: "2025-12-05",
    keywords: ["mermaid flowchart", "create flowchart mermaid", "mermaid.js flowchart tutorial", "flowchart syntax", "diagram as code"],
    content: `
## Introduction to Mermaid Flowcharts

Flowcharts are the most popular diagram type in Mermaid.js, and for good reason. They're versatile enough to represent everything from simple processes to complex decision trees, and Mermaid makes them incredibly easy to create with just a few lines of text.

In this guide, you'll learn every aspect of Mermaid flowcharts — from basic syntax to advanced features like subgraphs, styling, and interaction.

## Basic Flowchart Syntax

Every Mermaid flowchart starts with a direction declaration:

\`\`\`
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\`

The direction keyword controls layout:

- **TD** or **TB** — Top to Bottom (default, most common)
- **LR** — Left to Right (great for pipelines)
- **BT** — Bottom to Top
- **RL** — Right to Left

You can also use \`flowchart\` instead of \`graph\` for the newer syntax with more features:

\`\`\`
flowchart LR
    A[Start] --> B[Process] --> C[End]
\`\`\`

## Node Shapes

Mermaid provides many node shapes to convey meaning visually:

\`\`\`
flowchart TD
    A[Rectangle - Default]
    B(Rounded Rectangle)
    C([Stadium Shape])
    D[[Subroutine]]
    E[(Database / Cylinder)]
    F((Circle))
    G{Diamond / Decision}
    H{{"Hexagon"}}
    I>Asymmetric / Flag]
    J[/Parallelogram/]
    K[\\Parallelogram Alt\\]
    L[/Trapezoid\\]
    M[\\Trapezoid Alt/]
\`\`\`

### When to Use Each Shape

- **Rectangle** (\`[text]\`): Standard process steps
- **Rounded** (\`(text)\`): Start/end terminals
- **Diamond** (\`{text}\`): Decision points (yes/no, true/false)
- **Cylinder** (\`[(text)]\`): Databases or storage
- **Circle** (\`((text))\`): Connectors or junction points
- **Stadium** (\`([text])\`): Terminal events
- **Parallelogram** (\`[/text/]\`): Input/output operations

## Edge Types — Connecting Nodes

Edges (arrows and lines) are how you connect nodes. Mermaid offers many styles:

\`\`\`
flowchart LR
    A -->|Arrow| B
    C ---|Line| D
    E -.->|Dotted arrow| F
    G ==>|Thick arrow| H
    I --o|Circle end| J
    K --x|Cross end| L
\`\`\`

### Edge Length

You can control edge length by adding extra dashes:

\`\`\`
flowchart TD
    A --> B
    A ----> C
    A -------> D
\`\`\`

Longer edges push nodes further apart, which helps with layout.

### Labeled Edges

Add labels to describe the relationship:

\`\`\`
flowchart TD
    A{Is it raining?}
    A -->|Yes| B[Take umbrella]
    A -->|No| C[Enjoy the sun]
\`\`\`

You can also use this syntax: \`A -- "label text" --> B\`

## Practical Example: CI/CD Pipeline

Let's build a real-world flowchart — a CI/CD deployment pipeline:

\`\`\`
flowchart LR
    A([Developer pushes code]) --> B[Run Linter]
    B --> C[Run Unit Tests]
    C --> D{Tests pass?}
    D -->|Yes| E[Build Docker Image]
    D -->|No| F[Notify Developer]
    F --> A
    E --> G[Push to Registry]
    G --> H{Environment?}
    H -->|Staging| I[Deploy to Staging]
    H -->|Production| J[Manual Approval]
    J --> K[Deploy to Production]
    I --> L[Run E2E Tests]
    L --> M{E2E pass?}
    M -->|Yes| J
    M -->|No| F
\`\`\`

This single text block produces a complete CI/CD visualization that's easy to update when the process changes.

## Subgraphs — Grouping Related Nodes

Subgraphs let you group nodes into labeled sections:

\`\`\`
flowchart TB
    subgraph Frontend
        A[React App] --> B[API Client]
    end
    subgraph Backend
        C[Express Server] --> D[Business Logic]
        D --> E[(PostgreSQL)]
    end
    B --> C
\`\`\`

### Nested Subgraphs

You can nest subgraphs for complex architectures:

\`\`\`
flowchart TB
    subgraph Cloud["AWS Cloud"]
        subgraph VPC["VPC"]
            subgraph Public["Public Subnet"]
                ALB[Load Balancer]
            end
            subgraph Private["Private Subnet"]
                ECS[ECS Service]
                RDS[(RDS Database)]
            end
        end
    end
    User([User]) --> ALB --> ECS --> RDS
\`\`\`

### Subgraph Direction

Each subgraph can have its own direction:

\`\`\`
flowchart LR
    subgraph TOP
        direction TB
        A --> B
    end
    subgraph BOTTOM
        direction TB
        C --> D
    end
    TOP --> BOTTOM
\`\`\`

## Styling Your Flowcharts

### Inline Styles

Apply CSS-like styles directly to nodes:

\`\`\`
flowchart LR
    A[Critical]:::critical --> B[Normal] --> C[Success]:::success

    classDef critical fill:#ff6b6b,stroke:#c0392b,color:white
    classDef success fill:#51cf66,stroke:#2f9e44,color:white
\`\`\`

### Style by Node ID

\`\`\`
flowchart TD
    A[Important Node]
    style A fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

### Common Style Patterns

Here's a reusable set of class definitions:

\`\`\`
flowchart TD
    A[Start]:::start --> B[Process]:::process --> C{Decision}:::decision
    C -->|Yes| D[Success]:::success
    C -->|No| E[Error]:::error

    classDef start fill:#667eea,stroke:#5a67d8,color:white
    classDef process fill:#f7fafc,stroke:#cbd5e0
    classDef decision fill:#faf089,stroke:#d69e2e
    classDef success fill:#c6f6d5,stroke:#38a169
    classDef error fill:#fed7d7,stroke:#e53e3e
\`\`\`

## Advanced Techniques

### Multiple Links from One Node

\`\`\`
flowchart TD
    A[Router] --> B[Handler 1]
    A --> C[Handler 2]
    A --> D[Handler 3]
    B & C & D --> E[Response]
\`\`\`

The \`&\` operator connects multiple nodes at once.

### Special Characters in Labels

Use quotes for special characters:

\`\`\`
flowchart LR
    A["Node with (parentheses)"] --> B["Contains {braces}"]
    B --> C["Has #quot;quotes#quot;"]
\`\`\`

### Comments

Add comments with \`%%\`:

\`\`\`
flowchart TD
    %% This is a comment
    A --> B
    %% Another comment
    B --> C
\`\`\`

## Best Practices for Flowcharts

1. **Choose direction wisely.** Use LR for processes/pipelines, TD for hierarchies and decision trees.

2. **Use meaningful node IDs.** Instead of \`A\`, \`B\`, \`C\`, try \`start\`, \`validate\`, \`deploy\`. It makes the source readable.

3. **Label your edges.** Decision diamonds should always have labeled outputs (Yes/No, True/False, Success/Error).

4. **Keep it focused.** A flowchart with more than 15-20 nodes becomes hard to read. Split complex flows into multiple diagrams.

5. **Use subgraphs** for logical grouping. They make large diagrams scannable.

6. **Apply consistent styling.** Define class definitions once and reuse them. Color-code by category (errors = red, success = green, etc.).

7. **Test incrementally.** Build your flowchart step by step, rendering after each addition. This makes it easy to catch syntax errors.

## Common Mistakes and Fixes

**Problem:** Nodes not connecting properly.
**Fix:** Make sure node IDs are consistent. \`A\` and \`a\` are different nodes.

**Problem:** Text with special characters breaks rendering.
**Fix:** Wrap text in double quotes: \`A["My (special) text"]\`

**Problem:** Layout is messy with too many crossing lines.
**Fix:** Rearrange node order in the source. Mermaid renders top-to-bottom in the order nodes appear. Also try changing direction (LR vs TD).

**Problem:** Subgraph edges look wrong.
**Fix:** Connect to specific nodes inside subgraphs, not the subgraph itself.

## Conclusion

Mermaid flowcharts are powerful enough for real-world documentation yet simple enough to create in seconds. Start with basic nodes and arrows, then progressively add shapes, styles, and subgraphs as needed. The key advantage is maintainability — when your process changes, updating a few lines of text is infinitely easier than rearranging boxes in a drawing tool.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-sequence-diagram-tutorial",
    title: "Mermaid Sequence Diagram Tutorial with Examples",
    description: "Learn how to create sequence diagrams with Mermaid.js. Covers participants, messages, loops, alt blocks, notes, and activation with real-world examples.",
    date: "2025-12-08",
    keywords: ["mermaid sequence diagram", "sequence diagram tutorial", "mermaid.js sequence", "UML sequence diagram", "API sequence diagram"],
    content: `
## What Are Sequence Diagrams?

Sequence diagrams show how different components or actors interact over time. They're perfect for documenting API calls, microservice communication, authentication flows, and any process where the **order of messages** matters.

Mermaid makes sequence diagrams easy to write and maintain — no drawing tools needed.

## Basic Syntax

\`\`\`
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    Bob-->>Alice: Great!
\`\`\`

The key elements:
- **Participants** are automatically created when first mentioned
- **Solid arrow** (\`->>\`) = synchronous message
- **Dashed arrow** (\`-->>\`) = response / async message
- Messages are labeled after the colon

## Arrow Types

Mermaid supports several arrow types for different message semantics:

\`\`\`
sequenceDiagram
    A->>B: Solid line with arrowhead (sync call)
    B-->>A: Dotted line with arrowhead (response)
    A-)B: Solid line with open arrow (async)
    B--)A: Dotted line with open arrow (async response)
    A-xB: Solid line with cross (lost message)
    B--xA: Dotted line with cross
\`\`\`

## Defining Participants

You can explicitly declare participants to control order and add aliases:

\`\`\`
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API Server
    participant D as Database

    U->>F: Click "Login"
    F->>A: POST /auth/login
    A->>D: SELECT user WHERE email=?
    D-->>A: User record
    A-->>F: JWT token
    F-->>U: Redirect to dashboard
\`\`\`

Use \`actor\` instead of \`participant\` to show a stick figure:

\`\`\`
sequenceDiagram
    actor User
    participant API
    User->>API: Request
    API-->>User: Response
\`\`\`

## Activation Bars

Activation bars show when a participant is actively processing:

\`\`\`
sequenceDiagram
    Client->>+Server: HTTP Request
    Server->>+Database: Query
    Database-->>-Server: Results
    Server-->>-Client: HTTP Response
\`\`\`

The \`+\` activates (starts the bar) and \`-\` deactivates (ends it). You can also use explicit syntax:

\`\`\`
sequenceDiagram
    Client->>Server: Request
    activate Server
    Server->>Database: Query
    activate Database
    Database-->>Server: Results
    deactivate Database
    Server-->>Client: Response
    deactivate Server
\`\`\`

## Real-World Example: OAuth 2.0 Flow

\`\`\`
sequenceDiagram
    actor User
    participant App as Client App
    participant Auth as Auth Server
    participant API as Resource Server

    User->>App: Click "Login with Google"
    App->>Auth: Redirect to /authorize
    Auth->>User: Show consent screen
    User->>Auth: Grant permission
    Auth-->>App: Authorization code
    App->>+Auth: Exchange code for token
    Auth-->>-App: Access token + Refresh token
    App->>+API: GET /user (Bearer token)
    API-->>-App: User profile data
    App-->>User: Show profile
\`\`\`

## Loops

Show repeated interactions:

\`\`\`
sequenceDiagram
    participant Client
    participant Server

    Client->>Server: Connect
    loop Every 30 seconds
        Client->>Server: Heartbeat ping
        Server-->>Client: Pong
    end
    Client->>Server: Disconnect
\`\`\`

## Alt / Else Blocks (Conditionals)

Show branching logic:

\`\`\`
sequenceDiagram
    participant User
    participant API
    participant DB

    User->>API: POST /login
    API->>DB: Check credentials
    alt Valid credentials
        DB-->>API: User found
        API-->>User: 200 OK + Token
    else Invalid credentials
        DB-->>API: Not found
        API-->>User: 401 Unauthorized
    end
\`\`\`

## Optional Blocks

The \`opt\` block shows something that may or may not happen:

\`\`\`
sequenceDiagram
    participant User
    participant Cart
    participant Payment

    User->>Cart: Add items
    User->>Cart: Checkout
    opt Has coupon
        User->>Cart: Apply coupon code
        Cart-->>User: Discount applied
    end
    Cart->>Payment: Process payment
    Payment-->>Cart: Confirmation
    Cart-->>User: Order complete
\`\`\`

## Parallel (Par) Blocks

Show things happening simultaneously:

\`\`\`
sequenceDiagram
    participant App
    participant UserSvc as User Service
    participant OrderSvc as Order Service
    participant NotifSvc as Notification Service

    App->>App: User places order
    par Parallel requests
        App->>UserSvc: Get user details
        App->>OrderSvc: Create order
        App->>NotifSvc: Send confirmation
    end
    UserSvc-->>App: User data
    OrderSvc-->>App: Order ID
    NotifSvc-->>App: Sent OK
\`\`\`

## Notes

Add notes for extra context:

\`\`\`
sequenceDiagram
    participant C as Client
    participant S as Server

    Note over C,S: TLS Handshake
    C->>S: ClientHello
    S-->>C: ServerHello + Certificate
    C->>S: Key Exchange
    Note over C,S: Encrypted connection established

    C->>S: GET /api/data
    Note right of S: Validate token, query DB
    S-->>C: 200 OK + JSON
\`\`\`

Note positions: \`Note left of\`, \`Note right of\`, \`Note over A,B\` (spans multiple participants).

## Critical Regions

Highlight critical sections:

\`\`\`
sequenceDiagram
    participant App
    participant DB

    App->>DB: BEGIN TRANSACTION
    critical Database Transaction
        App->>DB: UPDATE accounts SET balance = balance - 100 WHERE id = 1
        App->>DB: UPDATE accounts SET balance = balance + 100 WHERE id = 2
    option Transaction fails
        DB-->>App: ROLLBACK
    end
    App->>DB: COMMIT
    DB-->>App: OK
\`\`\`

## Autonumber

Automatically number each message for easy reference:

\`\`\`
sequenceDiagram
    autonumber
    Alice->>Bob: Request
    Bob->>Charlie: Forward
    Charlie-->>Bob: Response
    Bob-->>Alice: Response
\`\`\`

## Real-World Example: Microservice Order Flow

\`\`\`
sequenceDiagram
    autonumber
    actor Customer
    participant GW as API Gateway
    participant OS as Order Service
    participant IS as Inventory Service
    participant PS as Payment Service
    participant NS as Notification Service

    Customer->>+GW: POST /orders
    GW->>+OS: Create order
    OS->>+IS: Check stock
    IS-->>-OS: In stock

    OS->>+PS: Charge customer
    alt Payment success
        PS-->>-OS: Payment confirmed
        OS->>NS: Send confirmation email
        NS-->>OS: Queued
        OS-->>-GW: Order created (201)
        GW-->>-Customer: Order confirmation
    else Payment failed
        PS-->>OS: Payment declined
        OS->>IS: Release reservation
        OS-->>GW: Payment failed (402)
        GW-->>Customer: Error message
    end
\`\`\`

## Best Practices

1. **Declare participants explicitly** to control the order they appear left-to-right.
2. **Use aliases** for long service names — \`participant PS as Payment Service\`.
3. **Use activation bars** to show processing duration — it makes timing clear.
4. **Add autonumber** when you'll reference steps in documentation ("In step 3, the server validates...").
5. **Use alt/else** for error handling flows — document both happy and sad paths.
6. **Keep it focused** — one sequence diagram per use case. Don't try to show every possible flow in one diagram.
7. **Add notes** for non-obvious details like "Token expires in 1 hour" or "Retries 3 times".

## Common Pitfalls

- **Forgetting the closing \`end\`** for loop/alt/opt/par blocks — each needs a matching end.
- **Too many participants** — more than 6-7 makes the diagram too wide. Group related services.
- **Missing responses** — every request should ideally have a response shown, even if it's async.

## Conclusion

Sequence diagrams are essential for documenting how systems communicate. Mermaid's text-based approach means your diagrams stay in sync with your code, live in your repo, and are easy to update. Start with the basic arrow syntax, then add loops, alt blocks, and activation as needed.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-gantt-chart-examples",
    title: "Mermaid Gantt Chart: Examples & Best Practices",
    description: "Create Gantt charts with Mermaid.js for project planning. Learn task syntax, dependencies, milestones, sections, and date formatting with practical examples.",
    date: "2025-12-12",
    keywords: ["mermaid gantt chart", "gantt chart examples", "mermaid.js gantt", "project timeline diagram", "gantt chart tutorial"],
    content: `
## Introduction to Mermaid Gantt Charts

Gantt charts visualize project schedules — showing tasks, durations, dependencies, and milestones on a timeline. While dedicated project management tools like Jira or MS Project offer interactive Gantt charts, Mermaid lets you create them as code that lives in your documentation.

This is perfect for README files, design docs, and technical proposals where you need a visual timeline without the overhead of a separate tool.

## Basic Gantt Syntax

\`\`\`
gantt
    title My Project Plan
    dateFormat YYYY-MM-DD

    section Planning
    Requirements gathering :a1, 2025-01-01, 7d
    System design          :a2, after a1, 5d

    section Development
    Backend implementation  :b1, after a2, 14d
    Frontend implementation :b2, after a2, 10d

    section Testing
    Integration testing     :c1, after b1, 5d
    UAT                     :c2, after c1, 3d
\`\`\`

### Key Elements

- **\`title\`** — Chart title
- **\`dateFormat\`** — How dates are parsed (YYYY-MM-DD is standard)
- **\`section\`** — Groups related tasks
- **Tasks** follow the format: \`Task name : id, start, duration\`

## Task Definition Formats

Tasks can be defined in several ways:

\`\`\`
gantt
    dateFormat YYYY-MM-DD

    section Various Formats
    Fixed dates       :t1, 2025-03-01, 2025-03-10
    With duration     :t2, 2025-03-01, 10d
    After dependency  :t3, after t1, 5d
    No ID needed      :2025-03-15, 7d
\`\`\`

### Duration Units

- \`d\` — days (most common)
- \`h\` — hours
- \`m\` — minutes
- \`w\` — weeks

## Task States

Tasks can have different visual states:

\`\`\`
gantt
    dateFormat YYYY-MM-DD

    section Task States
    Completed task    :done, t1, 2025-01-01, 5d
    Active task       :active, t2, after t1, 5d
    Future task       :t3, after t2, 5d
    Critical task     :crit, t4, after t3, 3d
    Critical & active :crit, active, t5, after t4, 3d
\`\`\`

- **\`done\`** — Shown as completed (usually gray)
- **\`active\`** — Currently in progress (highlighted)
- **\`crit\`** — Critical path (usually red)
- These can be combined: \`crit, done\` or \`crit, active\`

## Milestones

Mark key dates with zero-duration milestones:

\`\`\`
gantt
    dateFormat YYYY-MM-DD

    section Sprint 1
    User stories          :s1, 2025-01-06, 10d
    Sprint 1 review       :milestone, m1, after s1, 0d

    section Sprint 2
    Development           :s2, after m1, 10d
    Sprint 2 review       :milestone, m2, after s2, 0d

    section Release
    Release prep          :r1, after m2, 3d
    Go live               :milestone, m3, after r1, 0d
\`\`\`

## Dependencies

Tasks can depend on one or more previous tasks:

\`\`\`
gantt
    dateFormat YYYY-MM-DD

    section Backend
    API design        :api, 2025-02-01, 5d
    Database schema   :db, 2025-02-01, 3d
    API development   :apidev, after api db, 10d

    section Frontend
    UI mockups        :ui, 2025-02-01, 7d
    Frontend dev      :fedev, after ui apidev, 10d

    section QA
    Testing           :test, after fedev, 5d
\`\`\`

Notice \`after api db\` — the task starts after BOTH \`api\` and \`db\` are complete.

## Practical Example: Software Release Plan

\`\`\`
gantt
    title Q1 2025 Release Plan
    dateFormat YYYY-MM-DD
    axisFormat %b %d

    section Discovery
    User research           :done, ur, 2025-01-06, 10d
    Competitive analysis    :done, ca, 2025-01-06, 7d
    Requirements doc        :done, rd, after ur ca, 5d
    Requirements sign-off   :milestone, done, ms1, after rd, 0d

    section Design
    Architecture design     :done, ad, after ms1, 7d
    UI/UX design            :active, ux, after ms1, 10d
    Design review           :milestone, ms2, after ad ux, 0d

    section Development
    Backend services        :be, after ms2, 15d
    Frontend application    :fe, after ms2, 15d
    API integration         :int, after be, 5d

    section Quality
    Unit testing            :ut, after be fe, 5d
    Integration testing     :it, after int ut, 5d
    Performance testing     :crit, pt, after it, 3d
    Security audit          :crit, sa, after it, 3d

    section Release
    Staging deployment      :stg, after pt sa, 2d
    UAT                     :uat, after stg, 5d
    Production deployment   :milestone, crit, prod, after uat, 0d
\`\`\`

## Date Formatting

### Input Date Format

Control how Mermaid parses your dates:

\`\`\`
gantt
    dateFormat DD-MM-YYYY
    task1 :01-03-2025, 10d
\`\`\`

Common formats:
- \`YYYY-MM-DD\` — ISO standard (recommended)
- \`DD-MM-YYYY\` — European
- \`MM-DD-YYYY\` — US

### Axis Display Format

Control how the timeline axis looks:

\`\`\`
gantt
    dateFormat YYYY-MM-DD
    axisFormat %Y-%m-%d

    section Tasks
    Task 1 :2025-01-01, 30d
\`\`\`

Common axis formats:
- \`%Y-%m-%d\` — 2025-01-15
- \`%b %d\` — Jan 15
- \`%d/%m\` — 15/01
- \`%B %Y\` — January 2025

## Excluding Dates

Skip weekends or holidays:

\`\`\`
gantt
    dateFormat YYYY-MM-DD
    excludes weekends

    section Development
    Task 1 :t1, 2025-03-03, 5d
    Task 2 :t2, after t1, 5d
\`\`\`

With weekends excluded, a 5-day task truly means 5 business days.

You can also exclude specific dates:
\`\`\`
excludes weekends, 2025-12-25, 2025-12-26
\`\`\`

## Sections as Swim Lanes

Use sections to organize by team, phase, or component:

\`\`\`
gantt
    title Cross-Team Project
    dateFormat YYYY-MM-DD

    section Team Alpha
    Feature A    :a1, 2025-03-01, 14d
    Feature B    :a2, after a1, 7d

    section Team Beta
    Feature C    :b1, 2025-03-01, 10d
    Feature D    :b2, after b1, 10d

    section Team Gamma
    Feature E    :g1, 2025-03-08, 14d
    Integration  :g2, after a2 b2 g1, 5d
\`\`\`

## Best Practices

1. **Use ISO date format** (\`YYYY-MM-DD\`) — it's unambiguous and sorts correctly.

2. **Give tasks meaningful IDs** — \`api_design\` is clearer than \`a1\` when reading dependencies.

3. **Mark the critical path** — use \`crit\` on tasks that directly impact the delivery date.

4. **Use milestones** for key dates — they provide clear visual checkpoints.

5. **Exclude weekends** with \`excludes weekends\` for realistic business-day planning.

6. **Keep sections logical** — group by team, phase, or component. Don't mix organizational patterns.

7. **Update the \`done\`/\`active\` states** as work progresses — this makes the chart a living document.

8. **Add \`axisFormat\`** to make the timeline readable. \`%b %d\` (Jan 15) is usually the best balance of information and space.

## Limitations

- Mermaid Gantt charts are **read-only** — you can't drag tasks or interact with them.
- Complex projects with hundreds of tasks are better served by dedicated PM tools.
- Resource assignment and workload balancing aren't supported.
- The layout engine may struggle with many overlapping dependencies.

Mermaid Gantt charts shine for **documentation** — embedding a project timeline in a README, proposal, or design doc where the audience needs to understand the plan but doesn't need to interact with it.

## Conclusion

Mermaid Gantt charts turn project timelines into maintainable code. They're perfect for technical documentation, sprint planning overviews, and release plans that live alongside your source code. Start simple with sections and tasks, then add dependencies, milestones, and critical path markers as your planning matures.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-class-diagram-uml",
    title: "Mermaid Class Diagrams for UML — Developer Guide",
    description: "Create UML class diagrams with Mermaid.js. Learn classes, attributes, methods, relationships, inheritance, interfaces, and design patterns with examples.",
    date: "2025-12-15",
    keywords: ["mermaid class diagram", "UML class diagram", "mermaid.js UML", "class diagram tutorial", "object oriented diagram"],
    content: `
## What Are Class Diagrams?

Class diagrams are the backbone of UML (Unified Modeling Language) and the most common diagram for modeling object-oriented systems. They show classes, their attributes and methods, and the relationships between them.

Mermaid lets you create class diagrams from text, making them perfect for documenting codebases, planning architectures, and communicating designs in pull requests.

## Basic Class Syntax

\`\`\`
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
        +move(distance) void
    }
\`\`\`

### Visibility Modifiers

Mermaid follows UML conventions:
- \`+\` Public
- \`-\` Private
- \`#\` Protected
- \`~\` Package/Internal

\`\`\`
classDiagram
    class User {
        +String username
        -String passwordHash
        #String email
        ~int loginAttempts
        +login(password) bool
        -hashPassword(raw) String
        #validateEmail() bool
    }
\`\`\`

## Relationships

### Inheritance (Generalization)

\`\`\`
classDiagram
    Animal <|-- Dog
    Animal <|-- Cat
    Animal <|-- Bird

    class Animal {
        +String name
        +makeSound() void
    }
    class Dog {
        +fetch() void
    }
    class Cat {
        +purr() void
    }
    class Bird {
        +fly() void
    }
\`\`\`

### All Relationship Types

\`\`\`
classDiagram
    classA <|-- classB : Inheritance
    classC *-- classD : Composition
    classE o-- classF : Aggregation
    classG --> classH : Association
    classI -- classJ : Link
    classK ..> classL : Dependency
    classM ..|> classN : Realization
\`\`\`

**When to use each:**
- **Inheritance** (\`<|--\`): "is a" — Dog is an Animal
- **Composition** (\`*--\`): "owns, can't exist without" — Car owns Engine
- **Aggregation** (\`o--\`): "has, can exist independently" — Department has Employees
- **Association** (\`-->\`): "uses" — Order references Customer
- **Dependency** (\`..>\`): "temporarily uses" — Service depends on Logger
- **Realization** (\`..|>\`): "implements" — UserService implements IUserService

## Cardinality (Multiplicity)

Show how many instances relate:

\`\`\`
classDiagram
    Customer "1" --> "*" Order : places
    Order "1" --> "1..*" OrderItem : contains
    OrderItem "*" --> "1" Product : references
\`\`\`

Common multiplicities:
- \`1\` — exactly one
- \`0..1\` — zero or one
- \`*\` or \`0..*\` — zero or more
- \`1..*\` — one or more

## Interfaces and Abstract Classes

\`\`\`
classDiagram
    class IRepository {
        <<interface>>
        +findById(id) Entity
        +save(entity) void
        +delete(id) void
    }
    class AbstractRepository {
        <<abstract>>
        #DataSource connection
        +findById(id) Entity
        #getConnection() DataSource
    }
    class UserRepository {
        +findById(id) User
        +findByEmail(email) User
        +save(user) void
        +delete(id) void
    }

    IRepository <|.. AbstractRepository
    AbstractRepository <|-- UserRepository
\`\`\`

### Annotations

Use \`<<annotation>>\` for stereotypes:

\`\`\`
classDiagram
    class PaymentService {
        <<service>>
    }
    class UserDTO {
        <<dto>>
    }
    class Colors {
        <<enumeration>>
        RED
        GREEN
        BLUE
    }
\`\`\`

## Practical Example: E-Commerce Domain Model

\`\`\`
classDiagram
    class Customer {
        +String id
        +String name
        +String email
        +Address[] addresses
        +placeOrder(items) Order
        +getOrderHistory() Order[]
    }

    class Order {
        +String id
        +Date createdAt
        +OrderStatus status
        +Customer customer
        +OrderItem[] items
        +getTotal() Decimal
        +cancel() void
    }

    class OrderItem {
        +Product product
        +int quantity
        +Decimal unitPrice
        +getSubtotal() Decimal
    }

    class Product {
        +String id
        +String name
        +String description
        +Decimal price
        +int stockCount
        +isInStock() bool
    }

    class Address {
        +String street
        +String city
        +String state
        +String zipCode
        +String country
    }

    class OrderStatus {
        <<enumeration>>
        PENDING
        CONFIRMED
        SHIPPED
        DELIVERED
        CANCELLED
    }

    Customer "1" --> "*" Order : places
    Customer "1" --> "*" Address : has
    Order "1" --> "1..*" OrderItem : contains
    Order --> OrderStatus
    OrderItem "*" --> "1" Product : references
\`\`\`

## Design Pattern: Repository Pattern

\`\`\`
classDiagram
    class IRepository~T~ {
        <<interface>>
        +findById(id) T
        +findAll() T[]
        +save(entity) T
        +delete(id) void
    }

    class UserRepository {
        -DataSource db
        +findById(id) User
        +findAll() User[]
        +save(user) User
        +delete(id) void
        +findByEmail(email) User
    }

    class ProductRepository {
        -DataSource db
        +findById(id) Product
        +findAll() Product[]
        +save(product) Product
        +delete(id) void
        +findByCategory(cat) Product[]
    }

    class UserService {
        -UserRepository userRepo
        +getUser(id) User
        +createUser(data) User
        +updateUser(id, data) User
    }

    IRepository~T~ <|.. UserRepository
    IRepository~T~ <|.. ProductRepository
    UserService --> UserRepository : uses
\`\`\`

## Generics

Mermaid supports generic types with tilde syntax:

\`\`\`
classDiagram
    class List~T~ {
        +add(item T) void
        +get(index int) T
        +size() int
    }
    class Map~K, V~ {
        +put(key K, value V) void
        +get(key K) V
    }
\`\`\`

## Namespaces

Group related classes:

\`\`\`
classDiagram
    namespace Domain {
        class User {
            +String name
        }
        class Order {
            +Date date
        }
    }
    namespace Infrastructure {
        class Database {
            +connect() void
        }
        class Cache {
            +get(key) String
        }
    }
    User --> Order
    Order ..> Database
\`\`\`

## Styling

\`\`\`
classDiagram
    class Service {
        +process() void
    }
    class Entity {
        +String id
    }

    style Service fill:#e1f5fe,stroke:#0288d1
    style Entity fill:#f3e5f5,stroke:#7b1fa2
\`\`\`

## Best Practices

1. **Focus on the domain.** Don't diagram every utility class — show the important domain entities and their relationships.

2. **Use correct relationship types.** Composition vs. aggregation vs. association matters for communicating intent.

3. **Include cardinality** on associations — it clarifies the data model significantly.

4. **Show key methods only.** Skip getters/setters and boilerplate. Show the methods that define behavior.

5. **Use interfaces** to show contracts. This communicates the architecture's extension points.

6. **Group with namespaces** for large models. Separate domain, infrastructure, and application layers.

7. **Add annotations** (\`<<service>>\`, \`<<dto>>\`, \`<<entity>>\`) to clarify the role of each class.

8. **Keep diagrams focused.** One diagram per bounded context or module. A single diagram with 30+ classes helps nobody.

## Conclusion

Mermaid class diagrams bring UML into your codebase. They're ideal for documenting domain models, communicating design decisions in pull requests, and maintaining architecture docs that stay current. The text-based format means they're diffable, reviewable, and version-controlled — everything a developer needs.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-vs-drawio-vs-lucidchart",
    title: "Mermaid vs Draw.io vs Lucidchart — Which Diagramming Tool to Use?",
    description: "Compare Mermaid.js, Draw.io, and Lucidchart for diagramming. Pricing, features, collaboration, version control, and when to use each tool.",
    date: "2025-12-18",
    keywords: ["mermaid vs drawio", "mermaid vs lucidchart", "diagramming tool comparison", "best diagram tool developers", "diagrams as code vs GUI"],
    content: `
## The Diagramming Landscape

Developers and teams need diagrams for architecture docs, flowcharts, sequence diagrams, database schemas, and project planning. But with dozens of tools available, choosing the right one matters.

This comparison focuses on three popular options that represent different approaches:

- **Mermaid.js** — Diagrams as code (text-based)
- **Draw.io (diagrams.net)** — Free GUI-based diagramming
- **Lucidchart** — Premium collaborative diagramming platform

## Quick Comparison

### Mermaid.js

**Approach:** Write text, get diagrams.

**Price:** Free and open-source.

**Best for:** Developers who want diagrams in docs, READMEs, and wikis.

**Runs:** Browser, CLI, or embedded in platforms (GitHub, GitLab, Notion, etc.)

### Draw.io (diagrams.net)

**Approach:** Drag-and-drop GUI in the browser.

**Price:** Free (open-source).

**Best for:** Teams that need flexible, visual diagram editing without paying for a SaaS tool.

**Runs:** Browser, desktop app, or VS Code extension.

### Lucidchart

**Approach:** Premium SaaS with real-time collaboration.

**Price:** Free tier (3 documents), paid plans from $7.95/month.

**Best for:** Cross-functional teams, enterprise environments, non-technical stakeholders.

**Runs:** Browser-based SaaS.

## Feature Comparison

### Diagram Types

**Mermaid** supports: flowcharts, sequence diagrams, Gantt charts, class diagrams, state diagrams, ER diagrams, pie charts, mind maps, git graphs, timelines, and more. New types are added regularly.

**Draw.io** supports virtually any diagram type through its extensive shape libraries. Flowcharts, UML, network diagrams, floor plans, mockups — if you can draw it, Draw.io can handle it.

**Lucidchart** has the broadest template library with hundreds of pre-built templates. It also supports data-linked diagrams that update automatically from external data sources.

**Winner:** Draw.io and Lucidchart for variety. Mermaid for structured, code-based diagrams.

### Version Control

**Mermaid** is the clear winner here. Diagrams are plain text, so they work perfectly with Git. You can diff changes, review in PRs, and track history like any source file.

**Draw.io** saves as XML, which can be committed to Git. However, diffs are hard to read since XML changes don't map intuitively to visual changes. The VS Code extension helps by letting you edit .drawio files in your repo.

**Lucidchart** has its own version history within the platform, but it's not Git-integrated. Exporting and committing is a manual process.

**Winner:** Mermaid, by a wide margin.

### Collaboration

**Mermaid** collaborates through your existing workflow — Git branches, pull requests, and code review. Multiple people can work on diagrams through normal merge processes.

**Draw.io** supports real-time collaboration when using the web version. Multiple users can edit simultaneously. When using the file-based version (VS Code, desktop), collaboration is through your file sharing system.

**Lucidchart** has the best real-time collaboration — multiple cursors, comments, @mentions, team folders, and fine-grained permissions. It's built for teams.

**Winner:** Lucidchart for real-time collaboration. Mermaid for async/developer workflows.

### Learning Curve

**Mermaid** requires learning its syntax, which takes an hour or two for basics. The payoff is speed — once learned, you create diagrams faster than any GUI. Non-technical users may find it intimidating.

**Draw.io** is intuitive for anyone who's used a drawing tool. Drag shapes, connect them, add text. Very low barrier to entry.

**Lucidchart** is polished and user-friendly, with guided templates and an intuitive interface. Slightly steeper learning curve than Draw.io due to more features.

**Winner:** Draw.io for immediate usability. Mermaid for long-term speed.

### Platform Integration

**Mermaid** renders natively in GitHub, GitLab, Notion, Obsidian, Docusaurus, MkDocs, Confluence (plugins), Slack (via links), and more. It's the most embeddable option.

**Draw.io** integrates with Confluence, Jira, Google Drive, OneDrive, and has a VS Code extension. Files can be embedded in many platforms.

**Lucidchart** integrates with Google Workspace, Microsoft 365, Confluence, Jira, Slack, and many enterprise tools. Deep integrations but requires a Lucidchart account.

**Winner:** Mermaid for developer platforms. Lucidchart for enterprise/business platforms.

### Styling and Customization

**Mermaid** offers themes and basic CSS-like styling. You can change colors, shapes, and fonts, but pixel-perfect control is limited. The auto-layout engine decides positioning.

**Draw.io** gives you full control over every element — position, size, color, gradient, shadow, font, and more. You can create presentation-quality diagrams.

**Lucidchart** offers the most polished styling with professional themes, brand kits, and pixel-perfect control. Diagrams look great out of the box.

**Winner:** Lucidchart for polish. Draw.io for free pixel-perfect control. Mermaid accepts "good enough" layout.

### Export Options

**Mermaid** exports to SVG and PNG. Through CLI tools, you can also generate PDF.

**Draw.io** exports to PNG, SVG, PDF, JPEG, XML, HTML, and VSDX (Visio format).

**Lucidchart** exports to PNG, PDF, SVG, CSV, Visio, and can publish interactive web links.

**Winner:** Draw.io for format variety. All three cover the essentials.

## When to Use Each Tool

### Choose Mermaid When:

- You're a **developer** documenting code or architecture
- Diagrams need to live in **Git** alongside source code
- You want diagrams in **README files** or documentation sites
- **Speed** matters more than pixel-perfect styling
- You need diagrams that are **easy to update** as code changes
- Budget is **$0** and you don't want account lock-in
- You're working with **technical audiences** who read code

### Choose Draw.io When:

- You need **free** visual diagramming with full control
- You're creating **network diagrams**, **floor plans**, or **mockups** that need precise positioning
- Your team includes **non-technical members** who can't write code
- You want to store diagram files **locally or in your repo** without a SaaS dependency
- You need **Visio compatibility** without paying for Visio

### Choose Lucidchart When:

- Your team needs **real-time collaboration** on diagrams
- You're in an **enterprise environment** with compliance requirements
- **Non-technical stakeholders** (PMs, executives) need to create and view diagrams
- You want **templates** for every conceivable diagram type
- You need **data-linked diagrams** that update from external sources
- Budget allows $8-10/user/month

## The Hybrid Approach

Many teams use multiple tools:

- **Mermaid** for technical docs and README diagrams (version-controlled)
- **Draw.io** for ad-hoc diagrams and complex visual layouts (free)
- **Lucidchart** for executive presentations and cross-team collaboration (polished)

There's no rule saying you must pick one. Use the right tool for each context.

## Cost Summary

| Tool | Free Tier | Paid Plans |
|---|---|---|
| Mermaid.js | Fully free, open-source | N/A |
| Draw.io | Fully free, open-source | Confluence/Jira plugins are paid |
| Lucidchart | 3 documents, 60 shapes | $7.95+/user/month |

## Conclusion

**Mermaid** is the best choice for developers who want maintainable, version-controlled diagrams embedded in their documentation. **Draw.io** is the best free visual diagramming tool for teams that need GUI flexibility. **Lucidchart** is the best premium option for collaborative, cross-functional teams.

The "best" tool depends on your audience, workflow, and budget. For technical documentation that lives in code repositories, Mermaid is hard to beat.

[Try creating diagrams as code in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-in-github-readme",
    title: "How to Use Mermaid Diagrams in GitHub README Files",
    description: "Add diagrams to your GitHub README with native Mermaid support. Learn syntax, tips for rendering, common issues, and best practices for documentation.",
    date: "2025-12-20",
    keywords: ["mermaid github readme", "github diagram", "mermaid markdown", "github mermaid support", "readme diagrams"],
    content: `
## GitHub Supports Mermaid Natively

Since February 2022, GitHub renders Mermaid diagrams directly in Markdown files. No plugins, no extensions, no build steps — just wrap your Mermaid code in a mermaid code fence and GitHub does the rest.

This is a game-changer for documentation. Instead of maintaining separate image files that go stale, your diagrams live as text in your repo and render automatically.

## Basic Usage

Add a Mermaid diagram to any Markdown file (.md) by using a code fence with the \`mermaid\` language identifier:

\`\`\`
\`\`\`mermaid
graph LR
    A[User] --> B[Frontend]
    B --> C[API]
    C --> D[(Database)]
\`\`\`
\`\`\`

GitHub will render this as an interactive SVG diagram instead of showing the raw text.

### Where It Works

Mermaid rendering works in:
- **README.md** and all Markdown files
- **Issues** and **Pull Requests** (description and comments)
- **Discussions**
- **Wikis**
- **Gist files** (with .md extension)

## Common Diagram Types for READMEs

### Architecture Overview

Every project should have an architecture diagram. Here's a typical web app:

\`\`\`
\`\`\`mermaid
graph TB
    subgraph Client
        React[React SPA]
    end
    subgraph Server
        API[Express API]
        Auth[Auth Middleware]
        Cache[Redis Cache]
    end
    subgraph Data
        DB[(PostgreSQL)]
        S3[S3 Storage]
    end

    React -->|HTTPS| API
    API --> Auth
    API --> Cache
    API --> DB
    API --> S3
\`\`\`
\`\`\`

### Contribution Workflow

Help contributors understand your process:

\`\`\`
\`\`\`mermaid
graph TD
    Fork([Fork the repo]) --> Clone[Clone locally]
    Clone --> Branch[Create feature branch]
    Branch --> Code[Make changes]
    Code --> Test[Run tests]
    Test --> Commit[Commit changes]
    Commit --> Push[Push to fork]
    Push --> PR[Open Pull Request]
    PR --> Review{Code review}
    Review -->|Approved| Merge[Merge to main]
    Review -->|Changes requested| Code
\`\`\`
\`\`\`

### API Flow Documentation

Document your API interactions:

\`\`\`
\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Gateway as API Gateway
    participant Auth as Auth Service
    participant User as User Service

    Client->>Gateway: POST /api/login
    Gateway->>Auth: Validate credentials
    Auth->>User: Get user profile
    User-->>Auth: User data
    Auth-->>Gateway: JWT token
    Gateway-->>Client: 200 OK + token
\`\`\`
\`\`\`

### Database Schema

Document your data model:

\`\`\`
\`\`\`mermaid
erDiagram
    USER ||--o{ POST : creates
    USER ||--o{ COMMENT : writes
    POST ||--o{ COMMENT : has
    POST ||--o{ TAG : tagged_with
    USER {
        int id PK
        string username
        string email
        datetime created_at
    }
    POST {
        int id PK
        string title
        text content
        int author_id FK
        datetime published_at
    }
\`\`\`
\`\`\`

### Project Roadmap

Show your planned timeline:

\`\`\`
\`\`\`mermaid
gantt
    title Project Roadmap 2025
    dateFormat YYYY-MM-DD
    axisFormat %b

    section v1.0
    Core features    :done, 2025-01-01, 2025-03-01
    Beta release     :milestone, 2025-03-01, 0d

    section v1.1
    User feedback    :active, 2025-03-01, 2025-04-01
    Bug fixes        :2025-04-01, 2025-04-15
    v1.1 release     :milestone, 2025-04-15, 0d

    section v2.0
    New features     :2025-05-01, 2025-08-01
    v2.0 release     :milestone, 2025-08-01, 0d
\`\`\`
\`\`\`

## Best Practices for GitHub READMEs

### 1. Keep Diagrams Simple

GitHub's Mermaid renderer handles most features, but very complex diagrams with 50+ nodes can be slow to render or hard to read on small screens. Split complex systems into multiple focused diagrams.

### 2. Test Before Pushing

Use a live editor to verify your diagram renders correctly before committing. GitHub's renderer occasionally has quirks with newer Mermaid features since it may not run the latest version.

### 3. Provide Alt Text for Accessibility

Unfortunately, GitHub doesn't support alt text for Mermaid diagrams directly. Consider adding a text description below complex diagrams:

\`\`\`markdown
\`\`\`mermaid
graph LR
    A --> B --> C
\`\`\`

*The diagram shows data flowing from component A through B to C.*
\`\`\`

### 4. Use Consistent Direction

Pick a direction (TD or LR) and stick with it throughout your README. Mixing directions is visually jarring.

### 5. Place Diagrams Strategically

- **Top of README:** Architecture overview
- **After setup instructions:** How the system works
- **In CONTRIBUTING.md:** Contribution workflow
- **In docs/ folder:** Detailed technical docs

### 6. Fallback for Non-GitHub Platforms

If your README might be viewed outside GitHub (npm, PyPI, etc.), platforms that don't support Mermaid will show the raw code. This is acceptable — the text is still human-readable.

Alternatively, render to an image and include both:

\`\`\`markdown
<!-- Rendered diagram (for platforms without Mermaid support) -->
![Architecture](./docs/architecture.png)

<!-- Mermaid source (for GitHub and supporting platforms) -->
<details>
<summary>Diagram source</summary>

\`\`\`mermaid
graph TD
    A --> B
\`\`\`

</details>
\`\`\`

## Common Issues and Fixes

### Diagram Shows as Raw Text

**Cause:** The code fence language must be exactly \`mermaid\` (lowercase). \`Mermaid\` or \`MERMAID\` won't work.

### Syntax Errors

**Cause:** A typo in the Mermaid syntax. GitHub shows a red error message instead of the diagram.
**Fix:** Test in a live editor first, then copy the working code.

### Special Characters Breaking the Diagram

**Cause:** Characters like \`<\`, \`>\`, \`&\`, or quotes can interfere with rendering.
**Fix:** Wrap labels in double quotes: \`A["Label with (special) chars"]\`

### Diagram Too Wide or Cramped

**Cause:** GitHub's rendering area is fixed-width.
**Fix:** Use \`TD\` (top-down) direction for wide diagrams, or split into smaller diagrams.

### Old Mermaid Features Not Working

**Cause:** GitHub may run an older version of Mermaid than the latest release.
**Fix:** Stick to well-established features. Check the Mermaid changelog if something doesn't render.

## Advanced: Mermaid in GitHub Actions

You can automatically render Mermaid diagrams to images in CI:

\`\`\`yaml
name: Render Diagrams
on: [push]
jobs:
  render:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Render Mermaid
        uses: mermaid-js/mermaid-cli-action@v1
        with:
          input: docs/diagrams/
          output: docs/images/
\`\`\`

This generates PNG/SVG files from your .mmd files, useful for platforms that don't support Mermaid natively.

## Real README Example

Here's how a well-structured README uses diagrams:

\`\`\`markdown
# My Awesome API

A RESTful API for managing tasks.

## Architecture

\`\`\`mermaid
graph TB
    Client[Client Apps] --> LB[Load Balancer]
    LB --> API1[API Server 1]
    LB --> API2[API Server 2]
    API1 & API2 --> DB[(PostgreSQL)]
    API1 & API2 --> Cache[(Redis)]
\`\`\`

## Getting Started
...

## API Endpoints

### Authentication Flow

\`\`\`mermaid
sequenceDiagram
    Client->>API: POST /auth/login
    API-->>Client: JWT Token
    Client->>API: GET /tasks (Bearer token)
    API-->>Client: Task list
\`\`\`
\`\`\`

## Conclusion

Mermaid in GitHub READMEs is one of the most impactful documentation improvements you can make. Diagrams that live as code stay current, are version-controlled, and render beautifully without any extra tooling. Start with an architecture diagram in your main README, then expand to contribution guides, API docs, and database schemas.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-state-diagram-guide",
    title: "Mermaid State Diagrams — Complete Tutorial",
    description: "Create state machine diagrams with Mermaid.js. Learn states, transitions, guards, composite states, forks, joins, and real-world examples.",
    date: "2025-12-22",
    keywords: ["mermaid state diagram", "state machine diagram", "mermaid.js state", "UML state diagram", "state transition diagram"],
    content: `
## What Are State Diagrams?

State diagrams (also called state machine diagrams or statecharts) show the different states an object or system can be in, and the transitions between those states. They're essential for modeling:

- UI component states (loading, error, success)
- Order lifecycles (pending, processing, shipped, delivered)
- Authentication flows (logged out, logging in, authenticated, expired)
- Game states (menu, playing, paused, game over)
- Network connections (disconnected, connecting, connected)

## Basic Syntax

\`\`\`
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : Start
    Processing --> Completed : Success
    Processing --> Failed : Error
    Failed --> Idle : Retry
    Completed --> [*]
\`\`\`

Key elements:
- \`[*]\` — Start state (filled circle) or end state
- \`-->\` — Transition arrow
- Text after \`:\` is the trigger/event label
- State names are automatically rendered as rounded rectangles

## Defining States

### Simple States

\`\`\`
stateDiagram-v2
    [*] --> Active
    Active --> Inactive : Deactivate
    Inactive --> Active : Activate
    Active --> [*] : Delete
\`\`\`

### States with Descriptions

\`\`\`
stateDiagram-v2
    state "Waiting for Payment" as WFP
    state "Order Confirmed" as OC
    state "Shipped to Customer" as STC

    [*] --> WFP
    WFP --> OC : Payment received
    OC --> STC : Dispatched
    STC --> [*] : Delivered
\`\`\`

Use the \`state "description" as alias\` syntax for multi-word state names.

## Transitions

### Labeled Transitions

\`\`\`
stateDiagram-v2
    Idle --> Running : start()
    Running --> Idle : stop()
    Running --> Running : process(item)
    Running --> Error : exception thrown
    Error --> Idle : reset()
\`\`\`

### Self-Transitions

A state can transition to itself (like "Running → Running" above). This represents an event that's handled without changing state.

## Composite (Nested) States

Group related states inside a parent state:

\`\`\`
stateDiagram-v2
    [*] --> Active

    state Active {
        [*] --> Idle
        Idle --> Processing : Request
        Processing --> Idle : Complete
        Processing --> Error : Fail
        Error --> Idle : Retry
    }

    Active --> Suspended : Suspend
    Suspended --> Active : Resume
    Active --> [*] : Terminate
\`\`\`

This shows that Active has its own internal states. The system can be suspended from any Active sub-state and resume back.

### Deeply Nested States

\`\`\`
stateDiagram-v2
    [*] --> App

    state App {
        [*] --> Auth

        state Auth {
            [*] --> LoggedOut
            LoggedOut --> LoggingIn : Enter credentials
            LoggingIn --> LoggedIn : Valid
            LoggingIn --> LoggedOut : Invalid
        }

        state LoggedIn {
            [*] --> Dashboard
            Dashboard --> Settings : Open settings
            Settings --> Dashboard : Back
        }

        Auth --> LoggedIn : Authenticated
        LoggedIn --> Auth : Logout
    }
\`\`\`

## Practical Example: Order Lifecycle

\`\`\`
stateDiagram-v2
    [*] --> Draft

    Draft --> Submitted : Customer places order
    Submitted --> PaymentPending : Order validated

    state PaymentPending {
        [*] --> AwaitingPayment
        AwaitingPayment --> ProcessingPayment : Payment initiated
        ProcessingPayment --> PaymentConfirmed : Success
        ProcessingPayment --> PaymentFailed : Declined
        PaymentFailed --> AwaitingPayment : Retry
    }

    PaymentPending --> Cancelled : Customer cancels
    PaymentConfirmed --> Fulfillment

    state Fulfillment {
        [*] --> Picking
        Picking --> Packing : Items collected
        Packing --> ReadyToShip : Packed
    }

    ReadyToShip --> Shipped : Carrier pickup
    Shipped --> Delivered : Delivery confirmed
    Delivered --> [*]

    Shipped --> ReturnRequested : Customer requests return
    ReturnRequested --> Returned : Return received
    Returned --> [*]

    Draft --> Cancelled : Customer cancels
    Submitted --> Cancelled : Validation failed
    Cancelled --> [*]
\`\`\`

## Choice (Decision) States

Show conditional branching:

\`\`\`
stateDiagram-v2
    [*] --> RequestReceived

    RequestReceived --> ValidatingInput
    ValidatingInput --> CheckAuth

    state CheckAuth <<choice>>
    CheckAuth --> Authorized : Token valid
    CheckAuth --> Unauthorized : Token invalid

    Authorized --> Processing
    Processing --> Success
    Success --> [*]

    Unauthorized --> [*]
\`\`\`

## Fork and Join (Parallel States)

Show concurrent execution:

\`\`\`
stateDiagram-v2
    [*] --> OrderPlaced

    state fork_state <<fork>>
    OrderPlaced --> fork_state

    fork_state --> SendEmail
    fork_state --> ProcessPayment
    fork_state --> UpdateInventory

    state join_state <<join>>
    SendEmail --> join_state
    ProcessPayment --> join_state
    UpdateInventory --> join_state

    join_state --> OrderComplete
    OrderComplete --> [*]
\`\`\`

This models three activities happening in parallel after an order is placed, with all three needing to complete before the order is marked complete.

## Notes

Add context with notes:

\`\`\`
stateDiagram-v2
    [*] --> Active
    Active --> Inactive

    note right of Active
        System is processing
        requests in this state
    end note

    note left of Inactive
        All connections closed.
        Resources released.
    end note
\`\`\`

## Practical Example: UI Component States

\`\`\`
stateDiagram-v2
    [*] --> Initial

    state Initial {
        [*] --> Empty
    }

    Initial --> Loading : fetch()
    Loading --> Success : Data received
    Loading --> Error : Request failed

    state Success {
        [*] --> DisplayingData
        DisplayingData --> Refreshing : Pull to refresh
        Refreshing --> DisplayingData : Updated
    }

    state Error {
        [*] --> ShowError
        ShowError --> ShowError : Display message
    }

    Error --> Loading : Retry
    Success --> Loading : Refresh
    Success --> [*] : Unmount
    Error --> [*] : Unmount
\`\`\`

## Styling

Apply CSS-like styles:

\`\`\`
stateDiagram-v2
    [*] --> Active
    Active --> Error
    Error --> Active

    classDef errorState fill:#ff6b6b,color:white,stroke:#c0392b
    classDef activeState fill:#51cf66,color:white,stroke:#2f9e44

    class Error errorState
    class Active activeState
\`\`\`

## Direction

Control layout direction:

\`\`\`
stateDiagram-v2
    direction LR
    [*] --> A --> B --> C --> [*]
\`\`\`

Options: \`TB\` (top-bottom, default), \`LR\` (left-right), \`BT\`, \`RL\`.

## Best Practices

1. **Always include start and end states** (\`[*]\`) to clearly show entry and exit points.

2. **Name states as nouns or adjectives** — "Processing", "Active", "WaitingForApproval" — not verbs.

3. **Label transitions as events or actions** — "click submit", "payment received", "timeout" — verbs or events that trigger the change.

4. **Use composite states** to manage complexity. A 20-state flat diagram becomes readable when grouped into 3-4 composite states.

5. **Model error states explicitly.** Don't just show the happy path — document how the system handles failures and recovers.

6. **Use choice states** for conditional branching instead of multiple transitions from one state with the same trigger.

7. **Keep it focused.** One state diagram per concern. Don't try to model your entire application in a single diagram.

## Conclusion

State diagrams are invaluable for documenting system behavior — especially for anything with a lifecycle (orders, sessions, UI states, workflows). Mermaid's text syntax makes them easy to create and maintain in your documentation. Start with the basic states and transitions, then add composite states and parallel execution as complexity grows.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-er-diagram-database",
    title: "Entity Relationship Diagrams with Mermaid.js",
    description: "Design database schemas with Mermaid.js ER diagrams. Learn entities, attributes, relationships, cardinality, and best practices for data modeling.",
    date: "2025-12-25",
    keywords: ["mermaid ER diagram", "entity relationship diagram", "database diagram mermaid", "data modeling", "ERD tutorial"],
    content: `
## What Are ER Diagrams?

Entity Relationship Diagrams (ERDs) visualize database structure — the tables (entities), their columns (attributes), and how they relate to each other. They're essential for:

- Designing new databases
- Documenting existing schemas
- Communicating data models to team members
- Planning migrations and refactors

Mermaid's ER diagram syntax lets you create these diagrams as code, keeping your data documentation in sync with your actual schema.

## Basic Syntax

\`\`\`
erDiagram
    CUSTOMER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        date created_at
        int customer_id FK
    }
    CUSTOMER ||--o{ ORDER : places
\`\`\`

Key elements:
- **Entities** are defined with their name and attributes in curly braces
- **Attributes** have a type, name, and optional constraint (PK, FK, UK)
- **Relationships** use special notation for cardinality

## Attribute Syntax

Each attribute follows the pattern: \`type name constraint "comment"\`

\`\`\`
erDiagram
    USER {
        int id PK "Auto-increment primary key"
        string username UK "Unique username"
        string email UK "Unique email address"
        string password_hash "Bcrypt hashed"
        datetime created_at "Default: now()"
        datetime updated_at "Updated on change"
        boolean is_active "Default: true"
    }
\`\`\`

### Supported Constraints

- **PK** — Primary Key
- **FK** — Foreign Key
- **UK** — Unique Key

## Relationship Cardinality

Mermaid uses a notation combining two symbols — one for each end:

\`\`\`
erDiagram
    A ||--|| B : "one to one"
    C ||--o{ D : "one to many"
    E }o--o{ F : "many to many"
    G ||--o| H : "one to zero or one"
\`\`\`

### Notation Guide

Left/right symbols:
- \`||\` — exactly one
- \`o|\` — zero or one
- \`}|\` — one or more
- \`}o\` — zero or more

The line style:
- \`--\` — solid line (identifying relationship)
- \`..\` — dashed line (non-identifying relationship)

### Common Patterns

\`\`\`
erDiagram
    %% One-to-many (most common)
    AUTHOR ||--o{ BOOK : writes

    %% Many-to-many (via junction table)
    STUDENT }o--o{ COURSE : enrolls_in

    %% One-to-one
    USER ||--|| PROFILE : has

    %% Optional relationship
    EMPLOYEE ||--o| PARKING_SPOT : assigned
\`\`\`

## Practical Example: Blog Platform

\`\`\`
erDiagram
    USER {
        int id PK
        string username UK
        string email UK
        string password_hash
        string avatar_url
        text bio
        datetime created_at
    }

    POST {
        int id PK
        string title
        string slug UK
        text content
        string status "draft|published|archived"
        int author_id FK
        datetime published_at
        datetime created_at
        datetime updated_at
    }

    COMMENT {
        int id PK
        text body
        int post_id FK
        int author_id FK
        int parent_id FK "For nested comments"
        datetime created_at
    }

    TAG {
        int id PK
        string name UK
        string slug UK
    }

    POST_TAG {
        int post_id FK
        int tag_id FK
    }

    LIKE {
        int id PK
        int user_id FK
        int post_id FK
        datetime created_at
    }

    USER ||--o{ POST : writes
    USER ||--o{ COMMENT : writes
    POST ||--o{ COMMENT : has
    COMMENT ||--o{ COMMENT : replies_to
    POST ||--o{ POST_TAG : has
    TAG ||--o{ POST_TAG : tagged
    USER ||--o{ LIKE : gives
    POST ||--o{ LIKE : receives
\`\`\`

## Practical Example: E-Commerce Database

\`\`\`
erDiagram
    CUSTOMER {
        int id PK
        string first_name
        string last_name
        string email UK
        string phone
        datetime created_at
    }

    ADDRESS {
        int id PK
        int customer_id FK
        string street
        string city
        string state
        string zip_code
        string country
        boolean is_default
    }

    PRODUCT {
        int id PK
        string name
        string sku UK
        text description
        decimal price
        int stock_quantity
        int category_id FK
        boolean is_active
    }

    CATEGORY {
        int id PK
        string name
        int parent_id FK "Self-referencing for hierarchy"
    }

    ORDERS {
        int id PK
        int customer_id FK
        int shipping_address_id FK
        string status
        decimal subtotal
        decimal tax
        decimal total
        datetime ordered_at
    }

    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal unit_price
        decimal subtotal
    }

    PAYMENT {
        int id PK
        int order_id FK
        string method
        string status
        decimal amount
        string transaction_id UK
        datetime paid_at
    }

    CUSTOMER ||--o{ ADDRESS : has
    CUSTOMER ||--o{ ORDERS : places
    ORDERS ||--|{ ORDER_ITEM : contains
    ORDERS ||--|| PAYMENT : paid_by
    ORDERS }o--|| ADDRESS : ships_to
    ORDER_ITEM }o--|| PRODUCT : references
    PRODUCT }o--|| CATEGORY : belongs_to
    CATEGORY ||--o{ CATEGORY : parent_of
\`\`\`

## Practical Example: SaaS Multi-Tenant

\`\`\`
erDiagram
    TENANT {
        int id PK
        string name
        string subdomain UK
        string plan "free|pro|enterprise"
        datetime created_at
    }

    USER {
        int id PK
        int tenant_id FK
        string email
        string role "admin|member|viewer"
        datetime last_login
    }

    PROJECT {
        int id PK
        int tenant_id FK
        string name
        text description
        int owner_id FK
    }

    TASK {
        int id PK
        int project_id FK
        string title
        text description
        string status "todo|doing|done"
        int assignee_id FK
        date due_date
    }

    TENANT ||--o{ USER : has
    TENANT ||--o{ PROJECT : owns
    USER ||--o{ PROJECT : manages
    PROJECT ||--o{ TASK : contains
    USER ||--o{ TASK : assigned
\`\`\`

## Tips for Data Modeling with Mermaid

### 1. Start with Entities

List your main entities first without attributes. Map out the relationships. Then add attributes.

### 2. Name Relationships Clearly

The label after the colon describes the relationship: \`CUSTOMER ||--o{ ORDER : places\`. Use active verbs: "places", "contains", "belongs_to", "writes".

### 3. Show Junction Tables

For many-to-many relationships, explicitly show the junction table:

\`\`\`
erDiagram
    STUDENT }o--o{ COURSE : enrolls_in
\`\`\`

Or with the junction table visible:

\`\`\`
erDiagram
    STUDENT ||--o{ ENROLLMENT : has
    COURSE ||--o{ ENROLLMENT : has
    ENROLLMENT {
        int student_id FK
        int course_id FK
        date enrolled_at
        string grade
    }
\`\`\`

The second approach is better when the junction table has its own attributes.

### 4. Include Data Types

Always specify types — it makes the diagram useful for actual implementation:
- \`int\`, \`bigint\` — IDs, counts
- \`string\` or \`varchar\` — text fields
- \`text\` — long content
- \`decimal\` — money, precise numbers
- \`boolean\` — flags
- \`datetime\`, \`date\`, \`timestamp\` — temporal data
- \`json\` or \`jsonb\` — flexible structured data

### 5. Mark Constraints

Always mark PK, FK, and UK. These are the most important structural information in a schema diagram.

### 6. Use Comments for Business Rules

Add comments in quotes to document constraints that aren't visible in the structure:

\`\`\`
erDiagram
    ORDER {
        string status "Enum: pending|processing|shipped|delivered|cancelled"
        decimal total "Computed: sum of line items + tax"
    }
\`\`\`

## Common Mistakes

- **Missing foreign keys** — Every relationship line should have a corresponding FK attribute.
- **Wrong cardinality** — Think carefully: can a customer have zero orders? Then it's \`||--o{\` not \`||--|{\`.
- **Tables without relationships** — If an entity has no relationships, it might not belong in the diagram, or you're missing a connection.
- **Too many entities** — Focus on one bounded context. A diagram with 30+ tables is overwhelming.

## Conclusion

Mermaid ER diagrams are perfect for documenting database schemas in your project repository. They render on GitHub, stay version-controlled, and are easy to update when your schema evolves. Start with the core entities and relationships, then progressively add attributes and constraints as your model matures.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-pie-chart-tutorial",
    title: "Creating Pie Charts with Mermaid.js",
    description: "Learn how to create pie charts with Mermaid.js. Simple syntax, customization options, real-world examples, and when to use pie charts in documentation.",
    date: "2025-12-28",
    keywords: ["mermaid pie chart", "pie chart tutorial", "mermaid.js pie", "create pie chart code", "text based pie chart"],
    content: `
## Introduction to Mermaid Pie Charts

Pie charts are the simplest diagram type in Mermaid — and sometimes simple is exactly what you need. They're perfect for showing proportions, distributions, and breakdowns in your documentation.

While pie charts aren't suited for every data visualization scenario, they excel at showing how parts make up a whole — technology distributions, budget allocations, survey results, and more.

## Basic Syntax

\`\`\`
pie title Technology Stack Distribution
    "JavaScript" : 45
    "Python" : 25
    "Go" : 15
    "Rust" : 10
    "Other" : 5
\`\`\`

That's it. Three elements:
1. \`pie\` keyword (optionally followed by \`title Your Title\`)
2. Labels in double quotes
3. Values after the colon

Mermaid automatically calculates percentages and assigns colors.

## Practical Examples

### Project Language Breakdown

\`\`\`
pie title Lines of Code by Language
    "TypeScript" : 42000
    "CSS/SCSS" : 15000
    "HTML" : 8000
    "Python (scripts)" : 3000
    "Shell" : 1500
\`\`\`

### Sprint Task Distribution

\`\`\`
pie title Sprint 14 Tasks by Category
    "Feature Development" : 12
    "Bug Fixes" : 8
    "Technical Debt" : 5
    "Documentation" : 3
    "DevOps" : 2
\`\`\`

### Browser Market Share

\`\`\`
pie title Browser Usage - Our App Analytics
    "Chrome" : 64
    "Safari" : 19
    "Firefox" : 8
    "Edge" : 6
    "Other" : 3
\`\`\`

### Budget Allocation

\`\`\`
pie title Engineering Budget Q1 2025
    "Personnel" : 65
    "Infrastructure (AWS)" : 18
    "Tools & Licenses" : 8
    "Training" : 5
    "Misc" : 4
\`\`\`

### Test Coverage

\`\`\`
pie title Test Suite Composition
    "Unit Tests" : 340
    "Integration Tests" : 85
    "E2E Tests" : 42
    "Performance Tests" : 15
\`\`\`

### Error Distribution

\`\`\`
pie title Production Errors Last 30 Days
    "4xx Client Errors" : 156
    "5xx Server Errors" : 23
    "Timeout Errors" : 45
    "Network Errors" : 12
\`\`\`

## Display Options

### Show Data (Values)

By default, Mermaid shows percentages. You can add \`showData\` to display raw values:

\`\`\`
pie showData
    title Response Time Buckets
    "< 100ms" : 450
    "100-500ms" : 230
    "500ms-1s" : 80
    "> 1s" : 40
\`\`\`

## When to Use Pie Charts

### Good Use Cases

- **Showing composition** — What makes up a whole? (Language distribution, budget breakdown)
- **Small number of categories** — 3 to 7 slices work best
- **Documentation snapshots** — Quick visual in a README or report
- **Comparing proportions** — When relative size matters more than exact values

### Avoid Pie Charts When

- **Comparing precise values** — Bar charts are better for exact comparisons
- **Many categories** — More than 7-8 slices become unreadable
- **Showing trends over time** — Line charts are the right tool
- **Similar-sized slices** — Humans are bad at comparing similar angles; use a bar chart instead

## Tips for Effective Pie Charts

### 1. Limit to 5-7 Slices

If you have more categories, group the small ones into "Other":

\`\`\`
pie title API Endpoints by Usage
    "GET /api/users" : 40
    "POST /api/auth" : 25
    "GET /api/products" : 20
    "Other (15 endpoints)" : 15
\`\`\`

### 2. Order by Size

List items from largest to smallest for easier reading:

\`\`\`
pie title Deploy Frequency by Service
    "API Gateway" : 45
    "User Service" : 25
    "Order Service" : 15
    "Notification Service" : 10
    "Analytics" : 5
\`\`\`

### 3. Use Descriptive Labels

Don't use abbreviations. Make labels self-explanatory:

Bad: \`"JS" : 45\`
Good: \`"JavaScript/TypeScript" : 45\`

### 4. Include Context in the Title

The title should tell the reader what they're looking at and ideally when:

Bad: \`pie title Data\`
Good: \`pie title Monthly Active Users by Platform (March 2025)\`

### 5. Use Meaningful Numbers

Use actual values when they matter, percentages when they don't:

\`\`\`
pie showData
    title Incident Severity (Last Quarter)
    "Critical (P0)" : 3
    "High (P1)" : 12
    "Medium (P2)" : 45
    "Low (P3)" : 89
\`\`\`

## Pie Charts in README Files

Pie charts work well in GitHub README files for quick project overviews:

\`\`\`markdown
## Project Stats

\`\`\`mermaid
pie title Codebase Composition
    "Application Code" : 60
    "Tests" : 25
    "Configuration" : 10
    "Documentation" : 5
\`\`\`
\`\`\`

They're also great in:
- **Architecture Decision Records** — showing trade-off analysis
- **Sprint retrospectives** — visualizing time spent
- **Status reports** — quick visual summaries
- **Incident postmortems** — error categorization

## Combining with Other Diagrams

Pie charts work best alongside other diagram types. In a project README:

1. **Flowchart** for architecture overview
2. **Pie chart** for technology distribution
3. **Gantt chart** for roadmap
4. **Sequence diagram** for API flows

Each diagram type serves a different purpose — use the right one for each piece of information.

## Limitations

- **No custom colors** — Mermaid assigns colors automatically from its theme palette
- **No legends** — Labels are shown directly on or near slices
- **No donut charts** — Only standard pie charts
- **No interactivity** — Static rendering only
- **Limited formatting** — You can't control label position, font size, or slice explosion

For advanced data visualization, consider dedicated charting libraries like Chart.js, D3.js, or Recharts. Mermaid pie charts are for **documentation**, not data dashboards.

## Conclusion

Mermaid pie charts are the simplest way to add data visualization to your text-based documentation. They're perfect for quick overviews and composition breakdowns — just a keyword, some labels, and values. Keep them simple, limit slices to 5-7, and use them where proportional comparison adds value to your docs.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-syntax-cheat-sheet",
    title: "Mermaid.js Syntax Cheat Sheet — Quick Reference",
    description: "Complete Mermaid.js syntax reference. Quick-lookup guide for flowcharts, sequence diagrams, Gantt charts, class diagrams, state diagrams, ER diagrams, and more.",
    date: "2026-01-02",
    keywords: ["mermaid syntax", "mermaid cheat sheet", "mermaid.js reference", "mermaid quick guide", "mermaid diagram syntax"],
    content: `
## Flowcharts

### Direction

\`\`\`
graph TD   %% Top to Bottom
graph LR   %% Left to Right
graph BT   %% Bottom to Top
graph RL   %% Right to Left
\`\`\`

Use \`flowchart\` instead of \`graph\` for extended features.

### Node Shapes

\`\`\`
flowchart TD
    A[Rectangle]
    B(Rounded)
    C([Stadium])
    D[[Subroutine]]
    E[(Cylinder/DB)]
    F((Circle))
    G{Diamond}
    H{{Hexagon}}
    I>Flag/Asymmetric]
    J[/Parallelogram/]
    K[\\Parallelogram Alt\\]
    L[/Trapezoid\\]
\`\`\`

### Edge Types

\`\`\`
flowchart LR
    A --> B           %% Arrow
    A --- B           %% Line
    A -.-> B          %% Dotted arrow
    A ==> B           %% Thick arrow
    A --o B           %% Circle end
    A --x B           %% Cross end
    A -->|label| B    %% Labeled arrow
    A -- "label" --- B %% Labeled line
\`\`\`

### Subgraphs

\`\`\`
flowchart TB
    subgraph Group Name
        A --> B
    end
    subgraph Another["Custom Title"]
        direction LR
        C --> D
    end
    Group Name --> Another
\`\`\`

### Styling

\`\`\`
flowchart TD
    A:::myClass --> B
    classDef myClass fill:#f9f,stroke:#333,color:black
    style B fill:#bbf,stroke:#33f
\`\`\`

## Sequence Diagrams

### Basics

\`\`\`
sequenceDiagram
    participant A as Alice
    actor U as User
    A->>B: Solid arrow (sync)
    B-->>A: Dotted arrow (response)
    A-)B: Open arrow (async)
    A-xB: Cross (lost message)
\`\`\`

### Features

\`\`\`
sequenceDiagram
    autonumber

    A->>+B: Request (activate)
    B-->>-A: Response (deactivate)

    Note over A,B: Spanning note
    Note right of B: Side note

    loop Every 5s
        A->>B: Ping
    end

    alt Success
        B-->>A: 200 OK
    else Failure
        B-->>A: 500 Error
    end

    opt Optional step
        A->>B: Maybe this happens
    end

    par Parallel
        A->>B: Request 1
    and
        A->>C: Request 2
    end

    critical Critical section
        A->>B: Important operation
    option Failure case
        B-->>A: Rollback
    end

    rect rgb(200, 220, 255)
        A->>B: Highlighted section
    end
\`\`\`

## Gantt Charts

\`\`\`
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    excludes weekends

    section Phase 1
    Task 1          :done, t1, 2025-01-01, 7d
    Task 2          :active, t2, after t1, 5d
    Milestone       :milestone, m1, after t2, 0d

    section Phase 2
    Task 3          :t3, after m1, 10d
    Critical task   :crit, t4, after t3, 3d
\`\`\`

### Task States
- \`done\` — completed
- \`active\` — in progress
- \`crit\` — critical path
- Combine: \`crit, done\` or \`crit, active\`

## Class Diagrams

### Classes

\`\`\`
classDiagram
    class ClassName {
        +String publicAttr
        -int privateAttr
        #bool protectedAttr
        ~float internalAttr
        +publicMethod() void
        -privateMethod(param) String
        +staticMethod()$ int
        +abstractMethod()* void
    }
\`\`\`

### Relationships

\`\`\`
classDiagram
    A <|-- B    : Inheritance
    C *-- D     : Composition
    E o-- F     : Aggregation
    G --> H     : Association
    I ..> J     : Dependency
    K ..|> L    : Realization (implements)
    M "1" --> "*" N : Cardinality
\`\`\`

### Annotations

\`\`\`
classDiagram
    class MyInterface {
        <<interface>>
    }
    class MyAbstract {
        <<abstract>>
    }
    class MyEnum {
        <<enumeration>>
        VALUE_A
        VALUE_B
    }
    class MyService {
        <<service>>
    }
\`\`\`

### Generics

\`\`\`
classDiagram
    class List~T~ {
        +add(item T) void
    }
\`\`\`

## State Diagrams

\`\`\`
stateDiagram-v2
    direction LR
    [*] --> Active
    Active --> Inactive : disable
    Inactive --> Active : enable
    Active --> [*] : delete

    state Active {
        [*] --> Running
        Running --> Paused : pause
        Paused --> Running : resume
    }

    state check <<choice>>
    Active --> check
    check --> Error : if failed
    check --> Success : if passed

    state fork_state <<fork>>
    state join_state <<join>>
    Active --> fork_state
    fork_state --> Task1
    fork_state --> Task2
    Task1 --> join_state
    Task2 --> join_state
    join_state --> Done

    note right of Active
        This is a note
    end note
\`\`\`

## ER Diagrams

\`\`\`
erDiagram
    CUSTOMER {
        int id PK
        string name
        string email UK
    }
    ORDER {
        int id PK
        int customer_id FK
        date ordered_at
    }
    CUSTOMER ||--o{ ORDER : places
\`\`\`

### Cardinality

- \`||\` — exactly one
- \`o|\` — zero or one
- \`}|\` — one or more
- \`}o\` — zero or more

### Relationship lines
- \`--\` — solid (identifying)
- \`..\` — dashed (non-identifying)

## Pie Charts

\`\`\`
pie title Distribution
    "Category A" : 40
    "Category B" : 30
    "Category C" : 20
    "Other" : 10
\`\`\`

Add \`showData\` after \`pie\` to show raw values.

## Mind Maps

\`\`\`
mindmap
    root((Central Topic))
        Branch 1
            Sub-topic A
            Sub-topic B
        Branch 2
            Sub-topic C
                Detail 1
                Detail 2
        Branch 3
\`\`\`

## Git Graphs

\`\`\`
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
\`\`\`

## Timeline

\`\`\`
timeline
    title History of Our Product
    2020 : Founded
         : MVP launched
    2021 : Series A funding
         : Reached 10k users
    2022 : Series B
         : International expansion
    2023 : 1M users milestone
\`\`\`

## Quadrant Charts

\`\`\`
quadrantChart
    title Priority Matrix
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Do First
    quadrant-2 Plan
    quadrant-3 Delegate
    quadrant-4 Eliminate
    Feature A: [0.8, 0.9]
    Feature B: [0.3, 0.7]
    Feature C: [0.6, 0.3]
\`\`\`

## Global Configuration

### Theme

Set theme at the top of any diagram:

\`\`\`
%%{init: {'theme': 'dark'}}%%
graph TD
    A --> B
\`\`\`

Available themes: \`default\`, \`dark\`, \`forest\`, \`neutral\`, \`base\`.

### Custom Theme Variables

\`\`\`
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#ff6b6b', 'edgeLabelBackground':'#ffffff'}}}%%
graph TD
    A --> B
\`\`\`

## Tips

- Use \`%%\` for comments in any diagram
- Wrap special characters in quotes: \`A["Text with (parens)"]\`
- Use \`<br/>\` for line breaks in labels
- HTML entities work: \`#amp;\`, \`#lt;\`, \`#gt;\`
- Test diagrams in a live editor before committing

## Resources

- [Official Mermaid Documentation](https://mermaid.js.org)
- [Mermaid GitHub Repository](https://github.com/mermaid-js/mermaid)

[Try all these diagrams in our free Mermaid Live Editor →](/)
`
  },
  {
    slug: "mermaid-mindmap-tutorial",
    title: "How to Create Mind Maps with Mermaid.js",
    description: "Create mind maps with Mermaid.js for brainstorming, planning, and documentation. Learn syntax, shapes, icons, and practical examples.",
    date: "2026-01-05",
    keywords: ["mermaid mindmap", "mind map tutorial", "mermaid.js mindmap", "create mind map code", "text based mind map"],
    content: `
## What Are Mind Maps?

Mind maps are radial diagrams that start from a central concept and branch outward into related topics, sub-topics, and details. They're excellent for:

- **Brainstorming** — Exploring ideas non-linearly
- **Planning** — Breaking down projects into components
- **Learning** — Organizing knowledge hierarchically
- **Documentation** — Showing topic relationships at a glance

Mermaid's mind map syntax uses indentation to define the hierarchy, making it incredibly intuitive to write.

## Basic Syntax

\`\`\`
mindmap
    root((Project Plan))
        Design
            Wireframes
            Mockups
            User Testing
        Development
            Frontend
            Backend
            Database
        Launch
            Marketing
            Documentation
            Monitoring
\`\`\`

The rules are simple:
1. Start with \`mindmap\`
2. The first indented item is the root node
3. Deeper indentation creates child branches
4. Siblings share the same indentation level

## Node Shapes

Mind map nodes support different shapes:

\`\`\`
mindmap
    root((Circle Root))
        (Rounded Rectangle)
            [Square]
                Default shape
        ))Bang((
            {{Hexagon}}
\`\`\`

### Shape Reference

- **Default** — Just text, no brackets (rectangle with rounded corners)
- **\`[Square]\`** — Square/rectangle
- **\`(Rounded)\`** — Rounded rectangle
- **\`((Circle))\`** — Circle
- **\`))Bang((\`** — Explosion/bang shape
- **\`{{Hexagon}}\`** — Hexagon

## Practical Example: Software Architecture

\`\`\`
mindmap
    root((Web Application))
        Frontend
            React SPA
                Components
                State Management
                Routing
            Styling
                Tailwind CSS
                Design System
            Build
                Vite
                TypeScript
        Backend
            API Server
                Express.js
                REST endpoints
                Authentication
            Database
                PostgreSQL
                Redis Cache
                Migrations
            Services
                Email Service
                File Storage
                Search Engine
        DevOps
            CI/CD
                GitHub Actions
                Automated Tests
            Infrastructure
                AWS
                Docker
                Kubernetes
            Monitoring
                Logging
                Alerting
                APM
\`\`\`

## Practical Example: Learning Path

\`\`\`
mindmap
    root((Learn Web Development))
        HTML & CSS
            Semantic HTML
            Flexbox & Grid
            Responsive Design
            Accessibility
        JavaScript
            ES6+ Syntax
            DOM Manipulation
            Async/Await
            Fetch API
        Frameworks
            React
                Components
                Hooks
                Next.js
            Vue
                Composition API
                Nuxt
        Backend
            Node.js
                Express
                Authentication
            Databases
                SQL Basics
                PostgreSQL
                MongoDB
        Tools
            Git & GitHub
            VS Code
            Chrome DevTools
            Terminal/CLI
\`\`\`

## Practical Example: Product Feature Map

\`\`\`
mindmap
    root((SaaS Product))
        Authentication
            Email/Password
            OAuth (Google, GitHub)
            Two-Factor Auth
            SSO (Enterprise)
        Dashboard
            Analytics Charts
            Activity Feed
            Quick Actions
            Notifications
        Projects
            Create/Edit
            Team Members
            Permissions
            Templates
        Billing
            Plans & Pricing
            Payment Processing
            Invoices
            Usage Tracking
        Settings
            Profile
            Team Management
            Integrations
            API Keys
\`\`\`

## Practical Example: Content Strategy

\`\`\`
mindmap
    root((Content Strategy 2025))
        Blog
            Technical Tutorials
            Case Studies
            Industry Analysis
            Product Updates
        Social Media
            Twitter/X
                Dev Tips
                Thread Content
            LinkedIn
                Company Updates
                Thought Leadership
            YouTube
                Video Tutorials
                Product Demos
        Email
            Weekly Newsletter
            Product Announcements
            Onboarding Sequence
        Community
            Discord Server
            GitHub Discussions
            Meetups & Webinars
\`\`\`

## Practical Example: Sprint Retrospective

\`\`\`
mindmap
    root((Sprint 14 Retro))
        What Went Well
            Shipped auth feature on time
            Good code review process
            Zero production incidents
        What Could Improve
            Standup meetings too long
            Unclear acceptance criteria
            Late design handoffs
        Action Items
            Timebox standups to 10 min
            Add AC template to tickets
            Include design in sprint planning
\`\`\`

## Tips for Effective Mind Maps

### 1. Keep the Hierarchy Shallow

3-4 levels deep is ideal. More than that becomes hard to read and defeats the purpose of a quick visual overview.

### 2. Use Concise Labels

Mind map nodes should be short — 1-4 words each. If you need detailed descriptions, link to separate documents.

### 3. Balance the Branches

Try to have 3-7 main branches from the root, each with a similar number of children. Lopsided mind maps are hard to scan.

### 4. Start with the Root Concept

The root should be the core topic. Not a generic label like "Stuff" but a specific concept like "Q1 Marketing Plan" or "Microservice Architecture".

### 5. Use Shapes for Emphasis

Use circles \`((...))\` for the root, and default shapes for branches. Reserve special shapes like bangs \`))...((\` for items that need attention.

### 6. Order Matters

Put the most important branches first (left side in the rendered output). Mermaid renders branches in the order you write them.

## Mind Maps vs Flowcharts

**Use a mind map when:**
- You're brainstorming or exploring ideas
- The hierarchy is the main relationship
- You want a quick, non-linear overview
- There's no specific flow or sequence

**Use a flowchart when:**
- There's a process with steps
- Decision points exist
- The sequence/order matters
- Loops or feedback paths exist

## Mind Maps in Documentation

Mind maps are particularly useful in:

- **Project READMEs** — Feature overview at a glance
- **Architecture docs** — System component breakdown
- **Onboarding guides** — "Here's everything you need to know"
- **Meeting notes** — Capturing discussion topics and decisions
- **Planning docs** — Breaking down work into categories

### GitHub README Example

\`\`\`markdown
## Feature Overview

\`\`\`mermaid
mindmap
    root((MyApp))
        Auth
            Login
            Register
            OAuth
        Dashboard
            Charts
            Export
        API
            REST
            GraphQL
\`\`\`
\`\`\`

## Limitations

- **No custom colors** — Mermaid assigns colors automatically by branch
- **No icons** — Unlike GUI mind map tools, you can't add icons to nodes
- **Limited layout control** — The auto-layout engine decides positioning
- **No folding/expanding** — All branches are always visible
- **Relatively new** — Mind maps were added in Mermaid v9.3, so older platforms may not support them

For complex, interactive mind maps with custom styling, consider dedicated tools like XMind, MindMeister, or Coggle. Mermaid mind maps are best for **documentation** — quick, text-based, and version-controlled.

## Conclusion

Mermaid mind maps let you create visual hierarchies with nothing but indented text. They're perfect for brainstorming, planning, and documentation where you need a quick overview of how topics relate. Start with the central concept, branch out 3-4 levels, and keep labels concise.

[Try it now in our free Mermaid Live Editor →](/)
`
  },
];
