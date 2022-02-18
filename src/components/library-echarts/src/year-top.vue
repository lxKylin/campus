<template>
  <div class="water-po-echart">
    <base-echart :options="myOptions"></base-echart>
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

//图表X轴数据
const Xdata = reactive([
  '军事',
  '文字',
  '艺术',
  '医药',
  '政治',
  '经济',
  '历史',
  '教育',
  '法律',
  '文学'
])

//图表项目
const fp_key = ['借出量', '归还量']

const fp_coler = ['#258df6', '#6fce7d', '#fbc807', '#f5814b']
const lineColor = 'rgba(0,0,0,0.2)'

let colors: any = [
  {
    borderColor: 'rgba(227,161,96,1)',
    start: 'rgba(227,161,96,0.8)',
    end: 'rgba(227,161,96,0.3)'
  },
  {
    borderColor: 'rgba(0,222,255,1)',
    start: 'rgba(0,222,255,0.3)',
    end: 'rgba(0,222,255,0.8)'
  }
]
//图表项目数据
const LF_val: any = {
  0: [80, 128, 255, 254, 313, 143, 360, 343, 338, 163],
  1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370],
  2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209],
  3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392],
  4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250],
  5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163],
  6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273],
  7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250],
  8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268],
  9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309],
  10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250],
  11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250],
  12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163]
}

const TS_val: any = {
  0: [80, 128, 255, 254, 313, 263, 302, 372, 163, 258],
  1: [20, 350, 300, 250, 200, 400, 350, 300, 250, 258],
  2: [30, 129, 173, 101, 310, 356, 239, 208, 330, 258],
  3: [33, 396, 388, 108, 325, 209, 271, 215, 216, 258],
  4: [30, 350, 300, 250, 200, 400, 350, 300, 250, 258],
  5: [10, 350, 300, 250, 200, 400, 350, 300, 250, 258],
  6: [80, 128, 255, 254, 313, 263, 302, 372, 163, 258],
  7: [89, 259, 262, 324, 232, 185, 392, 392, 153, 258],
  8: [11, 315, 139, 375, 204, 204, 352, 163, 258, 258],
  9: [27, 210, 328, 292, 241, 150, 200, 250, 300, 258],
  10: [10, 350, 300, 250, 200, 400, 350, 300, 250, 258],
  11: [20, 128, 255, 254, 313, 263, 302, 372, 163, 258],
  12: [11, 388, 233, 309, 133, 224, 291, 185, 203, 258]
}

//图表月份
const timeLineData: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let optionData: any = []
let myData: any = []

for (let i = 0; i < timeLineData.length; i++) {
  myData.push(timeLineData[i])
  optionData.push({
    series: [
      {
        name: fp_key[0],
        type: 'bar',
        stack: 'one',
        realtimeSort: false,
        barGap: 15,
        barWidth: 15,
        label: {
          normal: {
            show: true,
            position: 'inside',
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          emphasis: {
            show: true,
            position: 'inside',
            offset: [0, 0],
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: colors[0].start
              },
              {
                offset: 1,
                color: colors[0].end
              }
            ])
          }
        },
        data: LF_val[timeLineData[i]]
      },
      {
        name: fp_key[1],
        stack: 'right',
        type: 'bar',
        realtimeSort: true,
        barGap: 15,
        barWidth: 15,
        xAxisIndex: 2,
        yAxisIndex: 2,
        label: {
          normal: {
            show: true,
            position: 'inside',
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          emphasis: {
            show: true,
            position: 'inside',
            offset: [0, 0],
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: colors[1].start
              },
              {
                offset: 1,
                color: colors[1].end
              }
            ])
          }
        },
        data: TS_val[timeLineData[i]]
      }
    ]
  })
}

const myOptions = computed(() => {
  return {
    timeline: {
      show: true,
      axisType: 'category',
      tooltip: {
        show: true,
        formatter: function (params: any) {
          return params.name + '月份数据统计'
        }
      },
      autoPlay: true,
      currentIndex: 6,
      playInterval: 3000,
      left: '3%',
      right: '3%',
      bottom: '0%',
      width: '94%',
      label: {
        normal: {
          show: true,
          interval: 'auto',
          formatter: '{value}月',
          textStyle: {
            color: 'red'
          }
        },
        emphasis: {
          textStyle: {
            color: 'red'
          }
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: '#red'
      },
      checkpointStyle: {
        borderColor: '#red',
        borderWidth: 2
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#ff8800',
          borderColor: '#ff8800'
        },
        emphasis: {
          color: 'red',
          borderColor: 'red'
        }
      },
      data: myData
    },
    baseOption: {
      title: {
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      legend: {
        data: fp_key,
        top: '0%',
        right: '5%',
        itemWidth: 15,
        itemHeight: 5,
        icon: 'horizontal',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: [
        {
          show: false,
          left: '5%',
          top: '10%',
          bottom: '8%',
          containLabel: true,
          width: '40%'
        },
        {
          show: false,
          left: '50%',
          top: '15%',
          bottom: '7%',
          width: '0%'
        },
        {
          show: false,
          left: '55%',
          top: '10%',
          bottom: '8%',
          containLabel: true,
          width: '40%'
        },
        {
          gridindex: 3,
          show: false
        }
      ],

      xAxis: [
        {
          type: 'value',
          triggerEvent: true,
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: 'top',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B2B2B2',
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: lineColor
            }
          }
        },
        {
          gridIndex: 1,
          show: false
        },
        {
          gridIndex: 2,
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: 'top',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#B2B2B2',
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: lineColor
            }
          }
        },
        {
          gridIndex: 3,
          type: 'value',
          show: false
        }
      ],
      yAxis: [
        {
          type: 'category',
          inverse: true,
          position: 'right',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 8,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          data: Xdata
        },
        {
          gridIndex: 1,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#9D9EA0',
              fontSize: 12
            }
          },
          data: Xdata.map(function (value: any) {
            return {
              value: value,
              textStyle: {
                align: 'center'
              }
            }
          })
        },
        {
          gridIndex: 2,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#9D9EA0',
              fontSize: 12
            }
          },
          data: Xdata
        },
        {
          gridIndex: 3,
          type: 'category',
          inverse: true,
          position: 'left',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#9D9EA0',
              fontSize: 12
            }
          },
          data: Xdata
        }
      ],
      series: []
    },
    options: optionData
  }
})
</script>

<style scoped></style>
