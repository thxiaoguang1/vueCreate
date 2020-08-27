<template>
  <el-menu-item :index="menu.index"
                :route="menu.route.path">
    <template>
      <i :class="menu.icon"></i><span slot="title">{{ menu.lable}}</span>
    </template>
  </el-menu-item>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: Object
    }
  },
  data () {
    return {}
  }
}
</script> 
<style scoped>
</style>