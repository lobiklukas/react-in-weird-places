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
					<Step>
						<div class="flex flex-col items-center gap-4">
							<span class="text-[48px]">💻</span>
							<div
								class="text-[18px] text-gray-400 flex flex-col items-center gap-2"
							>
								<span>Run:</span>
								<code class="text-teal-400">pnpm dev:ink</code>
							</div>
						</div>
					</Step>
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
				<Step
					><div class="rounded-lg bg-gray-800 p-6">
						📦 Cloudflare Wrangler
					</div></Step
				>
				<Step
					><div class="rounded-lg bg-gray-800 p-6">
						🤖 GitHub Copilot CLI
					</div></Step
				>
				<Step
					><div class="rounded-lg bg-gray-800 p-6">
						🧠 Google Gemini CLI
					</div></Step
				>
				<Step><div class="rounded-lg bg-gray-800 p-6">🗃️ Prisma</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">⚡ Gatsby</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-6">📱 Shopify CLI</div></Step
				>
			</div>
		</div>
	</Layout>
</Slide>
