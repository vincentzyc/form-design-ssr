<template>
  <div class="wg-random-code" :style="formatStyle(props.item.style)">
    <div :class="['wg-item', directionClass]">
      <div
        class="wg-title flex-none"
        v-show="props.item.showLabel"
        :style="{ width: changeRem(props.item.label.labelWidth) }"
        >{{ props.item.label.labelTitle }}</div
      >
      <div class="flex flex-auto align-middle">
        <input
          :placeholder="props.item.placeholder"
          type="text"
          maxlength="4"
          v-model.trim="props.item.value"
          class="wg-input flex-auto"
        />
        <button class="random-code flex-none" :style="formatStyle(props.item.style.btnStyle)" @click="getCode">{{
          props.item.codeValue
        }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import createCode from './create-code';
import { changeRem, formatStyle } from '@/utils/format/unit';
import { TypesRandomCode } from '../WgTypes';

const props = defineProps<{
  item: TypesRandomCode;
}>();

const getCode = () => {
  const randomData = createCode();
  props.item.codeValue = randomData.code;
  props.item.style.btnStyle.fontFamily = randomData.font;
};

const directionClass = props.item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle';

onMounted(async () => {
  await nextTick();
  getCode();
});
</script>
./create-code