import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import loginModule from './login/login'
// import systemModule from './main/system/system'
// import dashboardModule from './main/analysis/dashboard'
// import listModule from './main/story/list'

// import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Kylin',
      age: 21,
      entireRole: [],
      entireDepartment: [],
      entireMenu: [],
      entireCategory: []
    }
  },
  getters: {},
  mutations: {
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    },
    changeEntireCategory(state, list) {
      state.entireCategory = list
    }
  },
  actions: {

  },
  modules: {
    loginModule,
    // systemModule,
    // dashboardModule,
    // listModule
  }
})

// 对store中的数据进行初始化
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

// 为state在Vue+TS中更好用
export function useStore(): Store<IStoreType> {
  // 依然是调用vuex的useStore
  return useVuexStore()
}

export default store
