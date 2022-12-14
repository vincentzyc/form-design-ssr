<template>
  <div class="childlist">
    <WidgetItems :item="childItem" :parentsWg="props.item" v-for="childItem in item.list" />
  </div>
</template>

<script lang="ts" setup>
import WidgetItems from "@cp/WidgetItems/index.vue";

const props = defineProps<{
  item: Record<string, any>;
}>();
</script>