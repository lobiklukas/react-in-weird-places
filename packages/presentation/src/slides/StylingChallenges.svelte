<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Styling Challenges -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🎨</p>
				<p class="mt-8 text-[72px] font-bold">But There's a Catch...</p>
				<Step>
					<p class="mt-8 text-[56px] text-red-400">Styling</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12">
			<p class="text-[56px] font-bold">What React Does (and Doesn't) Handle</p>
			<div class="grid grid-cols-2 gap-8 text-[32px]">
				<Step>
					<div class="rounded-lg bg-teal-900/30 border-2 border-teal-500 p-8">
						<p class="mb-4 text-[42px] font-bold text-teal-400">React Provides</p>
						<ul class="space-y-3 text-left text-gray-300">
							<li>✓ Component tree</li>
							<li>✓ State management</li>
							<li>✓ Updates & reconciliation</li>
							<li>✓ Lifecycle methods</li>
						</ul>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-red-900/30 border-2 border-red-500 p-8">
						<p class="mb-4 text-[42px] font-bold text-red-400">Renderers Provide</p>
						<ul class="space-y-3 text-left text-gray-300">
							<li>✓ Visual output</li>
							<li>✓ Styling systems</li>
							<li>✓ Layout engines</li>
							<li>✓ Platform APIs</li>
						</ul>
					</div>
				</Step>
			</div>
			<Step>
				<p class="mt-4 text-[36px] text-gray-400">This separation enables React's flexibility!</p>
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12">
			<p class="text-[56px] font-bold">The Styling Spectrum</p>
			<div class="grid grid-cols-2 gap-6 text-[28px]">
				<Step>
					<div class="rounded-lg bg-gradient-to-br from-teal-900/40 to-teal-800/20 p-6">
						<p class="text-[48px]">💎</p>
						<p class="mt-3 font-bold text-teal-400">Full CSS Engines</p>
						<p class="mt-2 text-gray-400">All features, selectors, animations</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6">
						<p class="text-[48px]">📦</p>
						<p class="mt-3 font-bold text-blue-400">CSS-like Subsets</p>
						<p class="mt-2 text-gray-400">Limited capabilities, basic styling</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6">
						<p class="text-[48px]">🔧</p>
						<p class="mt-3 font-bold text-purple-400">Custom Systems</p>
						<p class="mt-2 text-gray-400">Completely different paradigms</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 border-2 border-red-500">
						<p class="text-[48px]">🚫</p>
						<p class="mt-3 font-bold text-red-400">No CSS At All!</p>
						<p class="mt-2 text-gray-400">Text-only or other constraints</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<Step>
					<p class="text-[56px] font-bold">The Key Insight</p>
				</Step>
				<Step>
					<p class="mt-8 text-[48px] text-gray-300">React gives you the same</p>
					<p class="text-[48px] font-bold text-teal-400">component model</p>
				</Step>
				<Step>
					<p class="mt-8 text-[48px] text-gray-300">But styling is</p>
					<p class="text-[48px] font-bold text-red-400">platform-specific</p>
				</Step>
				<Step>
					<p class="mt-12 text-[36px] text-gray-400">Keep this in mind as we explore more targets...</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
