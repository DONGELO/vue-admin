import { MessageBox } from 'element-ui';
export default {
    install (Vue, options) {
        Vue.prototype.confrim = (params) => {
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
    }
}