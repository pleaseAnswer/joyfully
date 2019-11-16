const express = require('express');

const Router = express.Router();

const {find} = require('../db/mongodb');

const {formatData} = require('../utils')

// get '/user' 返回所有用户
Router.get('/',async (req,res)=>{
    // 查询数据库
    let result = await find('fenlei');//得到一个posmise
    res.send(result)
    
})

module.exports=Router;