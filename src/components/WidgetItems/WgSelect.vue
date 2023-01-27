<template>
  <div :class="wrapClass" style="{wgData.style}">
    <div class="wg-title" v-show="wgData.showLabel" :style="{ width: changeRem(wgData.label.labelWidth) }"
      >{wgData.label.labelTitle}</div
    >
    <div class="flex-auto disabled-input" @click="openPicker">
      <input
        disabled
        :id="wgData.key"
        v-model="formData[wgData.apiKey]"
        placeholder="{wgData.placeholder}"
        class="wg-input"
      />
      <i class="cubeic-select"></i>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
      <Picker show-toolbar :columns="wgData.options" @cancel="closePicker" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { Picker } from "vant";
import { changeRem } from "@/utils/format/unit";
import { useWgFormList } from "@/composition/use-wgform";
import { TypesSelect } from "./WgTypes";

const props = defineProps<{
  item: TypesSelect;
}>();
const wgFormList = useWgFormList();
const { wgData, formData } = wgFormList.useAddForm(props.item);
let showPicker = $ref(false);
const wrapClass = ["wg-item", wgData.label.labelPosition === "top" ? "flex-column" : "align-middle"];

const openPicker = () => {
  showPicker = true;
};
const closePicker = () => {
  showPicker = false;
};
const onConfirm = (value: string) => {
  formData[wgData.apiKey] = value;
  closePicker();
};
</script>
