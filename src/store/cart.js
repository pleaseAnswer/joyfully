let cart = ({
    state: {
        menu: [{
                id: 1,
                img: "https://7-image.xidibuy.com/shop/shop.13008e1edc63727bfe4192c60c0b9fd00382f4c6fd345c153500842dd515aa3d.jpeg/1500x1500/360/webp",
                price1: 757.79,
                price2: 807.79,
                text: "英国URBANWOOL羊毛被子被芯 300g/㎡",
                qty: 5
            },
            {
                id: 2,
                img: "https://2-image.xidibuy.com/shop/shop.e7c5a4cb815e24ae5ca04ffa23e3b388c3e2c4a7286603883500842dd515aa3d.jpeg/360/webp",
                price1: 812.94,
                price2: 862.94,
                text: "澳大利亚原产Ecorenew儿童天丝被儿童被子婴幼儿被芯",
                qty: 8
            },
            {
                id: 3,
                img: "https://8-image.xidibuy.com/shop/shop.3f7cbe75f951bcfc89fb7f42e70707757733cd8d9057143f3500842dd515aa3d.jpeg/800x800/360/webp",
                price1: 693.60,
                price2: 650.60,
                text: "意大利原产DB HOME LINEN棉质床上四件套GRAZIA被罩200x230cm",
                qty: 15
            },
            {
                id: 4,
                img: "https://8-image.xidibuy.com/shop/shop.3f7cbe75f951bcfc89fb7f42e70707757733cd8d9057143f3500842dd515aa3d.jpeg/800x800/360/webp",
                price1: 693.60,
                price2: 650.60,
                text: "意大利原产DB HOME LINEN棉质床上四件套GRAZIA被罩200x230cm",
                qty: 15
            },
            {
                id: 5,
                img: "https://8-image.xidibuy.com/shop/shop.3f7cbe75f951bcfc89fb7f42e70707757733cd8d9057143f3500842dd515aa3d.jpeg/800x800/360/webp",
                price1: 693.60,
                price2: 650.60,
                text: "意大利原产DB HOME LINEN棉质床上四件套GRAZIA被罩200x230cm",
                qty: 15
            }
        ]
    },
    getters: {
        cartlength(state) {
            return state.menu.length;
        },
        totalPrice(state) {
            return state.menu.reduce(
                (prev, item) => prev + item.price1 * item.qty, 0
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