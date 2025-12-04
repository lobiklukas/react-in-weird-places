<script lang="ts">
	import { Slide, Step, Code } from '@components'
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

<Slide animate>
	<Layout>
		<div class="h-center absolute text-[36px]">
			<Code lang="jsx" lines="1-17|1-2|4-16|7-12">
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
	</Layout>
</Slide>

<!-- Live Demo Slide with Embedded iframe -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-16">
			<div class="text-center">
				<h2 class="text-[64px] font-bold">🎬 Live Demo</h2>
				<p class="mt-4 text-[36px] text-teal-400">Interactive 3D Scene</p>
			</div>
			
			<Step>
				<div class="demo-container rounded-lg bg-gray-900 border-2 border-teal-500 p-4 w-full max-w-5xl">
					<div class="bg-black rounded" style="height: 500px; position: relative;">
						<iframe 
							src="http://localhost:3003" 
							style="width: 100%; height: 100%; border: none; border-radius: 8px;"
							title="React Three Fiber Demo"
						></iframe>
						<div class="absolute bottom-4 left-4 bg-gray-900/90 rounded px-4 py-2 text-[18px]">
							<p class="text-teal-400">🖱️ Drag to orbit • Scroll to zoom • Click objects</p>
						</div>
					</div>
				</div>
			</Step>

			<Step>
				<div class="flex gap-8 text-[24px] text-gray-400">
					<p>🌐 Open: <span class="text-teal-400">localhost:3003</span></p>
					<p>💻 Run: <code class="text-teal-400">pnpm dev:three</code></p>
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">3D Use Cases</p>
			<div class="grid grid-cols-2 gap-8 text-[32px]">
				<Step><div class="rounded-lg bg-gray-800 p-6">🏠 Zillow 3D Tours</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🎨 3D Design Tools (Bezi)</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">⚙️ CAD Software</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🎭 Avatar Creators</div></Step>
			</div>
		</div>
	</Layout>
</Slide>
