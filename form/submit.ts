// import { valiWgValue } from './validate/index';
import { openLoading, closeLoading } from '@/utils/loading';

interface TypeSubmitAgrs {
  // formData: Record<string, any>;
  // wgForms: Record<string, any>[];
  wgItem: Record<string, any>;
}

// export function handleSubmit(obj: TypeSubmitAgrs) {
export function handleSubmit(obj: TypeSubmitAgrs) {
  // const { formData, wgForms } = obj;
  const { wgItem } = obj;
  // const valiDateRes = valiWgValue(formData, wgForms);
  // if (valiDateRes !== true && valiDateRes !== false) return showToast(valiDateRes);
  // submit(formData);
  submit(wgItem);
}

export function submit(data: Record<string, any>) {
  console.log('提交数据', data);
  openLoading('正在提交...');
  setTimeout(() => {
    closeLoading();
    showDialog({ message: '提交成功' });
  }, 2000);
}
