const menuList = [
  {
    id: 0,
    type: "item",
    index: "atom",
    lable: "原子操作",
    // icon: "el-icon-circle-plus-outline",
    route: {
      type: "inner",
      path: { name: "Atom", params: { id: "2" } }
    }
  },
  {
    id: 1,
    type: "submenu",
    index: "equipment",
    lable: "设备管理",
    // icon: "el-icon-circle-plus-outline",
    childs: [
      {
        id: 2,
        type: "item",
        index: "equipmentModel",
        lable: "设备管理",
        // icon: "el-icon-circle-plus-outline",
        route: {
          type: "inner",
          path: { name: "Equipment" }
        }
      },
      {
        id: 3,
        type: "item",
        index: "equipmentModelType",
        lable: "设备型号管理",
        // icon: "el-icon-circle-plus-outline",
        route: {
          type: "inner",
          path: { name: "equipmentModel" }
        }
      },
    ]
  }
]
export default { menuList }