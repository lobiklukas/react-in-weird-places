<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Key Takeaways -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="w-full max-w-[1000px] text-[64px] leading-[120%]">
				Key Takeaways
			</Step>
		</div>
	</Layout>
</Slide>

<!-- The Pattern -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center"></div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center max-w-[1000px]">
				<div class="space-y-6 text-left text-[40px]">
					<div class="w-full max-w-[1000px] text-[64px] leading-[120%]">
						The Universal Pattern
					</div>
					<Step>
						<p>✅ Components & Hooks (you know this)</p>
					</Step>
					<Step>
						<p class="ml-12 text-gray-400">↓</p>
						<p>✅ Reconciler (handles the diffing)</p>
					</Step>
					<Step>
						<p class="ml-12 text-gray-400">↓</p>
						<p>🔀 Renderer (swap this part!)</p>
					</Step>
					<Step>
						<p class="mt-12 text-center text-[48px] text-teal-400">
							DOM → PDF → Canvas → CLI → Your idea here
						</p>
					</Step>
				</div>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Resources -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[64px] font-bold">Start Here</p>
			<div class="text-[32px] space-y-6 max-w-[1100px]">
				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-teal-400 mb-2">🚀 Easiest to Start:</p>
					<p>Ink (CLI) → github.com/vadimdemedes/ink</p>
				</div>

				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-purple-400 mb-2">🎮 Most Fun:</p>
					<p>React Three Fiber → docs.pmnd.rs/react-three-fiber</p>
				</div>

				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-orange-400 mb-2">🎥 Videos & More:</p>
					<p>Remotion → remotion.dev</p>
				</div>

				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-blue-400 mb-2">📚 Build Your Own:</p>
					<p>
						Custom Renderer Tutorial →
						agent-hunt.medium.com/hello-world-custom-react-renderer
					</p>
				</div>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Thank You -->
<Slide>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<h1 class="text-[100px] font-bold">Thank You!</h1>
				<p class="mt-8 text-[48px] text-gray-400">Questions?</p>
			</div>
		</div>
	</Layout>
</Slide>
