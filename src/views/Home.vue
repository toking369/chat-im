<template>
  <div class="home">
    <div class="container">
      <div class="welcome-section">
        <h1 class="title">欢迎使用 Chat IM</h1>
        <p class="subtitle">一个现代化的即时通讯应用</p>
        
        <div class="features">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-card class="feature-card">
                <template #header>
                  <div class="feature-header">
                    <el-icon><ChatDotRound /></el-icon>
                    <span>实时聊天</span>
                  </div>
                </template>
                <p>支持实时消息传递，让沟通更加便捷</p>
              </el-card>
            </el-col>
            
            <el-col :span="8">
              <el-card class="feature-card">
                <template #header>
                  <div class="feature-header">
                    <el-icon><User /></el-icon>
                    <span>用户管理</span>
                  </div>
                </template>
                <p>完善的用户系统，支持好友添加和管理</p>
              </el-card>
            </el-col>
            
            <el-col :span="8">
              <el-card class="feature-card">
                <template #header>
                  <div class="feature-header">
                    <el-icon><Setting /></el-icon>
                    <span>个性化设置</span>
                  </div>
                </template>
                <p>丰富的个性化设置，打造专属聊天体验</p>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <div class="actions">
          <el-button type="primary" size="large" @click="handleGetStarted">
            开始使用
          </el-button>
          <el-button size="large" @click="handleLearnMore">
            了解更多
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChatDotRound, User, Setting } from '@element-plus/icons-vue'

const handleGetStarted = () => {
  // 跳转到登录或注册页面
  console.log('开始使用')
}

const handleLearnMore = () => {
  // 跳转到关于页面
  console.log('了解更多')
}
</script>

<style scoped lang="scss">
.home {
  min-height: 100%;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.welcome-section {
  text-align: center;
  
  .title {
    font-size: 48px;
    font-weight: 700;
    color: $text-primary;
    margin-bottom: 16px;
    background: linear-gradient(135deg, $primary-color, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .subtitle {
    font-size: 18px;
    color: $text-regular;
    margin-bottom: 48px;
  }
}

.features {
  margin-bottom: 48px;
  
  .feature-card {
    height: 100%;
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: $box-shadow-light;
    }
    
    .feature-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: $text-primary;
      
      .el-icon {
        font-size: 20px;
        color: $primary-color;
      }
    }
    
    p {
      color: $text-regular;
      line-height: 1.6;
      margin: 0;
    }
  }
}

.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

// 响应式设计
@media (max-width: $breakpoint-md) {
  .welcome-section {
    .title {
      font-size: 36px;
    }
    
    .subtitle {
      font-size: 16px;
    }
  }
  
  .features {
    .el-col {
      margin-bottom: 16px;
    }
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
    
    .el-button {
      width: 200px;
    }
  }
}
</style> 