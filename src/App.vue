<template>
  <div>
    <div :style="wrapStyle">
      <RenderPage />
    </div>
    <Home />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import Home from "@/pages/Home.vue"
import RenderPage from "@/components/RenderPage";
import { useStore } from '@/store'
// import { getSessionStorage, setSessionStorage } from "./utils/storage";
// import { postMsgoOrigin, postMsgoUrl } from "./api";
import '@/assets/css/main.css'
import '@/assets/css/widget.styl';
import '@/assets/css/themes.styl';
import { formatStyle } from "./utils/format/unit";
import { initScript } from "./utils/dom";
import { defaultPageData } from "@/assets/js/page-data"

export default defineComponent({
  components: {
    Home, RenderPage
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
      globalThis.appTitle = pgData.title //设置页面标题
    }

    onMounted(() => {
      initScript(pageData.value.statsCode, 'initjscode');  //添加第三方统计代码
    })

    initPage(defaultPageData);

    return {
      wrapStyle
    }
  }
})
</script>