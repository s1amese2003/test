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
  height: 50%;
  background: #2a2a2a;
  border-radius: 8px;
  padding: 15px;
}

.road-item {
  padding: 10px;
  border-bottom: 1px solid #404040;
}

.road-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.road-name {
  color: #fff;
}
</style>
