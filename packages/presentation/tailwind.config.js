/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
				mono: ['"Geist Mono"', 'monospace'],
			},
		},
	},
	plugins: [],
}

export default config
