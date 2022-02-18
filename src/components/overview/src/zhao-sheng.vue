<template>
  <div class="ke-yan">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults, reactive } from 'vue'

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

let salvProName = [
  '计算机科学与技术',
  '软件工程',
  '电子信息工程',
  '网络与新媒体',
  '护理学'
]
let salvProValue = [122, 120, 120, 120, 120]
let salvProMax: any = [] //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
  salvProMax.push(salvProValue[0])
}

const options = computed(() => {
  return {
    grid: {
      left: '2%',
      right: '4%',
      bottom: '2%',
      top: '2%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params: any) {
        return params[0].name + ' : ' + params[0].value
      }
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: salvProName
      },
      {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '12'
          }
        },
        data: salvProValue
      }
    ],
    series: [
      {
        name: '值',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgb(57,89,255,1)'
              },
              {
                offset: 1,
                color: 'rgb(46,200,207,1)'
              }
            ])
          }
        },
        barWidth: 20,
        data: salvProValue
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        data: salvProMax,
        itemStyle: {
          normal: {
            color: 'rgba(24,31,68,1)',
            barBorderRadius: 30
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
