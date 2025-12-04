<script lang="ts">
	import { Slide, Step, Code } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Remotion Title Slide -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">🎥</p>
				<p class="mt-8 text-[72px] font-bold">Programmatic Videos</p>
				<p class="mt-4 text-[48px] text-teal-400">Remotion</p>
			</div>
		</div>
	</Layout>
</Slide>

<!-- The Problem -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">The Problem</p>
			<div class="grid grid-cols-1 gap-6 text-[24px] w-full max-w-[1100px]">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-red-500 p-6">
						<p class="text-[36px] mb-2">🎬</p>
						<p class="font-bold text-[32px]">
							Manual Keyframing in After Effects
						</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Creating animations frame-by-frame, can't be version controlled
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-orange-500 p-6">
						<p class="text-[36px] mb-2">📊</p>
						<p class="font-bold text-[32px]">
							Can't Generate Thousands of Videos
						</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Need unique videos for each user/data? Manual work doesn't scale
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-yellow-500 p-6">
						<p class="text-[36px] mb-2">💾</p>
						<p class="font-bold text-[32px]">Binary Files, No Git Workflow</p>
						<p class="text-[20px] text-gray-400 mt-2">
							After Effects projects aren't code - hard to collaborate and
							review
						</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Code Example -->
<Slide animate>
	<Layout>
		<div class="h-center absolute text-[36px]">
			<Code lang="jsx" lines="1-2|4-18|7-11|13-17">
				{`
import {useCurrentFrame, interpolate} from 'remotion';
import {AbsoluteFill} from 'remotion';

export const MyVideo = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 30],
    [0, 1]
  );

  return (
    <AbsoluteFill style={{opacity, backgroundColor: 'hotpink'}}>
      <h1>Hello World!</h1>
    </AbsoluteFill>
  );
};
				`}
			</Code>
		</div>
	</Layout>
</Slide>

<!-- Use Cases -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-12">
			<p class="text-[56px] font-bold">Built with Remotion</p>
			<div class="flex gap-12 text-[36px]">
				<div class="rounded-lg bg-gray-800 p-8">🔥 Fireship Videos</div>
				<div class="rounded-lg bg-gray-800 p-8">🎁 GitHub Unwrapped</div>
				<div class="rounded-lg bg-gray-800 p-8">📊 Data Visualizations</div>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Video Demo -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Greenscreen Example</p>
			<div class="text-center">
				<p class="text-[32px] text-gray-400 mb-8">
					Video manipulation with React
				</p>
				<a
					href="https://www.remotion.dev/docs/video-manipulation#greenscreen-example"
					target="_blank"
					rel="noreferrer"
					class="inline-block text-[36px] px-12 py-6 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors"
				>
					View Live Demo →
				</a>
			</div>
		</div>
	</Layout>
</Slide>
