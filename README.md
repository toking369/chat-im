# Chat IM App

一个基于Vue3 + Vite + Sass的PC项目。

## 技术栈

- Vue 3.4.0
- Vite 5.0.0
- Vue Router 4.2.0
- Pinia 2.1.0
- Sass 1.69.0

## 项目结构

```
src/
├── assets/
│   └── styles/
│       ├── variables.scss    # Sass变量
│       └── main.scss         # 主样式文件
├── components/               # 组件目录
├── router/
│   └── index.js             # 路由配置
├── stores/
│   └── counter.js           # Pinia store示例
├── views/
│   └── Home.vue             # 首页组件
├── App.vue                  # 根组件
└── main.js                  # 入口文件
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 特性

- ✅ Vue3 Composition API
- ✅ Vite快速构建
- ✅ Sass预处理器
- ✅ Vue Router路由管理
- ✅ Pinia状态管理
- ✅ 路径别名配置 (@/ 指向 src/)
- ✅ 热重载开发体验 