import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 54100,
	},
	plugins: [svelte(), tailwindcss()],
	resolve: {
		alias: {
			'@config': path.resolve(__dirname, './src/config.ts'),
			'@components': path.resolve(__dirname, './src/lib/components/index.ts'),
			'@languages': path.resolve(__dirname, './src/lib/languages/index.ts'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@stores': path.resolve(__dirname, './src/lib/stores'),
			'@styles': path.resolve(__dirname, './src/lib/styles'),
		},
	},
})
