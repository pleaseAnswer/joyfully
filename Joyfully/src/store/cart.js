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
                (prev, item) => prev + item.price * item.qty, 0
            )
        }
    },
    mutations: {
        //删除单个商品
        removeCart(state, id) {
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
        }
    }
})
export default cart;