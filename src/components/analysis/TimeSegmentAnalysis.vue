<template>
  <div class="time-segment-container">
    <h3>时段车辆调度分布</h3>
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
      data: ['安保车辆', '机场巴士', '航空牵引车'],  // 添加新的车辆类型
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
        data: ['0-4时', '4-8时', '8-12时', '12-16时', '16-20时', '20-24时'],
        axisLabel: { color: '#fff' }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '车辆数量',
        axisLabel: { color: '#fff' },
        nameTextStyle: { color: '#fff' }
      }
    ],
    series: [
      {
        name: '安保车辆',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        showSymbol: true,
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#4992ff'
        },
        itemStyle: {
          color: '#4992ff'
        },
        data: [0, 6, 8, 8]
      },
      {
        name: '机场巴士',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        showSymbol: true,
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#7cffb2'
        },
        itemStyle: {
          color: '#7cffb2'
        },
        data: [6, 8, 13, 15]
      },
      {
        name: '航空牵引车',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        showSymbol: true,
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#ff9649'  
        },
        itemStyle: {
          color: '#ff9649'
        },
        data: [3, 7, 9, 12]  
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
