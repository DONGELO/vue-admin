<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" size="mini">
      <el-row >
        <el-col :span="4">
          <el-form-item label="类型：">
            <el-select v-model="categoryValue" placeholder="请选择" style="width: 120px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="日期：">
            <el-date-picker
              v-model="dataValue"
              style="width: 340px"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="关键字：">
            <el-select v-model="search_key" style="width: 100px">
              <el-option
              v-for="item in searchOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="">
            <el-input v-model="search_keyWork" placeholder="请输入内容" style="width: 120px; margin-left: -20px;"></el-input>
            <el-button type="danger" style="margin-left:10px;">搜索</el-button>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item label="" class="pull-right">
            <el-button type="danger" style="margin-left:10px;" @click="dialog_info = true">新增</el-button>
          </el-form-item>
        </el-col>

      </el-row>
    </el-form>
    <div class="black-space-30"></div>
    <!-- 表格数据 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="标题" width="460"></el-table-column>
      <el-table-column prop="category" label="类型" width="130"></el-table-column>
      <el-table-column prop="data" label="日期" width="237"></el-table-column>
      <el-table-column prop="user" label="管理人" width="115"></el-table-column>
      <el-table-column  label="操作">
        <template slot-scope="">
          <el-button  size="mini"  type="danger" @click="deleteItem">删除</el-button>
          <el-button size="mini" type="success" @click="dialog_info = true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="black-space-30"></div>
    <!-- 批量删除和分页 -->
    <el-row>
      <el-col :span="12">
        <el-button size="mini" @click="deleteAll">批量删除</el-button>
      </el-col>
      <el-col :span="12">
          <el-pagination
              class="pull-right"
              background
              layout="total, prev, pager, next"
              :total="1000">
          </el-pagination>
      </el-col>
    </el-row>

    <!-- 新增弹窗 -->
    <dialog-info :flag="dialog_info" @close="closeDialog" />

  </div>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
import dialogInfo from './dialog/info.vue'
import global from '@/utils/global_V3'
export default {
    name: 'Info',
    components: {
      dialogInfo,
      global
    },
    setup ( props, { root } ) {
      const { confrim } = global()
      /* 数据 */
      const dialog_info = ref( false )
      const categoryValue = ref('')
      const dataValue = ref('')
      const search_key = ref('id')
      const search_keyWork = ref('')
      const options = reactive ([
        { value: 1, label: '国际信息' }, 
        { value: 2,  label: '国内信息' }, 
        { value: 3, label: '行业信息' },
      ]);
      const searchOption = reactive([
        { value: "id", label: "Id" },
        { value: "title", label: "标题" },
      ]);
      /* 表格数据 */
      const tableData = reactive([
        {
          title: '上课大胜靠德是的是的是的',
          category: '国内信息',
          data: '2019-09-10 19:31:31',
          user: '管理员',
        },
        {
          title: '上课大胜靠德是的是的是的',
          category: '国内信息',
          data: '2019-09-10 19:31:31',
          user: '张靓颖',
        },
        {
          title: '上课大胜靠德是的是的是的',
          category: '国内信息',
          data: '2019-09-10 19:31:31',
          user: '迪丽热巴',
        },
        {
          title: '上课大胜靠德是的是的是的',
          category: '国内信息',
          data: '2019-09-10 19:31:31',
          user: '赵丽颖',
        },
      ])

      const handleSizeChange = ( val ) => {
        console.log( val )
      }

      const handleCurrentChange = ( val ) => {
        console.log(val)
      }

      const closeDialog = () => {
        dialog_info.value = false
      }
      /*  删除 */
      const deleteItem = ( ) => {
        confrim({
          content: '确认删除当前信息，确认后将无法恢复！！',
          tip: '警告',
          fn: confirmDelete,
          id: '222222'
        })
      }
      /*  批量删除 */
      const deleteAll = ( ) => {
        confrim({
          content: '确认删除选择的数据，确认后无法恢复！！',
          type: 'success',
          fn: confirmDelete,
          id: '1111111'
        })
      }

      const confirmDelete = ( value ) => {
        console.log(value)
      }

      return {
        // ref
        categoryValue, dataValue,  search_key, search_keyWork, dialog_info,
        // reactive
        options, searchOption, tableData,
        //方法
        handleSizeChange, handleCurrentChange, closeDialog, deleteItem, deleteAll, confirmDelete
      }
    }
}
</script>

<style lang="scss">

</style>