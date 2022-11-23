import { createSSRApp, h } from 'vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from './types'

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const app = createSSRApp({
    render: () => h(Page, pageProps)
  })

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
