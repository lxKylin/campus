<template>
  <div class="word-cloud">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-wordcloud'

import BaseEchart from '@/base-ui/echart'

import { computed, defineProps, withDefaults, reactive } from 'vue'

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

let seriesData: any = reactive([
  { name: '寒冬', value: 11 },
  { name: '初雪', value: 13 },
  { name: 'JavaScript权威指南', value: 113 },
  { name: 'HTML', value: 30 },
  { name: 'CSS入门至精通', value: 28 },
  { name: '逆战', value: 18 },
  { name: 'Vue项目实战', value: 15 },
  { name: '算法入门', value: 17 },
  { name: 'Node', value: 57 },
  { name: 'React', value: 67 },
  { name: 'MySQL', value: 47 },
  { name: 'Echarts', value: 37 },
  { name: '数据可视化', value: 27 },
  { name: '微信小程序', value: 66 },
])

const options = computed(() => {
  return {
    tooltip: {
      formatter: function (p: any) {
        return `${p.data.name} ${p.data.value}`
      }
    },
    series: [
      {
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        width: '100%',
        height: '100%',
        sizeRange: [20, 40],
        rotationRange: [0, 0],
        gridSize: 16,
        drawOutOfBound: false,
        data: seriesData,
        //随机生成字体颜色
        textStyle: {
          color: function () {
            return (
              'rgb(' +
              [
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255)
              ].join(',') +
              ')'
            )
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
