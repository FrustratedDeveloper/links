// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			NAME: 'Your name here'
		}
	},
	modules: [
		// With options
		['@nuxtjs/eslint-module', {
			lintOnStart: false,
		}]
	]
});
