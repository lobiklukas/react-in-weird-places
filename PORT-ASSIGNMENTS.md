# Port Assignments

All demos now use ports in the 54000+ range to avoid collisions with commonly used applications.

## Current Port Configuration

| Demo | Port | URL |
|------|------|-----|
| Presentation | 54100 | http://localhost:54100 |
| React PDF | 54200 | http://localhost:54200 |
| React Three Fiber | 54300 | http://localhost:54300 |
| React Three Fiber Car | 54400 | http://localhost:54400 |
| React Email | 54500 | http://localhost:54500 |

## Files Updated

### Vite Configurations
- `packages/presentation/vite.config.ts` - Port 54100
- `packages/demo-react-pdf/vite.config.ts` - Port 54200
- `packages/demo-react-three-fiber/vite.config.ts` - Port 54300
- `packages/demo-react-three-fiber-car/vite.config.ts` - Port 54400

### Presentation Demo References
- `packages/presentation/src/slides/DemoReactPDF.svelte` - Updated to 54200
- `packages/presentation/src/slides/DemoReactEmail.svelte` - Updated to 54500
- `packages/presentation/src/slides/DemoReactThreeFiber.svelte` - Updated to 54300
- `packages/presentation/src/slides/DemoReactThreeFiberCar.svelte` - Updated to 54400

## Running the Demos

Start all demos using:
```bash
pnpm dev
```

Each demo will be available at its assigned port listed above.
