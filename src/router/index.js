import VueRouter from 'vue-router'
import Vue from 'vue'
import atomRouter from './router/atom'
import equipmentRouter from './router/equipment'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
/* Layout */
import Layout from '../Components/Layout/index'
var router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../view/login/index.vue'], resolve),
    },
    {
      path: '/',
      component: Layout,
      children: [...atomRouter],
      redirect: '/atom/index',
      meta: { requireAuth: true }
    },
    {
      path: '/equipment',
      component: Layout,
      children: [...equipmentRouter],
      redirect: '/equipment',
      meta: { requireAuth: true }
    },
    {
      path: '*',
      name: '404',
      component: resolve => require(['../view/errors/404.vue'], resolve),
      children: [],
      meta: { requireAuth: false }
    }
  ]
})
router.beforeEach((to, from, next) => {
  next();
})
export default router;