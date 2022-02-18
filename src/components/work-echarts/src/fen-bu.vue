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

var scale = 1
var echartData = [
  {
    value: 2154,
    name: '计算机'
  },
  {
    value: 700,
    name: '会计'
  },
  {
    value: 678,
    name: '建筑'
  },
  {
    value: 515,
    name: '教师'
  },
  {
    value: 854,
    name: '销售'
  },
  {
    value: 1154,
    name: '电商'
  }
]
var rich = {
  yellow: {
    color: '#ffc72b',
    fontSize: 30 * scale,
    padding: [5, 4],
    align: 'center'
  },
  total: {
    color: '#ffc72b',
    fontSize: 40 * scale,
    align: 'center'
  },
  white: {
    color: '#fff',
    align: 'center',
    fontSize: 14 * scale,
    padding: [21, 0]
  },
  blue: {
    color: '#49dff0',
    fontSize: 16 * scale,
    align: 'center'
  },
  hr: {
    borderColor: '#0b5263',
    width: '100%',
    borderWidth: 1,
    height: 0
  }
}

const options = computed(() => {
  return {
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: [
          '#c487ee',
          '#deb140',
          '#49dff0',
          '#034079',
          '#6f81da',
          '#00ffb4'
        ],
        label: {
          normal: {
            formatter: function (params: any, ticket: any, callback: any) {
              var total = 0 //考生总数量
              var percent: any = 0 //考生占比
              echartData.forEach(function (value, index, array) {
                total += value.value
              })
              percent = ((params.value / total) * 100).toFixed(1)
              return (
                '{white|' +
                params.name +
                '}\n{hr|}\n{yellow|' +
                params.value +
                '}\n{blue|' +
                percent +
                '%}'
              )
            },
            rich: rich
          }
        },
        labelLine: {
          normal: {
            length: 55 * scale,
            length2: 0,
            lineStyle: {
              color: '#0b5263'
            }
          }
        },
        data: echartData
      }
    ]
  }
})
</script>

<style scoped></style>
