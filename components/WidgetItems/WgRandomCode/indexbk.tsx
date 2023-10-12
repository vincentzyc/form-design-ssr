import { defineComponent, PropType } from 'vue'
import createCode from './random-code'
import { changeRem, formatStyle } from "@/utils/format/unit";
// import { useWgFormList } from '@/composition/use-wgform';
import { TypesRandomCode } from "../WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesRandomCode>,
      required: true
    }
  },
  setup(props) {
    const getCode = () => {
      const randomData = createCode()
      console.log(randomData)
      props.item.codeValue =  randomData.code;
      props.item.style.btnStyle.fontFamily = randomData.font;
    }
    // const wgFormList = useWgFormList()
    // const { wgData, formData } = wgFormList.useAddForm(props.item)

    props.item.getCode = getCode
    const directionClass = props.item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle';

    // onMounted(async ()=>{
    //   console.log(123)
    //   await nextTick();
    //   getCode()
    // })

    return () => (
      <div class="wg-random-code" style={formatStyle(props.item.style)}>
        <div class={['wg-item', directionClass]}>
          <div
            class="wg-title flex-none"
            v-show={props.item.showLabel}
            style={{ width: changeRem(props.item.label.labelWidth) }}
          >{props.item.label.labelTitle}</div>
          <div class="flex flex-auto align-middle">
            <input placeholder={props.item.placeholder} type="text" maxlength={4} v-model={[props.item.value, ['trim']]} class="wg-input flex-auto" />
            <button class="random-code flex-none" style={formatStyle(props.item.style.btnStyle)} onClick={getCode}>{props.item.codeValue}</button>
          </div>
        </div>
      </div>
    )
  }
})

