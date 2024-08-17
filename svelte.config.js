import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
<<<<<<< HEAD
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
=======
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
>>>>>>> origin/main
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
