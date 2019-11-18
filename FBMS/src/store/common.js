// // Vuex的数据，刷新后会消息
// // 所以刷新后先获取本地存储的数据
let user = localStorage.getItem('user');
try {
    user = JSON.parse(user) || {};
} catch (err) {
    user = {}
}
export default {
    state: {
        // 用户信息
        user
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
    }
}