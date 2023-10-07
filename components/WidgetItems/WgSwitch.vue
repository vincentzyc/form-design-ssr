<template>
  <div :class="wrapClass" :style="props.item.style">
    <div class="wg-title" :style="{ width: changeRem(props.item.label.labelWidth) }">{{ props.item.label.labelTitle }}</div>
    <label class="label" :id="props.item.key">
      <input type="checkbox" v-model="props.item.value" class="wg-switch-input" style="display: none" />
      <span class="wg-switch-core"></span>
    </label>
  </div>
</template>

<script lang="ts" setup>
// import { useWgFormList } from "@/composition/use-wgform";
import { changeRem } from "@/utils/format/unit";
import { TypesSwitch } from "./WgTypes";

const props = defineProps<{
  item: TypesSwitch;
}>();

// const wgFormList = useWgFormList();
// const { wgData, formData } = wgFormList.useAddForm(props.item);
const wrapClass = ["wg-item", "wg-switch", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];
</script>
