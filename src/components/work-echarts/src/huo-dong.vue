<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    autoplay
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in list" :key="index">
      <div class="text">
        <h2 class="title">
          {{ item.title }}
        </h2>
        <p class="time"> {{item.time}} </p>
        <h4 class="address"> {{ item.address }} </h4>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }

    const list = reactive([
      {
        title: '18届物联网工程校友聚会',
        time: '2022-01-15',
        address: '福州贵安新天地君源大酒店',
        content: '11月24日下午，福州市市委组织部副部长林舫，连江县县委常委，组织部部长陈剑雄等一行9人莅临福州理工学院开展调研指导工作，学校常务副校长陈学华及相关部门负责人陪同调研、座谈。'
      },
      {
        title: '18届物联网工程校友聚会',
        time: '2022-01-15',
        address: '福州贵安新天地君源大酒店',
        content: '11月24日下午，福州市市委组织部副部长林舫，连江县县委常委，组织部部长陈剑雄等一行9人莅临福州理工学院开展调研指导工作，学校常务副校长陈学华及相关部门负责人陪同调研、座谈。'
      },
    ])

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      list
    }
  }
})
</script>

<style lang="less" scoped>
.title, .time, .address {
  text-align: center;
}
.content {
  margin: 30px 50px;
  font-size: 16px
}
</style>
