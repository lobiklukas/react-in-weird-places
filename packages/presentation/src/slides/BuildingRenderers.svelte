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
			<div class="w-full max-w-[1200px]">
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

<!-- Real Example: Link to Tutorial -->
<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center max-w-[1100px]">
				<p class="text-[64px] font-bold mb-8">📚 Learn More</p>
				<p class="text-[42px] text-teal-400 mb-12">Building Custom Renderers</p>

				<Step>
					<div class="rounded-lg bg-gray-800 p-12 mb-8">
						<p class="text-[32px] text-gray-300 mb-6">
							Step-by-step tutorial with real code examples
						</p>
						<a
							href="https://agent-hunt.medium.com/hello-world-custom-react-renderer-9a95b7cd04bc"
							target="_blank"
							class="text-[36px] text-blue-400 hover:text-blue-300 underline break-all"
						>
							agent-hunt.medium.com/hello-world-custom-react-renderer-9a95b7cd04bc
						</a>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
