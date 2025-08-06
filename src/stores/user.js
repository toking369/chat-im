import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: localStorage.getItem('token') || '',
    isLogin: false
  }),
  
  getters: {
    getUserInfo: (state) => state.userInfo,
    getToken: (state) => state.token,
    getIsLogin: (state) => state.isLogin
  },
  
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
      this.isLogin = true
    },
    
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    
    logout() {
      this.userInfo = null
      this.token = ''
      this.isLogin = false
      localStorage.removeItem('token')
    },
    
    async login(credentials) {
      try {
        // 这里应该调用实际的登录 API
        // const response = await loginApi(credentials)
        // this.setToken(response.token)
        // this.setUserInfo(response.userInfo)
        
        // 模拟登录
        const mockUserInfo = {
          id: 1,
          username: credentials.username,
          email: `${credentials.username}@example.com`,
          avatar: 'https://via.placeholder.com/40'
        }
        const mockToken = 'mock-token-' + Date.now()
        
        this.setToken(mockToken)
        this.setUserInfo(mockUserInfo)
        
        return { success: true }
      } catch (error) {
        return { success: false, message: error.message }
      }
    }
  }
}) 