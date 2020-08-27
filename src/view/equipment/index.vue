<template>
  <div style="margin-left:10px;margin-top:10px;overflow:hidden">
    <el-card>
      <equipment-table></equipment-table>
    </el-card>

  </div>
</template>

<script>
import EquipmentTable from './Components/EquipmentTable'

export default {
  name: 'equipment',
  components: { EquipmentTable },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
</style>
