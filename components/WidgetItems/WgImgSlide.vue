<template>
  <div class="wg-imgslide">
    <div :style="item.style">
      <VanSwipe :autoplay="item.interval" :style="slideContentStyle">
        <VanSwipeItem v-for="v in item.value">
          <a :href="v.url">
            <img :src="v.image" :style="{ width: '100%', height: '100%' }" />
          </a>
        </VanSwipeItem>
      </VanSwipe>
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
