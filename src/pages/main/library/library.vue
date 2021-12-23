<template>
  <div class="library">
    <el-row :gutter="10">
      <el-col :span="6">
        <lx-card title="分类商品数量(饼图)">
          <pie-echart />
        </lx-card>
      </el-col>
      <el-col :span="12"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LxCard from '@/base-ui/card'

import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/library-echarts'

export default defineComponent({
  setup() {
    return {
      LxCard,
      PieEchart
    }
  }
})
</script>

<style lang="less" scoped>
.library {

}
</style>

