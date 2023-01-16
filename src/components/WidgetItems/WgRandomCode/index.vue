<template>
  <div class="wg-random-code" :style="formatStyle(wgData.style)">
    <div :class="['wg-item', directionClass]">
      <div
        class="wg-title flex-none"
        v-show="wgData.showLabel"
        :style="{ width: changeRem(wgData.label.labelWidth) }"
        >{{ wgData.label.labelTitle }}</div
      >
      <div class="flex flex-auto align-middle">
        <input
          :placeholder="wgData.placeholder"
          type="text"
          maxlength="4"
          v-model.trim="formData[wgData.apiKey]"
          class="wg-input flex-auto"
          :id="wgData.key"
        />
        <button class="random-code flex-none" :style="formatStyle(wgData.style.btnStyle)" @click="getCode()">{{
          wgData.codeValue
        }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import createCode from "./random-code";
import { changeRem, formatStyle } from "@/utils/format/unit";
import { useWgFormList } from "@/composition/use-wgform";
import { TypesRandomCode } from "../WgTypes";
import { onMounted } from "vue";

const props = defineProps<{
  item: TypesRandomCode;
}>();

const wgFormList = useWgFormList();
const { wgData, formData } = wgFormList.useAddForm(props.item);

function getCode() {
  const randomData = createCode();
  wgData.codeValue = randomData.code;
  wgData.style.btnStyle.fontFamily = randomData.font;
}

wgData.getCode = getCode;

const directionClass = wgData.label.labelPosition === "top" ? "flex-column" : "align-middle";

onMounted(() => {
  getCode();
});
</script>
