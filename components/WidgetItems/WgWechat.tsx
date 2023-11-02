import { defineComponent, PropType } from "vue"
import { formatStyle } from "@/utils/format/unit"
import { isWechat } from "@/utils/validate/browser"
import { copyText } from "@/utils/clipboard"
import { showDialog  } from "vant"
import { TypesWechat } from "./WgTypes";
import WxlogoImg from "@/assets/img/common/wxlogo.png"

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesWechat>,
      required: true
    }
  },
  setup(props) {
    const copy = () => {
      console.log(props.item.wechatName)
      copyText(props.item.wechatName).then(() => {
        showDialog({
          title: '复制成功',
          message: '请在微信粘贴搜索'
        }).then(() => confirm())
      }, () => {
        showDialog({
          title: '很抱歉',
          message: '您的浏览器不支持自动复制公众号，请手动复制后打开微信搜索'
        })
      })
    }
    const confirm = () => {
      if (isWechat()) return;
      window.location.href = "weixin://"
    }
    const getImgBtn = () => {
      return (
        <div class="flex flex-center" onClick={() => copy()} style={formatStyle(props.item.style)}>
          <img src={props.item.style.value} alt="图片按钮" width="100%" />
        </div>
      )
    }
    const getWechat = () => {
      return (
        <div class="flex align-middle wg-wechat-wrap" style={formatStyle(props.item.style)}>
          {getLogo()}
          {getWechatName()}
          <div
            class={['wechat-btn', props.item.showName ? 'flex-none' : 'flex-auto']}
            style={formatStyle(props.item.style.btnStyle)}
            onClick={() => copy()}
          >{props.item.btnText}</div>
        </div>
      )
    }
    const getLogo = () => {
      return props.item.showLogo && (
        <div class="wechat-avatar flex-none">
          {props.item.logo
            ? <img src={props.item.logo} alt="公众号logo" style="width:100%" />
            : <img src={WxlogoImg} alt="公众号logo" style="width:100%" />}
        </div>
      )
    }
    const getWechatName = () => {
      return props.item.showName && <div class="flex-auto">{props.item.value}</div>
    }
    return () => (
      <div class="wg-wechat clearfix" style={{ backgroundColor: props.item.backgroundColor }}>
        {props.item.style.isImgBtn ? getImgBtn() : getWechat()}
      </div>
    )
  }
})