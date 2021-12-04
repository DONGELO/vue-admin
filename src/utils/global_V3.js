import { MessageBox } from 'element-ui';
import { ref } from '@vue/composition-api'

export default function global(){
    const str = ref( ' ' )
    const confrim = ( params ) => {
        MessageBox.confirm(params.content, params.tip || '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: params.type || 'warning',
            center: true
          }).then(() => {
              if( params.fn ) {
                params.fn(params.id)
              }
            /* root.$message({
              type: 'info',
              message: '已取消删除'
            }); */
        });
    }
    return {
        str, confrim
    }
}