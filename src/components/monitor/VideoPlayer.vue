<template>
  <div class="container">
  <div class="video-container">
    <video
      ref="videoPlayer"
      class="video-player"
      :src="props.src"
      controls
      autoplay
    ></video>
    <div class="video-info">
      <span>{{ currentCamera }}</span>
      <span>{{ currentTime }}</span>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const currentCamera = ref('摄像头-01')
const currentTime = ref('')

onMounted(() => {
  // 更新时间
  setInterval(() => {
    currentTime.value = new Date().toLocaleString()
  }, 1000)
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
