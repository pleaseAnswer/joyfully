import Vue from 'vue'
import App from './App.vue'
import router from './router'
import base from './assets/css/base.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@vant/touch-emulator';
import 'vant/lib/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

// import { } from 'vant';

Vue.use(base)
    .use(ElementUI);


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')