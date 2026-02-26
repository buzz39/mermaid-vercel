# Mermaid Live Editor

A production-ready, Next.js-based live editor for Mermaid diagrams. Render Flowcharts, Sequence diagrams, Gantt charts, and more directly in your browser. Export your diagrams as SVG or PNG images.

## Features

- **Live Rendering**: Type Mermaid code and see the diagram update instantly.
- **Multiple Diagrams**: Support for multiple diagrams in a single text block.
- **Themes**: Switch between Default, Forest, Dark, and Neutral themes.
- **Export Options**:
  - Download as **SVG** (vector graphics).
  - Download as **PNG** (high-quality raster image).
  - Copy SVG code to clipboard.
- **File Support**: Load `.mmd`, `.md`, or `.txt` files containing Mermaid code.
- **Error Handling**: Graceful error reporting with syntax highlighting for troubleshooting.
- **Responsive Design**: Works on desktop and mobile.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Diagramming**: [Mermaid.js](https://mermaid.js.org/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

## Getting Started

### Prerequisites

- Node.js 18+ installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mermaid-vercel.git
   cd mermaid-vercel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Enter Code**: Paste your Mermaid diagram code into the editor on the left.
   Example:
   ```mermaid
   graph TD
     A[Start] --> B{Is it working?}
     B -- Yes --> C[Great!]
     B -- No --> D[Debug]
   ```
2. **Render**: Click the **Render** button to generate the diagram.
3. **Customize**: Use the theme dropdown to change the visual style.
4. **Export**: Use the buttons above the rendered diagram to Download SVG, Download PNG, or Copy the SVG code.

## Running Tests

To run the test suite:

```bash
npm test
```

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and build the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

MIT
