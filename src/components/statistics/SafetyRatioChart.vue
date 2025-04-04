<template>
  <div class="chart-wrapper">
    <h3>今日车辆安全状态占比</h3>
    <div class="chart-container" ref="chartRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chart = null

onMounted(() => {
  chart = echarts.init(chartRef.value)
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      textStyle: { color: '#fff' }
    },
    series: [
      {
        name: '安全状态',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        label: {
          show: true,
          formatter: '{b}\n{d}%',
          color: '#fff'
        },
        data: [
          { value: 85, name: '正常车辆', itemStyle: { color: '#67C23A' } },
          { value: 15, name: '危险车辆', itemStyle: { color: '#F56C6C' } }
        ]
      }
    ]
  }
  chart.setOption(option)
  
  window.addEventListener('resize', () => chart?.resize())
})

onUnmounted(() => {
  chart?.dispose()
})
</script>

<style scoped>
.chart-wrapper {
  height: 100%;
  padding: 20px;
}

h3 {
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}

.chart-container {
  height: calc(100% - 60px);
  width: 100%;
}
</style>
