import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import login from '../components/login.vue';
import mangeList from '../components/mangeList.vue';
import goodsList from '../components/goodsList.vue';
import addGoods from '../components/addGoods.vue';
import editGoods from '../components/editGoods.vue';
import userList from '../components/userList.vue';
import addUser from '../components/addUser.vue';
import editUser from '../components/editUser.vue';
import orderList from '../components/orderList.vue';
import Login from '../components/Login.vue';

const router = new VueRouter({
    routes: [{
        name: 'mangeList',
        path: '/mangeList',
        component: mangeList
    }, {
        name: 'goodsList',
        path: '/goodsList',
        component: goodsList
    }, {
        name: 'addGoods',
        path: '/addGoods',
        component: addGoods
    }, {
        name: 'editGoods',
        path: '/editGoods',
        component: editGoods
    }, {
        name: 'userList',
        path: '/userList',
        component: userList
    }, {
        name: 'addUser',
        path: '/addUser',
        component: addUser
    }, {
        name: 'editUser',
        path: '/editUser',
        component: editUser
    }, {
        name: 'orderList',
        path: '/orderList',
        component: orderList
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }]
})

// router.beforeEach((to,from,next)=>{

// })

export default router;