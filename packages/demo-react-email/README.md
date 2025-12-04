# React Email Demo

This demo showcases `react-email` - using React components to build email templates.

## Features
- Build emails with React components
- Real-time preview during development
- Export to production-ready HTML
- Type-safe with TypeScript
- Cross-client compatibility

## Running the Demo
```bash
pnpm dev:email
```

Opens on http://localhost:3002

## How It Works
React Email uses React as a templating engine:
1. Write email templates using React components
2. Components compile to email-safe HTML (tables, inline styles)
3. Preview in real-time with the dev server
4. Export static HTML for sending

## Important Note
**React Email does NOT use a custom reconciler!** It uses React's standard rendering 
to generate static HTML strings. The magic is in the component library that provides 
email-compatible primitives.

## Email Templates Included
1. **welcome.tsx** - Welcome email with features overview
2. **technical.tsx** - Technical explanation of React Email vs custom reconcilers
3. **problematic.tsx** - ⚠️ Educational demo showing common email development mistakes (see PROBLEMATIC.md)

## Key Components
- `<Html>`, `<Head>`, `<Body>` - Document structure
- `<Container>` - Max-width wrapper
- `<Section>` - Layout sections
- `<Text>` - Paragraphs
- `<Button>` - Call-to-action buttons
- `<Row>`, `<Column>` - Grid layouts
- `<Hr>` - Horizontal rules
- `<Code>` - Code blocks
