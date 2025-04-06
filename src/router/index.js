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

// 导航守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/vehicle')
  } else {
    next()
  }
})

export default router
