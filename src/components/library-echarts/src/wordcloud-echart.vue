<template>
  <div class="word-cloud">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-wordcloud'

import { BaseEchart } from '@/base-ui/echart'

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
  { name: '微信小程序', value: 66 }
])

let colorList = [
  '#CF4645',
  '#B580B2',
  '#29008A',
  '#146A90',
  '#8956FF',
  '#70C9A8',
  '#bfbfbf',
  '#595959',
  '#40a9ff',
  '#1890ff',
  '#ffd666',
  '#ffc53d',
  '#ffc53d',
  '#ffc069',
  '#ffa940',
  '#fa8c16',
  '#eccbd9',
  '#ffadad',
  '#ff6392',
  '#ffc09f',
  '#ffcb77',
  '#ffe066',
  '#ffd53e',
  '#ffda3d',
  '#adf7b6',
  '#a0e8af',
  '#80ed99',
  '#07beb8',
  '#17c3b2',
  '#48cae4',
  '#97d2fb',
  '#83bcff',
  '#91e5f6',
  '#9381ff'
]
let colorListLen = colorList.length
let fontSizeList = [
  12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19,
  19.5, 20, 20.5, 21, 22, 23, 24
]
let fontSizeListLen = fontSizeList.length
let customLabel = {
  color: colorList[Math.floor(Math.random() * colorListLen)],
  fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
}
let bgColor = 'transparent'
let canDraggable = false

const options = computed(() => {
  return {
    // tooltip: {
    //   formatter: function (p: any) {
    //     return `${p.data.name} ${p.data.value}`
    //   }
    // },
    // series: [
    //   {
    //     type: 'wordCloud',
    //     shape: 'circle',
    //     left: 'center',
    //     top: 'center',
    //     right: null,
    //     bottom: null,
    //     width: '100%',
    //     height: '100%',
    //     sizeRange: [20, 40],
    //     rotationRange: [0, 0],
    //     gridSize: 16,
    //     drawOutOfBound: false,
    //     data: seriesData,
    //     //随机生成字体颜色
    //     textStyle: {
    //       color: function () {
    //         return (
    //           'rgb(' +
    //           [
    //             Math.round(Math.random() * 255),
    //             Math.round(Math.random() * 255),
    //             Math.round(Math.random() * 255)
    //           ].join(',') +
    //           ')'
    //         )
    //       }
    //     }
    //   }
    // ]
    color: ['#37A2DA', '#32C5E9', '#67E0E3'],
    title: {
      show: false,
      text: '书籍借阅云图',
      x: 'center',
      y: 'bottom',
      // 文字的颜色,默认 #333。
      color: '#666',
      fontSize: 24
    },
    toolbox: {
      show: true,
      feature: {
        restore: {}
      }
    },
    itemStyle: {
      color: bgColor
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 45,
          edgeLength: 40
        },
        roam: 'scale',
        label: {
          show: true,
          color: 'auto',
          fontSize: 14
        },
        data: [
          {
            name: 'Echarts可视化',
            value: 22,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'JavaScript入门至精通',
            value: 12,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'HTML',
            value: 22,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'CSS从入门到放弃',
            value: 42,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'Vuejs框架',
            value: 52,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'React',
            value: 62,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'uni-app',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '毕业当兵去',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '微信小程序',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'Node',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '算法入门',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '数据结构',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '边城',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '雪中悍刀行',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '仙剑',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '寒冬',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '诗滢大宝贝',
            value: 520,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '冬日暖阳',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '冬日恋歌',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          }
        ]
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
