<template>
  <div class="work">
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="5">
        <lx-card class="card" title="生源各项比例">
          <ShengYuan />
          <div class="titleOne">校友行业分布</div>
          <FenBu class="fen-bu" />
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
          <div class="title">FIT历年本科生升学情况</div>
          <ShengXue class="sheng-xue" />
        </lx-card>
      </el-col>
    </el-row>
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="16">
        <lx-card class="card" title="各行业就业选择比例">
          <el-row>
            <el-col :span="4">
              <ItPolo />
            </el-col>
            <el-col :span="4">
              <JinRongPolo />
            </el-col>
            <el-col :span="4">
              <KaoGongPolo />
            </el-col>
            <el-col :span="4">
              <KaoYanPolo />
            </el-col>
            <el-col :span="4">
              <JianZhuPolo />
            </el-col>
            <el-col :span="4">
              <HuLiPolo />
            </el-col>
          </el-row>
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="8">
        <lx-card class="card" title="校友活动公告">
          <HuoDong />
        </lx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import {LxCard, LxCardTwo} from '@/base-ui/card'

import { PieEchart, WordCloudEchart, LineEchart } from '@/components/library-echarts'
import ScrollTable from '@/components/scroll-table.vue'
import {
  MapEchart,
  WaterPoloEchart,
  WordCloudWork,
  WaterPolo,
  ItPolo,
  JinRongPolo,
  KaoGongPolo,
  KaoYanPolo,
  JianZhuPolo,
  HuLiPolo,
  ShengYuan,
  ShengXue,
  HuoDong,
  FenBu
} from '@/components/work-echarts'

export default defineComponent({
  components: {
    LxCard,
    LxCardTwo,
    PieEchart,
    ScrollTable,
    WordCloudEchart,
    LineEchart,
    MapEchart,
    WaterPoloEchart,
    WordCloudWork,
    WaterPolo,
    ItPolo,
    JinRongPolo,
    KaoGongPolo,
    KaoYanPolo,
    JianZhuPolo,
    HuLiPolo,
    ShengYuan,
    ShengXue,
    HuoDong,
    FenBu
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
    position: relative;
    &__col {
      & .titleOne {
        position: absolute;
        text-align: center;
        top: 330px;
        left: 150px;
      }
      & .title {
        position: absolute;
        text-align: center;
        top: 330px;
        left: 110px;
      }

      & .fen-bu {
        margin-top: 88px;
      }
      & .sheng-xue {
        margin-top: 88px;
      }
      & .card {
      }
      & .echart {
      }
    }

  }
}
</style>
