// import { useWgFormList } from "@/composition/use-wgform";
import { changeRem } from "@/utils/format/unit";
import { defineComponent, PropType } from "vue"
import HScrollPicker from './HScrollPicker'
import { TypesHPicker } from "../WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesHPicker>,
      required: true
    }
  },
  setup(props) {
    // const wgFormList = useWgFormList()
    // const { wgData, formData } = wgFormList.useAddForm(props.item)

    const wrapClass = ['wg-item', props.item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']

    return () => (
      <div id={props.item.key} class={wrapClass} style={props.item.style}>
        <div class="wg-title flex-none" style={{ width: changeRem(props.item.label.labelWidth) }}>{props.item.label.labelTitle}</div>
        <div class="flex-auto" id={props.item.key}>
          <HScrollPicker
            v-model={props.item.value}
            data={props.item.options}
            pickerStyle={props.item.pickerStyle}
            itemWidth={props.item.itemWidth}
            showNumber={props.item.showNumber} />
        </div>
      </div>
    )
  }
})
