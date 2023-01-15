import { createApp } from './app'
import type { PageContextClient } from './types'
import 'vant/lib/index.css';
import './logo.svg'
import '../assets/css/main.css'
import '../assets/css/widget.css'
import '../assets/css/animte.css'

export { render }

async function render(pageContext: PageContextClient) {
  const app = createApp(pageContext)
  app.mount('#app')
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
