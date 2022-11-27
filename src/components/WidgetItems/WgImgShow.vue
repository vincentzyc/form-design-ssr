<template>
  <div :style="formatStyle(item.style)">
    <ul class="flex flex-wrap" v-for="imgitem in item.imglist">
      <li :class="[item.styleType === 'col1' ? 'col-12' : 'col-6']">
        <div :class="imgWrapClass(imgitem.link)" @click="jumpLink(imgitem.link)">
          <img alt="图片" style="width: 100%" :src="imgitem.img" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import { isLink, jumpLink } from "@/utils/validate/link";
import { TypesImgShow } from "./WgTypes";

defineProps<{
  item: TypesImgShow;
}>();
const imgWrapClass = (link: string) => ["flex", "flex-center", isLink(link) ? "cursor-pointer" : ""];
</script>
