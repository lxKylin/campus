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
      <div>
        <img
          class="image"
          :src="item.image"
          alt=""
        />
      </div>
      <div class="time-text">
        <h3>
          <strong>{{ item.time }}</strong>
          {{ item.h }}
        </h3>
        <p>
          {{ item.p }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted} from 'vue'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import { getForeshowList } from '@/service/campus/campus'

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
      // console.log(swiper)
    }
    const onSlideChange = () => {
      // console.log('slide change')
    }

    // const list = reactive([
    //   {
    //     image: 'http://www.fit.edu.cn/images/up_images/2021112695112.png',
    //     strong: '2021-11-24',
    //     h: '福州市市委组织部副部长林舫一行莅临福州理工学院调研指导',
    //     p: '11月24日下午，福州市市委组织部副部长林舫，连江县县委常委，组织部部长陈剑雄等一行9人莅临福州理工学院开展调研指导工作，学校常务副校长陈学华及相关部门负责人陪同调研、座谈。'
    //   },
    //   {
    //     image: 'http://www.fit.edu.cn/images/up_images/2021827112524.jpg',
    //     strong: '2021-7-22',
    //     h: '福州理工学院校长吴贵明一行深入走访校外实践教学基地',
    //     p: '为进一步深化校企合作，深入了解校外实践教学基地建设情况，全面提升学生实习实践质量，主动服务区域经济发展，7月16日至22日，校领导吴贵明、陈学华、林深、谷振宇、王龙村和二级学院相关负责同志一行先后赴福建省百盛建设发展有限公司、福州百维斯生物'
    //   },
    //   {
    //     image: 'http://www.fit.edu.cn/images/up_images/2021528154022.jpg',
    //     strong: '2021-5-27',
    //     h: '福州理工学院学子在第八届“大唐杯”全国大学生移动通信',
    //     p: '近日，由工业和信息化部人才交流中心、中国通信企业协会主办，大唐移动通信设备有限公司、北京市教委北京高校电子信息类专业群承办的第八届“大唐杯”全国大学生移动通信5G技术大赛已圆满落幕，我校计算与信息科学学院通信工程专业学子经过3个多月的精心准'
    //   },
    //   {
    //     image: 'http://www.fit.edu.cn/images/up_images/202142993435.jpg',
    //     strong: '2021-4-25',
    //     h: '喜报！福州理工学院荣获2项国际数学建模竞赛一等奖',
    //     p: '2021年美国（国际）大学生数学建模竞赛（MCM/ICM）成绩日前揭晓，经过四天四夜连续近100个小时的紧张奋战, 最终计算与信息科学学院邱志敏老师和应用科学与工程学院徐宗煌老师指导的2支学生团队获得国际一等奖（获奖比例为7%），6支学生团'
    //   },
    //   {
    //     image: 'http://www.fit.edu.cn/images/up_images/202136223047.png',
    //     strong: '2021-3-5',
    //     h: '全国人大代表、福州理工学院董事长陈国鹰：集成国家力量',
    //     p: '3月5日，十三届全国人大四次会议正式开幕。在审议李克强总理政府工作报告大会上，全国人大代表、福建国脉集团董事长、福州理工学院董事长陈国鹰发表了《集成国家力量加快6G技术研发，构筑未来科技战略新优势》的建议'
    //   },
    // ])

    const list: any = reactive([])

    const init = async () => {
      await getForeshowList().then((res) => {
        // console.log(res.data, '222');
        const listData = res.data
        console.log(listData, '3334')
        listData.forEach((item: any, index: any) => {
          list.push({
            image: item.imgUrl,
            time: item.time,
            h: item.foreshowTitle,
            p: item.content
          })
        })
        console.log(list);
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
.image {
  float: left;
  font-size: 14px;
  text-align: center;
  width: 240px;
  height: 209px;
  color: #192e59;
  margin-left: 46px;
  margin-bottom: 46px;
  overflow: hidden;
}
.time-text {
  float: right;
  width: 600px;
  margin-right: 44px;
  & h3 {
    font-size: 16px;
    height: 30px;
    font-weight: normal;
  }
  & p {
    font-size: 12px;
    line-height: 200%;
  }
}
</style>
