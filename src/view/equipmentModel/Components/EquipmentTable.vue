<template>
  <div>
    <el-row :gutter="24">
      <el-col :span='6'
              class="button">
        <el-input v-model="input"
                  placeholder="请输入内容"
                  size="small"
                  class="button"></el-input>
      </el-col>
      <el-col :span='2'>
        <el-button type="primary"
                   size="small"
                   @click="beforeInit">搜索</el-button>
      </el-col>
      <el-col :span='2'>
        <el-button type="primary"
                   size="small">列表搜索</el-button>
      </el-col>
      <el-col :span='2'
              :offset="7">
        <el-button type="primary"
                   size="small">显/隐列</el-button>
      </el-col>
      <el-col :span='2'>
        <el-button type="primary"
                   class="button"
                   size="small">固定</el-button>
      </el-col>
      <el-col :span='2'
              class="button">
        <el-button type="primary"
                   size="small"
                   @click="handleFound">创建</el-button>
        <found-modal :drawer='drawer'
                     @closeModal="close"
                     :formDate="formDate"
                     :showModal="showModal"></found-modal>
      </el-col>
    </el-row>

    <el-table :data="tableData"
              border
              stripe
              size='small'
              style="margin-left: 15px;margin-top: 15px;">
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <i class="el-icon-s-tools"
             style="color">
          </i> -->
          <el-popover placement="right"
                      class="popover"
                      trigger="click"
                      visible-arrow="false">

            <div>
              <el-button type="primary"
                         size="small"
                         class="popo-button"
                         @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="primary"
                         size="small"
                         class="popo-button">删除</el-button>
              <!-- <el-button type="primary"
                         size="small"
                         class="popo-button">审批</el-button> -->
            </div>
            <i class="el-icon-s-tools"
               slot="reference">
            </i>
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
  </div>
</template>

<script>
import FoundModal from "./FoundModal";
import { atomicOperations } from '../../../api/atomicOperations'
export default {
  name: 'EquipmentTable',
  components: { FoundModal },
  data () {
    return {
      input: '',
      drawer: false,
      formDate: {
        region1: '',
        region2: '',
        region3: '',
        region4: '',
        region5: '',
        region6: ''
      },
      showModal: '',
      tableData: [{
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机eq',
        manufacturer_model: 'HUAWEI  H3C',
        template_name: '1',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }, {
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机eq',
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
        template_name: '3',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }, {
        action_name: '修改端口号',
        action_type: '变更',
        equipment_type: '交换机',
        manufacturer_model: 'HUAWEI  H3C',
        template_name: '4',
        initiate_mode: '启用',
        creator: '超级管理员',
        approval_status: '通过',
        action_time: '2016-05-02',
      }],
    }
  },
  mounted () {
    this.beforeInit();
  },
  methods: {
    action () {
    },
    handleFound () {
      this.drawer = true
      this.showModal = 'add'
      this.formDate = {
        region1: '',
        region2: '',
        region3: '',
        region4: '',
        region5: '',
        region6: ''
      }
    },
    handleEdit (val) {
      this.formDate = {
        region1: '1',
        region2: '2',
        region3: '3',
        region4: '4',
        region5: '5',
        region6: '6'
      }
      this.showModal = 'edit'
      this.drawer = true
    },
    close (val) {
      this.drawer = val
      this.showModal = ''
    },
    beforeInit () {
      atomicOperations()
        .then(res => {
          console.log(res, "222");
        })
        .catch(err => { });
    }
  },
}
</script>

<style lang="less" scoped>
.popo-button {
  margin-left: 0 !important;
  margin-right: 15px !important;
}
.el-popover .popover {
  max-width: 50px !important;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.button {
  margin-left: 10px;
}
.el-icon-s-tools {
  color: rgba(2, 167, 240, 1);
  cursor: pointer;
}
</style>
