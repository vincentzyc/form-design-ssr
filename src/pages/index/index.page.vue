<template>
  <h1>Home</h1>
  <WgImgShow :item="item"/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import WgImgShow from '@cp/WidgetItems/WgImgShow.vue'


const item  = reactive({"type":"ImgShow","name":"图片展示","positionFixed":"auto","fixedTypes":["auto","top","bottom"],"scrollHeight":0,"styleType":"col1","styleTypes":[{"value":"col1","label":"单列"},{"value":"col2","label":"双列"}],"imglist":[{"img":"https://static.jetmobo.com/image/content-h5/20221125/1669333983504.jpg","link":""}],"style":{"margin":"0px 0px 0px 0px"},"key":"ImgShow_1597832935582_347781"})

// import pgdata from '../../data/pgdata'

// console.log(pgdata)
// import { usePageContext } from "../../renderer/usePageContext";

// const pageContext = usePageContext()

// console.log(pageContext)

</script>