<template>
  <div class="history-container">
    <div class="search-section">
      <h3>历史记录查询</h3>
      <el-form :model="searchForm" size="small">
        <el-form-item>
          <el-date-picker
            v-model="searchForm.date"
            type="date"
            placeholder="选择日期"
          />
        </el-form-item>
        <el-form-item>
          <el-select v-model="searchForm.camera" placeholder="选择摄像头">
            <el-option
              v-for="camera in cameras"
              :key="camera.value"
              :label="camera.label"
              :value="camera.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    
    <div class="upload-section">
      <h3>视频识别</h3>
      <el-upload
        class="upload-demo"
        action="/api/upload"
        :on-success="handleUploadSuccess"
        :on-error="handleUploadError"
      >
        <el-button type="primary">上传视频/图片</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchForm = ref({
  date: '',
  camera: ''
})

const cameras = ref([
  { value: 'cam1', label: '摄像头-01' },
  { value: 'cam2', label: '摄像头-02' }
])

const handleUploadSuccess = (response) => {
  ElMessage.success('上传成功')
}

const handleUploadError = () => {
  ElMessage.error('上传失败')
}
</script>

<style scoped>
.history-container {
  height: 100%;
  background: #2a2a2a;
  border-radius: 8px;
  padding: 15px;
  color: #fff;
}

.search-section, .upload-section {
  margin-bottom: 20px;
}

.upload-section {
  border-top: 1px solid #404040;
  padding-top: 15px;
}
</style>
