<script lang="ts">
	import { Slide, Step, Code, DemoFrame } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- Email Templates -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">📧</p>
				<p class="mt-8 text-[72px] font-bold">Email Templates</p>
				<p class="mt-4 text-[48px] text-teal-400">React Email</p>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[32px]" lang="jsx" lines="1-20|1-3|5-19|9-12|14-17">
					{`
import {Html, Button, Container, Heading}
  from '@react-email/components';

const WelcomeEmail = ({ name }) => (
  <Html>
    <Container>
      <Heading>
        Welcome {name}! 🎉
      </Heading>

      <Button href="https://example.com">
        Get Started
      </Button>

      <p>
        We're excited to have you on board!
      </p>
    </Container>
  </Html>
);

export default WelcomeEmail;
					`}
				</Code>
			</div>
		</div>
	</Layout>
</Slide>

<!-- Live Demo Slide -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-16">
			<div class="text-center">
				<h2 class="text-[64px] font-bold">🎬 Live Demo</h2>
				<p class="mt-4 text-[36px] text-teal-400">Email Preview</p>
			</div>

			<Step>
				<DemoFrame
					src="http://localhost:6002"
					title="React Email Demo"
				/>
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">Why React Email?</p>
			<div class="grid grid-cols-2 gap-6 text-[26px] w-full">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-green-500 p-6">
						<p class="text-[36px] mb-2">✅</p>
						<p class="font-bold">Cross-Client Compatible</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Works in Gmail, Outlook, Apple Mail, etc.
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-blue-500 p-6">
						<p class="text-[36px] mb-2">🎨</p>
						<p class="font-bold">Component-Based</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Reusable email components
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-purple-500 p-6">
						<p class="text-[36px] mb-2">👁️</p>
						<p class="font-bold">Live Preview</p>
						<p class="text-[20px] text-gray-400 mt-2">
							See changes in real-time
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-teal-500 p-6">
						<p class="text-[36px] mb-2">📤</p>
						<p class="font-bold">Export to HTML</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Production-ready templates
						</p>
					</div>
				</Step>
			</div>
			<Step>
				<p class="text-[22px] text-gray-400 mt-4">
					Used by: Vercel, Linear, Raycast, Resend
				</p>
			</Step>
		</div>
	</Layout>
</Slide>
