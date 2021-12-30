<template>
  <div class="library">
    <el-row class="library__row" :gutter="5">
      <el-col class="library__row__col" :span="6">
        <lx-card class="card" title="分类借阅比例">
          <pie-echart class="echart" :pieData="pieData" />
        </lx-card>
      </el-col>
      <el-col class="library__row__col" :span="12">
        <lx-card class="card" title="实时借还动态">
          <scroll-table />
        </lx-card>
      </el-col>
      <el-col class="library__row__col" :span="6">
        <lx-card class="card" title="分类借阅比例">
          <pie-echart class="echart" :pieData="pieData" />
        </lx-card>
      </el-col>
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
import { defineComponent, ref } from 'vue'

import LxCard from '@/base-ui/card'

import { PieEchart } from '@/components/library-echarts'
import ScrollTable from '@/components/scroll-table.vue'

export default defineComponent({
  components: {
    LxCard,
    PieEchart,
    ScrollTable
  },

  setup() {
    const pieData = ref([
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ])
    return {
      pieData
    }
  }
})
</script>

<style lang="less" scoped>
.library {
  &__row {
    &__col {
      & .card {
      }
      & .echart {
      }
    }
  }
}
</style>
