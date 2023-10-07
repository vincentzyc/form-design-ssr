<template>
  <div :class="wrapClass" :style="props.item.style">
    <div class="wg-title" v-show="props.item.showLabel" :style="{ width: changeRem(props.item.label.labelWidth) }">{{
      props.item.label.labelTitle
    }}</div>
    <div class="flex-auto">
      <textarea
        v-if="props.item.isTextarea"
        v-model="props.item.value"
        :placeholder="props.item.placeholder"
        class="wg-textarea"
        :id="props.item.key"
      />
      <input
        v-else
        v-model="props.item.value"
        :placeholder="props.item.placeholder"
        class="wg-input"
        :id="props.item.key"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changeRem } from "@/utils/format/unit";
import { TypesInput } from "./WgTypes";

const props = defineProps<{
  item: TypesInput;
}>();

const wrapClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];
</script>
