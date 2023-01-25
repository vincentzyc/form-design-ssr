import { defineComponent } from 'vue'
import { Picker } from 'vant';
import { changeRem } from "@/utils/format/unit"
import { useWgFormList } from '@/composition/use-wgform';
import { ref, PropType } from 'vue';
import { TypesSelect } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesSelect>,
      required: true
    }
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)
    const showPicker = ref(false)
    const wrapClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle'];

    const openPicker = () => {
      showPicker.value = true
    }
    const closePicker = () => {
      showPicker.value = false
    }
    const onConfirm = (value: string) => {
      formData[wgData.apiKey] = value
      closePicker()
    }

    return () => (
      <div class={wrapClass} style={wgData.style}>
        <div
          class="wg-title"
          v-show={wgData.showLabel}
          style={{ width: changeRem(wgData.label.labelWidth) }}
        >{wgData.label.labelTitle}</div>
        <div class="flex-auto disabled-input" onClick={openPicker}>
          <input
            disabled
            id={wgData.key}
            v-model={formData[wgData.apiKey]}
            placeholder={wgData.placeholder}
            class="wg-input" />
          <i class="cubeic-select"></i>
        </div>
        <van-popup v-model={[showPicker.value, 'show']} round position="bottom">
          <Picker
            show-toolbar
            columns={wgData.options}
            onCancel={closePicker}
            onConfirm={onConfirm}
          />
        </van-popup>
      </div>
    )
  }
})
