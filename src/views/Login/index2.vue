Vue指令

v-model
在表单控件或者组件上创建双向绑定
input、selec、textarea、component

v-for (简单理解就是数据循坏) 基于源数据多次渲染元素或模板块
基础模式：
  <div v-for="item in items" :key="item.id">
      {{item.text}}
  </div>

  需索引
  <div v-for="(item, index) in items" :key="item.id">
      {{item.text}}
  </div>

  v-show与v-if区别
   v-show：在元素中添加display, 隐藏DOM元素
   v-if：直接删除DOM元素，DOM元素中有接口时，当v-if值为true时，会请求接口

   v-bind 绑定数据
   绑定方式：v-band:class 或 :class

   邮箱验证正则
   验证邮箱：let reg = /^([a-zA-Z] | [0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
   字母+数字：let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6, 20}$/
   字母或数字： let reg = /^[a-z0-9]{6}$/
   过滤特殊字符：
    export function stripscript(str){
     var pattern = new RegExp("['~!@#^&*()=|{}':;',\\[\\].<>/?~! @#￥__&* () &;-|{}【】‘；：“” '。，、？]")
     var rs = "";
     for(var i = 0; i < str.length; i++){
         rs = rs + str.substr(i, 1).replace(pattern, '');
     }
        return rs;
    }

    vue3.0
    依赖Composition API
    依赖：
    npm install @vue/composition-api --save

    Main.js：
    import vueCompositionApi from '@vue/composition-api'
    Vue.use(vueCompositionApi)

    VUE3.0新特性语法
    setup函数
    export default{
        setup(props, context){
            context.attrs
            context.slots
            context.parent
            context.root
            context.emit
            ............
        }
    }

    Reactive ( 声明单一对象时使用 )
    取得一个对象并返回原始对象的响应式数据处理
    const obj = reactive({ conut: 0 })

    ref ( 声明基础数据类型变量时使用 )
    const number = ref( 0 )
    获取方式：number.value

    isRef 和 toRefs
    检查一个对象是否是ref对象
    const unwrapped = isRef(foo) ? foot.value : foo
    ---------
    function useMoousePosition(){
        const pos = reactive({
            x: 0,
            y: 0
        })
        return toRefs(pos)
    }
    const { x, y } = useMoousePosition()
    toRefs将reactive对象转换为普通对象，并保证对象解构或扩展运算符不会丢失原有响应式对象的响应

watch 侦听器
const count = ref(100)
watch(() =>count.value.() =>{
    console.log('count数值发生变化了')
})
count.value = 200;  //count重新赋值，watch则被执行

Computed
可传入get和set, 用于定义可更改的计算属性
const count = ref(1)
const plusOne = computed({
    ge: () => count.value +1
    set: () => (count.value +1)
})
pushOne.value = 1
console.log(count.value)

