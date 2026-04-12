import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
	alias: {
		"@/*": "./src/lib",
	},
}
