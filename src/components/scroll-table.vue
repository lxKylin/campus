<template>
  <div class="scroll-table">
    <bv-scroll-table
      :config="config"
      style="width: 100%; height: 100%"
    ></bv-scroll-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    let config = reactive({
      header: ['时间', '读者姓名', '流动事务'],
      data: [
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Arms', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
        ['2021-12-30 17:10:10', 'Kylin', '[续借]《毕业当兵去》'],
      ],
      rowNum: '5',
      headerHeight: 45,
      headerBGC: 'rgba(255, 255, 255, 0.25)',
      oddRowBGC: 'rgba(255, 255, 255, 0.13)',
      evenRowBGC: 'rgba(255, 255, 255, 0.2)',
      align: 'center',
      hoverPause: true
    })
    return {
      config
    }
  }
})
</script>

<style lang="less" scoped>
.scroll-table {
  & :deep(.bv-scroll-table) {
    text-align: center;
    overflow: hidden;
  }
  & :deep(.header) {
    margin: 0 5px;
  }
  & :deep(.rows) {
    margin: 0 5px;
    height: 211px !important;
  }
  & :deep(.row-item) {
    height: 15px;
  }
}
</style>
