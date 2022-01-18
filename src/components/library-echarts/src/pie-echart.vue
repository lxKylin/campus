<template>
  <div class="pie-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, reactive } from 'vue'

import { BaseEchart } from '@/base-ui/echart'

import { IDataType } from '../types'

import useEchart from '@/base-ui/echart/hooks/useEchart'
import { AnyNaptrRecord } from 'dns'

// 泛型表示接收一些什么样的属性
const props = defineProps<{
  pieData: IDataType[]
}>()
const datas = reactive([
  [
    { value: 3500, name: '军事' },
    { value: 1250, name: '计算机' },
    { value: 1050, name: '政治' },
    { value: 300, name: '艺术' },
    { value: 300, name: '语言' },
    { value: 300, name: '言情' },
    { value: 300, name: '其他' }
  ]
])

// computed会收集props.pieData的依赖，一旦props传入的数据改变，
// options就会更新，template就会重新渲染
const options = computed(() => {
  return {
    animation: true,
    tooltip: {
      trigger: 'item'
    },
    color: [
      '#3b9efc',
      '#48b6f0',
      '#3feef2',
      '#00f1a6',
      '#ecec35',
      '#fcab31',
      '#e15f2c',
      '#3b9efc'
    ],
    series: datas.map(function (data, idx) {
      var top = idx * 33.3
      return {
        type: 'pie',
        radius: ['60%', '70%'],
        top: top + '%',
        left: 'center',
        width: 450,
        label: {
          alignTo: 'edge',
          formatter: '{b}\n{d}%',
          minMargin: 5,
          edgeDistance: 30,
          lineHeight: 15,
          color: '#d3d6dd',
          rich: {
            time: {
              fontSize: 10,
              color: '#999'
            }
          }
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80 // 线曲率
        },
        labelLayout: function (params: AnyNaptrRecord) {
          // const isLeft = params.labelRect.x < myChart.getWidth() / 2;
          // const points = params.labelLinePoints;
          // // Update the end point.
          // points[2][0] = isLeft
          //   ? params.labelRect.x
          //   : params.labelRect.x + params.labelRect.width;
          // return {
          //   labelLinePoints: points
          // };
        },
        data: data
      }
    })
  }
})
</script>

<style scoped></style>
