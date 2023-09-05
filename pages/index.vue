<template>
  <div class="wrapper" :style="formatStyle(widgetsData && widgetsData.style)">
    <RenderPage :wgList="wgList" />
  </div>
</template>

<script setup lang="ts">
// import widgetsData from "@/data/pgdata";
import { formatStyle } from '@/utils/format/unit';
import RenderPage from '@/components/RenderPage.vue';

let widgetsData = ref<Record<string, any> | null>(null);
let wgList = ref<Record<string, any>[]>([]);

// async function lazy(time=100) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// }

async function getPageData() {
  // await lazy(3000);
  const pgdata = await import('@/data/pgdata');
  if (pgdata) widgetsData.value = pgdata.default || pgdata;
  if (widgetsData.value) {
    wgList.value = widgetsData.value.list;
    useHead({
      title: widgetsData.value.title,
      htmlAttrs: {
        lang: 'zh',
      },
    });
  }
}

getPageData();

// console.log(wgList);
</script>
