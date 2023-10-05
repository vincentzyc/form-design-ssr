<template>
  <div :class="wrapClass" :style="item.style">
    <div class="wg-title" v-show="item.showLabel" :style="{ width: changeRem(item.label.labelWidth) }">{{
      item.label.labelTitle
    }}</div>
    <div class="flex-auto">
      <textarea
        v-if="item.isTextarea"
        v-model="item.value"
        :placeholder="item.placeholder"
        class="wg-textarea"
        :id="item.key"
      />
      <input
        v-else
        v-model="item.value"
        :placeholder="item.placeholder"
        class="wg-input"
        :id="item.key"
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
