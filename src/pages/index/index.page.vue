<template>
  <h1 @click="test">Home</h1>
  <div>
    <RenderPage :wgList="wgList" />
  </div>
</template>

<script lang="ts" setup>
// import { reactive } from 'vue';
import RenderPage from "@cp/RenderPage.vue";
import widgetsData from "@/data/pgdata";
import { showLoadingToast } from "vant";

const wgList = $ref(widgetsData.list);

function test() {
  showLoadingToast({
    message: "正在发送...",
    forbidClick: true,
  });
}

// import pgdata from '../../data/pgdata'

// console.log(pgdata)
// import { usePageContext } from "../../renderer/usePageContext";

// const pageContext = usePageContext()

// console.log(pageContext)
</script>
