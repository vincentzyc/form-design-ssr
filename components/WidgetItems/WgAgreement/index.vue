<template>
  <div class="wg-agreement clearfix wg-padding" :id="props.item.key">
    <VanCheckbox v-model="props.item.value" :style="formatStyle(props.item.style)" shape="square">
      <p :style="{ margin: 0, color: props.item.style.color }">
        <span>{{ props.item.tipText }}</span>
        <span v-for="(titleText, key) in props.item.titleTexts">
          <span v-if="key > 0">和</span>
          <span
            v-if="titleText.title"
            :style="{ color: props.item.agreementColor }"
            @click="openAgreement(titleText.text, $event)"
            >{{ titleText.title }}</span
          >
        </span>
      </p>
    </VanCheckbox>
    <AgreementPopup ref="elAgreement" />
  </div>
</template>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import AgreementPopup from "./AgreementPopup.vue";
// import { useWgFormList } from "@/composition/use-wgform";
import { TypesAgreement } from "../WgTypes";

const props = defineProps<{
  item: TypesAgreement;
}>();

const elAgreement = ref<typeof AgreementPopup>();
// const wgFormList = useWgFormList();
// const { wgData, formData } = wgFormList.useAddForm(props.item);

const openAgreement = (text: string, event: MouseEvent) => {
  event.stopPropagation();
  elAgreement.value && elAgreement.value.open(text);
};
</script>