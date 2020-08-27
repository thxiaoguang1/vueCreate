<template>
  <div style="margin-left:10px;margin-top:10px;overflow:hidden">
    <el-card>
      <atom-Table></atom-Table>
    </el-card>

  </div>
</template>

<script>
import AtomTable from './Components/AtomTable'
export default {
  components: { AtomTable },
  name: 'Atom',
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
</style>
