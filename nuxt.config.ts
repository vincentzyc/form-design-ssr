// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  devServer: {
    port: 3010,
  },
  css: ['~/assets/css/base.css', '~/assets/css/main.less', '~/assets/css/widget.less'],
  modules: ['@vant/nuxt', '@pinia/nuxt'],
  vant: {
    lazyload: true,
  },
});
