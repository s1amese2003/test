<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" router class="custom-menu" default-active="/vehicle">
        <el-menu-item index="/vehicle">车辆状况</el-menu-item>
        <el-menu-item index="/monitor">监控中心</el-menu-item>
        <el-menu-item index="/analysis">数据分析</el-menu-item>
        <el-menu-item index="/statistics">车辆统计</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>
</script>

<style scoped>
.el-container {
  height: 100vh;
  overflow: hidden;
}

.el-header {
  padding: 0;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  line-height: 50px;
}

.el-main {
  padding: 0;
  height: calc(100vh - 50px);
  overflow: hidden;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100vh;
  background: #1a1a1a;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
}

.panel {
  background: #2a2a2a;
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
}

h2 {
  margin-bottom: 15px;
  font-size: 1.2em;
  color: #409EFF;
}

.panel {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0 0 10px 0;
}

.custom-menu {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* 改为左对齐 */
  background: #0f1325;
  border: none;
  padding-left: 20px; /* 添加左侧内边距 */
}

:deep(.el-menu--horizontal .el-menu-item) {
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 0 20px; /* 减小内边距 */
  font-size: 16px;
  background-color: transparent;
}

:deep(.el-menu--horizontal .el-menu-item:hover),
:deep(.el-menu--horizontal .el-menu-item.is-active) {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #409EFF;
  border-bottom: 2px solid #409EFF;
}

:deep(.el-menu--horizontal) {
  border-bottom: none;
  background-color: transparent;
}
</style>
