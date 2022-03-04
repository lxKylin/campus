import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' //表示导入的是个类型

import localCache from '@/utils/cache'
// import { firstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/pages/main/main.vue')
    // children: [] -> 根据useMenus来决定
  },
  // {
  //   path: '/campus',
  //   name: 'campus',
  //   component: () => import('@/pages/main/overview/overview.vue')
  //   // children: [] -> 根据useMenus来决定
  // },
  // {
  //   path: '/work',
  //   name: 'work',
  //   component: () => import('@/pages/main/work/work.vue')
  //   // children: [] -> 根据useMenus来决定
  // },
  // {
  //   path: '/library',
  //   name: 'library',
  //   component: () => import('@/pages/main/library/library.vue')
  //   // children: [] -> 根据useMenus来决定
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/pages/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

// router.beforeEach((to) => {
//   // 页面跳转之前 不是登录页面才判断是否登录
//   if (to.path !== '/login') {
//     const token = localCache.getCache('token')
//     if (!token) {
//       return '/login'
//     }

//     // 获取所有路由
//     // console.log(router.getRoutes())
//     // 即将要跳转到的route对象
//     // console.log(to)

//     if (to.path === '/main') {
//       // main/analysis/overview
//       return firstMenu.url
//     }
//   }
// })

export default router

