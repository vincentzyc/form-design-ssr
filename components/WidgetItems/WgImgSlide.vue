<template>
  <div class="wg-imgslide">
    <div :style="props.item.style">
      <LazyVanSwipe :autoplay="props.item.interval" :style="slideContentStyle">
        <LazyVanSwipeItem v-for="v in props.item.value">
          <a :href="v.url">
            <img :src="v.image" :style="{ width: '100%', height: '100%' }" />
          </a>
        </LazyVanSwipeItem>
      </LazyVanSwipe>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem } from "@/utils/format/unit";
import { TypesImgSlide } from "./WgTypes";

const props = defineProps<{
  item: TypesImgSlide;
}>();
const slideContentStyle = { width: "100%", maxWidth: "640px", height: changeRem(props.item.style.height + "px") };
</script>
