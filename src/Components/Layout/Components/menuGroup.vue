<template>
  <el-menu-item-group>
    <template slot="title"
              v-if="menu.lable!== null">
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.lable }}</span>
    </template>
    <template v-if="menu.childs!== null">
      <template v-for="menuItem in menu.childs">

        <template v-if="menuItem.type === 'item'">
          <menu-item :menu="menuItem"
                     :key="menuItem.id"></menu-item>
        </template>

        <template v-if="menuItem.type === 'submenu'">
          <sub-menu :menu="menuItem"
                    :key="menuItem.id"></sub-menu>
        </template>

      </template>
    </template>

  </el-menu-item-group>
</template>
<script>
import MenuItem from './menuItem.vue'
import SubMenu from './subMenu.vue'

export default {
  name: 'MenuGroup',
  props: {
    menu: {
      type: Object
    }
  },
  components: { MenuItem, SubMenu },
  data () {
    return {

    }
  }
}
</script>
<style>
</style>