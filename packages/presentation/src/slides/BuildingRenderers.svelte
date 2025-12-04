<script lang="ts">
	import { Slide, Step, Code } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- How It Works -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<Step class="w-full max-w-[1200px] text-[64px] leading-[120%]">
				How to Build a Custom Renderer
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[32px]" lang="javascript" lines="1-22|1-3|5-8|10-14|16-19|21-22">
					{`
import Reconciler from 'react-reconciler';

// 1. Define your host config
const hostConfig = {
  createInstance(type, props) {
    // Create your target element
  },
  
  appendChild(parent, child) {
    // Add child to parent
  },
  
  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    // Update your target element
  },
  
  // ... many more methods
};

// 2. Create the reconciler
const MyRenderer = Reconciler(hostConfig);

// 3. Render React elements
MyRenderer.render(<App />, container);
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Real Example: Simple Renderer -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[950px]">
				<Code class="text-[28px]" lang="javascript" lines="1-30|1-7|9-17|19-23|25-30">
					{`
// Simple Console Renderer Example
const hostConfig = {
  createInstance(type, props) {
    return { type, props, children: [] };
  },
  
  appendChild(parent, child) {
    parent.children.push(child);
  },
  
  commitMount(instance) {
    // Log to console when component mounts
    console.log(\`<\${instance.type}>\`, instance.props);
  },
  
  // ... other required methods
};

const ConsoleRenderer = Reconciler(hostConfig);

function render(element) {
  const container = { children: [] };
  ConsoleRenderer.updateContainer(element, container, null, null);
}

// Usage
render(
  <div className="hello">
    <span>Hello Console!</span>
  </div>
);
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>
