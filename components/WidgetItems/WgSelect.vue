<template>
  <div :class="wrapClass" :style="props.item.style">
    <div class="wg-title" v-show="props.item.showLabel" :style="{ width: changeRem(props.item.label.labelWidth) }">{{
      props.item.label.labelTitle
    }}</div>
    <div class="flex-auto disabled-input" @click="openPicker">
      <input
        readonly
        :id="props.item.key"
        v-model="props.item.value"
        :placeholder="props.item.placeholder"
        class="wg-input"
      />
    </div>
    <LazyVanPopup v-model:show="showPicker" round position="bottom">
      <VanPicker show-toolbar :columns="props.item.options" @cancel="closePicker" @confirm="onConfirm" />
    </LazyVanPopup>
  </div>
</template>

<script lang="ts" setup>
import { PickerConfirmEventParams } from 'vant';
import { changeRem } from '@/utils/format/unit';
import { TypesSelect } from './WgTypes';

const props = defineProps<{
  item: TypesSelect;
}>();
let showPicker = ref(false);
const wrapClass = ['wg-item', props.item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle'];

const openPicker = () => {
  showPicker.value = true;
};
const closePicker = () => {
  showPicker.value = false;
};
const onConfirm = (value: PickerConfirmEventParams) => {
  console.log(value);
  props.item.value = value.selectedValues[0] as string;
  closePicker();
};
</script>
