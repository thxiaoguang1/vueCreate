<template>
  <div>
    <el-dialog title="创建模版参数"
               :visible.sync="dialogVisible"
               :append-to-body='true'
               :showClose='false'
               width="80%">

      <span slot="footer">
        <el-form :model="form"
                 class="dialog-footer"
                 size="small">
          <el-form-item label="参数名称"
                        :label-width="formLabelWidth">
            <el-input v-model="form.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="参数编码"
                        :label-width="formLabelWidth">
            <el-input v-model="form.bm"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="参数类型"
                        :label-width="formLabelWidth">
            <el-select v-model="form.region"
                       style="width:100%"
                       placeholder="请选择设备类型">
              <el-option label="交换机"
                         value="shanghai"></el-option>
              <el-option label="防火墙"
                         value="beijing"></el-option>
              <el-option label="负载均衡"
                         value="beijing"></el-option>
              <el-option label="SDN控制器"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="数据字典"
                        :label-width="formLabelWidth">
            <el-select v-model="form.region"
                       style="width:100%"
                       placeholder="请选择设备类型">
              <el-option label="交换机"
                         value="shanghai"></el-option>
              <el-option label="防火墙"
                         value="beijing"></el-option>
              <el-option label="负载均衡"
                         value="beijing"></el-option>
              <el-option label="SDN控制器"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="操作类型"
                        style="width:100%"
                        :label-width="formLabelWidth">
            <el-input type="textarea"
                      v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="showClose">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ListModal',
  props: ['dialogVisible'],
  data () {
    return {
      form: {
        name: '',
        bm: '',
      },
      formLabelWidth: '80px',
    }
  },
  mounted () {
  },
  methods: {
    showClose () {
      this.$emit('listcloseModal', false)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
