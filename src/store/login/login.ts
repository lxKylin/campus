import { Module } from 'vuex'

import { accountLoginRequest, requestUserInfoById } from '@/service/login/login'

import router from '@/router'

import localCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menus'

import { IAccount } from '@/service/login/type'

import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
      // permissions: []
    }
  },
  getters: {},
  mutations: {
    // 保存token
    changeToken(state, token: string) {
      state.token = token
    },
    // 保存userInfo
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // { commit } 是从content中解构出来的
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      // accountLoginRequest(payload)
      // console.log(loginResult)
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      const { token } = loginResult
      commit('changeToken', token)
      // 本地缓存token
      localCache.setCache('token', token)

      // 发送初始化的请求(完整的role/department)
      // 调用根里面的getInitialDataAction
      // dispatch('getInitialDataAction', null, { root: true })

      // 4.跳转到首页
      router.push('/main')

      // 2.请求用户信息
      // const userInfoResult = await requestUserInfoById(id)
      // // console.log(userInfoResult)
      // const userInfo = userInfoResult.data
      // commit('changeUserInfo', userInfo)
      // localCache.setCache('changeUserInfo', userInfo)

      // 3.请求用户菜单
      // const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      // const userMenus = userMenusResult.data
      // console.log(userMenus)
      // commit('changeUserMenus', userMenus)
      // localCache.setCache('changeUserMenus', userMenus)

      // // 4.跳转到首页
      // router.push('/main')
    },
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction')
    // }

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) commit('changeToken', token)
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) commit('changeUserInfo', userInfo)
    }

    // 用户刷新页面，vuex中的数据会消失，这里重新加载从本地获取数据
    // loadLocalLogin({ commit, dispatch }) {
    //   // 从本地获取token
    //   const token = localCache.getCache('token')
    //   if (token) {
    //     commit('changeToken', token)

    //     // 发送初始化的请求(完整的role/department)
    //     // 调用根里面的getInitialDataAction
    //     dispatch('getInitialDataAction', null, { root: true })
    //   }
    //   // 从本地获取userInfo
    //   const userInfo = localCache.getCache('userInfo')
    //   if (userInfo) {
    //     commit('changeUserInfo', userInfo)
    //   }
    //   // 从本地获取userMenus
    //   const userMenus = localCache.getCache('userMenus')
    //   if (userMenus) {
    //     commit('changeUserMenus', userMenus)
    //   }
    // }
  }
}

export default loginModule
