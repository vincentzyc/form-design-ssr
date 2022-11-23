<template>
  <h1>About</h1>
  <p>Demo app using <code>vite-plugin-ssr</code>.</p>
  <DragVerify :isPassing="isPassing" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DragVerify from "@cp/DragVerify/DragVerify.vue";
import { usePageContext } from "../../renderer/usePageContext";

const pageContext = usePageContext()

console.log(pageContext)

const isPassing = ref(false);
</script>

<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
