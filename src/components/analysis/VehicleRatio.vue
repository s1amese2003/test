<template>
  <div class="ratio-container">
    <h3>今日车辆安全状态分布</h3>
    <div class="chart-container">
      <div id="vehicleRatioChart" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

let chart = null
const chartData = ref([
  { value: 85, name: '正常车辆' },
  { value: 15, name: '危险车辆' }
])

onMounted(() => {
  const chartDom = document.getElementById('vehicleRatioChart')
  chart = echarts.init(chartDom)
  
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: { color: '#fff' }
    },
    series: [{
      name: '车辆状态',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{b}\n{d}%',
        color: '#fff'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      data: chartData.value,
      color: ['#67C23A', '#F56C6C']
    }]
  }

  chart.setOption(option)
  
  // 每隔30秒更新数据
  const timer = setInterval(() => {
    const total = Math.floor(Math.random() * 50) + 100
    const dangerous = Math.floor(Math.random() * 20)
    chartData.value = [
      { value: total - dangerous, name: '正常车辆' },
      { value: dangerous, name: '危险车辆' }
    ]
    chart.setOption({
      series: [{ data: chartData.value }]
    })
  }, 30000)

  return () => clearInterval(timer)
})

onUnmounted(() => {
  if (chart) {
    chart.dispose()
  }
})
</script>

<style scoped>
.ratio-container {
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
