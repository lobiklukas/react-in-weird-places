<script lang="ts">
	import { Slide, Step, Code, DemoFrame } from '@components'
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

<!-- The Problem -->
<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">The Problem</p>
			<div class="grid grid-cols-1 gap-6 text-[24px] w-full max-w-[1100px]">
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-red-500 p-6">
						<p class="text-[36px] mb-2">⚙️</p>
						<p class="font-bold text-[32px]">Imperative PDF APIs</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Libraries like PDFKit: doc.text(), doc.moveDown(), doc.rect() - hard to visualize
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-orange-500 p-6">
						<p class="text-[36px] mb-2">🔍</p>
						<p class="font-bold text-[32px]">No Live Preview</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Generate PDF, open file, find issue, edit code, repeat...
						</p>
					</div>
				</Step>
				<Step>
					<div class="rounded-lg bg-gray-800 border-l-4 border-yellow-500 p-6">
						<p class="text-[36px] mb-2">🧩</p>
						<p class="font-bold text-[32px]">Complex Layout Logic</p>
						<p class="text-[20px] text-gray-400 mt-2">
							Manual positioning calculations, page breaks, and styling
						</p>
					</div>
				</Step>
			</div>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full items-center justify-center">
			<div class="w-full max-w-[900px]">
				<Code class="text-[32px]" lang="jsx" lines="1-24|1-2|4-8|10-21|15-18">
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
				<DemoFrame src="http://localhost:54200" title="React PDF Demo" />
			</Step>
		</div>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<div class="flex h-full flex-col items-center justify-center gap-8 px-20">
			<p class="text-[56px] font-bold">PDF Use Cases</p>
			<div class="grid grid-cols-2 gap-6 text-[28px] w-full">
				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-[36px] mb-2">📧</p>
					<p class="font-bold">Invoices & Receipts</p>
					<p class="text-[20px] text-gray-400 mt-2">
						Generate on-the-fly from data
					</p>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-[36px] mb-2">📊</p>
					<p class="font-bold">Reports & Analytics</p>
					<p class="text-[20px] text-gray-400 mt-2">
						Dynamic charts and tables
					</p>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-[36px] mb-2">📜</p>
					<p class="font-bold">Certificates</p>
					<p class="text-[20px] text-gray-400 mt-2">Personalized documents</p>
				</div>
				<div class="rounded-lg bg-gray-800 p-6">
					<p class="text-[36px] mb-2">📋</p>
					<p class="font-bold">Forms & Contracts</p>
					<p class="text-[20px] text-gray-400 mt-2">
						Legal documents with data
					</p>
				</div>
			</div>
		</div>
	</Layout>
</Slide>
