<template>
  <div>
    <el-drawer :before-close="handleClose"
               :visible.sync="drawer"
               size="100%"
               style="margin:60px 0"
               direction="btt"
               :with-header="false">
      <div class="foundModal">
        <p class="sign"></p>
        <span>创建型号</span>

      </div>
      <div class="line"></div>
      <div>
        <div class="demo-drawer__content">
          <el-form :model="form"
                   size="small"
                   class="form-modal">
            <el-form-item label="设备类型"
                          :label-width="formLabelWidth">
              <el-select v-model="form.region1"
                         placeholder="请选择设备类型">
                <el-option label="交换机"
                           value="shanghai"></el-option>
                <el-option label="防火墙"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="设备厂商"
                          :label-width="formLabelWidth">
              <el-select v-model="form.region2"
                         placeholder="请选择设备类型">
                <el-option label="华为"
                           value="shanghai"></el-option>
                <el-option label="H3C"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="设备型号"
                          :label-width="formLabelWidth">
              <el-select v-model="form.region3"
                         placeholder="请选择设备类型">
                <el-option label="1"
                           value="shanghai"></el-option>
                <el-option label="2"
                           value="beijing"></el-option>
                <el-option label="3"
                           value="beijing"></el-option>
                <el-option label="4"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="访问方式"
                          :label-width="formLabelWidth">
              <el-select v-model="form.region4"
                         placeholder="请选择信息采集">
                <el-option label="1"
                           value="shanghai"></el-option>
                <el-option label="2"
                           value="beijing"></el-option>
                <el-option label="3"
                           value="beijing"></el-option>
                <el-option label="4"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="启用状态"
                          :label-width="formLabelWidth">
              <el-select v-model="form.region5"
                         placeholder="请选择信息采集">
                <el-option label="禁用"
                           value="shanghai"></el-option>
                <el-option label="启用"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="备注"
                          :label-width="formLabelWidth">
              <el-input type="textarea"
                        v-model="form.region6"></el-input>
            </el-form-item>

          </el-form>
        </div>

      </div>
      <div class="form-b">
        <el-button type="default"
                   size="small"
                   class="form-button"
                   @click="handleClose">取消</el-button>
        <el-button type="primary"
                   size="small"
                   class="form-button">保存</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'FoundModal',
  props: ["drawer", 'formDate', 'showModal'],
  data () {
    return {
      dialogVisible: false,
      formLabelWidth: '80px',
      form: {
        region1: '',
        region2: '',
        region3: '',
        region4: '',
        region5: '',
        region6: ''
      },
      tableData: [{
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机',
        manufacturer_model: 'HUAWEI  H3C',
        template_name: '2',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }, {
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机',
        manufacturer_model: 'HUAWEI  H3C',
        template_name: '2',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }, {
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机',
        manufacturer_model: 'HUAWEI  H3C',
        template_name: '2',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }, {
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机',
        manufacturer_model: 'HUAWEI  H3C',
        template_name: '2',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }]
    }
  },
  mounted () {
  },
  watch: {
    showModal () {
      this.form = this.formDate
    }
  },
  methods: {
    handleClose (done) {
      this.$emit('closeModal', false)
      this.$emit('showModal', '')
    },
    handleFound () {
      this.dialogVisible = true
    },
    handleCloseModal () {
      this.dialogVisible = false
    },
    close (val) {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="less">
.dialog-footer {
  width: 50%;
  margin: 0 auto;
  margin-top: -50px;
}
.form-b {
  display: flex;
  justify-content: flex-end;
  margin: 80px 20px 20px 0;
}
.foundModal {
  margin: 20px 50px;
  overflow: hidden;

  .sign {
    width: 2px;
    height: 20px;
    background: #409eff;
    float: left;
  }
  span {
    margin-left: 20px;
  }
}
.el-drawer {
}
.line {
  margin-bottom: 40px;
  width: 100%;
  height: 1px;
  background: #ccc;
}
.demo-drawer-list {
  width: 900px;
  height: 250px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.demo-drawer-list2 {
  width: 900px;
  float: left;
  margin-bottom: 20px;
}
.el-form {
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
}
.form-modal .el-form-item {
  width: 500px;
  float: left;
}
.el-select,
.el-input {
  width: 100%;
}
</style>
