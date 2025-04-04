<template>
  <div class="chart-wrapper">
    <h3>车辆类型分布统计</h3>
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
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      textStyle: { color: '#fff' }
    },
    series: [
      {
        name: '车辆类型',
        type: 'pie',
        radius: '50%',
        center: ['50%', '45%'],
        label: {
          show: true,
          formatter: '{b}\n{c}辆\n{d}%',
          color: '#fff'
        },
        data: [
          { value: 120, name: '小型车' },
          { value: 80, name: '中型车' },
          { value: 40, name: '大型车' },
          { value: 20, name: '特种车' }
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
