<script lang="ts">
	let layout = false
</script>

<div class="relative h-screen w-screen overflow-hidden" class:layout>
	<div class="h-full p-8">
		<slot />
	</div>
</div>

<style>
	.layout {
		outline: 4px solid aqua;
		outline-offset: -6px;
	}
</style>
