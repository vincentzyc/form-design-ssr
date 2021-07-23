<template>
  <div :class="wgViewClass" :style="wgViewStyle">
    <WgStaticText :item="props.item" v-if="props.item.type==='StaticText'" />
    <!-- <component :is="componentId" :item="props.item"></component> -->
    <!-- <component :is="'Wg' + props.item.type" :item="props.item"></component> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"

// import WgPhone from "./WgPhone"
// import WgInput from "./WgInput"
// import WgCheckbox from "./WgCheckbox"
// import WgSelect from "./WgSelect"
// import WgSwitch from "./WgSwitch"
// import WgDatePicker from "./WgDatePicker"
// import WgImgShow from "./WgImgShow"
import WgStaticText from "./WgStaticText"
// import WgSplitLine from "./WgSplitLine"
// import WgWechat from './WgWechat'
// import WgMarquee from './WgMarquee'
// import WgAgreement from './WgAgreement'
// import WgMarqueeSingle from './WgMarqueeSingle'
// import WgVideoPlay from './WgVideoPlay'
// import WgRandomCode from './WgRandomCode'
// import WgHPicker from './HPicker'
// import WgChildList from './WgChildList'

// const Widget = resolveComponent('Wg' + props.item.type)
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const wgViewStyle = computed(() => {
  if (Array.isArray(props.item.list)) {
    return {
      ...props.item.style,
      backgroundImage: `url(${props.item.backgroundImage})`
    };
  }
  return {}
})
const wgViewClass = computed(() => props.item.wgClassName ? props.item.wgClassName : 'widget-view')

</script>

