<template>
  <div class="work">
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="5">
        <lx-card class="card" title="生源各项比例">
          <bar-overview />
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="14">
        <lx-card-two class="card" title="FIT生源分布/毕业去向">
          <map-echart />
        </lx-card-two>
      </el-col>
      <el-col class="work__row__col" :span="5">
        <lx-card class="card" title="毕业生职业云图">
          <WordCloudWork />
        </lx-card>
      </el-col>
    </el-row>
    <el-row class="work__row" :gutter="5">
      <!-- <el-col class="work__row__col" :span="4">
        <lx-card class="card" title="书籍借阅云图">
          <word-cloud-echart class="echart" />
        </lx-card>
      </el-col> -->
      <el-col class="work__row__col" :span="16">
        <lx-card class="card" title="各行业就业分布">
          <line-echart />
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="8">
        <lx-card class="card" title="活动公告"> </lx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

import { LxCard, LxCardTwo } from '@/base-ui/card'

import {
  PieEchart,
  WordCloudEchart,
  LineEchart
} from '@/components/library-echarts'
import {
  MapEchart,
  WaterPoloEchart,
  WordCloudWork
} from '@/components/work-echarts'
import { BarOverview } from '@/components/overview'
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
