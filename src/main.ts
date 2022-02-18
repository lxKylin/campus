import { createApp } from 'vue'

// 导入组件及时间格式化
import { globalRegister } from './global'

import BinDatav from 'bin-datav'
import 'bin-datav/lib/styles/index.css'

// css初始化
import 'normalize.css'
import './assets/css/index.less'

import 'element-plus/dist/index.css' // 引入样式

import App from './App.vue'

import router from './router'
import store from './store'

import Particles from 'particles.vue3'

import SocketService from '@/utils/socket_service'
// 对服务端进行websocket的连接
// SocketService.Instance.connect()
// 其他组件可以通过 this.$socket调用
// App.prototype.$socket = SocketService.Instance

const app = createApp(App)

app.use(Particles)
// 1.注册ElementPlus
// globalRegister(app)
// 2.插件形式使用
app.use(globalRegister)

app.use(BinDatav)
// 注册vuex
app.use(store)

app.use(router)

app.mount('#app')
