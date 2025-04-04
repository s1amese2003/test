<template>
  <div class="vehicle-container">
    <el-row class="vehicle-content">
      <!-- 左侧区域 -->
      <el-col :span="6">
        <div class="panel">
          <dv-border-box-1>
            <h3>违章信息</h3>
            <TrafficViolation />
          </dv-border-box-1>
        </div>
        <div class="panel">
          <dv-border-box-1>
            <h3>安保车辆状态</h3>
            <SecurityStatus />
          </dv-border-box-1>
        </div>
      </el-col>

      <!-- 中间区域 -->
      <el-col :span="12" class="map-column">
        <div class="panel main-map-panel">
          <dv-border-box-1>
            <h3>机场地图</h3>
            <AirportMap />
          </dv-border-box-1>
        </div>
      </el-col>

      <!-- 右侧区域 -->
      <el-col :span="6">
        <div class="panel">
          <dv-border-box-1>
            <h3>机场巴士状态</h3>
            <BusStatus />
          </dv-border-box-1>
        </div>
        <div class="panel">
          <dv-border-box-1>
            <div class="stats-panel">
              <h3>车辆统计</h3>
              <!-- 添加统计信息 -->
            </div>
          </dv-border-box-1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import TrafficViolation from '../components/TrafficViolation.vue'
import SecurityStatus from '../components/SecurityStatus.vue'
import AirportMap from '../components/AirportMap.vue'
import BusStatus from '../components/BusStatus.vue'
</script>

<style scoped>
.vehicle-container {
  width: 100%;
  height: 100%;
  background: #0f1325;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.vehicle-content {
  height: 100%;
  gap: 10px;
}

.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.panel {
  flex: 1;
  background: rgba(6, 30, 93, 0.5);
  border-radius: 4px;
  overflow: hidden;
  height: calc(50% - 5px);
}

.map-column {
  padding: 0 !important;
  margin: 0 !important;
}

.main-map-panel {
  height: 100% !important;
  margin: 0 10px;
}

:deep(.dv-border-box-1) {
  padding: 10px;
  width: 100%;
  height: 100%;
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
