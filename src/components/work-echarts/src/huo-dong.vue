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
        <p class="time">{{ item.time }}</p>
        <h4 class="address">{{ item.address }}</h4>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import { getActiveList } from '@/service/work/work'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper: any) => {
      // console.log(swiper)
    }
    const onSlideChange = () => {
      // console.log('slide change')
    }

    const list = reactive([
      {
        title: '18届物联网工程校友聚会',
        time: '2022-01-15',
        address: '福州贵安新天地君源大酒店',
        content: '同学聚会，交流交流'
      },
      {
        title: '19届物联网工程校友聚会',
        time: '2022-01-15',
        address: '福州贵安新天地君源大酒店',
        content: '同学聚会，交流交流'
      }
    ])

    const init = async () => {
      await getActiveList().then((res) => {
        // console.log(res.data, '222');
        const listData = res.data
        console.log(listData, '333')
        listData.forEach((item: any) => {
          list.push({
            title: item.title,
            time: item.time,
            address: item.address,
            content: item.content
          })
        })
      })
    }

    onMounted(async () => {
      await init()
    })

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
.title,
.time,
.address {
  text-align: center;
}
.content {
  height: 50px;
  margin: 36px 50px;
  font-size: 16px;
  text-align: center;
}
</style>
