<template>
  <div class="wg-splitLine wg-padding">
    <hr class="splitLine-hr" :style="item.style" />
  </div>
</template>
<script lang="ts" setup>
import { TypesSplitLine } from "./WgTypes";

defineProps<{
  item: TypesSplitLine;
}>();
</script>
