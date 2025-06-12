<template>
  <div class="distribution-container">
    <h3>时段车辆类型分布</h3>
    <div class="chart-container">
      <div id="typeDistributionChart" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

let chart = null

onMounted(() => {
  const chartDom = document.getElementById('typeDistributionChart')
  chart = echarts.init(chartDom)
  
  const timeSlots = ['0-4时', '4-8时', '8-12时', '12-16时', '16-20时', '20-24时']
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      top: 'bottom',
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: timeSlots,
      axisLabel: { 
        color: '#fff',
        rotate: 0
      }
    }],
    yAxis: [{
      type: 'value',
      name: '车辆数量',
      axisLabel: { color: '#fff' },
      nameTextStyle: { color: '#fff' }
    }],
    series: [
      {
        name: '小型轿车',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        itemStyle: { color: '#4992ff' },
        data: [45, 82, 130, 140]
      },
      {
        name: '公交车',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        itemStyle: { color: '#7cffb2' },
        data: [28, 45, 75, 85]
      },
      {
        name: '面包车',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        itemStyle: { color: '#fddd60' },
        data: [15, 25, 45, 55]
      },
      {
        name: '危险车辆',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        itemStyle: { color: '#ff6e76' },
        data: [8, 12, 18, 22]
      }
    ]
  }

  chart.setOption(option)
  
  // 响应式调整
  window.addEventListener('resize', () => {
    chart?.resize()
  })
})

onUnmounted(() => {
  chart?.dispose()
})
</script>

<style scoped>
.distribution-container {
  height: 100%;
  padding: 15px;
  color: #fff;
}

.chart-container {
  height: calc(100% - 40px);
  width: 100%;
}

h3 {
  margin-bottom: 15px;
  text-align: center;
}
</style>