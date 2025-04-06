<template>
  <div class="alert-container">
    <h3>实时违规警告</h3>
    <div class="alert-content" v-if="currentAlert">
      <div class="alert-item">
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentAlert = ref({
  type: '违停',
  plateNumber: '湘A12345',
  location: '机场北路口',
  vehicleType: '小型轿车',
  time: new Date().toLocaleTimeString()
})

// 删除 getAlertClass 和 getAlertSeverity 函数

// 模拟实时更新
onMounted(() => {
  setInterval(() => {
    // 这里可以添加实时数据更新逻辑
  }, 5000)
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

</style>
