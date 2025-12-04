# Monorepo Setup Complete! 🎉

## Structure Created

```
/opt/dev/edu-session/
├── packages/
│   ├── presentation/              ✅ Svelte presentation (moved from root)
│   ├── demo-react-pdf/           ✅ PDF generation with React
│   ├── demo-react-email/         ✅ Email templates with React
│   ├── demo-react-three-fiber/   ✅ 3D graphics with React
│   └── demo-ink/                 ✅ CLI interfaces with React
├── pnpm-workspace.yaml           ✅ Workspace configuration
├── package.json                  ✅ Root package with scripts
├── README.md                     ✅ Comprehensive documentation
└── .gitignore                    ✅ Git ignore rules

## What's Included

### 1. Presentation (packages/presentation)
- Original Svelte presentation with reconciliation slides
- Mermaid diagrams for technical explanations
- Geist fonts via CSS
- 56 slides covering React reconciliation

### 2. React PDF Demo (packages/demo-react-pdf)
**Tech Stack**: @react-pdf/renderer, React, Vite
**Features**:
- 2-page PDF with interactive viewer
- Demonstrates custom reconciler mapping JSX → PDF
- Explains React PDF architecture
- Real-time preview in browser

**Key Files**:
- `src/App.tsx` - PDFViewer with Document component
- `package.json` - Dependencies and scripts
- `README.md` - Technical details

### 3. React Email Demo (packages/demo-react-email)
**Tech Stack**: react-email, @react-email/components
**Features**:
- 2 email templates (welcome & technical)
- Real-time dev server preview
- Explains why React Email doesn't need a reconciler
- Email-safe HTML generation

**Key Files**:
- `src/emails/welcome.tsx` - Welcome email template
- `src/emails/technical.tsx` - Technical deep-dive email
- `package.json` - Email CLI scripts

### 4. React Three Fiber Demo (packages/demo-react-three-fiber)
**Tech Stack**: @react-three/fiber, @react-three/drei, Three.js
**Features**:
- Interactive 3D scene with Box, Sphere, Torus
- Hover/click interactions
- Orbital camera controls
- Demonstrates reconciler mapping JSX → Three.js objects

**Key Files**:
- `src/App.tsx` - 3D scene with interactive objects
- `package.json` - R3F dependencies

### 5. Ink CLI Demo (packages/demo-ink)
**Tech Stack**: ink, React
**Features**:
- Interactive terminal menu
- Keyboard navigation (arrow keys, enter, q)
- Auto-incrementing counter demo
- Technical explanation section
- Demonstrates reconciler targeting terminal/stdout

**Key Files**:
- `src/cli.tsx` - Entry point
- `src/App.tsx` - CLI app with menu system
- `package.json` - CLI scripts with tsx for dev

## Quick Start Commands

### Install Dependencies
```bash
cd /opt/dev/edu-session
pnpm install
```

### Run Individual Demos
```bash
# Presentation (Svelte + Reveal.js)
pnpm dev:presentation     # → http://localhost:5173

# React PDF (Browser PDF viewer)
pnpm dev:pdf             # → http://localhost:3001

# React Email (Email preview)
pnpm dev:email           # → http://localhost:3002

# React Three Fiber (3D scene)
pnpm dev:three           # → http://localhost:3003

# Ink CLI (Terminal UI)
pnpm dev:ink             # → Interactive terminal
```

### Build All
```bash
pnpm build
```

## Port Allocation
- **5173**: Presentation
- **3001**: React PDF
- **3002**: React Email
- **3003**: React Three Fiber
- **N/A**: Ink (terminal)

## Technical Highlights

### Custom Reconcilers Demonstrated
1. **@react-pdf/renderer**: React → PDFKit primitives
2. **@react-three/fiber**: React → Three.js scene graph
3. **ink**: React → Terminal (stdout with ANSI)

### NOT Custom Reconcilers
- **react-email**: Uses React for static HTML generation (templating)

### Reconciliation Flow (covered in presentation)
```
Component Tree
     ↓
Render Phase (build virtual tree)
     ↓
Diff Phase (compare old/new)
     ↓
Commit Phase (apply changes to target)
     ↓
Target Environment (DOM, PDF, Canvas, Terminal, etc.)
```

## Next Steps

1. **Install dependencies**: `pnpm install`
2. **Test presentation**: `pnpm dev:presentation`
3. **Try demos one-by-one**:
   - Start with PDF (visual, easy to understand)
   - Then Three Fiber (interactive, impressive)
   - Then Email (shows non-reconciler approach)
   - Finally Ink (terminal, different paradigm)

4. **During presentation**:
   - Use presentation to explain concepts
   - Live-demo each package as you discuss it
   - Show code in each `src/App.tsx`

## Educational Flow

### Recommended Order for Presentation:
1. **Intro slides** (what/why)
2. **Reconciliation deep-dive** (slides 8-18)
3. **Demo: React PDF** → Show how JSX maps to PDF
4. **Demo: React Three Fiber** → Interactive 3D with React
5. **Demo: Ink** → Terminal UIs with React
6. **Demo: React Email** → Contrast with non-reconciler approach
7. **Wrap-up** (when to use, resources)

## Files of Interest

### Presentation Code
- `packages/presentation/src/slides.svelte` (line 74+) - Reconciliation section
- `packages/presentation/src/lib/components/mermaid.svelte` - Diagram component

### Demo Code Highlights
- `packages/demo-react-pdf/src/App.tsx:18-50` - PDF Document structure
- `packages/demo-react-three-fiber/src/App.tsx:53-85` - 3D Scene setup
- `packages/demo-ink/src/App.tsx:20-35` - Terminal input handling
- `packages/demo-react-email/src/emails/welcome.tsx:25-90` - Email template

## Troubleshooting

### Dependencies not installed?
```bash
cd /opt/dev/edu-session
rm -rf node_modules packages/*/node_modules
pnpm install
```

### Port conflicts?
Edit `vite.config.ts` in each package to change ports.

### Presentation styles broken?
Check fonts loaded:
- `packages/presentation/public/fonts/GeistVF.woff2`
- `packages/presentation/public/fonts/GeistMonoVF.woff2`

## Additional Resources

Each package has its own `README.md` with:
- Technical architecture
- Key APIs and components
- Usage examples
- Links to official docs

---

**Status**: ✅ All packages created and configured  
**Ready**: Yes, run `pnpm install` then start any demo  
**Duration**: ~15 minute setup, ~60-70 minute presentation
