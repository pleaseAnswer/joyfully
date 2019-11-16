// // Vuex的数据，刷新后会消息
// // 所以刷新后先获取本地存储的数据
// let user = localStorage.getItem('user');
// try {
//     user = JSON.parse(user) || {};
// } catch (err) {
//     user = {}
// }
import axios from 'axios';
export default {
    state: {
        // 用户信息
        user: ''
    },
    mutations: {
        login(state, {
            Authorization,
            username
        }) {
            state.user = {
                Authorization,
                username
            };
            // 存入本地存储
            localStorage.setItem('user', JSON.stringify({
                Authorization,
                username
            }))
        },
        logout(state) {
            state.user = '';
            // 清除本地存储
            localStorage.removeItem('user');
        }
    },
    actions: {
        async checkLogin(context) {
            let user = localStorage.getItem('user');
            if (!user) {
                context.commit('logout');
            } else {
                user = JSON.parse(user);

                //发起axios请求，校验token是否过期

                let {
                    data
                } = await axios.get('http://localhost:1910/verify', {
                    headers: {
                        Authorization: user.Authorization
                    }
                })
                //防止刷新Vuex数据丢失的问题
                if (data.status === 1) {
                    context.commit('login', user);
                } else {
                    context.commit('logout');
                    return 400
                }
            }
            return 200;
        }
    }
}