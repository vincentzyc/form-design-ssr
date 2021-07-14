import { createApp } from './main'

// const { app } = createApp()
const { app } = createApp()

// wait until router is ready before mounting to ensure hydration match
// router.isReady().then(() => {
//   app.mount('#app')
// })

app.mount('#app')