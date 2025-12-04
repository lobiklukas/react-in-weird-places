# Ink CLI Demo

This demo showcases `ink` - a custom React reconciler for building CLI applications.

## Features
- Build terminal UIs with React components
- Interactive CLI with keyboard navigation
- Stateful terminal interfaces
- Flexbox layouts in the terminal
- ANSI colors and styling

## Running the Demo
```bash
pnpm dev:ink
```

## How It Works
Ink implements a custom React reconciler that:
1. Maps React components to terminal primitives
   - `<Box>` → Terminal layout container (like `<div>`)
   - `<Text>` → Terminal text output
   - `<Newline>` → Line break
2. Uses Yoga layout engine for flexbox calculations
3. Renders to terminal stdout using ANSI escape codes
4. Handles terminal input via hooks (`useInput`)

## Demo Features
- **Interactive Menu**: Navigate with arrow keys
- **About Section**: Explains Ink's architecture
- **Counter Demo**: Auto-incrementing counter with React state
- **Technical Details**: Deep dive into reconciliation
- **Keyboard Controls**: 
  - ↑/↓: Navigate menu
  - Enter: Select option
  - Q: Quit application

## Key Components & Hooks
- `<Box>` - Layout container with flexbox
- `<Text>` - Styled text output
- `<Newline>` - Line breaks
- `useInput()` - Handle keyboard input
- `useApp()` - Access app methods (exit, etc.)
- `useStdout()` - Access stdout stream
- `useStdin()` - Access stdin stream

## Custom Reconciler Details
Ink's reconciler handles:
- Creating/updating terminal elements
- Layout calculations via Yoga
- Rendering ANSI escape sequences
- Diffing and efficient updates
- Cleanup on unmount

## Use Cases
- Interactive CLI tools
- Progress indicators
- Menu-based interfaces
- Terminal dashboards
- Build tools with live updates
