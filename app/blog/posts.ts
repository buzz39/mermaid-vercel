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
    slug: "mermaid-timeline-diagram",
    title: "How to Create Timeline Diagrams with Mermaid.js",
    description: "Learn how to create mermaid timeline diagrams with simple text syntax. Includes real-world examples for project roadmaps, historical events, and release schedules.",
    date: "2026-04-07",
    keywords: ["mermaid timeline diagram", "mermaid.js timeline", "timeline diagram code", "diagrams as code", "mermaid timeline examples"],
    content: `
## What Is a Mermaid Timeline Diagram?

A **mermaid timeline diagram** lets you visualize events, milestones, and phases in chronological order — using nothing but text. No drag-and-drop tools, no image editing, no external software. Just write the syntax, and Mermaid renders a clean, shareable timeline.

Timeline diagrams are perfect for:
- Product roadmaps and release schedules
- Historical events and project retrospectives
- Onboarding docs showing company or project history
- Sprint planning visuals embedded in your README

In this guide you'll learn the complete Mermaid timeline syntax, see multiple real-world examples, and pick up tips for writing timelines that are easy to maintain.

## Basic Mermaid Timeline Syntax

The timeline diagram type was introduced in Mermaid v9.4. The core structure is straightforward:

```mermaid
timeline
    title History of Mermaid.js
    2014 : Knut Sveidqvist releases Mermaid on GitHub
    2016 : First major adoption in developer docs
    2019 : GitHub integration discussions begin
    2022 : GitHub natively renders Mermaid in Markdown
    2023 : Mermaid v10 released with major improvements
    2024 : Over 60,000 GitHub stars
```

Breaking down the syntax:
- **\`timeline\`** — declares the diagram type
- **\`title\`** — optional chart title displayed at the top
- **\`2014 : Event text\`** — a time period followed by \`:\` and the event label

Multiple events can share the same time period by adding more lines with the same period label.

## Adding Multiple Events Per Period

One of the most useful features is grouping multiple events under a single time label:

```mermaid
timeline
    title 2025 Product Roadmap
    Q1 : Launch beta
        : Onboard first 100 users
        : Set up analytics
    Q2 : Public launch
        : Email campaign
    Q3 : Mobile app release
        : Paid tier introduced
    Q4 : Enterprise plan
        : Partner integrations
```

Each additional \`: event\` line (indented, without repeating the period) is added to that period's column. This keeps related events grouped without cluttering the timeline axis.

## Sections — Adding Colour-Coded Groups

For longer timelines, you can organise periods into named sections. Each section gets its own colour in the rendered diagram:

```mermaid
timeline
    title Company Growth Timeline
    section Early Stage
        2020 : Company founded
             : Seed funding ($500K)
        2021 : First product shipped
             : 5-person team
    section Growth Stage
        2022 : Series A ($3M)
             : 20-person team
             : First enterprise customer
        2023 : Product line expanded
             : Reached profitability
    section Scale Stage
        2024 : Series B ($15M)
             : 80-person team
        2025 : International expansion
             : IPO preparation
```

Sections are declared with \`section Name\` and apply to all subsequent periods until another section is declared. They're great for separating phases of a project, company lifecycle stages, or sprint cycles.

## Real-World Example: Software Release History

Here's a mermaid timeline diagram documenting a product's version history — a common use case for developer docs and README files:

```mermaid
timeline
    title My App — Release History
    section Alpha
        v0.1 : Core authentication
             : Basic CRUD operations
        v0.2 : REST API stabilised
             : Unit tests added
    section Beta
        v0.5 : Public beta launched
             : Dashboard UI
             : Email notifications
        v0.9 : Performance optimisations
             : Bug fixes from beta feedback
    section Production
        v1.0 : General availability
             : Stripe payments integrated
        v1.1 : Team collaboration features
        v2.0 : Real-time sync
             : Mobile app (iOS + Android)
```

Because the source is plain text, this lives right in your repo. When you ship v2.1, you add two lines — no image exports needed.

## Example: Project Sprint Timeline

Timeline diagrams also work well for sprint planning or retrospective documentation:

```mermaid
timeline
    title Q1 Sprint Overview
    section Sprint 1 (Jan)
        Week 1 : Kick-off and backlog grooming
               : Environment setup
        Week 2 : User auth module
        Week 3 : Profile management
        Week 4 : Sprint review and demo
    section Sprint 2 (Feb)
        Week 5 : Dashboard v1
               : API rate limiting
        Week 6 : Notifications service
        Week 7 : Data export feature
        Week 8 : Sprint review
    section Sprint 3 (Mar)
        Week 9  : Mobile-responsive UI
        Week 10 : Performance profiling
        Week 11 : Load testing
        Week 12 : Q1 retrospective
```

## Example: Historical Technology Timeline

Mermaid timeline diagrams aren't just for software projects. They're equally useful for educational content, articles, and documentation that places events in historical context:

```mermaid
timeline
    title Key Moments in Web Development
    section Web 1.0
        1991 : Tim Berners-Lee publishes the first website
        1994 : Netscape Navigator launches
        1995 : JavaScript created by Brendan Eich
             : Java applets introduced
        1996 : CSS 1 specification released
    section Web 2.0
        2004 : Gmail launches, proving rich web apps are possible
        2005 : AJAX popularised by Google Maps
             : YouTube founded
        2006 : jQuery released
        2008 : V8 JavaScript engine by Google
        2009 : Node.js created by Ryan Dahl
    section Modern Web
        2013 : React released by Facebook
        2014 : Vue.js introduced
        2016 : Angular 2 released
        2017 : WebAssembly becomes a W3C recommendation draft
        2020 : Deno 1.0 released
        2022 : Bun JavaScript runtime released
```

## Embedding Timelines in Your Docs

Mermaid timeline diagrams render natively in **GitHub Markdown** (wrap in a \`mermaid\` code fence), **Notion** (paste using the Mermaid block), **Obsidian**, **Docusaurus**, **MkDocs**, and anywhere Mermaid is supported.

For GitHub specifically:

```
```mermaid
timeline
    title My Project Milestones
    2024 : MVP shipped
    2025 : 1,000 users
```
```

You can also try and iterate on your timeline syntax in the [Mermaid Live Editor](https://mermaideditor.lol) before committing — it gives instant visual feedback as you type, so you can see how sections and event groupings look before they go into your docs.

## Mermaid Timeline vs Gantt Chart

Mermaid offers two diagram types that handle time-based content differently:

| Feature | Timeline | Gantt Chart |
|---|---|---|
| Purpose | Events and milestones | Task durations and schedules |
| Shows duration | No | Yes |
| Dependencies | No | Yes |
| Best for | History, roadmaps, retrospectives | Project planning, scheduling |
| Syntax complexity | Simple | Moderate |

If you need to show **how long** tasks take, use a Gantt chart. If you want to place **events and milestones** in chronological context, use a timeline diagram.

## Tips for Better Timeline Diagrams

**Keep event labels short.** The timeline renders each event as a chip inside a column. Long text wraps awkwardly. Aim for 3-6 words per event.

**Use consistent period granularity.** Mixing \`Q1 2024\` with \`Week 3\` in the same diagram looks messy. Pick a granularity (quarters, months, sprints) and stick to it.

**Use sections for long timelines.** Anything with more than 6-8 periods benefits from section groupings — they add colour contrast and logical separation.

**Put the most important events first in a period.** Mermaid displays events top-to-bottom within a period column. Lead with the headline event.

**Test in the live editor first.** Before adding a timeline to your repo's README or docs, paste it into [mermaideditor.lol](https://mermaideditor.lol) to see how it renders. Easier to tweak there than after pushing a commit.

## Troubleshooting Common Issues

**Timeline not rendering?** Check that you're on Mermaid v9.4+. GitHub, Notion, and most modern integrations are already there, but self-hosted tools may lag behind.

**Events appearing in wrong order?** Mermaid renders periods in the order they appear in the source — there's no automatic date sorting. Write them top-to-bottom in chronological order.

**Text overflowing?** Shorten event labels or split into multiple sections.

**Section colours look off in dark mode?** Mermaid's built-in themes handle dark mode differently. Use the \`dark\` or \`default\` theme directive at the top of your diagram if needed.

## Conclusion

Mermaid timeline diagrams are a quick, maintainable way to visualise chronological information in your documentation. The syntax is minimal, the output is clean, and because diagrams live as text in your repo, they stay up-to-date as your project evolves.

Start with a simple 4-5 period timeline, add sections when it grows, and you'll have professional-looking roadmap and history diagrams without ever opening a design tool.

## Frequently Asked Questions

**What Mermaid version supports timeline diagrams?**
Timeline diagrams were added in Mermaid v9.4. GitHub, GitLab, and most modern platforms already ship this version. If you're self-hosting a docs site, check your Mermaid version.

**Can I style individual sections with custom colours?**
Not directly via the timeline syntax. Sections automatically get colours from the active theme. Use the \`%%{init}%%\` directive to switch themes (e.g., \`forest\` gives greens, \`base\` with custom variables gives full control).

**Can I add links to events?**
Not natively in timeline diagrams. If clickable events are critical, consider a flowchart with click event handlers instead.

**How do I show overlapping events at the same time?**
Add multiple \`: event\` lines under the same period. They all display as chips inside that period's column.

**Can I show duration, not just milestones?**
Timeline diagrams show point-in-time events. For showing task duration, use a Gantt chart instead.

## Conclusion

Mermaid timeline diagrams are the fastest way to get a chronological overview into your documentation. They take seconds to write, render cleanly on GitHub and most doc platforms, and stay accurate because they live right next to the things they document.

[Try building your timeline diagram for free at mermaideditor.lol →](/)
\`
  },
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

```
graph TD
    A[Write Code] --> B[Commit]
    B --> C[Push to GitHub]
    C --> D[Deploy]
```

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

```html
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>

<pre class="mermaid">
graph LR
    A --> B --> C
</pre>
```

### Option 3: Use in Markdown

On platforms like GitHub, simply wrap your diagram in a mermaid code fence:

```
```mermaid
graph TD
    A --> B
```
```

GitHub will render it automatically — no plugins needed.

### Option 4: Install via npm

For programmatic use in Node.js or build tools:

```bash
npm install mermaid
```

## Your First Flowchart

Let's build a practical example — a user login flow:

```
graph TD
    Start([User visits site]) --> Check{Logged in?}
    Check -- Yes --> Dashboard[Show Dashboard]
    Check -- No --> Login[Show Login Form]
    Login --> Submit[User submits credentials]
    Submit --> Validate{Valid?}
    Validate -- Yes --> Dashboard
    Validate -- No --> Error[Show Error]
    Error --> Login
```

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

## Advanced Features Worth Knowing

Once you're comfortable with the basics, Mermaid has several advanced features that make it even more powerful:

### Theming

Mermaid supports five built-in themes: \`default\`, \`dark\`, \`forest\`, \`neutral\`, and \`base\`. You can switch themes per diagram:

```
%%{init: {'theme': 'dark'}}%%
graph TD
    A[Dark themed] --> B[Diagram]
```

The \`base\` theme is fully customizable with CSS-like variables, letting you match your company's brand colours.

### Styling Individual Elements

You can apply custom styles to specific nodes:

```
graph TD
    A[Normal]:::default --> B[Critical]:::alert
    classDef alert fill:#ff6b6b,color:white,stroke:#c0392b
```

This is useful for highlighting error states, critical paths, or key components.

### Subgraphs for Grouping

When diagrams get larger, subgraphs keep them organised:

```
flowchart TB
    subgraph Frontend
        React[React App] --> Redux[State Management]
    end
    subgraph Backend
        API[REST API] --> DB[(PostgreSQL)]
    end
    Redux --> API
```

Subgraphs act like visual containers that group related nodes together.

## Mermaid in the Real World

Mermaid has been adopted by some of the biggest names in tech:

- **GitHub** added native Mermaid rendering in February 2022, instantly making it accessible to millions of developers.
- **GitLab** supports Mermaid in its Markdown renderer across all plan tiers.
- **Amazon, Google, and Microsoft** documentation teams use Mermaid for internal and external documentation.
- **Open-source projects** increasingly use Mermaid in their README files and contributor guides.

The trend is clear: diagrams as code is becoming the standard for technical documentation, and Mermaid is leading that movement.

## What Mermaid Can't Do

Mermaid is powerful, but it's not the right tool for everything:

- **Pixel-perfect layouts** — You can't manually position nodes. Mermaid's layout engine decides where things go.
- **Complex custom graphics** — Mermaid generates structured diagrams, not freeform illustrations.
- **Interactive dashboards** — Mermaid produces static SVGs; for interactive data visualisation, use D3.js or Chart.js.
- **Presentation-grade visuals** — For slides or marketing materials, a GUI tool like Figma or Canva may be more appropriate.

The sweet spot for Mermaid is **developer documentation** — the stuff that needs to be accurate, up-to-date, and version-controlled rather than pixel-perfect and fancy.

## Frequently Asked Questions

**Is Mermaid.js free?** Yes, completely. It's open-source under the MIT licence.

**Does it work offline?** Yes. You can include the library locally and render diagrams without an internet connection.

**Can I export diagrams as images?** Yes. Most live editors support PNG and SVG export. The Mermaid CLI (\`mmdc\`) can also generate images from the command line.

**Does Mermaid support real-time collaboration?** Not natively. However, since diagrams are text files, you collaborate through your existing workflow — Git branches, pull requests, and code review.

## Conclusion

Mermaid.js bridges the gap between text-based documentation and visual communication. It's fast, free, version-controllable, and increasingly supported across the platforms developers already use. Whether you're documenting an API, planning a project, or modeling a database, Mermaid lets you create professional diagrams without leaving your text editor.

## Conclusion

Mermaid.js is one of the most developer-friendly tools to emerge in the documentation space. It brings the same philosophy as Markdown — write plain text, get formatted output — and applies it to diagrams. The result is a tool that fits naturally into how developers already work: in text editors, in version control, in pull request reviews.

If you've never used Mermaid before, the best way to start is to pick one diagram type (flowcharts are the most intuitive), spend 10 minutes with the syntax, and add a diagram to a project you're already working on. Once you see how quickly it renders and how easily you can update it, the rest follows naturally.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```

The direction keyword controls layout:

- **TD** or **TB** — Top to Bottom (default, most common)
- **LR** — Left to Right (great for pipelines)
- **BT** — Bottom to Top
- **RL** — Right to Left

You can also use \`flowchart\` instead of \`graph\` for the newer syntax with more features:

```
flowchart LR
    A[Start] --> B[Process] --> C[End]
```

## Node Shapes

Mermaid provides many node shapes to convey meaning visually:

```
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
```

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

```
flowchart LR
    A -->|Arrow| B
    C ---|Line| D
    E -.->|Dotted arrow| F
    G ==>|Thick arrow| H
    I --o|Circle end| J
    K --x|Cross end| L
```

### Edge Length

You can control edge length by adding extra dashes:

```
flowchart TD
    A --> B
    A ----> C
    A -------> D
```

Longer edges push nodes further apart, which helps with layout.

### Labeled Edges

Add labels to describe the relationship:

```
flowchart TD
    A{Is it raining?}
    A -->|Yes| B[Take umbrella]
    A -->|No| C[Enjoy the sun]
```

You can also use this syntax: \`A -- "label text" --> B\`

## Practical Example: CI/CD Pipeline

Let's build a real-world flowchart — a CI/CD deployment pipeline:

```
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
```

This single text block produces a complete CI/CD visualization that's easy to update when the process changes.

## Subgraphs — Grouping Related Nodes

Subgraphs let you group nodes into labeled sections:

```
flowchart TB
    subgraph Frontend
        A[React App] --> B[API Client]
    end
    subgraph Backend
        C[Express Server] --> D[Business Logic]
        D --> E[(PostgreSQL)]
    end
    B --> C
```

### Nested Subgraphs

You can nest subgraphs for complex architectures:

```
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
```

### Subgraph Direction

Each subgraph can have its own direction:

```
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
```

## Styling Your Flowcharts

### Inline Styles

Apply CSS-like styles directly to nodes:

```
flowchart LR
    A[Critical]:::critical --> B[Normal] --> C[Success]:::success

    classDef critical fill:#ff6b6b,stroke:#c0392b,color:white
    classDef success fill:#51cf66,stroke:#2f9e44,color:white
```

### Style by Node ID

```
flowchart TD
    A[Important Node]
    style A fill:#f9f,stroke:#333,stroke-width:4px
```

### Common Style Patterns

Here's a reusable set of class definitions:

```
flowchart TD
    A[Start]:::start --> B[Process]:::process --> C{Decision}:::decision
    C -->|Yes| D[Success]:::success
    C -->|No| E[Error]:::error

    classDef start fill:#667eea,stroke:#5a67d8,color:white
    classDef process fill:#f7fafc,stroke:#cbd5e0
    classDef decision fill:#faf089,stroke:#d69e2e
    classDef success fill:#c6f6d5,stroke:#38a169
    classDef error fill:#fed7d7,stroke:#e53e3e
```

## Advanced Techniques

### Multiple Links from One Node

```
flowchart TD
    A[Router] --> B[Handler 1]
    A --> C[Handler 2]
    A --> D[Handler 3]
    B & C & D --> E[Response]
```

The \`&\` operator connects multiple nodes at once.

### Special Characters in Labels

Use quotes for special characters:

```
flowchart LR
    A["Node with (parentheses)"] --> B["Contains {braces}"]
    B --> C["Has #quot;quotes#quot;"]
```

### Comments

Add comments with \`%%\`:

```
flowchart TD
    %% This is a comment
    A --> B
    %% Another comment
    B --> C
```

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

## Practical Example: Error Handling Flow

Here's a flowchart showing how a web application handles API errors:

```
flowchart TD
    Request([API Request]) --> Auth{Authenticated?}
    Auth -->|No| Return401[Return 401 Unauthorized]
    Auth -->|Yes| Validate{Valid Input?}
    Validate -->|No| Return400[Return 400 Bad Request]
    Validate -->|Yes| Process[Process Request]
    Process --> DBCall[Database Query]
    DBCall --> DBResult{Success?}
    DBResult -->|Yes| Return200[Return 200 OK]
    DBResult -->|No| Retry{Retries Left?}
    Retry -->|Yes| DBCall
    Retry -->|No| Return500[Return 500 Server Error]
    Return401 & Return400 & Return200 & Return500 --> Log[Log to Monitoring]
```

This pattern is commonly used in API documentation to show developers exactly how errors propagate through the system.

## Practical Example: User Registration Flow

```
flowchart LR
    Start([User clicks Sign Up]) --> Form[Show Registration Form]
    Form --> Fill[User fills details]
    Fill --> ClientVal{Client-side valid?}
    ClientVal -->|No| ShowErr[Show field errors]
    ShowErr --> Fill
    ClientVal -->|Yes| Submit[Submit to API]
    Submit --> ServerVal{Server-side valid?}
    ServerVal -->|No| Conflict[Email already exists]
    Conflict --> Form
    ServerVal -->|Yes| CreateUser[Create account]
    CreateUser --> SendEmail[Send verification email]
    SendEmail --> Confirm[User clicks verify link]
    Confirm --> Active([Account active])
```

## When to Use Flowcharts vs Other Diagram Types

**Use flowcharts when:**
- You need to show a process with clear steps
- There are decision points (if/else logic)
- The flow has loops or retry logic
- You want to document error handling paths

**Use sequence diagrams instead when:**
- The focus is on communication between multiple actors/services
- Timing and order of messages matters
- You're documenting API request/response flows

**Use state diagrams instead when:**
- You're modeling an object's lifecycle (order status, user state)
- Transitions are triggered by events rather than sequential steps
- The focus is on states rather than process steps

## Conclusion

Mermaid flowcharts are powerful enough for real-world documentation yet simple enough to create in seconds. Start with basic nodes and arrows, then progressively add shapes, styles, and subgraphs as needed. The key advantage is maintainability — when your process changes, updating a few lines of text is infinitely easier than rearranging boxes in a drawing tool.

## Integrating Flowcharts into Your Documentation Workflow

The best flowcharts are the ones that stay current. Here's a practical workflow to make that happen:

1. **Add diagrams to the same PR as the code change.** When you change a process, update the diagram in the same commit.
2. **Store diagrams in \`docs/\`** alongside related documentation files.
3. **Reference diagrams from code comments.** Add a comment in complex functions pointing to the flowchart: \`// See docs/auth-flow.md for the full decision tree\`
4. **Review diagrams in code review.** Treat diagram changes the same as code changes — verify they accurately reflect the implementation.
5. **Build incrementally.** Start with the happy path, then add error branches and edge cases as they're discovered.

## Flowchart Alternatives

Not every flow is best expressed as a Mermaid flowchart:

- **Simple linear process?** A numbered list in Markdown may be clearer.
- **Complex service interactions?** A sequence diagram better shows the actors and message order.
- **Object lifecycle?** A state diagram focuses on states and transitions more cleanly.
- **Time-based planning?** A Gantt chart shows duration and dependencies.

The flowchart is the workhorse of Mermaid diagrams, but knowing when to reach for a different type makes your documentation better.

## Conclusion

Mermaid flowcharts give you a full-featured diagramming system in plain text. Start with basic nodes and arrows, use shapes and labels to add meaning, and reach for subgraphs and styling when complexity demands it. The key advantage is maintainability — when your process changes, updating a few lines of text is infinitely easier than rearranging boxes in a drawing tool.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    Bob-->>Alice: Great!
```

The key elements:
- **Participants** are automatically created when first mentioned
- **Solid arrow** (\`->>\`) = synchronous message
- **Dashed arrow** (\`-->>\`) = response / async message
- Messages are labeled after the colon

## Arrow Types

Mermaid supports several arrow types for different message semantics:

```
sequenceDiagram
    A->>B: Solid line with arrowhead (sync call)
    B-->>A: Dotted line with arrowhead (response)
    A-)B: Solid line with open arrow (async)
    B--)A: Dotted line with open arrow (async response)
    A-xB: Solid line with cross (lost message)
    B--xA: Dotted line with cross
```

## Defining Participants

You can explicitly declare participants to control order and add aliases:

```
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
```

Use \`actor\` instead of \`participant\` to show a stick figure:

```
sequenceDiagram
    actor User
    participant API
    User->>API: Request
    API-->>User: Response
```

## Activation Bars

Activation bars show when a participant is actively processing:

```
sequenceDiagram
    Client->>+Server: HTTP Request
    Server->>+Database: Query
    Database-->>-Server: Results
    Server-->>-Client: HTTP Response
```

The \`+\` activates (starts the bar) and \`-\` deactivates (ends it). You can also use explicit syntax:

```
sequenceDiagram
    Client->>Server: Request
    activate Server
    Server->>Database: Query
    activate Database
    Database-->>Server: Results
    deactivate Database
    Server-->>Client: Response
    deactivate Server
```

## Real-World Example: OAuth 2.0 Flow

```
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
```

## Loops

Show repeated interactions:

```
sequenceDiagram
    participant Client
    participant Server

    Client->>Server: Connect
    loop Every 30 seconds
        Client->>Server: Heartbeat ping
        Server-->>Client: Pong
    end
    Client->>Server: Disconnect
```

## Alt / Else Blocks (Conditionals)

Show branching logic:

```
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
```

## Optional Blocks

The \`opt\` block shows something that may or may not happen:

```
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
```

## Parallel (Par) Blocks

Show things happening simultaneously:

```
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
```

## Notes

Add notes for extra context:

```
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
```

Note positions: \`Note left of\`, \`Note right of\`, \`Note over A,B\` (spans multiple participants).

## Critical Regions

Highlight critical sections:

```
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
```

## Autonumber

Automatically number each message for easy reference:

```
sequenceDiagram
    autonumber
    Alice->>Bob: Request
    Bob->>Charlie: Forward
    Charlie-->>Bob: Response
    Bob-->>Alice: Response
```

## Real-World Example: Microservice Order Flow

```
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
```

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

## Real-World Example: WebSocket Connection Lifecycle

WebSocket flows are perfect for sequence diagrams because they show the full connection lifecycle:

```
sequenceDiagram
    participant Client
    participant Server
    participant DB

    Client->>Server: HTTP Upgrade Request
    Server-->>Client: 101 Switching Protocols
    Note over Client,Server: WebSocket connection established

    loop Real-time updates
        Server->>Client: Push notification
        Client->>Server: Acknowledge
    end

    Client->>Server: Send chat message
    Server->>DB: Store message
    DB-->>Server: Saved
    Server->>Client: Message confirmed
    Server-)Client: Broadcast to other users

    Client->>Server: Close connection
    Server-->>Client: Close acknowledgement
    Note over Client,Server: Connection terminated
```

## Real-World Example: File Upload with Progress

```
sequenceDiagram
    autonumber
    actor User
    participant App as Web App
    participant API as Upload API
    participant S3 as S3 Storage

    User->>App: Select file
    App->>API: POST /uploads/init
    API-->>App: Upload URL + Upload ID

    loop Each chunk (5MB)
        App->>S3: PUT chunk
        S3-->>App: Chunk confirmed
        App->>User: Update progress bar
    end

    App->>API: POST /uploads/complete
    API->>S3: Finalize multipart upload
    S3-->>API: Complete
    API-->>App: File URL
    App-->>User: Upload complete!
```

## Sequence Diagrams for Documentation

Sequence diagrams are invaluable in several documentation contexts:

- **API documentation** — Show the exact request/response flow for each endpoint
- **Architecture Decision Records (ADRs)** — Illustrate how services will communicate in a proposed design
- **Incident postmortems** — Trace the exact sequence of events that led to an outage
- **Onboarding docs** — Help new developers understand how the system's components interact
- **Security reviews** — Map authentication and authorization flows for security audits

The text-based nature of Mermaid means these diagrams stay up-to-date with the code — update them in the same pull request that changes the behaviour.

## Customising Appearance

You can customise the look of sequence diagrams with the init directive:

```
%%{init: {'theme': 'base', 'themeVariables': {
    'actorBkg': '#4f46e5',
    'actorTextColor': '#fff',
    'signalColor': '#374151',
    'noteBkgColor': '#f5f3ff'
}}}%%
sequenceDiagram
    participant A as Service A
    participant B as Service B
    A->>B: Request
    B-->>A: Response
```

This lets you match your documentation's colour scheme or highlight specific elements.

## Conclusion

Sequence diagrams are essential for documenting how systems communicate. Mermaid's text-based approach means your diagrams stay in sync with your code, live in your repo, and are easy to update. Start with the basic arrow syntax, then add loops, alt blocks, and activation as needed.

## Integrating Sequence Diagrams into Your Workflow

Sequence diagrams are most valuable when they live close to the code they describe:

- **API documentation:** Add a sequence diagram to each endpoint's docs showing the full request lifecycle
- **Architecture Decision Records:** Include a sequence diagram showing how the proposed solution's components interact
- **Onboarding docs:** A high-level sequence diagram of the system's core flow helps new developers get up to speed fast
- **Incident postmortems:** Reconstruct the exact sequence of events that caused an outage

The text-based format means updates take seconds. When an API endpoint changes, the diagram update is two lines in the same pull request.

## Troubleshooting Common Sequence Diagram Issues

**Diagram not rendering?** Check that every \`loop\`, \`alt\`, \`opt\`, and \`par\` block has a matching \`end\`.

**Participants in wrong order?** Declare them explicitly with \`participant A\` lines at the top — Mermaid renders them left-to-right in declaration order.

**Diagram too wide?** You have too many participants. Group related services behind a single participant label, or split the diagram into multiple focused diagrams.

**Arrows going in wrong direction?** Remember: \`A->>B\` means A sends to B. Double-check your arrow directions.

## Conclusion

Sequence diagrams are one of the most valuable diagram types for developer documentation. They make abstract service interactions concrete and help teams communicate precisely about system behaviour. The Mermaid text-based approach means your diagrams stay in sync with your code, live in your repo, and are easy to update. Start with the basic arrow syntax, then add loops, alt blocks, and activation as needed.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
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
```

### Key Elements

