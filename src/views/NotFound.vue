<template>
  <div class="not-found">
    <div class="container">
      <div class="content">
        <div class="error-code">404</div>
        <h1 class="title">页面未找到</h1>
        <p class="description">抱歉，您访问的页面不存在或已被删除。</p>
        
        <div class="actions">
          <el-button type="primary" @click="goHome">
            <el-icon><House /></el-icon>
            返回首页
          </el-button>
          <el-button @click="goBack">
            <el-icon><Back /></el-icon>
            返回上页
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { House, Back } from '@element-plus/icons-vue'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped lang="scss">
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  text-align: center;
  color: white;
}

.content {
  .error-code {
    font-size: 120px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 16px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .description {
    font-size: 18px;
    margin-bottom: 32px;
    opacity: 0.9;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    
    .el-button {
      padding: 12px 24px;
      font-size: 16px;
      
      .el-icon {
        margin-right: 8px;
      }
    }
  }
}

// 响应式设计
@media (max-width: $breakpoint-sm) {
  .content {
    .error-code {
      font-size: 80px;
    }
    
    .title {
      font-size: 24px;
    }
    
    .description {
      font-size: 16px;
    }
    
    .actions {
      flex-direction: column;
      align-items: center;
      
      .el-button {
        width: 200px;
      }
    }
  }
}
</style> 