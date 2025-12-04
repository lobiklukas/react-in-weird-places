<script lang="ts">
	import { Slide, Step, Code } from '@components'
	import Layout from '../layout.svelte'
</script>

<!-- PDF Generation -->
<Slide animateRestart>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="text-center">
				<p class="text-[100px]">📄</p>
				<p class="mt-8 text-[72px] font-bold">PDF Generation</p>
				<p class="mt-4 text-[48px] text-teal-400">React PDF</p>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[32px]" lang="jsx" lines="1-25|1-2|4-24|10-14|16-20">
					{`
import {Document, Page, Text, View, StyleSheet} 
  from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 20 },
  section: { marginBottom: 10 },
});

const Invoice = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Invoice #001</Text>
      
      <View style={styles.section}>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
        <Text>Total: $99.99</Text>
      </View>
    </Page>
  </Document>
);

// Renders to actual PDF file!
export default Invoice;
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
				<p class="mt-4 text-[36px] text-teal-400">Interactive PDF Preview</p>
			</div>
			
			<Step>
				<div class="demo-container rounded-lg bg-gray-900 border-2 border-teal-500 overflow-hidden w-full max-w-5xl h-[520px]">
					<iframe 
						src="http://localhost:6001" 
						class="w-full h-full border-none"
						title="React PDF Demo"
					></iframe>
				</div>
			</Step>

			<Step>
				<div class="flex gap-8 text-[24px] text-gray-400">
					<p>🌐 Open: <span class="text-teal-400">localhost:6001</span></p>
					<p>💻 Run: <code class="text-teal-400">pnpm dev:pdf</code></p>
				</div>
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">PDF Use Cases</p>
			<div class="grid grid-cols-2 gap-6 text-[28px] w-full">
				<Step>
					<div class="rounded-lg bg-gray-800 p-6">
						<p class="text-[36px] mb-2">📧</p>
						<p class="font-bold">Invoices & Receipts</p>
						<p class="text-[20px] text-gray-400 mt-2">Generate on-the-fly from data</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-6">
						<p class="text-[36px] mb-2">📊</p>
						<p class="font-bold">Reports & Analytics</p>
						<p class="text-[20px] text-gray-400 mt-2">Dynamic charts and tables</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-6">
						<p class="text-[36px] mb-2">📜</p>
						<p class="font-bold">Certificates</p>
						<p class="text-[20px] text-gray-400 mt-2">Personalized documents</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 p-6">
						<p class="text-[36px] mb-2">📋</p>
						<p class="font-bold">Forms & Contracts</p>
						<p class="text-[20px] text-gray-400 mt-2">Legal documents with data</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>
