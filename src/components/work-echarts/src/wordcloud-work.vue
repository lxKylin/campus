<template>
  <div class="word-cloud">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-wordcloud'

import { BaseEchart } from '@/base-ui/echart'

import { getOccupationList } from '@/service/work/work'

// import { nameList } from '../constant'

import { computed, defineProps, withDefaults, reactive, onMounted, onUpdated } from 'vue'

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

let bgColor = 'transparent'
let canDraggable = false

let list: any = reactive([])
let nameList: string[] = reactive([])

const init = async () => {
  await getOccupationList().then((res) => {
    // console.log(res.data, '222');
    const listData = res.data
    console.log(listData, '23')
    listData.forEach((item: any, index: any) => {
      nameList.push(item.occupation)
    })
  })
}

onMounted(async () => {
  await init()
  addList()
})

const addList = () => {
  nameList.forEach((item) => {
    list.push({
      name: item,
      value: Math.floor(Math.random() * colorListLen) + 50,
      draggable: canDraggable,
      itemStyle: {
        color: bgColor
      },
      label: {
        color: colorList[Math.floor(Math.random() * colorListLen)],
        fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
      }
    })
  })
    console.log(list,nameList, '7');
}

// addList()


const options = computed(() => {
  return {
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
        data: list
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
