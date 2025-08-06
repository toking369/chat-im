# Chat IM

一个基于 Vue 3 + Vite 构建的现代化即时通讯应用。

## 技术栈

- **前端框架：** Vue 3 + Composition API
- **构建工具：** Vite
- **UI 组件库：** Element Plus
- **状态管理：** Pinia
- **路由管理：** Vue Router 4
- **HTTP 客户端：** Axios
- **样式预处理：** SCSS

## 功能特性

- 🚀 基于 Vue 3 和 Vite 的现代化开发体验
- 🎨 使用 Element Plus 组件库，界面美观
- 📱 响应式设计，支持多端适配
- 🔄 实时消息传递
- 👥 用户管理和好友系统
- 🎯 个性化设置
- 📝 消息历史记录

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── api/          # API 接口
├── assets/       # 静态资源
├── components/   # 公共组件
├── layouts/      # 布局组件
├── router/       # 路由配置
├── stores/       # 状态管理
├── styles/       # 样式文件
├── utils/        # 工具函数
├── views/        # 页面组件
├── App.vue       # 根组件
└── main.js       # 入口文件
```

## 开发指南

### 添加新页面

1. 在 `src/views/` 目录下创建新的页面组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在布局组件中添加导航链接

### 添加新组件

1. 在 `src/components/` 目录下创建组件
2. 使用 Composition API 编写组件逻辑
3. 使用 SCSS 编写样式

### 状态管理

使用 Pinia 进行状态管理，在 `src/stores/` 目录下创建 store 文件。

### API 接口

在 `src/api/` 目录下创建 API 接口文件，使用 `src/utils/request.js` 中的 axios 实例。

## 环境变量

创建 `.env.development` 和 `.env.production` 文件来配置不同环境的变量：

```
VITE_APP_TITLE=Chat IM
VITE_API_BASE_URL=/api
```

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License
