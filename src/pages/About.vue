<template>
  <h1>{{ msg }}</h1>
  <button @click="handClick()">查快递</button>
  <p>{{getres}}</p>
</template>

<script>
import Axios from '@/plugins/axios'
import { ref } from 'vue'
export default {
  async setup() {
    let getres = ref('')
    const handClick = () => {
      Axios.get('https://biz.trace.ickd.cn/auto/1201594647434').then(res => {
        getres.value = res.data
      })
    }
    return {
      handClick,
      getres,
      msg: 'About'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
