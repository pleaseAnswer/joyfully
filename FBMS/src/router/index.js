import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import login from '../components/login.vue';
import mangeList from '../components/mangeList.vue';
import goodsList from '../components/goodsList.vue';
import userList from '../components/userList.vue';
import orderList from '../components/orderList.vue';
import Login from '../components/Login.vue';

const router = new VueRouter({
    routes: [{
        name: 'mangeList',
        path: '/mangeList',
        component: mangeList,
        meta: {
            requiresAuth: true
        }
    }, {
        name: 'goodsList',
        path: '/goodsList',
        component: goodsList,
        meta: {
            requiresAuth: true
        }
    }, {
        name: 'userList',
        path: '/userList',
        component: userList,
        meta: {
            requiresAuth: true
        }
    },  {
        name: 'orderList',
        path: '/orderList',
        component: orderList,
        meta: {
            requiresAuth: true
        }
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }, {
        path: '/',
        redirect: '/login'
    }]
})

//全局路由守卫
//to:目标路由
//from:当前路由
//一定要调用next()方法才可进入目标路由
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {

        //获取token
        let $store = router.app.$store
        let Authorization = $store.state.common.user.Authorization;
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