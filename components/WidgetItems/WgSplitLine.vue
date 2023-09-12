<template>
  <div class="wg-splitLine wg-padding">
    <hr class="splitLine-hr" :style="formatStyle(item.style)" />
  </div>
</template>
<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import { TypesSplitLine } from "./WgTypes";

defineProps<{
  item: TypesSplitLine;
}>();
</script>
