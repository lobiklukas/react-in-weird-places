<script lang="ts">
	import { Slide, Step, Code, Mermaid } from '@components'
	import Layout from '../layout.svelte'
	import { architectureDiagram } from './diagrams/architecture'
	import { treeDiagram } from './diagrams/tree'
	import { phasesDiagram } from './diagrams/phases'
	import { diffingDiagram } from './diagrams/diffing'
	import { flowDiagram } from './diagrams/flow'
</script>

<!-- Section Title: How Reconciliation Works -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[80px]">🔄</p>
				<h2 class="mt-8 text-[72px] font-bold">How Reconciliation Works</h2>
				<p class="mt-4 text-[40px] text-gray-400">A Deep Dive</p>
			</div>
		</div>
	</Layout>
</Slide>

<!-- React Architecture: 3 Layers -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-16">
			<p class="text-[56px] font-bold">React's 3-Layer Architecture</p>
			<div class="w-full flex items-center justify-center" style="height: 350px;">
				<Mermaid diagram={architectureDiagram} scale={0.9} />
			</div>
			<Step>
				<div class="grid grid-cols-3 gap-4 text-[24px]">
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-blue-400">📦 React Core</p>
						<p class="mt-2 text-[18px] text-gray-400">Component model</p>
					</div>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-teal-400">🔄 Reconciler</p>
						<p class="mt-2 text-[18px] text-gray-400">Diff algorithm</p>
					</div>
					<div class="rounded-lg bg-gray-800 p-4 text-center">
						<p class="font-bold text-purple-400">🎯 Renderers</p>
						<p class="mt-2 text-[18px] text-gray-400">Target output</p>
					</div>
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- What is Virtual DOM? -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center px-16">
			<p class="mb-8 text-[56px] font-bold">What is the Virtual DOM?</p>
			<Step>
				<p class="mb-6 text-[32px] text-gray-300 text-center">
					A lightweight JavaScript representation of the UI
				</p>
			</Step>
			<Step>
				<div class="text-[28px] w-full">
					<Code lang="jsx" lines="1-18|1-5|7-13|15-17">
						{`
// JSX - What you write
<div className="box">
  <h1>Hello World!</h1>
</div>

// Virtual DOM - What React creates
{
  type: 'div',
  props: { className: 'box' },
  children: [
    { type: 'h1', children: 'Hello World!' }
  ]
}

// Real DOM - What gets rendered
<div class="box"><h1>Hello World!</h1></div>
						`}
					</Code>
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- Virtual DOM Tree Visualization -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Components Form a Tree</p>
			<div class="w-full flex items-center justify-center" style="height: 400px;">
				<Mermaid diagram={treeDiagram} scale={0.85} />
			</div>
			<Step>
				<p class="text-[28px] text-gray-400">
					Each node is a component or element
				</p>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- Three Phases Overview -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-12">
			<p class="text-[56px] font-bold">The Reconciliation Process</p>
			<div class="grid grid-cols-3 gap-8 text-[28px]">
				<Step>
					<div class="rounded-lg bg-blue-900/30 border-2 border-blue-500 p-8 text-center">
						<p class="text-[64px]">🏗️</p>
						<p class="mt-4 text-[36px] font-bold">RENDER</p>
						<p class="mt-2 text-[20px] text-gray-400">Build Fiber tree</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-purple-900/30 border-2 border-purple-500 p-8 text-center">
						<p class="text-[64px]">🔍</p>
						<p class="mt-4 text-[36px] font-bold">DIFF</p>
						<p class="mt-2 text-[20px] text-gray-400">Compare trees</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-green-900/30 border-2 border-green-500 p-8 text-center">
						<p class="text-[64px]">✅</p>
						<p class="mt-4 text-[36px] font-bold">COMMIT</p>
						<p class="mt-2 text-[20px] text-gray-400">Apply changes</p>
					</div>
				</Step>
			</div>
			<Step>
				<div class="mt-4">
					<Mermaid diagram={phasesDiagram} scale={0.8} />
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<!-- Render Phase Deep Dive -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center px-16">
			<p class="mb-8 text-[56px] font-bold">🏗️ Render Phase</p>
			<div class="text-[26px] w-full">
				<Code lang="jsx" lines="1-20|1-4|6-11|13-19">
					{`
function Counter() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

// React creates a Fiber node:
{
  type: Counter,
  stateNode: { count: 0 },
  child: { type: 'div', ... }
}

// Key points:
// ✅ Can be paused/resumed (Concurrent Mode)
// ✅ Tracks state, props, effects
// ✅ Builds work-in-progress tree
// ✅ Doesn't mutate DOM yet
// ⚡ O(n) time complexity
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Diffing Algorithm Rules -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center px-12 py-8">
			<p class="mb-6 text-[52px] font-bold">🔍 Diffing Algorithm: The Rules</p>
			<div class="space-y-4 w-full text-[22px]">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-red-500 p-4">
						<p class="text-[28px] font-bold mb-2">1️⃣ Different types → Replace</p>
						<Code lang="jsx">{`<div> → <span>  ❌ Destroy & recreate`}</Code>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-green-500 p-4">
						<p class="text-[28px] font-bold mb-2">2️⃣ Same type → Update props</p>
						<Code lang="jsx">{`<div class="a"> → <div class="b">  ✅ Update only`}</Code>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-blue-500 p-4">
						<p class="text-[28px] font-bold mb-2">3️⃣ Component same type → Reuse</p>
						<Code lang="jsx">{`<Counter n={1}> → <Counter n={2}>  ✅ Update instance`}</Code>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-yellow-500 p-4">
						<p class="text-[28px] font-bold mb-2">4️⃣ Lists → Use keys</p>
						<Code lang="jsx">{`key="id-1"  🔑 Efficient reordering`}</Code>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Diffing Example: Before/After -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-6">
			<p class="text-[56px] font-bold">Diffing in Action</p>
			<div class="w-full flex items-center justify-center" style="height: 380px;">
				<Mermaid diagram={diffingDiagram} scale={0.75} />
			</div>
			<div class="flex gap-12 text-[24px]">
				<Step><p>❌ <span class="text-red-400">Removed</span></p></Step>
				<Step><p>✨ <span class="text-green-400">Added</span></p></Step>
				<Step><p>✅ <span class="text-blue-400">Updated</span></p></Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Keys & Optimization -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center px-16">
			<p class="mb-8 text-[56px] font-bold">🔑 Why Keys Matter</p>
			<div class="grid grid-cols-2 gap-8 w-full text-[24px]">
				<div>
					<p class="mb-4 text-[36px] text-red-400 font-bold">❌ Bad</p>
					<Code lang="jsx" lines="1-3">
						{`
{items.map((item, i) => 
  <div key={i}>{item}</div>
)}
						`}
					</Code>
					<Step>
						<p class="mt-4 text-[22px] text-gray-400">
							Reordering breaks! <span class="text-red-400 font-mono">O(n²)</span>
						</p>
					</Step>
				</div>
				<div>
					<p class="mb-4 text-[36px] text-green-400 font-bold">✅ Good</p>
					<Code lang="jsx" lines="1-3">
						{`
{items.map(item => 
  <div key={item.id}>{item}</div>
)}
						`}
					</Code>
					<Step>
						<p class="mt-4 text-[22px] text-gray-400">
							Efficient updates! <span class="text-green-400 font-mono">O(n)</span>
						</p>
					</Step>
				</div>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Commit Phase -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center px-16">
			<p class="mb-8 text-[56px] font-bold">✅ Commit Phase</p>
			<Step>
				<p class="mb-6 text-[32px] text-gray-300 text-center">
					Reconciler calls your <span class="text-teal-400 font-bold">HostConfig</span> methods
				</p>
			</Step>
			<div class="text-[26px] w-full">
				<Code lang="javascript" lines="1-16|3-4|6-7|9-10|12-13|15-16">
					{`
// HostConfig methods called during commit:

hostConfig.createInstance(type, props)
// Terminal: Create text node | Canvas: New shape

hostConfig.appendChild(parent, child)
// Terminal: Print line | Canvas: Add to scene

hostConfig.commitUpdate(instance, payload)
// Terminal: Rewrite text | Canvas: Update sprite

hostConfig.removeChild(parent, child)
// Terminal: Clear line | Canvas: Remove from scene

// 🎯 This is where YOUR custom renderer runs!
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Complete Flow Diagram -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-12">
			<p class="text-[56px] font-bold">The Complete Flow</p>
			<div class="w-full flex items-center justify-center" style="height: 420px;">
				<Mermaid diagram={flowDiagram} scale={0.75} />
			</div>
			<Step>
				<p class="text-[28px] text-teal-400 font-bold">
					setState() → Render → Diff → Commit → UI Update! 🎉
				</p>
			</Step>
		</div>
	</Layout>
</Slide>
