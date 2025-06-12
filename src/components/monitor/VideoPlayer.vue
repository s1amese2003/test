<template>
  <div class="container">
    <div class="video-container">
      <img
        ref="videoPlayer"
        class="video-player"
        :src="videoUrl"
        alt="video feed"
      />
      <div class="video-info">
        <!-- 修改这里，显示摄像头名称和位置 -->
        <span>{{ cameraInfo.name }} {{ cameraInfo.location }}</span>
        <span>{{ currentTime }}</span>
      </div>
    </div>
  </div>
</template>  

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  // 添加新的 prop 接收摄像头信息
  cameraInfo: {
    type: Object,
    default: () => ({
      name: '',
      location: ''
    })
  }
})

const currentTime = ref('')
const videoUrl = ref('')

// 获取视频的完整URL的函数
const fetchVideoUrl = () => {
  console.log('Video src:', props.src); // 打印传入的 src

  fetch(props.src)
    .then(response => response.json())
    .then(data => {
      const baseUrl = 'http://localhost:5000'; // 你的视频基础URL
      videoUrl.value = baseUrl + data.video_url; // 设置完整的视频URL
    })
    .catch(error => {
      console.error('Error fetching video URL:', error);
    });
}

// 在组件挂载时获取视频URL
onMounted(() => {
  fetchVideoUrl();

  // 更新时间
  setInterval(() => {
    currentTime.value = new Date().toLocaleString()
  }, 1000)
})

// 监听 src 属性的变化，当变化时重新获取视频URL
watch(() => props.src, (newSrc) => {
  console.log('Video src changed:', newSrc); // 打印新的 src
  fetchVideoUrl(); // 当 src 改变时，重新获取视频URL
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #00ff0d00;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.video-container {
  width: 100%;
  height: 100%;
  padding: 0px;
  background: #000000;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.video-player {
  width: 100%;
  height: calc(100% - 40px);
  object-fit: cover;
}

.video-info {
  height: 40px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
}
</style>
