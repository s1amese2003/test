<template>
  <div class="monitor-container">
    <el-row class="monitor-content">
      <!-- 左侧区域 -->
      <el-col :span="6">
        <div class="panel">
          <dv-border-box-1>
            <TrafficStatus />
          </dv-border-box-1>
        </div>
        <div class="panel">
          <dv-border-box-1>
            <RealTimeAlert />
          </dv-border-box-1>
        </div>
        <div class="panel">
          <dv-border-box-1>
            <HistorySearch />
          </dv-border-box-1>
        </div>
      </el-col>

      <!-- 中间区域 -->
      <el-col :span="12">
        <div class="panel main-video-panel">
          <dv-border-box-1>
            <VideoPlayer :src="currentVideo" />
          </dv-border-box-1>
        </div>
        <div class="panel video-list-panel">
          <dv-border-box-1>
            <VideoList @select-video="switchVideo" />
          </dv-border-box-1>
        </div>
      </el-col>

      <!-- 右侧区域 -->
      <el-col :span="6">
        <div class="panel">
          <dv-border-box-1>
            <div class="stats-panel">
              实时统计数据
            </div>
          </dv-border-box-1>
        </div>
        <div class="panel">
          <dv-border-box-1>
            <div class="alert-history">
              报警记录
            </div>
          </dv-border-box-1>
        </div>
        <div class="panel">
          <dv-border-box-1>
            <div class="system-info">
              系统信息
            </div>
          </dv-border-box-1>
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
  background: #0f1325;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.monitor-content {
  height: 100%;
  gap: 10px;
}

.el-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.panel {
  flex: 1;
  background: rgba(6, 30, 93, 0.5);
  border-radius: 4px;
  overflow: hidden;
  height: calc(33.33% - 7px);
}

.main-video-panel {
  height: 66.7%;
}

.video-list-panel {
  height: 33.3%;
}

:deep(.dv-border-box-1) {
  width: 100%;
  height: 100%;
}
</style>
