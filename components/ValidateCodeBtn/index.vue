<template>
  <button class="validate-code-btn" :disabled="disbtn" @click="getCode">{{ codetxt }} {{ showTime }}</button>
</template>

<script lang="ts" setup>
import "./style.css";
import { showToast, closeToast } from "vant";

const props = defineProps<{
  phone: string;
}>();

let codetxt = ref("获取验证码");
let showTime = ref<string | number>();
let disbtn = ref(false);

/**
 * 倒计时
 * @param {Number} time  倒计时秒数
 * @param {Function} tickFunc  每秒回调
 * @param {Function} done     结束后回调
 */
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
  disbtn.value = true;
  codetxt.value = "重新发送";
  showTime.value = 60;
  countDown(
    showTime.value,
    (tick: number) => {
      showTime.value = tick;
    },
    () => {
      showTime.value = "";
      disbtn.value = false;
    }
  );
  showToast("验证码已发送");
};
async function getVerifyCode(phone: string) {
  console.log(phone);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}
const getCode = async () => {
  if (disbtn.value) return;
  if (!/^1[3-9]\d{9}$/.test(props.phone)) {
    showToast("请输入正确的手机号");
    return;
  }
  openLoading("正在发送...");
  await getVerifyCode(props.phone);
  closeToast();
  sendcCode();
};
</script>
