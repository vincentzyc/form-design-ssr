<template>
  <div class="wg-video-play" :style="formatStyle(props.item.style)">
    <video v-bind="props.item.videoAttr" style="width: 100%; height: 100%">您的浏览器不支持视频播放哦~</video>
  </div>
</template>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import { TypesVideoPlay } from "./WgTypes";

const props = defineProps<{
  item: TypesVideoPlay;
}>();
</script>
