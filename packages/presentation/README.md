# React in Weird Places - Presentation

An interactive presentation about React custom renderers and unconventional use cases, built with [Animotion](https://animotion.pages.dev).

## 🎯 Presentation Overview

This presentation explores how React can be used beyond traditional web browsers:

### Topics Covered:
1. **Introduction** - What is React really?
2. **React Reconciler** - The secret sauce
3. **Traditional Targets** - react-dom & react-native
4. **Weird Places**:
   - ⌨️ Terminal/CLI (Ink)
   - 🎥 Programmatic Videos (Remotion)
   - 🎮 3D Graphics (React Three Fiber)
   - 📺 TV Platforms (React TV)
   - 🖥️ Desktop Apps (React Native Windows/macOS)
   - And more: PDFs, Emails, Figma, Hardware...
5. **How It Works** - Building custom renderers
6. **Real Examples** - Code walkthrough
7. **Key Takeaways** - What we learned
8. **Future Possibilities** - What's next?

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# or
pnpm install
```

### Running the Presentation

```bash
# Start development server
npm run dev

# or
pnpm dev
```

Open your browser at `http://localhost:5173`

**Note:** Adjust your browser zoom level because the presentation uses a custom fixed layout.

### Building for Production

```bash
# Build static files
npm run build

# Preview build
npm run preview
```

## 🎮 Controls

- **Arrow Keys** (←/→) - Navigate between slides
- **Space** - Next slide
- **Shift + Space** - Previous slide
- **Esc** - Slide overview
- **S** - Speaker notes (if available)
- **F** - Fullscreen

## 📁 Project Structure

```
react-weird-places-presentation/
├── src/
│   ├── slides.svelte        # Main presentation slides
│   ├── layout.svelte         # Slide layout wrapper
│   ├── config.ts             # Reveal.js configuration
│   ├── main.ts               # Application entry point
│   └── lib/
│       └── components/       # Reusable components
├── public/                   # Static assets
├── index.html               # HTML entry point
└── package.json
```

## 🎨 Customization

### Changing Colors
Edit `src/slides.svelte` and modify the Tailwind classes:
- `text-teal-400` - Accent color
- `bg-gray-800` - Background color for cards

### Adding Slides
Add new `<Slide>` components in `src/slides.svelte`:

```svelte
<Slide animate>
  <Layout>
    <div class="flex h-full items-center justify-center">
      <p class="text-[64px]">Your content here</p>
    </div>
  </Layout>
</Slide>
```

### Code Examples
Use the `<Code>` component for syntax-highlighted code:

```svelte
<Code lang="jsx" lines="1-5|3">
  {\`
    import React from 'react';
    
    function App() {
      return <div>Hello!</div>;
    }
  \`}
</Code>
```

## 📚 Resources Mentioned

- **React Reconciler**: [github.com/facebook/react/tree/main/packages/react-reconciler](https://github.com/facebook/react/tree/main/packages/react-reconciler)
- **Ink** (Terminal UI): [github.com/vadimdemedes/ink](https://github.com/vadimdemedes/ink)
- **Remotion** (Videos): [remotion.dev](https://remotion.dev)
- **React Three Fiber** (3D): [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
- **React Native Windows**: [microsoft.github.io/react-native-windows](https://microsoft.github.io/react-native-windows)

## 🛠️ Live Demo Examples

Want to see these in action? Check out these repositories:

1. **Ink Example**: Create a simple CLI counter
   ```bash
   npx create-ink-app my-ink-app
   ```

2. **Remotion Example**: Create a video project
   ```bash
   npx create-video@latest
   ```

3. **React Three Fiber**: Try the starter
   ```bash
   npx create-react-app my-app
   npm install three @react-three/fiber @react-three/drei
   ```

## 📝 Speaker Notes

For presenters, here are key talking points for each section:

### Introduction (Slides 1-5)
- Start with asking "What is React?"
- Most people think: web library
- Reality: it's a reconciliation engine

### React Reconciler (Slides 6-8)
- Explain the separation of concerns
- React Core ≠ React DOM
- The reconciler is the magic

### Weird Places (Slides 9-30)
- Each renderer gets 2-3 slides
- Show code example
- Mention real companies
- Emphasize production usage

### Technical Deep Dive (Slides 31-33)
- Optional: can skip if audience is non-technical
- Show simple hostConfig example
- Explain the main methods

### Wrap Up (Slides 34-40)
- Summarize key points
- Inspire creativity
- Encourage questions

## 🤝 Contributing

Feel free to:
- Add more examples
- Improve code snippets
- Fix typos
- Enhance visuals

## 📄 License

This presentation is MIT licensed. Feel free to use it for your own educational sessions!

## 🙏 Acknowledgments

- Built with [Animotion](https://animotion.pages.dev)
- Presentation framework by Joy of Code
- React documentation and community
- All the amazing custom renderer creators

---

**Happy Presenting! 🎉**

For questions or improvements, feel free to open an issue or PR.
