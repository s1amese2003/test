<template>
  <div class="alert-container">
    <h3>实时违规警告</h3>
    <div class="alert-content" v-if="currentAlert">
      <el-alert
        :title="currentAlert.type"
        :description="getAlertDescription(currentAlert)"
        :type="getAlertType(currentAlert.type)"
        show-icon
        :closable="false"
      />
      <div class="alert-time">
        {{ currentAlert.time }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentAlert = ref({
  type: '违停',
  plateNumber: '湘A12345',
  location: '机场北路口',
  time: new Date().toLocaleTimeString()
})

const getAlertDescription = (alert) => {
  return `车牌号：${alert.plateNumber}\n地点：${alert.location}`
}

const getAlertType = (type) => {
  switch (type) {
    case '违停': return 'warning'
    case '久停': return 'info'
    case '超速': return 'error'
    case '危险车辆': return 'error'
    default: return 'info'
  }
}

// 模拟实时更新
onMounted(() => {
  setInterval(() => {
    // 这里可以添加实时数据更新逻辑
  }, 5000)
})
</script>

<style scoped>
.alert-container {
  height: 50%;
  background: #2a2a2a;
  border-radius: 8px;
  padding: 15px;
  color: #fff;
}

.alert-content {
  margin-top: 15px;
}

.alert-time {
  margin-top: 10px;
  text-align: right;
  color: #909399;
  font-size: 0.9em;
}
</style>
