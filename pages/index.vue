<template>
  <div class="container">
    <div>
      <NuxtLogo />
      <TestDemo />
      <h1 class="title">Welcome to the Vant + Nuxt.js template</h1>
      <Todos />
      <div class="links">
        <van-button type="primary" url="https://nuxtjs.org/">Documentation</van-button>
        <van-button url="https://github.com/nuxt/nuxt.js">GitHub</van-button>
        <van-button url="https://vant-contrib.gitee.io/vant">Vant UI</van-button>
      </div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell :chosen-coupon="chosenCoupon" :coupons="coupons" @click="showList = true" />
      <!-- 优惠券列表 -->
      <van-popup position="bottom" round style="height: 90%; padding-top: 4px;" v-model="showList">
        <van-coupon-list
          :chosen-coupon="chosenCoupon"
          :coupons="coupons"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
}

import Todos from './todos.vue'
export default {
  components: {
    Todos
  },
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      console.log(code);
      this.coupons.push(coupon);
    },
  }
}
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
