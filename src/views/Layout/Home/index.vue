<template>
  <div className="container">
  <v-app id="inspire">
<!--    系统栏-->
<!--    <SystemBar/>-->
<!--    应用栏-->
    <AppBar/>
<!--    菜单栏-->
<!--    <NavBar/>-->
<!--    网格主区域-->
    <MainContent/>
  </v-app>
  </div>
</template>

<script>
import SystemBar from '@/views/Layout/HeadBar/SystemBar'
import AppBar from '@/views/Layout/HeadBar/AppBar'
// import NavBar from '@/views/Layout/NavBar'
import MainContent from '@/views/Layout/MainContent'
export default {
  name: 'Home',
  components: {
    SystemBar,
    AppBar,
    // NavBar,
    MainContent
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
// background: rgba(224, 234, 235, 0.1);
}
</style>
