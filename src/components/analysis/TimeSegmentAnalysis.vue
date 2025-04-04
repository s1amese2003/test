<template>
  <div class="time-segment-container">
    <h3>各时段车辆分布</h3>
    <div class="chart-container">
      <div id="timeSegmentChart" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

let chart = null

onMounted(() => {
  const chartDom = document.getElementById('timeSegmentChart')
  chart = echarts.init(chartDom)
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['小型车', '中型车', '大型车', '特种车'],
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['0-4', '4-8', '8-12', '12-16', '16-20', '20-24'],
        axisLabel: { color: '#fff' }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: { color: '#fff' }
      }
    ],
    series: [
      {
        name: '小型车',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230]
      },
      {
        name: '中型车',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330]
      },
      {
        name: '大型车',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330]
      },
      {
        name: '特种车',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330]
      }
    ]
  }

  chart.setOption(option)
})

onUnmounted(() => {
  if (chart) {
    chart.dispose()
  }
})
</script>

<style scoped>
.time-segment-container {
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
