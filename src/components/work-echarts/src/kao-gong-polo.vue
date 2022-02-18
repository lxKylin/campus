<template>
  <div class="kao-gong-polo">
    <base-echart :options="options"></base-echart>
    <!-- <base-echart :options="options"></base-echart> -->
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'

import { BaseEchart } from '@/base-ui/echart'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels?: string[]
    values?: any[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    // 图表主标题
    title: [{
      text: '考公', // 主标题文本，支持使用 \n 换行
      top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
      left: 'center', // 值: 'left', 'center', 'right' 同上
      textStyle: {
        // 文本样式
        fontSize: 20,
        fontWeight: 400,
        color: '#fff'
      }
    }],
    series: [
      {
        type: 'liquidFill',
        radius: '70%', // 水球图的半径
        center: ['50%', '60%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
        shape: 'circle',
        phase: 0, // 波的相位弧度 不设置  默认自动
        direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
        outline: {
          show: true,
          borderDistance: 0, // 边框线与图表的距离 数字
          itemStyle: {
            opacity: 1, // 边框的透明度   默认为 1
            borderWidth: 5, // 边框的宽度
            shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
            shadowColor: '#fff', // 边框的阴影颜色,
            borderColor: '#41dcd8' // 边框颜色
          }
        },
        // 图形样式
        itemStyle: {
          color: '#335a84', // 水球显示的背景颜色
          opacity: 0.5, // 波浪的透明度
          shadowBlur: 10 // 波浪的阴影范围
        },
        backgroundStyle: {
          color: 'transparent', // 水球未到的背景颜色
          opacity: 0.5
        },
        // 图形的高亮样式
        emphasis: {
          itemStyle: {
            opacity: 0.8 // 鼠标经过波浪颜色的透明度
          }
        },
        // 图形上的文本标签
        label: {
          fontSize: 55,
          fontWeight: 400,
          color: '#fff'
        },
        data: [0.10, 0.2, 0.1] // 系列中的数据内容数组
      }
    ]
  }
})
</script>

<style lang="less" scope></style>
