<template>
  <el-container v-if="showHeader">
    <el-header>
      <header class="header">
        <div class="header-title">
          <h1>机场车辆监控系统</h1>
        </div>
        <div class="nav-buttons-center">
          <div class="nav-button" :class="{ active: $route.path === '/monitor' }" @click="$router.push('/monitor')">
            <span class="button-text">监控中心</span>
          </div>
          <div class="nav-button" :class="{ active: $route.path === '/vehicle' }" @click="$router.push('/vehicle')">
            <span class="button-text">车辆状况</span>
          </div>
          <div class="nav-button" :class="{ active: $route.path === '/analysis' }" @click="$router.push('/analysis')">
            <span class="button-text">数据分析</span>
          </div>

        </div>
        <div class="time-weather-info">
          <div class="time">{{ currentTime }}</div>
          <div class="date">{{ currentDate }}</div>
        </div>
      </header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  <router-view v-else></router-view>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const router = useRouter();
const route = useRoute();

// 时间和日期
const currentTime = ref('00:00:00');
const currentDate = ref('');
let timer = null;

// 更新时间函数
const updateTime = () => {
  const now = new Date();

  // 格式化时间 HH:MM:SS
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  currentTime.value = `${hours}:${minutes}:${seconds}`;

  // 格式化日期 YYYY年MM月DD日 星期X
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = weekdays[now.getDay()];
  currentDate.value = `${year}年${month}月${day}日 星期${weekday}`;
};

// 模拟天气数据
const temperature = ref('25-30℃');
const weatherCondition = ref('多云');

// 判断是否显示头部，同时检查登录状态
const showHeader = computed(() => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return route.path !== '/login' && isLoggedIn;
});

// 组件挂载时启动定时器
onMounted(() => {
  updateTime(); // 立即执行一次
  timer = setInterval(updateTime, 1000); // 每秒更新一次
});

// 组件卸载前清除定时器
onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
.el-container {
  height: 100vh;
  overflow: hidden;
  background: url('/src/statics/048.jpg');
  background-size: cover;
}

.el-header {
  padding: 0;
  height: 50px;
}

.el-main {
  padding: 0;
  height: calc(100vh - 50px);
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('/src/statics/head.png');
  background-size: 100% 300%;
  background-repeat: no-repeat;
  padding: 0 50px;
}

.header-title {
  color: white;
  margin-right: 160px;
  /* 减小右边距，使导航按钮整体向左移动 */
}

.header-title h1 {
  font-size: 30px;
  margin: 0;
  /* font-weight: bold; */
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-family: 'wendaojisuhei', sans-serif;
}

@font-face {
  font-family: 'wendaojisuhei';
  src: url('/fonts/wendaojisuhei.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.nav-buttons-center {
  display: flex;
  gap: 20px;
  margin: 0;
  /* 移除自动边距 */
  margin-right: auto;
  /* 添加右侧自动边距，使按钮组靠左 */
  justify-content: flex-start;
  /* 改为左对齐 */
}

.nav-button {
  min-width: 100px;
  height: 40px;
  color: whitesmoke;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  background: rgba(0, 0, 0, 0);
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 149, 255, 0.2);
}

.nav-button.active {
  background: rgba(0, 149, 255, 0.64);
  box-shadow: 0 0 30px rgba(0, 149, 255, 0.627);
}

.nav-button:hover {
  transform: scale(1.05);
  background: rgba(0, 149, 255, 0.2);
}

.button-text {
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.time-weather-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #00ffcc;
  font-family: 'Digital', sans-serif;
  margin-left: auto;
}

.time {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
}

.date {
  font-size: 12px;
  color: #ffffff;
  margin-top: 2px;
}
</style>
