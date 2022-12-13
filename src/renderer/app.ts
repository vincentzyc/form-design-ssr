import { createSSRApp, h } from 'vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from './types'
import VueDOMPurifyHTML from 'vue-dompurify-html';

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const app = createSSRApp({
    render: () => h(Page, pageProps)
  })
  app.use(VueDOMPurifyHTML);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
