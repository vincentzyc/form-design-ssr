<template>
  <div :class="wgViewClass.value" :style="wgViewStyle.value">
    <component :is="'Wg' + props.item.type" :item="props.item" :parentsWg="props.parentsWg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WgChildList from "./WgChildList.vue";
import WgImgShow from "./WgImgShow.vue";
import WgSplitLine from "./WgSplitLine.vue";
import WgStaticText from "./WgStaticText.vue";
import WgCountDown from "./WgCountDown.vue";
import WgButton from "./WgButton.vue";
import WgPhone from "./WgPhone.vue";

export default defineComponent({
  name: "WidgetItems",
  components: {
    WgChildList,
    WgImgShow,
    WgSplitLine,
    WgStaticText,
    WgCountDown,
    WgButton,
    WgPhone
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
  parentsWg: () => ({ type: "window" }),
});

const wgViewStyle = $computed(() => {
  if (Array.isArray(props.item.list)) {
    return {
      ...props.item.style,
      backgroundImage: `url(${props.item.backgroundImage})`,
    };
  }
  return {};
});
const wgViewClass = $computed(() => (props.item.wgClassName ? props.item.wgClassName : "widget-view"));
</script>
