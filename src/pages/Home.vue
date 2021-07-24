<template>
  <h1>Home</h1>
  <p>
    <img alt="logo" src="../assets/logo.png" />
  </p>
  <button @click="handClick">count is: {{ state.count }}</button>
  <Foo />
  <p class="virtual">msg from virtual module: {{ foo.msg }}</p>
  <p class="inter">this will be styled with a font-face</p>
  <p>-------------</p>
  <About />
  <p>-------------</p>
  <ImportType />
</template>

<script setup lang="ts">
import foo from '@foo'
import About from "@/pages/About.vue"
import Axios from '@/plugins/axios'
import { reactive, ref, defineAsyncComponent } from 'vue'
const ImportType = load('ImportType')
const Foo = defineAsyncComponent(() =>
  import('../components/Foo/Foo').then((mod) => mod.Foo)
)
function load(file) {
  return defineAsyncComponent(() => import(`../components/${file}.vue`))
}

const kdnum = ref('')

const handClick = () => {
  state.count++
}
const state = reactive({ count: 0 })
</script>

<style scoped>
.inter {
  color: green;
}
</style>
