<template>
  <div :class="wgViewClass" :style="wgViewStyle.value">
    <component :is="'Wg' + props.item.type" :item="props.item" :parentsWg="props.parentsWg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WgChildList from './WgChildList.vue';
import WgImgShow from './WgImgShow.vue';
import WgSplitLine from './WgSplitLine.vue';
import WgStaticText from './WgStaticText.vue';
import WgCountDown from './WgCountDown.vue';
import WgButton from './WgButton.vue';
import WgPhone from "./WgPhone.vue";
import WgRandomCode from "./WgRandomCode/index.vue";
import WgInput from './WgInput.vue';
import WgSwitch from "./WgSwitch.vue";
import WgSelect from "./WgSelect.vue";
import WgAgreement from "./WgAgreement/index.vue";
import WgImgSlide from './WgImgSlide.vue';
import WgDatePicker from "./WgDatePicker.vue";
import WgVideoPlay from "./WgVideoPlay.vue";
import WgWechat from "./WgWechat.tsx";

export default defineComponent({
  name: 'WidgetItems',
  components: {
    WgChildList,
    WgImgShow,
    WgSplitLine,
    WgStaticText,
    WgCountDown,
    WgButton,
    WgPhone,
    WgRandomCode,
    WgInput,
    WgSwitch,
    WgSelect,
    WgAgreement,
    WgImgSlide,
    WgDatePicker,
    WgVideoPlay,
    WgWechat
  },
});
</script>

<script lang="ts" setup>
interface Props {
  item: Record<string, any>;
  parentsWg?: Record<string, any>;
}
const props = withDefaults(defineProps<Props>(), {
  item: () => ({}),
  parentsWg: () => ({}),
});

const wgViewStyle = computed(() => {
  if (Array.isArray(props.item.list)) {
    return {
      ...props.item.style,
      backgroundImage: `url(${props.item.backgroundImage})`,
    };
  }
  return {};
});
const wgViewClass = computed(() => (props.item.wgClassName ? props.item.wgClassName : 'widget-view'));

props.item.paths = props.parentsWg.paths ? [props.item.key, ...props.parentsWg.paths] : [props.item.key];
</script>