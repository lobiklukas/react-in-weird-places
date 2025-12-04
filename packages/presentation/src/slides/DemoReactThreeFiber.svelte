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

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[36px]" lang="jsx" lines="1-2|4-11|13-20|1-20">
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
