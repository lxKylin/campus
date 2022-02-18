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

var xdata = [
  '军魂社',
  '跆拳道协会',
  '吉他社',
  '滑板社',
  '英语协会',
  '言墨书法协会',
  '魔方社',
  '街舞社',
  '汉服社',
  '茶艺社'
]
var data = [180, 160, 151, 133, 123, 114, 110, 78, 55, 45]
var maxArr = [100, 100, 100]
let itemStyle: any = ''
var colorList = [
  new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: '#FFA800'
      },
      {
        offset: 1,
        color: 'rgba(255, 168, 0, 0)'
      }
    ],
    false
  ),
  new echarts.graphic.LinearGradient(
    0,
    0,
    1,
    0,
    [
      {
        offset: 0,
        color: 'rgba(0, 251, 226, 0.94)'
      },
      {
        offset: 1,
        color: ' rgba(35, 201, 255, 0)'
      }
    ],
    false
  )
]

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params: any) {
        // params[0].data.nameCode
        let dot =
          '<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>'
        return params[0].name + '<br>' + '数量 ：' + params[0].value
      }
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '10%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      data: xdata,
      triggerEvent: true,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        rotate: 0,
        interval: 0,
        textStyle: {
          padding: [14, 0, 0, 0],
          fontSize: 15,
          color: '#00F6FF'
        }
      }
    },
    yAxis: {
      triggerEvent: true,
      minInterval: 50,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 188, 224, 0.35)'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#CCCCCC',
          fontSize: 16
        }
      }
    },
    series: [
      {
        name: '数量',
        barMinHeight: 10,
        type: 'pictorialBar',
        barCategoryGap: '60%',
        symbol: 'path://M10 0 L0 10 L20 10 Z',
        data: data.map((item, i) => {
          itemStyle = {
            color: i > 0 ? colorList[1] : colorList[i]
          }
          return {
            value: item,
            itemStyle: itemStyle
          }
        }),
        label: {
          normal: {
            show: true,
            position: 'top',
            align: 'center',
            textStyle: {
              color: '#fff',
              fontSize: 20
            },
            rich: {
              a1: {
                width: 20,
                height: 20,
                borderRadius: '100% 100%',
                padding: [0, 0, 0, 0],
                backgroundColor: {
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaklEQVQ4jZXTv0tXYRTH8VcXFyWixbG+DfbjC/0B0g9pEGuJMqOlf6ChNoPANaQhWlx0d4rKmipxUZvEzUH7MWT9A4GkDVFx8Fx8uBe+2IEHznM+933uc5/7OUf+LgxqRIURjOFkSt+wiBX8KR+vGvAFrOMZdvE2127WQrtYAn1FfhdPcR8vm8fCY0ykNon5ssHlhK/gYws9iIA3sIxtrPblZ8ziQQ1vbu+dxhOMJrqER91O/2d8wj3M4Xx9Yb/wIuGzWMMtHMsV+VpqEW/wM9gqb3uhOOY0jrcOv1+bLvavcS0anIoXF8JoCz2IsSLfwlDzN/53RIOv6BbgUo8mi0V+Dl+qLN4shCn8aKH7talifwPvqrTnAG5Htdvpj28bxivs5Ip8OLUaPhpsPQthpOeHMFLEmTTSnTBSfYmrac8QrveAQ4sTP0xGcxovYQa/0xth14gOxtP64dgPNdBrnK/iRNa+431rnPEPh9JZj7qud/EAAAAASUVORK5CYII='
                }
              },
              a2: {
                width: 20,
                height: 20,
                borderRadius: '100% 100%',
                padding: [0, 0, 0, 0],
                backgroundColor: {
                  image:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWElEQVQ4jZXTMUtXYRQG8F8XJ4n0C6QNpvUNxEoaQl3C1GjpCzjolpNrOEWLi+1NkVZTJi5mg4hODpo0WH2BRJIGCTl4/vhyL/ypBw6873POczjvvc+50rW7pYYKwxhBT6Z+YA2f8bcsr2riIezgJU7xMeM0ucjdKQUdxfkpXmAGy/Wx8BxTmXuG12WDeym+j68N6SVCvIcNfMdmlc9YwmwhvpnFxxnLyQUOMY1XoW19sD94mwUD2MYkrmVMJjeQNR/wO7RVfu13xZgL6G4Mf8EtFPf3GIsGN7BfJB40pJcYKc4H6Kv/xv9GNDjC7UK43qbJWnG+hW9Vko+KxDx+NaQX3HxxH8dqlfbsxOPibYNYwUnGSnIHhfhqaFu7EEZ68w9GCvSnkZ60jBTYTHtG4mEbceRi4rnUqG/jXSziLL0Rdg30YiKtH4790hK0W+dRXE/uJz411hnnARRQbYq4LH4AAAAASUVORK5CYII='
                }
              },
              c: {
                color: '#fff',
                align: 'top',
                fontSize: 16,
                padding: [0, 0, 5, 0]
              }
            },
            formatter: function (data: any) {
              if (data.dataIndex < 1) {
                return ['{c|' + data.value + '}' + '\n' + '{a1|}']
              } else {
                return ['{c|' + data.value + '}' + '\n' + '{a2|}']
              }
            }
          }
        },
        z: 10
      }
    ]
  }
})
</script>

<style scoped></style>
