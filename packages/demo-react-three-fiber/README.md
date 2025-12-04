# React Three Fiber Demo

This demo showcases `@react-three/fiber` (R3F) - a custom React reconciler for Three.js.

## Features
- Build 3D scenes with React components
- Declarative Three.js API
- Interactive 3D objects with React events
- Full TypeScript support
- Orbital camera controls

## Running the Demo
```bash
pnpm dev:three
```

Opens on http://localhost:3003

## How It Works
R3F implements a custom React reconciler that:
1. Maps React components to Three.js objects
   - `<mesh>` → THREE.Mesh
   - `<boxGeometry>` → THREE.BoxGeometry
   - `<meshStandardMaterial>` → THREE.MeshStandardMaterial
2. Manages the Three.js scene graph as a React tree
3. Handles updates and reconciliation for 3D objects
4. Provides React event system for 3D interactions

## Interactive Features
- **Drag**: Orbit camera around the scene
- **Scroll**: Zoom in/out
- **Click**: Toggle object states
- **Hover**: Highlight objects

## Scene Contents
1. **Orange Box** - Hover changes color to pink, click to scale
2. **Blue Sphere** - Click to toggle color and scale
3. **Yellow Torus** - Hover to change color, wireframe rendering
4. **3D Text** - Rendered using drei's Text component

## Key Components Used
- `<Canvas>` - R3F root component (manages WebGL renderer)
- `<OrbitControls>` - Camera controls from drei
- `<Box>`, `<Sphere>`, `<Torus>` - Geometry helpers from drei
- `<Text>` - 3D text rendering
- `<ambientLight>`, `<spotLight>` - Scene lighting

## Custom Reconciler Details
R3F's reconciler handles:
- Creating/updating Three.js objects
- Attaching to scene graph
- Disposing unused objects
- Event propagation (clicks, hovers)
- Animation loop integration
