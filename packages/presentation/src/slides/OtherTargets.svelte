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

<!-- TV Platforms -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">📺</p>
				<p class="mt-8 text-[72px] font-bold">TV Platforms</p>
				<p class="mt-4 text-[48px] text-teal-400">React Native TV</p>
				<Step>
					<div class="mt-8 flex gap-8 justify-center text-[32px] text-gray-400">
						<div>Apple TV</div>
						<div>Android TV</div>
						<div>Samsung Tizen</div>
						<div>LG webOS</div>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Desktop Apps -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🖥️</p>
				<p class="mt-8 text-[72px] font-bold">Desktop Apps</p>
				<p class="mt-4 text-[48px] text-teal-400">React Native Windows/macOS</p>
				<Step>
					<p class="mt-8 text-[32px] text-gray-400">Production-ready, maintained by Microsoft</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Other Interesting Targets -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Even More Targets</p>
			<div class="grid grid-cols-3 gap-8 text-[32px]">
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🎨</p>
						<p class="mt-4 font-bold">Figma Plugins</p>
						<p class="text-gray-400">react-figma</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🤖</p>
						<p class="mt-4 font-bold">Hardware/IoT</p>
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
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🎭</p>
						<p class="mt-4 font-bold">VR/AR</p>
						<p class="text-gray-400">react-xr</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🎹</p>
						<p class="mt-4 font-bold">Music/Audio</p>
						<p class="text-gray-400">react-music</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- The Point -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<Step>
					<p class="text-[56px] font-bold text-teal-400">If you can describe it as a tree...</p>
				</Step>
				<Step>
					<p class="mt-8 text-[64px] font-bold">There is probably a React package for it</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
