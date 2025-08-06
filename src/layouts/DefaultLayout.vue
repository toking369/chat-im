<template>
  <div class="layout">
    <!-- 只在聊天页面显示头部 -->
    <header v-if="showHeader" class="header">
      <div class="header-left">
        <div class="logo">
          <h1>Chat IM</h1>
        </div>
      </div>
      <div class="header-right">
        <el-dropdown v-if="userStore.getIsLogin">
          <div class="user-info">
            <el-avatar :size="32" :src="userStore.getUserInfo?.avatar" />
            <span class="username">{{ userStore.getUserInfo?.username }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleProfile">个人资料</el-dropdown-item>
              <el-dropdown-item @click="handleSettings">设置</el-dropdown-item>
              <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button v-else type="primary" @click="handleLogin">登录</el-button>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="main" :class="{ 'with-header': showHeader }">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ElMessageBox } from 'element-plus'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

// 只在聊天页面显示头部
const showHeader = computed(() => {
  return route.name === 'Chat'
})

const handleProfile = () => {
  // 跳转到个人资料页面
  console.log('个人资料')
}

const handleSettings = () => {
  // 跳转到设置页面
  console.log('设置')
}

const handleLogout = async () => {
  try {
    await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    userStore.logout()
    router.push('/')
  } catch {
    // 用户取消
  }
}

const handleLogin = () => {
  // 跳转到登录页面
  router.push('/')
}
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: $header-height;
  background: #fff;
  border-bottom: 1px solid $border-color-light;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: $box-shadow-light;

  .header-left {
    .logo {
      h1 {
        font-size: 20px;
        font-weight: 600;
        color: $primary-color;
        margin: 0;
      }
    }
  }

  .header-right {
    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: $border-radius-base;
      transition: background-color 0.2s;

      &:hover {
        background-color: $background-color-light;
      }

      .username {
        font-size: 14px;
        color: $text-regular;
      }
    }
  }
}

.main {
  flex: 1;
  overflow: auto;
  background-color: $background-color-base;

  &.with-header {
    height: calc(100vh - #{$header-height});
  }
}
</style> 