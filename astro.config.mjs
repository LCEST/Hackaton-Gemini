import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

const DEV_PORT = 2121;

export default defineConfig({
	site: process.env.CI
		? 'https://antinunai.netlify.app'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/' : undefined,
	output: 'hybrid',
	adapter: netlify(),
	trailingSlash: 'always',

	server: {
		port: DEV_PORT,
	},

	integrations: [
		sitemap(),
		tailwind(),
	],
});
