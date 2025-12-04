<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Traditional Targets -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="w-full max-w-[1000px] text-[64px] leading-[120%]">
				Traditional Targets
			</Step>
		</div>
	</Layout>
</Slide>


<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center gap-[100px]">
			<div class="text-center">
				<p class="text-[72px]">🌐</p>
				<p class="mt-4 text-[48px]">react-dom</p>
				<p class="text-[32px] text-gray-400">Web Browsers</p>
			</div>
			<div class="text-center">
				<p class="text-[72px]">📱</p>
				<p class="mt-4 text-[48px]">react-native</p>
				<p class="text-[32px] text-gray-400">iOS & Android</p>
			</div>
		</div>
	</Layout>
</Slide>
