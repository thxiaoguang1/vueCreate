<template>
  <div class="layout">
    <TheMenu></TheMenu>
    <el-container>
      <TheHeader></TheHeader>
    </el-container>
    <div class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import TheHeader from './Components/TheHeader'
import TheMenu from './Components/menu'
import Hamburger from '../Hamburger'
export default {
  components: {
    TheHeader,
    TheMenu
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.hamburger-container {
  line-height: 58px;
  height: 50px;
  float: left;
  padding: 0 10px;
}
.main {
  margin-left: 200px;
}
</style>
