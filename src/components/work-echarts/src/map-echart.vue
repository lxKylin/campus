<template>
  <div class="map-echart">
    <map-echart :options="myOptions"></map-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

import { MapEchart } from '@/base-ui/echart'

import { IDataType } from '../types'

import { convertData } from '../utils/convert-data'
import { coordinateData } from '../utils/coordinate-data'

import { D1, D2, D3, D4, D5, D6 } from '../constant'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData?: IDataType[]
  }>(),
  {
    title: ''
  }
)

let geoGpsMap = [119.306239, 26.075302]
let t = 1 //流入流出控制
let r = 1 //右侧流入流出文字控制

let d1: any = D1

let d2: any = D2

let d3: any = D3

let d4: any = D4

let d5: any = D5

let d6: any = D6

let colors = ['#1DE9B6', '#EEDD78', '#32C5E9', '#FFDB5C', '#37A2DA', '#04B9FF']

let year = ['2019-09', '2020-06', '2020-09', '2021-06', '2021-09', '2022-06']
let mapData: any = [[], [], [], [], [], []]

/*柱子Y名称*/
let categoryData: any = []
let barData: any = []

for (let key in coordinateData) {
  mapData[0].push({
    year: '2019-09',
    name: key,
    value: (d1[key] / 100).toFixed(0),
    value1: (d1[key] / 100).toFixed(0)
  })
  mapData[1].push({
    year: '2020-06',
    name: key,
    value: (d2[key] / 100).toFixed(0),
    value1: (d2[key] / 100).toFixed(0)
  })
  mapData[2].push({
    year: '2020-09',
    name: key,
    value: (d3[key] / 100).toFixed(0),
    value1: (d3[key] / 100).toFixed(0)
  })
  mapData[3].push({
    year: '2021-06',
    name: key,
    value: (d4[key] / 100).toFixed(0),
    value1: (d4[key] / 100).toFixed(0)
  })
  mapData[4].push({
    year: '2021-09',
    name: key,
    value: (d5[key] / 100).toFixed(0),
    value1: (d5[key] / 100).toFixed(0)
  })
  mapData[5].push({
    year: '2022-06',
    name: key,
    value: d6[key],
    value1: d6[key]
  })
}

for (let i = 0; i < mapData.length; i++) {
  mapData[i].sort(function sortNumber(a: any, b: any) {
    return a.value - b.value
  })
  barData.push([])
  categoryData.push([])
  for (let j = 0; j < mapData[i].length; j++) {
    barData[i].push(mapData[i][j].value1)
    categoryData[i].push(mapData[i][j].name)
  }
}

let convertToLineData = (data: any, gps: any) => {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i]
    let toCoord = coordinateData[dataItem.name]
    let fromCoord = gps //郑州
    if (fromCoord && toCoord) {
      if (t == 1) {
        res.push([
          {
            coord: toCoord
          },
          {
            coord: fromCoord,
            value: dataItem.value
          }
        ])
      } else {
        res.push([
          {
            coord: fromCoord,
            value: dataItem.value
          },
          {
            coord: toCoord
          }
        ])
      }
    }
  }
  if (t == 0) {
    t = 1
  } else {
    t = 0
  }
  return res
}

