<script lang="ts">
	import { Slide, Step, Mermaid } from '@components'
	import Layout from '../layout.svelte'
	import { architectureDiagram } from './diagrams/architecture'
	import { phasesDiagram } from './diagrams/phases'
</script>

<!-- Section Title: How Does React Do This? -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[80px]">🤔</p>
				<h2 class="mt-8 text-[72px] font-bold">How Does React Do This?</h2>
				<p class="mt-4 text-[40px] text-gray-400">The Magic Explained</p>
			</div>
		</div>
	</Layout>
</Slide>

<!-- React Architecture: 3 Layers -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-16">
			<p class="text-[56px] font-bold">React's 3-Layer Architecture</p>
			<div class="w-full flex items-center justify-center" style="height: 350px;">
				<Mermaid diagram={architectureDiagram} scale={0.9} />
			</div>
			<Step>
				<div class="grid grid-cols-3 gap-4 text-[24px]">
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-blue-400">📦 React Core</p>
						<p class="mt-2 text-[18px] text-gray-400">Components & Hooks</p>
					</div>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-teal-400">🔄 Reconciler</p>
						<p class="mt-2 text-[18px] text-gray-400">The Hard Part</p>
					</div>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-purple-400">🎯 Your Renderer</p>
						<p class="mt-2 text-[18px] text-gray-400">3 Simple Methods!</p>
					</div>
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- The Magic: 3 Steps -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-12">
			<p class="text-[56px] font-bold">The Magic: 3 Steps</p>
			<div class="w-full flex items-center justify-center" style="height: 200px;">
				<Mermaid diagram={phasesDiagram} scale={0.85} />
			</div>
			<div class="grid grid-cols-3 gap-8 text-[24px] w-full">
				<Step>
					<div class="rounded-lg bg-blue-900/30 border-2 border-blue-500 p-6 text-center">
						<p class="text-[56px]">🏗️</p>
						<p class="mt-2 text-[32px] font-bold">BUILD</p>
						<p class="mt-2 text-[18px] text-gray-400">React creates a tree of your components</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-purple-900/30 border-2 border-purple-500 p-6 text-center">
						<p class="text-[56px]">🔍</p>
						<p class="mt-2 text-[32px] font-bold">COMPARE</p>
						<p class="mt-2 text-[18px] text-gray-400">Finds what changed efficiently</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-green-900/30 border-2 border-green-500 p-6 text-center">
						<p class="text-[56px]">✅</p>
						<p class="mt-2 text-[32px] font-bold">UPDATE</p>
						<p class="mt-2 text-[18px] text-gray-400">Calls YOUR renderer</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- This Means... -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-32">
			<p class="text-[64px] font-bold">This Means...</p>
			<div class="space-y-6 w-full">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-green-500 p-6 text-[28px]">
						✅ React handles the <span class="text-teal-400 font-bold">hard part</span> (state, diffing, scheduling)
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-blue-500 p-6 text-[28px]">
						✅ You implement just <span class="text-blue-400 font-bold">3 methods</span>:
						<div class="mt-3 ml-6 text-[22px] text-gray-300 space-y-1">
							<div>• <code>createInstance()</code> - Create element</div>
							<div>• <code>commitUpdate()</code> - Update element</div>
							<div>• <code>removeChild()</code> - Delete element</div>
						</div>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-purple-500 p-6 text-[28px]">
						✅ That's it! <span class="text-purple-400 font-bold">Render anywhere</span> 🎉
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
