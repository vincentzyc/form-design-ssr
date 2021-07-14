import App from './App.vue'
import { createSSRApp } from 'vue'
// import { createRouter } from './router'
import { store, key } from './store'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  // const router = createRouter()
  app.use(store, key)
  // app.use(store, key).use(router)
  return { app }
  // return { app, router }
}