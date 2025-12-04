<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Now for the Weird Stuff -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<h2 class="text-[100px] font-bold">Now for the</h2>
				<h2 class="mt-4 text-[120px] font-bold text-teal-400">Weird Stuff</h2>
				<Step>
					<p class="mt-8 text-[48px] text-gray-400">React in places you wouldn't expect</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
