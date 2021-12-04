import service from '@/utils/request';
/*
 * 一级分类添加
 */
export function AddFristCategory(data){
    return service.request({
        method: 'post',
        url: '/GetSms/',
        data: { }
    })
}