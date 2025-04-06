<template>
  <div class="monitor-container">
    <el-row class="monitor-content">
      <!-- 左侧区域 -->
      <el-col :span="16">
        <div class="panel">
          <dv-border-box-10>
            <VideoPlayer :src="currentVideo" />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <VideoList @select-video="switchVideo" />
          </dv-border-box-10>
        </div>
      </el-col>
      
      <!-- 右侧区域 -->
      <el-col :span="8">
        <div class="panel">
          <dv-border-box-10>
            <TrafficStatus />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <RealTimeAlert />
          </dv-border-box-10>
        </div>
        <div class="panel">
          <dv-border-box-10>
            <HistorySearch />
          </dv-border-box-10>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VideoPlayer from '../components/monitor/VideoPlayer.vue'
import VideoList from '../components/monitor/VideoList.vue'
import TrafficStatus from '../components/monitor/TrafficStatus.vue'
import RealTimeAlert from '../components/monitor/RealTimeAlert.vue'
import HistorySearch from '../components/monitor/HistorySearch.vue'

const currentVideo = ref('default-video-url')

const switchVideo = (videoUrl) => {
  currentVideo.value = videoUrl
}
</script>

<style scoped>
.monitor-container {
  width: 100%;
  height: 100%;
  background: #0f132500;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.monitor-content {
  height: 100%;
  display: flex;
  flex-wrap: nowrap; 
}

.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 左侧列的第一个面板（VideoPlayer）*/
.el-col:first-child .panel:first-child {
  flex: 7; /* 占比更大，可以根据需要调整数值 */
  height: auto; /* 移除固定高度计算 */
}

/* 左侧列的第二个面板（VideoList）*/
.el-col:first-child .panel:last-child {
  flex: 3; /* 占比更小 */
  height: auto; /* 移除固定高度计算 */
}

/* 右侧列的三个面板高度占比 */
.el-col:nth-child(2) .panel:nth-child(1) {
  flex: 2; /* 第一个面板(TrafficStatus)占比 */
  height: auto;
}

.el-col:nth-child(2) .panel:nth-child(2) {
  flex: 2; /* 第二个面板(RealTimeAlert)占比 */
  height: auto;
}

.el-col:nth-child(2) .panel:nth-child(3) {
  flex: 1; /* 第三个面板(HistorySearch)占比 */
  height: auto;
}

.panel {
  flex: 1;
  background: rgba(255, 0, 132, 0);
  border-radius: 4px;
  padding: 5px;
  overflow: hidden;
  transition: all 0.3s ease; /* 添加过渡效果 */
  position: relative; /* 为伪元素定位做准备 */
}

/* 修改悬停效果为放大 */
.panel:hover {
  transform: scale(1.02); /* 放大效果 */
  box-shadow: 0 5px 15px rgba(0, 149, 255, 0.2);
  z-index: 1;
}

:deep(.dv-border-box-10) {
  width: 100%;
  height: 100%;
  transition: filter 0.3s ease; /* 添加过渡效果 */
  backdrop-filter: blur(5px); /* 添加模糊效果 */
  -webkit-backdrop-filter: blur(5px); /* Safari 兼容 */
}

/* 调整模糊效果的背景 */
:deep(.dv-border-box-10 .border-box-content) {
  background: rgba(6, 30, 93, 0.2) !important; /* 半透明背景 */
}

:deep(.dv-border-box-1) {
  width: 100%;
  height: 100%;
}
</style>
