<template>
  <div class="violation-container">
    <el-scrollbar height="100%">
      <div class="violation-list">
        <div v-for="(item, index) in violationData" :key="index" class="violation-item">
          <div class="violation-header">
            <span class="plate-number">{{ item.plateNumber }}</span>
            <span class="violation-type">{{ item.type }}</span>
          </div>
          <div class="violation-content">
            <p>车辆类型: {{ item.vehicleType }}</p>
            <p>位置: {{ item.location }}</p>
            <p>时间: {{ item.time }}</p>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const violationData = ref([
  {
    plateNumber: '湘A12345',
    type: '违停',
    vehicleType: '小型轿车',
    location: '机场北路口',
    time: '2024-02-28 10:30'
  },
  {
    plateNumber: '湘B98765',
    type: '久停',
    vehicleType: '中型货车',
    location: '机场东停车场',
    time: '2024-02-28 10:35'
  },
  {
    plateNumber: '湘C45678',
    type: '超速',
    vehicleType: '小型轿车',
    location: '机场高速入口',
    time: '2024-02-28 10:40'
  },
  {
    plateNumber: '湘D34567',
    type: '危险车辆',
    vehicleType: '危险品运输车',
    location: '机场西路口',
    time: '2024-02-28 10:45'
  },
  {
    plateNumber: '湘E23456',
    type: '违停',
    vehicleType: '出租车',
    location: '航站楼停车区',
    time: '2024-02-28 10:50'
  }
])

// 自动滚动功能
onMounted(() => {
  setInterval(() => {
    // 模拟数据更新
  }, 3000)
})
</script>

<style scoped>
.violation-container {
  height: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
}

.violation-item {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
}

.violation-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.plate-number {
  font-weight: bold;
  color: #409EFF;
}

.violation-type {
  color: #F56C6C;
}
</style>
