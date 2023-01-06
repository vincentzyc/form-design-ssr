<template>
  <div class="wrapper" :style="formatStyle(widgetsData.style)">
    <RenderPage :wgList="wgList" />
  </div>
</template>

<script lang="ts">
// export { getDocumentProps }

// function getDocumentProps() {
//   return {
//     title: 'About SpaceX',
//     description: 'Our mission is to explore the galaxy.'
//   }
// }

export const documentProps = {
  title: '自定义标题',
  description: '这是自定义的页面描述'
}
</script>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import RenderPage from "@cp/RenderPage.vue";
import widgetsData from "@/data/pgdata";

const wgList = $ref(widgetsData.list);

// console.log(pgdata)
// import { usePageContext } from "../../renderer/usePageContext";

// const pageContext = usePageContext()

// console.log(pageContext)
</script>
