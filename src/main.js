import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import base from './assets/css/base.css'
//使用Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@vant/touch-emulator';
import 'vant/lib/index.css';
//使用axios
import axios from 'axios';
import {
  Icon,
  Tabbar,
  TabbarItem,
  SubmitBar,
  Checkbox,
  CheckboxGroup,Field,Search
} from 'vant';



Vue.use(base).use(Icon).use(Tabbar).use(TabbarItem).use(SubmitBar)
.use(Checkbox).use(CheckboxGroup).use(Field).use(Search);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')