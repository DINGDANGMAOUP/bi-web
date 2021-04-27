<template>
  <v-main class="grey lighten-2" style="width:99%;margin-top:15px;">
    <v-container>
      <v-row>
        <v-col
          v-for="(item,index) in list"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-toolbar flat>
            <v-toolbar-title align="center">{{ item.rname }}</v-toolbar-title>
          </v-toolbar>
          <v-expansion-panels
            accordion
            multiple>
            <v-expansion-panel
              v-for="(ch,i) in item.children"
              :key="i"
            >
              <v-expansion-panel-header>
                {{ch.rname}}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-btn block  v-for="(ch1,i1) in ch.children" :key="i1"   @click="Jump(ch1.rurl)">
                  {{ ch1.rname  }}
                </v-btn>
<!--                <v-expansion-panels accordion>-->
<!--                  <v-expansion-panel v-for="(ch1,i1) in ch.children" :key="i1">-->
<!--                    <v-expansion-panel-header>{{ ch1.rname }}</v-expansion-panel-header>-->
<!--                    <v-expansion-panel-content>-->
<!--                      <v-btn block   @click="Jump(ch1.rurl)">-->
<!--                        {{ ch1.rname }}-->
<!--                      </v-btn>-->
<!--                    </v-expansion-panel-content>-->
<!--                  </v-expansion-panel>-->
<!--                </v-expansion-panels>-->

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
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
      list: []
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
      window.open(url)
    }
  },
  created () {
    this.getTree()
  },
  mounted () {
    this.getTree()
  }
}
</script>

<style scoped>

</style>
