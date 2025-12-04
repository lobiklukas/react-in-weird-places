<script lang="ts">
	import { Slide, Step, Code, DemoFrame } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- #3: 3D Graphics -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🎮</p>
				<p class="mt-8 text-[72px] font-bold">3D Graphics</p>
				<p class="mt-4 text-[48px] text-teal-400">React Three Fiber</p>
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
						<p class="text-[36px] mb-2">📦</p>
						<p class="font-bold text-[32px]">Verbose Three.js Code</p>
						<p class="text-[20px] text-gray-400 mt-2">
							scene.add(), new THREE.Mesh(), manual scene graph management
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-orange-500 p-6">
						<p class="text-[36px] mb-2">💧</p>
						<p class="font-bold text-[32px]">Memory Leaks Everywhere</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Must manually dispose geometries, materials, textures - easy to forget
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-yellow-500 p-6">
						<p class="text-[36px] mb-2">🔌</p>
						<p class="font-bold text-[32px]">No React Integration</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Can't use hooks, state, or component patterns - separate from your React app
						</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[36px]" lang="jsx" lines="1-20|1-2|4-11|13-20">
					{`
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <Box />
      <OrbitControls />
    </Canvas>
  );
}
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Live Demo Slide with Embedded iframe -->
<Slide animate>
	<Layout>
		<div class="flex h-full w-full flex-col items-center justify-center gap-8">
			<div class="text-center">
				<h2 class="text-[64px] font-bold">🎬 Live Demo</h2>
				<p class="mt-4 text-[36px] text-teal-400">Interactive 3D Scene</p>
			</div>

			<Step>
				<DemoFrame
					src="http://localhost:6003"
					title="React Three Fiber Demo"
					controls="🖱️ Drag to orbit • Scroll to zoom • Click objects"
				/>
			</Step>
		</div>
	</Layout>
</Slide>
