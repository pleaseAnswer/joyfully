// const Mongo = require('mongodb');
// const MongoClient = Mongo.MongoClient;
const {MongoClient}=require('mongodb');

//连接MongoDB数据库--connect
// const {dbUrl}=require('../config.json');
const {dbUrl,dbName}=require('../config.json');

// MongoClient.connect(dbUrl, function(err, client) {
//     //err:连接数据库失败时的错位信息，默认null
//     //client：连接成功后mongodb客户端
    // console.log("Connected successfully to server");

//    //通过client.db()获取某个数据库，无则自动创建
//     const db = client.db(dbName);

//    //集合或文档操作
//     // 获取集合
//     let collection = db.collection('user');

//     //文档操作--增删改查
//     collection.find();
//     collection.insertOne();

//     //关闭数据库连接，释放资源
//     client.close();
// });

//执行async函数，得到的（返回值）是promise对象
async function connect(){
    // MongoClient.connect(dbUrl, function(err, client) {
    //     return new Promise((resolve,reject)=>{
    //     //err:连接数据库失败时的错位信息，默认null
    //         //client：连接成功后mongodb客户端
    //         console.log("Connected successfully to server");
        
    //     //通过client.db()获取某个数据库，无则自动创建
    //         const db = client.db(dbName);
        
    //         resolve({client,db})
    //     })
    
    // });
    // 只要是promise对象就可以用await拿到
    const client=await MongoClient.connect(dbUrl,{ useUnifiedTopology: true });
    const db=client.db(dbName);
    return {client,db}
}

// 增
async function create(colName,data){
    
    

}

// 删
async function remove(colName,data){
    
}
// 改
async function update(colName,dataOld,dataNew){
   
}
// 查--传参
async function find(colName){
    const {db,client}=await connect();
    //集合或文档操作
    // 获取集合
    let collection = db.collection(colName);

    // //文档操作--增删改查
    // collection.find().toArray((err,result)=>{
    //     console.log("result:",result);
    // })

    //promise对象
    let result = await collection.find().toArray()

    //在操作完成之后，需要关闭数据库连接，释放资源
    client.close();
    return result;
}

find();
//模块开发思想--导出模块
module.exports={
    create,
    remove,
    update,
    find
}