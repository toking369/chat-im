<template>
  <div class="about">
    <div class="container">
      <el-card class="about-card">
        <template #header>
          <div class="card-header">
            <h2>关于 Chat IM</h2>
          </div>
        </template>
        
        <div class="content">
          <h3>项目简介</h3>
          <p>Chat IM 是一个基于 Vue 3 + Vite 构建的现代化即时通讯应用。我们致力于为用户提供简洁、高效、安全的聊天体验。</p>
          
          <h3>技术栈</h3>
          <ul>
            <li><strong>前端框架：</strong>Vue 3 + Composition API</li>
            <li><strong>构建工具：</strong>Vite</li>
            <li><strong>UI 组件库：</strong>Element Plus</li>
            <li><strong>状态管理：</strong>Pinia</li>
            <li><strong>路由管理：</strong>Vue Router 4</li>
            <li><strong>HTTP 客户端：</strong>Axios</li>
            <li><strong>样式预处理：</strong>SCSS</li>
          </ul>
          
          <h3>主要功能</h3>
          <ul>
            <li>实时消息传递</li>
            <li>用户注册和登录</li>
            <li>好友管理</li>
            <li>群组聊天</li>
            <li>消息历史记录</li>
            <li>个性化设置</li>
          </ul>
          
          <h3>开发团队</h3>
          <p>这是一个开源项目，欢迎社区贡献代码和提出建议。</p>
          
          <div class="contact">
            <h3>联系我们</h3>
            <p>如有问题或建议，请通过以下方式联系我们：</p>
            <ul>
              <li>邮箱：contact@chat-im.com</li>
              <li>GitHub：<a href="#" target="_blank">github.com/chat-im</a></li>
            </ul>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped lang="scss">
.about {
  padding: 40px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

.about-card {
  .card-header {
    h2 {
      margin: 0;
      color: $text-primary;
      font-size: 24px;
      font-weight: 600;
    }
  }
  
  .content {
    h3 {
      color: $text-primary;
      font-size: 18px;
      font-weight: 600;
      margin: 24px 0 12px 0;
      
      &:first-child {
        margin-top: 0;
      }
    }
    
    p {
      color: $text-regular;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    
    ul {
      color: $text-regular;
      line-height: 1.6;
      margin-bottom: 16px;
      padding-left: 20px;
      
      li {
        margin-bottom: 8px;
        
        strong {
          color: $text-primary;
        }
      }
    }
    
    .contact {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid $border-color-light;
      
      a {
        color: $primary-color;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: $breakpoint-sm) {
  .about {
    padding: 20px 0;
  }
  
  .container {
    padding: 0 16px;
  }
}
</style> 