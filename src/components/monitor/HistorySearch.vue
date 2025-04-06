<template>
  <div class="history-container">
    <div class="content-wrapper">
      <div class="search-section">
        <h3>历史记录查询</h3>
        <el-form :model="searchForm" size="small">
          <el-form-item  style="width: 90%">
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
          <div class="upload-trigger">
            <img src="../../statics/upload.svg" alt="上传" class="upload-icon" />
            <span class="upload-text">上传视频/图片</span>
          </div>
        </el-upload>
      </div>
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
  background: #2a2a2a00;
  border-radius: 8px;
  padding: 15px;
  color: #fff;
}

.history-container h3 {
  font-size: 18px;
  color: #fff;
  margin: -5px 0 10px 0;
  font-weight: bold;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
  height: calc(100% - 30px);
}

.search-section, .upload-section {
  flex: 1;
}

.upload-section {
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

.upload-demo {
  display: flex;
  justify-content: center;
  margin-top: -20px;  /* 向上移动 */
  flex: 1;
}

.upload-trigger {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 15px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0);
  height: 60%;  /* 填充剩余空间 */
  justify-content: center;  /* 垂直居中 */
  width: 100%;  /* 与选择框宽度一致 */
}

.upload-icon {
  width: 80px;
  height: 80px;
  margin-top: -10px; 
}

.upload-trigger:hover {
  background: rgba(64, 160, 255, 0);
  transform: scale(1.05);
}

.upload-text {
  font-size: 14px;
  color: #e6e6e6;
}
</style>
