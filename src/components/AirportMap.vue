<template>
  <div class="map-container">
    <baidu-map class="map" :center="mapCenter" :zoom="zoom">
      <bm-marker v-for="marker in markers" 
                 :key="marker.id"
                 :position="marker.position">
        <bm-label :content="marker.type" :offset="{ width: 30, height: -10 }"/>
        <bm-icon :imageUrl="getMarkerIcon(marker.type)" :size="{ width: 30, height: 30 }"/>
      </bm-marker>
    </baidu-map>
    <div class="map-controls">
      <el-button @click="switchToAirport">机场内部</el-button>
      <el-button @click="switchToSurroundings">周边路口</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mapCenter = ref({ lng: 113.226512, lat: 28.192929 }) // 黄花机场坐标
const zoom = ref(15)

// 模拟车辆位置数据
const markers = ref([
  {
    id: 1,
    position: { lng: 113.226512, lat: 28.192929 },
    type: '危险车辆-湘D34567'
  },
  {
    id: 2,
    position: { lng: 113.228512, lat: 28.193929 },
    type: '安保车-01'
  },
  {
    id: 3,
    position: { lng: 113.225512, lat: 28.191929 },
    type: '机场巴士-01'
  },
  {
    id: 4,
    position: { lng: 113.227512, lat: 28.194929 },
    type: '安保车-02'
  },
  {
    id: 5,
    position: { lng: 113.224512, lat: 28.195929 },
    type: '机场巴士-02'
  }
])

// 根据车辆类型返回对应的图标URL
const getMarkerIcon = (type) => {
  if (type.includes('危险车辆')) {
    return '/icons/danger.png'
  } else if (type.includes('安保车')) {
    return '/icons/security.png'
  } else if (type.includes('机场巴士')) {
    return '/icons/bus.png'
  }
  return '/icons/default.png'
}

const switchToAirport = () => {
  zoom.value = 17
  mapCenter.value = { lng: 113.226512, lat: 28.192929 }
}

const switchToSurroundings = () => {
  zoom.value = 14
  mapCenter.value = { lng: 113.226512, lat: 28.192929 }
}
</script>

<style scoped>
.map-container {
  height: 100%;
  position: relative;
  width: 100%;
}

.map {
  width: 100%;
  height: 100%;
}

.map-controls {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

:deep(.BMap_mask) {
  background: transparent !important;
}

:deep(.anchorBL) {
  display: none !important;
}
</style>
