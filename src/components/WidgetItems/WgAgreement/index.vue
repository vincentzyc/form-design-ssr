<template>
  <div class="wg-agreement clearfix wg-padding" :id="wgData.key">
    <Checkbox v-model="formData[wgData.apiKey]" :style="formatStyle(wgData.style)" shape="square">
      <p :style="{ margin: 0, color: wgData.style.color }">
        <span>{{ wgData.tipText }}</span>
        <span v-for="(titleText, key) in wgData.titleTexts">
          <span v-if="key > 0">和</span>
          <span
            v-if="titleText.title"
            :style="{ color: wgData.agreementColor }"
            @click="openAgreement(titleText.text, $event)"
            >{{ titleText.title }}</span
          >
        </span>
      </p>
    </Checkbox>
    <AgreementPopup ref="elAgreement" />
  </div>
</template>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import { Checkbox } from "vant";
import AgreementPopup from "./AgreementPopup.vue";
import { useWgFormList } from "@/composition/use-wgform";
import { TypesAgreement } from "../WgTypes";

const props = defineProps<{
  item: TypesAgreement;
}>();

const elAgreement = $ref<typeof AgreementPopup>();
const wgFormList = useWgFormList();
const { wgData, formData } = wgFormList.useAddForm(props.item);

const openAgreement = (text: string, event: MouseEvent) => {
  event.stopPropagation();
  elAgreement && elAgreement.open(text);
};
</script>