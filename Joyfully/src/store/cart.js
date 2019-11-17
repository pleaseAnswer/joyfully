import axios from 'axios';
let cart = ({
    state: {
        menu: []
    },
    getters: {
        cartlength(state) {
            return state.menu.length;
        },
        totalPrice(state) {
            return state.menu.reduce(
                (prev, item) => prev + item.price * 0.8 * item.qty, 0
            )
        }
    },
    mutations: {
        //删除单个商品
        async removeCart(state, id) {

            await axios.delete(`http://localhost:1910/cart/${id}`);
            state.menu = state.menu.filter(item => item.id != id)
        },
        //修改数量
        changQty(state, payload) {
            state.menu.forEach(item => {
                if (item.id === payload.id) {
                    item.qty = payload.qty
                }
            })
        },
        //添加到购物车
        addCart(state, goods) {
            state.menu.unshift(goods)
        },
        async getgoods(state) {
            let {
                data
            } = await axios.get('http://localhost:1910/cart');
            state.menu = data;
        }
    }
})
export default cart;