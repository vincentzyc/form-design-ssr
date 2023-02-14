import { createSSRApp, h } from 'vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from './types'
import VueDOMPurifyHTML from 'vue-dompurify-html';
import { createPinia } from 'pinia'

const pinia = createPinia()

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page } = pageContext
  // const { Page, pageProps } = pageContext
  const app = createSSRApp({
    render: () => h(Page)
  })
  app.use(pinia)
  app.use(VueDOMPurifyHTML);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
