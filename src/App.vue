<template>
  <div>
    <div :style="{wrapStyle}">
      <p>hahaha</p>
      <!-- <RenderPage /> -->
    </div>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-view v-slot="{ Component }">
    <Suspense>
    <component :is="Component" />
    </Suspense>
    </router-view>-->
    <About />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import About from "@/pages/About.vue"
// import RenderPage from "@/components/RenderPage";
import { useStore } from '@/store'
import { getSessionStorage, setSessionStorage } from "./utils/storage";
import { postMsgoOrigin, postMsgoUrl } from "./api";
import '@/assets/css/widget.styl';
import '@/assets/css/themes.styl';
import { formatStyle } from "./utils/format/unit";
import { initScript } from "./utils/dom";

export default defineComponent({
  components: {
    About
  },
  setup() {
    const store = useStore()
    const pageData = computed(() => store.state.pageData)
    const wrapStyle = computed(() => {
      return pageData.value ? {
        ...formatStyle(pageData.value.style),
        backgroundImage: `url(${pageData.value?.style?.backgroundImage})`
      } : {}
    })

    const initPage = (pgData: Record<string, any>) => {
      if (!pgData) return;
      store.commit('setPageData', pgData);
      document.title = pgData.title;
      initScript(pgData.statsCode, 'initjscode');  //添加第三方统计代码
    }
    const getPageData = () => {
      // 获取数据优先级： url参数id > 本地 sessionStorage > postMessage监听

      // 获取url参数id（已经保存的页面）
      // let id = this.$util.getUrlParam('id');
      // 根据id调接口获取后台数据
      // console.log(id);

      // 本地 sessionStorage获取（实时预览的时候刷新页面）
      const sPageData = getSessionStorage("pageData");
      if (sPageData) {
        return initPage(sPageData);
      }

      // postMessage监听（实时预览）
      window.addEventListener('message', event => {
        if (event.origin !== postMsgoOrigin()) return;
        if (Object.prototype.toString.call(event.data) === '[object Object]') {
          if (event.data.list) {
            const sourceWin = event.source as Window
            sourceWin.postMessage('Received', postMsgoUrl());
            initPage(event.data)
            return setSessionStorage("pageData", event.data);
          }
        }
      }, false);
    }

    onMounted(() => {
      getPageData()
    })


    return {
      wrapStyle,
      getPageData
    }
  }
})
</script>


<style>
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("./assets/fonts/Inter-Italic.woff2?#iefix") format("woff2"),
    url("./assets/fonts/Inter-Italic.woff") format("woff");
}
.inter {
  font-family: "Inter";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
