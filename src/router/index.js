import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '../pages/Index.vue';
import List from '../pages/List.vue';
import Nation from '../pages/Nation.vue';
import Classify from '../pages/Classify.vue';
import Cart from '../pages/Cart.vue';
import Mine from '../pages/Mine.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import Detail from '../pages/Detail.vue';
import Classifylist from '../pages/Classifylist.vue';




const router = new VueRouter({
    
    routes: [{
            name: 'index',
            path: '/index',
            component: Index
        }, {
            name: 'list',
            path: '/list',
            component: List
        }, {
            name: 'detail',
            path: '/detail',
            component: Detail
        },
        {
            name: 'nation',
            path: '/nation',
            component: Nation
        },
        {
            name: 'classify',
            path: '/classify',
            component: Classify
        },
        {
            name: 'classifylist',
            path: '/classifylist',
            component: Classifylist
        }, {
            name: 'cart',
            path: '/cart',
            component: Cart

        }, {
            name: 'mine',
            path: '/mine',
            component: Mine

        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        }, {
            name: 'login',
            path: '/login',
            component: Login
        }, {
            path: '/',
            redirect: '/index'
        }
    ]
})



export default router;