<template>
  <div :class="wrapClass" :style="wgData.style">
    <div class="wg-title" v-show="wgData.showLabel" :style="{ width: changeRem(wgData.label.labelWidth) }">{{
      wgData.label.labelTitle
    }}</div>
    <div class="flex-auto">
      <textarea
        v-if="wgData.isTextarea"
        v-model="formData[wgData.apiKey]"
        :placeholder="wgData.placeholder"
        class="wg-textarea"
        :id="wgData.key"
      />
      <input
        v-else
        v-model="formData[wgData.apiKey]"
        :placeholder="wgData.placeholder"
        class="wg-input"
        :id="wgData.key"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem } from "@/utils/format/unit";
import { useWgFormList } from "@/composition/use-wgform";
import { TypesInput } from "./WgTypes";

const props = defineProps<{
  item: TypesInput;
}>();

const wgFormList = useWgFormList();
const { wgData, formData } = wgFormList.useAddForm(props.item);
const wrapClass = ["wg-item", wgData.label.labelPosition === "top" ? "flex-column" : "align-middle"];
</script>
