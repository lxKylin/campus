<template>
  <div class="kao-yan-polo">
    <base-echart :options="options"></base-echart>
    <!-- <base-echart :options="options"></base-echart> -->
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

let echartData = {
  inner: [
    {
      value: 190,
      unit: '人',
      name: '护理学院'
    },
  ],
  outer: [
    {
      value: 30,
      unit: '人',
      name: '健康服务与管理'
    },
    {
      value: 120,
      unit: '人',
      name: '护理学'
    },
    {
      value: 40,
      unit: '人',
      name: '康复治疗学'
    },
  ]
}

let legend1 = echartData.inner.map((v) => v.name)
let legend2 = echartData.outer.map((v) => v.name)
let legendData = [...legend1, ...legend2]

const options = computed(() => {
  return {
    color: [
      '#2ec7c9',
      '#b6a2de',
      '#5ab1ef',
      '#ffb980',
      '#d87a80',
      '#8d98b3',
      '#FFEA01',
      '#B8D07C',
      '#fca4bb',
      '#dc69aa',
      '#07a2a4',
      '#9a7fd1',
      '#588dd5',
      '#f5994e',
      '#c05050',
      '#59678c',
      '#c9ab00',
      '#7eb00a',
      '#6f5553',
      '#c14089'
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: [0, '35%'],
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2
          }
        },
        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: echartData.inner
      },
      {
        name: '',
        type: 'pie',
        radius: ['45%', '55%'],
        data: echartData.outer,
        labelLine: {
          normal: {
            length: 20,
            length2: 140,
            lineStyle: {
              color: '#e6e6e6'
            }
          }
        },
        label: {
          normal: {
            formatter: (params: any) => {
              return (
                '{icon|}{name|' +
                params.name +
                '}{percent|' +
                params.percent.toFixed(1) +
                '%}{value|' +
                params.value +
                '}'
              )
            },
            padding: [0, -130, 25, -130],
            rich: {
              color: '#71acfc',
              icon: {
                fontSize: 16
              },
              name: {
                fontSize: 14,
                padding: [0, 5, 0, 5],
                color: '#71acfc'
              },
              percent: {
                color: '#71acfc',
                padding: [0, 5, 0, 0]
              },
              value: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#71acfc'
              }
            }
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scope></style>
