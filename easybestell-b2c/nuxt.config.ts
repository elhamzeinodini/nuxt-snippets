export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-03",

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia/nuxt",
  ],

  imports: {
    dirs: ["stores"],
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    public: {
      staticAssets: process.env.NUXT_STATIC_ASSETS
    }
  }
})