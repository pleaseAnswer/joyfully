const express=require('express');

const Router=express.Router();

const {find}=require('../db/mongodb');


//展示数据在列表
Router.get('/show',async (req,res)=>{
    let {skip,limit} = req.query;
    let result = "";
    skip=Number(skip);
    limit=Number(limit);
    if(skip>0){
        result = await find('mangelist',{},{skip,limit});
      }else{
        result = await find('mangelist',{},{limit});
      }
    //查询数据库
    res.send(result);
})
module.exports=Router;