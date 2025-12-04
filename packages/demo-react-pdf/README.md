# React PDF Demo

This demo showcases `@react-pdf/renderer` - a custom React reconciler for generating PDF documents.

## Features
- Generate PDFs using React components
- Type-safe with TypeScript
- Real-time PDF preview in browser
- Flexbox-based layouts
- Custom styling API

## Running the Demo
```bash
pnpm dev:pdf
```

Opens on http://localhost:3001

## How It Works
@react-pdf/renderer implements a custom React reconciler that:
1. Maps React elements (`<Document>`, `<Page>`, `<Text>`) to PDF primitives
2. Uses Yoga layout engine for flexbox calculations
3. Renders to PDF via PDFKit

## Key Components
- `<Document>` - Root container
- `<Page>` - Individual page
- `<View>` - Layout container (like `<div>`)
- `<Text>` - Text content
- `<Image>` - Images
- `StyleSheet.create()` - Styling API
