var router = [
  {
    path: '/atom/index',
    name: 'Atom',
    component: resolve => require(['../../view/atom/index.vue'], resolve),
    meta: { requireAuth: false },
  },
]
export default router