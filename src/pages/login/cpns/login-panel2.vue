<template>
  <div class="login-panel">
    <h1 class="title">智慧校园可视化大屏</h1>
    <div class="tabs">
      <login-account ref="accountRef" />
    </div>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    // <InstanceType<typeof LoginAccount>> 拿到LoginAccount导出的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 区分选择账号登录还是手机登录 默认账号登录
    const currentTab = ref('account')

    // 2.定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        // console.log('登录')
        // 因为没有传入东西，所以有可能是空的，需要加上? 可选
        // isKeepPassword.value传入判断是否需要记住密码
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // 执行手机登录逻辑
        phoneRef.value?.loginAction()
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 360px;
  position: absolute;
  .title {
    text-align: center;
  }
  .tabs {
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
