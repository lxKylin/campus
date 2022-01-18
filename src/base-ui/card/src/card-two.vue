<template>
  <div class="card">
    <bv-border-box
      name="border12"
      class="card__box"
    >
      <card-title>
        <template #header>
          <div class="card-header">
            <span>{{ props.title }}</span>
          </div>
        </template>
      </card-title>
      <div class="item">
        <slot></slot>
      </div>
    </bv-border-box>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

import CardTitle from './card-title.vue'

// defineProps定义props，withDefaults设置默认值
// 泛型表示接收一些什么样的属性
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '',
  }
)
</script>

<style lang="less" scoped>
.card {
  .card-header {
    display: flex;
    height: 30px;
    padding-top: 15px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    // background-color: rgba(255, 255, 255, 0.13);
  }

  .item {
    margin: 0 auto;
    // margin-bottom: 10px;
    background-color: transparent;
    // background-color: rgba(255, 255, 255, 0.13);
    // border: 1px solid red;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
}
</style>
