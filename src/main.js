import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios';
axios.defaults.baseURL = '/api' // 开发本地代理
axios.defaults.headers.post['Contenst-Type'] = 'application/json;'
Vue.config.productionTip = false



Vue.prototype.$http = axios;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});