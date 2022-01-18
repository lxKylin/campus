<template>
  <div class="index" ref="appRef">
    <!-- <Particles id="tsparticles" class="login__particles" :options="particles" /> -->
    <div class="bg">
      <!-- <bv-loading v-if="loading">Loading...</bv-loading> -->
      <div class="main">
        <div class="lx-flex">
          <!-- 顶部两边 -->
          <bv-decorator name="decorator10" class="dv-dec-10" />
          <div class="lx-flex">
            <bv-decorator name="decorator8" class="dv-dec-8" />
            <div class="title">
              <span class="title-text">{{ title }}</span>
              <bv-decorator name="decorator6" class="dv-dec-6" reverse />
            </div>
            <bv-decorator name="decorator8" class="dv-dec-8" reverse />
          </div>
          <bv-decorator name="decorator10" class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="lx-flex">
          <div class="lx-flex aside-width">
            <div class="react-left react-l-s bg-color-translucence">
              <span class="react-before"></span>
              <span class="text action-link" @click="handleChangeOne">{{ modulesTitle[0] }}</span>
            </div>
            <div class="react-left ml10">
              <div class="text action-link" @click="handleChangeTwo">{{ modulesTitle[1] }}</div>
            </div>
          </div>
          <div class="lx-flex aside-width aside-width__right">
            <div class="react-right bg-color-translucence mr10">
              <div class="text action-link fw-b" @click="handleChangeThree">{{ modulesTitle[2] }}</div>
            </div>
            <div class="react-right mr5 react-l-s">
              <span class="react-after"></span>
              <div class="text">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
                {{ timeInfo.dateDay }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index__modules">
        <!-- <library /> -->
        <component :is="nameComp[tab]"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onBeforeUnmount } from 'vue'

import { particles } from './config/particles-config'

import { title, modulesTitle, WEEK } from '@/constant/index'

import useDraw from '@/utils/useDraw'
import { formatTime } from '@/utils/time-format'

import Library from './library/library.vue'
import Work from './work/work.vue'

export default defineComponent({
  components: {
    Library,
    Work
  },
  setup() {
    // 加载标识
    const loading = ref<boolean>(true)

    // 时间内容
    const timeInfo = reactive({
      timer: 0,
      dateDay: '',
      dateYear: '',
      dateWeek: ''
    })

    // 动态组件
    let tab = ref('work')
    const nameComp = reactive({
      library: Library,
      work: Work
    })

    // 更换展示组件
    const handleChangeOne = () => {
      tab.value = ''
    }
    const handleChangeTwo = () => {
      tab.value = 'work'
    }
    const handleChangeThree = () => {
      tab.value = 'library'
    }

    // 屏幕适配处理
    const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw()

    // 处理loading展示
    const changeLoading = () => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    }

    // 处理展示时间格式化
    const handleTime = () => {
      timeInfo.timer = window.setInterval(() => {
        const date = new Date()
        timeInfo.dateDay = formatTime(date, 'HH: mm: ss')
        timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
        timeInfo.dateWeek = WEEK[date.getDay()]
      }, 1000)
    }

    onMounted(() => {
      changeLoading()
      handleTime()
      windowDraw()
      calcRate()
    })

    onBeforeUnmount(() => {
      unWindowDraw()
      clearInterval(timeInfo.timer)
    })

    return {
      // loading,
      tab,
      nameComp,
      particles,
      appRef,
      title,
      modulesTitle,
      timeInfo,
      handleChangeOne,
      handleChangeTwo,
      handleChangeThree
    }
  }
})
</script>

<style lang="less" scoped>
/* 定义一个从左向右的扫描动画 */
@keyframes scanning {
  0% {
    left: 0;
    opacity: 0.7;
  }
  90% {
    left: 100%;
    opacity: 0.3;
  }
  100% {
    right: -20px;
    opacity: 0;
  }
}
.bg-style() {
  font-size: 18px;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.13);
}
.before-bg-style() {
  position: absolute;
  top: 0;
  height: 50px;
  width: 50px;
  // background-color: transparent;
  background-color: #02050c;
}
.index {
  color: #d3d6dd;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .bg {
    width: 100%;
    height: 100%;
    padding-top: 15px;
    background-image: url('@/assets/img/pageBg.png');
    background-size: cover;
    background-position: center center;
  }

  .main {
    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
    }
    .dv-dec-10-s {
      transform: rotateY(180deg);
    }
    .dv-dec-8 {
      width: 200px;
      height: 50px;
      color: #548ae7;
    }
    .title {
      position: relative;
      width: 500px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 24px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .dv-dec-6 {
        position: absolute;
        bottom: -30px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }

    // 第二行
    .aside-width {
      width: 40%;
    }
    .aside-width[data-v-b65cca0a] {
      margin-right: 360px;
    }
    .react-r-s,
    .react-l-s {
      background-color: #0f1325;
    }

    // 平行四边形
    .react-right {
      &.react-l-s {
        text-align: center;
        width: 500px;
      }
      .bg-style();
      transform: skewX(-45deg);

      .react-after {
        right: -25px;
        .before-bg-style();
        transform: skewX(45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(45deg);
      }
    }

    .react-left {
      &.react-l-s {
        width: 500px;
        text-align: center;
      }
      .bg-style();
      transform: skewX(45deg);
      // background-color: #0f1325;

      .react-before {
        left: -25px;
        .before-bg-style();
        transform: skewX(-45deg);
      }

      .text {
        display: inline-block;
        transform: skewX(-45deg);
      }
    }

    .body-box {
      margin-top: 16px;
      display: flex;
      flex-direction: column;

      //下方区域的布局
      .content-box {
        display: grid;
        grid-template-columns: 2fr 3fr 5fr 3fr 2fr;
      }

      // 底部数据
      .bototm-box {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(2, 50%);
      }
    }
  }
  &__modules {
    margin-top: 15px;
    padding: 0 10px;
  }
  .text {
    position: relative;
    overflow: hidden;
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      width: 30px;
      height: 100%;
      background-image: linear-gradient(to right, transparent 0%, #00ffff 100%);
      z-index: -10;
      animation: scanning 2s infinite linear;
      opacity: 0.7;
    }
  }
}
</style>
