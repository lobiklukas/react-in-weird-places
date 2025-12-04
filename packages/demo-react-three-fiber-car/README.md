# React Three Fiber Car Racing Demo

A TypeScript implementation of a 3D car racing game using React Three Fiber and Cannon.js physics engine.

## Features

- **Realistic Physics**: Cannon.js RaycastVehicle with 4-wheel suspension system
- **Multiple Camera Views**: 4 camera modes (orbit, chase, front, hood) - toggle with `C`
- **Advanced Controls**: 
  - WASD / Arrow keys for driving
  - Space for braking
  - Shift for boost mode
  - Arrow keys for stunts/flips
  - R to reset car position
- **Immersive Environment**:
  - HDR environment lighting
  - Reflective ground with MeshReflectorMaterial
  - Full race track with obstacles, ramps, and colliders
  - Dynamic barrel physics objects

## Tech Stack

- **React 18.3**
- **React Three Fiber** - React renderer for Three.js
- **@react-three/cannon** - React bindings for Cannon.js physics
- **@react-three/drei** - Useful helpers for R3F
- **Three.js 0.170** - 3D graphics library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool

## Architecture

### Hooks
- `useWheels.tsx` - Configures 4-wheel suspension physics system
- `useControls.tsx` - Keyboard input handling and vehicle control API

### Components
- `Car.tsx` - Main vehicle component with RaycastVehicle physics
- `Scene.tsx` - Scene setup with camera management
- `Ground.tsx` - Reflective ground plane with collision
- `Track.tsx` - Race track with collision boxes
- `Barrel.tsx` - Dynamic barrel obstacles
- `Ramp.tsx` - Jump ramp with trimesh collider
- `ColliderBox.tsx` - Invisible collision geometry helper

### Key Concepts

**RaycastVehicle**: Uses raycasting from wheel positions to simulate realistic vehicle physics
- Suspension springs dampen bumps
- Tire friction for traction
- Independent wheel rotation
- Chassis mass and inertia

**Camera System**: 4 views controlled by car orientation
1. Orbit (free camera)
2. Chase (behind car)
3. Front (ahead of car)
4. Hood (first-person)

## Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm run dev

# Build for production
pnpm run build
```

## Controls

- **W / ↑** - Accelerate forward
- **S / ↓** - Reverse
- **A / ←** - Steer left  
- **D / →** - Steer right
- **Space** - Brake
- **Shift** - Boost (increases engine force)
- **Arrow Keys** - Perform flips/stunts
- **C** - Cycle camera views
- **R** - Reset car to starting position

## Physics Tuning

Key physics parameters in `useWheels.tsx`:
- `suspensionStiffness: 60` - Spring stiffness
- `dampingRelaxation: 2.3` - Extension damping
- `dampingCompression: 4.4` - Compression damping
- `rollInfluence: 0.01` - Body roll (lower = less tilt)
- `maxSuspensionForce: 100000` - Max suspension force

Engine parameters in `useControls.tsx`:
- Normal force: 150
- Boost force: 275 (with Shift)
- Steering: 0.5 front, 0.1 rear (for tighter turns)

## Credits

Based on the excellent [R3F-Car-Racing](https://github.com/DanieloM83/R3F-Car-Racing) project by DanieloM83, converted to TypeScript for educational purposes.

## Part of "React in Weird Places" Series

This demo showcases how React's reconciler can be used beyond the DOM to create interactive 3D experiences with physics simulation.