- **\`title\`** — Chart title
- **\`dateFormat\`** — How dates are parsed (YYYY-MM-DD is standard)
- **\`section\`** — Groups related tasks
- **Tasks** follow the format: \`Task name : id, start, duration\`

## Task Definition Formats

Tasks can be defined in several ways:

```
gantt
    dateFormat YYYY-MM-DD

    section Various Formats
    Fixed dates       :t1, 2025-03-01, 2025-03-10
    With duration     :t2, 2025-03-01, 10d
    After dependency  :t3, after t1, 5d
    No ID needed      :2025-03-15, 7d
```

### Duration Units

- \`d\` — days (most common)
- \`h\` — hours
- \`m\` — minutes
- \`w\` — weeks

## Task States

Tasks can have different visual states:

```
gantt
    dateFormat YYYY-MM-DD

    section Task States
    Completed task    :done, t1, 2025-01-01, 5d
    Active task       :active, t2, after t1, 5d
    Future task       :t3, after t2, 5d
    Critical task     :crit, t4, after t3, 3d
    Critical & active :crit, active, t5, after t4, 3d
```

- **\`done\`** — Shown as completed (usually gray)
- **\`active\`** — Currently in progress (highlighted)
- **\`crit\`** — Critical path (usually red)
- These can be combined: \`crit, done\` or \`crit, active\`

## Milestones

Mark key dates with zero-duration milestones:

```
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
```

## Dependencies

Tasks can depend on one or more previous tasks:

```
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
```

Notice \`after api db\` — the task starts after BOTH \`api\` and \`db\` are complete.

## Practical Example: Software Release Plan

```
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
```

## Date Formatting

### Input Date Format

Control how Mermaid parses your dates:

```
gantt
    dateFormat DD-MM-YYYY
    task1 :01-03-2025, 10d
```

Common formats:
- \`YYYY-MM-DD\` — ISO standard (recommended)
- \`DD-MM-YYYY\` — European
- \`MM-DD-YYYY\` — US

### Axis Display Format

Control how the timeline axis looks:

```
gantt
    dateFormat YYYY-MM-DD
    axisFormat %Y-%m-%d

    section Tasks
    Task 1 :2025-01-01, 30d
```

Common axis formats:
- \`%Y-%m-%d\` — 2025-01-15
- \`%b %d\` — Jan 15
- \`%d/%m\` — 15/01
- \`%B %Y\` — January 2025

## Excluding Dates

Skip weekends or holidays:

```
gantt
    dateFormat YYYY-MM-DD
    excludes weekends

    section Development
    Task 1 :t1, 2025-03-03, 5d
    Task 2 :t2, after t1, 5d
```

With weekends excluded, a 5-day task truly means 5 business days.

You can also exclude specific dates:
```
excludes weekends, 2025-12-25, 2025-12-26
```

## Sections as Swim Lanes

Use sections to organize by team, phase, or component:

```
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
```

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

## Real-World Example: API Migration Plan

Here's a practical Gantt chart for migrating from REST to GraphQL:

```
gantt
    title REST to GraphQL Migration
    dateFormat YYYY-MM-DD
    axisFormat %b %d
    excludes weekends

    section Research
    Evaluate GraphQL libraries    :done, r1, 2025-06-02, 3d
    Schema design workshop        :done, r2, after r1, 2d
    Proof of concept               :done, r3, after r2, 5d
    Team review                    :milestone, done, rm, after r3, 0d

    section Implementation
    Core schema & resolvers        :active, i1, after rm, 10d
    Auth integration               :i2, after i1, 3d
    Pagination & filtering         :i3, after i1, 5d
    Subscription support           :i4, after i2, 5d

    section Migration
    Dual-run REST + GraphQL        :crit, m1, after i3 i4, 10d
    Client migration (web)         :m2, after m1, 5d
    Client migration (mobile)      :m3, after m1, 7d
    REST deprecation notice        :m4, after m2 m3, 1d

    section Cleanup
    Remove REST endpoints          :c1, after m4, 5d
    Documentation update           :c2, after m4, 3d
    Final review                   :milestone, crit, cm, after c1 c2, 0d
