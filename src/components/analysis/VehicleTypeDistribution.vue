<template>
  <div class="distribution-container">
    <h3>车辆类型分布</h3>
    <div class="chart-container">
      <div id="typeDistributionChart" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

let chart = null
const vehicleTypes = ['小型车', '中型车', '大型车', '特种车']
const chartData = ref([
  { value: 120, name: '小型车' },
  { value: 80, name: '中型车' },
  { value: 40, name: '大型车' },
  { value: 20, name: '特种车' }
])

onMounted(() => {
  const chartDom = document.getElementById('typeDistributionChart')
  chart = echarts.init(chartDom)
  
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
      data: vehicleTypes,
      axisLabel: { color: '#fff' }
    }],
    yAxis: [{
      type: 'value',
      axisLabel: { color: '#fff' }
    }],
    series: [
      {
        name: '数量占比',
        type: 'pie',
        radius: ['20%', '30%'],
        center: ['75%', '30%'],
        label: {
          formatter: '{b}: {d}%',
          color: '#fff'
        },
        data: chartData.value
      },
      {
        name: '车辆数量',
        type: 'bar',
        barWidth: '40%',
        label: {
          show: true,
          position: 'top',
          color: '#fff'
        },
        data: chartData.value.map(item => item.value)
      }
    ]
  }

  chart.setOption(option)
  
  // 每隔30秒更新数据
  const timer = setInterval(() => {
    chartData.value = vehicleTypes.map(type => ({
      value: Math.floor(Math.random() * 100) + 20,
      name: type
    }))
    chart.setOption({
      series: [
        { data: chartData.value },
        { data: chartData.value.map(item => item.value) }
      ]
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
