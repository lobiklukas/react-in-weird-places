# React in Weird Places - Monorepo

A comprehensive demonstration of React custom reconcilers and non-traditional rendering targets. This monorepo contains both a technical presentation and live demos showcasing how React can render to PDFs, emails, 3D graphics, CLIs, and more.

## 📦 Packages

### Presentation
Interactive presentation built with Svelte and Reveal.js covering:
- React reconciliation deep dive
- Custom reconciler architecture
- Real-world examples and use cases

**Location**: `packages/presentation/`  
**Run**: `pnpm dev:presentation`  
**URL**: http://localhost:54100

### Demo: React PDF
Generate PDF documents using React components with `@react-pdf/renderer`.

**Location**: `packages/demo-react-pdf/`  
**Run**: `pnpm dev:pdf`  
**URL**: http://localhost:54200

**Features**:
- Type-safe PDF generation
- Flexbox-based layouts
- Custom styling API
- Real-time preview

### Demo: React Email
Build email templates with React components using `react-email`.

**Location**: `packages/demo-react-email/`  
**Run**: `pnpm dev:email`  
**URL**: http://localhost:54500

**Features**:
- Cross-client compatible HTML
- Live preview dev server
- Export to production HTML
- Email-safe components

### Demo: React Three Fiber
Create interactive 3D scenes with React and Three.js using `@react-three/fiber`.

**Location**: `packages/demo-react-three-fiber/`  
**Run**: `pnpm dev:three`  
**URL**: http://localhost:54300

**Features**:
- Declarative 3D scenes
- Interactive 3D objects
- React events in 3D
- Orbital camera controls

### Demo: Ink CLI
Build interactive terminal UIs with React using `ink`.

**Location**: `packages/demo-ink/`  
**Run**: `pnpm dev:ink`

**Features**:
- Terminal UI with React
- Keyboard navigation
- Flexbox layouts in CLI
- Stateful terminal apps

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm 8+

### Installation
```bash
# Install pnpm globally if not already installed
npm install -g pnpm

# Install all dependencies
pnpm install
```

### Running Demos

```bash
# Run all dev servers concurrently
pnpm dev

# Run individual demos
pnpm dev:presentation   # Presentation (port 54100)
pnpm dev:pdf           # React PDF demo (port 54200)
pnpm dev:email         # React Email demo (port 54500)
pnpm dev:three         # React Three Fiber demo (port 54300)
pnpm dev:car           # React Three Fiber Car demo (port 54400)
pnpm dev:ink           # Ink CLI demo (terminal)
```

### Cleanup Zombie Processes

If you cancel the dev server with Ctrl+C and processes don't get killed properly:

```bash
# Kill all remaining demo processes
pnpm cleanup

# Or run the script directly
./kill-demos.sh
```

This will kill all vite and email dev processes, and free up all demo ports.

### Building
```bash
# Build all packages
pnpm build

# Build specific package
pnpm build:presentation
```

## 📚 Project Structure

```
react-weird-places-monorepo/
├── packages/
│   ├── presentation/          # Svelte presentation
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   ├── demo-react-pdf/        # PDF generation demo
│   │   ├── src/
│   │   └── package.json
│   ├── demo-react-email/      # Email templates demo
│   │   ├── src/emails/
│   │   └── package.json
│   ├── demo-react-three-fiber/  # 3D graphics demo
│   │   ├── src/
│   │   └── package.json
│   └── demo-ink/              # CLI UI demo
│       ├── src/
│       └── package.json
├── pnpm-workspace.yaml        # pnpm workspace config
├── package.json               # Root package.json
└── README.md                  # This file
```

## 🎯 What is a Custom Reconciler?

React's reconciler is the algorithm that determines what needs to change in the UI. By implementing a custom reconciler, you can make React render to ANY target, not just the DOM:

1. **React Core**: Component logic, hooks, state management
2. **React Reconciler**: Diffing algorithm, virtual tree management
3. **Custom Renderer**: Your target-specific implementation (PDF, Canvas, CLI, etc.)

## 🔧 Technical Details

### Reconciliation Process
1. **Render Phase**: Build virtual tree from components
2. **Diff Phase**: Compare old and new trees
3. **Commit Phase**: Apply changes to target environment

### Custom Reconciler Examples
- **react-dom**: Renders to browser DOM
- **react-native**: Renders to native mobile components
- **@react-pdf/renderer**: Renders to PDF (PDFKit)
- **@react-three/fiber**: Renders to Three.js scene graph
- **ink**: Renders to terminal (stdout with ANSI codes)
- **react-email**: Static HTML generation (not a true reconciler)

## 📖 Learning Resources

Each demo package contains its own README with:
- Technical implementation details
- Key concepts and APIs
- Usage examples
- Links to official documentation

## 🛠️ Development

### Adding a New Demo
1. Create new package directory: `packages/demo-{name}/`
2. Add package.json with appropriate dependencies
3. Create src/ directory with demo code
4. Add dev script to root package.json
5. Update this README

### Workspace Commands
```bash
# Install dependency in specific package
pnpm --filter demo-react-pdf add <package>

# Run command in specific package
pnpm --filter presentation dev

# Run command in all packages
pnpm -r dev
```

## 🎨 Use Cases for Custom Reconcilers

### When to Use
- Rendering to non-DOM targets (Canvas, Terminal, PDF)
- Building interactive experiences in specialized environments
- Leveraging React's component model in new contexts
- Managing complex object graphs with React's reconciliation

### When NOT to Use
- Static HTML generation (use standard React SSR)
- Simple templating (overkill for static content)
- Performance-critical graphics (consider direct APIs)

## 🤝 Contributing

This is an educational project. Feel free to:
- Add new demo packages
- Improve existing demos
- Enhance the presentation
- Fix bugs or typos

## 📝 License

MIT

## 🙏 Credits

Built with:
- React & react-reconciler
- @react-pdf/renderer
- react-email
- @react-three/fiber
- ink
- Svelte & Reveal.js
- Vite
- TypeScript

---

**Presentation Topic**: React in Weird Places  
**Focus**: Custom Reconcilers and Alternative Rendering Targets
