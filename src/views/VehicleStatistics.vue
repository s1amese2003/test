<template>
  <div class="statistics-container">
    <el-row class="statistics-content" :gutter="10">
      <!-- 占比统计 -->
      <el-col :span="12">
        <div class="panel">
          <dv-border-box-1>
            <SafetyRatioChart />
          </dv-border-box-1>
        </div>
      </el-col>
      <!-- 类型统计 -->
      <el-col :span="12">
        <div class="panel">
          <dv-border-box-1>
            <TypeDistributionChart />
          </dv-border-box-1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import SafetyRatioChart from '../components/statistics/SafetyRatioChart.vue'
import TypeDistributionChart from '../components/statistics/TypeDistributionChart.vue'
</script>

<style scoped>
.statistics-container {
  width: 100%;
  height: 100%;
  background: #0f1325;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.statistics-content {
  height: 100%;
}

.panel {
  height: 100%;
  background: rgba(6, 30, 93, 0.5);
  border-radius: 4px;
  overflow: hidden;
}

:deep(.dv-border-box-1) {
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>
