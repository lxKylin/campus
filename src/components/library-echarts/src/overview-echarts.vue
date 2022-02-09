<template>
  <div class="overview-echart">
    <el-row :gutter="10">
      <template v-for="(item, index) in topPanelDatasOne" :key="index">
        <el-col :span="12">
          <hy-statistical-panel class="digital-panel-row" :panel-data="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <template v-for="(item, index) in topPanelDatasTwo" :key="index">
        <el-col :span="12">
          <hy-statistical-panel class="digital-panel-row" :panel-data="item" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-wordcloud'

import { BaseEchart } from '@/base-ui/echart'

import {
  computed,
  defineProps,
  withDefaults,
  ref,
  reactive,
  onMounted
} from 'vue'

import HyStatisticalPanel from '@/components/statistical-panel'

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

const topPanelDatasOne = ref<any>([])
const topPanelDatasTwo = ref<any>([])

// 生命周期
onMounted(() => {
  // 获取页面所有的数据
  getDashBoardData()
})

const getDashBoardData = (queryInfo: any = {}) => {
  topPanelDatasOne.value = [
    {
      title: '今日借出人数',
      price: 1234,
    },
    {
      title: '今日续借册数',
      price: 2345,
    }
  ]
  topPanelDatasTwo.value = [
    {
      title: '今日借出册数',
      price: 123,
    },
    {
      title: '今日办证人数',
      price: 666,
    }
  ]
}
</script>

<style lang="less" scoped>
.overview-echart {
  .digital-panel-row {
    height: 110px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .el-row {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
</style>
