<template>
  <Popup v-model:show="props.show" class="custom-popup" style="max-width: 576px; overflow: visible">
    <svg class="close-icon" viewBox="0 0 1024 1024" @click="close">
      <path
        d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m207.402667 676.437333a20.224 20.224 0 0 1-28.629334 0l-178.944-178.944-178.944 178.944a20.245333 20.245333 0 1 1-28.629333-28.629333l178.944-178.944-178.645333-178.645334a20.245333 20.245333 0 0 1 28.629333-28.629333l178.645333 178.645333 178.645334-178.645333a20.245333 20.245333 0 1 1 28.629333 28.629333l-178.645333 178.645334 178.944 178.944a20.224 20.224 0 0 1 0 28.629333z"
        fill="#ffffff"
      ></path>
    </svg>
    <div class="popup-wrap"> <WidgetItems :item="item" v-for="item in props.list" /> </div>
  </Popup>
</template>
<script lang="ts" setup>
import WidgetItems from "@cp/WidgetItems/index.vue";
import { Popup } from "vant";
import "./css/style.css";

interface Props {
  list: Record<string, any>[];
  show: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  show: true,
});

const emit = defineEmits<{
  (e: "update:show", bool: boolean): void;
}>();

const close = () => {
  emit("update:show", false);
};
const open = () => {
  emit("update:show", true);
};

defineExpose({ open, close });
</script>
