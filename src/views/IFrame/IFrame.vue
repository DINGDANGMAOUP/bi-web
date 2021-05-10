<template>
  <div class="iframe-container">
    <iframe src="https://bi.yinlu.com/reports/mobilereport/109%20%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%EF%BC%88HR%EF%BC%89/%E8%90%A5%E4%B8%9A%E9%83%A8%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E5%88%86%E6%9E%90?rs:Embed=true"  scrolling="no"    id="iframe" class="frame"   >
    </iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // src: '',
      src: 'https://bi.yinlu.com/reports/mobilereport/109%20%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%EF%BC%88HR%EF%BC%89/%E8%90%A5%E4%B8%9A%E9%83%A8%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E5%88%86%E6%9E%90?rs:Embed=true',
      loading: null
    }
  },
  methods: {
    // 获取路径
    resetSrc: function (url) {
      alert(JSON.stringify(url))
      this.src = url
      // this.load()
      if (self !== top) {
        top.location.href = window.location.href
      }
    },
    load: function () {
      document.querySelector('#main-container ')
    }
  },
  mounted () {
    /**
     * iframe-宽高自适应显示
     */
    function changeMobsfIframe () {
      this.resetSrc(this.$store.state.report)
      const mobsf = document.getElementById('iframe')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = (Number(deviceWidth) - 240) + 'px' // 数字是页面布局宽度差值
      mobsf.style.height = (Number(deviceHeight) - 64) + 'px' // 数字是页面布局高度差
    }

    changeMobsfIframe()

    window.onresize = function () {
      changeMobsfIframe()
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        // 如果是跳转到嵌套页面，切换iframe的url
        this.resetSrc(this.$store.state.report)
      }
    }
  }
}
</script>

<style lang="scss">
.iframe-container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;;
  bottom: 0px;
  .frame {
    width: 100%;
    height: 100%;
  }
}
</style>
