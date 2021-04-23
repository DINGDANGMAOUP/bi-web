import axios from '../axios'
/*
 * 导航页
 */

// 获取报表列表
export const getReports = () => {
  return axios({
    url: 'list/all',
    method: 'get'
  })
}
