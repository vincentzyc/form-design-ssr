<template>
  <div class="childlist" :style="formatStyle(props.item.style)">
    <WidgetItems :item="childItem" :parentsWg="props.item" v-for="childItem in props.item.list" />
  </div>
</template>

<script lang="ts" setup>
import { formatStyle } from "@/utils/format/unit";
import WidgetItems from "@/components/WidgetItems/index.vue";

const props = defineProps<{
  item: Record<string, any>;
}>();
</script>
