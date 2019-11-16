const express=require('express');

const Router=express.Router();

const {find}=require('../db/mongodb');

const {formatData}=require('../utils');

// const colName='sy_single_list';

// get '/home' 返回所有数据
Router.get('/sy_lunbo',async (req,res)=>{
    //查询数据库
    let result = await find('sy_lunbo');//得到一个promise对象
    res.send(formatData({data:result}))
})

Router.get('/sy_santu',async (req,res)=>{
    //查询数据库
    let result = await find('sy_santu');//得到一个promise对象
    res.send(formatData({data:result}))
})

Router.get('/sy_single_list',async (req,res)=>{
    //查询数据库
    let result = await find('sy_single_list');//得到一个promise对象
    res.send(formatData({data:result}))
})

Router.get('/sy_sublist',async (req,res)=>{
    //查询数据库
    let result = await find('sy_sublist');//得到一个promise对象
    res.send(formatData({data:result}))
})
Router.get('/sy_bottomlist',async (req,res)=>{
    //查询数据库
    let result = await find('sy_bottomlist');//得到一个promise对象
    res.send(formatData({data:result}))
})

module.exports=Router;