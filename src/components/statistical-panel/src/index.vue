<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
    </div>
    <div class="content">
      <hy-counter-up :number="panelData.price" :option="counterOption2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyCounterUp from '@/base-ui/count-up'

export default defineComponent({
  components: {
    HyCounterUp
  },
  props: {
    panelData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  setup() {
    const counterOption1 = {
      decimalPlaces: 0, // 保留两位
      // prefix: '' // 单位
    }
    const counterOption2 = {
      decimalPlaces: 0, // 保留两位
      // prefix: '￥' // 单位
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>

<style scoped lang="less">
@h: 38px;

.statistical {
  display: flex;
  padding: 0 20px;
  // background: white;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 2px 12px 0 rgb(0 0 0/10%);

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: #00ddfc;
    // border: 1px solid red;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: -5px;
    font-size: 26px;
    color: #f9a332;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
