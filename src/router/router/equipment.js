var router = [
  {
    path: '/equipment/index',
    name: 'Equipment',
    component: resolve => require(['../../view/equipment/index.vue'], resolve),
    meta: { requireAuth: true },
  },
  {
    path: '/equipmentModel/index',
    name: 'equipmentModel',
    component: resolve => require(['../../view/equipmentModel/index.vue'], resolve),
    meta: { requireAuth: true },
  },
]
export default router