<template>
  <div class="wrapper" :style="formatStyle(widgetsData.style)">
    <RenderPage :wgList="wgList" />
  </div>
</template>

<script lang="ts">
import widgetsData from "@/data/pgdata";
// 静态设置
// export const documentProps = {
//   title: widgetsData.title,
//   description: '这是自定义的页面描述'
// }

// 动态设置

async function getDocumentProps() {
  await lazy();
  return {
    title: widgetsData.title,
    description: "这是自定义的页面描述",
  };
}
async function lazy(time=100) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}
export { getDocumentProps };
</script>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import RenderPage from "@cp/RenderPage.vue";

let wgList = $ref<typeof widgetsData.list>([]);
async function getPageData() {
  await lazy(300);
  wgList = widgetsData.list;
}
getPageData()
// console.log(pgdata)
// import { usePageContext } from "../../renderer/usePageContext";

// const pageContext = usePageContext()

// console.log(pageContext)
</script>
