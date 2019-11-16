const express = require('express');

const Router = express.Router();

const {
    create,
    find
} = require('../db/mongodb');

const {
    formatData
} = require('../utils');


const colName = 'user';
//校验用户名
Router.get('/check', async (req, res) => {
    let {
        username
    } = req.query;
    let result = await find(colName, {
        username
    });
    if (result.length) { //用户名已存在
        res.send(formatData({
            status: 0
        }));
    } else {
        res.send(formatData());
    }
    // res.send(result)
})
//注册
Router.post('/', async (req, res) => {
    let {
        username,
        password
    } = req.body;

    let result = await create(colName, {
        username,
        password
    })
    // console.log(6)

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})


module.exports = Router;