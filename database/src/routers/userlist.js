const express = require('express');

const Router = express.Router();

const { find, create } = require('../db/mongodb');


//展示数据在列表
Router.get('/show', async(req, res) => {
    let { skip, limit } = req.query;
    let result = "";
    skip = Number(skip);
    limit = Number(limit);
    if (skip > 0) {
        result = await find('user', {}, { skip, limit });
    } else {
        result = await find('user', {}, { limit });
    }
    //查询数据库
    res.send(result);
})

// 更新用户
Router.post("/:id", async(req, res) => {
    let { id } = req.params;

    let { username, password } = req.body;


    // 查询数据库,
    let result = await create("user", { id, password, username });
})
module.exports = Router;