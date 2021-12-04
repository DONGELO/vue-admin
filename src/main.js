import Vue from 'vue'
import vueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//import global from '@/utils/global'

//icons
import './icons'

//引入scss样式
import '@/styles/main.scss'

Vue.use(ElementUI)
Vue.use(vueCompositionApi)
//Vue.use(global)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
