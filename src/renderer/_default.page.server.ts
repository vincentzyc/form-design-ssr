import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'
import logoUrl from './logo.svg'
import type { PageContextServer } from './types'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextServer) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="zh">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <link rel="stylesheet" href="/src/renderer/base.css">
        <script type="text/javascript">
        //简化压缩版 flexible.min.js ，根据实际情况决定是否使用
        !function(e,t){function n() {  var n = s.getBoundingClientRect().width;  t = t || 540, n > t && (n = t);  var i = 100 * n / e;  s.style.fontSize = i + "px"} var i, o = document,d = window,s = o.documentElement;n(), d.addEventListener("resize", function () { clearTimeout(i), i = setTimeout(n, 300) }, !1), d.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), d.addEventListener("DOMContentLoaded", function () { o.body.style.position = "relative", o.body.style.fontSize = "14px", o.body.style.margin = "0 auto", o.body.style.maxWidth = t + "px" }, !1)
        }(750, 640);
      </script>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
