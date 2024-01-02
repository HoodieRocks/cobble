/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rethink Sans', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			}
		}
	},
	plugins: []
};
