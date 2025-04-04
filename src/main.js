import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import BaiduMap from 'vue-baidu-map-3x'
import datav from '@kjgl77/datav-vue3'
import '@kjgl77/datav-vue3/dist/style.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(BaiduMap, {
  ak: 'Wp4eJvR3ozdOgHONYFG32MzK6yPyS93u'
})
app.use(datav)

app.mount('#app')
