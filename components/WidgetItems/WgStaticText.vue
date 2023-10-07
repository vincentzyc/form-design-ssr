<template>
  <div class="wg-staticText clearfix" :style="domStyle">
    <div :style="formatStyle(props.item.style)" @click="handleClick" v-html="props.item.value"></div>
    <CustomPopup ref="elCustomPopup" :list="props.item.popupList || []" :parentsWg="props.item" v-model:show="showPopup" />
  </div>
</template>
<script lang="ts" setup>
import { formatStyle } from '@/utils/format/unit';
import { jumpLink } from '@/utils/validate/link';
import CustomPopup from '@/components/WgPopup/index.vue';
import { TypesStaticText } from './WgTypes';

const props = defineProps<{
  item: TypesStaticText;
}>();
const showPopup = ref(false);
const elCustomPopup = ref<typeof CustomPopup>();
const domStyle = {
  backgroundColor: props.item.backgroundColor || '',
  backgroundImage: props.item.backgroundImage ? `url(${props.item.backgroundImage})` : '',
};
const handleClick = () => {
  if (props.item.link) return jumpLink(props.item.link);
  if (props.item.popupList?.length > 0) {
    elCustomPopup.value && elCustomPopup.value.open();
  }
};
</script>
