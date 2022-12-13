<template>
  <div class="wg-staticText clearfix" :style="domStyle">
    <p v-html="changeRem(props.item.value)"></p>
    <!-- <p :style="formatStyle(props.item.style)" v-html="changeRem(props.item.value)" @click="handleClick"></p> -->
    <!-- <CustomPopup ref="elCustomPopup" :list="props.item.popupList || []" :show="props.item.showPopup" /> -->
  </div>
</template>
<script lang="ts" setup>
import { changeRem, formatStyle } from "@/utils/format/unit";
import { jumpLink } from "@/utils/validate/link";
import CustomPopup from "./WgPopup/index.vue";
import { TypesStaticText } from "./WgTypes";

const props = defineProps<{
  item: TypesStaticText;
}>();

const elCustomPopup = $ref<typeof CustomPopup>();
const domStyle = {
  backgroundColor: props.item.backgroundColor || "",
  backgroundImage: props.item.backgroundImage ? `url(${props.item.backgroundImage})` : "",
};
const handleClick = () => {
  if (props.item.link) return jumpLink(props.item.link);
  if (props.item.popupList?.length > 0) {
    elCustomPopup && elCustomPopup.open();
  }
};
</script>
