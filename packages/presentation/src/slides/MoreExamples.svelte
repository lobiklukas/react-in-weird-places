<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- More Weird Places -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="text-[72px] font-bold">
				But Wait, There's More!
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="grid grid-cols-3 gap-8 text-[32px]">
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">📄</p>
						<p class="mt-4 font-bold">PDFs</p>
						<p class="text-gray-400">react-pdf</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">📧</p>
						<p class="mt-4 font-bold">Emails</p>
						<p class="text-gray-400">react-email</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🎨</p>
						<p class="mt-4 font-bold">Figma</p>
						<p class="text-gray-400">react-figma</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🤖</p>
						<p class="mt-4 font-bold">Hardware</p>
						<p class="text-gray-400">react-hardware</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🎮</p>
						<p class="mt-4 font-bold">Canvas/Games</p>
						<p class="text-gray-400">react-pixi</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">📄</p>
						<p class="mt-4 font-bold">Word Docs</p>
						<p class="text-gray-400">redocx</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
