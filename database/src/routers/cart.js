const express = require('express');

const Router = express.Router();

const {
    create,
    find,
    remove,
    update
} = require('../db/mongodb');

const {
    formatData
} = require('../utils');


const colName = 'cart';
//查询数据库渲染页面
Router.get('/', async (req, res) => {

    let result = await find(colName);
    res.send(result)
})
//添加商品到购物车
Router.post('/', async (req, res) => {
    let goods = req.body;

    let result = await create(colName, goods)

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})
//删除商品
Router.delete('/:id', async (req, res) => {
    let {
        id
    } = req.params;
    //查询数据删除
    let result = await remove(colName, {
        id
    });
    if (result.deletedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }

})
//修改用户信息
Router.patch('/:id', async (req, res) => {
    // console.log(6)
    let {
        id
    } = req.params;
    let {
        qty
    } = req.body;
    //查询数据库
    let result = await update(colName, {
        id
    }, {
        qty
    });
    if (result.modifiedCount > 0) {
        res.send(formatData())
    } else {
        // console.log("====");
        res.send(formatData({
            status: 0
        }))
    }
})

module.exports = Router;