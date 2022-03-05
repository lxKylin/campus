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
      <BuMen />
    </swiper-slide>
    <swiper-slide>
      <SheTuan />
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

import BuMen from './bu-men.vue'
import SheTuan from './she-tuan.vue';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    BuMen,
    SheTuan
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
