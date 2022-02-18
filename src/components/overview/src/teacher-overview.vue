<template>
  <div class="water-po-echart">
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

const data = reactive([
  {
    name: '初级教师',
    value: 100
  },
  {
    name: '中级教师',
    value: 75
  },
  {
    name: '高级教师',
    value: 50
  },
  {
    name: '特级教师',
    value: 25
  }
])

const arrName = getArrayValue(data, 'name')
const arrValue = getArrayValue(data, 'value')
const sumValue = eval(arrValue.join('+'))
const objData = array2obj(data, 'name')
const optionData = getData(data)

function getArrayValue(array: any, key: any) {
  var key = key || 'value'
  let res: any = []
  if (array) {
    array.forEach(function (t: any) {
      res.push(t[key])
    })
  }
  return res
}

function array2obj(array: any, key: any) {
  var resObj: any = {}
  for (var i = 0; i < array.length; i++) {
    resObj[array[i][key]] = array[i]
  }
  return resObj
}

function getData(data: any) {
  var res: any = {
    series: [],
    yAxis: []
  }
  for (let i = 0; i < data.length; i++) {
    res.series.push({
      name: '',
      type: 'pie',
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
      center: ['40%', '55%'],
      label: {
        show: false
      },
      itemStyle: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        borderWidth: 5
      },
      data: [
        {
          value: data[i].value,
          name: data[i].name
        },
        {
          value: sumValue - data[i].value,
          name: '',
          itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 0
          },
          tooltip: {
            show: false
          },
          hoverAnimation: false
        }
      ]
    })
    res.series.push({
      name: '',
      type: 'pie',
      silent: true,
      z: 1,
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
      center: ['40%', '55%'],
      label: {
        show: false
      },
      itemStyle: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        borderWidth: 5
      },
      data: [
        {
          value: 7.5,
          itemStyle: {
            color: 'rgb(3, 31, 62)',
            borderWidth: 0
          },
          tooltip: {
            show: false
          },
          hoverAnimation: false
        },
        {
          value: 2.5,
          name: '',
          itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 0
          },
          tooltip: {
            show: false
          },
          hoverAnimation: false
        }
      ]
    })
    res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + '%')
  }
  return res
}

const options = computed(() => {
  return {
    legend: {
      show: true,
      icon: 'circle',
      bottom: '55%',
      left: '40%',
      data: arrName,
      width: 30,
      padding: [0, 10],
      itemGap: 5,
      formatter: function (name: any) {
        return (
          '{title|' + name + '} {value|' + objData[name].value + '}'
        )
      },
      textStyle: {
        rich: {
          title: {
            fontSize: 12,
            lineHeight: 10,
            color: 'rgb(0, 178, 246)'
          },
          value: {
            fontSize: 12,
            lineHeight: 10,
            color: '#fff'
          }
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'item',
      color: '#fff',
      backgroundColor: 'transparent',
      formatter: '{a}<br>{b}:{c}({d}%)'
    },
    color: [
      'rgb(9,187,247)',
      'rgb(184,254,165)',
      'rgb(253,218,23)',
      'rgb(252,152,12)'
    ],
    xAxis: [
      {
        show: false
      }
    ],
    series: optionData.series
  }
})
</script>

<style scoped></style>
