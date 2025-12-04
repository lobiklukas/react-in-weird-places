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

<!-- Code Example -->
<Slide animate>
	<Layout>
		<div class="h-center absolute text-[36px]">
			<Code lang="jsx" lines="1-18|1-2|4-17|8-11|13-16">
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
				<Step><div class="rounded-lg bg-gray-800 p-8">🔥 Fireship Videos</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">🎁 GitHub Unwrapped</div></Step>
				<Step><div class="rounded-lg bg-gray-800 p-8">📊 Data Visualizations</div></Step>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Video Demo -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8">
			<p class="text-[56px] font-bold">Video Example</p>
			<div class="text-[32px] text-gray-400">
				<p>Play a sample Remotion video here</p>
				<p class="mt-4 text-teal-400">or showcase GitHub Unwrapped example</p>
			</div>
		</div>
	</Layout>
</Slide>
