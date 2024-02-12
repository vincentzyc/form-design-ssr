import pgdata from '@/data/pgdata';

export default defineEventHandler(event => {
  console.log(getRequestURL(event));
  // 模拟接口返回
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(pgdata);
    }, 300);
  });
});
