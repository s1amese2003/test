<template>
  <div class="security-container">
    <div class="status-grid">
      <div v-for="(vehicle, index) in securityVehicles" 
           :key="index" 
           class="status-card"
           :class="{ 'working': vehicle.status === 'working' }">
        <div class="vehicle-info">
          <span class="vehicle-id">{{ vehicle.id }}</span>
          <span class="status-indicator">{{ vehicle.status === 'working' ? '工作中' : '空闲' }}</span>
        </div>
        <div class="vehicle-location">
          <span>{{ vehicle.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const securityVehicles = ref([
  { id: '安保车-01', status: 'working', location: '机场北区' },
  { id: '安保车-02', status: 'idle', location: '停车场' },
  { id: '安保车-03', status: 'working', location: '航站楼' },
  { id: '安保车-04', status: 'idle', location: '值班室' },
  { id: '安保车-05', status: 'working', location: '货运区' },
  { id: '安保车-06', status: 'working', location: '东区巡逻' }
])
</script>

<style scoped>
.security-container {
  height: 100%;
  padding: 10px;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.status-card {
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 255, 0, 0.1);
}

.status-card.working {
  background: rgba(255, 165, 0, 0.1);
}

.vehicle-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vehicle-location {
  margin-top: 5px;
  font-size: 0.8em;
  color: #909399;
}

.status-indicator {
  font-size: 0.9em;
  color: #67C23A;
}

.working .status-indicator {
  color: #E6A23C;
}
</style>
