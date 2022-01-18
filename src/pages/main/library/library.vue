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
        <lx-card class="card" title="图书借阅概览"> </lx-card>
      </el-col>
    </el-row>
    <el-row class="library__row" :gutter="5">
      <el-col class="library__row__col" :span="6">
        <lx-card class="card" title="书籍借阅云图">
          <word-cloud-echart class="echart" />
        </lx-card>
      </el-col>
      <el-col class="library__row__col" :span="12">
        <lx-card class="card" title="年度借阅报告">
          <line-echart />
        </lx-card>
      </el-col>
      <el-col class="library__row__col" :span="6">
        <lx-card class="card" title="月度书籍借阅Top5"> </lx-card>
      </el-col>
    </el-row>
    <el-row class="library__row" :gutter="5">
      <el-col class="library__row__col" :span="6">
        <lx-card class="card" title="书籍借阅云图">
          <word-cloud-echart class="echart" />
        </lx-card>
      </el-col>
      <el-col class="library__row__col" :span="12">
        <lx-card class="card" title="年度借阅报告">
          <line-echart />
        </lx-card>
      </el-col>
      <el-col class="library__row__col" :span="6">
        <lx-card class="card" title="年度书籍借阅Top5"> </lx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { LxCard } from '@/base-ui/card'

import {
  PieEchart,
  WordCloudEchart,
  LineEchart
} from '@/components/library-echarts'
import ScrollTable from '@/components/scroll-table.vue'

export default defineComponent({
  components: {
    LxCard,
    PieEchart,
    ScrollTable,
    WordCloudEchart,
    LineEchart
  },

  setup() {
    const pieData = ref()
    return {
      pieData
    }
  }
})
</script>

<style lang="less" scoped>
.library {
  &__row {
    margin-bottom: 20px;
    &__col {
      & .card {
      }
      & .echart {
      }
    }
  }
}
</style>
