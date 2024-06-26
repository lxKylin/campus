import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' //表示导入的是个类型

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/pages/login/login.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

