export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      staticAssets: process.env.NUXT_STATIC_ASSETS
    }
  }
})
