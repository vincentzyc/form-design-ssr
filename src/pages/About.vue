<template>
  <h1>{{ msg }}</h1>
  <div>
    <input type="text" v-model="kdnum" />
    <button @click="handClick()">查快递</button>
  </div>
  <p>{{getres}}</p>
</template>

<script>
import Axios from '@/plugins/axios'
import { ref } from 'vue'
export default {
  async setup() {
    const getres = ref('')
    const kdnum = ref('')
    const handClick = () => {
      const num = kdnum.value || '1201594647434'
      Axios.get('https://biz.trace.ickd.cn/auto/' + num).then(res => {
        getres.value = res.data
      })
    }
    return {
      handClick,
      getres,
      kdnum,
      msg: 'About'
    }
  }
}
</script>
