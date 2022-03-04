<template>
  <div class="kao-yan-polo">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults, onMounted, reactive } from 'vue'

import { getEnrollmentData } from '@/service/work/work'

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

var colorList = [
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(51,192,205,0.01)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#33C0CD' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(115,172,255,0.02)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#73ACFF' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(158,135,255,0.02)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#9E87FF' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 1,
    x2: 0,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(252,75,75,0.01)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#FE6969' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 1,
    y: 1,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(253,138,106,0.01)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#FDB36ac2' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#FECE4391' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(224,26,67,0.12)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#b3c465' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(224,26,67,0.12)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#B0DF5D' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(224,26,67,0.12)' // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#FC7DBC' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  }
]
var colorLine = [
  '#33C0CD',
  '#73ACFF',
  '#9E87FF',
  '#FE6969',
  '#FDB36A',
  '#FECE43',
  '#b3c465',
  '#B0DF5D',
  '#FC7DBC'
]

function getRich() {
  let result: any = {}
  colorLine.forEach((v: any, i: any) => {
    result[`hr${i}`] = {
      backgroundColor: colorLine[i],
      borderRadius: 3,
      width: 3,
      height: 3,
      padding: [3, 3, 0, -12]
    }
    result[`a${i}`] = {
      padding: [-11, 6, -20, 6],
      color: colorLine[i],
      backgroundColor: 'transparent',
      fontSize: 12
    }
  })
  return result
}

// const data = reactive([
//   {
//     name: '浙江',
//     value: 200
//   },
//   {
//     name: '江西',
//     value: 110
//   },
//   {
//     name: '山东',
//     value: 35
//   },
//   {
//     name: '安徽',
//     value: 30
//   },
//   {
//     name: '河南',
//     value: 47
//   },
//   {
//     name: '广西',
//     value: 15
//   },
//   {
//     name: '四川',
//     value: 17
//   },
//   {
//     name: '贵州',
//     value: 20
//   },
//   {
//     name: '甘肃',
//     value: 10
//   }
// ]).sort((a, b) => {
//   return b.value - a.value
// })

const data: any = reactive([]).sort((a, b) => {
  return b - a
})

data.forEach((v: any, i: any) => {
  v.labelLine = {
    lineStyle: {
      width: 1,
      color: colorLine[i]
    }
  }
})

const options = computed(() => {
  return {
    series: [
      {
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        clockwise: true,
        avoidLabelOverlap: true,
        label: {
          show: true,
          position: 'outside',
          formatter: function (params: any) {
            const name = params.name
            const percent = params.percent + '%'
            const index = params.dataIndex
            return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join(
              '\n'
            )
          },
          rich: getRich()
        },
        itemStyle: {
          normal: {
            color: function (params: any) {
              return colorList[params.dataIndex]
            }
          }
        },
        data,
        roseType: 'radius'
      }
    ]
  }
})

const init = async () => {
  await getEnrollmentData().then((res) => {
    // console.log(res.data, '222');
    const list = res.data
    // console.log(list, '333')
    list.forEach((item: any, index: any) => {
      if (index > 0) {
        // console.log(item, '999');
        // data.length = 0
        data.push({
          name: item.province,
          value: item.number
        })
      }
      // console.log(data, '88');
    })
  })
}

onMounted(async () => {
  await init()
})
</script>

<style lang="less" scope></style>
