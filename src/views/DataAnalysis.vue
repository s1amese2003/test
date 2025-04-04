<template>
  <div class="analysis-container">
    <el-row class="analysis-content" :gutter="10">
      <el-col :span="6">
        <div class="panel vehicle-ratio">
          <dv-border-box-1>
            <VehicleRatio />
          </dv-border-box-1>
        </div>
        <div class="panel vehicle-type">
          <dv-border-box-1>
            <VehicleTypeDistribution />
          </dv-border-box-1>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="panel center-panel">
          <dv-border-box-1>
            <div class="center-content">
              <h3>待定区域</h3>
              <div class="placeholder-content">
                <el-empty description="待添加内容"></el-empty>
              </div>
            </div>
          </dv-border-box-1>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="panel time-analysis">
          <dv-border-box-1>
            <TimeSegmentAnalysis />
          </dv-border-box-1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import VehicleRatio from '../components/analysis/VehicleRatio.vue'
import VehicleTypeDistribution from '../components/analysis/VehicleTypeDistribution.vue'
import TimeSegmentAnalysis from '../components/analysis/TimeSegmentAnalysis.vue'
</script>

<style scoped>
.analysis-container {
  width: 100%;
  height: 100%;
  background: #0f1325;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.analysis-content {
  height: 100%;
}

.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.panel {
  background: rgba(6, 30, 93, 0.5);
  border-radius: 4px;
  overflow: hidden;
}

.vehicle-ratio, .vehicle-type {
  height: calc(50% - 5px);
}

.center-panel {
  height: 100%;
}

.time-analysis {
  height: 100%;
}

.center-content {
  height: 100%;
  padding: 20px;
  color: #fff;
}

.placeholder-content {
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
}

:deep(.dv-border-box-1) {
  width: 100%;
  height: 100%;
  padding: 10px;
}

:deep(.el-empty) {
  --el-empty-description-color: #fff;
}
</style>
