<template>
  <LazyVanPopup v-model:show="showPopup" class="custom-popup" style="max-width: 576px; overflow: visible">
    <svg class="close-icon" viewBox="0 0 1024 1024" @click="close">
      <path
        d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981a469 469 0 1 0 469 469A469 469 0 0 0 512 42z m207 676a20 20 0 0 1-28 0l-178-178-178 178a20 20 0 1 1-28-28l178-178-178-178a20 20 0 0 1 28-28l178 178 178-178a20 20 0 1 1 28 28l-178 178 178 178a20 20 0 0 1 0 28z"
        fill="#ffffff"
      ></path>
    </svg>
    <div class="popup-wrap"> <WidgetItems :item="item" :parentsWg="parentsWg" v-for="item in props.list" /> </div>
  </LazyVanPopup>
</template>
<script lang="ts" setup>
import WidgetItems from '@/components/WidgetItems/index.vue';
import './css/style.css';

interface Props {
  list: Record<string, any>[];
  parentsWg: Record<string, any>;
  show: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  show: false,
});

const showPopup = computed({
  get() {
    return props.show;
  },
  set(val) {
    emit('update:show', val);
  },
});

const emit = defineEmits<{
  (e: 'update:show', bool: boolean): void;
}>();

const close = () => {
  emit('update:show', false);
};
const open = () => {
  emit('update:show', true);
};

defineExpose({ open, close });
</script>
