<template>
  <v-main class="grey lighten-2" style="padding-top: 0px">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto"
                  max-width="500"
                  outlined
                  v-for="(first,fIndex) in list" :key="fIndex" v-if="fIndex%3===0">
            <v-card-title>{{ first.rname }}</v-card-title>
            <v-list subheader dense v-for="(second,sIndex) in first.children" :key="sIndex">
              <v-list-item-content  >
                <v-list-item-subtitle v-text="second.rname" ></v-list-item-subtitle>
              </v-list-item-content>
              <v-chip
                label
                outlined
                v-for="(third,tIndex) in second.children" :key="tIndex" @click="Jump(third.rurl)"
              >
                {{ third.rname }}
              </v-chip>
            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto"
            max-width="500"
            outlined
            v-for="(first,fIndex) in list" :key="fIndex" v-if="fIndex%3===1">
            <v-card-title>{{ first.rname }}</v-card-title>
            <v-list v-for="(second,sIndex) in first.children" :key="sIndex">
              <v-list-item-title>{{ second.rname }}</v-list-item-title>
              <v-chip
                label
                outlined
                v-for="(third,tIndex) in second.children" :key="tIndex" @click="Jump(third.rurl)"
              >
                {{ third.rname }}
              </v-chip>
            </v-list>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto"
            max-width="500"
            outlined
            v-for="(first,fIndex) in list" :key="fIndex" v-if="fIndex%3===2">
            <v-card-title>{{ first.rname }}</v-card-title>
            <v-list v-for="(second,sIndex) in first.children" :key="sIndex">
              <v-list-item-title>{{ second.rname }}</v-list-item-title>
              <v-list-item v-for="(third,tIndex) in second.children" :key="tIndex" @click="Jump(third.rurl)">
                <v-chip
                  label
                  outlined
                >
                  {{ third.rname }}
                </v-chip>
              </v-list-item>
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
      // window.location.href(url)
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
