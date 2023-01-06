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
  await lazy()
  return {
    title: widgetsData.title,
    description: '这是自定义的页面描述'
  }
}
async function lazy(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(true)
    }, 100);
  })
}
export { getDocumentProps }

</script>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import RenderPage from "@cp/RenderPage.vue";

const wgList = $ref(widgetsData.list);

// console.log(pgdata)
// import { usePageContext } from "../../renderer/usePageContext";

// const pageContext = usePageContext()

// console.log(pageContext)
</script>
