<template>
  <div class="wrapper" :style="formatStyle(widgetsData && widgetsData.style)">
    <RenderPage :wgList="wgList" />
    <!-- <p>测试服务端获取页面数据</p> -->
  </div>
</template>

<script lang="ts">
// import widgetsData from "@/data/pgdata";
import { formatStyle } from "@/utils/format/unit";
import RenderPage from "@cp/RenderPage.vue";
import { defineComponent } from "vue";
import { usePageContext } from "../../renderer/usePageContext";

export default defineComponent({
  components: { RenderPage },
  setup() {
    const pageContext = usePageContext();
    
    const pageProps = pageContext.pageProps;

    let widgetsData = $ref<Record<string, any> | null>(null);
    let wgList = $ref<Record<string, any>[]>([]);

    if (pageProps) widgetsData = pageProps.pgData;
    if (widgetsData) wgList = widgetsData.list;

    // async function getPageData() {
    //   // await lazy(300);
    //   const pgdata = await import("@/data/pgdata");
    //   if (pgdata) widgetsData = pgdata.default || pgdata;
    //   if (widgetsData) wgList = widgetsData.list;
    // }

    // await getPageData();

    // console.log(wgList);

    return {
      widgetsData,
      wgList,
      formatStyle,
    };
  },
});
</script>
