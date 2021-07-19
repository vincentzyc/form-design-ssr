<template>
  <div>
    <div :style="wrapStyle">
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
import { defaultPageData } from "@/assets/js/page-data"

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
      } : null
    })

    const initPage = (pgData: Record<string, any>) => {
      if (!pgData) return;
      store.commit('setPageData', pgData);
      document.title = pgData.title;
      initScript(pgData.statsCode, 'initjscode');  //添加第三方统计代码
    }

    initPage(defaultPageData);

    return {
      wrapStyle
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
