// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 安装 npm i pubsub -js
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
