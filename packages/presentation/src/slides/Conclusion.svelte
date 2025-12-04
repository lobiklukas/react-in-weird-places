<script lang="ts">
	import { Slide, Step } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Key Takeaways -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="w-full max-w-[1000px] text-[64px] leading-[120%]">
				Key Takeaways
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-32">
			<Step>
				<div class="rounded-lg bg-gray-800 p-8 text-[36px]">
					<span class="text-[48px]">1️⃣</span> React is not just for web browsers
				</div>
			</Step>
			<Step>
				<div class="rounded-lg bg-gray-800 p-8 text-[36px]">
					<span class="text-[48px]">2️⃣</span> The reconciler makes anything possible
				</div>
			</Step>
			<Step>
				<div class="rounded-lg bg-gray-800 p-8 text-[36px]">
					<span class="text-[48px]">3️⃣</span> Major companies use React everywhere
				</div>
			</Step>
			<Step>
				<div class="rounded-lg bg-gray-800 p-8 text-[36px]">
					<span class="text-[48px]">4️⃣</span> You can build your own renderer!
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- Future Possibilities -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<h2 class="text-[80px] font-bold">What's Next?</h2>
				<Step>
					<p class="mt-12 text-[56px] text-teal-400">Where else can React go?</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="grid grid-cols-2 gap-12 text-[36px]">
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🥽</p>
						<p class="mt-4">VR/AR Headsets</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🚗</p>
						<p class="mt-4">Car Interfaces</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🤖</p>
						<p class="mt-4">IoT Devices</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-8 text-center">
						<p class="text-[56px]">🎵</p>
						<p class="mt-4">Audio Interfaces</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Resources -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[64px] font-bold">Resources</p>
			<div class="text-[32px] text-left space-y-4">
				<Step><p>📚 React Reconciler: github.com/facebook/react/tree/main/packages/react-reconciler</p></Step>
				<Step><p>⌨️ Ink: github.com/vadimdemedes/ink</p></Step>
				<Step><p>🎥 Remotion: remotion.dev</p></Step>
				<Step><p>🎮 React Three Fiber: docs.pmnd.rs/react-three-fiber</p></Step>
				<Step><p>📖 Custom Renderers Guide: agent-hunt.medium.com/hello-world-custom-react-renderer</p></Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Thank You -->
<Slide>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<h1 class="text-[100px] font-bold">Thank You!</h1>
				<p class="mt-8 text-[48px] text-gray-400">Questions?</p>
				<Step>
					<p class="mt-12 text-[36px]">🚀 Now go build something weird with React!</p>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
