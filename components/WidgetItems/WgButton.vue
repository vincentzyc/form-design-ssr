<template>
  <div :class="wrapClass" :style="wrapStyle()">
    <span :style="animteStyle()" class="animte-el"></span>
    <img v-if="item.style.isImgBtn" :src="props.item.style.value" alt="图片按钮" width="100%" @click="clickBtn()" />
    <button v-else class="wg-button" :style="formatStyle(props.item.style.btnStyle)" @click="clickBtn()">{{
      item.btnText
    }}</button>
  </div>
</template>

<script lang="ts" setup>
import { handleSubmit } from '@/form/submit';
import { formatStyle } from '@/utils/format/unit';
// import { useWgFormList } from "@/composition/use-wgform";
import { TypesButton } from './WgTypes';

const props = defineProps<{
  item: TypesButton;
}>();

// const wgFormList = useWgFormList();

const wrapStyle = () => {
  if (!props.item.animation) return formatStyle(props.item.style);
  return formatStyle({
    ...props.item.style,
    ...props.item.animation,
  });
};

const animteStyle = () => {
  if (!props.item.animation?.className) return { display: 'none' };
  return {
    ...props.item.animation,
    animationName: props.item.animation.className,
  };
};

const wrapClass = () => {
  if (!props.item.animation) return 'flex flex-center';
  return `flex flex-center ${props.item.animation.className}`;
};

const clickBtn = () => {
  switch (props.item.btnType) {
    case 'submit':
      // handleSubmit({ formData: wgFormList.formData, wgForms: wgFormList.wgForms, wgItem: props.item });
      handleSubmit({ wgItem: props.item });
      break;
    default:
      break;
  }
};
</script>
