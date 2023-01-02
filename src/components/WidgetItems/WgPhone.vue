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
        <input placeholder="验证码" type="tel" maxlength="{6}" v-model="item.codeValue" class="wg-input flex-auto" />
        <!-- <ValidateCodeBtn phone={formData[item.apiKey]} style={formatStyle(item.style.btnStyle)} /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem, formatStyle } from "@/utils/format/unit";
import { TypesPhone } from "./WgTypes";

const props = defineProps<{
  item: TypesPhone;
}>();

const phoneClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];

const codeClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];
</script>
<!-- import { defineComponent, PropType } from "vue"
import { useWgFormList } from '@/composition/use-wgform'
import { changeRem, formatStyle } from "@/utils/format/unit"
import ValidateCodeBtn from '@/components/base/ValidateCodeBtn'
import { TypesPhone } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesPhone>,
      required: true
    }
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)

    const getPhone = () => {
      const phoneClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
      return (
        <div class={phoneClass}>
          <div
            v-show={wgData.showLabel}
            class="wg-title flex-none"
            style={{ width: changeRem(wgData.label.labelWidth) }}
          >{wgData.label.labelTitle}</div>
          <div class="flex-auto">
            <input
              id={wgData.key}
              class="wg-input"
              type="tel"
              maxlength={11}
              v-model={[formData[wgData.apiKey], ['trim']]}
              placeholder={wgData.placeholder}
            />
          </div>
        </div>
      )
    }
    const getValidateCode = () => {
      const codeClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
      return wgData.showCode && (
        <div class={codeClass}>
          <div
            v-show={wgData.showLabel}
            class="wg-title flex-none"
            style={{ width: changeRem(wgData.label.labelWidth) }}
          >验证码</div>
          <div class="flex flex-auto flex-center">
            <input placeholder="验证码" type="tel" maxlength={6} v-model={[formData[wgData.codeKey], ['trim']]} class="wg-input flex-auto" />
            <ValidateCodeBtn phone={formData[wgData.apiKey]} style={formatStyle(wgData.style.btnStyle)} />
          </div>
        </div>
      )
    }

    return () => (
      <div class="wg-phone" style={formatStyle(wgData.style)}>
        {getPhone()}
        {getValidateCode()}
      </div>
    )
  }
}) -->
