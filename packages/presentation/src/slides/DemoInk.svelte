<script lang="ts">
	import { Slide, Step, Code } from '@components'
	import Layout from '../layout.svelte'
</script>

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

<!-- The Problem -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">The Problem</p>
			<div class="grid grid-cols-1 gap-6 text-[24px] w-full max-w-[1100px]">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-red-500 p-6">
						<p class="text-[36px] mb-2">📝</p>
						<p class="font-bold text-[32px]">console.log() Chaos</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Managing terminal output, clearing screens, updating lines is
							tedious
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-orange-500 p-6">
						<p class="text-[36px] mb-2">📐</p>
						<p class="font-bold text-[32px]">Manual Layout Calculations</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Libraries like Blessed: complex APIs, manual positioning, no hot
							reload
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-yellow-500 p-6">
						<p class="text-[36px] mb-2">🔄</p>
						<p class="font-bold text-[32px]">Stateful Terminal Updates</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Tracking cursor position, clearing old output, handling resize
							events
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
				<Code class="text-[36px]" lang="jsx" lines="1-2|4-15|7-12">
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

<!-- Live Demo Slide -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12 px-16">
			<div class="text-center">
				<h2 class="text-[64px] font-bold">🎬 Live Demo</h2>
				<p class="mt-4 text-[36px] text-teal-400">Ink CLI Application</p>
			</div>

			<div
				class="demo-container rounded-lg bg-gray-900 border-2 border-teal-500 p-8 w-full max-w-4xl"
			>
				<div class="text-[28px] text-gray-300 space-y-4">
					<div class="flex flex-col items-center gap-4">
						<span class="text-[48px]">💻</span>
						<div
							class="text-[18px] text-gray-400 flex flex-col items-center gap-2"
						>
							<span>Run:</span>
							<code class="text-teal-400">pnpm dev:ink</code>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Companies Using Ink</p>
			<div class="grid grid-cols-3 gap-8 text-[32px]">
				<div class="rounded-lg bg-gray-800 p-6">📦 Cloudflare Wrangler</div>
				<div class="rounded-lg bg-gray-800 p-6">🤖 GitHub Copilot CLI</div>
				<div class="rounded-lg bg-gray-800 p-6">🧠 Google Gemini CLI</div>
				<div class="rounded-lg bg-gray-800 p-6">🗃️ Prisma</div>
				<div class="rounded-lg bg-gray-800 p-6">⚡ Gatsby</div>
				<div class="rounded-lg bg-gray-800 p-6">📱 Shopify CLI</div>
			</div>
		</div>
	</Layout>
</Slide>
