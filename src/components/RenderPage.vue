<template>
  <div class="widget-list" ref="widgetList">
    <template v-for="(item, i) in wgList">
      <WidgetItems :item="item" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import WidgetItems from "@cp/WidgetItems/index.vue";

defineProps<{
  wgList: Record<string, any>[];
}>();
</script>
