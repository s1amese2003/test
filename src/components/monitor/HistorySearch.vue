<template>
  <div class="history-container">
    <div class="content-wrapper">
      <div class="search-section">
        <h3>历史记录查询</h3>
        <el-form :model="searchForm" size="small">
          <el-form-item style="width: 90%">
            <el-date-picker
              v-model="searchForm.date"
              type="date"
              placeholder="选择日期"
            />
          </el-form-item>
          <el-form-item>
            <el-select style="width: 90%" v-model="searchForm.camera" placeholder="选择摄像头">
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
          :action="uploadUrl"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
          :data="uploadData"
          :show-file-list="false"
          name="video"
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
import { ref, watch, defineProps, defineEmits } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'

// 接收 currentVideo 作为 prop
const props = defineProps({
  currentVideo: {
    type: Object,
    default: () => ({
      url: '',
      name: '',
      location: ''
    })
  }
})

// 定义更新 video 的事件
const emit = defineEmits(['update-video'])

const searchForm = ref({
  date: '',
  camera: ''
})

const cameras = ref([
  { value: 'cam1', label: '摄像头-01', location: '机场北门' },
  { value: 'cam2', label: '摄像头-02', location: '机场南门' },
  { value: 'cam3', label: '摄像头-03', location: '航站楼' }
])

const uploadUrl = 'http://localhost:5000/upload'

const uploadData = ref({
  date: searchForm.value.date,
  camera: searchForm.value.camera
})

const handleUploadSuccess = (response) => {
  ElMessage.success('上传成功')
  console.log('上传成功：', response)

  // 假设上传后服务器返回的视频 URL，可以用来更新视频播放器
  if (response && response.videoUrl) {
    // 更新父组件中的 currentVideo，传递完整的摄像头信息
    const selectedCamera = cameras.value.find(cam => cam.value === searchForm.value.camera) || cameras.value[0]
    
    emit('update-video', {
      url: response.videoUrl,
      name: selectedCamera.label,
      location: selectedCamera.location
    })
  } else {
    ElMessage.error('上传成功，但没有视频 URL')
  }
}

const handleUploadError = () => {
  ElMessage.error('上传失败')
}

const beforeUpload = (file) => {
  return true
}

// 监听 searchForm.date 和 searchForm.camera 的变化
watch([() => searchForm.value.date, () => searchForm.value.camera], async () => {
  // 检查是否两个条件都已选择
  if (searchForm.value.date && searchForm.value.camera) {
    try {
      const response = await axios.post('http://localhost:5000/query_video', {
        date: searchForm.value.date,
        camera: searchForm.value.camera
      })

      if (response.data && response.data.videoUrl) {
        // 获取选中的摄像头信息
        const selectedCamera = cameras.value.find(cam => cam.value === searchForm.value.camera)
        
        // 更新父组件中的 currentVideo，传递完整的摄像头信息
        emit('update-video', {
          url: response.data.videoUrl,
          name: selectedCamera ? selectedCamera.label : '未知摄像头',
          location: selectedCamera ? selectedCamera.location : '未知位置'
        })
        
        ElMessage.success('查询成功')
      } else {
        ElMessage.error('没有找到相关视频')
      }
    } catch (error) {
      ElMessage.error('查询失败')
      console.error(error)
    }
  }
})
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
  margin-top: -20px;
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
  height: 60%;
  justify-content: center;
  width: 100%;
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
