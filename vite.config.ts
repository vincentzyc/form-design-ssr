import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    vue({
      reactivityTransform: true
    }),
    ssr()
  ],
  resolve: {
    alias: {
      "@cp": "/src/components",
      "@": "/src"
    }
  }
}

export default config
