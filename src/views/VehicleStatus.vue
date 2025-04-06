<template>
  <div class="vehicle-container">
    <el-row class="vehicle-content">
      <!-- 左侧区域 -->
      <el-col :span="6">
        <div class="panel">
          <dv-border-box-10>
            <TrafficViolation />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <SecurityStatus />
          </dv-border-box-10>
        </div>
      </el-col>

      <!-- 中间区域 -->
      <el-col :span="12" class="map-column">
        <div class="panel main-map-panel">
          <dv-border-box-10>
            <AirportMap />
          </dv-border-box-10>
        </div>
      </el-col>

      <!-- 右侧区域 -->
      <el-col :span="6">
        <div class="panel">
          <dv-border-box-10>
            <BusStatus />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <div class="stats-panel">
            </div>
          </dv-border-box-10>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import TrafficViolation from '../components/status/TrafficViolation.vue'
import SecurityStatus from '../components/status/SecurityStatus.vue'
import AirportMap from '../components/status/AirportMap.vue'
import BusStatus from '../components/status/BusStatus.vue'
</script>

<style scoped>
.vehicle-container {
  width: 100%;
  height: 100%;
  background: #0f132500;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.vehicle-content {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 左侧列的面板高度占比 */
.el-col:first-child .panel:first-child {
  flex: 1;
  height: auto;
}

.el-col:first-child .panel:last-child {
  flex: 1;
  height: auto;
}

/* 右侧列的面板高度占比 */
.el-col:nth-child(3) .panel:first-child {
  flex: 1;
  height: auto;
}

.el-col:nth-child(3) .panel:last-child {
  flex: 1;
  height: auto;
}

.panel {
  flex: 1;
  background: rgba(6, 30, 93, 0);
  border-radius: 4px;
  padding: 5px;
  overflow: hidden;
  transition: all 0.3s ease; /* 添加过渡效果 */
  position: relative; /* 为伪元素定位做准备 */
}

/* 修改悬停效果为放大 */
.panel:hover {
  transform: scale(1.02); /* 放大效果 */
  box-shadow: 0 5px 15px rgba(0, 149, 255, 0.2);
  z-index: 1;
}

.map-column {
  padding: 0 !important;
}

.main-map-panel {
  height: 100% !important;
}

:deep(.dv-border-box-10) {
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease; /* 添加过渡效果 */
  backdrop-filter: blur(5px); /* 添加模糊效果 */
  -webkit-backdrop-filter: blur(5px); /* Safari 兼容 */
}

:deep(.dv-border-box-10 .border-box-content) {
  background: rgba(6, 30, 93, 0.2) !important; /* 半透明背景 */
}

:deep(.map-container) {
  height: calc(100% - 40px) !important;
}

h3 {
  color: #fff;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.stats-panel {
  height: 100%;
  color: #fff;
  padding: 10px;
}
</style>
