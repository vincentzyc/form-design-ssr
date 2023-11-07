export default {
  list: [
    {
      type: 'ImgSlide',
      name: '图片轮播',
      value: [
        {
          url: 'https://www.baidu.com',
          image: 'https://vincentzyc.github.io/form-design-next/static/img/theme1.jpg',
        },
        { url: 'https://qq.com', image: 'https://vincentzyc.github.io/form-design-next/static/img/theme2.jpg' },
        { url: 'https://jd.com', image: 'https://vincentzyc.github.io/form-design-next/static/img/theme3.jpg' },
      ],
      interval: 3000,
      style: { margin: '0px 0px 0px 0px', height: 250 },
      key: 'ImgSlide_00X6XGfb7qz5moZAcLxDy',
    },
    {
      type: 'ImgShow',
      name: '图片展示',
      positionFixed: 'auto',
      fixedTypes: ['auto', 'top', 'bottom'],
      scrollHeight: 0,
      styleType: 'col1',
      styleTypes: [
        { value: 'col1', label: '单列' },
        { value: 'col2', label: '双列' },
      ],
      imglist: [{ img: 'https://static.jetmobo.com/image/content-h5/20230919/1695091663547.png', link: '' }],
      style: { margin: '0px 0px 0px 0px' },
      key: 'ImgShow_1597832935582_347781',
    },
    {
      type: 'Marquee',
      name: '跑马灯',
      positionFixed: 'auto',
      fixedTypes: ['auto', 'top', 'bottom'],
      scrollHeight: 0,
      direction: 'up',
      durationTime: 6,
      isImgBtn: false,
      imgUrl: '',
      textList: ['李小姐34秒前已报名', '张先生1分钟前 已报名', '周先生 3分钟前 已报名', '梁小姐  5分钟前  已报名'],
      style: {
        backgroundColor: '',
        Height: 50,
        height: '50px',
        overflow: 'hidden',
        color: '#333',
        fontsize: 14,
        fontSize: '14px',
        lineheight: 28,
        lineHeight: '28px',
        margin: '0px 0px 0px 0px',
      },
      key: 'Marquee_kj4k_GCN0sBZCGV-Qc8_s',
    },
    {
      type: 'MarqueeSingle',
      name: '跑马灯-单个',
      positionFixed: 'auto',
      durationTime: 2,
      textList: [
        { text: '李**34秒前已报名', sex: 'man' },
        { text: '张**1分钟前已报名', sex: 'woman' },
        { text: '周**3分钟前已报名', sex: 'man' },
        { text: '梁**5分钟前已报名', sex: 'woman' },
      ],
      style: {
        width: '200px',
        pxWidth: 200,
        height: '40px',
        pxHeight: 40,
        backgroundColor: '#333',
        color: '#fff',
        fontsize: 14,
        fontSize: '14px',
        margin: '0px 0px 0px 0px',
      },
      key: 'MarqueeSingle_4qK7kWPTeYFgTB0fuYsPl',
    },
    {
      type: 'ChildList',
      name: '表单内容区',
      list: [
        {
          type: 'Phone',
          name: '手机号',
          placeholder: '请输入手机号',
          showLabel: true,
          label: { labelTitle: '手机号', labelPosition: 'left', labelwidth: 66, labelWidth: '66px' },
          value: '',
          apiKey: 'phone',
          codeValue: '',
          codeKey: 'verifyCode',
          showCode: true,
          style: {
            margin: '0px 0px 0px 0px',
            btnStyle: {
              background: '#e64950',
              color: '#fff',
              borderColor: '#e64950',
              borderRadius: '5px',
              borderradius: 5,
            },
          },
          key: 'Phone_1577685026558_23106',
        },
        {
          type: 'Input',
          name: '输入框',
          placeholder: '请输入姓名',
          isTextarea: false,
          showLabel: true,
          label: {
            labelTitle: '姓名',
            labelPosition: 'left',
            labelwidth: 66,
            labelWidth: '66px',
          },
          value: '',
          apiKey: 'name',
          fieldTypes: 'inputTypes',
          style: { margin: '0px 0px 0px 0px' },
          key: 'Input_LF5qwGpwMVz6apQ9-pOQ4',
        },
        {
          type: 'Select',
          name: '下拉选择框',
          value: '',
          apiKey: 'educationLevel',
          placeholder: '请选择教育程度',
          showLabel: true,
          label: { labelTitle: '教育程度', labelPosition: 'left', labelwidth: 66, labelWidth: '66px' },
          fieldTypes: 'selectTypes',
          options: [
            { text: '硕士及以上', value: '硕士及以上' },
            { text: '本科', value: '本科' },
            { text: '大专', value: '大专' },
            { text: '中专/高中及以下', value: '中专/高中及以下' },
          ],
          style: { margin: '0px 0px 0px 0px' },
          key: 'Select_vRATQe-eBY3VMhtS3nr2U',
        },
        {
          type: 'Switch',
          name: '开关',
          value: false,
          label: { labelTitle: '是否有信用卡', labelPosition: 'left', labelwidth: 100, labelWidth: '100px' },
          fieldTypes: 'switchTypes',
          apiKey: 'creditCard',
          style: { margin: '0px 0px 0px 0px' },
          key: 'Switch_Tp2Ra5P1sBkBktHf_t6b_',
        },
        {
          type: 'RandomCode',
          name: '随机码',
          placeholder: '请输入校验码',
          showLabel: true,
          label: { labelTitle: '校验码', labelPosition: 'left', labelwidth: 66, labelWidth: '66px' },
          value: '',
          apiKey: 'randomCode',
          codeValue: '',
          style: {
            margin: '0px 0px 0px 0px',
            btnStyle: {
              fontFamily: 'Helvetica Neue',
              backgroundColor: '#409EFF',
              color: '#fff',
              fontSize: '20px',
              fontsize: 20,
              borderRadius: '5px',
              borderradius: 5,
            },
          },
          key: 'RandomCode_VI52pM-AR3Zzk4OWOuO-4',
        },
        {
          type: 'DatePicker',
          name: '日期选择器',
          label: { labelTitle: '生日', labelwidth: 66, labelWidth: '66px', labelPosition: 'left' },
          apiKey: 'birthday',
          value: '',
          showLabel: true,
          placeholder: '请选择日期',
          fieldTypes: 'dateTypes',
          style: { margin: '0px 0px 0px 0px' },
          key: 'DatePicker_JtXYWd8kVXyJB-Vb4v5yA',
        },
        {
          type: 'HPicker',
          name: '横向滑动单选',
          value: '20',
          options: [
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
          ],
          label: { labelTitle: '年龄', labelPosition: 'left', labelwidth: 50, labelWidth: '50px' },
          fieldTypes: 'hPickerTypes',
          apiKey: 'age',
          itemWidth: 50,
          showNumber: 5,
          pickerStyle: { color: '#409eff', fontsize: 18, fontSize: '18px' },
          style: { margin: '0px 0px 0px 0px' },
          key: 'HPicker_oxVLKOnWzVzDqiYOP6VpA',
        },
        {
          type: 'Agreement',
          name: '用户协议',
          apiKey: 'agreement',
          value: false,
          isRequired: true,
          tipText: '我已阅读并同意',
          titleTexts: [
            { title: '《隐私权协议》', text: '隐私权协议' },
            { title: '《用户协议》', text: '用户协议' },
          ],
          style: { fontsize: 12, fontSize: '12px', color: '#333333', margin: '10px 0px 10px 0px' },
          agreementColor: '#3b9cfd',
          key: 'Agreement_-zAWuvt1DHXMJCFfpCOa-',
        },
        {
          type: 'Button',
          name: '按钮',
          btnText: '提交',
          btnType: 'submit',
          apiKey: '',
          fixedBottom: false,
          scrollHeight: 0,
          btnTypes: [{ value: 'submit', label: '提交' }],
          style: {
            margin: '10px 10px 10px 10px',
            padding: '0px 0px 0px 0px',
            isImgBtn: false,
            value: '',
            btnStyle: { borderRadius: '20px', borderradius: 20, background: '#e64950', color: '#fff' },
          },
          key: 'Button_1577685028838_726439',
        },
        {
          type: 'StaticText',
          name: '文本描述',
          value: "<p style='font-size:20px'>这是表单内容区的文本</p>",
          link: '',
          popupList: [
            {
              type: 'StaticText',
              name: '文本描述',
              value:
                '<p>这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~这是一段弹窗文本哦~~~</p>',
              link: '',
              popupList: [],
              backgroundImage: '',
              backgroundColor: '',
              style: { margin: '0px 0px 0px 0px' },
              key: 'StaticText_NYAc1yK7nWtxdYHT1xtwr',
            },
          ],
          backgroundImage: '',
          style: {
            textAlign: 'center',
            fontsize: 14,
            fontSize: '14px',
            color: '#333333',
            margin: '10px 10px 10px 10px',
          },
          key: 'StaticText_1670924924506_652872',
        },
      ],
      wgClassName: 'wg-formlist',
      style: {
        margin: '0px 10px 0px 10px',
        padding: '10px 10px 10px 10px',
        borderradius: 10,
        borderRadius: '10px',
        borderColor: '#E64950',
        borderwidth: 3,
        borderWidth: '3px',
        borderStyle: 'solid',
      },
      key: 'ChildList_1577685024167_377730',
    },
    {
      type: 'SplitLine',
      name: '分割线',
      value: 'solid',
      style: { borderColor: '#d3d3d3', borderStyle: 'solid', borderTopWidth: '1px', margin: '20px 0px 20px 0px' },
      key: 'SplitLine_uIHW0I2LU9xIuhnYWIgRx',
    },
    {
      type: 'VideoPlay',
      name: '视频播放',
      videoAttr: {
        src: 'https://www.runoob.com/try/demo_source/movie.mp4',
        poster: 'https://www.runoob.com/images/logo.png',
        autoplay: false,
        loop: false,
        controls: true,
      },
      style: { width: '100%', pxHeight: 200, height: '200px', margin: '0px 0px 0px 0px' },
      key: 'VideoPlay_WEN4-gbUZaNrLi70ixVfr',
    },
    {
      type: 'StaticText',
      name: '文本描述',
      value: "<p style='font-size:36px'>主题一</p>",
      link: 'https://www.baidu.com/',
      backgroundImage: '',
      style: { textAlign: 'center', fontsize: 14, fontSize: '14px', color: '#333333', margin: '10px 10px 10px 10px' },
      key: 'StaticText_1568799421345_855582',
    },
    {
      type: 'CountDown',
      name: '倒计时',
      positionFixed: 'auto',
      endTime: '',
      endtime: '',
      title: '距离活动结束还剩：',
      countDownType: 'dayLoop',
      timeStyle: {
        backgroundColor: '#e6e6e6',
        fontSize: '16px',
        fontsize: 16,
        borderRadius: '5px',
        borderradius: 5,
        color: '#333',
      },
      unitStyle: { color: '#333', fontSize: '14px', fontsize: 14 },
      style: {
        padding: '5px 5px 5px 5px',
        margin: '10px 0px 10px 0px',
        color: '#333',
        fontSize: '14px',
        fontsize: 14,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backgroundImage: '',
      },
      key: 'CountDown_WGsdq3u4SbV94e-Ip1wju',
    },
    {
      type: 'ImgShow',
      name: '图片展示',
      positionFixed: 'auto',
      fixedTypes: ['auto', 'top', 'bottom'],
      scrollHeight: 0,
      styleType: 'col1',
      styleTypes: [
        { value: 'col1', label: '单列' },
        { value: 'col2', label: '双列' },
      ],
      imglist: [{ img: 'https://static.jetmobo.com/image/content-h5/20221125/1669333983504.jpg', link: '' }],
      style: { margin: '0px 0px 0px 0px' },
      key: 'ImgShow_1597832935582_347666',
    },
    {
      type: 'Button',
      name: '按钮',
      btnText: '提交',
      btnType: 'submit',
      apiKey: '',
      fixedBottom: false,
      scrollHeight: 0,
      btnTypes: [{ value: 'submit', label: '提交' }],
      style: {
        margin: '10px 10px 10px 10px',
        padding: '0px 0px 0px 0px',
        isImgBtn: false,
        value: '',
        btnStyle: { borderRadius: '20px', borderradius: 20, background: '#e64950', color: '#fff' },
      },
      key: 'Button_1577685028838_726888',
    },
    {
      type: 'Wechat',
      name: '微信关注',
      value: '微信账号',
      wechatName: 'hahaha',
      btnText: '+  关注',
      logo: '',
      showName: true,
      showLogo: true,
      backgroundColor: '',
      positionFixed: 'auto',
      fixedTypes: ['auto', 'top', 'bottom'],
      scrollHeight: 0,
      style: {
        isImgBtn: false,
        value: '',
        margin: '0px 0px 0px 0px',
        color: '#333',
        fontsize: 14,
        fontSize: '14px',
        btnStyle: {
          borderRadius: '20px',
          borderradius: 20,
          backgroundColor: '#01cd0d',
          color: '#fff',
          fontsize: 14,
          fontSize: '14px',
        },
      },
      key: 'Wechat_FSw6z6yEygC6HMOsdg65a',
    },
  ],
  title: '云忆网络1',
  statsCode: '',
  theme: 'theme1',
  style: { backgroundColor: '#fff', backgroundImage: '' },
  fixedBottom: [],
  fixedCustom: [],
  fixedTop: [],
  hijackBack: { isHijack: false, alertImg: '', alertLink: '' },
};
