<template>
  <LazyVanPopup v-model:show="showAgreement" class="agreement-popup" style="max-width: 576px">
    <div class="agreement-wrap">
      <iframe v-if="isLink(showText)" :src="showText" frameborder="0" style="width: 100%; height: 100%"></iframe>
      <p v-else class="agreement-text" v-html="textBr(showText)"></p>
    </div>
    <div class="agreement-confirm" @click="close">我知道了</div>
  </LazyVanPopup>
</template>

<script lang="ts" setup>
// 弹框组件（支持iframe嵌入页面）
import { textBr } from "@/utils/format/string";
import { isLink } from "@/utils/validate/link";
import './css/style.css';

const emit = defineEmits(["close"]);

let showAgreement = ref(false);
let showText = ref("");

const open = (text: string) => {
  showText.value = text || "";
  showAgreement.value = true;
};
const close = () => {
  showAgreement.value = false;
  emit("close");
};
defineExpose({ open, close });
</script>
