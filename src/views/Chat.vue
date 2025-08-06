<template>
  <div class="chat-page">
    <div class="chat-container">
      <!-- 侧边栏 -->
      <div class="chat-sidebar">
        <div class="sidebar-header">
          <h3>聊天列表</h3>
          <el-button type="primary" size="small" @click="handleNewChat">
            <el-icon><Plus /></el-icon>
            新建聊天
          </el-button>
        </div>
        
        <div class="chat-list">
          <div
            v-for="chat in chatList"
            :key="chat.id"
            class="chat-item"
            :class="{ active: activeChat?.id === chat.id }"
            @click="selectChat(chat)"
          >
            <el-avatar :size="40" :src="chat.avatar" />
            <div class="chat-info">
              <div class="chat-name">{{ chat.name }}</div>
              <div class="chat-last-message">{{ chat.lastMessage }}</div>
            </div>
            <div class="chat-time">{{ chat.lastTime }}</div>
          </div>
        </div>
      </div>

      <!-- 聊天主区域 -->
      <div class="chat-main">
        <div v-if="activeChat" class="chat-content">
          <!-- 聊天头部 -->
          <div class="chat-header">
            <div class="chat-user-info">
              <el-avatar :size="32" :src="activeChat.avatar" />
              <span class="chat-user-name">{{ activeChat.name }}</span>
            </div>
            <div class="chat-actions">
              <el-button type="text" size="small">
                <el-icon><Search /></el-icon>
              </el-button>
              <el-button type="text" size="small">
                <el-icon><MoreFilled /></el-icon>
              </el-button>
            </div>
          </div>

          <!-- 消息区域 -->
          <div class="message-container">
            <div class="message-list">
              <div
                v-for="message in activeChat.messages"
                :key="message.id"
                class="message-item"
                :class="{ 'message-own': message.isOwn }"
              >
                <div class="message-avatar">
                  <el-avatar :size="32" :src="message.avatar" />
                </div>
                <div class="message-content">
                  <div class="message-bubble">
                    {{ message.content }}
                  </div>
                  <div class="message-time">{{ message.time }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 输入区域 -->
          <div class="message-input">
            <el-input
              v-model="newMessage"
              type="textarea"
              :rows="3"
              placeholder="输入消息..."
              resize="none"
              @keydown.enter.prevent="sendMessage"
            />
            <div class="input-actions">
              <el-button type="text" size="small">
                <el-icon><Paperclip /></el-icon>
              </el-button>
              <el-button type="text" size="small">
                <el-icon><SmileFilled /></el-icon>
              </el-button>
              <el-button type="primary" @click="sendMessage">
                发送
              </el-button>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="chat-empty">
          <el-empty description="选择一个聊天开始对话">
            <el-button type="primary" @click="handleNewChat">
              开始新聊天
            </el-button>
          </el-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Plus, Search, MoreFilled, Paperclip, SmileFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const activeChat = ref(null)
const newMessage = ref('')

// 模拟聊天数据
const chatList = reactive([
  {
    id: 1,
    name: '张三',
    avatar: 'https://via.placeholder.com/40',
    lastMessage: '你好，最近怎么样？',
    lastTime: '14:30',
    messages: [
      {
        id: 1,
        content: '你好，最近怎么样？',
        time: '14:30',
        isOwn: false,
        avatar: 'https://via.placeholder.com/40'
      },
      {
        id: 2,
        content: '还不错，谢谢关心！',
        time: '14:32',
        isOwn: true,
        avatar: 'https://via.placeholder.com/40'
      }
    ]
  },
  {
    id: 2,
    name: '李四',
    avatar: 'https://via.placeholder.com/40',
    lastMessage: '项目进展如何？',
    lastTime: '12:15',
    messages: [
      {
        id: 1,
        content: '项目进展如何？',
        time: '12:15',
        isOwn: false,
        avatar: 'https://via.placeholder.com/40'
      }
    ]
  }
])

const selectChat = (chat) => {
  activeChat.value = chat
}

const handleNewChat = () => {
  ElMessage.info('新建聊天功能开发中...')
}

const sendMessage = () => {
  if (!newMessage.value.trim() || !activeChat.value) return

  const message = {
    id: Date.now(),
    content: newMessage.value,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    isOwn: true,
    avatar: 'https://via.placeholder.com/40'
  }

  activeChat.value.messages.push(message)
  activeChat.value.lastMessage = newMessage.value
  activeChat.value.lastTime = message.time

  newMessage.value = ''
}
</script>

<style scoped lang="scss">
.chat-page {
  height: 100vh;
  background-color: $background-color-base;
}

.chat-container {
  height: 100%;
  display: flex;
}

.chat-sidebar {
  width: 300px;
  background: white;
  border-right: 1px solid $border-color-light;
  display: flex;
  flex-direction: column;

  .sidebar-header {
    padding: 20px;
    border-bottom: 1px solid $border-color-light;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
      color: $text-primary;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .chat-list {
    flex: 1;
    overflow-y: auto;

    .chat-item {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      cursor: pointer;
      transition: background-color 0.2s;
      border-bottom: 1px solid $border-color-lighter;

      &:hover {
        background-color: $background-color-light;
      }

      &.active {
        background-color: $primary-color;
        color: white;

        .chat-info {
          .chat-name {
            color: white;
          }

          .chat-last-message {
            color: rgba(255, 255, 255, 0.8);
          }
        }

        .chat-time {
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .chat-info {
        flex: 1;
        margin-left: 12px;
        overflow: hidden;

        .chat-name {
          font-weight: 600;
          color: $text-primary;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-last-message {
          color: $text-regular;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .chat-time {
        font-size: 12px;
        color: $text-secondary;
        margin-left: 8px;
      }
    }
  }
}

.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background: white;
  padding: 16px 20px;
  border-bottom: 1px solid $border-color-light;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .chat-user-info {
    display: flex;
    align-items: center;
    gap: 12px;

    .chat-user-name {
      font-weight: 600;
      color: $text-primary;
    }
  }

  .chat-actions {
    display: flex;
    gap: 8px;
  }
}

.message-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: $background-color-light;

  .message-list {
    .message-item {
      display: flex;
      margin-bottom: 16px;
      gap: 12px;

      &.message-own {
        flex-direction: row-reverse;

        .message-content {
          align-items: flex-end;

          .message-bubble {
            background-color: $primary-color;
            color: white;
          }
        }
      }

      .message-avatar {
        flex-shrink: 0;
      }

      .message-content {
        display: flex;
        flex-direction: column;
        max-width: 60%;

        .message-bubble {
          background: white;
          padding: 12px 16px;
          border-radius: $border-radius-large;
          box-shadow: $box-shadow-base;
          word-wrap: break-word;
          line-height: 1.4;
        }

        .message-time {
          font-size: 12px;
          color: $text-secondary;
          margin-top: 4px;
        }
      }
    }
  }
}

.message-input {
  background: white;
  padding: 20px;
  border-top: 1px solid $border-color-light;

  .input-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

    .el-button {
      margin-left: 8px;
    }
  }
}

.chat-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $background-color-light;
}

// 响应式设计
@media (max-width: $breakpoint-md) {
  .chat-sidebar {
    width: 250px;
  }
}

@media (max-width: $breakpoint-sm) {
  .chat-container {
    flex-direction: column;
  }

  .chat-sidebar {
    width: 100%;
    height: 200px;
  }
}
</style> 