let optionData: {
  title: (
    | {
        text: string
        left: string
        top: string
        textStyle: { color: string; fontSize: number }
        id?: undefined
      }
    | {
        id: string
        text: string
        left: string
        top: string
        textStyle: { color: string; fontSize: number }
      }
  )[]
  xAxis: {
    type: string
    scale: boolean
    position: string
    min: number
    boundaryGap: boolean
    splitLine: { show: boolean }
    axisLine: { show: boolean }
    axisTick: { show: boolean }
    axisLabel: { margin: number; textStyle: { color: string } }
  }
  yAxis: {
    type: string
    nameGap: number
    axisLine: { show: boolean; lineStyle: { color: string } }
    axisTick: { show: boolean; lineStyle: { color: string } }
    axisLabel: { interval: number; textStyle: { color: string } }
    data: any
  }
  series: (
    | {
        //文字和标志
        name: string
        type: string
        coordinateSystem: string
        data: { name: any; value: any }[]
        symbolSize: (val: any) => number
        label: {
          normal: { formatter: string; position: string; show: boolean }
          emphasis: { show: boolean; textStyle?: undefined }
        }
        itemStyle: {
          normal: {
            color: string
            areaColor?: undefined
            borderColor?: undefined
            shadowBlur?: undefined
            shadowColor?: undefined
            barBorderRadius?: undefined
          }
          emphasis?: undefined
        }
        map?: undefined
        geoIndex?: undefined
        aspectScale?: undefined //长宽比
        showLegendSymbol?: undefined
        roam?: undefined
        animation?: undefined
        showEffectOn?: undefined
        rippleEffect?: undefined
        hoverAnimation?: undefined
        zlevel?: undefined
        effect?: undefined
        lineStyle?: undefined
        barMaxWidth?: undefined
        symbol?: undefined
      }
    | {
        type: string
        map: string
        geoIndex: number
        aspectScale: number //长宽比
        showLegendSymbol: boolean // 存在legend时显示
        label: {
          normal: { show: boolean; formatter?: undefined; position?: undefined }
          emphasis: { show: boolean; textStyle: { color: string } }
        }
        roam: boolean
        itemStyle: {
          normal: {
            areaColor: string
            borderColor: string
            color?: undefined
            shadowBlur?: undefined
            shadowColor?: undefined
            barBorderRadius?: undefined
          }
          emphasis: { areaColor: string }
        }
        animation: boolean
        data: any
        //文字和标志
        name?: undefined
        coordinateSystem?: undefined
        symbolSize?: undefined
        showEffectOn?: undefined
        rippleEffect?: undefined
        hoverAnimation?: undefined
        zlevel?: undefined
        effect?: undefined
        lineStyle?: undefined
        barMaxWidth?: undefined
        symbol?: undefined
      }
    | {
        //  name: 'Top 5',
        type: string
        coordinateSystem: string
        data: { name: any; value: any }[]
        symbolSize: (val: any) => number
        showEffectOn: string
        rippleEffect: { brushType: string }
        hoverAnimation: boolean
        label: {
          normal: { formatter: string; position: string; show: boolean }
          emphasis?: undefined
        }
        itemStyle: {
          normal: {
            color: string
            shadowBlur: number
            shadowColor: string
            areaColor?: undefined
            borderColor?: undefined
            barBorderRadius?: undefined
          }
          emphasis?: undefined
        }
        zlevel: number
        //文字和标志
        name?: undefined
        map?: undefined
        geoIndex?: undefined
        aspectScale?: undefined //长宽比
        showLegendSymbol?: undefined
        roam?: undefined
        animation?: undefined
        effect?: undefined
        lineStyle?: undefined
        barMaxWidth?: undefined
        symbol?: undefined
      }
    | {
        type: string
        zlevel: number
        effect: {
          show: boolean
          period: number //箭头指向速度，值越小速度越快
          trailLength: number //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: string //箭头图标
          symbolSize: number //图标大小
        }
        lineStyle: {
          normal: {
            color: string
            width: number //尾迹线条宽度
            opacity: number //尾迹线条透明度
            curveness: number //尾迹线条曲直度
          }
        }
        data: (
          | { coord: any; value?: undefined }
          | { coord: any; value: any }
        )[][]
        //文字和标志
        name?: undefined
        coordinateSystem?: undefined
        symbolSize?: undefined
        label?: undefined
        itemStyle?: undefined
        map?: undefined
        geoIndex?: undefined
        aspectScale?: undefined //长宽比
        showLegendSymbol?: undefined
        roam?: undefined
        animation?: undefined
        showEffectOn?: undefined
        rippleEffect?: undefined
        hoverAnimation?: undefined
        barMaxWidth?: undefined
        symbol?: undefined
      }
    | {
        zlevel: number
        type: string
        barMaxWidth: number
        symbol: string
        itemStyle: {
          normal: {
            color: string
            barBorderRadius: number[]
            areaColor?: undefined
            borderColor?: undefined
            shadowBlur?: undefined
            shadowColor?: undefined
          }
          emphasis?: undefined
        }
        data: any
        //文字和标志
        name?: undefined
        coordinateSystem?: undefined
        symbolSize?: undefined
        label?: undefined
        map?: undefined
        geoIndex?: undefined
        aspectScale?: undefined //长宽比
        showLegendSymbol?: undefined
        roam?: undefined
        animation?: undefined
        showEffectOn?: undefined
        rippleEffect?: undefined
        hoverAnimation?: undefined
        effect?: undefined
        lineStyle?: undefined
      }
  )[]
}[] = []
for (let n = 0; n < year.length; n++) {
  let statistic_name = '各省' + (r == 1 ? '生源分布' : '毕业去向') + '人数'
  optionData.push({
    title: [
      {
        text: 'FIT生源流量监测',
        left: '25%',
        top: '1%',
        textStyle: {
          color: '#fff',
          fontSize: 25
        }
      },
      {
        id: 'statistic',
        text: statistic_name,
        left: '75%',
        top: '3%',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      }
    ],
    xAxis: {
      type: 'value',
      scale: true,
      position: 'top',
      min: 0,
      boundaryGap: false,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 1,
        textStyle: {
          color: '#aaa'
        }
      }
    },
    yAxis: {
      type: 'category',
      nameGap: 16,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ddd'
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#ddd'
        }
      },
      data: categoryData[n]
    },

    series: [
      //未知作用
      {
        //文字和标志
        name: 'light',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(mapData[n]),
        symbolSize: function (val: any) {
          return 6
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: colors[n]
          }
        }
      },
      //地图？
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 1, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#FFFFFF'
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        animation: false,
        data: mapData
      },
      //地图点的动画效果
      {
        //  name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(
          mapData[n]
            .sort(function (a: any, b: any) {
              return b.value - a.value
            })
            .slice(0, 20)
        ),
        symbolSize: function (val: any) {
          return 5
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: colors[n],
            shadowBlur: 10,
            shadowColor: colors[n]
          }
        },
        zlevel: 1
      },
      //地图线的动画效果
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 5, //箭头指向速度，值越小速度越快
          trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 6 //图标大小
        },
        lineStyle: {
          normal: {
            color: colors[n],
            width: 1, //尾迹线条宽度
            opacity: 0.2, //尾迹线条透明度
            curveness: 0.3 //尾迹线条曲直度
          }
        },
        data: convertToLineData(mapData[n], geoGpsMap)
      },
      //柱状图
      {
        zlevel: 1.5,
        type: 'bar',
        barMaxWidth: 8,
        symbol: 'none',
        itemStyle: {
          normal: {
            color: colors[n],
            barBorderRadius: [0, 30, 30, 0]
          }
        },
        data: barData[n]
      }
    ]
  })
  if (r == 0) {
    r = 1
  } else {
    r = 0
  }
}
let myOptions = computed(() => {
  return {
    timeline: {
      data: ['2019-09', '2020-06', '2020-09', '2021-06', '2021-09', '2022-06'],
      axisType: 'category',
      autoPlay: true,
      playInterval: 5000,
      left: '10%',
      right: '10%',
      bottom: '3%',
      width: '80%',
      label: {
        normal: {
          textStyle: {
            color: '#ddd'
          }
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        borderColor: '#777',
        borderWidth: 2
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      }
    },
    baseOption: {
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicInOut',
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'cubicInOut',
      grid: {
        right: '2%',
        top: '10%',
        bottom: '10%',
        width: '18%'
      },
      tooltip: {
        trigger: 'axis', // hover触发器
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)' //hover颜色
          }
        }
      },
      visualMap: {
        min: 0,
        max: 250,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        textStyle: {
          color: 'white'
        },
        calculable: true,
        colorLightness: [0.8, 100],
        color: ['#c05050', '#e5cf0d', '#5ab1ef'],
        dimension: 0
      },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 1,
        center: [113.83531246, 34.0267395887],
        label: {
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(128, 217, 248, 1)',
            // shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0
          }
        }
      }
    },
    options: optionData
  }
})
</script>

<style scoped></style>
