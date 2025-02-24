// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/_variables.scss" as *;
            @use "~/assets/styles/_mixins.scss" as *;
            @use "~/assets/styles/main.scss" as *;
            @use "~/assets/styles/reset.scss" as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxt/fonts", "@nuxt/icon"],
});