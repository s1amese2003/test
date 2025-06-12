import { createRouter, createWebHistory } from 'vue-router'
import VehicleStatus from '../views/VehicleStatus.vue'
import VideoMonitor from '../views/VideoMonitor.vue'
import DataAnalysis from '../views/DataAnalysis.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: VehicleStatus,
      meta: { requiresAuth: true }
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: VideoMonitor,
      meta: { requiresAuth: true }
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: DataAnalysis,
      meta: { requiresAuth: true }
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  
  // 如果用户访问的不是登录页且未登录，则重定向到登录页
  if (to.path !== '/login' && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
