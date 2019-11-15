const express = require("express");
const Router = express.Router();

const { find } = require("../db/mongodb");
const { formatData } = require('../utils')


const colName = 'guojiaguan';

// get'./uers'返回所有用户
Router.get("/", async(req, res) => {

    // 需要查询数据库所有数据返回
    let result = await find(colName)
    res.send(formatData({ data: result }));
})
module.exports = Router