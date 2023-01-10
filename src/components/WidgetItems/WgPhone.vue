<template>
  <div class="wg-phone" :style="formatStyle(item.style)">
    <div :class="phoneClass">
      <div v-show="item.showLabel" class="wg-title flex-none" :style="{ width: changeRem(item.label.labelWidth) }">{{
        item.label.labelTitle
      }}</div>
      <div class="flex-auto">
        <input
          :id="item.key"
          class="wg-input"
          type="tel"
          maxLength="11"
          v-model.trim="item.value"
          :placeholder="item.placeholder"
        />
      </div>
    </div>
    <div :class="codeClass" v-if="item.showCode">
      <div v-show="item.showLabel" class="wg-title flex-none" :style="{ width: changeRem(item.label.labelWidth) }"
        >验证码</div
      >
      <div class="flex flex-auto flex-center">
        <input placeholder="验证码" type="tel" maxlength="6" v-model="item.codeValue" class="wg-input flex-auto" />
        <ValidateCodeBtn :phone="item.value" :style="formatStyle(item.style.btnStyle)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem, formatStyle } from "@/utils/format/unit";
import { TypesPhone } from "./WgTypes";
import ValidateCodeBtn from '@cp/ValidateCodeBtn/index.vue'
import { useWgFormList } from "@/composition/use-wgform";

const props = defineProps<{
  item: TypesPhone;
}>();

const wgFormList = useWgFormList()

const { wgData, formData } = wgFormList.useAddForm(props.item)

console.log(wgFormList)
console.log(wgData)
console.log(formData)

const phoneClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];

const codeClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];
</script>