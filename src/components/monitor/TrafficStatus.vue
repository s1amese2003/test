<template>
  <div class="traffic-status">
    <h3>路段拥堵情况</h3>
    <el-scrollbar height="calc(100% - 40px)">
      <div v-for="(road, index) in roadStatus" :key="index" class="road-item">
        <div class="road-info">
          <span class="road-name">{{ road.name }}</span>
          <el-tag :type="getStatusType(road.status)">
            {{ road.status }}
          </el-tag>
        </div>
        <el-progress 
          :percentage="road.congestion" 
          :color="getColorByStatus(road.congestion)"
          :show-text="false"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const roadStatus = ref([
  { name: '机场北路', status: '通畅', congestion: 20 },
  { name: '停车场入口', status: '较拥堵', congestion: 65 },
  { name: '航站楼前', status: '拥堵', congestion: 85 },
  { name: '机场高速', status: '通畅', congestion: 30 }
])

const getStatusType = (status) => {
  switch (status) {
    case '通畅': return 'success'
    case '较拥堵': return 'warning'
    case '拥堵': return 'danger'
    default: return 'info'
  }
}

const getColorByStatus = (congestion) => {
  if (congestion < 30) return '#67C23A'
  if (congestion < 70) return '#E6A23C'
  return '#F56C6C'
}
</script>

<style scoped>
.traffic-status {
  height: 100%;
  background: #e7000000;
  border-radius: 8px;
  padding: 15px;
  position: relative;
}

.traffic-status h3 {
  font-size: 18px;
  color: #fff;
  margin: -5px 0 10px 0;
  font-weight: bold;
}

/* 隐藏滚动条 */
:deep(.el-scrollbar__bar.is-vertical) {
  opacity: 0 !important;
}

:deep(.el-scrollbar__wrap) {
  scrollbar-width: none; /* Firefox */
}

:deep(.el-scrollbar__wrap::-webkit-scrollbar) {
  display: none; /* Chrome, Safari, Edge */
}

.road-item {
  padding: 0 10px;
  margin-bottom: 15px;
}

.road-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.road-name {
  color: #fff;
}

/* 修改进度条样式 */
:deep(.el-progress-bar__outer) {
  height: 8px !important;
  border-radius: 4px;
}

:deep(.el-progress-bar__inner) {
  border-radius: 4px;
}

:deep(.el-progress) {
  width: 100%;
  margin-top: 5px;
}
</style>
