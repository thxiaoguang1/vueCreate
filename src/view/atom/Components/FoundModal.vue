<template>
  <div>
    <el-drawer :before-close="handleClose"
               :visible.sync="drawer"
               size="100%"
               style="margin:30px 0;"
               direction="btt"
               :with-header="false">
      <div class="modal">
        <div class="foundModal">
          <p class="sign"></p>
          <span>创建原子操作</span>

        </div>
        <div class="line"></div>
        <div>
          <div class="demo-drawer__content">
            <div class="title">基本参数</div>
            <el-form :model="form"
                     size="small"
                     style="float:left">
              <el-form-item label="操作名称"
                            :label-width="formLabelWidth">
                <el-input v-model="form.name"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="操作编码"
                            :label-width="formLabelWidth">
                <el-input v-model="form.bm"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="设备类型"
                            :label-width="formLabelWidth">
                <el-select v-model="form.region"
                           placeholder="请选择设备  类型">
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
                            :label-width="formLabelWidth">
                <el-select v-model="form.region2"
                           placeholder="请选择信息采集">
                  <el-option label="交换机"
                             value="shanghai"></el-option>
                  <el-option label="信息采集"
                             value="beijing"></el-option>
                  <el-option label="文件采集"
                             value="beijing"></el-option>
                  <el-option label="配置变更"
                             value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="l-border">
            <div class="demo-drawer-list">
              <div class="title"
                   style="float:left">模板参数</div>
              <el-button type="primary"
                         size="small"
                         style="float:right"
                         @click="handleFound">创建</el-button>
              <list-modal :dialogVisible='dialogVisible'
                          @listcloseModal='handleCloseModal'></list-modal>
            </div>
            <div class="demo-drawer-list2">
              <div style="overflow: hidden;">
                <div class="title"
                     style="float:left">模板参数</div>
                <el-button type="primary"
                           size="small"
                           style="float:right;margin-bottom:10px;">创建</el-button>
              </div>
              <el-table :data="tableData"
                        border
                        stripe
                        size='small'
                        style="margin-left: 15px;margin-top: 15px;width:98%">
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-popover placement="right"
                                @show="editRow(scope.$index, tableData)"
                                trigger="click"
                                visible-arrow="false">

                      <div>
                        <el-button type="primary"
                                   size="small"
                                   class="popo-button">编辑</el-button>
                        <el-button type="primary"
                                   size="small"
                                   class="popo-button">删除</el-button>
                        <el-button type="primary"
                                   size="small"
                                   class="popo-button">审批</el-button>
                      </div>
                      <i class="el-icon-s-tools"
                         slot="reference">
                      </i>
                      {{scope.row}}
                    </el-popover>

                  </template>
                </el-table-column>
                <el-table-column label="操作名称"
                                 prop="action_name">
                  <span slot-scope="scope">{{scope.row.action_name}}</span>
                </el-table-column>
                <el-table-column prop="action_type"
                                 label="操作类型">
                  <template slot-scope="scope">
                    <span>{{scope.row.action_type}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="equipment_type"
                                 label="设备类型">
                  <template slot-scope="scope">
                    <span>{{scope.row.equipment_type}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="manufacturer_model"
                                 label="厂商型号">
                  <template slot-scope="scope">
                    <span>{{scope.row.manufacturer_model}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="template_name"
                                 label="模版数量">
                  <template slot-scope="scope">
                    <span>{{scope.row.template_name}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="initiate_mode"
                                 label="启用状态">
                  <template slot-scope="scope">
                    <span>{{scope.row.initiate_mode}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="creator"
                                 label="创建人">
                  <template slot-scope="scope">
                    <span>{{scope.row.creator}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="approval_status"
                                 label="审批状态">
                  <template slot-scope="scope">
                    <span>{{scope.row.approval_status}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="action_time"
                                 label="操作时间">
                  <template slot-scope="scope">
                    <span>{{scope.row.action_time}}</span>
                  </template>
                </el-table-column>
              </el-table>
              <div class="form-b">
                <el-button type="default"
                           size="small"
                           class="form-button"
                           @click="handleClose">取消</el-button>
                <el-button type="primary"
                           size="small"
                           class="form-button">保存</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import ListModal from './ListModal'
export default {
  name: 'FoundModal',
  props: ["drawer", 'formDate', 'showModal'],
  components: { ListModal },
  data () {
    return {
      dialogVisible: false,
      formLabelWidth: '80px',
      form: {
        name: '',
        bm: '',
        region: '',
        region2: '',
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

<style lang="less" scoped>
.dialog-footer {
  width: 50%;
  margin: 0 auto;
  margin-top: -50px;
}
.form-b {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.title {
  margin-left: 11px;
  color: #606266;
  font-weight: bold;
  margin-bottom: 20px;
}
.foundModal {
  margin: 20px 50px;

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
.l-border {
  border-left: 1px solid #ccc;
  float: left;
}
.demo-drawer__content {
  float: left;
  width: 28%;
}
.line {
  margin-bottom: 20px;
  width: 100%;
  height: 1px;
  background: #ccc;
}
.demo-drawer-list {
  width: 900px;
  min-height: 250px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.demo-drawer-list2 {
  width: 900px;
  margin-bottom: 20px;
}
.el-drawer.btt {
  overflow: scroll !important;
}
</style>
