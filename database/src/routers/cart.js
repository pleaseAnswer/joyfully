const express = require('express');

const Router = express.Router();

const {
    create,
    find,
    remove
} = require('../db/mongodb');

const {
    formatData
} = require('../utils');


const colName = 'cart';
//拿商品数据出来渲染
Router.get('/', async (req, res) => {
    //查询数据库
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

module.exports = Router;