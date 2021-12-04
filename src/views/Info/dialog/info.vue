<template>
      <!-- 新增弹窗 -->
    <el-dialog title="新增" :visible.sync="dialog_info_flag" @close="close" width="580px">
        <el-form :model="form">
            <el-form-item label="分类：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="标题：" :label-width="formLabelWidth">
            <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="概括：" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import { reactive, ref, watch } from '@vue/composition-api'
export default {
    name: 'dialogInfo',
    props: {
        flag: {
            type: Boolean,
            default: false
        }
    },
    setup( props, { emit }){
        const dialog_info_flag = ref( false )
        const centerDialogVisible = ref( false )
        const formLabelWidth = ref( '70px' )
        const form = reactive({
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        })
        //watch( () =>dialog_info_flag.value = props.flag)
        /* methods */
        const close = () =>{
            dialog_info_flag.value = false
            emit( 'close', false)
        }

        return {
            // ref
            dialog_info_flag, formLabelWidth, centerDialogVisible,
            // reactive
            form,
            // methods
            close,
        }
    },
    /* watch */
    watch:{
        flag: {
            handler(newValue, oldValue){
                this.dialog_info_flag = newValue
            }
        }
    }
}
</script>

<style>

</style>