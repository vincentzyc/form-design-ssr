import App from './App.vue'
import { createSSRApp } from 'vue'
import { store, key } from './store'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

export function createApp() {
  const app = createSSRApp(App)
  app.use(store, key)
  return { app }
}