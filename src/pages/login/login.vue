<template>
  <div class="login">
    <Particles id="tsparticles" class="login__particles" :options="particles" />
    <!-- <Particles /> -->
    <!-- <loginPanel /> -->
    <div class="login__wrap">
      <div class="login__box">
        <div class="login__title">
          <div class="login__title__content" :class="{ msie }">
            智慧校园可视化大屏
          </div>
        </div>
        <el-form
          ref="form"
          class="login__form"
          label-width="70px"
          label-position="left"
          :model="user"
          :rules="rules"
          @submit.native=""
        >
          <el-form-item prop="username">
            <div class="login__form__item">
              <img class="icon" src="@/assets/img/login-icon-account.png" />
              <div class="label">账号：</div>
              <el-input
                type="text"
                class="two-words"
                v-model.trim="user.username"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="password">
            <div class="login__form__item">
              <img class="icon" src="@/assets/img/login-icon-pwd.png" />
              <div class="label">密码：</div>
              <el-input
                type="password"
                class="two-words"
                v-model.trim="user.password"
                show-password
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="vcode">
            <div class="login__form__item">
              <img class="icon" src="@/assets/img/login-icon-vcode.png" />
              <div class="label">验证码：</div>
              <div class="flex">
                <el-input
                  type="text"
                  class="three-words"
                  v-model.trim="user.vcode"
                ></el-input>
                <img class="code" :src="vcodeUrl" alt="" @click="" />
              </div>
            </div>
          </el-form-item>
          <div class="account-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
          </div>
          <button
            type="submit"
            class="login__btn"
            :disabled="loading"
            @click=""
          >
            {{ loading ? '登录中...' : '登录' }}
          </button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginPanel from './cpns/login-panel2.vue'
import { particles } from './config/particles-config'
// import Particles from '@/components/particles/index.vue'

export default defineComponent({
  components: {
    loginPanel
    // Particles
  },
  data() {
    return {
      msie: 'ActiveXObject' in window,
      // 定时器
      intervalId: null,
      vcodeUrl: '',
      user: {
        username: '',
        password: '',
        vcode: ''
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        vcode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      loading: false,
      isExchange: false
    }
  },
  setup() {
    const isKeepPassword = ref(true)
    return {
      particles,
      isKeepPassword
    }
  }
})
</script>

<style lang="less">
.login-text-style() {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #ffffff;
}
// 第三方样式样式穿透
:deep(.el-form-item) {
  background-color: rgba(255, 255, 255, 0.13) !important;
  padding: 0 0 0 95px !important;
  color: #ffffff !important;
}
:deep(.el-checkbox__label) {
  color: #ffffff;
}

.login {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 100%;
  // height: 100%;
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-image: url('../../assets/img/bg.png');
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  &__particles {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('../../assets/img/jiguang.jpeg');
  }

  &__title {
    @media screen and (min-width: 1920px) {
      margin-top: 90px;
      font-size: 40px;
    }
    font-size: 30px;
    color: #1a7fbd;
    text-align: center;
    letter-spacing: 1.31px;
    font-family: PingFangSC-Semibold;
    // margin-top: 70px;
    padding-left: 20px;
    transition: all 1s;
    &__content {
      z-index: 2;
      color: #0071db;
      white-space: normal;
      -webkit-background-clip: text;
      background-image: linear-gradient(to bottom, #fff, #358ea1);
      -webkit-text-fill-color: transparent;
      &.msie {
        background-image: none;
      }
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // background-image: url('@/assets/img/login-bg.png');
  }
  &__box {
    @media screen and (min-width: 1920px) {
      width: 676px;
      height: 500px;
    }
    flex: none;
    position: relative;
    width: 476px;
    height: 439px;
    transition: all 1s;
  }
  &__form {
    padding: 20px 20px;
    padding-top: 20px;
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    & .account-control {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      color: #ffffff;
    }
    &__item {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 99;
      .two-words {
        background-color: rgba(255, 255, 255, 0.13);
        .el-input__inner {
          background-color: rgba(255, 255, 255, 0.13);
          padding-left: 90px;
          .login-text-style();
        }
      }
      .three-words {
        .el-input__inner {
          padding-left: 110px;
          .login-text-style();
        }
      }
      .icon {
        width: 18px;
        height: 20px;
        position: absolute;
        z-index: 2;
        // left: 10px;
        left: 15px;
      }
      .label {
        position: absolute;
        z-index: 2;
        // left: 30px;
        left: 50px;
        font-weight: 400;
        .login-text-style();
      }
    }
    & .code {
      width: 78px;
      height: 40px;
      margin-left: 10px;
    }
  }
  &__btn {
    width: 100%;
    height: 40px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.13);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.42px;
    font-family: PingFangSC-Medium;
    cursor: pointer;
  }
  & .flex {
    display: flex;
    width: 100%;
  }
  & .el-form {
    margin: 20px auto;
  }
  & .el-form-item {
    color: #ddd;
    &__content {
      margin-left: 0 !important;
    }
    &__label {
      font-size: 16px;
      color: #333333;
      letter-spacing: 1.19px;
      font-family: PingFangSC-Medium;
      padding-right: 0px;
    }
    & .el-input__inner {
      // background: #2861ac;
      // border: 1px solid #4098e1;
      background-color: rgba(255, 255, 255, 0.13);
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
  }
  i.exchange-icon {
    position: absolute;
    font-size: 20px;
    color: #fff;
    right: -35px;
    transform: rotate(90deg);
    cursor: pointer;
  }
}
</style>
