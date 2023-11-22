import { openLoading, closeLoading } from '@/utils/loading';
import { useMainStore } from '@/pinia';
import { valiAllDate } from './validate';

interface TypeSubmitAgrs {
  // formData: Record<string, any>;
  // wgForms: Record<string, any>[];
  wgItem: Record<string, any>;
}

export function handleSubmit(obj: TypeSubmitAgrs) {
  const { wgItem } = obj;
  const mainStore = useMainStore();
  const valiDateRes = valiAllDate(mainStore.pageData?.list, {});
  if (typeof valiDateRes === 'string') return showToast(valiDateRes);
  submit(valiDateRes, wgItem);
}

export function submit(data: Record<string, any>, wgItem: Record<string, any>) {
  console.log('提交数据', data);
  console.log('组件数据', wgItem);
  openLoading('正在提交...');
  setTimeout(() => {
    closeLoading();
    showDialog({ message: '提交成功' });
  }, 2000);
}
