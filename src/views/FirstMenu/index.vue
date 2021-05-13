<template>
  <v-row style="padding-top: 10%;">
    <v-col
      v-for="(item,index) in list"
      :key="index"
      cols="4"
    >
      <v-card  color="blue lighten-3"  height="100" @click="push">
        <v-card-text   class="headline font-weight-bold">
          {{ item.rname }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {len} from 'vuelidate/lib/validators/common'

export default {
  data () {
    return {
      sheet: false,
      list: []
    }
  },
  methods: {
    push () {
      this.$router.push('/first')
    },
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
    }
  },
  created () {
    this.getTree()
  }
}
</script>

<style scoped>

</style>
