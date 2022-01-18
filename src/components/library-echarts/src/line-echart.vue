<template>
  <div class="line-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults, ref } from 'vue'
import * as echarts from 'echarts'
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

const dateData = ref([
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月'
])
const averageData = ref([450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450, 450])
const currentData = ref([260, 350, 270, 150, 240, 310, 390, 550, 750, 650, 480, 500])

const options = computed(() => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      top: '15%',
      left: '5%',
      right: '5%',
      bottom: '15%'
    },
    legend: {
      top: 10,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      padding: 0,
      right: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14,
        padding: [2, 0, 0, 0]
      },
      data: ['当前值', '去年平均值']
    },
    xAxis: [
      {
        type: 'category',
        position: 'bottom',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        splitArea: {
          // show: true,
          color: '#f00',
          lineStyle: {
            color: '#f00'
          }
        },
        axisLabel: {
          color: '#fff',
          margin: 15
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        data: dateData.value
      }
    ],

    yAxis: [
      {
        name: '(书籍/册)',
        nameTextStyle: {
          color: '#fff',
          padding: [0, 50, 10, 0]
        },
        type: 'value',
        min: 0,
        max: 1000,
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
            width: 1,
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          margin: 10,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '当前值',
        type: 'line',
        smooth: true, //是否平滑
        symbol: 'none',
        lineStyle: {
          normal: {
            color: '#00E39A',
            width: 2,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 1,
            shadowOffsetX: 1
          }
        },
        itemStyle: {
          color: '#00E39A'
        },
        tooltip: {
          show: false
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 227, 154, 0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 227, 154, 0)'
                }
              ],
              false
            )
          }
        },
        data: currentData.value
      },
      {
        name: '去年平均值',
        type: 'line',
        showAllSymbol: true,
        symbol: 'none',
        itemStyle: {
          color: '#FFBE0F'
        },
        lineStyle: {
          type: 'dashed',
          width: 2,
          color: '#FFBE0F',
          shadowColor: '#FFF500',
          shadowBlur: 12
        },
        data: averageData.value
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.line-echart {
  margin: 0 20px;
}
</style>
