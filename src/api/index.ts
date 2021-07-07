import { ApiModule } from "./types"
import { apiModule1, ApiModuleList1 } from './apiModule1';
import { apiModule2, ApiModuleList2 } from './apiModule2';
import Axios from '@/plugins/axios'

const createInterface = (arr: ApiModule[]) => {
  const Interface = {};
  arr.forEach(v => {
    Interface[v.name] = (param: unknown) => {
      return new Promise(reslove => {
        axiosPost(v.url, param).then(res => reslove(res))
      })
    }
  })
  return Interface
}

export const ApiModule1 = createInterface(apiModule1) as ApiModuleList1
export const ApiModule2 = createInterface(apiModule2) as ApiModuleList2
export function env() {
  if (process.env.NODE_ENV === "development") return "development";
  return "production";
}
export function previewUrl() {
  if (env() === "development") {
    const arr = window.location.origin.split(":");
    return `${arr[0]}:${arr[1]}:9000`
  }
  return window.location.origin + "/form-design-render"
}
export function previewOrigin() {
  if (env() === "development") {
    const arr = window.location.origin.split(":");
    return `${arr[0]}:${arr[1]}:9000`
  }
  return window.location.origin
}
export function apiUrl() {
  return "http://xxx.com";
}
export function axiosPost(url: string, data: unknown) {
  return new Promise(resolve => {
    Axios.post(apiUrl() + url, data).then(res => {
      resolve(res);
    }).catch(error => {
      console.log(error);
    });
  })
}
export function postMsgoUrl() {
  if (env() === "development") {
    const arr = window.location.origin.split(":");
    return `${arr[0]}:${arr[1]}:9000`
  }
  return window.location.origin + "/form-design-next"
}
export function postMsgoOrigin() {
  if (env() === "development") {
    const arr = window.location.origin.split(":");
    return `${arr[0]}:${arr[1]}:9000`
  }
  return window.location.origin
}
export function testPost(data: unknown) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ code: 0, msg: "成功", data: "success", postData: data });
    }, 1000);
  })
}
/**
 * 获取验证码
 * @param phone  手机号
 */
export function getVerifyCode(phone: string) {
  return new Promise(resolve => {
    testPost(phone).then(res => resolve(res));
  })
}