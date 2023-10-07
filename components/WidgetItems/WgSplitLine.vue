<template>
  <div class="wg-splitLine wg-padding">
    <hr class="splitLine-hr" :style="formatStyle(props.item.style)" />
  </div>
</template>
<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import { TypesSplitLine } from "./WgTypes";

const props = defineProps<{
  item: TypesSplitLine;
}>();
</script>
