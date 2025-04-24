import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "3kh0.net",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/robots", "@nuxt/fonts", "@nuxt/icon"],
  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
  },
});