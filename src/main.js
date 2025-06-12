import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AMapLoader from '@amap/amap-jsapi-loader'
import datav from '@kjgl77/datav-vue3'
import '@kjgl77/datav-vue3/dist/style.css'

const app = createApp(App)

// 检查用户是否已登录，如果未登录则重定向到登录页
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
if (!isLoggedIn && window.location.pathname !== '/login') {
  router.push('/login')
}

// 全局配置高德地图
window._AMapSecurityConfig = {
  securityJsCode: 'ddb5ad4f9f07c5b2657dd8299964b56a' // 请替换为您的安全密钥
}

app.use(router)
app.use(ElementPlus)
app.use(datav)

// 将高德地图加载器挂载到全局，方便组件中使用
app.config.globalProperties.$AMapLoader = AMapLoader

app.mount('#app')
