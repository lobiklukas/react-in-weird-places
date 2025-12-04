<script lang="ts">
	import { Slide, Step, Code, Mermaid } from '@components'
	import Layout from '../layout.svelte'
	import { architectureDiagram } from './diagrams/architecture'
	import { phasesDiagram } from './diagrams/phases'
</script>

<!-- Section Title: The Secret Behind React -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[80px]">🤔</p>
				<h2 class="mt-8 text-[72px] font-bold">The Secret Behind React</h2>
				<p class="mt-4 text-[40px] text-gray-400">
					How does it render to anywhere?
				</p>
			</div>
		</div>
	</Layout>
</Slide>

<!-- What is the Virtual DOM? -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center px-16">
			<p class="mb-8 text-[56px] font-bold">What is the Virtual DOM?</p>
			<Step>
				<p class="mb-6 text-[32px] text-gray-300 text-center">
					A lightweight JavaScript representation of the UI
				</p>
			</Step>
			<Step>
				<div class="text-[28px] w-full">
					<Code lang="jsx" lines="1-18|1-5|7-13|15-17">
						{`
// JSX - What you write
<div className="box">
  <h1>Hello World!</h1>
</div>

// Virtual DOM - What React creates
{
  type: 'div',
  props: { className: 'box' },
  children: [
    { type: 'h1', children: 'Hello World!' }
  ]
}

// Real DOM - What gets rendered (by a renderer)
<div class="box"><h1>Hello World!</h1></div>
						`}
					</Code>
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- Why Virtual DOM? -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-32">
			<p class="text-[64px] font-bold">Why Virtual DOM?</p>
			<div class="space-y-6 w-full">
				<Step>
					<div
						class="rounded-lg bg-gray-800 border-l-4 border-red-500 p-6 text-[28px]"
					>
						❌ Direct DOM manipulation is <span class="text-red-400 font-bold"
							>slow</span
						>
						<div class="mt-2 ml-6 text-[22px] text-gray-300">
							Every change triggers layout recalculation
						</div>
					</div>
				</Step>
				<Step>
					<div
						class="rounded-lg bg-gray-800 border-l-4 border-green-500 p-6 text-[28px]"
					>
						✅ Virtual DOM is <span class="text-green-400 font-bold">fast</span>
						<div class="mt-2 ml-6 text-[22px] text-gray-300">
							Plain JavaScript objects in memory
						</div>
					</div>
				</Step>
				<Step>
					<div
						class="rounded-lg bg-gray-800 border-l-4 border-blue-500 p-6 text-[28px]"
					>
						🎯 React <span class="text-blue-400 font-bold">compares</span>
						Virtual DOMs
						<div class="mt-2 ml-6 text-[22px] text-gray-300">
							Only updates what actually changed
						</div>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- React's 3-Layer Architecture -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-16">
			<p class="text-[56px] font-bold">React's 3-Layer Architecture</p>
			<div class="w-full flex items-center justify-center h-[350px]">
				<Mermaid diagram={architectureDiagram} scale={0.9} />
			</div>
			<div class="grid grid-cols-3 gap-4 text-[24px]">
				<Step>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-blue-400">📦 React Core</p>
						<p class="mt-2 text-[18px] text-gray-400">
							Components + Virtual DOM
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-teal-400">🔄 Reconciler</p>
						<p class="mt-2 text-[18px] text-gray-400">Diffing & Scheduling</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-purple-400">🎯 Renderer</p>
						<p class="mt-2 text-[18px] text-gray-400">Target Output</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- The Reconciliation Process: 3 Phases -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-12">
			<p class="text-[56px] font-bold">The Reconciliation Process</p>
			<div class="w-full flex items-center justify-center h-[200px]">
				<Mermaid diagram={phasesDiagram} scale={0.85} />
			</div>
			<div class="grid grid-cols-3 gap-8 text-[24px] w-full">
				<Step>
					<div
						class="rounded-lg bg-blue-900/30 border-2 border-blue-500 p-6 text-center"
					>
						<p class="text-[56px]">🏗️</p>
						<p class="mt-2 text-[32px] font-bold">RENDER</p>
						<p class="mt-2 text-[18px] text-gray-400">Build Virtual DOM tree</p>
					</div>
				</Step>
				<Step>
					<div
						class="rounded-lg bg-purple-900/30 border-2 border-purple-500 p-6 text-center"
					>
						<p class="text-[56px]">🔍</p>
						<p class="mt-2 text-[32px] font-bold">DIFF</p>
						<p class="mt-2 text-[18px] text-gray-400">Compare old vs new</p>
					</div>
				</Step>
				<Step>
					<div
						class="rounded-lg bg-green-900/30 border-2 border-green-500 p-6 text-center"
					>
						<p class="text-[56px]">✅</p>
						<p class="mt-2 text-[32px] font-bold">COMMIT</p>
						<p class="mt-2 text-[18px] text-gray-400">Apply to target</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Why This Matters for Custom Renderers -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-32">
			<p class="text-[64px] font-bold">Why This Matters</p>
			<div class="space-y-6 w-full">
				<Step>
					<div
						class="rounded-lg bg-gray-800 border-l-4 border-green-500 p-6 text-[28px]"
					>
						✅ React handles the <span class="text-teal-400 font-bold"
							>hard part</span
						>
						<div class="mt-2 ml-6 text-[22px] text-gray-300">
							Virtual DOM, state management, diffing, scheduling
						</div>
					</div>
				</Step>
				<Step>
					<div
						class="rounded-lg bg-gray-800 border-l-4 border-blue-500 p-6 text-[28px]"
					>
						✅ You implement just <span class="text-blue-400 font-bold"
							>3 methods</span
						>
						<div class="mt-3 ml-6 text-[22px] text-gray-300 space-y-1">
							<div>• <code>createInstance()</code> - Create element</div>
							<div>• <code>commitUpdate()</code> - Update element</div>
							<div>• <code>removeChild()</code> - Delete element</div>
						</div>
					</div>
				</Step>
				<Step>
					<div
						class="rounded-lg bg-gray-800 border-l-4 border-purple-500 p-6 text-[28px]"
					>
						🎯 That's it! <span class="text-purple-400 font-bold"
							>Render anywhere</span
						> 🎉
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
