<script lang="ts">
	import { onMount } from 'svelte'
	import mermaid from 'mermaid'

	export let diagram: string
	export let scale: number = 1.0

	let container: HTMLDivElement
	let isRendered = false

	onMount(async () => {
		mermaid.initialize({
			startOnLoad: false,
			theme: 'dark',
			themeVariables: {
				primaryColor: '#1e293b',
				primaryTextColor: '#fff',
				primaryBorderColor: '#3b82f6',
				lineColor: '#3b82f6',
				secondaryColor: '#14b8a6',
				tertiaryColor: '#8b5cf6',
				background: '#0a0a0a',
				mainBkg: '#1e293b',
				secondBkg: '#334155',
				tertiaryBkg: '#475569',
				textColor: '#fff',
				fontSize: '16px',
				fontFamily: '"Geist Sans", system-ui, sans-serif'
			},
			flowchart: {
				useMaxWidth: false,
				htmlLabels: true,
				curve: 'basis'
			}
		})

		try {
			const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`
			const { svg } = await mermaid.render(id, diagram)
			if (container) {
				container.innerHTML = svg
				isRendered = true

				// Apply scaling
				const svgElement = container.querySelector('svg')
				if (svgElement) {
					svgElement.style.transform = `scale(${scale})`
					svgElement.style.transformOrigin = 'center center'
				}
			}
		} catch (error) {
			console.error('Mermaid rendering error:', error)
			if (container) {
				container.innerHTML = `<div class="text-red-400">Error rendering diagram</div>`
			}
		}
	})
</script>

<div
	bind:this={container}
	class="mermaid-container flex items-center justify-center"
	class:rendered={isRendered}
/>

<style>
	.mermaid-container {
		width: 100%;
		height: 100%;
		min-height: 200px;
	}

	.mermaid-container :global(svg) {
		max-width: 100%;
		height: auto;
	}

	.mermaid-container :global(.node rect),
	.mermaid-container :global(.node circle),
	.mermaid-container :global(.node polygon) {
		stroke-width: 2px !important;
	}

	.mermaid-container :global(.edgeLabel) {
		background-color: #0a0a0a !important;
		padding: 4px 8px !important;
		border-radius: 4px !important;
	}

	.mermaid-container :global(text) {
		fill: #fff !important;
		font-family: 'Geist Sans', system-ui, sans-serif !important;
	}
</style>
