/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

// 后端请求地址
export const baseUrl = 'http://localhost:8089'
// export const baseUrl = 'http://10.10.201.130:8089'
// 系统数据备份还原服务器地址
// export const backupBaseUrl = ''
export const backupBaseUrl = 'http://localhost:8081'

export default {
  baseUrl,
  backupBaseUrl
}
