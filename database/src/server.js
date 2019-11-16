// 引入第三方模块
const express=require('express');

// 利用express创建一个服务器
const app=express();
const {PORT}=require('./config.json');

// 引入路由总中间件
const allRouter=require('./routers');

// 搭建静态资源服务器
app.use(express.static('/'))

// 使用路由总中间件
app.use(allRouter);

//监听服务器开启
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})