<template>
  <div class="video-list">
    <div class="list-header">
      <h3>其他监控画面</h3>
    </div>
    <el-scrollbar height="calc(100% - 40px)">
      <div class="video-grid">
        <div v-for="camera in cameras" 
             :key="camera.id" 
             class="video-item"
             @click="selectVideo(camera)">
          <div class="thumbnail">
            <img :src="camera.thumbnail" :alt="camera.name">
          </div>
          <div class="camera-info">
            <span>{{ camera.name }}</span>
            <span>{{ camera.location }}</span>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['select-video'])

const cameras = ref([
  {
    id: 1,
    name: '摄像头-01',
    location: '机场北门',
    thumbnail: '/images/camera1.jpg',
    url: 'video-url-1'
  },
  {
    id: 2,
    name: '摄像头-02',
    location: '停车场入口',
    thumbnail: '/images/camera2.jpg',
    url: 'video-url-2'
  },
  // 添加更多摄像头
])

const selectVideo = (camera) => {
  emit('select-video', camera.url)
}
</script>

<style scoped>
.video-list {
  height: 100%;
  background: #2a2a2a;
  border-radius: 8px;
}

.list-header {
  padding: 10px 15px;
  border-bottom: 1px solid #404040;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 15px;
}

.video-item {
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s;
}

.video-item:hover {
  transform: scale(1.02);
}

.thumbnail {
  width: 100%;
  height: 120px;
  background: #000;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.camera-info {
  padding: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
}
</style>
