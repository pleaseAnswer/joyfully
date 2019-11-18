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
import Load from '../pages/Load.vue'
import Service from '../pages/Service.vue'
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
            path: '/detail/:id',
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
            component: Cart,
            meta: {
                requiresAuth: true
            }

        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,

        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        }, {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'load',
            path: '/load',
            component: Load
        },
        {
            name: 'service',
            path: '/service',
            component: Service
        },
        {
            path: '/',
            redirect: '/index'
        }
    ]
})
//全局路由守卫
//to:目标路由
//from:当前路由
//一定要调用next()方法才可进入目标路由
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {

        //获取token
        let $store = router.app.$store
        let Authorization = Vue.prototype.$store.state.common.user.Authorization;
        if (Authorization) {
            //登录则放行
            next();
            //发送校验请求
            router.app.$axios.get('http://localhost:1910/verify', {
                headers: {
                    Authorization
                }
            }).then(({
                data
            }) => {
                // console.log('校验结果：', data)
                if (data.status === 0) {
                    $store.commit('logout'); //token过期，触发
                    next({
                        path: '/login',
                        query: {
                            redirectUrl: to.fullPath
                        }
                    })
                }
            })

        } else {
            //否则跳到登录页面
            next({
                path: '/login',
                query: {
                    redirectUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})



export default router;