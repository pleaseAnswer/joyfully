//引入mysql模块
const mysql = require('mysql');

//1 利用连接对象实现数据库操作
//配置连接信息
// var connection = mysql.createConnection({
//     host:'loaclhost',
//     user:'root',
//     password:'root',
//     database:'jingdong'
// });

// 2 利用连接池方式实现数据操作（推荐）
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'jingdong',
    multipleStatements:true//是否运行同时连接多个连接对象
})


module.exports=function(sql,callback){
    pool.query(sql,(err,result)=>{
        callback(result);
    })
}

//Promise
mudule.exports=function(sql){
    return new Promise((resolve,reject)=>{
        pool.query(sql,(err,result)=>{
            if(err){
                reject(err);
            }
            //把状态从Pending -> Resolved
            resolve(result);
        })
    })
}