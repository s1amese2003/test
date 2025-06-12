<template>
  <div class="video-list">
    <el-scrollbar height="calc(100%)">
      <div class="video-grid">
        <div v-for="camera in cameras" 
             :key="camera.id" 
             class="video-item"
             @click="selectVideo(camera)">
          <div class="thumbnail">
            <div class="camera-img"><img :src="camera.thumbnail" :alt="camera.name"></div>
            <div class="camera-info">
              <span>{{ camera.name }} {{ camera.location }}</span>
            </div>
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
    location: '机场大道',
    thumbnail: 'src\\statics\\cam1.png',
    url: 'http://localhost:5000/video/0'
  },
  {
    id: 2,
    name: '摄像头-02',
    location: '停车场入口',
    thumbnail: 'src\\statics\\cam2.png',
    url: 'http://localhost:5000/video/1'
  },{
    id: 3,
    name: '摄像头-03',
    location: '机场高速',
    thumbnail: 'src\\statics\\cam3.png',
    url: 'http://localhost:5000/video/2'
  },
  // 添加更多摄像头
])

const selectVideo = (camera) => {
  // 修改这里，传递完整的摄像头信息
  emit('select-video', {
    url: camera.url,
    name: camera.name,
    location: camera.location
  })
}
</script>

<style scoped>
.video-list {
  height: 100%;
  background: #2a2a2a00;
  border-radius: 8px;
}

.list-header {
  padding: 10px 15px;
  border-bottom: 1px solid #404040;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 修改为固定3列 */
  gap: 15px;
  padding: 15px;
}

.video-item {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
}

.video-item:hover {
  transform: scale(1.02);
}

.thumbnail {
  width: 100%;
  height: 172px;
  background: #000;
  overflow: hidden; /* 防止图片溢出 */
  position: relative; /* 为绝对定位的子元素提供参考 */
}

.camera-img {
  width: 100%;
  height: 100%;
  position: relative;
}

.camera-img::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 94, 234, 0.3); /* 蓝色叠加层 */
  z-index: 1;
  pointer-events: none; /* 确保点击事件可以穿透到下层 */
  transition: opacity 0.3s ease;
}

.video-item:hover .camera-img::after {
  opacity: 0; /* 鼠标悬停时隐藏蓝色叠加层 */
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持宽高比的同时填充整个容器 */
  position: absolute; /* 绝对定位以确保完全覆盖 */
  top: 0;
  left: 0;
  filter: blur(3px); /* 添加轻微模糊效果 */
  transition: filter 0.3s ease; /* 添加过渡效果 */
}

/* 鼠标悬停时取消模糊效果 */
.video-item:hover .thumbnail img {
  filter: blur(0); /* 鼠标悬停时清晰显示 */
}

.camera-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  background: rgba(0, 0, 0, 0.332); /* 添加半透明背景 */
  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 999;
}
</style>
