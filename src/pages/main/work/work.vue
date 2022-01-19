<template>
  <div class="work">
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="4">
        <lx-card class="card" title="生源各项比例">
          <!-- <pie-echart class="echart" :pieData="pieData" /> -->
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="16">
        <lx-card-two class="card" title="FIT生源分布/毕业去向">
          <map-echart />
        </lx-card-two>
      </el-col>
      <el-col class="work__row__col" :span="4">
        <lx-card class="card" title="毕业生就业各项比例">

        </lx-card>
      </el-col>
    </el-row>
    <el-row class="work__row" :gutter="5">
      <!-- <el-col class="work__row__col" :span="4">
        <lx-card class="card" title="书籍借阅云图">
          <word-cloud-echart class="echart" />
        </lx-card>
      </el-col> -->
      <el-col class="work__row__col" :span="24">
        <lx-card class="card" title="各行业就业分布">
          <line-echart />
        </lx-card>
      </el-col>
      <!-- <el-col class="work__row__col" :span="4">
        <lx-card class="card" title="月度书籍借阅Top5">

        </lx-card>
      </el-col> -->
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import {LxCard, LxCardTwo} from '@/base-ui/card'

import { PieEchart, WordCloudEchart, LineEchart } from '@/components/library-echarts'
import ScrollTable from '@/components/scroll-table.vue'
import { MapEchart } from '@/components/work-echarts/'

export default defineComponent({
  components: {
    LxCard,
    LxCardTwo,
    PieEchart,
    ScrollTable,
    WordCloudEchart,
    LineEchart,
    MapEchart
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
.work {
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
