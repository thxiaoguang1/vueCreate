<template>
  <div class="sidebar-container"
       :class="{'collapse-width': isCollapse}">
    <div class="logo"
         :class="{'collapse-logo': isCollapse}">
      织网自动化
    </div>
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="$route.path.replace('/', '')"
             class="el-menu-vertical-demo menu"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             :background-color="menuSetting.backgroundColor"
             :text-color="menuSetting.textColor"
             :active-text-color="menuSetting.activeTextColor"
             :unique-opened="menuSetting.uniqueOpened"
             :router="menuSetting.router">
      <template v-for="menuItem in menuList">
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
    </el-menu>
  </div>
</template>
<script>
import MenuItem from "./menuItem.vue";
import SubMenu from "./subMenu.vue";
import MenuGroup from "./menuGroup";
import menuList from '../../../menu/index'
export default {
  components: { MenuItem, SubMenu, MenuGroup },
  data () {
    return {
      isCollapse: false, //菜单切换 
      menuSetting: {
        backgroundColor: "rgb(48, 49, 51)",
        textColor: "#fff",
        activeTextColor: "#409EFF",
        defaultOpeneds: [],
        uniqueOpened: true,
        router: true,   //直接使用 index 进行路由跳转
        collapseTransition: true
      },
      menuList: menuList.menuList
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted () {
  }
};
</script> 
<style lang="less" scoped>
.collapse-logo {
  font-size: 18px !important;
}
.collapse-width {
  width: 64px !important;
}
.collapse-logo {
  font-size: 18px !important;
}
.sidebar-container .el-menu {
  overflow-y: hidden !important;
}
.sidebar-container {
  width: 200px;
  height: 800px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: width 0.28s;
  z-index: 1001;
  overflow: hidden;
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 180px;
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
    overflow-y: auto;
  }
  .logo {
    width: 100%;
    height: 60px;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
    background-color: rgb(48, 49, 51);
    color: #fff;
  }
  .el-menu-item.is-active {
    color: #fff;
  }
  // .el-submenu__title:hover {
  //   background: #409eff !important;
  // }
  // .menu > .el-submenu > .el-submenu__title:hover {
  //   background: #409eff !important;
  // }
}
</style>