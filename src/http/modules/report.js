import axios from '../axios'
/*
 * 导航页
 */

// 获取报表列表
export const getReports = (params) => {
  return axios({
    url: 'menu/tree',
    method: 'get',
    params
  })
}
