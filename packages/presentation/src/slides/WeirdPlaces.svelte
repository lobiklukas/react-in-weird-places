<script lang="ts">
	import { Slide, Step, Code } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Now for the Weird Stuff -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<h2 class="text-[100px] font-bold">Now for the</h2>
				<h2 class="mt-4 text-[120px] font-bold text-teal-400">Weird Stuff</h2>
			</div>
		</div>
	</Layout>
</Slide>

<!-- #1: Terminal/CLI -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">⌨️</p>
				<p class="mt-8 text-[72px] font-bold">Terminal & CLI</p>
				<p class="mt-4 text-[48px] text-teal-400">Ink</p>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[36px]" lang="jsx" lines="1-16|1-3|5-14|8|10-12">
					{`
import React from 'react';
import {render, Text, Box} from 'ink';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return <Text>Count: {count}</Text>;
};

render(<Counter />);
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Companies Using Ink</p>
			<div class="grid grid-cols-3 gap-8 text-[32px]">
				<Step><div class="rounded-lg bg-gray-800 p-6">📦 Cloudflare Wrangler</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🤖 GitHub Copilot CLI</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🧠 Google Gemini CLI</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🗃️ Prisma</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">⚡ Gatsby</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">📱 Shopify CLI</div></Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- #2: Videos -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🎥</p>
				<p class="mt-8 text-[72px] font-bold">Programmatic Videos</p>
				<p class="mt-4 text-[48px] text-teal-400">Remotion</p>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[36px]" lang="jsx" lines="1-18|1-2|4-17|8-11|13-16">
					{`
import {useCurrentFrame, interpolate} from 'remotion';
import {AbsoluteFill} from 'remotion';

export const MyVideo = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(
    frame,
    [0, 30],
    [0, 1]
  );

  return (
    <AbsoluteFill style={{opacity, backgroundColor: 'hotpink'}}>
      <h1>Hello World!</h1>
    </AbsoluteFill>
  );
};
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12">
			<p class="text-[56px] font-bold">Built with Remotion</p>
			<div class="flex gap-12 text-[36px]">
				<Step><div class="rounded-lg bg-gray-800 p-8">🔥 Fireship Videos</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">🎁 GitHub Unwrapped</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">📊 Data Visualizations</div></Step>
			</div>
		</div>
	</Layout>
</Slide>

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
				<Code class="text-[36px]" lang="jsx" lines="1-17|1-2|4-16|7-12">
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

<!-- #4: TV Platforms -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">📺</p>
				<p class="mt-8 text-[72px] font-bold">TV Platforms</p>
				<p class="mt-4 text-[48px] text-teal-400">React TV / React Native TV</p>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12">
			<p class="text-[56px] font-bold">TV Platforms Support</p>
			<div class="grid grid-cols-2 gap-8 text-[36px]">
				<Step><div class="rounded-lg bg-gray-800 p-8">📺 Apple TV (tvOS)</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">📺 Android TV</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">🖥️ LG webOS</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">🖥️ Samsung Tizen</div></Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- #5: Desktop -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🖥️</p>
				<p class="mt-8 text-[72px] font-bold">Desktop Apps</p>
				<p class="mt-4 text-[48px] text-teal-400">React Native Windows/macOS</p>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12">
			<p class="text-[56px] font-bold">Microsoft's Commitment</p>
			<div class="grid grid-cols-3 gap-8 text-[32px]">
				<Step><div class="rounded-lg bg-gray-800 p-6">💻 Windows Desktop</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🖥️ macOS Desktop</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">🎮 Xbox Apps</div></Step>
			</div>
			<Step>
				<p class="mt-8 text-[36px] text-gray-400">Production-ready, maintained by Microsoft</p>
			</Step>
		</div>
	</Layout>
</Slide>
