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
  <p>{{getres}}</p>
  <p>-------------</p>
  <ImportType />
</template>

<script setup>
import foo from '@foo'
import Axios from '@/plugins/axios'
import { reactive, ref, defineAsyncComponent } from 'vue'
const ImportType = load('ImportType')
const Foo = defineAsyncComponent(() =>
  import('../components/Foo').then((mod) => mod.Foo)
)
function load(file) {
  return defineAsyncComponent(() => import(`../components/${file}.vue`))
}

const getres = ref('')
const kdnum = ref('')

const handClick = () => {
  state.count++
  const num = kdnum.value || '1201594647434'
  Axios.get('https://biz.trace.ickd.cn/auto/' + num).then(res => {
    getres.value = res.data
  })
}
const state = reactive({ count: 0 })
</script>

<style scoped>
.inter {
  color: green;
}
</style>
