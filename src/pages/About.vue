<template>
  <h1 @click="handClick()">{{ msg }}</h1>
</template>

<script>
import Axios from '../plugins/axios'
export default {
  async setup() {
    const handClick = () => {
      Axios.get('https://biz.trace.ickd.cn/auto/12312312').then(res => {
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
