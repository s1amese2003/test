<template>
  <div class="bus-container">
    <div class="bus-grid">
      <div v-for="(bus, index) in busData" 
           :key="index" 
           class="bus-card"
           :class="{ 'working': bus.status === 'working' }">
        <div class="bus-info">
          <span class="bus-id">{{ bus.id }}</span>
          <span class="status-badge">{{ bus.status === 'working' ? '运行中' : '空闲' }}</span>
        </div>
        <div class="bus-details" v-if="bus.status === 'working'">
          <p>当前路线: {{ bus.route }}</p>
          <p>下一站: {{ bus.nextStop }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const busData = ref([
  { 
    id: '机场巴士-01',
    status: 'working',
    route: 'A线路',
    nextStop: '航站楼'
  },
  {
    id: '机场巴士-02',
    status: 'idle',
    route: '',
    nextStop: ''
  },
  { 
    id: '机场巴士-03',
    status: 'working',
    route: 'B线路',
    nextStop: '停车场'
  },
  { 
    id: '机场巴士-04',
    status: 'working',
    route: 'C线路',
    nextStop: '货运区'
  },
  {
    id: '机场巴士-05',
    status: 'idle',
    route: '',
    nextStop: ''
  }
])
</script>

<style scoped>
.bus-container {
  height: 100%;
  padding: 10px;
}

.bus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.bus-card {
  padding: 15px;
  border-radius: 4px;
  background: rgba(0, 255, 0, 0.1);
}

.bus-card.working {
  background: rgba(255, 165, 0, 0.1);
}

.bus-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.9em;
  background: rgba(103, 194, 58, 0.2);
}

.working .status-badge {
  background: rgba(230, 162, 60, 0.2);
}

.bus-details {
  font-size: 0.9em;
  color: #666;
}
</style>
