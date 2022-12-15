import { formatStyle } from "@/utils/format/unit"
import { defineComponent, PropType } from "vue"
import { TypesVideoPlay } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesVideoPlay>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div class="wg-video-play" style={formatStyle(props.item.style)}>
        <video {...props.item.videoAttr} style="width:100%;height:100%">您的浏览器不支持视频播放哦~</video>
      </div>
    )
  }
})