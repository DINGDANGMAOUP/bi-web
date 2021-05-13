<template>
  <v-main class="grey lighten-2" style="padding-top: 0px">
    <v-container>
      <v-row style="position: relative" >
        <v-col>
          <v-card class="pink lighten-2 mx-auto"
                  outlined
                  v-for="(first,fIndex) in list"
                  :key="fIndex"
                  v-if="fIndex%3===0"
          >
<!--            <v-card-title>{{ first.rname }}</v-card-title>-->
            <v-list
              class="pink lighten-5 "
              nav
              subheader
              v-for="(second,sIndex) in first.children"
              :key="sIndex">
              <!--               <v-list-item  align="left">-->
              <!--                 <v-card-text align="left" v-text="second.rname"></v-card-text>-->
              <!--              <v-list-item-title v-text="second.rname"></v-list-item-title>-->
              <!--               </v-list-item>-->
              <v-list-group
                :value="true"
              >
                <template
                  v-slot:activator
                >
                  <v-list-item align="left">
                    <v-list-item-title v-text="second.rname"></v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item class="pa-0" v-for="(third,tIndex) in second.children" :key="tIndex"
                             @click="Jump(third.rurl)">
                  <v-icon>mdi-file-table-outline</v-icon>
                  <v-list-item-subtitle class="text-sm-left" align="left" v-text="third.rname"></v-list-item-subtitle>
                </v-list-item>
              </v-list-group>

            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto indigo lighten-2"
            outlined
            v-for="(first,fIndex) in list" :key="fIndex" v-if="fIndex%3===1">
<!--            <v-card-title>{{ first.rname }}</v-card-title>-->
            <v-list
              class="indigo lighten-5"
              nav
              subheader
              v-for="(second,sIndex) in first.children"
              :key="sIndex">
              <v-list-group
                :value="true"
              >
                <template
                  v-slot:activator
                >
                  <v-list-item align="left">
                    <v-list-item-title v-text="second.rname"></v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item v-for="(third,tIndex) in second.children" :key="tIndex" @click="Jump(third.rurl)">
                  <v-icon>mdi-file-table-outline</v-icon>
                  <v-list-item-subtitle align="left" v-text="third.rname"></v-list-item-subtitle>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto light-green lighten-2"
            outlined
            v-for="(first,fIndex) in list" :key="fIndex" v-if="fIndex%3===2">
<!--            <v-card-title>{{ first.rname }}</v-card-title>-->
            <v-list
              class="light-green lighten-5"
              nav
              subheader

              v-for="(second,sIndex) in first.children"
              :key="sIndex">
              <v-list-group
                :value="true"
              >
                <template v-slot:activator>
                  <v-list-item align="left">
                    <v-list-item-title v-text="second.rname"></v-list-item-title>
                  </v-list-item>
                </template>
                <v-list-item v-for="(third,tIndex) in second.children" :key="tIndex" @click="Jump(third.rurl)">
                  <v-icon>mdi-file-table-outline</v-icon>
                  <v-list-item-subtitle align="left" v-text="third.rname"></v-list-item-subtitle>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <!--      <v-row  >-->
      <!--        <v-col-->
      <!--          v-for="(item,index) in list"-->
      <!--          :key="index"-->
      <!--          cols="12"-->
      <!--          sm="4"-->
      <!--          flat-->
      <!--          tile-->
      <!--        >-->
      <!--          <v-toolbar flat>-->
      <!--            <v-toolbar-title >{{ item.rname }}</v-toolbar-title>-->
      <!--          </v-toolbar>-->
      <!--          <v-expansion-panels-->
      <!--            accordion-->
      <!--            >-->
      <!--            <v-expansion-panel-->
      <!--              multiple-->
      <!--              v-for="(ch,i) in item.children"-->
      <!--              :key="i"-->
      <!--            >-->
      <!--              <v-expansion-panel-header>-->
      <!--                {{ch.rname}}-->
      <!--              </v-expansion-panel-header>-->
      <!--              <v-expansion-panel-content align="left" >-->
      <!--                <v-list>-->
      <!--                 <v-list-item-->
      <!--                   class="grey&#45;&#45;text mb-2"-->
      <!--                   v-for="(ch1,i1) in ch.children" :key="i1"   @click="Jump(ch1.rurl)"-->
      <!--                 >-->
      <!--                   <v-icon>mdi-file-table</v-icon>-->
      <!--                   <v-list-item-content v-text="ch1.rname"></v-list-item-content>-->
      <!--                 </v-list-item>-->
      <!--                </v-list>-->

      <!--              </v-expansion-panel-content>-->
      <!--            </v-expansion-panel>-->
      <!--          </v-expansion-panels>-->
      <!--        </v-col>-->
      <!--      </v-row>-->
      <v-card-text style="position: fixed;z-index: 600;right: 0px; bottom: 40px;">
      <v-fab-transition>
        <v-btn
          v-if="btnFlag"
          small
          color="green"
          fab
          dark
          absolute
          bottom
          right
          class="my-2"
          @click="backTop"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
      </v-card-text>
    </v-container>
  </v-main>

</template>

<script>
import {len} from 'vuelidate/lib/validators/common'

export default {
  name: 'NavBar',
  data () {
    return {
      sticky: false,
      panel: [],
      list: [],
      btnFlag: false,
      // 记录屏幕滑动的值
      scrollTop: 0
    }
  },
  methods: {
    getTree () {
      let username = {username: localStorage.getItem('username')}
      this.$api.report.getReports(username).then((res) => {
        this.list = res.data
        if (len(this.list) === 0) {
          alert('无菜单权限')
          localStorage.clear()
          sessionStorage.clear()
          this.$store.commit('menuRouteLoaded', false)
          this.$router.push('/login')
        }
      }).catch((res) => {
        alert('无菜单权限')
        localStorage.clear()
        sessionStorage.clear()
        this.$store.commit('menuRouteLoaded', false)
        this.$router.push('/login')
      })
    },
    Jump (url) {
      this.$store.commit('setName', url)
      // alert(JSON.stringify(url))
      // this.$router.push({path: '/iframe', query: {id: url}})
      // this.$router.push('/iframe')
      // window.location.href(url)
      window.open(url)
    },

    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 500) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }

  },
  created () {
    this.getTree()
  },
  mounted () {
    this.getTree()
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style scoped>

</style>
