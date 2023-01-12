// import { storeToRefs } from 'pinia'
import { useMainStore } from '@/pinia'

interface BaseItem {
  key: string,
  apiKey?: string,
  codeKey?: string,
  value?: any
}

export function useWgFormList() {
  const store = useMainStore()
  // const { formData, wgForms } = storeToRefs(store)

  const useAddForm = <T extends BaseItem>(item: T) => {
    const index = store.wgForms.findIndex(v => v.key === item.key)
    index > -1 ? store.wgForms.splice(index, 1, item) : store.wgForms.push(item)
    if (item.apiKey) store.formData[item.apiKey] = item.value || ''
    if (item.codeKey) store.formData[item.codeKey] = item.value || ''
    return {
      formData: store.formData,
      wgForms: store.wgForms,
      wgData: item
    }
  }

  const useRemoveForm = (list: Record<string, any>[]) => {
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      for (let formIndex = 0; formIndex < store.wgForms.length; formIndex++) {
        const formItem = store.wgForms[formIndex];
        if (formItem.key === item.key) {
          store.wgForms.splice(formIndex, 1)
          delete store.formData[formItem.apiKey]
          delete store.formData[formItem.codeKey]
        }
      }
    }
    return {
      formData: store.formData,
      wgForms: store.wgForms
    }
  }

  return {
    formData: store.formData,
    wgForms: store.wgForms,
    useRemoveForm,
    useAddForm
  }
}
// const wgFormList = useWgFormList()
// const { wgData, formData } = wgFormList.useAddForm(props.item)