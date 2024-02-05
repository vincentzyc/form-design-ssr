<template>
  <div class="wrapper" :style="formatStyle(widgetsData && widgetsData.style)">
    <RenderPage :wgList="wgList" />
  </div>
</template>

<script setup lang="ts">
import { formatStyle } from '@/utils/format/unit';
import RenderPage from '@/components/RenderPage.vue';
import { useMainStore } from '@/pinia';

const { data }: { data: Record<string, any> | null } = await useFetch('/api/hello');
const PageData = data.value;

const mainStore = useMainStore();

let widgetsData = ref<Record<string, any> | null>(null);
let wgList = ref<Record<string, any>[]>([]);

// async function lazy(time = 100) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// }
// 模拟延迟渲染
// await lazy(1000);

mainStore.setPageData(PageData);


function initHead() {
  useHead({
    title: widgetsData.value?.title,
    htmlAttrs: {
      lang: 'zh',
    },
    script: [
      {
        children: `!function(e,t){function n(){var n=s.getBoundingClientRect().width;n>(t=t||540)&&(n=t);var i=100*n/e;s.style.fontSize=i+"px"}var i,o=document,d=window,s=o.documentElement;n(),d.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),d.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),d.addEventListener("DOMContentLoaded",function(){o.body.style.position="relative",o.body.style.fontSize="14px",o.body.style.margin="0 auto",o.body.style.maxWidth=t+"px"},!1)}(750,640);`,
      },
    ],
  });
}

async function initPageData(pgdata: Record<string, any>) {
  if (pgdata) widgetsData.value = pgdata.default || pgdata;
  if (widgetsData.value) {
    wgList.value = widgetsData.value.list;
    initHead();
  }
}

initPageData(PageData);
</script>
