<script lang="ts">
	import { Slide, Step, Code, DemoFrame } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Advanced Demo: Car Racing -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🏎️</p>
				<p class="mt-8 text-[72px] font-bold">Advanced Physics</p>
				<p class="mt-4 text-[48px] text-teal-400">Car Racing with Cannon.js</p>
			</div>
		</div>
	</Layout>
</Slide>

<!-- The Problem -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">The Problem</p>
			<div class="grid grid-cols-1 gap-6 text-[24px] w-full max-w-[1100px]">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-red-500 p-6">
						<p class="text-[36px] mb-2">🔧</p>
						<p class="font-bold text-[32px]">Complex Physics Integration</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Synchronizing physics bodies with 3D models manually every frame
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-orange-500 p-6">
						<p class="text-[36px] mb-2">🎮</p>
						<p class="font-bold text-[32px]">Input Management Hell</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Handling keyboard state, applying forces, managing multiple control schemes
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-yellow-500 p-6">
						<p class="text-[36px] mb-2">⚡</p>
						<p class="font-bold text-[32px]">Performance Optimization</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Managing 60 FPS physics, collisions, rendering without React's help
						</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- High-Level Implementation -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[1100px]">
				<p class="mb-8 text-[56px] font-bold text-center">
					React Three Fiber Integration
				</p>
				<Code class="text-[28px]" lang="typescript" lines="1-18|2-7|9-13|15-18">
					{`
// Physics: Cannon.js RaycastVehicle
const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
  chassisBody,        // Car body (150kg)
  wheels,             // 4-wheel suspension
  wheelInfos          // Stiffness, damping
}))

// Controls: Keyboard → Physics
useEffect(() => {
  if (forward) vehicleApi.applyEngineForce(150, 2)
  vehicleApi.setSteeringValue(steering, 0)
}, [controls])

// Scene: 3D Models + Textures
<Canvas>
  <Environment files="envmap.hdr" />
  <Car model={carGLB} />
  <Track model={trackGLB} colliders={boxes} />
  <Ground texture={gridPNG} reflection />
</Canvas>
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Live Demo Slide -->
<Slide animate>
	<Layout>
		<div class="flex h-full w-full flex-col items-center justify-center gap-8">
			<div class="text-center">
				<h2 class="text-[64px] font-bold">🏁 Live Demo</h2>
				<p class="mt-4 text-[36px] text-teal-400">Interactive Car Racing</p>
			</div>
			<div>
				<DemoFrame
					src="http://localhost:6008"
					title="React Three Fiber Car Racing Demo"
					controls="🎮 WASD: Drive • Space: Brake • Shift: Boost • C: Camera • R: Reset"
				/>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Comprehensive Use Cases -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Production Use Cases</p>
			<div class="grid grid-cols-2 gap-6 text-[28px] max-w-[1200px]">
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🏠</div>
					<div class="text-teal-400 font-bold">Real Estate</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Zillow 3D Tours, Virtual Showrooms
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🎮</div>
					<div class="text-teal-400 font-bold">Browser Games</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Racing, FPS, Multiplayer Simulations
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🎨</div>
					<div class="text-teal-400 font-bold">Design Tools</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Bezi, CAD Software, 3D Editors
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">📦</div>
					<div class="text-teal-400 font-bold">E-commerce</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Product Configurators, AR Preview
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🎭</div>
					<div class="text-teal-400 font-bold">Avatar Creators</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Character Customization, VR
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🎓</div>
					<div class="text-teal-400 font-bold">Education</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Interactive Simulations, Training
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🏛️</div>
					<div class="text-teal-400 font-bold">Museums</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Virtual Exhibits, Cultural Heritage
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">📊</div>
					<div class="text-teal-400 font-bold">Data Viz</div>
					<div class="text-[22px] text-gray-400 mt-2">
						3D Charts, Engineering Analytics
					</div>
				</div>
			</div>
		</div>
	</Layout>
</Slide>
