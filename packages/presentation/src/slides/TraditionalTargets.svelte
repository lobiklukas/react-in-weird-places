<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="text-[72px] font-bold">Traditional Targets</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="flex gap-16">
				<Step>
					<div class="text-center">
						<p class="text-[100px]">🌐</p>
						<p class="mt-8 text-[72px] font-bold">react-dom</p>
						<p class="mt-4 text-[48px] text-teal-400">Web Browsers</p>
					</div>
				</Step>
				<Step>
					<div class="text-center">
						<p class="text-[100px]">📱</p>
						<p class="mt-8 text-[72px] font-bold">react-native</p>
						<p class="mt-4 text-[48px] text-teal-400">iOS & Android</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
