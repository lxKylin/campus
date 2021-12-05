import { createApp } from 'vue'

// css初始化
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'

import dataV from '@jiaminghi/data-view'



const app = createApp(App)

app.use(dataV)
// 注册vuex
app.use(store)

app.use(router)

app.mount('#app')
