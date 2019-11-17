const express=require('express');

const Router=express.Router();

const {create}=require('../db/mongodb');

const {formatData}=require('../utils');

//展示数据在列表
Router.get('/show',async (req,res)=>{
   
  //添加到数据库
  let  result = await create('user',req.params);
  res.send(formatData({data:result}));
})
module.exports=Router;