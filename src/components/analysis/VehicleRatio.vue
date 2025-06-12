<template>
  <div class="ratio-container">
    <h3>车辆安全状态分布</h3>
    <div class="chart-container">
      <div id="vehicleRatioChart" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
import { dangerousRatio, updateDangerousRatio } from '../../store/vehicleState'

let chart = null
const chartData = ref([
  { value: 92.98, name: '正常车辆' },
  { value: dangerousRatio.value, name: '危险车辆' }
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
  
  // 每隔1.5秒更新数据
  const timer = setInterval(() => {
    // 在原始数据基础上小幅波动
    const normalRatio = 92.98 + (Math.random() * 2 - 1); // 在 91.98% ~ 93.98% 之间波动
    const newDangerousRatio = 7.02 + (Math.random() * 2 - 1); // 在 6.02% ~ 8.02% 之间波动
    
    // 确保两个比例之和为 100%
    const total = normalRatio + newDangerousRatio;
    const adjustedNormal = (normalRatio / total) * 100;
    const adjustedDangerous = (newDangerousRatio / total) * 100;
    
    // 更新共享状态
    updateDangerousRatio(parseFloat(adjustedDangerous.toFixed(2)));
    
    chartData.value = [
      { value: adjustedNormal.toFixed(2), name: '正常车辆' },
      { value: adjustedDangerous.toFixed(2), name: '危险车辆' }
    ]
    
    chart.setOption({
      series: [{ data: chartData.value }]
    })
  }, 1500)

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
