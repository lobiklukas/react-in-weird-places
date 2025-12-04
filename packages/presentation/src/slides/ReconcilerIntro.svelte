<script lang="ts">
	import { Slide, Step, Code } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- The Secret: React Reconciler -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="w-[1200px] text-[64px] leading-[120%]">
				The Secret: React Reconciler
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="h-center absolute text-[42px]">
			<Code lang="javascript" lines="1-12|1-4|6-9|11-12">
				{`
// React Core
- Component model
- Virtual DOM diffing
- State management

// React Reconciler
- Tree reconciliation
- Scheduling & prioritization
- Update batching

// Custom Renderer = Target anything!
				`}
			</Code>
		</div>
	</Layout>
</Slide>
