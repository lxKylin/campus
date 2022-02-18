<template>
  <div class="work">
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="6">
        <lx-card class="card" title="师生各项比例">
          <el-row>
            <el-col :span="12">
              <TeacherOverview />
            </el-col>
            <el-col :span="12">
              <StudentOverview />
            </el-col>
          </el-row>
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="12">
        <lx-card class="card" title="FIT校园大事件">
          <View />
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="6">
        <lx-card class="card" title="教学科研成果">
          <KeYan />
        </lx-card>
      </el-col>
    </el-row>
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="6">
        <lx-card class="card" title="师生男女比例">
          <el-row>
            <el-col :span="24">
              <NanNv />
            </el-col>
          </el-row>
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="12">
        <lx-card class="card" title="FIT部门/社团活动预告">
          <YuGao />
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="6">
        <lx-card class="card" title="招生专业Top5">
          <ZhaoSheng />
        </lx-card>
      </el-col>
    </el-row>
    <el-row class="work__row" :gutter="5">
      <el-col class="work__row__col" :span="16">
        <lx-card class="card" title="校部门/社团Top10">
          <BuMenAndSheTuan />
        </lx-card>
      </el-col>
      <el-col class="work__row__col" :span="8">
        <lx-card class="card" title="开设学院及专业">
          <XueYuan />
        </lx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

import { LxCard } from '@/base-ui/card'

import {
  TeacherOverview,
  StudentOverview,
  View,
  KeYan,
  TeacherMan,
  BuMen,
  BuMenAndSheTuan,
  XueYuan,
  NanNv,
  YuGao,
  ZhaoSheng
} from '@/components/overview'
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
