<template>
  <div class="vehicle-container">
    <el-row class="vehicle-content">
      <!-- 地图区域 - 作为底层 -->
      <el-col :span="24" class="map-column">
        <dv-border-box-10 title="机场地图">
          <AirportMap />
        </dv-border-box-10>
      </el-col>
      <!-- 浮动面板容器 -->
      <div class="floating-panels">
        <!-- 左侧浮动面板 -->
        <div class="floating-panel left-panel">
          <div class="panel panel-with-bg" data-panel="traffic">
            <TrafficViolation />
          </div>
          
          <div class="panel panel-with-bg" data-panel="security">
            <SecurityStatus />
          </div>
        </div>
        
        <!-- 右侧浮动面板 -->
        <div class="floating-panel right-panel">
          <div class="panel panel-with-bg" data-panel="bus">
            <BusStatus />
          </div>
          <div class="panel panel-with-bg" data-panel="vehicle">
            <Motorcar />
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script setup>
import TrafficViolation from '../components/status/TrafficViolation.vue'
import SecurityStatus from '../components/status/SecurityStatus.vue'
import AirportMap from '../components/status/AirportMap.vue'
import BusStatus from '../components/status/BusStatus.vue'
import Motorcar from '../components/status/Motorcar.vue'
</script>

<style scoped>
.vehicle-container {
  width: 100%;
  height: 100%;
  background: #0f132500;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.vehicle-content {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
}

.map-column {
  padding: 0 !important;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* 浮动面板容器 */
.floating-panels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none; /* 允许点击穿透到地图 */
  display: flex;
  justify-content: space-between;
}

/* 浮动面板共同样式 */
.floating-panel {
  width: 22%;
  height: 100%;
  display: flex;
  gap: 10px; /* 增加纵向间距 */
  flex-direction: column;
  pointer-events: auto; /* 恢复面板的点击事件 */
}

.left-panel {
  align-items: flex-start;
}

.right-panel {
  align-items: flex-end;
}

.panel {
  flex: 1;
  background: rgba(0, 0, 0, 0);
  border-radius: 7px;
  margin: 5px 15px 5px 15px; 
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  width: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* 统一的背景图片样式 */
.panel-with-bg {
  background-image: url('../statics/34-5.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(1.2);
}



/* 修改悬停效果为放大 */
.panel:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 15px #0095ff42;
  z-index: 20;
  
}

/* 添加新的样式类 */
.map-border {
  padding: 0;
}

:deep(.dv-border-box-10) {
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

:deep(.floating-panel .dv-border-box-10 .border-box-content) {
  background: rgba(7, 73, 255, 0);
  padding: 0px !important; /* 基础内边距 */
}

:deep(.map-container) {
  height:100% !important;
  padding: 0;
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
