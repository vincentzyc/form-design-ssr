<template>
  <div class="wg-phone" :style="formatStyle(props.item.style)">
    <div :class="phoneClass">
      <div v-show="props.item.showLabel" class="wg-title flex-none" :style="{ width: changeRem(props.item.label.labelWidth) }">{{
        props.item.label.labelTitle
      }}</div>
      <div class="flex-auto">
        <input
          :id="props.item.key"
          class="wg-input"
          type="tel"
          maxLength="11"
          v-model.trim="props.item.value"
          :placeholder="props.item.placeholder"
        />
      </div>
    </div>
    <div :class="codeClass" v-if="props.item.showCode">
      <div v-show="props.item.showLabel" class="wg-title flex-none" :style="{ width: changeRem(props.item.label.labelWidth) }"
        >验证码</div
      >
      <div class="flex flex-auto flex-center">
        <input placeholder="验证码" type="tel" maxlength="6" v-model="props.item.codeValue" class="wg-input flex-auto" />
        <ValidateCodeBtn :phone="props.item.value" :style="formatStyle(props.item.style.btnStyle)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem, formatStyle } from "@/utils/format/unit";
import { TypesPhone } from "./WgTypes";
import ValidateCodeBtn from '@cp/ValidateCodeBtn/index.vue'
// import { useWgFormList } from "@/composition/use-wgform";

const props = defineProps<{
  item: TypesPhone;
}>();

// const wgFormList = useWgFormList()

// const { wgData, formData } = wgFormList.useAddForm(props.item)

const phoneClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];

const codeClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];
</script>