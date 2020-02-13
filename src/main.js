import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'
// 引入全局样式文件
import '@/styles/reset.css'

import { Toast } from 'vant'
// 将会在Vue实例上挂载成员，以$开头，如下面的use,将来可以this.$toast来使用
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
