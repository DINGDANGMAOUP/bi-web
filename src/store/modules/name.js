export default {
  state: {
    username: '' // 所有嵌套页面路由路径访问URL
  },
  getters: {
  },
  mutations: {
    setUserName (state, username) { // iframeUrls
      state.username = username
    }
  },
  actions: {
  }
}
