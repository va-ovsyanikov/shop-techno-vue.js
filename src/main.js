import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import {router} from "./router/router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style.less'

Vue.config.productionTip = false


Vue.use(ElementUI);

new Vue({
  
  render: h => h(App),
  store,
  router
}).$mount('#app')
