<script lang="ts">
	import { Slide, Step, Code, DemoFrame } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Advanced Demo: Car Racing -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🏎️</p>
				<p class="mt-8 text-[72px] font-bold">Advanced Physics</p>
				<p class="mt-4 text-[48px] text-teal-400">Car Racing with Cannon.js</p>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Live Demo Slide -->
<Slide animate>
	<Layout>
		<div class="flex h-full w-full flex-col items-center justify-center gap-8">
			<div class="text-center">
				<h2 class="text-[64px] font-bold">🏁 Live Demo</h2>
				<p class="mt-4 text-[36px] text-teal-400">Interactive Car Racing</p>
			</div>
			<div>
				<DemoFrame
					src="http://localhost:54400"
					title="React Three Fiber Car Racing Demo"
					controls="🎮 WASD: Drive • Space: Brake • Shift: Boost • C: Camera • R: Reset"
				/>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Comprehensive Use Cases -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Production Use Cases</p>
			<div class="grid grid-cols-2 gap-6 text-[28px] max-w-[1200px]">
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🏠</div>
					<div class="text-teal-400 font-bold">Real Estate</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Zillow 3D Tours, Virtual Showrooms
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🎮</div>
					<div class="text-teal-400 font-bold">Browser Games</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Racing, FPS, Multiplayer Simulations
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🎨</div>
					<div class="text-teal-400 font-bold">Design Tools</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Bezi, CAD Software, 3D Editors
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">📦</div>
					<div class="text-teal-400 font-bold">E-commerce</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Product Configurators, AR Preview
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">🏛️</div>
					<div class="text-teal-400 font-bold">Museums</div>
					<div class="text-[22px] text-gray-400 mt-2">
						Virtual Exhibits, Cultural Heritage
					</div>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<div class="text-[56px] mb-2">📊</div>
					<div class="text-teal-400 font-bold">Data Viz</div>
					<div class="text-[22px] text-gray-400 mt-2">
						3D Charts, Engineering Analytics
					</div>
				</div>
			</div>
		</div>
	</Layout>
</Slide>
