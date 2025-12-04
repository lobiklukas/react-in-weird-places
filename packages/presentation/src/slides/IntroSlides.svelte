<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- What is React? -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="w-full max-w-[1000px] text-[64px] leading-[120%]">
				What is React?
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[72px]">🌐 React = UI Library</p>
				<Step>
					<p class="mt-12 text-[48px] text-gray-400">...or is it?</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
