import { createRouter, createWebHistory } from 'vue-router'
import VehicleStatus from '../views/VehicleStatus.vue'
import VideoMonitor from '../views/VideoMonitor.vue'
import DataAnalysis from '../views/DataAnalysis.vue'
import VehicleStatistics from '../views/VehicleStatistics.vue'  // 直接导入组件

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/vehicle'
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: VehicleStatus
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: VideoMonitor
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: DataAnalysis
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: VehicleStatistics  // 改为直接使用组件而不是异步加载
    }
  ]
})

export default router
