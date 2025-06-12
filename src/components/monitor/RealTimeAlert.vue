<template>
  <div class="alert-container">
    <h3>实时违规警告</h3>
    <div class="alert-content" v-if="currentAlert">
      <transition name="alert-fade" mode="out-in">
        <div class="alert-item" :key="currentAlert.time">
          <div class="alert-header">
            <span class="alert-type">{{ currentAlert.type }}</span>
          </div>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">发生时间</span>
              <span class="info-value">{{ currentAlert.time }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">违规地点</span>
              <span class="info-value">{{ currentAlert.location }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">车辆类型</span>
              <span class="info-value">{{ currentAlert.vehicleType }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">车牌号码</span>
              <span class="info-value">{{ currentAlert.plateNumber }}</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 存储警告信息
const alertList = ref([])

// 当前显示的警告索引
const currentIndex = ref(0)

// 计算当前显示的警告信息
const currentAlert = computed(() => {
  return alertList.value.length > 0 ? alertList.value[currentIndex.value] : null
})

let updateTimer = null

// 模拟实时更新
onMounted(() => {
  // 每5秒模拟接收新的警告信息
  updateTimer = setInterval(() => {
    const newAlert = {
      type: [ '闯红灯', '逆行'][Math.floor(Math.random() * 4)],
      plateNumber: `湘${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 90000) + 10000}`,
      location: ['机场大道', '机场高速入口', '航站楼前', '停车场入口', '货运区'][Math.floor(Math.random() * 5)],
      vehicleType: ['小型轿车', '大型货车', '公交车'][Math.floor(Math.random() * 4)],
      time: new Date().toLocaleTimeString('zh-CN', {hour12: false})
    }
    
    // 清空之前的警告信息，只保留最新的一条
    alertList.value = [newAlert]
  }, 10000)
})

// 组件卸载时清除定时器
onUnmounted(() => {
  if (updateTimer) {
    clearInterval(updateTimer)
  }
})
</script>

<style scoped>
.alert-container {
  height: 100%;
  background: #2a2a2a00;
  border-radius: 8px;
  padding: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 5px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(64, 158, 255, 0.5);
}

.alert-content {
  flex: 1;
  display: flex;
  /* align-items: center; */
}

.alert-item {
  width: 100%;
  /* padding: 0 0px; */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0);
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.alert-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.alert-type {
  font-weight: bold;
  font-size: 20px;
  color: #ff5e00;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(64, 158, 255, 0.3);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 15px;
  padding: 0 10px;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0);
  padding: 5px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.02);
}

.info-label {
  font-size: 16px;
  color: #909399;
  margin-bottom: 5px;
  font-family: 'Microsoft YaHei', sans-serif;
  font-weight: 500;
}

.info-value {
  font-size: 18px;
  color: #e6e6e6;
  font-family: 'Microsoft YaHei', sans-serif;
  font-weight: bold;
}

/* 添加过渡效果 */
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: all 0.5s ease;
}

.alert-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.alert-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
