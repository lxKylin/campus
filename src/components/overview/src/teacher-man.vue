<template>
  <div class="ke-yan">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults, reactive } from 'vue'

import * as echarts from 'echarts'
import 'echarts-liquidfill'

import { man, woman, border } from '@/constant/index'

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

const res = [
  {
    label: '男',
    value: 60
  },
  {
    label: '女',
    value: 40
  }
]

const color = ['#00FFFF', 'rgba(196,36,255,1)']
const data: any = []
for (let i = 0; i < res.length; i++) {
  data.push(
    {
      value: res[i].value,
      name: res[i].label,
      itemStyle: {
        normal: {
          borderWidth: 5,
          shadowBlur: 20,
          borderColor: color[i],
          shadowColor: color[i]
        }
      }
    },
    {
      value: res[0].value / 10,
      name: '',
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
    }
  )
}

const options = computed(() => {
  return {
    title: {
      text: '教师男女占比',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    color,
    graphic: {
      elements: [
        {
          type: 'image',
          z: 3,
          style: {
            image: border,
            width: 100,
            height: 100
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
        },
        {
          type: 'image',
          z: 3,
          style: {
            image: man,
            width: 30,
            height: 40
          },
          left: '40%',
          top: 'center'
        },
        {
          type: 'image',
          z: 3,
          style: {
            image: woman,
            width: 30,
            height: 40
          },
          right: '40%',
          top: 'center'
        }
      ]
    },
    tooltip: {
      show: true,
      trigger: 'item'
    },
    toolbox: {
      show: false
    },
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [75, 80],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 12,
              color: '#fff',
              formatter(params: any) {
                return params.name ? params.name + ' ' + params.value + '%' : ''
              }
            },
            labelLine: {
              show: true
            }
          }
        },
        data
      }
    ]
  }
})
</script>

<style scoped></style>
