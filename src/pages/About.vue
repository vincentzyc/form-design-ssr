<template>
  <h1 @click="handClick()">{{ msg }}</h1>
</template>

<script>
import Axios from '../plugins/axios'
export default {
  async setup() {
    const handClick = () => {
      Axios.post('http://test-card.liulianglf.cn/service/jimPenn/page_id', { pid: "10086" }).then(res => {
        console.log(res);
      })
    }
    return {
      handClick,
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
