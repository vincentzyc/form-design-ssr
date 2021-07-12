<template>
  <h1>{{ msg }}</h1>
  <div>
    <input type="text" v-model="kdnum" />
    <Button @click="handClick()" type="primary">查快递</Button>
  </div>
  <p>{{getres}}</p>
</template>

<script>
import Axios from '@/plugins/axios'
import { ref } from 'vue'
import { Button } from 'vant';

export default {
  components: {
    Button
  },
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
