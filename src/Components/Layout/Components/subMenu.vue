<template>
  <el-submenu v-if="menu.type === 'submenu'"
              :index="menu.index">

    <template slot="title"
              v-if="menu.lable !== null">
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.lable }}</span>
    </template>

    <template v-if="menu.childs !== null">

      <template v-for="menuItem in menu.childs">

        <template v-if="menuItem.type === 'item'">
          <menu-item :menu="menuItem"
                     :key="menuItem.id"></menu-item>
        </template>

        <template v-if="menuItem.type === 'submenu'">
          <sub-menu :menu="menuItem"
                    :key="menuItem.id"></sub-menu>
        </template>

        <template v-if="menuItem.type === 'group'">
          <menu-group :menu="menuItem"
                      :key="menuItem.id"></menu-group>
        </template>

      </template>
    </template>
  </el-submenu>
</template> 
<script>
import MenuItem from "./menuItem"
import MenuGroup from "./menuGroup"
export default {
  name: "subMenu",
  props: {
    menu: {
      type: Object
    }
  },
  components: { MenuItem, MenuGroup },
  data () {
    return {};
  }
};
</script> 
<style>
</style>