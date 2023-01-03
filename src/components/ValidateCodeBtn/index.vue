<template>
  <button class="validate-code-btn" :disabled="disbtn" @click="getCode">{{codetxt}} {{time}}</button>
</template>

<script lang="ts" setup>
import "./style.css";
import { showToast, showLoadingToast, closeToast } from "vant";

// showLoadingToast({
//   message: "加载中...",
//   forbidClick: true,
// });

// // import { getVerifyCode } from '@/api';

const props = defineProps<{
  phone: string;
}>();

let codetxt = $ref("获取验证码");
let time = $ref<string | number>();
let disbtn = $ref(false);

// /**
//  * 倒计时
//  * @param {Number} time  倒计时秒数
//  * @param {Function} tickFunc  每秒回调
//  * @param {Function} done     结束后回调
//  */
const countDown = (time: number, tickFunc: (time: number) => void, done: () => void) => {
  const tick = () => {
    setTimeout(() => {
      if (time > 0) {
        time--;
        tickFunc(time);
        tick();
      } else {
        done();
        return;
      }
    }, 1000);
  };
  tick();
};
const sendcCode = () => {
  disbtn = true;
  codetxt = "重新发送";
  time = 60;
  countDown(
    time,
    (tick: number) => {
      time = tick;
    },
    () => {
      time = "";
      disbtn = false;
    }
  );
  showToast("验证码已发送");
};
const getCode = async () => {
  if (disbtn) return;
  if (!/^1[3-9]\d{9}$/.test(props.phone)) {
    showToast("请输入正确的手机号");
    return;
  }
  showLoadingToast({
    message: "正在发送...",
    forbidClick: true,
  });
  // await getVerifyCode(props.phone);
  setTimeout(() => {
    closeToast();
    sendcCode();
  }, 2000);
};
</script>
