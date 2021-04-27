export default {
  state: {
    report: '' // 所有嵌套页面路由路径访问URL
  },
  getters: {
  },
  mutations: {
    addReport (state, report) { // iframeUrls
      state.report = report
    }
  },
  actions: {
  }
}
