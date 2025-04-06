<template>
  <div class="analysis-container">
    <el-row class="analysis-content">
      <!-- 左侧区域 -->
      <el-col :span="7">
        <div class="panel">
          <dv-border-box-10>
            <VehicleRatio />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <VehicleTypeDistribution />
          </dv-border-box-10>
        </div>
      </el-col>

      <!-- 中间区域 -->
      <el-col :span="10" class="center-column">
        <div class="panel center-panel">
          <dv-border-box-10>
            <div class="center-content">
              <VehicleTypePie />
            </div>
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <TimeSegmentAnalysis />
          </dv-border-box-10>
        </div>
      </el-col>

      <!-- 右侧区域 -->
      <el-col :span="7">
        <div class="panel">
          <dv-border-box-10>
            <Approvals />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <InspectionStatus />
          </dv-border-box-10>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import VehicleRatio from '../components/analysis/VehicleRatio.vue'
import VehicleTypeDistribution from '../components/analysis/VehicleTypeDistribution.vue'
import VehicleTypePie from '../components/analysis/VehicleTypePie.vue'
import TimeSegmentAnalysis from '../components/analysis/TimeSegmentAnalysis.vue'
import Approvals from '../components/analysis/Approvals.vue'
import InspectionStatus from '../components/analysis/InspectionStatus.vue'
</script>

<style scoped>
.analysis-container {
  width: 100%;
  height: 100%;
  background: #0f132500;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.analysis-content {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.el-col:first-child .panel:first-child {
  flex: 1;
  height: auto;
}

.el-col:first-child .panel:last-child {
  flex: 1;
  height: auto;
}

.el-col:nth-child(3) .panel {
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

.panel:hover :deep(.dv-border-box-10) {
  filter: brightness(1.2);
}

.center-column {
  padding: 0 !important;
}

.center-panel {
  height: 100% !important;
}

:deep(.dv-border-box-10) {
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease; /* 添加过渡效果 */
  backdrop-filter: blur(5px); /* 添加模糊效果 */
  -webkit-backdrop-filter: blur(5px); /* Safari 兼容 */
}

/* 调整模糊效果的强度 */
:deep(.dv-border-box-10 .border-box-content) {
  background: rgba(6, 30, 93, 0.2) !important; /* 半透明背景 */
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
  color: #fff;
  margin-bottom: 10px;
  font-size: 1.2em;
}

:deep(.el-empty) {
  --el-empty-description-color: #fff;
}
</style>