```

This chart tells a complete story: research is done, implementation is in progress, and the critical migration phase is clearly marked.

## Gantt Charts for Agile Teams

While Gantt charts are often associated with waterfall project management, they work well for agile teams in specific contexts:

- **Release planning** — Showing multiple sprints leading to a release
- **Cross-team dependencies** — When teams need to see how their work overlaps
- **Stakeholder communication** — Executives often prefer timeline views over sprint boards
- **Roadmap documentation** — High-level quarterly plans with key milestones

The key is using Gantt charts at the right level of abstraction. Don't track individual user stories — that's what your sprint board is for. Use Gantt charts for the bigger picture that spans weeks or months.

## Frequently Asked Questions

**Can I show percentage completion?** Not directly in Mermaid. Use the \`done\`, \`active\`, and default states to indicate progress visually.

**Can I link tasks to URLs?** Mermaid Gantt charts support click events in some rendering contexts, but this isn't universally supported across platforms. For documentation purposes, reference task IDs in accompanying text.

**What's the maximum timeline length?** There's no hard limit, but charts spanning more than 6 months become hard to read. Consider breaking long projects into phase-specific charts.

## Conclusion

Mermaid Gantt charts turn project timelines into maintainable code. They're perfect for technical documentation, sprint planning overviews, and release plans that live alongside your source code. Start simple with sections and tasks, then add dependencies, milestones, and critical path markers as your planning matures.

## Gantt Charts vs Project Management Tools

Mermaid Gantt charts complement your project management tools — they don't replace them. Here's how to think about when to use each:

**Use Mermaid Gantt when:**
- Embedding a timeline in a README, design doc, or proposal
- Communicating a plan to stakeholders who don't have access to your PM tool
- Documenting a completed project's timeline for retrospective
- Creating a high-level roadmap that lives in your repository

**Use your PM tool (Jira, Linear, Asana) when:**
- Tracking day-to-day task completion
- Managing sprint backlogs and assignments
- Generating reports for management
- Real-time collaboration on task status

The sweet spot: use your PM tool for execution, and export a simplified Mermaid Gantt for documentation.

## Automated Gantt Chart Generation

For teams that want to keep Gantt diagrams in sync with actual project data, consider generating Mermaid syntax programmatically:

```javascript
function generateGantt(sprints) {
  let output = 'gantt\n    title Sprint Roadmap\n    dateFormat YYYY-MM-DD\n';
  for (const sprint of sprints) {
    output += \`    section ${sprint.name}\n\`;
    for (const task of sprint.tasks) {
      output += \`    ${task.name} :${task.id}, ${task.start}, ${task.days}d\n\`;
    }
  }
  return output;
}
```

This pattern lets you pull data from your project management API and generate a fresh Mermaid Gantt chart automatically.

## Conclusion

Mermaid Gantt charts are the developer's answer to project timeline documentation. They're fast to write, live in your repo, and render cleanly on GitHub and most documentation platforms. Use them for release plans, migration timelines, sprint overviews, and project proposals — any situation where a visual timeline adds clarity to your documentation. Start simple with sections and tasks, then add dependencies, milestones, and critical path markers as your planning matures.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
        +move(distance) void
    }
```

### Visibility Modifiers

Mermaid follows UML conventions:
- \`+\` Public
- \`-\` Private
- \`#\` Protected
- \`~\` Package/Internal

```
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
```

## Relationships

### Inheritance (Generalization)

```
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
```

### All Relationship Types

```
classDiagram
    classA <|-- classB : Inheritance
    classC *-- classD : Composition
    classE o-- classF : Aggregation
    classG --> classH : Association
    classI -- classJ : Link
    classK ..> classL : Dependency
    classM ..|> classN : Realization
```

**When to use each:**
- **Inheritance** (\`<|--\`): "is a" — Dog is an Animal
- **Composition** (\`*--\`): "owns, can't exist without" — Car owns Engine
- **Aggregation** (\`o--\`): "has, can exist independently" — Department has Employees
- **Association** (\`-->\`): "uses" — Order references Customer
- **Dependency** (\`..>\`): "temporarily uses" — Service depends on Logger
- **Realization** (\`..|>\`): "implements" — UserService implements IUserService

## Cardinality (Multiplicity)

Show how many instances relate:

```
classDiagram
    Customer "1" --> "*" Order : places
    Order "1" --> "1..*" OrderItem : contains
    OrderItem "*" --> "1" Product : references
```

Common multiplicities:
- \`1\` — exactly one
- \`0..1\` — zero or one
- \`*\` or \`0..*\` — zero or more
- \`1..*\` — one or more

## Interfaces and Abstract Classes

```
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
```

### Annotations

Use \`<<annotation>>\` for stereotypes:

```
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
```

## Practical Example: E-Commerce Domain Model

```
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
```

## Design Pattern: Repository Pattern

```
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
```

## Generics

Mermaid supports generic types with tilde syntax:

```
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
```

## Namespaces

Group related classes:

```
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
```

## Styling

```
classDiagram
    class Service {
        +process() void
    }
    class Entity {
        +String id
    }

    style Service fill:#e1f5fe,stroke:#0288d1
    style Entity fill:#f3e5f5,stroke:#7b1fa2
```

## Best Practices

1. **Focus on the domain.** Don't diagram every utility class — show the important domain entities and their relationships.

2. **Use correct relationship types.** Composition vs. aggregation vs. association matters for communicating intent.

3. **Include cardinality** on associations — it clarifies the data model significantly.

4. **Show key methods only.** Skip getters/setters and boilerplate. Show the methods that define behavior.

5. **Use interfaces** to show contracts. This communicates the architecture's extension points.

6. **Group with namespaces** for large models. Separate domain, infrastructure, and application layers.

7. **Add annotations** (\`<<service>>\`, \`<<dto>>\`, \`<<entity>>\`) to clarify the role of each class.

8. **Keep diagrams focused.** One diagram per bounded context or module. A single diagram with 30+ classes helps nobody.

## Design Pattern: Observer Pattern

Class diagrams are excellent for documenting design patterns in your codebase:

```
classDiagram
    class EventEmitter {
        -Map~String, Function[]~ listeners
        +on(event, callback) void
        +off(event, callback) void
        +emit(event, data) void
    }
    class OrderService {
        -EventEmitter emitter
        +placeOrder(items) Order
    }
    class EmailNotifier {
        +onOrderPlaced(order) void
    }
    class InventoryTracker {
        +onOrderPlaced(order) void
    }
    class AnalyticsLogger {
        +onOrderPlaced(order) void
    }

    OrderService --> EventEmitter : uses
    EventEmitter --> EmailNotifier : notifies
    EventEmitter --> InventoryTracker : notifies
    EventEmitter --> AnalyticsLogger : notifies
```

## Real-World Example: Authentication System

```
classDiagram
    class AuthService {
        -TokenProvider tokenProvider
        -UserRepository userRepo
        -PasswordHasher hasher
        +login(email, password) AuthResult
        +register(data) User
        +refreshToken(token) AuthResult
        +logout(token) void
    }
    class TokenProvider {
        <<interface>>
        +generate(user) Token
        +verify(token) Claims
        +revoke(token) void
    }
    class JwtTokenProvider {
        -String secret
        -int expirationMs
        +generate(user) Token
        +verify(token) Claims
        +revoke(token) void
    }
    class PasswordHasher {
        <<interface>>
        +hash(password) String
        +verify(password, hash) bool
    }
    class BcryptHasher {
        -int saltRounds
        +hash(password) String
        +verify(password, hash) bool
    }
    class AuthResult {
        +String accessToken
        +String refreshToken
        +User user
    }

    TokenProvider <|.. JwtTokenProvider
    PasswordHasher <|.. BcryptHasher
    AuthService --> TokenProvider
    AuthService --> PasswordHasher
    AuthService --> AuthResult : returns
```

This diagram communicates the authentication architecture at a glance — interfaces for testability, concrete implementations for production, and clear dependencies.

## Class Diagrams in Pull Requests

One of the most impactful uses of Mermaid class diagrams is in pull requests. When proposing a new feature or refactoring, include a class diagram showing the proposed design. Reviewers can understand the architecture before reading a single line of code.

This is especially valuable for:
- **New feature proposals** — "Here's how the new payment module will be structured"
- **Refactoring plans** — "Here's the before and after class structure"
- **API design reviews** — "Here are the interfaces consumers will interact with"

## Conclusion

Mermaid class diagrams bring UML into your codebase. They're ideal for documenting domain models, communicating design decisions in pull requests, and maintaining architecture docs that stay current. The text-based format means they're diffable, reviewable, and version-controlled — everything a developer needs.

## Real-World Example: E-Commerce Domain Model

Here's a complete class diagram for an e-commerce system showing real-world complexity:

```
classDiagram
    class Product {
        +String sku
        +String name
        +Money price
        +int stockLevel
        +bool isAvailable()
        +void adjustStock(delta)
    }
    class Order {
        +String orderNumber
        +OrderStatus status
        +Money total()
        +void place()
        +void cancel()
        +void fulfill()
    }
    class OrderItem {
        +int quantity
        +Money unitPrice
        +Money subtotal()
    }
    class Customer {
        +String email
        +String name
        +List~Address~ addresses
    }
    class Address {
        +String street
        +String city
        +String country
        +String postalCode
    }
    class Payment {
        <<abstract>>
        +Money amount
        +PaymentStatus status
        +void process()*
        +void refund()*
    }
    class CreditCardPayment {
        +String last4
        +String brand
        +void process()
        +void refund()
    }
    class PayPalPayment {
        +String paypalEmail
        +void process()
        +void refund()
    }

    Customer "1" --> "0..*" Order : places
    Order "1" --> "1..*" OrderItem : contains
    OrderItem "*" --> "1" Product : references
    Order "1" --> "1" Payment : paid_via
    Customer "1" --> "1..*" Address : has
    Payment <|-- CreditCardPayment
    Payment <|-- PayPalPayment
```

This diagram communicates the entire order domain at a glance — entities, relationships, and the payment abstraction pattern.

## Using Class Diagrams in Architecture Reviews

Class diagrams are most impactful when used proactively in design reviews:

1. **Before implementation:** Create the class diagram as part of the design document. Get feedback on the structure before writing a line of code.
2. **During code review:** Include a diagram in the PR description showing how new classes relate to existing ones.
3. **After implementation:** Update the diagram to reflect what was actually built, and commit it to \`docs/\`.
4. **During refactoring:** Create a "before" and "after" diagram to communicate the intent of the refactor to reviewers.

## Conclusion

Mermaid class diagrams bring UML-style modeling to your plain text documentation workflow. They're perfect for documenting domain models, illustrating design patterns, communicating class hierarchies in pull requests, and maintaining architecture docs that stay current. The text-based format means they're diffable, reviewable, and version-controlled — everything a developer needs.

## When to Use Mermaid Class Diagrams

Class diagrams shine in specific scenarios:

**Design phase:** Before writing code, sketch the class structure. This forces you to think about responsibilities and relationships early, when changes are cheap.

**Code review:** Include a before/after class diagram in your PR description. Reviewers understand the impact of structural changes immediately, rather than piecing it together from diffs.

**Onboarding documentation:** New team members can understand the codebase's structure from a class diagram in 5 minutes, vs. hours of reading code.

**Architecture documentation:** Keep a \`docs/class-diagrams/\` directory with diagrams for each major subsystem. Update them in the same PR as code changes.

## Conclusion

Mermaid class diagrams make UML-style modeling accessible to every developer without requiring specialized tools. They're perfect for documenting domain models, illustrating design patterns, and communicating class hierarchies in pull requests. The text-based format means they're diffable, reviewable, and version-controlled — everything a developer needs.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

## Making the Transition to Diagrams as Code

If your team currently uses GUI diagramming tools and you're considering switching to Mermaid, here's a practical transition plan:

### Phase 1: Start with New Diagrams

Don't try to migrate existing diagrams. Instead, create all new diagrams in Mermaid. This gives your team time to learn the syntax without the pressure of converting a back-catalogue.

### Phase 2: Document the Standards

Create a team style guide for Mermaid diagrams:
- Preferred direction (TD for architectures, LR for pipelines)
- Node naming conventions
- Colour scheme for consistent visual language
- Where diagrams live in the repo (\`docs/diagrams/\`)

### Phase 3: Migrate High-Value Diagrams

Identify the diagrams that are updated most frequently — these benefit most from being text-based. Convert them to Mermaid as they come up for review.

### Phase 4: Evaluate and Adjust

After a few months, evaluate what's working. Some teams find they still want a GUI tool for specific use cases (presentation decks, customer-facing docs), and that's fine. The hybrid approach works well.

## Real Cost Comparison

Let's put numbers to the tool comparison:

| Tool | Monthly Cost | Per Seat |
|---|---|---|
| Mermaid.js | Free | Free |
| Draw.io (desktop) | Free | Free |
| Draw.io (Confluence plugin) | $5-10 | Yes |
| Lucidchart | $9-27 | Yes |
| Miro | $10-20 | Yes |
| Visio | ~$13 | Yes |
| Figma (with FigJam) | $12-45 | Yes |

For a 20-person engineering team, Lucidchart alone costs $180-540/month. Mermaid is free forever and produces text files that live in your repository.

The total cost of ownership argument for Mermaid is compelling, especially when you factor in that diagrams-as-code eliminates the "I can't find the source file" problem that plagues GUI-created diagrams.

## When Teams Should Stick with GUI Tools

To be fair, there are valid reasons to keep GUI diagramming tools:

1. **Non-technical stakeholders** who need to create or edit diagrams without learning syntax
2. **Client deliverables** that require polished, branded visuals
3. **Whiteboarding sessions** where real-time collaborative freehand drawing helps
4. **Complex custom layouts** where you need pixel-level control over positioning
5. **Existing investment** — if your team has years of Lucidchart diagrams and established workflows, migration cost matters

The realistic answer for most teams: use Mermaid for internal technical documentation, and keep a GUI tool for external-facing materials.

## Conclusion

Mermaid wins for developer documentation: it's free, version-controlled, and faster to create once you know the syntax. Draw.io is the best free GUI option for teams that need visual editing. Lucidchart and Miro shine when real-time collaboration and presentation quality matter. The best approach is to evaluate your actual use cases and choose accordingly — or use a combination. The hybrid approach works well.

[Try creating diagrams as code in our free Mermaid Live Editor →](/)
\`
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

```
```mermaid
graph LR
    A[User] --> B[Frontend]
    B --> C[API]
    C --> D[(Database)]
```
```

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

```
```mermaid
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
```
```

### Contribution Workflow

Help contributors understand your process:

```
```mermaid
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
```
```

### API Flow Documentation

Document your API interactions:

```
```mermaid
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
```
```

### Database Schema

Document your data model:

```
```mermaid
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
```
```

### Project Roadmap

Show your planned timeline:

```
```mermaid
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
```
```

## Best Practices for GitHub READMEs

### 1. Keep Diagrams Simple

GitHub's Mermaid renderer handles most features, but very complex diagrams with 50+ nodes can be slow to render or hard to read on small screens. Split complex systems into multiple focused diagrams.

### 2. Test Before Pushing

Use a live editor to verify your diagram renders correctly before committing. GitHub's renderer occasionally has quirks with newer Mermaid features since it may not run the latest version.

### 3. Provide Alt Text for Accessibility

Unfortunately, GitHub doesn't support alt text for Mermaid diagrams directly. Consider adding a text description below complex diagrams:

```markdown
```mermaid
graph LR
    A --> B --> C
```

*The diagram shows data flowing from component A through B to C.*
```

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

```markdown
<!-- Rendered diagram (for platforms without Mermaid support) -->
![Architecture](./docs/architecture.png)

<!-- Mermaid source (for GitHub and supporting platforms) -->
<details>
<summary>Diagram source</summary>

```mermaid
graph TD
    A --> B
```

</details>
```

## Practical Example: Monorepo Documentation

For monorepos with multiple packages, use Mermaid to show package dependencies:

```
```mermaid
graph TD
    subgraph Packages
        Core["@myorg/core"]
        UI["@myorg/ui"]
        Utils["@myorg/utils"]
        API["@myorg/api-client"]
        Config["@myorg/config"]
    end
    UI --> Core
    UI --> Utils
    API --> Core
    API --> Utils
    Core --> Config
    Utils --> Config
```
```

This helps contributors understand which packages depend on which, making refactoring safer.

## README Diagram Patterns Worth Stealing

Here are diagram patterns that consistently improve README quality:

### 1. The "How It Works" Diagram
Place a simple flowchart right after your project description. Show the 4-5 step process of how your tool works.

### 2. The "Architecture at a Glance" Diagram
A subgraph-based flowchart showing your system's main components. Use it in the project overview section.

### 3. The "Data Flow" Sequence Diagram
Show how data moves through your system. Especially valuable for data processing pipelines and ETL tools.

### 4. The "State Machine" Diagram
For libraries that manage state (form libraries, workflow engines), a state diagram communicates the lifecycle instantly.

### 5. The "Before/After" Pair
When your project simplifies a complex process, show a "without our tool" diagram and a "with our tool" diagram side by side.

Each of these patterns takes 5 minutes to create but saves every reader minutes of confusion.

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

```yaml
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
```

This generates PNG/SVG files from your .mmd files, useful for platforms that don't support Mermaid natively.

## Real README Example

Here's how a well-structured README uses diagrams:

```markdown
# My Awesome API

A RESTful API for managing tasks.

## Architecture

```mermaid
graph TB
    Client[Client Apps] --> LB[Load Balancer]
    LB --> API1[API Server 1]
    LB --> API2[API Server 2]
    API1 & API2 --> DB[(PostgreSQL)]
    API1 & API2 --> Cache[(Redis)]
```

## Getting Started
...

## API Endpoints

### Authentication Flow

```mermaid
sequenceDiagram
    Client->>API: POST /auth/login
    API-->>Client: JWT Token
    Client->>API: GET /tasks (Bearer token)
    API-->>Client: Task list
```
```

## Conclusion

Mermaid in GitHub READMEs is one of the most impactful documentation improvements you can make. Diagrams that live as code stay current, are version-controlled, and render beautifully without any extra tooling. Start with an architecture diagram in your main README, then expand to contribution guides, API docs, and database schemas.

## Mermaid in GitHub Actions

You can automate diagram validation in your CI pipeline using \`@mermaid-js/mermaid-cli\`:

```yaml
# .github/workflows/validate-diagrams.yml
name: Validate Mermaid Diagrams

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g @mermaid-js/mermaid-cli
      - name: Validate all Mermaid diagrams in docs
        run: |
          find docs -name '*.md' | while read f; do
            grep -A100 '```mermaid' "$f" | grep -B100 '```' | \
            grep -v '```' | mmdc -i /dev/stdin -o /dev/null && \
            echo "OK: $f" || echo "FAIL: $f"
          done
```

This catches broken Mermaid syntax before it's merged — especially useful when multiple contributors are adding or editing diagrams.

## Using Mermaid in GitHub Discussions and GitHub Pages

**GitHub Discussions** supports Mermaid in the same way as Issues and PRs — any mermaid code fence renders inline. Great for architecture discussions before opening a formal PR.

**GitHub Pages** with Jekyll supports Mermaid via the \`jekyll-mermaid\` gem, or you can inject the Mermaid.js script manually in your layout template.

```html
<!-- In _layouts/default.html -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({ startOnLoad: true, theme: 'neutral' });</script>
```

With this in place, any \`pre.mermaid\` block or mermaid code fence in your pages will render automatically.

## Conclusion

Mermaid in GitHub README files is one of the highest-leverage improvements you can make to your project's documentation. The diagrams render natively, stay version-controlled, and render beautifully without any extra tooling. Start with an architecture diagram in your main README, then expand to contribution guides, API docs, and database schemas.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : Start
    Processing --> Completed : Success
    Processing --> Failed : Error
    Failed --> Idle : Retry
    Completed --> [*]
```

Key elements:
- \`[*]\` — Start state (filled circle) or end state
- \`-->\` — Transition arrow
- Text after \`:\` is the trigger/event label
- State names are automatically rendered as rounded rectangles

## Defining States

### Simple States

```
stateDiagram-v2
    [*] --> Active
    Active --> Inactive : Deactivate
    Inactive --> Active : Activate
    Active --> [*] : Delete
```

### States with Descriptions

```
stateDiagram-v2
    state "Waiting for Payment" as WFP
    state "Order Confirmed" as OC
    state "Shipped to Customer" as STC

    [*] --> WFP
    WFP --> OC : Payment received
    OC --> STC : Dispatched
    STC --> [*] : Delivered
```

Use the \`state "description" as alias\` syntax for multi-word state names.

## Transitions

### Labeled Transitions

```
stateDiagram-v2
    Idle --> Running : start()
    Running --> Idle : stop()
    Running --> Running : process(item)
    Running --> Error : exception thrown
    Error --> Idle : reset()
```

### Self-Transitions

A state can transition to itself (like "Running → Running" above). This represents an event that's handled without changing state.

## Composite (Nested) States

Group related states inside a parent state:

```
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
```

This shows that Active has its own internal states. The system can be suspended from any Active sub-state and resume back.

### Deeply Nested States

```
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
```

## Practical Example: Order Lifecycle

```
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
```

## Choice (Decision) States

Show conditional branching:

```
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
```

## Fork and Join (Parallel States)

Show concurrent execution:

```
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
```

This models three activities happening in parallel after an order is placed, with all three needing to complete before the order is marked complete.

## Notes

Add context with notes:

```
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
```

## Practical Example: UI Component States

```
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
```

## Styling

Apply CSS-like styles:

```
stateDiagram-v2
    [*] --> Active
    Active --> Error
    Error --> Active

    classDef errorState fill:#ff6b6b,color:white,stroke:#c0392b
    classDef activeState fill:#51cf66,color:white,stroke:#2f9e44

    class Error errorState
    class Active activeState
```

## Direction

Control layout direction:

```
stateDiagram-v2
    direction LR
    [*] --> A --> B --> C --> [*]
```

Options: \`TB\` (top-bottom, default), \`LR\` (left-right), \`BT\`, \`RL\`.

## Best Practices

1. **Always include start and end states** (\`[*]\`) to clearly show entry and exit points.

2. **Name states as nouns or adjectives** — "Processing", "Active", "WaitingForApproval" — not verbs.

3. **Label transitions as events or actions** — "click submit", "payment received", "timeout" — verbs or events that trigger the change.

4. **Use composite states** to manage complexity. A 20-state flat diagram becomes readable when grouped into 3-4 composite states.

5. **Model error states explicitly.** Don't just show the happy path — document how the system handles failures and recovers.

6. **Use choice states** for conditional branching instead of multiple transitions from one state with the same trigger.

7. **Keep it focused.** One state diagram per concern. Don't try to model your entire application in a single diagram.

## Real-World Example: Authentication Session States

```
stateDiagram-v2
    [*] --> Anonymous

    Anonymous --> Authenticating : Login attempt
    Authenticating --> Authenticated : Credentials valid
    Authenticating --> Anonymous : Credentials invalid

    state Authenticated {
        [*] --> Active
        Active --> Idle : No activity (5 min)
        Idle --> Active : User interaction
        Idle --> SessionWarning : No activity (25 min)
        SessionWarning --> Active : User clicks "Stay logged in"
    }

    Authenticated --> TokenRefresh : Token expiring
    TokenRefresh --> Authenticated : Refresh successful
    TokenRefresh --> Anonymous : Refresh failed

    SessionWarning --> Anonymous : Timeout (30 min)
    Authenticated --> Anonymous : Logout
```

This diagram documents a complete session management system. Developers can see exactly when tokens refresh, when idle warnings appear, and what triggers a forced logout.

## State Diagrams for Documentation

State diagrams are particularly valuable in:

- **API documentation** — Show the lifecycle of resources (e.g., an order going from draft to delivered)
- **UI component libraries** — Document the states of interactive components (buttons, modals, form fields)
- **Workflow engines** — Map the possible states and transitions in business processes
- **Infrastructure docs** — Model deployment states, health check states, or circuit breaker patterns

Include state diagrams in your project's \`docs/\` folder and reference them from code comments. When a developer sees \`status = 'PENDING_REVIEW'\`, they can check the state diagram to understand what transitions are possible from that state.

## State Diagrams vs Flowcharts

A common question: when should you use a state diagram instead of a flowchart?

**State diagrams** focus on **what states exist** and **what causes transitions between them**. The emphasis is on the object/entity and its possible conditions.

**Flowcharts** focus on **the process** — a sequence of steps with decisions and branches. The emphasis is on the actions taken.

Rule of thumb: if you find yourself writing "if the order is in state X, then..." repeatedly, you need a state diagram. If you're writing "first do this, then do that," you need a flowchart.

## Conclusion

State diagrams are invaluable for documenting system behavior — especially for anything with a lifecycle (orders, sessions, UI states, workflows). Mermaid's text syntax makes them easy to create and maintain in your documentation. Start with the basic states and transitions, then add composite states and parallel execution as complexity grows.

## State Diagrams for UI Component Documentation

Frontend developers can use state diagrams to document interactive component behaviour:

```
stateDiagram-v2
    [*] --> Idle

    Idle --> Loading : submit()
    Loading --> Success : response OK
    Loading --> Error : response fail
    Loading --> Idle : cancel()

    Success --> Idle : reset()
    Error --> Loading : retry()
    Error --> Idle : dismiss()

    state Success {
        [*] --> Showing
        Showing --> Hidden : after 3s
    }
```

This documents a form component's full lifecycle — loading, success, error, retry — in a way that's useful for both developers implementing the component and designers reviewing its behaviour.

## State Diagrams for Infrastructure

Infrastructure engineers can use state diagrams for circuit breakers, health checks, and deployment states:

```
stateDiagram-v2
    [*] --> Closed

    Closed --> Open : failure threshold exceeded
    Open --> HalfOpen : timeout elapsed
    HalfOpen --> Closed : probe request succeeds
    HalfOpen --> Open : probe request fails

    note right of Closed : Normal operation\nAll requests pass through
    note right of Open : Circuit broken\nAll requests fail fast
    note right of HalfOpen : Testing recovery\nOne probe request allowed
```

A circuit breaker state diagram like this is essential documentation for on-call engineers who need to understand service behaviour during incidents.

## Conclusion

Mermaid state diagrams are a powerful tool for documenting lifecycle states, transitions, and conditional behaviour. The simple syntax makes them easy to create and maintain in your documentation. Start with the basic states and transitions, then add composite states and parallel execution as complexity grows.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
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
```

Key elements:
- **Entities** are defined with their name and attributes in curly braces
- **Attributes** have a type, name, and optional constraint (PK, FK, UK)
- **Relationships** use special notation for cardinality

## Attribute Syntax

Each attribute follows the pattern: \`type name constraint "comment"\`

```
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
```

### Supported Constraints

- **PK** — Primary Key
- **FK** — Foreign Key
- **UK** — Unique Key

## Relationship Cardinality

Mermaid uses a notation combining two symbols — one for each end:

```
erDiagram
    A ||--|| B : "one to one"
    C ||--o{ D : "one to many"
    E }o--o{ F : "many to many"
    G ||--o| H : "one to zero or one"
```

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

```
erDiagram
    %% One-to-many (most common)
    AUTHOR ||--o{ BOOK : writes

    %% Many-to-many (via junction table)
    STUDENT }o--o{ COURSE : enrolls_in

    %% One-to-one
    USER ||--|| PROFILE : has

    %% Optional relationship
    EMPLOYEE ||--o| PARKING_SPOT : assigned
```

## Practical Example: Blog Platform

```
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
```

## Practical Example: E-Commerce Database

```
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
```

## Practical Example: SaaS Multi-Tenant

```
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
```

## Tips for Data Modeling with Mermaid

### 1. Start with Entities

List your main entities first without attributes. Map out the relationships. Then add attributes.

### 2. Name Relationships Clearly

The label after the colon describes the relationship: \`CUSTOMER ||--o{ ORDER : places\`. Use active verbs: "places", "contains", "belongs_to", "writes".

### 3. Show Junction Tables

For many-to-many relationships, explicitly show the junction table:

```
erDiagram
    STUDENT }o--o{ COURSE : enrolls_in
```

Or with the junction table visible:

```
erDiagram
    STUDENT ||--o{ ENROLLMENT : has
    COURSE ||--o{ ENROLLMENT : has
    ENROLLMENT {
        int student_id FK
        int course_id FK
        date enrolled_at
        string grade
    }
```

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

```
erDiagram
    ORDER {
        string status "Enum: pending|processing|shipped|delivered|cancelled"
        decimal total "Computed: sum of line items + tax"
    }
```

## Common Mistakes

- **Missing foreign keys** — Every relationship line should have a corresponding FK attribute.
- **Wrong cardinality** — Think carefully: can a customer have zero orders? Then it's \`||--o{\` not \`||--|{\`.
- **Tables without relationships** — If an entity has no relationships, it might not belong in the diagram, or you're missing a connection.
- **Too many entities** — Focus on one bounded context. A diagram with 30+ tables is overwhelming.

## Practical Example: Event Sourcing Schema

For teams using event sourcing or CQRS patterns:

```
erDiagram
    EVENT_STORE {
        uuid id PK
        uuid aggregate_id FK
        string aggregate_type
        int version
        string event_type
        jsonb payload
        datetime created_at
    }
    AGGREGATE {
        uuid id PK
        string type
        int current_version
        datetime created_at
    }
    SNAPSHOT {
        uuid id PK
        uuid aggregate_id FK
        int version
        jsonb state
        datetime created_at
    }
    READ_MODEL_USER {
        uuid id PK
        string name
        string email
        string status
        datetime last_updated
    }

    AGGREGATE ||--o{ EVENT_STORE : has_events
    AGGREGATE ||--o{ SNAPSHOT : has_snapshots
    EVENT_STORE ..o{ READ_MODEL_USER : projects_to
```

## ER Diagrams in Your Development Workflow

Here's how to make ER diagrams a natural part of your development process:

1. **Create the ER diagram before writing migrations.** Sketch the schema in Mermaid, get team review, then implement.
2. **Keep the diagram in \`docs/database-schema.md\`.** Update it in the same PR that adds or modifies tables.
3. **Use comments in attributes** to document business rules that aren't visible in the schema structure.
4. **Generate from code when possible.** Some ORMs can export schema info that you can convert to Mermaid syntax.

## ER Diagrams vs Class Diagrams for Data Modeling

Both can represent data structures, but they serve different purposes:

- **ER diagrams** focus on **database tables, columns, and relationships**. They're closer to the physical implementation and include data types, primary keys, and foreign keys.
- **Class diagrams** focus on **domain objects and their behaviour**. They include methods, interfaces, and inheritance hierarchies.

For database documentation, ER diagrams are the right choice. For application architecture, use class diagrams. Many projects benefit from both.

## Conclusion

Mermaid ER diagrams are perfect for documenting database schemas in your project repository. They render on GitHub, stay version-controlled, and are easy to update when your schema evolves. Start with the core entities and relationships, then progressively add attributes and constraints as your model matures.

## Generating Mermaid ER Diagrams from Existing Schemas

If you already have a database, you don't need to write ER diagrams from scratch. Several tools can generate Mermaid ER syntax from your schema:

**PostgreSQL:** Use \`pg_mermaid\` or write a query against \`information_schema\` to extract tables and foreign keys, then format as Mermaid syntax.

**Prisma ORM:** The Prisma schema language maps closely to Mermaid ER syntax. Tools exist to convert \`.prisma\` files to Mermaid diagrams automatically.

**MySQL / MariaDB:** Export the schema and use scripts to convert \`CREATE TABLE\` statements to Mermaid ER format.

**SQLAlchemy (Python):** Generate ER diagrams from your SQLAlchemy models using the \`eralchemy\` library (which can output Mermaid format).

Automated generation ensures diagrams stay in sync with the actual database schema, not just the intended design.

## ER Diagrams in Database Migration Reviews

When proposing schema changes, include ER diagrams in your migration PR:

1. **Before diagram:** Show the current schema
2. **After diagram:** Show the proposed schema with changes highlighted in comments
3. **Migration notes:** Explain the data migration strategy for existing records

This makes database schema reviews much more productive. Reviewers can spot normalization issues, missing indexes, and incorrect cardinality before the migration runs.

## Conclusion

Mermaid ER diagrams transform database schema documentation from an afterthought into a living, version-controlled asset. They're easy to write, readable by anyone on the team, version-controlled, and easy to update when your schema evolves. Start with the core entities and relationships, then progressively add attributes and constraints as your model matures.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
pie title Technology Stack Distribution
    "JavaScript" : 45
    "Python" : 25
    "Go" : 15
    "Rust" : 10
    "Other" : 5
```

That's it. Three elements:
1. \`pie\` keyword (optionally followed by \`title Your Title\`)
2. Labels in double quotes
3. Values after the colon

Mermaid automatically calculates percentages and assigns colors.

## Practical Examples

### Project Language Breakdown

```
pie title Lines of Code by Language
    "TypeScript" : 42000
    "CSS/SCSS" : 15000
    "HTML" : 8000
    "Python (scripts)" : 3000
    "Shell" : 1500
```

### Sprint Task Distribution

```
pie title Sprint 14 Tasks by Category
    "Feature Development" : 12
    "Bug Fixes" : 8
    "Technical Debt" : 5
    "Documentation" : 3
    "DevOps" : 2
```

### Browser Market Share

```
pie title Browser Usage - Our App Analytics
    "Chrome" : 64
    "Safari" : 19
    "Firefox" : 8
    "Edge" : 6
    "Other" : 3
```

### Budget Allocation

```
pie title Engineering Budget Q1 2025
    "Personnel" : 65
    "Infrastructure (AWS)" : 18
    "Tools & Licenses" : 8
    "Training" : 5
    "Misc" : 4
```

### Test Coverage

```
pie title Test Suite Composition
    "Unit Tests" : 340
    "Integration Tests" : 85
    "E2E Tests" : 42
    "Performance Tests" : 15
```

### Error Distribution

```
pie title Production Errors Last 30 Days
    "4xx Client Errors" : 156
    "5xx Server Errors" : 23
    "Timeout Errors" : 45
    "Network Errors" : 12
```

## Display Options

### Show Data (Values)

By default, Mermaid shows percentages. You can add \`showData\` to display raw values:

```
pie showData
    title Response Time Buckets
    "< 100ms" : 450
    "100-500ms" : 230
    "500ms-1s" : 80
    "> 1s" : 40
```

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

```
pie title API Endpoints by Usage
    "GET /api/users" : 40
    "POST /api/auth" : 25
    "GET /api/products" : 20
    "Other (15 endpoints)" : 15
```

### 2. Order by Size

List items from largest to smallest for easier reading:

```
pie title Deploy Frequency by Service
    "API Gateway" : 45
    "User Service" : 25
    "Order Service" : 15
    "Notification Service" : 10
    "Analytics" : 5
```

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

```
pie showData
    title Incident Severity (Last Quarter)
    "Critical (P0)" : 3
    "High (P1)" : 12
    "Medium (P2)" : 45
    "Low (P3)" : 89
```

## Pie Charts in README Files

Pie charts work well in GitHub README files for quick project overviews:

```markdown
## Project Stats

```mermaid
pie title Codebase Composition
    "Application Code" : 60
    "Tests" : 25
    "Configuration" : 10
    "Documentation" : 5
```
```

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

## Real-World Example: Incident Analysis

Pie charts are excellent for incident postmortems and root cause analysis:

```
pie title Root Causes of Production Incidents (Q1 2025)
    "Configuration errors" : 12
    "Code bugs" : 8
    "Infrastructure failures" : 5
    "Third-party service outages" : 4
    "Capacity issues" : 3
```

This makes it immediately clear where to invest in prevention — configuration management improvements would have the biggest impact.

## Pie Charts for Team Retrospectives

During sprint retrospectives, use pie charts to visualise how time was spent:

```
pie title Sprint 12 — Time Allocation
    "Feature development" : 45
    "Bug fixes" : 20
    "Code review" : 15
    "Meetings" : 12
    "DevOps & infra" : 8
```

If meetings are eating 12% of sprint capacity, that's a conversation worth having. The visual makes it undeniable.

## Combining Pie Charts with Context

A pie chart alone doesn't tell the full story. Always pair it with:

1. **A title that includes the time period** — "Q1 2025" not just "Distribution"
2. **Source information** — Where did the data come from? Analytics? Manual count?
3. **Interpretation** — A sentence explaining what the chart means and what action to take
4. **Comparison** — If possible, show how the distribution changed from the previous period

For example:

```markdown
## Customer Support Tickets by Category

Based on 847 tickets received in March 2025:

```mermaid
pie showData
    title Support Tickets — March 2025
    "Billing questions" : 312
    "Login issues" : 198
    "Feature requests" : 156
    "Bug reports" : 112
    "Account deletion" : 69
```

**Insight:** Billing questions dominate (37%). Improving the billing FAQ page could reduce ticket volume by 20-30%.
```

## Pie Chart Accessibility

Pie charts are inherently visual, which creates accessibility challenges. To make your documentation inclusive:

- Always include a text summary below the chart
- List the actual numbers alongside the visual
- Use the \`showData\` flag so raw values appear on the chart itself
- Consider adding an equivalent table for screen reader users

## Conclusion

Mermaid pie charts are the simplest way to add data visualization to your text-based documentation. They're perfect for quick overviews and composition breakdowns — just a keyword, some labels, and values. Keep them simple, limit slices to 5-7, and use them where proportional comparison adds value to your docs.

## Pie Charts in Engineering Documentation

Some of the most impactful uses of pie charts in engineering docs:

### Test Coverage Distribution

```
pie showData title Test Coverage by Module
    "Core business logic" : 94
    "API handlers" : 87
    "Data access layer" : 72
    "Utilities" : 65
    "UI components" : 41
```

This immediately shows which areas need more test coverage investment.

### Error Rate by Category

```
pie showData title Production Errors (Last 30 Days)
    "Client errors (4xx)" : 1240
    "Server errors (5xx)" : 89
    "Timeout errors" : 34
    "Rate limit errors" : 28
```

### Bundle Size Distribution

```
pie showData title JavaScript Bundle Composition
    "React + ReactDOM" : 42
    "UI component library" : 28
    "Charting library" : 15
    "Form validation" : 8
    "App code" : 7
```

Seeing that third-party dependencies make up 93% of your bundle makes the case for code splitting or lighter alternatives much more visceral.

## Embedding Pie Charts Effectively

A standalone pie chart communicates very little without context. Always include:

- **A clear title** with the time period or data source
- **The total N** so readers know the sample size (e.g., "Based on 1,247 support tickets")
- **A one-line insight** below the chart explaining what action to take
- **A comparison** to the previous period if the trend matters

With context, a simple pie chart becomes a powerful communication tool that makes data-driven decisions easier.

## Conclusion

Mermaid pie charts are the fastest way to add proportional data visualisation to your documentation. They're ideal for sprint retrospectives, incident analysis, resource allocation reviews, and composition overviews — just a keyword, some labels, and values. Keep them simple, limit slices to 5-7, and use them where proportional comparison adds value to your docs.

[Try it now in our free Mermaid Live Editor →](/)
\`
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

```
graph TD   %% Top to Bottom
graph LR   %% Left to Right
graph BT   %% Bottom to Top
graph RL   %% Right to Left
```

Use \`flowchart\` instead of \`graph\` for extended features.

### Node Shapes

```
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
```

### Edge Types

```
flowchart LR
    A --> B           %% Arrow
    A --- B           %% Line
    A -.-> B          %% Dotted arrow
    A ==> B           %% Thick arrow
    A --o B           %% Circle end
    A --x B           %% Cross end
    A -->|label| B    %% Labeled arrow
    A -- "label" --- B %% Labeled line
```

### Subgraphs

```
flowchart TB
    subgraph Group Name
        A --> B
    end
    subgraph Another["Custom Title"]
        direction LR
        C --> D
    end
    Group Name --> Another
```

### Styling

```
flowchart TD
    A:::myClass --> B
    classDef myClass fill:#f9f,stroke:#333,color:black
    style B fill:#bbf,stroke:#33f
```

## Sequence Diagrams

### Basics

```
sequenceDiagram
    participant A as Alice
    actor U as User
    A->>B: Solid arrow (sync)
    B-->>A: Dotted arrow (response)
    A-)B: Open arrow (async)
    A-xB: Cross (lost message)
```

### Features

```
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
```

## Gantt Charts

```
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
```

### Task States
- \`done\` — completed
- \`active\` — in progress
- \`crit\` — critical path
- Combine: \`crit, done\` or \`crit, active\`

## Class Diagrams

### Classes

```
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
```

### Relationships

```
classDiagram
    A <|-- B    : Inheritance
    C *-- D     : Composition
    E o-- F     : Aggregation
    G --> H     : Association
    I ..> J     : Dependency
    K ..|> L    : Realization (implements)
    M "1" --> "*" N : Cardinality
```

### Annotations

```
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
```

### Generics

```
classDiagram
    class List~T~ {
        +add(item T) void
    }
```

## State Diagrams

```
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
```

## ER Diagrams

```
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
```

### Cardinality

- \`||\` — exactly one
- \`o|\` — zero or one
- \`}|\` — one or more
- \`}o\` — zero or more

### Relationship lines
- \`--\` — solid (identifying)
- \`..\` — dashed (non-identifying)

## Pie Charts

```
pie title Distribution
    "Category A" : 40
    "Category B" : 30
    "Category C" : 20
    "Other" : 10
```

Add \`showData\` after \`pie\` to show raw values.

## Mind Maps

```
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
```

## Git Graphs

```
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
```

## Timeline

```
timeline
    title History of Our Product
    2020 : Founded
         : MVP launched
    2021 : Series A funding
         : Reached 10k users
    2022 : Series B
         : International expansion
    2023 : 1M users milestone
```

## Quadrant Charts

```
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
```

## Global Configuration

### Theme

Set theme at the top of any diagram:

```
%%{init: {'theme': 'dark'}}%%
graph TD
    A --> B
```

Available themes: \`default\`, \`dark\`, \`forest\`, \`neutral\`, \`base\`.

### Custom Theme Variables

```
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#ff6b6b', 'edgeLabelBackground':'#ffffff'}}}%%
graph TD
    A --> B
```

## Tips

- Use \`%%\` for comments in any diagram
- Wrap special characters in quotes: \`A["Text with (parens)"]\`
- Use \`<br/>\` for line breaks in labels
- HTML entities work: \`#amp;\`, \`#lt;\`, \`#gt;\`
- Test diagrams in a live editor before committing

## Resources

- [Official Mermaid Documentation](https://mermaid.js.org)
- [Mermaid GitHub Repository](https://github.com/mermaid-js/mermaid)

## Quick Start Recipes

Here are complete, copy-paste examples for the most common use cases:

### Architecture Diagram (README-ready)

```
flowchart TB
    subgraph Client
        Web[Web App]
        Mobile[Mobile App]
    end
    subgraph Server
        API[API Gateway]
        Auth[Auth Service]
        Core[Core Service]
    end
    subgraph Data
        DB[(PostgreSQL)]
        Cache[(Redis)]
    end
    Web & Mobile --> API
    API --> Auth
    API --> Core
    Core --> DB & Cache
```

### API Request Flow

```
sequenceDiagram
    autonumber
    actor User
    participant App
    participant API
    participant DB

    User->>App: Click action
    App->>+API: POST /resource
    API->>+DB: INSERT
    DB-->>-API: OK
    API-->>-App: 201 Created
    App-->>User: Show success
```

### Database Schema

```
erDiagram
    USER ||--o{ POST : writes
    POST ||--o{ COMMENT : has
    USER ||--o{ COMMENT : writes
    USER {
        int id PK
        string email UK
        string name
        datetime created_at
    }
    POST {
        int id PK
        string title
        text content
        int author_id FK
    }
    COMMENT {
        int id PK
        text body
        int post_id FK
        int user_id FK
    }
```

### Sprint Timeline

```
gantt
    title Sprint Plan
    dateFormat YYYY-MM-DD
    excludes weekends

    section Dev
    Feature A    :a1, 2025-03-03, 5d
    Feature B    :a2, after a1, 3d
    section QA
    Testing      :b1, after a2, 3d
    Release      :milestone, after b1, 0d
```

## How to Use This Cheat Sheet

1. **Bookmark this page** — Come back whenever you need syntax reference
2. **Copy the recipe** that's closest to what you need
3. **Modify in a live editor** — Paste into [mermaideditor.lol](/) for instant preview
4. **Embed in your docs** — Copy the final version into your Markdown file

## Version Compatibility Notes

Mermaid.js is actively developed, with new features added regularly:

- **Flowcharts, Sequence, Gantt, Class** — Stable since v8+. Available everywhere.
- **State, ER, Pie** — Stable since v8.6+. Widely supported.
- **Mind Maps** — Added in v9.3. Some older renderers may not support them.
- **Timeline** — Added in v9.4. GitHub supports it; some tools may lag.
- **Quadrant Charts** — Added in v10.1. Newer, less universal support.

When targeting platforms like GitHub or Obsidian, stick to well-established diagram types for maximum compatibility. Test newer types in your target platform before committing to them in documentation.

## Platform Support Quick Reference

Not all Mermaid diagram types render everywhere. Here's a quick reference:

| Diagram Type | GitHub | GitLab | Notion | Obsidian | Docusaurus |
|---|---|---|---|---|---|
| Flowchart | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sequence | ✅ | ✅ | ✅ | ✅ | ✅ |
| Gantt | ✅ | ✅ | ✅ | ✅ | ✅ |
| Class | ✅ | ✅ | ✅ | ✅ | ✅ |
| State | ✅ | ✅ | ✅ | ✅ | ✅ |
| ER Diagram | ✅ | ✅ | ✅ | ✅ | ✅ |
| Pie Chart | ✅ | ✅ | ✅ | ✅ | ✅ |
| Mind Map | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Timeline | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Git Graph | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| Quadrant | ⚠️ | ⚠️ | ❌ | ✅ | ✅ |

✅ = Supported | ⚠️ = May require newer version | ❌ = Not supported

## Pro Tips for Power Users

**Combine multiple diagrams in one doc.** A comprehensive architecture document might include a flowchart for the system overview, a sequence diagram for the critical API flow, and an ER diagram for the data model — all in one Markdown file.

**Use the \`%%{init}%%\` directive for consistent theming.** Add it to every diagram in a document to ensure they all use the same visual style.

**Create diagram templates.** Keep a \`diagrams/templates/\` folder with skeleton diagrams for common patterns: microservice architecture, authentication flow, database schema, etc. Duplicate and customise rather than starting from scratch.

**Reference diagrams from code.** Add comments in your code like \`// See docs/diagrams/payment-flow.md\` to link implementation to documentation.

## Conclusion

This cheat sheet covers the core Mermaid syntax you'll reach for day to day. Bookmark it, combine it with a live editor for fast iteration, and refer back whenever you need a quick syntax reminder. Stick to well-established diagram types for maximum platform compatibility, and test newer types in your target platform before committing them to documentation.

[Try all these diagrams in our free Mermaid Live Editor →](/)
\`
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

```
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
```

The rules are simple:
1. Start with \`mindmap\`
2. The first indented item is the root node
3. Deeper indentation creates child branches
4. Siblings share the same indentation level

## Node Shapes

Mind map nodes support different shapes:

```
mindmap
    root((Circle Root))
        (Rounded Rectangle)
            [Square]
                Default shape
        ))Bang((
            {{Hexagon}}
```

### Shape Reference

- **Default** — Just text, no brackets (rectangle with rounded corners)
- **\`[Square]\`** — Square/rectangle
- **\`(Rounded)\`** — Rounded rectangle
- **\`((Circle))\`** — Circle
- **\`))Bang((\`** — Explosion/bang shape
- **\`{{Hexagon}}\`** — Hexagon

## Practical Example: Software Architecture

```
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
```

## Practical Example: Learning Path

```
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
```

## Practical Example: Product Feature Map

```
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
```

## Practical Example: Content Strategy

```
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
```

## Practical Example: Sprint Retrospective

```
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
```

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

```markdown
## Feature Overview

```mermaid
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
```
```

## Limitations

- **No custom colors** — Mermaid assigns colors automatically by branch
- **No icons** — Unlike GUI mind map tools, you can't add icons to nodes
- **Limited layout control** — The auto-layout engine decides positioning
- **No folding/expanding** — All branches are always visible
- **Relatively new** — Mind maps were added in Mermaid v9.3, so older platforms may not support them

For complex, interactive mind maps with custom styling, consider dedicated tools like XMind, MindMeister, or Coggle. Mermaid mind maps are best for **documentation** — quick, text-based, and version-controlled.

## Real-World Example: Technology Decision Map

Use mind maps to document technology decisions and their rationale:

```
mindmap
    root((Tech Stack Decisions))
        Frontend
            React
                Strong ecosystem
                Team familiarity
            TypeScript
                Type safety
                Better IDE support
            Tailwind CSS
                Utility-first
                Fast prototyping
        Backend
            Node.js
                JavaScript throughout
                Fast I/O
            PostgreSQL
                ACID compliance
                JSON support
            Redis
                Session cache
                Rate limiting
        Infrastructure
            AWS
                Team experience
                Service breadth
            Docker
                Consistent environments
                CI/CD integration
            GitHub Actions
                Free for open-source
                Native GitHub integration
```

This captures not just what technologies were chosen, but why — invaluable context for future team members.

## Mind Maps for Meeting Facilitation

Before a brainstorming meeting, create a skeleton mind map with the topics to discuss. During the meeting, fill in the branches in real-time. After the meeting, commit the final mind map to your repo:

```
mindmap
    root((Feature Priorities Q2))
        Must Have
            User authentication
            Payment integration
            Email notifications
        Should Have
            Dashboard analytics
            Team collaboration
            Export functionality
        Nice to Have
            Dark mode
            Mobile app
            API marketplace
        Won't Do This Quarter
            AI recommendations
            Marketplace features
```

This MoSCoW prioritisation mind map gives everyone a shared visual of what's in and out of scope.

## Generating Mind Maps from Existing Content

A practical workflow: take an existing document outline and convert it to a mind map. For example, if you have a technical spec with sections, turn the heading hierarchy into a mind map for a quick visual overview at the top of the document.

This works especially well for:
- Long README files with many sections
- Technical specifications
- Product requirements documents
- Course curricula or learning paths

## Conclusion

Mermaid mind maps let you create visual hierarchies with nothing but indented text. They're perfect for brainstorming, planning, and documentation where you need a quick overview of how topics relate. Start with the central concept, branch out 3-4 levels, and keep labels concise.

## Keyboard-Friendly Mind Map Workflow

The best way to build a Mermaid mind map is iteratively:

1. **Start with the root** — just \`mindmap\n    root((Topic))\`
2. **Add first-level branches** — four or five main categories
3. **Fill in leaf nodes** — specific items, technologies, or concepts
4. **Add icons and styles** — enhance the most important branches
5. **Review and trim** — remove anything that doesn't add value

This bottom-up approach produces cleaner mind maps than trying to plan the full hierarchy upfront.

## Mind Maps vs Outlines vs Flowcharts

Knowing which format to choose is half the battle:

| Format | Best for | Weakness |
|---|---|---|
| Mind Map | Hierarchical topics, brainstorming | No process flow |
| Numbered list | Sequential steps | No visual hierarchy |
| Flowchart | Processes with decisions | Not great for categorization |
| Table | Comparisons | No nesting |

Mind maps shine when you have a central concept with naturally branching sub-topics. If you find yourself adding arrows between branches to show flow, switch to a flowchart.

## Using Mind Maps in Documentation

The highest-value uses of mind maps in developer documentation:

- **Project README overview** — Show all the major features/modules at a glance
- **Architecture decision summary** — Map the factors considered in a key decision
- **Learning roadmap** — Show what skills or concepts to learn, in what order
- **API surface map** — Group endpoints by resource type visually
- **Release notes overview** — Categorise changes (features, fixes, breaking changes) in a mind map at the top of the changelog

## Conclusion

Mermaid mind maps are a lightweight but powerful tool for visualising hierarchical information. They're perfect for brainstorming, planning, and documentation where you need a quick overview of how topics relate. Start with the central concept, branch out 3-4 levels, and keep labels concise.

## Mind Maps as Living Documentation

The best mind maps are ones that evolve with your project. A few practices that keep them useful:

- **Update the mind map when the system changes.** If a new module is added, add it to the feature map mind map in the same PR.
- **Date-stamp major revisions.** Add a note to the page title: "Feature Map (updated March 2025)" so readers know how current it is.
- **Link to detailed docs.** Mind maps are overviews. Add notes pointing to deeper documentation: \`For details → See API Reference\`.
- **Use in team meetings.** Share the mind map on screen during sprint planning or architecture reviews to keep discussion focused.

## Conclusion

Mermaid mind maps bring hierarchy and visual structure to documentation without requiring a separate tool or file format. They're perfect for brainstorming, planning, and getting a quick overview of how topics relate to each other. Start with the central concept, branch out 3-4 levels, and keep node labels concise for the cleanest results.

[Try it now in our free Mermaid Live Editor →](/)
\`
  },
  {
    slug: "mermaid-in-obsidian",
    title: "How to Use Mermaid Diagrams in Obsidian",
    description: "Complete guide to creating and using Mermaid diagrams in Obsidian. Learn how to enable Mermaid, create diagrams, customize rendering, and publish compatibility.",
    date: "2025-12-30",
    keywords: ["mermaid obsidian", "obsidian diagrams", "mermaid in obsidian", "obsidian mermaid plugin", "obsidian flowchart"],
    content: `
## Introduction

Obsidian is one of the most popular knowledge management tools, and one of its best features is **native Mermaid.js support**. You don't need any plugins — Mermaid diagrams render directly in your notes out of the box.

This makes Obsidian an incredibly powerful tool for developers and knowledge workers who want to combine written notes with visual diagrams. In this guide, you'll learn everything about using Mermaid in Obsidian, from basic setup to advanced tips.

## Enabling Mermaid in Obsidian

Great news: **there's nothing to enable**. Obsidian supports Mermaid natively since version 0.15. Simply create a code block with the \`mermaid\` language identifier, and Obsidian will render it automatically in Reading View and Live Preview.

If you're on an older version of Obsidian, update to the latest version to get Mermaid support. The latest versions of Obsidian typically ship with a recent version of Mermaid.js, giving you access to most diagram types.

## Creating Your First Diagram

In any Obsidian note, type:

```mermaid
graph TD
    A[Idea] --> B[Research]
    B --> C[Draft]
    C --> D[Review]
    D --> E[Publish]
```

Switch to **Reading View** (or use **Live Preview**) and you'll see the diagram rendered inline with your notes. It's that simple.

## Supported Diagram Types

Obsidian supports all major Mermaid diagram types:

- **Flowcharts** — Process flows, decision trees
- **Sequence Diagrams** — API calls, interactions
- **Gantt Charts** — Project timelines
- **Class Diagrams** — UML modeling
- **State Diagrams** — State machines, workflows
- **ER Diagrams** — Database schemas
- **Pie Charts** — Data distribution
- **Mind Maps** — Brainstorming, topic hierarchies
- **Git Graphs** — Branch visualization
- **Timeline** — Historical events, roadmaps

The exact feature support depends on which version of Mermaid is bundled with your Obsidian version.

## Practical Examples for Obsidian Notes

### Project Planning Note

Combine text and diagrams in a single note:

```markdown
# Project Alpha — Planning

## Overview
Project Alpha aims to rebuild our authentication system with OAuth 2.0 support.

## Architecture
```mermaid
graph TB
    subgraph Frontend
        React[React App] --> AuthSDK[Auth SDK]
    end
    subgraph Backend
        API[API Server] --> AuthService[Auth Service]
        AuthService --> UserDB[(User DB)]
        AuthService --> Redis[(Session Store)]
    end
    AuthSDK --> API
```

## Timeline
```mermaid
gantt
    title Project Alpha Timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Research & Design :a1, 2025-01-06, 10d
    section Phase 2
    Implementation :a2, after a1, 20d
    section Phase 3
    Testing & Launch :a3, after a2, 10d
```
```

### Daily Notes with Diagrams

Add quick process diagrams to your daily notes:

```mermaid
sequenceDiagram
    participant Me
    participant PM
    participant Design

    Me->>PM: Proposed API changes
    PM->>Design: Request UI review
    Design-->>PM: Approved with changes
    PM-->>Me: Go ahead with modifications
```

### Knowledge Base Entries

Document systems with ER diagrams:

```mermaid
erDiagram
    NOTE ||--o{ TAG : has
    NOTE ||--o{ LINK : links_to
    NOTE {
        string title
        text content
        date created
        date modified
    }
    TAG {
        string name
    }
    LINK {
        string source_id
        string target_id
    }
```

## Tips for Mermaid in Obsidian

### 1. Use Live Preview

Obsidian's Live Preview mode renders Mermaid diagrams inline as you type. This gives you instant feedback without switching between edit and reading modes.

### 2. Keep Diagrams Small

Large Mermaid diagrams can slow down Obsidian's rendering, especially with many notes open. Aim for diagrams with fewer than 20-30 nodes. If you need a complex diagram, consider putting it in its own note and linking to it.

### 3. Use Obsidian Linking with Diagrams

While you can't make diagram nodes clickable links in Obsidian, you can place diagrams alongside \`[[wiki links]]\` to create a powerful combination of visual and textual navigation.

### 4. Theming

Obsidian applies its own CSS theme to Mermaid diagrams. If you're using a dark theme, diagrams will automatically adjust. However, if you use explicit colors in your Mermaid code (via \`classDef\` or \`style\`), make sure they work with both light and dark themes.

You can also use Mermaid's built-in theming:

```mermaid
%%{init: {'theme': 'dark'}}%%
graph TD
    A --> B --> C
```

### 5. CSS Snippets for Custom Styling

Obsidian allows CSS snippets that can style Mermaid diagrams. Create a CSS file in your vault's \`.obsidian/snippets/\` folder:

```css
.mermaid svg {
    max-width: 100%;
    font-family: var(--font-text);
}
.mermaid .node rect {
    rx: 8px;
    ry: 8px;
}
```

### 6. Templates

Create Obsidian templates with pre-built Mermaid diagrams. For example, a "Meeting Notes" template could include:

```markdown
# Meeting: {{title}}
Date: {{date}}

## Action Items
```mermaid
graph LR
    A[Action 1] --> B[Owner: TBD]
    C[Action 2] --> D[Owner: TBD]
```
```

## Obsidian Publish Compatibility

If you use **Obsidian Publish** to share your notes as a website, Mermaid diagrams **are fully supported**. They render on published pages just as they do in the app.

This makes it easy to create documentation sites with embedded diagrams — no extra build steps or plugins needed. Your readers see the same rendered diagrams you see in your vault.

### Tips for Published Diagrams

- Test your diagrams in Reading View before publishing — what you see is what your readers get.
- Keep diagram complexity reasonable for mobile readers.
- Use descriptive text alongside diagrams since some readers may have rendering issues on older browsers.

## Community Plugins

While native Mermaid support is sufficient for most use cases, there are community plugins that extend the experience:

- **Mermaid Tools** — Adds a toolbar for inserting Mermaid templates.
- **Obsidian Enhancing Export** — Exports notes with rendered Mermaid diagrams to PDF.
- **Diagrams** — Provides an alternative rendering engine with additional options.

Search for these in Obsidian's community plugin browser (Settings → Community Plugins → Browse).

## Common Issues

### Diagram Not Rendering

- Make sure you're using \`\`\`mermaid\`\`\` (lowercase) as the code fence language.
- Switch to Reading View or Live Preview — Source mode shows raw code.
- Check for syntax errors in your Mermaid code.

### Diagram Looks Different Than Expected

- Obsidian may use a slightly different version of Mermaid than the latest release. Some newer features might not work.
- Your theme's CSS might affect colors and fonts. Try switching to a default theme to test.

### Performance Issues

- Large diagrams (30+ nodes) can slow down rendering.
- Many diagrams on a single page can cause lag. Consider splitting into linked notes.

## Best Practices

1. **One diagram per concept.** Don't try to show everything in one diagram.
2. **Label your diagrams.** Add a heading above each diagram explaining what it shows.
3. **Use consistent notation.** Pick a direction (TD or LR) and stick with it in your vault.
4. **Keep the source readable.** Even in code blocks, format your Mermaid code neatly with proper indentation.
5. **Version your vault.** Since Mermaid diagrams are plain text, they work perfectly with Git for version control.

## Conclusion

Obsidian's native Mermaid support makes it one of the best environments for combining structured notes with visual diagrams. Whether you're documenting architectures, planning projects, or building a knowledge base, Mermaid diagrams add a powerful visual dimension to your notes — all without leaving your text editor.

## Advanced Obsidian + Mermaid Workflows

### Linking Diagrams to Notes

In Obsidian, you can create a diagram in one note and reference it from others using wiki links. For example, keep a \`System Architecture.md\` note with your main architecture diagram, then link to it from every component-specific note:

```markdown
## Payment Service

See [[System Architecture]] for the full system context.

This service handles:
- Stripe payment processing
- Refund workflows
- Subscription billing
```

### Dataview + Mermaid Combination

Obsidian's Dataview plugin can query your vault. Combine Dataview's data extraction with Mermaid visualisation by using Dataview to collect information and then manually (or via Templater) generating Mermaid diagrams from that data.

### Templater for Diagram Templates

With the Templater plugin, create templates that pre-populate common diagram skeletons:

```
---
tags: architecture
created: <% tp.date.now() %>
---

# <% tp.file.title %>

## Architecture Overview

```mermaid
graph TD
    %% Add components here
```

## Sequence Flow

```mermaid
sequenceDiagram
    participant A
    participant B
    A->>B: 
```
```

This gives you a consistent starting point for every new architecture note.

## Mermaid for Personal Knowledge Management

Beyond technical documentation, Mermaid in Obsidian is useful for:

- **Decision trees** for personal choices (career decisions, technology evaluations)
- **Learning maps** showing how concepts in a subject area connect
- **Project planning** with Gantt charts embedded in project notes
- **Reading notes** with mind maps summarising a book's key arguments
- **Weekly reviews** with state diagrams showing project progress

## Performance Tips for Large Vaults

If you have many Mermaid diagrams in a large vault:

- Use **Reading View** rather than Live Preview for faster rendering
- Keep complex diagrams in dedicated notes rather than embedding in MOCs (Maps of Content)
- Consider the **Lazy Loading** setting if available in your Mermaid plugin version

## Conclusion

Mermaid.js transforms Obsidian from a text-only knowledge base into a rich visual thinking environment. Whether you're documenting architectures, planning projects, or building a knowledge base, Mermaid diagrams add a powerful visual dimension to your notes — all without leaving your text editor.

[Try creating Mermaid diagrams in our free online editor →](/)
\`
  },
  {
    slug: "mermaid-in-notion",
    title: "Creating Mermaid Diagrams in Notion",
    description: "How to create and use Mermaid diagrams in Notion. Learn the code block method, understand limitations, and discover workarounds for the best diagramming experience.",
    date: "2026-01-10",
    keywords: ["mermaid notion", "notion diagrams", "mermaid in notion", "notion flowchart", "notion sequence diagram"],
    content: `
## Introduction

Notion has become one of the most popular workspace tools for teams and individuals. While it doesn't have native Mermaid rendering like GitHub or Obsidian, there are effective ways to create and display Mermaid diagrams in Notion. This guide covers the available methods, their limitations, and the best workarounds.

## Does Notion Support Mermaid Natively?

As of early 2026, Notion has **added native Mermaid support** through its code block feature. You can create a code block, select "Mermaid" as the language, and Notion will render the diagram inline.

Here's how to add a Mermaid diagram in Notion:

1. Type \`/code\` in any Notion page to insert a code block.
2. Click the language selector in the top-right of the code block.
3. Search for and select **"Mermaid"**.
4. Paste or type your Mermaid code.
5. The diagram renders automatically below the code.

### Example

Paste this into a Mermaid code block in Notion:

```mermaid
graph TD
    A[Task Created] --> B{Assigned?}
    B -->|Yes| C[In Progress]
    B -->|No| D[Backlog]
    C --> E{Done?}
    E -->|Yes| F[Complete]
    E -->|No| C
```

You should see a rendered flowchart directly in your Notion page.

## Supported Diagram Types in Notion

Notion's Mermaid integration supports the most common diagram types:

- **Flowcharts** (\`graph\` / \`flowchart\`)
- **Sequence Diagrams** (\`sequenceDiagram\`)
- **Gantt Charts** (\`gantt\`)
- **Class Diagrams** (\`classDiagram\`)
- **State Diagrams** (\`stateDiagram-v2\`)
- **ER Diagrams** (\`erDiagram\`)
- **Pie Charts** (\`pie\`)

Mind maps, git graphs, and some newer diagram types may have limited support depending on the Mermaid version Notion uses.

## Practical Use Cases in Notion

### Team Wiki — Architecture Docs

Create a page in your team wiki with architecture diagrams:

```mermaid
graph TB
    subgraph "Client Layer"
        Web[Web App]
        Mobile[Mobile App]
    end
    subgraph "API Layer"
        Gateway[API Gateway]
        Auth[Auth Service]
    end
    subgraph "Data Layer"
        DB[(PostgreSQL)]
        Cache[(Redis)]
    end
    Web & Mobile --> Gateway
    Gateway --> Auth
    Gateway --> DB
    Gateway --> Cache
```

### Sprint Planning

Add a Gantt chart to your sprint page:

```mermaid
gantt
    title Sprint 16 — March 3-14
    dateFormat YYYY-MM-DD
    excludes weekends

    section Frontend
    Search feature     :f1, 2026-03-03, 3d
    Filter UI          :f2, after f1, 2d

    section Backend
    Search API         :b1, 2026-03-03, 4d
    Indexing           :b2, after b1, 2d

    section QA
    Testing            :q1, after f2 b2, 2d
    Release            :milestone, m1, after q1, 0d
```

### Meeting Notes

Document decisions with sequence diagrams:

```mermaid
sequenceDiagram
    participant PM as Product Manager
    participant Dev as Dev Lead
    participant Design as Designer

    PM->>Dev: Propose feature X
    Dev->>PM: Estimate: 2 sprints
    PM->>Design: Request mockups
    Design-->>PM: Mockups ready
    PM->>Dev: Approved — start Sprint 17
```

### Database Documentation

Use ER diagrams to document your data model:

```mermaid
erDiagram
    WORKSPACE ||--o{ PROJECT : contains
    PROJECT ||--o{ PAGE : has
    PAGE ||--o{ BLOCK : contains
    WORKSPACE ||--o{ MEMBER : has
    MEMBER {
        string id PK
        string name
        string email
        string role
    }
    PAGE {
        string id PK
        string title
        string content
        datetime updated
    }
```

## Limitations of Mermaid in Notion

### 1. Version Lag

Notion may not run the latest version of Mermaid.js. This means some newer features or diagram types might not be available. If a diagram works in an online editor but not in Notion, this is likely the reason.

### 2. Limited Styling

Custom CSS styling through \`classDef\` and \`style\` directives may not render exactly as expected. Notion applies its own styling layer, which can affect colors, fonts, and spacing.

### 3. No Click Interaction

Mermaid diagrams in Notion are static images — you can't click on nodes or add links within the diagram. For interactive diagrams, you'll need a dedicated tool.

### 4. Dark Mode Compatibility

If you or your team uses Notion in dark mode, some Mermaid color schemes may not look great. Test your diagrams in both modes if your team uses both. Using Mermaid's built-in theme configuration can help:

```mermaid
%%{init: {'theme': 'neutral'}}%%
graph TD
    A --> B --> C
```

The \`neutral\` theme tends to work well in both light and dark modes.

### 5. Export Limitations

When exporting Notion pages to PDF or Markdown, Mermaid diagrams may export as code blocks rather than rendered images. Keep this in mind if you need to share pages outside of Notion.

## Workarounds for Better Diagrams

### Method 1: External Editor + Image Embed

For complex diagrams or when you need precise control:

1. Create your diagram in an online Mermaid editor.
2. Export as SVG or PNG.
3. Upload the image to your Notion page.
4. Keep the Mermaid source code in a collapsed toggle block for future editing.

This gives you the best visual quality and full Mermaid feature support.

### Method 2: Embed with URL

Use an embeddable Mermaid viewer:

1. Encode your diagram.
2. Create a URL with the encoded diagram.
3. Use Notion's /embed block to embed the URL.

This approach keeps the diagram live and editable through the URL.

### Method 3: Use Notion API + Mermaid

For teams that want automated diagrams, you can use the Notion API to programmatically insert and update Mermaid code blocks. This is useful for:

- Auto-generating architecture diagrams from code
- Updating project timelines from your PM tool
- Syncing database schemas with documentation

## Tips for Mermaid in Notion

1. **Keep diagrams simple.** Notion's rendering area is narrower than a full browser window. Stick to 10-15 nodes max.

2. **Use \`graph LR\`** (left-to-right) for wider diagrams that fit Notion's column layout better than top-to-bottom.

3. **Add context with text.** Always include a text description above or below the diagram explaining what it shows.

4. **Use toggle blocks.** Put complex diagrams inside Notion toggle blocks (callouts) so they don't dominate the page.

5. **Test in both themes.** If your team uses both light and dark mode, check that your diagrams look acceptable in both.

6. **Use the \`neutral\` theme.** It provides the best compatibility across Notion's light and dark modes.

7. **Keep source code accessible.** If you embed an image instead of using a code block, store the source Mermaid code in a toggle block nearby so anyone can update it.

## Notion vs. Other Platforms for Mermaid

| Platform | Native Support | Quality | Collaboration |
|---|---|---|---|
| **Notion** | Yes (code block) | Good | Excellent |
| **GitHub** | Yes (Markdown) | Excellent | Good (via PRs) |
| **Obsidian** | Yes (native) | Excellent | Limited |
| **Confluence** | Plugin required | Good | Excellent |
| **Google Docs** | No (image only) | N/A | Excellent |

Notion strikes a good balance between diagram support and collaboration features. While its Mermaid rendering may not be as polished as GitHub's, the collaborative editing and rich surrounding content make it a strong choice for team documentation.

## Conclusion

Mermaid diagrams in Notion are a practical way to add visual documentation to your workspace. While there are some limitations compared to dedicated diagramming tools, the convenience of having diagrams alongside your team's notes, wikis, and project management makes it worthwhile. Start with simple flowcharts and sequence diagrams, and use the workarounds for more complex visualization needs.

## Practical Notion + Mermaid Workflows

### Project Documentation Pages

Create a Notion page structure like this for each major project:

```
📁 Project: Payment Gateway Integration
  📄 Overview (with system architecture diagram)
  📄 API Flow (with sequence diagram)
  📄 Database Schema (with ER diagram)
  📄 Timeline (with Gantt chart)
  📄 State Machine (payment states diagram)
```

Each page has a focused Mermaid diagram plus surrounding context, making it easy to navigate and update.

### Engineering Wiki with Diagrams

For engineering teams using Notion as their wiki, establish conventions:

1. Every architecture page must have a system diagram in the first section
2. Every API guide must have a sequence diagram for the main flow
3. Every database table doc must reference the ER diagram
4. Diagrams are updated in the same session as the system changes they describe

Consistency matters more than perfection — a slightly outdated diagram is still better than no diagram.

### Automating Notion Diagram Updates

For teams with programmatically generated diagrams, the Notion API can update page blocks automatically:

```javascript
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function updateMermaidDiagram(pageId, blockId, mermaidCode) {
  await notion.blocks.update({
    block_id: blockId,
    code: {
      rich_text: [{ text: { content: mermaidCode } }],
      language: 'mermaid',
    },
  });
}
```

This lets you generate fresh architecture diagrams from your actual infrastructure and push them to Notion automatically.

## Notion Mermaid vs Whimsical vs FigJam

| Feature | Notion Mermaid | Whimsical | FigJam |
|---|---|---|---|
| Text-based | ✅ | ❌ | ❌ |
| Real-time collab | ⚠️ | ✅ | ✅ |
| Freehand drawing | ❌ | ✅ | ✅ |
| Version control | Via Notion history | No | No |
| Cost | Included in Notion | Separate subscription | Separate subscription |
| Learning curve | Low (for devs) | Very low | Very low |

Notion Mermaid is the best choice when: the audience lives in Notion, diagrams need to stay close to documentation, and the team includes developers comfortable with text syntax.

## Conclusion

Mermaid in Notion brings the power of diagrams-as-code to the most popular team documentation platform. While Notion's native Mermaid support handles most use cases elegantly, the workarounds for complex visualisation are straightforward. Start with simple flowcharts and sequence diagrams, and expand as your team's Mermaid fluency grows.

[Create and test your Mermaid diagrams in our free online editor →](/)
\`
  },
  {
    slug: "mermaid-in-docusaurus",
    title: "Adding Mermaid Diagrams to Docusaurus Documentation",
    description: "Complete guide to integrating Mermaid.js diagrams in Docusaurus. Learn plugin setup, MDX usage, theming, configuration, and practical examples for documentation sites.",
    date: "2026-01-18",
    keywords: ["mermaid docusaurus", "docusaurus diagrams", "mermaid plugin docusaurus", "docusaurus mermaid setup", "documentation diagrams"],
    content: `
## Introduction

Docusaurus is a popular documentation framework built by Meta, used by many open-source projects and companies. Adding Mermaid diagrams to your Docusaurus site enhances documentation with visual architecture overviews, API flows, and system diagrams — all maintained as code.

This guide covers the complete setup process, from installing the plugin to advanced theming and practical examples.

## Setting Up the Mermaid Plugin

Docusaurus has an official Mermaid theme package that integrates seamlessly with its MDX-based content system.

### Step 1: Install the Package

```bash
npm install @docusaurus/theme-mermaid
```

Or if you're using yarn:

```bash
yarn add @docusaurus/theme-mermaid
```

### Step 2: Configure docusaurus.config.js

Add the Mermaid theme to your configuration:

```javascript
// docusaurus.config.js
module.exports = {
  // Enable Mermaid markdown support
  markdown: {
    mermaid: true,
  },
  // Add the Mermaid theme
  themes: ['@docusaurus/theme-mermaid'],
  // Optional: configure Mermaid
  themeConfig: {
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'dark',
      },
      options: {
        maxTextSize: 50000,
      },
    },
  },
};
```

### Step 3: Restart Your Dev Server

```bash
npm run start
```

That's it! Mermaid diagrams will now render in your documentation.

## Using Mermaid in MDX Files

Once configured, use Mermaid in any \`.md\` or \`.mdx\` file with standard code fences:

```markdown
## System Architecture

```mermaid
graph TB
    Client --> API
    API --> Database
    API --> Cache
```
```

The diagram renders automatically in both development and production builds.

### In MDX Components

You can also use Mermaid inside MDX components:

```jsx
import Mermaid from '@theme/Mermaid';

export const ArchitectureDiagram = () => (
  <Mermaid
    value={\`
      graph TD
        A[Frontend] --> B[API Gateway]
        B --> C[Service A]
        B --> D[Service B]
    \`}
  />
);
```

## Practical Examples for Documentation

### API Reference with Sequence Diagrams

In your API documentation, show request flows:

```mermaid
sequenceDiagram
    participant Client
    participant Gateway as API Gateway
    participant Auth as Auth Service
    participant API as Core API
    participant DB as Database

    Client->>Gateway: POST /api/v1/users
    Gateway->>Auth: Validate API key
    Auth-->>Gateway: Valid
    Gateway->>API: Forward request
    API->>DB: INSERT user
    DB-->>API: Created
    API-->>Gateway: 201 Created
    Gateway-->>Client: 201 + User object
```

### Architecture Overview

For your project's landing documentation page:

```mermaid
graph TB
    subgraph "Client Applications"
        Web[Web Dashboard]
        CLI[CLI Tool]
        SDK[SDKs]
    end
    subgraph "API Layer"
        Gateway[API Gateway]
        RateLimit[Rate Limiter]
    end
    subgraph "Services"
        UserSvc[User Service]
        DataSvc[Data Service]
        NotifSvc[Notification Service]
    end
    subgraph "Data Stores"
        PG[(PostgreSQL)]
        Redis[(Redis)]
        S3[(S3 Storage)]
    end

    Web & CLI & SDK --> Gateway
    Gateway --> RateLimit
    RateLimit --> UserSvc & DataSvc & NotifSvc
    UserSvc --> PG
    DataSvc --> PG & S3
    NotifSvc --> Redis
```

### Database Schema Documentation

Document your data model in the schema reference section:

```mermaid
erDiagram
    ORGANIZATION ||--o{ TEAM : has
    TEAM ||--o{ USER : contains
    USER ||--o{ API_KEY : owns
    USER ||--o{ PROJECT : creates
    PROJECT ||--o{ RESOURCE : manages

    ORGANIZATION {
        uuid id PK
        string name
        string plan
        datetime created_at
    }
    USER {
        uuid id PK
        string email UK
        string role
        uuid org_id FK
    }
    API_KEY {
        uuid id PK
        string key_hash UK
        string name
        datetime expires_at
        uuid user_id FK
    }
```

### Plugin Architecture

Document your plugin or extension system:

```mermaid
classDiagram
    class PluginManager {
        +register(plugin) void
        +unregister(name) void
        +getPlugin(name) Plugin
        +executeHook(hook, data) any
    }
    class Plugin {
        <<interface>>
        +name: string
        +version: string
        +initialize() void
        +destroy() void
    }
    class AuthPlugin {
        +name: "auth"
        +initialize() void
        +validateToken(token) bool
    }
    class LoggingPlugin {
        +name: "logging"
        +initialize() void
        +log(level, message) void
    }

    PluginManager "1" --> "*" Plugin : manages
    Plugin <|.. AuthPlugin
    Plugin <|.. LoggingPlugin
```

## Theming Mermaid Diagrams

### Matching Docusaurus Themes

Docusaurus supports light and dark modes, and the Mermaid plugin can automatically switch themes:

```javascript
themeConfig: {
  mermaid: {
    theme: {
      light: 'neutral',
      dark: 'dark',
    },
  },
},
```

Available Mermaid themes:
- **default** — Blue and gray palette
- **neutral** — Monochrome, professional (recommended for docs)
- **dark** — Dark background (for dark mode)
- **forest** — Green palette
- **base** — Minimal, customizable with CSS variables

### Custom Theme Variables

For brand-aligned diagrams:

```javascript
themeConfig: {
  mermaid: {
    theme: {
      light: 'base',
      dark: 'dark',
    },
    options: {
      themeVariables: {
        primaryColor: '#4f46e5',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#3730a3',
        lineColor: '#6366f1',
        secondaryColor: '#e0e7ff',
        tertiaryColor: '#f5f3ff',
      },
    },
  },
},
```

### Per-Diagram Themes

Override the global theme for specific diagrams:

```mermaid
%%{init: {'theme': 'forest'}}%%
graph TD
    A[This diagram] --> B[uses forest theme]
    B --> C[regardless of global config]
```

## Advanced Configuration

### Custom Fonts

Match your documentation's font:

```javascript
mermaid: {
  options: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 14,
  },
},
```

### Security Configuration

For documentation sites that accept user-contributed content:

```javascript
mermaid: {
  options: {
    securityLevel: 'strict',
    maxTextSize: 10000,
  },
},
```

Security levels:
- **strict** — HTML tags are encoded (recommended for public docs)
- **loose** — HTML tags are allowed in labels
- **antiscript** — HTML tags allowed but script tags removed
- **sandbox** — Maximum security, renders in iframe

### Handling Large Diagrams

For documentation with complex architecture diagrams:

```javascript
mermaid: {
  options: {
    maxTextSize: 100000,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis',
    },
    sequence: {
      useMaxWidth: true,
      wrap: true,
    },
  },
},
```

## Versioned Documentation

Docusaurus supports documentation versioning, which works perfectly with Mermaid diagrams. Since diagrams are text-based, they're automatically included in version snapshots.

When your architecture changes between versions, the corresponding diagrams in each version remain accurate:

- \`docs/v1.0/architecture.md\` → Old architecture diagram
- \`docs/v2.0/architecture.md\` → Updated architecture diagram

Each version maintains its own diagrams without any extra configuration.

## Performance Considerations

### Build Time

Mermaid diagrams are rendered client-side (in the browser), not during the build process. This means:
- Build times aren't affected by the number of diagrams.
- Diagrams render after page load, which may cause a brief flash.
- Complex diagrams may take a moment to render on slower devices.

### Lazy Loading

For pages with many diagrams, consider using Docusaurus's tab components to lazy-load diagram sections:

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="overview" label="Overview">
    Overview diagram here
  </TabItem>
  <TabItem value="detailed" label="Detailed">
    Detailed diagram here
  </TabItem>
</Tabs>
```

## Common Issues

### Diagram Not Rendering

1. Ensure \`markdown.mermaid: true\` is set in your config.
2. Verify \`@docusaurus/theme-mermaid\` is in the themes array.
3. Check that the code fence language is exactly \`mermaid\`.
4. Restart the dev server after configuration changes.

### Theme Mismatch

If diagrams look wrong in dark mode, make sure you've configured both light and dark themes in your config. The \`neutral\` and \`dark\` combination works well for most documentation sites.

### Syntax Errors

Mermaid will show an error message if the syntax is invalid. Test your diagrams in an online Mermaid editor before adding them to your docs.

## Best Practices for Docusaurus Documentation

1. **Use the \`neutral\` theme** for light mode — it's the most professional-looking for documentation.

2. **Place architecture diagrams early** in your docs. The "Overview" or "Getting Started" page should include a high-level system diagram.

3. **Add diagrams to API references.** Sequence diagrams showing request/response flows are invaluable for API consumers.

4. **Document your database schema** with ER diagrams. Keep them in a dedicated "Data Model" page.

5. **Use consistent styling.** Pick a Mermaid theme and stick with it across all your documentation pages.

6. **Add text descriptions.** Don't rely solely on diagrams. Include text explaining what the diagram shows for accessibility and SEO.

7. **Keep diagrams up to date.** Since they're text-based and live in your docs repo, update them in the same PR that changes the code.

## Conclusion

Mermaid diagrams in Docusaurus transform technical documentation from walls of text into visual, scannable references. The setup is straightforward, theming is flexible, and because diagrams are code, they version and review just like any other documentation change. Start with an architecture overview diagram and expand to API flows, data models, and state machines as your documentation grows.

## Practical Docusaurus Mermaid Examples

### Architecture Overview Page

Create a dedicated \`docs/architecture.md\` with your system overview:

```markdown
---
title: System Architecture
sidebar_position: 1
---

# System Architecture

Our platform consists of three main layers:

```mermaid
graph TB
    subgraph Client Layer
        Web[React Web App]
        Mobile[React Native]
    end
    subgraph API Layer
        GW[API Gateway]
        Auth[Auth Service]
        Core[Core API]
    end
    subgraph Data Layer
        PG[(PostgreSQL)]
        Redis[(Redis Cache)]
        S3[S3 Storage]
    end
    Web & Mobile --> GW
    GW --> Auth --> Core
    Core --> PG & Redis & S3
```
```

### Versioned Diagram Support

Docusaurus's versioning system works seamlessly with Mermaid diagrams. When you run \`npm run docusaurus docs:version 2.0\`, the current docs (including all Mermaid diagram source) are snapshotted. Readers on v1.x see the old diagrams; v2.0 readers see the updated ones.

This is a huge advantage over image-based diagrams, which require you to maintain separate image files per version.

### Using MDX for Dynamic Diagrams

In \`.mdx\` files, you can use the Mermaid component programmatically:

```jsx
import Mermaid from '@theme/Mermaid';

export const statuses = ['pending', 'processing', 'complete', 'failed'];

export const OrderStateDiagram = () => {
  const nodes = statuses.map((s, i) => \`${i}[${s}]\`).join('\n    ');
  return <Mermaid value={\`graph LR\n    ${nodes}\`} />;
};

<OrderStateDiagram />
```

This generates diagrams dynamically from your application's data — useful for keeping docs in sync with enums or configuration.

## Performance Considerations

Mermaid diagrams in Docusaurus are rendered client-side by default. For sites with many diagrams:

- Use the \`@docusaurus/theme-mermaid\` SSR option if available to pre-render diagrams
- Lazy-load diagrams below the fold using the \`<BrowserOnly>\` wrapper
- Consider splitting very large documentation pages into focused sub-pages

## Conclusion

Docusaurus with the official Mermaid theme is one of the best environments for diagrams-as-code documentation. Setup takes under 5 minutes, diagrams version alongside content, and updates flow just like any other documentation change. Start with an architecture overview diagram and expand to API flows, data models, and state machines as your documentation grows.

[Test your Mermaid diagrams in our free online editor →](/)
\`
  },
  {
    slug: "mermaid-git-graph-tutorial",
    title: "Mermaid Git Graph Tutorial — Visualize Branch Strategies",
    description: "Learn to create git graph diagrams with Mermaid.js. Visualize branching strategies, merge workflows, cherry-picks, and popular models like GitFlow and trunk-based development.",
    date: "2026-02-05",
    keywords: ["mermaid git graph", "git graph tutorial", "mermaid.js git", "git branching diagram", "gitflow diagram", "trunk-based development diagram"],
    content: `
## Introduction

Understanding Git branching strategies is crucial for development teams, and visualizing them makes the concepts much clearer. Mermaid's git graph diagram type lets you create visual representations of commits, branches, merges, and cherry-picks with simple text commands.

Whether you're documenting your team's workflow, teaching Git concepts, or planning a migration between branching strategies, Mermaid git graphs are the perfect tool.

## Basic Syntax

```mermaid
gitGraph
    commit
    commit
    commit
```

This creates a simple linear history with three commits on the default \`main\` branch. Each \`commit\` command adds a new commit node to the graph.

### Commit Options

You can customize each commit:

```mermaid
gitGraph
    commit id: "init"
    commit id: "feat-1" type: HIGHLIGHT
    commit id: "fix-1" tag: "v1.0"
```

Commit properties:
- **\`id\`** — Custom label (displayed on the commit node)
- **\`tag\`** — Version tag (shown above the commit)
- **\`type\`** — Visual type: \`NORMAL\` (default), \`HIGHLIGHT\`, \`REVERSE\`

## Branching and Merging

The core of any git graph is branching:

```mermaid
gitGraph
    commit id: "initial"
    commit id: "add readme"
    branch feature
    checkout feature
    commit id: "add login"
    commit id: "add tests"
    checkout main
    commit id: "hotfix"
    merge feature id: "merge feature"
    commit id: "release" tag: "v1.0"
```

Key commands:
- **\`branch <name>\`** — Create a new branch
- **\`checkout <name>\`** — Switch to a branch
- **\`merge <name>\`** — Merge a branch into the current branch
- **\`cherry-pick id: "<commit-id>"\`** — Cherry-pick a specific commit

## Cherry-Pick

Demonstrate cherry-picking:

```mermaid
gitGraph
    commit id: "A"
    commit id: "B"
    branch feature
    checkout feature
    commit id: "C"
    commit id: "D" type: HIGHLIGHT
    commit id: "E"
    checkout main
    commit id: "F"
    cherry-pick id: "D"
    commit id: "G"
```

This shows commit \`D\` being cherry-picked from the \`feature\` branch to \`main\`.

## GitFlow Strategy

GitFlow is one of the most popular branching models. Here's how to visualize it:

```mermaid
gitGraph
    commit id: "init" tag: "v0.1"
    branch develop
    checkout develop
    commit id: "dev setup"

    branch feature/auth
    checkout feature/auth
    commit id: "login page"
    commit id: "auth API"
    commit id: "auth tests"
    checkout develop
    merge feature/auth id: "merge auth"

    branch feature/dashboard
    checkout feature/dashboard
    commit id: "dashboard UI"
    commit id: "widgets"
    checkout develop
    merge feature/dashboard id: "merge dashboard"

    branch release/v1.0
    checkout release/v1.0
    commit id: "bump version"
    commit id: "fix typos"
    checkout main
    merge release/v1.0 id: "release" tag: "v1.0"
    checkout develop
    merge release/v1.0 id: "back-merge"

    checkout main
    branch hotfix/security
    commit id: "patch CVE"
    checkout main
    merge hotfix/security id: "hotfix" tag: "v1.0.1"
    checkout develop
    merge hotfix/security id: "hotfix to dev"
```

### GitFlow Branch Purposes

- **main** — Production-ready code. Every commit is a release.
- **develop** — Integration branch for features. Always ahead of main.
- **feature/*** — Individual features. Branch from develop, merge back to develop.
- **release/*** — Release preparation. Branch from develop, merge to both main and develop.
- **hotfix/*** — Emergency fixes. Branch from main, merge to both main and develop.

## Trunk-Based Development

A simpler strategy where everyone works on short-lived branches off main:

```mermaid
gitGraph
    commit id: "init"
    commit id: "CI setup"

    branch feat-1
    checkout feat-1
    commit id: "small change"
    checkout main
    merge feat-1

    commit id: "direct fix"

    branch feat-2
    checkout feat-2
    commit id: "refactor"
    commit id: "tests"
    checkout main
    merge feat-2

    branch feat-3
    checkout feat-3
    commit id: "update API"
    checkout main
    merge feat-3

    commit id: "deploy" tag: "v1.1"
```

### Key Principles of Trunk-Based

- **Short-lived branches** — 1-2 days maximum
- **Small, frequent merges** — Reduce merge conflicts
- **Feature flags** — Instead of long-lived feature branches
- **Continuous integration** — Every merge triggers CI/CD

## GitHub Flow

A simplified model used by many teams:

```mermaid
gitGraph
    commit id: "v1.0" tag: "v1.0"
    branch feature/search
    checkout feature/search
    commit id: "search UI"
    commit id: "search API"
    commit id: "search tests"
    checkout main
    merge feature/search id: "PR #42 merged"
    commit id: "deploy" tag: "v1.1"

    branch fix/bug-123
    checkout fix/bug-123
    commit id: "fix null check"
    checkout main
    merge fix/bug-123 id: "PR #43 merged"
    commit id: "deploy" tag: "v1.1.1"
```

GitHub Flow rules:
1. \`main\` is always deployable
2. Create feature branches from main
3. Open a pull request for discussion
4. Merge to main after review
5. Deploy immediately after merge

## Release Branch Strategy

For teams that maintain multiple release versions:

```mermaid
gitGraph
    commit id: "init"
    commit id: "feature A"
    commit id: "feature B" tag: "v1.0"
    branch release/v1
    checkout release/v1
    commit id: "v1 patch 1"
    commit id: "v1 patch 2" tag: "v1.0.2"

    checkout main
    commit id: "feature C"
    commit id: "feature D" tag: "v2.0"
    branch release/v2
    checkout release/v2
    commit id: "v2 patch 1" tag: "v2.0.1"

    checkout main
    commit id: "feature E"
    commit id: "feature F"
```

This shows how teams can maintain v1.x patches while continuing v2.x development.

## Comparing Strategies Side by Side

Here's when to use each strategy:

### GitFlow — Best For:
- Teams with scheduled releases
- Products with multiple supported versions
- When you need a staging/integration branch

### Trunk-Based — Best For:
- Teams practicing continuous deployment
- Mature CI/CD pipelines
- Small, experienced teams
- Microservice architectures

### GitHub Flow — Best For:
- Open-source projects
- Small to medium teams
- Web applications with continuous deployment
- Teams that want simplicity

## Styling Git Graphs

### Custom Branch Colors

You can customize how branches appear using Mermaid themes:

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': {
    'git0': '#4f46e5',
    'git1': '#10b981',
    'git2': '#f59e0b',
    'git3': '#ef4444',
    'gitBranchLabel0': '#ffffff',
    'gitBranchLabel1': '#ffffff',
    'gitBranchLabel2': '#000000',
    'gitBranchLabel3': '#ffffff'
}}}%%
gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch feature
    commit
    checkout develop
    merge feature
    checkout main
    merge develop tag: "v1.0"
```

### Branch Ordering

Mermaid renders branches in the order they're created. Plan your branch creation order to get a clean layout:

1. Create the main branch first (automatic)
2. Create long-lived branches (develop, release) early
3. Create feature branches when needed

## Documenting Your Team's Workflow

Use git graphs in your team's CONTRIBUTING.md or development guide:

```markdown
## Our Branching Strategy

We use a simplified GitFlow model:

```mermaid
gitGraph
    commit tag: "latest release"
    branch develop
    checkout develop
    commit id: "feature work"
    branch feature/your-feature
    commit id: "your changes"
    checkout develop
    merge feature/your-feature id: "PR merged"
    checkout main
    merge develop tag: "next release"
```

### Steps to Contribute:
1. Branch from \`develop\`
2. Name your branch \`feature/description\`
3. Open a PR to \`develop\`
4. After review, it'll be merged
5. Releases are cut from \`develop\` to \`main\`
```

## Best Practices

1. **Keep git graphs focused.** Show one strategy or workflow per diagram. Don't try to illustrate every possible scenario.

2. **Use meaningful commit IDs.** Instead of auto-generated IDs, use descriptive labels like \`"add auth"\`, \`"fix bug"\`, \`"deploy"\`.

3. **Add version tags.** Use \`tag: "v1.0"\` on release commits to clearly mark version milestones.

4. **Highlight important commits.** Use \`type: HIGHLIGHT\` for commits you want to draw attention to.

5. **Document the strategy, not the history.** Git graphs in documentation should show the ideal workflow, not your actual messy commit history.

6. **Combine with text explanations.** Not everyone reads diagrams intuitively. Add bullet points explaining each step.

## Limitations

- **No detached HEAD** — You can't show detached HEAD states
- **No rebasing** — Mermaid git graphs don't support rebase visualization
- **No squash merges** — All merges are shown as merge commits
- **Limited branch count** — More than 4-5 branches makes the diagram hard to read
- **No stashing** — Stash operations can't be visualized

For these advanced scenarios, consider using a whiteboard or specialized Git visualization tools alongside your Mermaid documentation.

## Conclusion

Mermaid git graphs are invaluable for documenting branching strategies, teaching Git workflows, and communicating development processes. Whether your team uses GitFlow, trunk-based development, or GitHub Flow, visualizing the strategy makes it accessible to everyone — from junior developers to stakeholders who need to understand the release process.

## Real-World Example: Monorepo Branch Strategy

For monorepos with multiple teams, a more complex branching strategy is common:

```
gitGraph
    commit id: "Initial monorepo setup"
    branch team-a
    branch team-b

    checkout team-a
    commit id: "Team A: Feature 1"
    commit id: "Team A: Feature 2"

    checkout team-b
    commit id: "Team B: Feature 3"

    checkout main
    merge team-a id: "Merge Team A"

    checkout team-b
    commit id: "Team B: Feature 4"

    checkout main
    merge team-b id: "Merge Team B"
    commit id: "v1.2.0 release" tag: "v1.2.0"
```

## Git Graphs for Onboarding Documentation

New developers often struggle with a project's branching conventions. A git graph in the onboarding guide makes it concrete:

```
gitGraph
    commit id: "main is always deployable"
    branch feature/my-feature
    checkout feature/my-feature
    commit id: "work in feature branch"
    commit id: "small, focused commits"
    checkout main
    merge feature/my-feature id: "PR merged after review"
    commit id: "deploy happens automatically"
```

Showing the expected workflow visually is far more effective than describing it in paragraphs.

## Git Graph Limitations and Workarounds

Mermaid git graphs have some limitations to be aware of:

- **No date display** — commits appear in sequence order, not by date
- **No author info** — git graphs show structure, not who made changes
- **Limited styling** — you can't customise individual commit colors beyond the branch theme
- **No interactive features** — unlike tools like GitKraken or Sourcetree, these are static diagrams

For these reasons, Mermaid git graphs are best used for **illustrating concepts** rather than visualising the actual state of your repository.

## Conclusion

Mermaid git graphs are a unique and underused diagram type. They're perfect for documenting branching strategies, explaining Git workflows, and creating clear onboarding material. Whatever your workflow — trunk-based development, Gitflow, or GitHub Flow — visualising it makes it accessible to everyone on the team.

[Create git graph diagrams in our free Mermaid Live Editor →](/)
\`
  },
  {
    slug: "mermaid-user-journey-map",
    title: "Creating User Journey Maps with Mermaid.js",
    description: "Learn how to create user journey maps with Mermaid.js. Understand the syntax, add sections and scoring, and apply journey mapping to UX research and product design.",
    date: "2026-02-20",
    keywords: ["mermaid user journey", "user journey map", "mermaid.js journey", "UX journey map", "customer journey diagram", "user experience mapping"],
    content: `
## What Are User Journey Maps?

User journey maps are visual representations of the steps a user takes to accomplish a goal with your product or service. They document the user's experience at each step, including their satisfaction level, pain points, and emotional response.

Journey maps are essential tools for:
- **UX research** — Understanding current user experience
- **Product design** — Identifying improvement opportunities
- **Stakeholder communication** — Making user pain points visible
- **Onboarding optimization** — Smoothing the new user experience
- **Service design** — Mapping end-to-end customer journeys

Mermaid.js provides a \`journey\` diagram type that lets you create these maps as code — quick to write, easy to update, and version-controllable.

## Basic Syntax

```mermaid
journey
    title My Working Day
    section Morning
        Wake up: 3: Me
        Commute to work: 1: Me
        Arrive at office: 5: Me
    section Afternoon
        Lunch meeting: 3: Me, PM
        Code review: 4: Me, Dev
    section Evening
        Leave office: 5: Me
        Dinner: 5: Me, Family
```

### Key Elements

- **\`title\`** — The journey map's title
- **\`section\`** — Groups steps into phases (shown as labeled sections)
- **Steps** — Format: \`Task name: score: actors\`
- **Score** — Satisfaction rating from 1 (worst) to 5 (best)
- **Actors** — Who's involved in this step (comma-separated)

## Scoring Guide

The score (1-5) represents the user's experience at each step:

- **5** — Delighted, exceeded expectations, wow moment
- **4** — Satisfied, smooth experience, no issues
- **3** — Neutral, acceptable but unremarkable
- **2** — Frustrated, encountering friction or confusion
- **1** — Very unhappy, major pain point, might abandon

Mermaid visualizes these scores with color coding — higher scores appear in green tones, lower scores in red/orange tones. This makes pain points immediately visible.

## Practical Example: E-Commerce Purchase Journey

```mermaid
journey
    title Online Shopping Experience
    section Discovery
        Google search for product: 3: Customer
        Land on product page: 4: Customer
        Browse similar items: 4: Customer
        Read reviews: 5: Customer
    section Decision
        Compare prices: 3: Customer
        Check shipping options: 2: Customer
        Calculate total with tax: 2: Customer
    section Purchase
        Add to cart: 5: Customer
        Create account: 1: Customer
        Enter payment details: 3: Customer
        Confirm order: 4: Customer
    section Post-Purchase
        Receive confirmation email: 5: Customer
        Track shipment: 4: Customer
        Receive package: 5: Customer
        Unbox product: 5: Customer
```

### Insights from This Journey

Looking at the scores, we can immediately identify:
- **Pain points**: Account creation (1), shipping options (2), tax calculation (2)
- **Delight moments**: Reviews (5), add to cart (5), confirmation email (5), unboxing (5)
- **Improvement opportunities**: Simplify account creation (guest checkout), be transparent about total costs earlier

## Practical Example: SaaS Onboarding Journey

```mermaid
journey
    title New User Onboarding
    section Sign Up
        Visit landing page: 4: User
        Click Sign Up: 5: User
        Fill registration form: 3: User
        Verify email: 2: User
        Complete profile: 2: User
    section First Use
        See empty dashboard: 1: User
        Find tutorial: 3: User
        Create first project: 4: User, App
        Import data: 2: User, App
        See first results: 5: User
    section Activation
        Invite team member: 3: User
        Set up integration: 2: User, Admin
        Configure settings: 3: User, Admin
        Complete onboarding: 4: User
    section Retention
        Daily usage: 4: User
        Discover advanced feature: 5: User
        Hit usage limit: 1: User
        Upgrade decision: 3: User
```

### Analysis

- The **empty dashboard** (score: 1) is a critical moment — new users who see nothing are likely to churn.
- **Email verification** (score: 2) creates friction before the user sees any value.
- **Hitting usage limits** (score: 1) is a conversion moment but needs careful handling to avoid frustration.

## Practical Example: Developer API Integration

```mermaid
journey
    title API Integration Journey
    section Research
        Find API documentation: 3: Developer
        Read getting started guide: 4: Developer
        Review API reference: 3: Developer
        Check pricing/limits: 4: Developer
    section Setup
        Create developer account: 3: Developer
        Generate API key: 5: Developer
        Install SDK: 4: Developer
        Configure environment: 3: Developer
    section Integration
        Make first API call: 5: Developer
        Handle authentication: 3: Developer
        Implement error handling: 2: Developer
        Parse response data: 4: Developer
    section Production
        Test under load: 3: Developer, DevOps
        Deploy to production: 4: Developer, DevOps
        Monitor performance: 3: Developer, DevOps
        Handle rate limits: 2: Developer
```

## Multiple Actors

Journey maps can track multiple actors to show different perspectives:

```mermaid
journey
    title Restaurant Dining Experience
    section Arrival
        Find restaurant: 3: Customer
        Welcome guests: 5: Customer, Host
        Show to table: 4: Customer, Host
    section Ordering
        Browse menu: 4: Customer
        Take order: 4: Customer, Waiter
        Send to kitchen: 3: Waiter, Chef
    section Dining
        Prepare food: 3: Chef
        Serve food: 5: Customer, Waiter
        Enjoy meal: 5: Customer
        Check on table: 4: Customer, Waiter
    section Payment
        Request bill: 3: Customer, Waiter
        Process payment: 3: Customer, Waiter
        Leave tip: 4: Customer
        Say goodbye: 5: Customer, Host
```

This multi-actor view helps identify where interactions between roles create friction or delight.

## Using Journey Maps in UX Research

### Step 1: Gather Data

Before creating a journey map, collect data through:
- User interviews and surveys
- Analytics data (funnel analysis, drop-off rates)
- Customer support tickets and common complaints
- Session recordings (Hotjar, FullStory, etc.)
- NPS and satisfaction surveys

### Step 2: Map the Current State

Create a journey map reflecting the actual user experience:

```mermaid
journey
    title Current Checkout Experience
    section Cart Review
        View cart: 4: User
        Update quantities: 3: User
        Apply coupon: 1: User
    section Shipping
        Enter address: 3: User
        Choose shipping: 2: User
        See delivery estimate: 4: User
    section Payment
        Enter card details: 3: User
        See order summary: 4: User
        Click purchase: 5: User
    section Confirmation
        See confirmation: 5: User
        Get email receipt: 5: User
```

### Step 3: Identify Opportunities

Look for steps with scores of 1-2 — these are your improvement opportunities:
- Coupon application (1): Make the UI more intuitive
- Shipping options (2): Simplify choices, show costs upfront

### Step 4: Map the Desired State

Create a target journey map showing the ideal experience:

```mermaid
journey
    title Improved Checkout Experience
    section Cart Review
        View cart: 5: User
        Update quantities: 5: User
        Apply coupon (auto-suggest): 4: User
    section Shipping
        Auto-fill address: 5: User
        Smart shipping recommendation: 4: User
        Real-time delivery estimate: 5: User
    section Payment
        Saved payment method: 5: User
        Clear order summary: 5: User
        One-click purchase: 5: User
    section Confirmation
        Instant confirmation: 5: User
        Rich email receipt: 5: User
```

Compare the current vs. desired maps to build your product roadmap.

## Journey Maps in Documentation

Add journey maps to your product documentation:

### In README Files

```markdown
## User Experience

```mermaid
journey
    title Getting Started with OurTool
    section Setup
        Install CLI: 5: Developer
        Run init command: 5: Developer
        Configure project: 4: Developer
    section First Use
        Create first item: 5: Developer
        See preview: 5: Developer
        Deploy: 4: Developer
```
```

### In Design Documents

Include journey maps in your product design docs to:
- Show the current user experience
- Highlight pain points that justify the proposed changes
- Illustrate the expected improved journey

### In Sprint Retrospectives

Map the team's development experience:

```mermaid
journey
    title Sprint 14 Developer Experience
    section Planning
        Sprint planning meeting: 3: Team
        Ticket breakdown: 4: Team
        Estimation: 2: Team
    section Development
        Pick up tickets: 5: Dev
        Local development: 4: Dev
        Code review turnaround: 2: Dev
    section Deployment
        CI pipeline: 3: Dev, DevOps
        Staging deploy: 4: Dev, DevOps
        Production deploy: 5: Dev, DevOps
```

## Tips for Effective Journey Maps

1. **Base scores on data, not assumptions.** Use analytics, surveys, and user feedback to assign scores.

2. **Keep it focused.** Map one journey (one user goal) per diagram. Don't try to map every possible path.

3. **Use sections meaningfully.** Sections should represent distinct phases of the journey, not arbitrary groupings.

4. **Include all relevant actors.** If a support agent is involved in a step, include them — it reveals handoff points.

5. **Update regularly.** Journey maps should evolve as you ship improvements. Update scores when you fix pain points.

6. **Pair with metrics.** Link journey map steps to actual metrics: "Cart Review (score: 4) — 85% proceed to next step."

7. **Keep scores honest.** A journey map full of 5s isn't useful. The whole point is to reveal where the experience needs improvement.

8. **Share widely.** Journey maps are communication tools. Share them with engineering, design, product, and leadership.

## Limitations of Mermaid Journey Maps

- **No custom icons or images** — Steps are text-only
- **Linear flow only** — You can't show branching paths or loops
- **Limited styling** — Colors are determined by scores, not customizable
- **No annotations** — You can't add detailed notes to individual steps
- **Simple scoring** — Only integer scores 1-5 are supported

For more sophisticated journey mapping with detailed annotations, emotional curves, and branching paths, consider dedicated UX tools like Figma, Miro, or Smaply. Mermaid journey maps excel at **quick, version-controlled documentation** that lives alongside your code.

## Conclusion

Mermaid journey maps bring user experience visualization into your development workflow. They're quick to create, easy to update, and version-controllable — making them perfect for documenting user journeys in README files, design documents, and sprint retrospectives. Start by mapping your most important user journey, identify the low-scoring steps, and use that data to drive product improvements.

[Create journey maps in our free Mermaid Live Editor →](/)
\`
  },
  {
    slug: "mermaid-mindmap-advanced-examples",
    title: "Mermaid.js Mindmap Diagrams: Advanced Examples & Real-World Use Cases",
    description: "Go beyond basic mindmaps with Mermaid.js. Explore advanced examples for brainstorming, project planning, note-taking, and team collaboration with practical code snippets.",
    date: "2026-03-11",
    keywords: ["mermaid mindmap examples", "mermaid.js mindmap diagrams", "mindmap brainstorming", "mindmap project planning", "mermaid mindmap use cases", "text-based mindmap", "mindmap note-taking"],
    content: `
## Why Mermaid.js Mindmaps Are a Game-Changer

Mindmaps are one of the most effective ways to visually organize ideas, and Mermaid.js brings them into the world of **code-based diagramming**. Unlike traditional drag-and-drop mindmap tools, Mermaid mindmaps are text-defined, version-controllable, and embeddable anywhere Markdown is supported — from GitHub READMEs to Notion pages to your team's documentation platform.

If you've already explored the [basics of Mermaid mindmaps](/blog/mermaid-mindmap-tutorial), this guide takes you further with **advanced patterns, real-world examples, and practical use cases** that you can copy, adapt, and integrate into your workflow today.

## Quick Syntax Refresher

Mermaid mindmaps use **indentation** to define hierarchy. Each level of indentation creates a child node:

```
mindmap
  root((Central Topic))
    Branch A
      Sub-topic 1
      Sub-topic 2
    Branch B
      Sub-topic 3
```

Node shapes add meaning:
- \`((text))\` — Cloud shape (great for root nodes)
- \`(text)\` — Rounded rectangle
- \`[text]\` — Square
- \`)text(\` — Bang shape (for emphasis)
- \`{{text}}\` — Hexagon

Now let's put this into practice.

## Use Case 1: Brainstorming Sessions

Mindmaps shine brightest during brainstorming. Instead of messy whiteboard photos or lost sticky notes, capture ideas in a structured, shareable format.

### Example: Product Feature Brainstorming

```
mindmap
  root((Mobile App v2.0))
    User Experience
      Onboarding Flow
        Interactive Tutorial
        Skip Option
        Progress Indicator
      Navigation
        Bottom Tab Bar
        Gesture Support
        Search Everywhere
    Performance
      Load Time
        Lazy Loading
        Image Compression
        CDN Integration
      Offline Mode
        Local Cache
        Sync Queue
        Conflict Resolution
    Monetization
      Freemium Model
        Free Tier Limits
        Premium Features
        Annual Discount
      In-App Purchases
        Cosmetic Items
        Power-Ups
```

This mindmap captures the output of an entire brainstorming session in a format that can live in your project repo. Anyone joining the team later can instantly understand the thinking behind your feature decisions.

### Why This Beats Traditional Tools

- **Version history** — Git tracks every change to the brainstorm
- **Async collaboration** — Team members add branches via pull requests
- **No tool lock-in** — It's just text; move it anywhere
- **Searchable** — \`grep\` through your brainstorms across projects

## Use Case 2: Project Planning & Breakdown

Work breakdown structures (WBS) map naturally to mindmaps. Use them to decompose large projects into manageable pieces.

### Example: Website Redesign Project Plan

```
mindmap
  root((Website Redesign))
    Discovery
      Stakeholder Interviews
      Analytics Review
      Competitor Analysis
      User Surveys
    Design
      Wireframes
        Homepage
        Product Pages
        Checkout Flow
      Visual Design
        Color Palette
        Typography
        Component Library
      Prototyping
        Interactive Mockups
        Usability Testing
    Development
      Frontend
        React Components
        Responsive Layout
        Accessibility Audit
      Backend
        API Migration
        Database Schema
        Authentication
      Infrastructure
        CI/CD Pipeline
        Staging Environment
        CDN Setup
    Launch
      QA Testing
      Content Migration
      SEO Redirects
      Monitoring Setup
```

Each branch becomes a workstream. Each leaf becomes a task. This single diagram replaces a lengthy project plan document and gives everyone an at-a-glance view of the full scope.

## Use Case 3: Note-Taking & Knowledge Organization

Mermaid mindmaps are exceptional for organizing notes from meetings, courses, or research. The hierarchical structure forces you to identify relationships between concepts.

### Example: Meeting Notes — Quarterly Planning

```
mindmap
  root((Q2 Planning))
    Goals
      Revenue +20%
      Launch 3 Features
      Reduce Churn 5%
    Key Decisions
      Hire 2 Engineers
      Pause Marketing Spend
      Partner with Agency X
    Risks
      Supply Chain Delays
      Competitor Launch
      Team Burnout
    Action Items
      )Draft Hiring JDs(
      )Update Roadmap(
      )Schedule Partner Call(
```

Notice the use of \`)text(\` (bang shape) for action items — this visually distinguishes them from informational nodes. Small formatting choices like this make mindmaps scannable.

## Use Case 4: Technical Architecture Overview

Mindmaps offer a lighter alternative to formal architecture diagrams when you need a quick, high-level view.

### Example: Microservices Architecture

```
mindmap
  root((E-Commerce Platform))
    API Gateway
      Rate Limiting
      Authentication
      Request Routing
    Services
      User Service
        Registration
        Profile Management
        OAuth Integration
      Product Service
        Catalog
        Search Index
        Recommendations
      Order Service
        Cart Management
        Payment Processing
        Order Tracking
    Data Layer
      PostgreSQL
        Users
        Orders
      Redis
        Session Cache
        Rate Limits
      Elasticsearch
        Product Search
    Infrastructure
      Kubernetes
      Datadog Monitoring
      AWS S3 Storage
```

This isn't a replacement for detailed system design documents, but it's perfect for onboarding new team members or presenting to non-technical stakeholders.

## Use Case 5: Decision Making & Analysis

Structure your thinking around complex decisions using mindmaps.

### Example: Technology Stack Decision

```
mindmap
  root((Frontend Framework))
    React
      Pros
        Huge Ecosystem
        Strong Job Market
        Meta Backing
      Cons
        Boilerplate Heavy
        Decision Fatigue
    Vue
      Pros
        Gentle Learning Curve
        Great Documentation
        Single File Components
      Cons
        Smaller Ecosystem
        Fewer Enterprise Adopters
    Svelte
      Pros
        No Virtual DOM
        Less Code
        Built-in Animations
      Cons
        Smaller Community
        Fewer Libraries
        Less Battle Tested
```

Laying out pros and cons visually helps teams move past analysis paralysis and make informed decisions.

## Best Practices for Effective Mindmaps

1. **Keep the root node focused.** A single, clear central topic produces better mindmaps than a vague one. "Q2 Marketing Plan" beats "Marketing Stuff."

2. **Limit depth to 4 levels.** Beyond four levels, mindmaps become hard to read. If a branch is too deep, consider breaking it into a separate mindmap.

3. **Use node shapes intentionally.** Reserve special shapes (clouds, bangs, hexagons) for specific meanings — don't use them randomly.

4. **Combine with other diagram types.** Start with a mindmap for brainstorming, then create flowcharts or sequence diagrams for the detailed processes you identify.

5. **Store mindmaps alongside code.** Keep them in \`docs/\` folders in your repos so they stay current with the codebase.

6. **Review and prune regularly.** Mindmaps should evolve. Remove completed items, add new branches, and keep them as living documents.

## Mermaid Mindmap Limitations to Know

- **No cross-links** — You can't connect nodes across branches (use flowcharts for that)
- **No icons on all renderers** — Icon support (\`::icon()\`) varies by platform
- **Fixed layout** — You can't control node positioning; Mermaid handles layout automatically
- **No color per node** — Styling is applied at the branch level, not individual nodes
- **Large mindmaps get crowded** — Keep them focused; split large topics into multiple diagrams

## Conclusion

Mermaid.js mindmaps bring the power of visual thinking into your text-based workflow. Whether you're brainstorming features, planning projects, organizing meeting notes, or evaluating technology decisions, mindmaps provide a fast, versionable, and shareable way to structure your thoughts.

The key is matching the use case to the tool: use mindmaps for **hierarchical exploration** and switch to flowcharts, sequence diagrams, or Gantt charts when you need **process flows or timelines**.

## Advanced Example: Technology Radar

Teams use technology radars to categorise tools and frameworks by adoption status. A mind map works beautifully for this:

```
mindmap
    root((Tech Radar 2025))
        Adopt
            TypeScript
            React
            PostgreSQL
            Docker
            Terraform
        Trial
            Bun
                Faster than Node.js
                Still maturing
            Deno
            Htmx
        Assess
            WASM
            AI-assisted coding
            Edge functions
        Hold
            jQuery
            AngularJS
            REST (for new services)
                Prefer GraphQL or gRPC
```

This is far more readable than a table or bulleted list — the visual hierarchy immediately communicates confidence levels.

## Advanced Example: Incident Response Playbook

Use mind maps to document incident response procedures:

```
mindmap
    root((P1 Incident Response))
        Immediate Actions
            Page on-call lead
            Open incident channel
            Start timeline doc
        Assess
            Impact scope
                How many users affected?
                Revenue impact estimate
            Root cause candidates
                Recent deployments
                Infrastructure changes
                Third-party service status
        Mitigate
            Roll back last deploy
            Enable maintenance mode
            Scale up affected services
            Activate DR if needed
        Communicate
            Status page update
            Stakeholder notification
            Customer support briefed
        Post-incident
            RCA document
            Action items
            Update runbook
```

Mind maps for runbooks work because they're scannable under pressure — an engineer can quickly navigate to the relevant branch without reading the whole document.

## Programmatic Mind Map Generation

For teams with structured data, you can generate Mermaid mind map syntax programmatically. For example, generating a feature map from your product backlog:

```javascript
function generateFeatureMindmap(features) {
  let output = 'mindmap\n    root((Product Features))\n';
  const categories = {};
  
  for (const feature of features) {
    if (!categories[feature.category]) categories[feature.category] = [];
    categories[feature.category].push(feature.name);
  }
  
  for (const [cat, items] of Object.entries(categories)) {
    output += \`        ${cat}\n\`;
    for (const item of items) {
      output += \`            ${item}\n\`;
    }
  }
  
  return output;
}
```

## Conclusion

Advanced Mermaid mind maps are powerful tools for documenting complex knowledge hierarchies, technology decisions, and operational procedures. The key insight is knowing when to use them: use mindmaps for **hierarchical exploration** and switch to flowcharts, sequence diagrams, or Gantt charts when you need **process flows or timelines**.

## Combining Mind Maps with Other Diagram Types

For comprehensive documentation, mind maps work best as the entry point — an overview that links to more detailed diagrams:

- **Mind map** shows the big picture (all features, all services, all concepts)
- **Flowcharts** show how a specific process works
- **Sequence diagrams** show how specific services communicate
- **ER diagrams** show the database structure for a specific domain

A great pattern: include a mind map at the top of your main architecture document, then link each branch to its detailed section or page.

## Conclusion

Advanced Mermaid mind maps are powerful tools for documenting complex hierarchies, making technology decisions visible, and creating scannable runbooks. Know when to use them: reach for mind maps for **hierarchical exploration** and switch to flowcharts, sequence diagrams, or Gantt charts when you need **process flows or timelines**.

[Try building your own mindmap in our free Mermaid editor →](/)
\`
  },
  {
    slug: "mermaid-themes-dark-mode",
    title: "Mermaid.js Themes & Dark Mode — Complete Customization Guide (2026)",
    description: "Learn how to apply built-in themes, enable dark mode, and customize Mermaid.js diagrams with themeVariables and CSS. Includes copy-paste examples for every theme.",
    date: "2026-03-17",
    keywords: ["mermaid dark mode", "mermaid themes", "mermaid custom colors", "mermaid styling guide", "mermaid.js customize"],
    content: `
## Why Customize Mermaid Diagrams?

Mermaid.js renders diagrams using a default blue-and-gray palette that works fine for most documentation. But there are plenty of reasons to go further:

- Your company has a **brand color palette** to match
- You're embedding diagrams in a **dark mode** documentation site
- You want **color-coded diagrams** that communicate meaning (red = error, green = success)
- The default theme doesn't match your project's aesthetic

Mermaid gives you three layers of customization: **built-in themes**, **theme variables**, and **CSS overrides**. This guide covers all three.

## Built-In Themes

Mermaid ships with five built-in themes. Switching between them requires just one line of configuration.

### The 5 Built-In Themes

**\`default\`** — The standard Mermaid look. Blue primary color, light background, clean lines. Works well for technical documentation on white backgrounds.

**\`neutral\`** — Muted grays and desaturated colors. Professional and understated. A great choice for documentation sites where the diagram shouldn't compete with the content.

**\`dark\`** — Inverted palette for dark backgrounds. White text, dark backgrounds, bright accent colors. Perfect for dark mode documentation sites or terminal-style presentations.

**\`forest\`** — Green-accented theme. Calming, organic feel. Popular for environmental projects, health-related documentation, and anyone who finds the default blue palette monotonous.

**\`base\`** — A minimal starting point designed for customization via theme variables. Almost no default styling — you build on top of it. Best when you need full brand control.

### How to Apply a Theme

**Method 1: Per-diagram init directive**

Add a \`%%{init: ...}%%\` comment at the very top of your diagram:

```
%%{init: {'theme': 'dark'}}%%
graph TD
    A[Start] --> B[Process]
    B --> C[End]
```

This overrides the global theme for just this one diagram. Great for mixing themes on the same page.

**Method 2: Global JavaScript configuration**

When embedding Mermaid in a webpage or configuring it via your documentation framework:

```javascript
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
});
```

**Method 3: Docusaurus / MkDocs config**

In Docusaurus (\`docusaurus.config.js\`):

```javascript
themeConfig: {
  mermaid: {
    theme: {
      light: 'neutral',
      dark: 'dark',
    },
  },
},
```

This automatically switches between light and dark Mermaid themes based on the user's Docusaurus theme preference.

## Dark Mode — The Right Way

Dark mode is often requested for diagrams embedded in dark documentation themes or developer portals. Here's how to handle it properly in different contexts.

### Standalone Dark Diagram

```
%%{init: {'theme': 'dark'}}%%
flowchart LR
    Client([Client]) --> Gateway[API Gateway]
    Gateway --> Auth[Auth Service]
    Gateway --> API[Core API]
    API --> DB[(PostgreSQL)]
    API --> Cache[(Redis)]
```

### Auto-Switch with CSS Media Query

For a webpage that supports both light and dark OS preferences, use CSS to select the right diagram:

```html
<div class="diagram-light">
  <div class="mermaid">
    %%{init: {'theme': 'default'}}%%
    graph TD
        A --> B --> C
  </div>
</div>
<div class="diagram-dark">
  <div class="mermaid">
    %%{init: {'theme': 'dark'}}%%
    graph TD
        A --> B --> C
  </div>
</div>

<style>
  @media (prefers-color-scheme: dark) {
    .diagram-light { display: none; }
    .diagram-dark { display: block; }
  }
  @media (prefers-color-scheme: light) {
    .diagram-light { display: block; }
    .diagram-dark { display: none; }
  }
</style>
```

### Dark Mode in GitHub

GitHub automatically detects the user's system theme and renders Mermaid diagrams appropriately. If a user has dark mode enabled, GitHub applies its own dark styling to your Mermaid diagrams. No configuration needed on your end.

## Theme Variables — Deep Customization

Theme variables let you customize specific aspects of any theme without writing CSS. They're applied via the \`themeVariables\` key inside the \`init\` directive.

### Core Theme Variables

```
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#4f46e5',
  'primaryTextColor': '#ffffff',
  'primaryBorderColor': '#3730a3',
  'secondaryColor': '#e0e7ff',
  'tertiaryColor': '#f5f3ff',
  'lineColor': '#6366f1',
  'background': '#ffffff',
  'mainBkg': '#4f46e5',
  'nodeBorder': '#3730a3',
  'clusterBkg': '#e0e7ff',
  'titleColor': '#1e1b4b',
  'edgeLabelBackground': '#f5f5f5',
  'fontFamily': 'Inter, sans-serif',
  'fontSize': '14px'
}}}%%
graph TD
    A[Initialize] --> B[Process]
    B --> C{Success?}
    C -->|Yes| D[Complete]
    C -->|No| E[Retry]
    E --> B
```

### Variable Reference

| Variable | Controls |
|---|---|
| \`primaryColor\` | Node fill color |
| \`primaryTextColor\` | Text color inside nodes |
| \`primaryBorderColor\` | Node border color |
| \`secondaryColor\` | Secondary node fill (alt nodes) |
| \`tertiaryColor\` | Tertiary fill (subgraphs, etc.) |
| \`lineColor\` | Arrow and edge color |
| \`background\` | Diagram background |
| \`mainBkg\` | Main background for some elements |
| \`titleColor\` | Title text color |
| \`edgeLabelBackground\` | Label box background on edges |
| \`fontFamily\` | Font for all text |
| \`fontSize\` | Base font size |

### Sequence Diagram Variables

```
%%{init: {'theme': 'base', 'themeVariables': {
  'actorBkg': '#4f46e5',
  'actorTextColor': '#ffffff',
  'actorBorderColor': '#3730a3',
  'actorLineColor': '#6366f1',
  'signalColor': '#374151',
  'signalTextColor': '#111827',
  'labelBoxBkgColor': '#e0e7ff',
  'labelBoxBorderColor': '#4f46e5',
  'labelTextColor': '#1e1b4b',
  'loopTextColor': '#4338ca',
  'noteBorderColor': '#6366f1',
  'noteBkgColor': '#f5f3ff',
  'noteTextColor': '#1e1b4b',
  'activationBorderColor': '#4f46e5',
  'activationBkgColor': '#c7d2fe'
}}}%%
sequenceDiagram
    Client->>+Server: POST /api/login
    Server->>+DB: SELECT user
    DB-->>-Server: User found
    Server-->>-Client: 200 OK + JWT
```

### Class Diagram Variables

```
%%{init: {'theme': 'base', 'themeVariables': {
  'classText': '#1e1b4b',
  'lineColor': '#6366f1',
  'attributeBackgroundColorEven': '#f5f3ff',
  'attributeBackgroundColorOdd': '#e0e7ff'
}}}%%
classDiagram
    class User {
        +String id
        +String email
        +login() void
    }
    class Admin {
        +deleteUser(id) void
    }
    User <|-- Admin
```

## CSS Overrides — Surgical Precision

For full control, you can target Mermaid's SVG elements with CSS. This works best in documentation frameworks and custom web pages.

### Basic Node Styling

```css
/* Style all nodes in a specific diagram */
#my-diagram .node rect {
  fill: #4f46e5;
  stroke: #3730a3;
  stroke-width: 2px;
  rx: 8px;
  ry: 8px;
}

/* Style node text */
#my-diagram .node .label {
  color: white;
  font-family: 'Inter', sans-serif;
}

/* Style edges */
#my-diagram .edgePath path {
  stroke: #6366f1;
  stroke-width: 2px;
}
```

### Dark Mode CSS Override

Apply a dark look to any Mermaid diagram without using the built-in dark theme:

```css
.dark-diagram .mermaid svg {
  background: #1f2937;
  border-radius: 8px;
  padding: 16px;
}
.dark-diagram .mermaid .node rect,
.dark-diagram .mermaid .node circle,
.dark-diagram .mermaid .node polygon {
  fill: #374151;
  stroke: #6b7280;
}
.dark-diagram .mermaid .nodeLabel {
  color: #f9fafb;
}
.dark-diagram .mermaid .edgePath path {
  stroke: #9ca3af;
}
```

## Practical Brand Customization Example

Here's a complete example customizing Mermaid to match a purple brand palette:

```
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#7c3aed',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#6d28d9',
    'secondaryColor': '#ede9fe',
    'tertiaryColor': '#f5f3ff',
    'lineColor': '#8b5cf6',
    'background': '#fafafa',
    'titleColor': '#4c1d95',
    'edgeLabelBackground': '#ede9fe',
    'fontFamily': 'system-ui, sans-serif'
  }
}}%%
flowchart LR
    subgraph Customer Journey
        A([Visit]) --> B[Browse]
        B --> C{Interested?}
        C -->|Yes| D[Sign Up]
        C -->|No| E([Exit])
        D --> F[Onboard]
        F --> G([Active User])
    end
```

## Quick Reference: All 5 Themes Side by Side

### Default Theme
```
%%{init: {'theme': 'default'}}%%
graph LR
    A[Node A] --> B[Node B] --> C[Node C]
```
**Best for:** Standard technical documentation, GitHub READMEs

### Neutral Theme
```
%%{init: {'theme': 'neutral'}}%%
graph LR
    A[Node A] --> B[Node B] --> C[Node C]
```
**Best for:** Professional docs, minimal aesthetic, mixed content pages

### Dark Theme
```
%%{init: {'theme': 'dark'}}%%
graph LR
    A[Node A] --> B[Node B] --> C[Node C]
```
**Best for:** Dark mode sites, terminal/CLI documentation, developer portals

### Forest Theme
```
%%{init: {'theme': 'forest'}}%%
graph LR
    A[Node A] --> B[Node B] --> C[Node C]
```
**Best for:** Environmental projects, healthcare, non-tech audiences

### Base Theme
```
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#e11d48'}}}%%
graph LR
    A[Node A] --> B[Node B] --> C[Node C]
```
**Best for:** Brand-aligned diagrams, full custom control

## Tips and Common Pitfalls

**Tip 1: Use \`base\` for custom brands.** The \`default\` and other themes have opinionated styles that can clash with custom variables. Starting from \`base\` gives you a clean slate.

**Tip 2: Test across diagrams.** Theme variables apply differently to flowcharts vs. sequence diagrams vs. class diagrams. Test your theme on each type you use.

**Tip 3: Respect accessibility.** Ensure sufficient contrast between text and background colors. A color that looks great might fail WCAG contrast ratio requirements.

**Tip 4: Don't over-style.** The goal of a diagram is to communicate. Heavy customization can make diagrams harder to read. When in doubt, keep it simple.

**Pitfall: \`init\` placement.** The \`%%{init: ...}%%\` directive must be the very first line of your diagram — not after any other code.

**Pitfall: JSON formatting.** Theme variable values in the init directive must be valid JSON. Use double quotes for strings, and don't use trailing commas.

## Conclusion

Mermaid's theming system gives you everything from one-line theme switches to surgical CSS overrides. For most projects, picking the right built-in theme (likely \`neutral\` or \`dark\`) is all you need. When brand alignment matters, the \`base\` theme plus \`themeVariables\` lets you match any design system without writing CSS.

The init directive syntax means your theme configuration lives inside the diagram definition itself — keeping everything self-contained and portable across platforms.

## Custom Theme Variables Reference

When using \`theme: 'base'\`, you can override these key variables:

```
%%{init: {'theme': 'base', 'themeVariables': {
    'primaryColor': '#4f46e5',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#3730a3',
    'lineColor': '#6b7280',
    'secondaryColor': '#f3f4f6',
    'tertiaryColor': '#e0e7ff',
    'background': '#ffffff',
    'mainBkg': '#4f46e5',
    'nodeBorder': '#3730a3',
    'clusterBkg': '#ede9fe',
    'titleColor': '#1f2937',
    'edgeLabelBackground': '#f9fafb',
    'fontSize': '16px'
}}}%%
graph TD
    A[Styled with custom brand colors] --> B[Consistent with design system]
```

## Theming for Different Documentation Contexts

### Light and Dark Mode Auto-Switching

For documentation sites with theme toggle (like Docusaurus), configure Mermaid to respond to the system theme:

```javascript
// In docusaurus.config.js
themeConfig: {
  mermaid: {
    theme: {
      light: 'neutral',
      dark: 'dark',
    },
  },
},
```

Users who prefer dark mode will automatically see dark diagrams.

### GitHub README Theming

GitHub automatically applies light/dark themes to Mermaid diagrams based on the user's GitHub settings. You don't need to configure anything — GitHub handles it automatically using the \`default\` and \`dark\` themes.

If you want specific control over how your diagram looks on GitHub, use \`%%{init: {'theme': 'neutral'}}%%\` — it looks clean in both light and dark contexts.

### Presentation Diagrams

For slides or presentations, the \`forest\` theme often looks best on a white background, while \`dark\` works well on dark slide backgrounds:

```
%%{init: {'theme': 'forest', 'themeVariables': {'fontSize': '20px'}}}%%
flowchart LR
    A[Slide-ready] --> B[Larger font] --> C[Clean colors]
```

## Exporting Themed Diagrams

Once you're happy with your theme, export diagrams as SVG or PNG using the Mermaid CLI:

```bash
npm install -g @mermaid-js/mermaid-cli

# Export with default theme
mmdc -i diagram.mmd -o diagram.svg

# Export with specific theme
mmdc -i diagram.mmd -o diagram.svg --theme dark

# Export at higher resolution
mmdc -i diagram.mmd -o diagram.png --width 2000
```

The exported SVG preserves all theme colours and can be included in slide decks, PDFs, or documentation sites that don't natively support Mermaid.

## Conclusion

Mermaid themes give you control over how your diagrams look without sacrificing the simplicity of text-based syntax. Use built-in themes for quick consistency, and reach for custom \`themeVariables\` when you need to match a specific brand or design system. The init directive syntax means your theme configuration lives inside the diagram definition itself — keeping everything self-contained and portable.

[Try all these themes in our free Mermaid Live Editor →](/)
\`
  },
  {
    slug: "mermaid-vs-plantuml",
    title: "Mermaid.js vs PlantUML — Which Diagrams-as-Code Tool Should You Use?",
    description: "Compare Mermaid.js and PlantUML on syntax, diagram types, rendering, integration, and performance. Find out which diagrams-as-code tool is right for your team.",
    date: "2026-03-27",
    keywords: ["mermaid vs plantuml", "plantuml vs mermaid", "diagrams as code comparison", "best diagram tool", "mermaid or plantuml", "plantuml alternative", "mermaid.js comparison"],
    content: `
## Two Giants of Diagrams as Code

If you've decided to write your diagrams as code — congratulations, you've made the right call. Version control, diff-friendly docs, and no drag-and-drop grief. But now you face a new decision: **Mermaid.js or PlantUML?**

Both tools let you describe diagrams in plain text and render them as images. Both are open-source and widely adopted. Yet they feel completely different to use, have different strengths, and suit different teams. This guide gives you a thorough, honest comparison so you can make the right choice.

## A Quick Introduction to Each

### Mermaid.js

Mermaid is a **JavaScript-based** diagramming library that renders diagrams client-side in the browser. It uses a clean, human-readable syntax inspired by Markdown, and it integrates natively with GitHub, GitLab, Notion, Obsidian, Docusaurus, and MkDocs.

```
graph TD
    A[Client] --> B[API]
    B --> C[(Database)]
```

### PlantUML

PlantUML is a **Java-based** tool that generates diagrams on the server side, producing PNG, SVG, or ASCII art. It's been around since 2009, has a massive feature set, and is the dominant tool in enterprise and Java-heavy teams. It requires a Java runtime (or a remote server) to render diagrams.

```
@startuml
[Client] --> [API]
[API] --> [Database]
@enduml
```

## Syntax Comparison

This is where the tools feel most different.

### Flowcharts

**Mermaid:**

```
flowchart TD
    Start([Begin]) --> Input[Read data]
    Input --> Validate{Valid?}
    Validate -->|Yes| Process[Process data]
    Validate -->|No| Error[Show error]
    Process --> End([Done])
    Error --> Input
```

**PlantUML:**

```
@startuml
start
:Read data;
if (Valid?) then (Yes)
  :Process data;
else (No)
  :Show error;
  :Read data;
endif
stop
@enduml
```

**Verdict:** PlantUML's activity diagram syntax is more expressive for complex flows with explicit control structures (\`if/else\`, \`while\`). Mermaid's flowchart syntax is more visual and readable at a glance, but achieves conditional logic through diamond nodes rather than language constructs.

### Sequence Diagrams

**Mermaid:**

```
sequenceDiagram
    participant C as Client
    participant A as API
    participant D as Database

    C->>+A: POST /login
    A->>+D: SELECT user
    D-->>-A: User found
    A-->>-C: JWT token
```

**PlantUML:**

```
@startuml
participant Client as C
participant API as A
participant Database as D

C -> A: POST /login
activate A
A -> D: SELECT user
activate D
D --> A: User found
deactivate D
A --> C: JWT token
deactivate A
@enduml
```

**Verdict:** Mermaid wins here for conciseness. The \`+/-\` activation syntax is far cleaner than PlantUML's explicit \`activate/deactivate\` blocks. Both tools produce comparable output for sequence diagrams.

### Class Diagrams

**Mermaid:**

```
classDiagram
    class Animal {
        +String name
        +makeSound() void
    }
    class Dog {
        +fetch() void
    }
    Animal <|-- Dog
```

**PlantUML:**

```
@startuml
class Animal {
  +String name
  +makeSound()
}
class Dog {
  +fetch()
}
Animal <|-- Dog
@enduml
```

**Verdict:** Very similar — both follow UML class diagram conventions closely. PlantUML has more UML-specific features (namespaces, packages, notes on relationships), while Mermaid's output is cleaner by default.

### ER Diagrams

**Mermaid:**

```
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        int id PK
        string name
        string email UK
    }
    ORDER {
        int id PK
        int customer_id FK
        date created_at
    }
```

**PlantUML:**

```
@startuml
entity CUSTOMER {
  * id : int <<PK>>
  --
  * name : varchar
  * email : varchar <<UK>>
}
entity ORDER {
  * id : int <<PK>>
  --
  * customer_id : int <<FK>>
  * created_at : date
}
CUSTOMER ||--o{ ORDER : places
@enduml
```

**Verdict:** Both are capable. Mermaid's cardinality notation for ER diagrams is identical to PlantUML's. PlantUML's entity notation (\`* required\` vs optional) offers a bit more expressiveness for data modeling.

## Diagram Types Supported

| Diagram Type | Mermaid | PlantUML |
|---|---|---|
| Flowchart / Activity | ✅ | ✅ |
| Sequence | ✅ | ✅ |
| Class (UML) | ✅ | ✅ |
| State | ✅ | ✅ |
| ER / Database | ✅ | ✅ |
| Gantt | ✅ | ✅ |
| Pie chart | ✅ | ✅ |
| Mind map | ✅ | ✅ |
| Git graph | ✅ | ❌ |
| Timeline | ✅ | ❌ |
| Quadrant chart | ✅ | ❌ |
| User journey | ✅ | ❌ |
| Component / Deployment (UML) | ❌ | ✅ |
| Use case | ❌ | ✅ |
| Object diagram | ❌ | ✅ |
| Network / Nwdiag | ❌ | ✅ |
| Timing diagram | ❌ | ✅ |
| JSON / YAML visualizer | ❌ | ✅ |
| Wireframes (Salt) | ❌ | ✅ |
| Math / LaTeX | ❌ | ✅ |

**Verdict:** PlantUML wins on total diagram count, especially for UML-heavy use cases. Mermaid covers more modern diagram types (git graphs, timelines, quadrant charts, journey maps) that PlantUML lacks.

## Rendering: Browser vs Server

This is a fundamental architectural difference.

### Mermaid — Client-Side Rendering

Mermaid is a JavaScript library. Diagrams render in the browser using JavaScript. This means:

- **No server required** — Embed Mermaid.js from a CDN and it just works
- **No Java needed** — No JVM, no installation complexity
- **Native platform support** — GitHub, GitLab, Notion, Obsidian render Mermaid without plugins
- **Lightweight integration** — One \`<script>\` tag and you're done

### PlantUML — Server-Side Rendering

PlantUML is a Java application. Rendering requires:

- A **local Java runtime** (\`java -jar plantuml.jar\`)
- Or a **remote PlantUML server** (e.g., \`https://www.plantuml.com/plantuml\`)
- Or a **CI/CD job** that runs PlantUML and commits the output images

This adds complexity, especially for teams that don't already have Java in their toolchain. However, server-side rendering also means:

- **Consistent output** regardless of browser/OS
- **Better performance** for very large diagrams
- **Support for local fonts and custom styles** more easily

**Verdict:** Mermaid wins for ease of setup. PlantUML wins for teams already running Java infrastructure.

## Platform Integration

### Mermaid

Native support (no plugins) in:
- **GitHub** — Renders in Markdown files, issues, PRs, and discussions
- **GitLab** — Native Markdown rendering
- **Notion** — Code blocks with "mermaid" language
- **Obsidian** — Built-in support
- **Docusaurus** — Official \`@docusaurus/theme-mermaid\` package
- **MkDocs** — \`mkdocs-mermaid2-plugin\`
- **Confluence** — Via third-party plugins

### PlantUML

Plugin-based support in:
- **GitHub** — Requires CI/CD to pre-render images, or third-party GitHub Actions
- **GitLab** — Native support for PlantUML blocks (requires PlantUML server config)
- **Confluence** — Official and third-party plugins; well-established
- **Jira** — Via Confluence + PlantUML integration
- **IntelliJ / JetBrains IDEs** — Native PlantUML plugin
- **VS Code** — PlantUML extension with preview
- **Sphinx** — \`sphinxcontrib-plantuml\`

**Verdict:** Mermaid wins for modern web platforms (GitHub, Notion, Obsidian). PlantUML wins for enterprise platforms and JetBrains IDE users.

## Rendering Quality and Layout

### Mermaid Layout

Mermaid uses automatic graph layout algorithms (Dagre for flowcharts, specific engines for other types). The layout is handled client-side and can sometimes produce suboptimal results for complex graphs — crossing edges, cramped layouts, or unexpected positioning.

You have limited control over layout: you can set direction (TD, LR, BT, RL) and add hints via edge lengths, but you can't position specific nodes manually.

### PlantUML Layout

PlantUML uses **Graphviz** (for most diagram types) or its own rendering engine. Graphviz is a mature, well-tuned layout engine that generally produces cleaner layouts for complex graphs. PlantUML also supports layout hints like \`together\`, \`hidden\` edges for positioning, and \`skinparam\` for detailed visual control.

**Verdict:** PlantUML generally produces better layouts for complex diagrams with many nodes and edges. For simple to moderately complex diagrams, both are comparable.

## Theming and Styling

### Mermaid Styling

```
%%{init: {'theme': 'dark', 'themeVariables': {
  'primaryColor': '#4f46e5',
  'primaryTextColor': '#fff',
  'lineColor': '#6366f1'
}}}%%
graph TD
    A --> B --> C
```

Mermaid has 5 built-in themes (\`default\`, \`dark\`, \`neutral\`, \`forest\`, \`base\`) and supports theme variables and CSS overrides. The \`base\` theme is fully customizable. Per-diagram theme overrides work via init directives.

### PlantUML Styling

```
@startuml
skinparam backgroundColor #FEFEFE
skinparam component {
  BackgroundColor #4f46e5
  FontColor #ffffff
  BorderColor #3730a3
  FontSize 14
}
[Component A] --> [Component B]
@enduml
```

PlantUML's \`skinparam\` system is extremely granular — you can control colors, fonts, borders, shadows, arrows, and more for every element type. It supports custom styles, themes (via \`!theme\`), and preprocessor includes.

**Verdict:** PlantUML wins on styling depth and control. Mermaid's theming is simpler but sufficient for most documentation use cases.

## Developer Experience

### Learning Curve

Mermaid's syntax is designed to be approachable. A developer with no prior knowledge can write a working flowchart in 5 minutes. The syntax reads almost like plain English:

```
flowchart LR
    Browser -->|HTTP| Server
    Server -->|SQL| Database
```

PlantUML's syntax is more verbose and requires learning PlantUML-specific conventions. The upside is more power; the downside is a steeper initial learning curve.

### Tooling

**Mermaid:**
- Live browser editors (mermaideditor.lol, mermaid.live)
- VS Code extensions
- CLI via \`@mermaid-js/mermaid-cli\` (npm package, no Java)

**PlantUML:**
- VS Code PlantUML extension (excellent live preview)
- IntelliJ / JetBrains built-in support
- PlantUML.com web editor
- CLI via \`plantuml.jar\` (requires Java)

**Verdict:** Mermaid is easier to get started with and has a lower tooling overhead. PlantUML has better IDE integration in JetBrains products.

## Performance at Scale

For teams with hundreds of diagrams:

**Mermaid** renders client-side, so each page load triggers rendering. Very large or complex diagrams can cause browser jank. For documentation sites, pre-rendering to SVG at build time is possible with the CLI.

**PlantUML** pre-renders at build time (or server-side), so pages load pre-generated images. This is faster for readers but adds build complexity. PlantUML handles very large UML diagrams better than Mermaid.

## Which Tool Should You Choose?

### Choose Mermaid.js when:

- Your team **doesn't use Java** in their toolchain
- You want diagrams on **GitHub, Notion, or Obsidian** without plugins
- You need **git graphs, timelines, journey maps, or quadrant charts**
- You want the **lowest possible setup friction**
- Your audience is developers who are comfortable with Markdown
- You're building a **documentation site** with Docusaurus or MkDocs
- You prioritize **ease of use** over layout precision

### Choose PlantUML when:

- You're in a **Java or enterprise** environment where Java is already standard
- You need **complete UML coverage** (use case, component, deployment, timing diagrams)
- You use **JetBrains IDEs** and want excellent native integration
- You need **pixel-perfect layout control** with skinparam
- You're documenting a **large, complex system** where Graphviz layouts outperform Dagre
- Your team uses **Confluence** extensively (PlantUML has mature Confluence plugins)
- You need **LaTeX math** in your diagrams

### The Hybrid Approach

Many teams use both:

- **Mermaid** for developer-facing docs: READMEs, GitHub wiki, architecture notes
- **PlantUML** for formal UML documentation and Confluence pages

There's no rule that says you must pick one. The tools solve overlapping but not identical problems.

## Migration Between the Tools

If you're already using PlantUML and want to migrate to Mermaid (or vice versa), there's no automatic conversion tool. You'll need to rewrite diagrams manually. The effort depends on diagram complexity — simple flowcharts are quick to rewrite; large UML class hierarchies take more time.

A pragmatic approach: migrate diagrams when they need updates anyway. Don't rewrite working diagrams just to change tools.

## Summary Table

| Criteria | Mermaid.js | PlantUML |
|---|---|---|
| Setup complexity | Low (JS library) | Medium (needs Java) |
| Syntax readability | High | Medium |
| Learning curve | Low | Medium |
| Diagram types | 13+ | 20+ |
| UML completeness | Partial | Full |
| Modern diagram types | More | Fewer |
| GitHub native | ✅ | ❌ |
| Notion / Obsidian | ✅ | ❌ |
| Confluence | Plugin | Plugin (mature) |
| JetBrains IDE | Extension | Native |
| Layout quality | Good | Excellent |
| Styling control | Moderate | Extensive |
| Browser rendering | ✅ | ❌ |
| Performance at scale | Good | Better |
| Open source | ✅ | ✅ |
| Cost | Free | Free |

## Conclusion

Both Mermaid.js and PlantUML are excellent tools for diagrams as code. The right choice comes down to your environment, your team's background, and the platforms you work with.

If you're a developer working primarily in GitHub, building docs with Docusaurus or MkDocs, or working in a JavaScript-heavy environment, **Mermaid is the clear winner** — lower setup friction, better platform integration, and a syntax that feels natural.

If you're in an enterprise environment, working heavily in Confluence or JetBrains IDEs, or need the full expressiveness of UML, **PlantUML is the stronger choice** — it's been battle-tested for 15+ years and offers unmatched depth.

When in doubt, try Mermaid first. It gets out of your way and lets you focus on what actually matters: communicating ideas visually.

[Try Mermaid.js in our free online editor →](/)
\`,
  },
  {
    slug: "mermaid-subgraph-guide",
    title: "Mermaid Subgraphs: Group, Nest & Style Diagram Sections",
    description: "Master Mermaid.js subgraphs to group related nodes, nest containers, set per-subgraph directions, and build cleaner architecture diagrams. Includes real-world examples.",
    date: "2026-04-04",
    keywords: ["mermaid subgraph", "mermaid subgraph tutorial", "mermaid nested subgraph", "mermaid group nodes", "mermaid flowchart subgraph", "mermaid cluster"],
    content: `
## What Are Subgraphs in Mermaid?

When a flowchart grows beyond a handful of nodes, it quickly becomes hard to read. Nodes scatter across the diagram with no sense of belonging. **Subgraphs** solve this by letting you group related nodes inside a labeled container — similar to how a bounding box or swim lane works in traditional diagramming tools.

Subgraphs are one of the most powerful features in Mermaid's flowchart syntax. They let you:

- **Group nodes by service, team, or layer** (frontend, backend, database)
- **Nest containers** for microservice architectures and cloud diagrams
- **Set independent layout directions** per section
- **Connect entire groups** to other nodes or groups
- **Style containers** with custom colors and borders

If you've been writing flat flowcharts and wondering why they look cluttered, subgraphs are the answer.

## Basic Subgraph Syntax

A subgraph is declared with the \`subgraph\` keyword, followed by an optional ID and title, and closed with \`end\`:

```
flowchart TD
    subgraph Frontend
        A[React App] --> B[API Client]
    end
    subgraph Backend
        C[Express Server] --> D[(PostgreSQL)]
    end
    B --> C
```

The key rules:
- **\`subgraph [id] ["title"]\`** — Opens a subgraph. ID is used for linking; title is displayed.
- **\`end\`** — Closes the subgraph.
- Nodes inside a subgraph are laid out within the container.
- You can still draw edges **between** nodes across different subgraphs.

### ID vs Title

If you want a subgraph title with spaces, use quotes:

```
flowchart LR
    subgraph fe["Frontend Layer"]
        A[React]
    end
    subgraph be["Backend Layer"]
        B[Node.js]
    end
    A --> B
```

Here \`fe\` and \`be\` are the IDs (used in edges), and \`"Frontend Layer"\` / \`"Backend Layer"\` are the displayed titles.

You can also omit the ID and just provide a title — Mermaid generates one internally:

```
flowchart TD
    subgraph "API Services"
        A[Auth] --> B[Users]
    end
```

## Connecting Subgraphs to Nodes and Other Subgraphs

You can draw edges from a **node to a subgraph** or from a **subgraph to another subgraph**. Mermaid treats the subgraph as a unit when used in an edge:

```
flowchart LR
    Client([Browser]) --> fe

    subgraph fe["Frontend"]
        React[React App]
    end

    subgraph be["Backend"]
        API[REST API] --> DB[(Database)]
    end

    fe --> be
```

Here, the edge \`fe --> be\` connects the two containers directly. Mermaid draws the arrow from the outer boundary of the first subgraph to the second.

### Connecting Subgraph to Specific Nodes

You can also connect a subgraph to a specific node inside another subgraph:

```
flowchart TD
    subgraph Client
        Browser[Web Browser]
    end
    subgraph Server
        Gateway[API Gateway] --> App[Application]
        App --> DB[(PostgreSQL)]
    end
    Browser --> Gateway
```

Mixing subgraph-to-subgraph and node-to-node edges in the same diagram is perfectly valid.

## Nested Subgraphs

Subgraphs can be nested inside other subgraphs to reflect hierarchical architectures:

```
flowchart TB
    subgraph Cloud["AWS Cloud"]
        subgraph VPC["VPC (172.16.0.0/16)"]
            subgraph Public["Public Subnet"]
                ALB[Load Balancer]
                NAT[NAT Gateway]
            end
            subgraph Private["Private Subnet"]
                ECS[ECS Service]
                RDS[(RDS Database)]
                Redis[(ElastiCache)]
            end
        end
        S3[(S3 Bucket)]
        CloudFront[CloudFront CDN]
    end

    Internet([Internet]) --> CloudFront
    CloudFront --> ALB
    ALB --> ECS
    ECS --> RDS
    ECS --> Redis
    ECS --> S3
    NAT --> Internet
```

Nesting depth is technically unlimited, but **two to three levels** is the practical maximum before diagrams become hard to read. Use nesting to show **genuine hierarchy** — cloud region → VPC → subnet → service — not just for visual grouping.

## Per-Subgraph Direction

One of the most underused Mermaid features: each subgraph can have its **own layout direction**, independent of the root flowchart:

```
flowchart TB
    subgraph RequestPath["Request Path (left-to-right)"]
        direction LR
        Client([Client]) --> LB[Load Balancer] --> API[API Server]
    end

    subgraph DataLayer["Data Layer (top-to-bottom)"]
        direction TB
        API2[API Server] --> Cache[(Redis)]
        API2 --> DB[(PostgreSQL)]
    end

    API --> API2
```

This is powerful for diagrams where **different sections have different natural flow directions**. A request pipeline flows left-to-right, but a data hierarchy flows top-to-bottom. Combining both in one diagram — each section with its own direction — produces a far more readable result than forcing everything into a single direction.

## Practical Example: Three-Tier Web Architecture

```
flowchart TB
    subgraph "Presentation Tier"
        Browser[Web Browser]
        MobileApp[Mobile App]
    end

    subgraph "Application Tier"
        direction LR
        Gateway[API Gateway] --> Auth[Auth Service]
        Gateway --> Users[User Service]
        Gateway --> Orders[Order Service]
    end

    subgraph "Data Tier"
        direction LR
        UsersDB[(Users DB)] 
        OrdersDB[(Orders DB)]
        Cache[(Redis Cache)]
        Queue[Message Queue]
    end

    Browser --> Gateway
    MobileApp --> Gateway
    Auth --> UsersDB
    Users --> UsersDB
    Users --> Cache
    Orders --> OrdersDB
    Orders --> Queue
```

This is a clean, scannable architecture diagram. A developer joining the team instantly understands the three tiers and which services connect to which data stores.

## Practical Example: Microservices System

```
flowchart LR
    Client([External Client])

    subgraph Edge["Edge Layer"]
        direction TB
        CDN[CDN] --> WAF[WAF]
        WAF --> Gateway[API Gateway]
    end

    subgraph Services["Core Services"]
        direction TB
        AuthSvc[Auth Service]
        UserSvc[User Service]
        ProductSvc[Product Service]
        OrderSvc[Order Service]
        NotifSvc[Notification Service]
    end

    subgraph Infra["Infrastructure"]
        direction TB
        subgraph Databases["Databases"]
            UserDB[(Users)]
            ProductDB[(Products)]
            OrderDB[(Orders)]
        end
        subgraph Messaging["Messaging"]
            Kafka[Kafka]
        end
        subgraph Cache["Caching"]
            Redis[(Redis)]
        end
    end

    Client --> CDN
    Gateway --> AuthSvc
    Gateway --> UserSvc
    Gateway --> ProductSvc
    Gateway --> OrderSvc
    UserSvc --> UserDB
    UserSvc --> Redis
    ProductSvc --> ProductDB
    OrderSvc --> OrderDB
    OrderSvc --> Kafka
    Kafka --> NotifSvc
```

## Styling Subgraphs

### Using classDef

Apply classes to subgraph container backgrounds and borders:

```
flowchart TB
    subgraph frontend["Frontend"]:::feStyle
        A[React]
        B[Next.js]
    end
    subgraph backend["Backend"]:::beStyle
        C[Node.js]
        D[(PostgreSQL)]
    end

    A --> C
    B --> C
    C --> D

    classDef feStyle fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    classDef beStyle fill:#dcfce7,stroke:#22c55e,stroke-width:2px,color:#14532d
```

The \`:::className\` syntax attaches a class to the subgraph container itself, letting you visually distinguish groups by color.

### Styling Individual Nodes Inside Subgraphs

Nodes inside subgraphs are styled just like any other node:

```
flowchart TD
    subgraph prod["Production"]
        A[Web Server]:::critical
        B[(Primary DB)]:::critical
    end
    subgraph standby["Standby"]
        C[Replica Server]
        D[(Replica DB)]
    end
    A -->|replicates| C
    B -->|replicates| D

    classDef critical fill:#fef2f2,stroke:#ef4444,stroke-width:2px
```

### Theme-Aware Subgraph Colors

If your diagrams are embedded on a site with light/dark mode, use Mermaid's theme variables instead of hard-coded colors so they adapt automatically:

```
%%{init: {'theme': 'base', 'themeVariables': {
    'clusterBkg': '#f0f9ff',
    'clusterBorder': '#0ea5e9',
    'titleColor': '#0c4a6e'
}}}%%
flowchart TB
    subgraph A["Service Group A"]
        Node1[Service 1]
        Node2[Service 2]
    end
    subgraph B["Service Group B"]
        Node3[Service 3]
    end
    A --> B
```

The \`clusterBkg\` and \`clusterBorder\` variables control all subgraph containers globally.

## Subgraph Gotchas and Common Mistakes

### 1. Missing \`end\` keyword

Every \`subgraph\` must have a matching \`end\`. Forgetting it causes a parse error:

```
%% WRONG — missing end
flowchart TD
    subgraph A
        Node1 --> Node2

subgraph B
    Node3
end
```

```
%% CORRECT
flowchart TD
    subgraph A
        Node1 --> Node2
    end
    subgraph B
        Node3
    end
```

### 2. Node IDs Must Be Globally Unique

Even if two nodes are in different subgraphs, they share the same namespace. \`A\` inside "Frontend" and \`A\` inside "Backend" is the **same node**:

```
%% WRONG — both subgraphs share node "A"
flowchart TD
    subgraph Frontend
        A[React] --> B[Redux]
    end
    subgraph Backend
        A[Express] --> C[(DB)]
    end
```

```
%% CORRECT — unique IDs
flowchart TD
    subgraph Frontend
        feReact[React] --> feRedux[Redux]
    end
    subgraph Backend
        beExpress[Express] --> beDB[(DB)]
    end
```

### 3. Connecting to a Subgraph ID vs. a Node ID

```
flowchart LR
    X[External] --> myGroup   %% Edge to the subgraph container
    X[External] --> A         %% Edge to node A (which may be inside a subgraph)

    subgraph myGroup
        A[Node A] --> B[Node B]
    end
```

Both are valid but produce different visual results. Arrow-to-container edges touch the container boundary; arrow-to-node edges touch the specific node.

### 4. Direction Inside Subgraphs Requires \`flowchart\`, Not \`graph\`

Per-subgraph direction only works with the \`flowchart\` keyword, not the older \`graph\` keyword:

```
%% WORKS
flowchart TB
    subgraph A
        direction LR
        X --> Y
    end

%% DOES NOT WORK (older syntax)
graph TB
    subgraph A
        direction LR
        X --> Y
    end
```

## When to Use Subgraphs

**Use subgraphs when:**
- Your diagram has **6+ nodes** and they form natural groups
- You're documenting a **layered architecture** (presentation / application / data)
- You need to show **service ownership** (team A owns these services, team B owns those)
- Your diagram represents a **cloud architecture** with regions, VPCs, and subnets
- You're showing **phase groupings** in a pipeline (build, test, deploy)

**Don't use subgraphs when:**
- Your diagram is simple enough to read without grouping
- You're adding subgraphs just for visual variety — they should reflect real structural relationships
- The nesting depth exceeds 3 levels — split the diagram instead

## Subgraphs vs. Separate Diagrams

A common question: should you group with a subgraph, or create a separate diagram for each section?

**Use subgraphs when:** The groups need to show how they connect. A microservices diagram where you want to see frontend ↔ backend ↔ database relationships benefits from showing all three in one diagram with subgraph grouping.

**Use separate diagrams when:** Each section is complex enough to deserve its own diagram. A detailed database schema doesn't belong in the same diagram as a request flow. Link between them with text references or documentation navigation.

## Complete Reference: Subgraph Syntax

```
flowchart [direction]
    %% Basic subgraph
    subgraph id["Title"]
        nodes...
    end

    %% Subgraph with per-group direction
    subgraph id2["Title 2"]
        direction LR
        nodes...
    end

    %% Nested subgraph
    subgraph outer["Outer"]
        subgraph inner["Inner"]
            nodes...
        end
    end

    %% Styled subgraph
    subgraph styled["Styled Group"]:::myClass
        nodes...
    end

    %% Edge to subgraph (touches container boundary)
    externalNode --> id

    %% Edge between subgraphs
    id --> id2

    classDef myClass fill:#fef3c7,stroke:#d97706
```

## Conclusion

Subgraphs transform flat, cluttered flowcharts into structured architecture diagrams. They're the bridge between "a bunch of nodes" and "a readable system overview." Master the basics — grouping nodes, connecting subgraphs, and using per-group directions — and your Mermaid diagrams will communicate architectures that anyone on your team can understand at a glance.

Start with a single subgraph in your next diagram to group related services, and build from there.

[Try subgraphs in our free Mermaid Live Editor →](/)
\`,
  },
  {
    slug: "mermaid-in-vscode",
    title: "How to Use Mermaid.js in VS Code: Extensions, Preview & Tips (2026)",
    description: "Learn how to create, preview, and export Mermaid.js diagrams directly in VS Code. Complete guide to the best extensions, settings, and workflow tips for developers.",
    date: "2026-03-13",
    keywords: ["mermaid vscode", "mermaid js vs code", "mermaid preview vscode", "vscode mermaid extension", "mermaid diagram vscode", "mermaid markdown vscode"],
    content: `
# How to Use Mermaid.js in VS Code: The Complete Guide

If you write code in **Visual Studio Code**, you can create and preview Mermaid.js diagrams without ever leaving your editor. VS Code has become one of the most popular environments for working with Mermaid diagrams thanks to excellent extension support and built-in Markdown preview capabilities.

In this guide, you'll learn how to set up Mermaid in VS Code, which extensions to install, and how to build an efficient diagramming workflow right inside your code editor.

## Why Use Mermaid.js in VS Code?

Developers already spend most of their time in VS Code. Adding Mermaid diagram support means you can:

- **Document architecture** alongside your code
- **Preview diagrams instantly** as you type
- **Version control** your diagrams with Git
- **Keep docs and code in sync** in the same repository
- **Skip context-switching** to external diagramming tools

Instead of opening Lucidchart or draw.io in a browser tab, you define diagrams in text and see them rendered live.

## Setting Up Mermaid in VS Code

### Step 1: Install the Mermaid Preview Extension

The most popular extension is **"Markdown Preview Mermaid Support"** by Matt Bierner. It adds Mermaid rendering to VS Code's built-in Markdown preview.

1. Open VS Code
2. Go to Extensions (\`Ctrl+Shift+X\` / \`Cmd+Shift+X\`)
3. Search for **"Markdown Preview Mermaid Support"**
4. Click **Install**

That's it. Now any Mermaid code block inside a Markdown file will render automatically in the preview pane.

### Step 2: Create Your First Diagram

Create a new file called \`docs/architecture.md\` and add:

```
graph TD
    A[User Request] --> B[API Gateway]
    B --> C[Auth Service]
    B --> D[App Server]
    D --> E[(Database)]
    D --> F[Cache Layer]
    F --> E
```

Open the Markdown preview (\`Ctrl+Shift+V\` / \`Cmd+Shift+V\`) and you'll see your flowchart rendered live.

### Step 3: Install Mermaid Syntax Highlighting

For a better editing experience, install **"Mermaid Markdown Syntax Highlighting"** — this adds syntax coloring inside Mermaid code blocks so you can spot errors faster.

Search for it in the Extensions panel and install it alongside the preview extension.

## Best VS Code Extensions for Mermaid

Here's a quick comparison of the top extensions:

**Markdown Preview Mermaid Support** — Adds Mermaid rendering to the built-in Markdown preview. Lightweight, reliable, and the most installed Mermaid extension. Best for most developers.

**Mermaid Markdown Syntax Highlighting** — Adds syntax highlighting for Mermaid code blocks in Markdown files. Makes editing much easier. Pairs perfectly with the preview extension.

**Mermaid Editor** — A dedicated Mermaid editing pane with live preview, separate from Markdown. Useful if you want to work on diagrams in isolation before embedding them.

**Mermaid Chart** — Official extension from the Mermaid team. Connects to the Mermaid Chart cloud platform for collaboration and exporting.

For most developers, installing the **first two** gives you everything you need.

## Practical Workflow: Diagrams as Code in Your Repo

The real power of Mermaid in VS Code is treating diagrams like code. Here's a workflow that works well for teams:

### 1. Create a \`docs/\` Folder

```
my-project/
├── src/
├── docs/
│   ├── architecture.md
│   ├── api-flow.md
│   └── database-schema.md
├── README.md
└── package.json
```

### 2. Document Key Flows with Mermaid

In \`docs/api-flow.md\`:

```
sequenceDiagram
    participant Client
    participant Gateway
    participant AuthService
    participant UserAPI
    participant DB

    Client->>Gateway: POST /api/users
    Gateway->>AuthService: Validate JWT
    AuthService-->>Gateway: Token Valid
    Gateway->>UserAPI: Forward Request
    UserAPI->>DB: INSERT user
    DB-->>UserAPI: Success
    UserAPI-->>Gateway: 201 Created
    Gateway-->>Client: 201 Created
```

### 3. Reference Diagrams in Your README

In your \`README.md\`, link to the detailed docs:

```markdown
## Architecture

See [Architecture Overview](docs/architecture.md) for system diagrams.
See [API Flow](docs/api-flow.md) for request lifecycle.
```

If you host your repo on **GitHub**, Mermaid blocks in Markdown files render automatically — no extra setup needed.

### 4. Review Diagrams in PRs

When someone updates a diagram, reviewers can see the text diff in the pull request. This makes architectural changes reviewable, unlike binary image files from traditional diagramming tools.

## Advanced Tips for Mermaid in VS Code

### Use Snippets for Common Patterns

Create custom VS Code snippets for diagram types you use often. Go to **File → Preferences → Configure User Snippets → markdown.json** and add:

```json
{
  "Mermaid Flowchart": {
    "prefix": "mermaid-flow",
    "body": [
      "```mermaid",
      "graph TD",
      "    A[$1] --> B[$2]",
      "    B --> C[$3]",
      "```"
    ]
  },
  "Mermaid Sequence": {
    "prefix": "mermaid-seq",
    "body": [
      "```mermaid",
      "sequenceDiagram",
      "    participant $1",
      "    participant $2",
      "    $1->>$2: $3",
      "```"
    ]
  }
}
```

Now typing \`mermaid-flow\` and pressing Tab scaffolds a flowchart instantly.

### Configure Theme for Dark Mode

If you use a dark VS Code theme, Mermaid diagrams might look off. You can configure the preview theme in your \`settings.json\`:

```json
{
  "markdown-mermaid.darkModeTheme": "dark",
  "markdown-mermaid.lightModeTheme": "default"
}
```

This ensures diagrams match your editor's appearance.

### Export Diagrams as Images

The preview extensions render diagrams in the preview pane, but sometimes you need a PNG or SVG. Options:

1. **Right-click the preview** and save/copy the rendered image
2. **Use the Mermaid CLI** (\`mmdc\`) to batch-export from the terminal
3. **Use an online editor** like [Mermaid Editor](https://mermaideditor.lol) for quick exports with more control

For quick one-off exports, an online editor is often faster than setting up the CLI.

## Mermaid in VS Code vs Online Editors

| Feature | VS Code + Extensions | Online Mermaid Editor |
|---|---|---|
| Live preview | ✅ | ✅ |
| Syntax highlighting | ✅ | ✅ |
| Git integration | ✅ Native | ❌ Manual |
| One-click export | ❌ Limited | ✅ PNG/SVG |
| No install needed | ❌ | ✅ |
| Works offline | ✅ | ❌ |
| Team collaboration | Via Git PRs | Via sharing links |

**Best approach:** Use VS Code for diagrams that live in your codebase, and an [online Mermaid editor](https://mermaideditor.lol) for quick diagrams, sharing with non-technical stakeholders, or when you need fast image exports.

## Common Issues and Fixes

**Diagram not rendering in preview?**
- Make sure you're using \`\`\`mermaid\`\`\` as the code fence language (not \`\`\`mmd\`\`\` or \`\`\`diagram\`\`\`)
- Restart the preview pane (\`Ctrl+Shift+P\` → "Markdown: Refresh Preview")

**Syntax errors showing a blank diagram?**
- Check for missing arrows (\`-->\` not \`->\`)
- Ensure node IDs don't contain special characters without brackets
- Use the [Mermaid Live Editor](https://mermaideditor.lol) to debug syntax — it shows error messages more clearly

**Preview is slow with large diagrams?**
- Split large diagrams into multiple smaller ones
- Mermaid renders client-side, so very complex diagrams (100+ nodes) can lag

## Conclusion

VS Code is one of the best environments for working with Mermaid.js diagrams. With just two extensions installed, you get live preview, syntax highlighting, and a seamless workflow that keeps your documentation next to your code.

The key advantages over standalone diagramming tools: **version control, code review, and zero context-switching.** Your diagrams evolve with your codebase, and every change is tracked in Git.

Start with a \`docs/\` folder in your next project, add a few Mermaid diagrams, and you'll never want to go back to dragging boxes in a browser.

## Advanced VS Code Mermaid Workflows

### Diagram-First Development

Try this workflow for designing new features:

1. Open a new \`.md\` file in VS Code
2. Sketch the component architecture in a class diagram
3. Sketch the API flow in a sequence diagram
4. Get feedback from teammates (share the Markdown file, GitHub renders it)
5. Only then start writing code

Diagram-first development catches design flaws before they're built in. It takes 20 minutes upfront and saves hours of refactoring.

### Multi-Diagram Architecture Documents

Create a comprehensive \`ARCHITECTURE.md\` at the root of your repo:

```markdown
# System Architecture

## System Overview

```mermaid
graph TB
    [high-level system diagram]
```

## Data Flow

```mermaid
sequenceDiagram
    [critical path flow]
```

## Database Schema

```mermaid
erDiagram
    [core tables]
```

## Deployment Pipeline

```mermaid
flowchart LR
    [CI/CD stages]
```
```

This single file gives any developer a complete system overview before they read a line of code.

### Snippet Library for Mermaid

Create VS Code user snippets for your most-used diagram templates (\`Ctrl+Shift+P\` → "Snippets: Configure Snippets" → \`markdown.json\`):

```json
{
  "Mermaid Flowchart": {
    "prefix": "mflow",
    "body": [
      "```mermaid",
      "flowchart TD",
      "    $1",
      "```"
    ],
    "description": "Insert Mermaid flowchart block"
  },
  "Mermaid Sequence": {
    "prefix": "mseq",
    "body": [
      "```mermaid",
      "sequenceDiagram",
      "    participant $1",
      "    participant $2",
      "    $1->>$2: $3",
      "```"
    ],
    "description": "Insert Mermaid sequence diagram block"
  }
}
```

Type \`mflow\` and hit Tab to get a ready-to-fill flowchart skeleton.

## Recommended VS Code Extensions for Mermaid

1. **Markdown Preview Mermaid Support** — Renders Mermaid in the built-in Markdown preview
2. **Mermaid Preview** — Dedicated preview pane for \`.mmd\` files
3. **Mermaid Markdown Syntax Highlighting** — Syntax colouring inside mermaid code fences
4. **Foam** or **Dendron** — Knowledge base tools that integrate well with Mermaid-enhanced Markdown

## Conclusion

VS Code is an excellent environment for Mermaid diagram authoring. With the right extensions, you get live preview, syntax highlighting, and a writing experience that keeps you in your text editor. Since every diagram is plain text, every change is tracked in Git — giving you a complete audit trail of how your documentation evolved.

Start with a \`docs/\` folder in your next project, add a few Mermaid diagrams, and you'll never want to go back to dragging boxes in a browser.

[Try Mermaid diagrams in our free online editor →](/)
\`
  },
  },
  {
    slug: "mermaid-in-gitlab",
    title: "How to Use Mermaid.js Diagrams in GitLab: Complete Guide",
    description: "Integrate Mermaid.js diagrams into your GitLab Markdown files, wikis, issues, and merge requests. Learn native support, configuration, and best practices for developers.",
    date: "2026-03-31",
    keywords: ["mermaid gitlab", "gitlab diagrams", "mermaid in gitlab", "gitlab mermaid support", "gitlab markdown diagrams", "mermaid documentation gitlab"],
    content: `
## Enhance Your GitLab Documentation with Mermaid.js Diagrams

GitLab is a powerful DevOps platform, and effective documentation separates good teams from great ones. Integrating **Mermaid.js diagrams** into GitLab lets you create clear, maintainable, version-controlled visuals directly alongside your code.

Whether you're mapping CI/CD pipelines, API flows, user journeys, or system architectures — Mermaid renders rich diagrams from plain text. Your diagrams live in the repo, update in the same merge request as the code, and are reviewable by the whole team.

## GitLab's Native Mermaid.js Support

GitLab provides built-in Mermaid.js support in its Markdown renderer. No plugins, no extensions, no admin configuration needed. Just use a mermaid code block.

**Mermaid diagrams render in:**
- Markdown files: \`README.md\`, \`CONTRIBUTING.md\`, \`docs/*.md\`
- Project and group wikis
- Issues and epics (descriptions and comments)
- Merge request descriptions and comments
- Snippets

## Your First Mermaid Diagram in GitLab

Wrap your Mermaid syntax in a fenced code block with \`mermaid\` as the language identifier:

```mermaid
graph TD
    A[Code Push] --> B(Run Tests)
    B --> C{Pass?}
    C -- Yes --> D(Deploy to Staging)
    C -- No --> E[Notify Developer]
    D --> F[Manual Review]
    F --> G(Deploy to Production)
```

GitLab renders this inline on save — no external tools needed.

## Practical Diagram Examples for GitLab Teams

### CI/CD Pipeline Flowchart

```mermaid
graph TD
    A[Code Push] --> B(Unit Tests)
    B --> C{Tests Pass?}
    C -- Yes --> D(Build Docker Image)
    C -- No --> E[Notify Developer]
    D --> F(Push to Registry)
    F --> G(Deploy to Staging)
    G --> H{Staging OK?}
    H -- Yes --> I[Manual Approval]
    H -- No --> E
    I --> J(Deploy to Production)
```

### API Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Frontend
    participant API
    participant DB

    User->>Frontend: Register (email, password)
    Frontend->>API: POST /register
    API->>DB: INSERT new user
    DB-->>API: User ID
    API-->>Frontend: 201 Created
    Frontend-->>User: Success
```

### Database ER Diagram

```mermaid
erDiagram
    USER ||--o{ POST : writes
    POST ||--o{ COMMENT : has
    USER {
        int id PK
        string username UK
        string email
    }
    POST {
        int id PK
        string title
        int author_id FK
        datetime published_at
    }
    COMMENT {
        int id PK
        text body
        int post_id FK
        int author_id FK
    }
```

### Project Timeline (Gantt)

```mermaid
gantt
    title Feature Development Schedule
    dateFormat YYYY-MM-DD
    section Backend
    API Endpoints  :2026-04-01, 7d
    DB Integration :after API Endpoints, 5d
    section Frontend
    UI Components  :2026-04-05, 6d
    section Testing
    QA             :crit, 2026-04-14, 5d
    Release        :milestone, 2026-04-20, 0d
```

## Best Practices

1. **Add a title** — makes every diagram self-explanatory
2. **One diagram, one concept** — break complex systems into multiple focused diagrams
3. **Update in the same MR** — diagram changes should accompany code changes
4. **Add a text summary** — helps accessibility and readers using screen readers
5. **Validate syntax first** — use [MermaidEditor.lol](https://mermaideditor.lol) before committing

## Troubleshooting

**Diagram not rendering?**
- Confirm the code fence language is \`mermaid\` (not \`js\` or \`markdown\`)
- Check for syntax errors — Mermaid is strict about colons, arrows, and brackets
- Use an [online Mermaid editor](https://mermaideditor.lol) to isolate the problem quickly

**Diagram looks different in GitLab vs the editor?**
- GitLab applies its own CSS theme — this is expected and ensures consistency
- GitLab may run a slightly older Mermaid version; avoid bleeding-edge syntax

## Using Mermaid in GitLab Wikis

GitLab wikis are Markdown-based — which means Mermaid works there too. This is ideal for long-form documentation that doesn't belong in your repo's README.

Create a wiki page called "Architecture" and embed your system overview:

```mermaid
graph TB
    subgraph Frontend
        WebApp[React SPA]
        MobileApp[React Native]
    end
    subgraph Backend
        API[GraphQL API]
        Workers[Background Workers]
    end
    subgraph Data
        DB[(PostgreSQL)]
        Queue[Redis Queue]
        Search[Elasticsearch]
    end
    WebApp & MobileApp --> API
    API --> DB & Search
    API --> Queue --> Workers
    Workers --> DB
```

Wiki pages with Mermaid diagrams are great for onboarding documentation, runbooks, and system maps that new team members can reference on day one.

## Mermaid in GitLab Issues and Merge Requests

### Issue Templates with Diagrams

Create issue templates in \`.gitlab/issue_templates/\` that include pre-built Mermaid diagrams. For example, a bug report template with a state diagram showing expected vs. actual behavior:

```mermaid
stateDiagram-v2
    [*] --> Expected
    Expected --> Actual : Bug occurs here
    Actual --> [*]

    state Expected {
        [*] --> Step1 : User clicks submit
        Step1 --> Step2 : Form validates
        Step2 --> Step3 : Data saves
    }
    state Actual {
        [*] --> Step1a : User clicks submit
        Step1a --> Error : 500 Server Error
    }
```

### Merge Request Documentation

When proposing architectural changes, add a "before and after" diagram in your MR description. Reviewers immediately see what's changing:

```mermaid
graph LR
    subgraph Before
        A1[Monolith] --> B1[(Single DB)]
    end
    subgraph After
        A2[Auth Service] --> B2[(Auth DB)]
        A3[User Service] --> B3[(User DB)]
        A4[API Gateway] --> A2 & A3
    end
```

This pattern dramatically improves MR review quality — reviewers understand the intent, not just the code diff.

## Class Diagrams for Code Design Reviews

When designing new features, include UML class diagrams:

```mermaid
classDiagram
    class BaseService {
        <<abstract>>
        #Logger logger
        +execute() Result
        #validate() bool
    }
    class UserService {
        -UserRepo repo
        +createUser(data) User
        +deleteUser(id) void
    }
    class OrderService {
        -OrderRepo repo
        -PaymentGateway gateway
        +placeOrder(items) Order
    }
    BaseService <|-- UserService
    BaseService <|-- OrderService
```

## Mermaid in GitLab CI/CD Configuration Docs

Document your \`.gitlab-ci.yml\` pipeline visually. Keep a \`docs/ci-pipeline.md\` file that mirrors the actual CI config:

```mermaid
graph LR
    subgraph Build Stage
        Lint[Lint Code] --> UnitTest[Unit Tests]
        UnitTest --> BuildImg[Build Docker Image]
    end
    subgraph Test Stage
        IntTest[Integration Tests]
        E2E[E2E Tests]
    end
    subgraph Deploy Stage
        Staging[Deploy Staging]
        Prod[Deploy Production]
    end
    BuildImg --> IntTest & E2E
    IntTest & E2E --> Staging
    Staging -->|Manual| Prod
```

When someone modifies the CI pipeline, they update this diagram in the same MR. Reviewers can verify the visual flow matches the YAML.

## User Journey Maps for Product Issues

Product managers using GitLab can include journey maps in epics and issues:

```mermaid
journey
    title New User Signup Flow
    section Landing Page
        Visit homepage: 5: User
        Click Sign Up: 4: User
    section Registration
        Fill form: 3: User
        Email verification: 2: User
    section Onboarding
        Setup profile: 3: User
        First action: 4: User
```

This makes it easy to discuss UX improvements directly in the issue tracker where development work happens.

## Comparing GitLab Mermaid Support with Other Platforms

| Feature | GitLab | GitHub | Notion | Obsidian |
|---|---|---|---|---|
| Native Mermaid | ✅ | ✅ | ✅ | ✅ |
| In Issues/MRs | ✅ | ✅ | N/A | N/A |
| Wiki Support | ✅ | ✅ | N/A | N/A |
| Dark Mode | Auto | Auto | Manual | Auto |
| CI rendering | N/A | Actions | N/A | N/A |

GitLab's Mermaid support is comprehensive — covering more surfaces (wikis, issues, MRs, snippets) than most competing platforms.

## Advanced Tips

### Keep Diagrams in Dedicated Files

For complex projects, create a \`docs/diagrams/\` directory with individual Markdown files per diagram topic. This keeps your README clean while providing deep documentation:

```
project/
├── docs/
│   ├── diagrams/
│   │   ├── architecture.md
│   │   ├── api-flows.md
│   │   ├── database-schema.md
│   │   └── deployment-pipeline.md
│   └── README.md
├── src/
└── .gitlab-ci.yml
```

### Use GitLab Snippets for Reusable Diagrams

Create GitLab snippets with common diagram templates that your team can copy-paste. Tag them with \`mermaid\` for easy discovery.

### Automate Diagram Validation

Add a CI job that validates Mermaid syntax using \`@mermaid-js/mermaid-cli\`:

```yaml
validate-diagrams:
  image: node:20
  script:
    - npm install -g @mermaid-js/mermaid-cli
    - find docs/ -name '*.md' -exec grep -l 'mermaid' {} \; | xargs -I {} mmdc -i {}
  only:
    changes:
      - docs/**/*.md
```

This catches syntax errors before they're merged.

## Conclusion

Mermaid.js is a first-class citizen in GitLab Flavored Markdown. Every diagram you write is version-controlled, reviewable in MRs, and renders beautifully without external tools. Start documenting your CI/CD pipelines, API flows, and database schemas as code — your team will thank you.

## GitLab Mermaid Diagram Checklist

Before merging an MR with Mermaid diagrams, run through this quick checklist:

- [ ] Diagram renders correctly in the GitLab preview
- [ ] Diagram is accurate (reflects the actual system, not the intended design)
- [ ] Source is readable — meaningful node IDs, not just \`A\`, \`B\`, \`C\`
- [ ] Diagram is focused — not trying to show everything in one chart
- [ ] For architecture diagrams: subgraphs group related components
- [ ] For CI/CD diagrams: matches the actual \`.gitlab-ci.yml\` stages
- [ ] If the diagram replaces a previous one: old diagram is removed

Following this checklist ensures your Mermaid diagrams add genuine value rather than becoming another form of documentation debt.

## Key Takeaways

- GitLab natively renders Mermaid in all Markdown contexts: READMEs, wikis, issues, MRs, and snippets
- No plugins or configuration required — just wrap your diagram in a mermaid code fence
- Diagrams in MR descriptions dramatically improve review quality for architectural changes
- Use subgraphs to show infrastructure boundaries, service groups, and deployment environments
- CI/CD pipeline diagrams in \`docs/\` are especially valuable — they help every developer understand the deployment process
- Include the raw Mermaid source when sharing diagrams as screenshots or exports

[Practice your Mermaid syntax in our free online editor →](/)
\`
  },
  {
    slug: "mermaid-js-in-confluence",
    title: "How to Add Mermaid.js Diagrams to Confluence",
    description: "Learn how to embed Mermaid.js diagrams in Confluence using macros and third-party apps. Step-by-step instructions and real-world examples for technical teams.",
    date: "2026-04-03",
    keywords: ["mermaid confluence", "confluence diagrams", "mermaid.js confluence", "diagrams as code confluence", "confluence mermaid macro"],
    content: `
## Why Use Mermaid.js in Confluence?

Confluence is one of the most widely used documentation platforms in enterprise teams. Its built-in diagramming tools (Gliffy, Draw.io) create binary files that are hard to version-control, diff, or update without reopening a visual editor.

**Mermaid.js changes that.** Write plain text, get a rendered diagram. Updates take seconds, not minutes. And because the source is text, you can copy-paste it anywhere — GitHub, Notion, VS Code, your docs site.

This guide covers every method to add Mermaid diagrams to Confluence.

## Method 1: Marketplace App (Confluence Cloud — Easiest)

For **Confluence Cloud**, the fastest path is a marketplace app. Search for "Mermaid" in the Atlassian Marketplace — several free and paid options are available.

**Installation:**
1. Go to **Confluence Settings → Find new apps**
2. Search for "Mermaid Diagrams" or "Markdown Macro"
3. Install your chosen app
4. On any page, insert \`/mermaid\` or \`{mermaid}\` macro
5. Paste your Mermaid syntax
6. Save — the diagram renders inline

## Method 2: HTML Macro (Data Center / Server)

For **Confluence Data Center or Server**, use the **HTML Macro** (if your admin has enabled it). This loads Mermaid.js via CDN client-side.

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<div class="mermaid">
graph TD
    A[Product Backlog] --> B[Sprint Planning]
    B --> C[Sprint Execution]
    C --> D[Sprint Review]
    D --> E[Retrospective]
    E --> B
</div>
<script>mermaid.initialize({ startOnLoad: true });</script>
```

> The HTML macro must be enabled by a Confluence administrator.

## Method 3: Export as Image (Universal Fallback)

Works in every Confluence version, no admin permission needed:

1. Build your diagram at [MermaidEditor.lol](https://mermaideditor.lol)
2. Export as **PNG** or **SVG**
3. Upload the image to Confluence
4. Add a collapsible code block with the raw Mermaid source for future edits

This gives you a visual diagram now, with the source preserved for later.

## Real-World Examples

### System Architecture

```mermaid
graph TB
    subgraph Cloud
        LB[Load Balancer]
        subgraph App Tier
            A1[API Server 1]
            A2[API Server 2]
        end
        subgraph Data Tier
            DB[(Primary DB)]
            CACHE[Redis]
        end
    end
    USERS[Users] --> LB
    LB --> A1 & A2
    A1 & A2 --> DB & CACHE
```

### Incident Response Flow

```mermaid
graph TD
    ALERT[Alert Triggered] --> SEV{Severity?}
    SEV -- P1/P2 --> PAGE[Page On-Call]
    SEV -- P3/P4 --> TICKET[Create Ticket]
    PAGE --> ACK[Acknowledge 15min]
    ACK --> INV[Investigate]
    INV --> RES{Resolved?}
    RES -- Yes --> PIR[Post-Incident Review]
    RES -- No --> ESC[Escalate to Lead]
    ESC --> INV
    PIR --> RUNBOOK[Update Runbook]
```

### Agile Sprint States

```mermaid
stateDiagram-v2
    [*] --> Backlog
    Backlog --> InProgress : Sprint Start
    InProgress --> InReview : Dev Complete
    InReview --> Done : Approved
    InReview --> InProgress : Changes Requested
    Done --> [*]
```

## Practical Examples for Enterprise Teams

### User Journey Map for Product Decisions

Product managers love journey maps — embed them directly in your Confluence product spec pages:

```mermaid
journey
    title Customer Onboarding Experience
    section Discovery
        Visit website: 4: Customer
        Read pricing page: 3: Customer
        Start free trial: 5: Customer
    section Setup
        Create account: 4: Customer
        Configure workspace: 2: Customer
        Import data: 1: Customer
    section Activation
        Complete first task: 4: Customer
        Invite team: 3: Customer
        Upgrade to paid: 5: Customer
```

### Microservice Communication Map

Enterprise architectures get complex fast. Use flowcharts with subgraphs to make them scannable:

```mermaid
graph LR
    subgraph Gateway Layer
        APIGW[API Gateway]
    end
    subgraph Core Services
        Auth[Auth Service]
        Users[User Service]
        Orders[Order Service]
        Notify[Notification Service]
    end
    subgraph Data Layer
        UserDB[(Users DB)]
        OrderDB[(Orders DB)]
        Cache[(Redis)]
        Queue[Message Queue]
    end
    APIGW --> Auth & Users & Orders
    Users --> UserDB & Cache
    Orders --> OrderDB & Queue
    Queue --> Notify
```

### Sprint Gantt Chart

Embed sprint timelines directly in your planning pages:

```mermaid
gantt
    title Sprint 23 — March 10-21
    dateFormat YYYY-MM-DD
    excludes weekends
    section Backend
    API redesign     :b1, 2026-03-10, 4d
    DB migration     :b2, after b1, 3d
    section Frontend
    New dashboard    :f1, 2026-03-10, 5d
    Mobile fixes     :f2, after f1, 3d
    section QA
    Integration test :q1, after b2 f2, 2d
    Release          :milestone, after q1, 0d
```

### Database Schema Documentation

```mermaid
erDiagram
    TENANT ||--o{ WORKSPACE : has
    WORKSPACE ||--o{ PROJECT : contains
    PROJECT ||--o{ TASK : has
    TASK }o--|| USER : assigned_to
    TENANT {
        int id PK
        string name
        string plan
    }
    WORKSPACE {
        int id PK
        int tenant_id FK
        string name
    }
    PROJECT {
        int id PK
        string title
        string status
    }
    TASK {
        int id PK
        string title
        int assignee_id FK
        date due_date
    }
    USER {
        int id PK
        string email UK
        string role
    }
```

## Confluence Templates with Mermaid

Create reusable Confluence page templates that include Mermaid diagram placeholders. Here are three high-value templates:

### Architecture Decision Record (ADR) Template

Include a context diagram showing the current state and proposed state:
- **Current Architecture** — A Mermaid flowchart of the existing system
- **Proposed Architecture** — A Mermaid flowchart showing the target state
- **Migration Path** — A Gantt chart with migration phases

### Runbook Template

Include a decision flowchart for incident response:
- **Triage Flow** — A flowchart with decision diamonds for severity classification
- **Escalation Path** — A sequence diagram showing who contacts whom
- **System Dependencies** — An architecture diagram showing what’s affected

### RFC (Request for Comments) Template

Include technical diagrams that evolve during the review process:
- **System Context** — How the proposed change fits into the broader architecture
- **Data Flow** — Sequence diagrams showing the proposed interactions
- **State Machine** — If the feature involves lifecycle states

## Mermaid vs Confluence’s Built-in Diagramming

Confluence offers built-in diagramming through Gliffy and Draw.io plugins. Here’s how Mermaid compares:

| Feature | Mermaid | Gliffy / Draw.io |
|---|---|---|
| Editing method | Text-based | Visual drag-and-drop |
| Version control | Text diffs | Binary diffs |
| Speed to create | Fast (if you know syntax) | Moderate |
| Pixel-perfect layout | No | Yes |
| Reviewable in PRs | Yes | No |
| Learning curve | Low for devs | Low for everyone |
| Non-technical users | Harder | Easier |
| Cost | Free | Paid plugins |

**Use Mermaid when** diagrams need to stay in sync with code and be reviewable by developers.

**Use Gliffy/Draw.io when** non-technical stakeholders need to create or heavily customize diagrams.

Many teams use both: Mermaid for technical docs, GUI tools for executive presentations.

## Tips for Teams

- **Create a Confluence template** with placeholder Mermaid diagrams for common doc types (architecture, runbook, RFC)
- **Always include source** — even when using screenshots, add the Mermaid code in a collapsed section
- **Name pages clearly** — "Architecture: Payment Service v2" beats "Payment Diagram"
- **Update diagrams in the same session** as the system changes they describe
- **Use Confluence labels** to tag pages with Mermaid diagrams (e.g., \`mermaid-diagram\`, \`architecture\`) for easy searching
- **Establish a diagram style guide** — agree on direction (LR vs TD), color conventions, and naming patterns across your team
- **Review diagrams quarterly** — stale diagrams are worse than no diagrams; schedule periodic reviews

## Common Pitfalls to Avoid

**Don’t embed huge diagrams.** Confluence pages with 50+ node diagrams become slow and hard to read. Split them into focused sub-diagrams.

**Don’t forget mobile.** Many teams read Confluence on tablets or phones. Keep diagrams simple enough to be legible on smaller screens.

**Don’t mix methods randomly.** Pick one primary method (marketplace app, HTML macro, or image embed) and use it consistently across your space.

**Don’t skip the source.** If you embed an image, always include the Mermaid source code somewhere on the page. Without it, updating the diagram later means recreating it from scratch.

## Conclusion

Mermaid.js brings diagrams-as-code to Confluence. Whether you use a marketplace macro, the HTML macro, or the screenshot workflow, your team can have clean, maintainable technical diagrams in the knowledge base.

The real win: diagrams become living documentation that evolves with your codebase. Start with one architecture page, add a few Mermaid diagrams, and watch your team’s documentation quality improve.

## Confluence Mermaid Quick-Start Checklist

For teams setting up Mermaid in Confluence for the first time:

- [ ] Choose your method: marketplace app, HTML macro, or image + source
- [ ] Test rendering with a simple flowchart before rolling out to the team
- [ ] Create a template page showing example diagrams for each type
- [ ] Document the chosen method in your team's engineering handbook
- [ ] Establish a convention for where diagram source is stored (always include raw Mermaid in a collapsible block)
- [ ] Schedule a 15-minute team session to walk through creating a Mermaid diagram
- [ ] Add a diagram to at least one high-traffic architecture page as proof-of-concept

Getting the first few diagrams live is the hardest part. Once the team sees how quickly they update and how much clarity they add, adoption tends to spread organically.

## Key Takeaways

- Mermaid in Confluence brings diagrams-as-code to the most widely used enterprise documentation platform
- Cloud users: search the marketplace for a Mermaid macro app — setup takes minutes
- Server/Data Center users: the HTML macro or screenshot workflow are reliable fallbacks
- Always store the Mermaid source alongside any diagram, even if it's only visible in a collapsed section
- Mermaid diagrams are text, so they benefit from Confluence's version history in a meaningful way
- Start with one high-traffic architecture page and demonstrate value before rolling out to the whole team

[Create and export Mermaid diagrams for free →](/)
\`
  },
];
