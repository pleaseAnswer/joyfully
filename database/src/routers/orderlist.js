const express=require('express');

const Router=express.Router();

const {find,remove}=require('../db/mongodb');
const {formatData}=require('../utils');


//展示数据在列表
Router.get('/show',async (req,res)=>{
    let {skip,limit} = req.query;
    let result = "";
    skip=Number(skip);
    limit=Number(limit);
    if(skip>0){
        result = await find('cart',{},{skip,limit});
      }else{
        result = await find('cart',{},{limit});
      }
    //查询数据库
    res.send(result);
})
// 删除用户
Router.delete('/:id',async (req,res)=>{
  let {id} = req.params;
  console.log(id);
  
  // 查询数据库
  let result = await remove('cart',{id});

  if(result.deletedCount>0){
      res.send(formatData())
  }else{
      res.send(formatData({status:0}))
  }
})
module.exports=Router;