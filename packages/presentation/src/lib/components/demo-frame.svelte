<script lang="ts">
	export let src: string
	export let title: string = 'Live Demo'
	export let controls: string = ''
	export let height: string = '700px'
	export let width: string = '80vw'
	export let maxWidth: string = ''
	export let overflow: string = 'visible'
	export let padding: string = 'p-4'
</script>

<div 
	class="demo-container rounded-lg bg-gray-900 border-2 border-teal-500 {padding} w-full"
	class:overflow-hidden={overflow === 'hidden'}
	style={maxWidth ? `max-width: ${maxWidth};` : ''}
>
	<div class="bg-black rounded relative" style="height: {height}; width: {width};">
		<iframe
			{src}
			class="w-full h-full border-none rounded-lg"
			{title}
		></iframe>
		{#if controls}
			<div class="absolute bottom-4 left-4 bg-gray-900/90 rounded px-4 py-2 text-[18px]">
				<p class="text-teal-400">{controls}</p>
			</div>
		{/if}
	</div>
</div>
