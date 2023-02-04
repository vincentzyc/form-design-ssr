<template>
  <div class="wg-imgslide">
    <div :style="wrapSlideStyle">
      <Swipe :autoplay="item.interval" :style="slideContentStyle">
        <SwipeItem v-for="v in item.value">
          <a :href="v.url">
            <img :src="v.image" :style="{ width: '100%', height: '100%' }" />
          </a>
        </SwipeItem>
      </Swipe>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem } from "@/utils/format/unit";
import { Swipe, SwipeItem } from "vant";
import { TypesImgSlide } from "./WgTypes";

const props = defineProps<{
  item: TypesImgSlide;
}>();
const wrapSlideStyle = { margin: props.item.style.margin },
  slideContentStyle = { width: "100%", maxWidth: "640px", height: changeRem(props.item.style.height + "px") };
</script>
