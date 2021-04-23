
/*
 * 生产报表
 */

export function getReports () {
  let reports = {
    'code': 200,
    'msg': null,
    'data': {
      productionReport: [
        {
          name: '原材料库存分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '包材库存分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '半成品库存分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '易耗品库存分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '产成品库存分析',
          url: 'https://www.baidu.com'
        },
        {
          name: 'WMS库存报表',
          url: 'https://www.baidu.com'
        }
      ],
      analysisAbroad: [
        {
          name: '销售分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '超市销售分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '驻外营运分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '特普分析',
          url: 'https://www.baidu.com'
        },
        {
          name: '管理驾驶仓',
          url: 'https://www.baidu.com'
        }
      ],
      productionAndSalesCoordination: [
        {
          name: '集团产销协调',
          url: 'https://www.baidu.com'
        },
        {
          name: '物流分析报表',
          url: 'https://www.baidu.com'
        },
        {
          name: '销售自由报表',
          url: 'https://www.baidu.com'
        }
      ],
      externalLink: [
        {
          name: 'BI使用情况',
          url: 'https://www.baidu.com'
        },
        {
          name: '块数据更新',
          url: 'https://www.baidu.com'
        },
        {
          name: '订单BOM分析',
          url: 'https://www.baidu.com'
        },
        {
          name: 'OA日记完成情况',
          url: 'https://www.baidu.com'
        }
      ]
    }
  }
  return {
    url: 'list/all',
    type: 'get',
    data: reports
  }
}
