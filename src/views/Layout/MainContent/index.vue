<template>
  <v-main class="grey lighten-2">
    <v-container>
      <v-row  >

        <v-col
          v-for="(item,index) in list"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-toolbar flat>
            <v-toolbar-title align="center">{{ index }}</v-toolbar-title>
<!--            <v-spacer></v-spacer>-->
<!--            <div>-->
<!--              <v-switch-->
<!--                v-model="panel"-->
<!--                label="Sticky Banner"-->
<!--                hide-details-->
<!--              ></v-switch>-->
<!--            </div>-->
          </v-toolbar>
          <v-expansion-panels
            accordion
            multiple>
            <v-expansion-panel
              v-for="(ch,i) in item"
              :key="i"
            >
              <v-expansion-panel-header>
                {{ch.name}}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-expansion-panels accordion>
                  <v-expansion-panel v-for="(ch1,i1) in ch.data" :key="i1">
                    <v-expansion-panel-header>{{ ch1.name }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-btn block v-for="(ch2,i2) in ch1.data" :key="i2">
                        {{ ch2.name }}
                      </v-btn>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

</template>

<script>
export default {
  name: 'MainContent',
  data () {
    return {
      sticky: false,
      panel: [],
      list: {
        生产报表: [
          {
            name: '原材料库存分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '包材库存分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '半成品库存分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '易耗品库存分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '产成品库存分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: 'WMS库存报表',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          }
        ],
        驻外分析: [
          {
            name: '销售分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '超市销售分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '驻外营运分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '特普分析',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '管理驾驶仓',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          }
        ],
        产销协调: [
          {
            name: '集团产销协调',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '物流分析报表',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          },
          {
            name: '销售自由报表',
            data: [
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              },
              {
                name: '二级菜单',
                data: [
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  },
                  {
                    name: '三级',
                    url: 'https://www.baidu.com'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
