<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    autoplay
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <JiXin />
    </swiper-slide>
    <swiper-slide>
      <ShangYuan />
    </swiper-slide>
    <swiper-slide>
      <HuLi />
    </swiper-slide>
    <swiper-slide>
      <JianYuan />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import JiXin from './ji-xin.vue'
import ShangYuan from './shang-yuan.vue';
import HuLi from './hu-li.vue'
import JianYuan from './jian-yuan.vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    JiXin,
    ShangYuan,
    HuLi,
    JianYuan
  },
  setup() {
    const onSwiper = (swiper: any) => {
      // console.log(swiper)
    }
    const onSlideChange = () => {
      // console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Scrollbar, A11y, Autoplay]
    }
  }
})
</script>

<style lang="less" scoped></style>
