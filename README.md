## 项目名称：喜地(webAPP)+后台管理系统
>喜地是一款基于vue框架开发的关于纯进口家具生活用品的线上商城。
<<<<<<< HEAD
>后台管理系统提供各部门管理员信息查看、用户注册信息管理、商品信息管理以及用户订单信息管理。


* 上线地址：
    * webAPp：http://120.78.213.100:5211
    * 后台管理系统：http://120.78.213.100:5210

* git仓库地址：
>https://github.com/gzh51910/Joyfully.git

* 技术栈

    * 前端：Vue Vue-Router Vue-cli Vuex axios elementUI/Vant/ git
    * 后端：nodejs Express MongoDB

* 团队与分工：

    * 组长：邱南焰 成员：周悦欣 劳紫恩 黎州平

* 分工如下：

    * 邱南焰：主要负责app项目路由搭建，利用Vant前端框架实现首页,分类和购物车页面，axios请求后台数据渲染，并且实现相应页面的功能。

    * 周悦欣：
        * 首页：使用antd框架以及elementUI框架实现页面,
        * 数据爬取：
        * 后台管理系统：
    主要负责后台管理系统页面以及删除功能的实现，使用vue—cli脚手架创建后台管理系统，组件化开发利用elementUI实现页面，利用axios请求数据库数据进行渲染。

    * 劳紫恩：主要负责店铺列表跟店铺详情页面以及注册登录页面功能的实现，利用利用elementUI实现页面，axios请求数据库数据进行渲染。

    * 黎州平：主要负责数据库接口的实现，利用Nodejs+Express搭建服务器，实现数据库MongoDB的连接。


* 项目页面截图：

    * webAPP
=======
> 后台管理系统提供各部门管理员信息查看、用户注册信息管理、商品信息管理以及用户订单信息管理。

### 上线地址：
* webAPp：http://120.78.213.100:5211
* 后台管理系统：http://120.78.213.100:5210
### git仓库地址：

* https://github.com/gzh51910/Joyfully.git

### 技术栈
* 前端：Vue Vue-Router Vue-cli Vuex axios elementUI/Vant/ git
* 后端：nodejs Express MongoDB

### 团队与分工：

* 组长：邱南焰 成员：周悦欣 劳紫恩 黎州平

#### 分工如下：

###### 邱南焰：
* 注册与登录页：使用Element前端框架实现页面
    主要负责app项目路由搭建，利用Vant/Element前端框架，axios请求后台数据渲染，并且实现相应页面的功能。

###### 周悦欣：
* 首页：使用antd框架以及elementUI框架实现页面；编写数据接口拿取数据渲染页面；利用懒加载原理实现页面图片的加载；
* 详情页：实现静态页面的编写；
* 数据爬取：爬取首页数据并整理数据格式；
* 后台管理系统：利用vue-cli搭建框架，实现组件化；使用vue-router实现页面切换；利用axios请求数据实现各个页面的数据渲染、分页效果、分页切换效果、分页切换禁用状态的小细节以及实现数据的删除功能；
* 编文档写

###### 劳紫恩：
* 国家馆：elementUI框架实现页面；编写数据接口拿取数据渲染页面；并用vue实现吸顶，删除，遮罩等功能
* 列表页：实现静态页面的编写；并用vue实现弹框，跳转，遮罩等功能
* 后台管理系统：编写商品列表的静态，利用axios请求数据实现用户列表和商品列表的的添加功能，并用vue实现弹框，遮罩等功能

###### 黎州平：
* 分类页：使用Element框架，结合后端传来的数据渲染实现
* 列表页：使用Element框架，结合后端传来的数据渲染实现
* 后台管理系统：使用Element框架完成管理员权限页面框架，并处理添加后台管理系统部分数据

###### 邱南焰：
* app项目主体架构：利用vue-cli手脚架，搭建公共部分架构，使用vue-router实现页面切换。
* 购物车：使用Element前端框架实现页面结构并实现对应功能，利用axios请求实现与数据库之间的交互。
* 注册与登录页：使用Element前端框架实现页面结构，利用axios请求结合后台数据库接口验证用户名与校验用户信息，并把相应信息保存在数据库，使用路由守卫设置token进行访问拦截与免登陆设置等功能
* 我的页面：实现页面结构并实现对应功能。
* 后台管理系统：实现登录页面并且实现对应功能与路由守卫进行访问权限。
### 项目页面截图：
* webAPP
>>>>>>> pleaseAnswer
    ![home](https://github.com/gzh51907/bdyou/blob/master/project_img/home.png)
    ![分类](https://github.com/gzh51907/bdyou/blob/master/project_img/clasify.png)
    ![登录](https://github.com/gzh51907/bdyou/blob/master/project_img/login.png)
    ![注册](https://github.com/gzh51907/bdyou/blob/master/project_img/reg.png)
* 后台管理系统
   ![商品信息](https://github.com/gzh51907/bdyou/blob/master/project_img/%E5%95%86%E5%93%81%E4%BF%A1%E6%81%AF.png)
   ![用户注册信息](https://github.com/gzh51907/bdyou/blob/master/project_img/%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C%E4%BF%A1%E6%81%AF.png)

### 项目文件目录：
##### database文件
>
    │  config.json
    │  package-lock.json
    │  package.json
    │  server.js
    │
    ├─db
    │      mongodb.js
    │
    ├─routers
    │      cart.js
    │      fenlei.js
    │      goodslist.js
    │      guojiaguan.js
    │      home.js
    │      index.js
    │      login.js
    │      mangelist.js
    │      orderlist.js
    │      reg.js
    │      userlist.js
    │
    └─utils
            index.js
            token.js
    
##### webAPP  [Joyfully]
>
    │  .gitignore
    │  babel.config.js
    │  package-lock.json
    │  package.json
    │  README.md
    │  tree
    │
    ├─public
    │      favicon.ico
    │      index.html
    │
    └─src
        │  App.vue
        │  index.html
        │  main.js
        │
        ├─Api
        │      guan.js
        │      index.js
        │      my.js
        │
        ├─assets
        │  │  logo.png
        │  │
        │  └─css
        │          base.css
        │          mixin.css
        │
        ├─components
        │      addGoods.vue
        │      addUser.vue
        │      editGoods.vue
        │      editUser.vue
        │      goodsList.vue
        │      Login.vue
        │      mangeList.vue
        │      orderList.vue
        │      userList.vue
        │
        ├─img
        │      Joyfully-logo.png
        │      loadingx.gif
        │
        └─router
                index.js
##### 后台管理系统 [FBMS]
>
    │  babel.config.js
    │  package-lock.json
    │  package.json
    │  README.md
    │
    ├─public
    │      favicon.ico
    │      index.html
    │
    └─src
        │  App.vue
        │  main.js
        │
        ├─Api
        │      guan.js
        │      index.js
        │      my.js
        │
        ├─assets
        │  │  logo.png
        │  │
        │  └─css
        │          base.css
        │
        ├─components
        │      HelloWorld.vue
        │
        ├─css
        │      icon.css
        │
        ├─img
        │      07.jpg
        │      6.jpg
        │      bg_don.png
        │      bj.jpg
        │      cc.jpg
        │      contactCustomer.png
        │      country_banner.jpg
        │      Joyfully_logo.jpg
        │      loadingx.gif
        │      login-logo.png
        │      logo.png
        │      pp.jpg
        │      see_more.jpg
        │      service-email.png
        │      service-tel.png
        │      touxiang.png
        │      wan.jpg
        │      webp.png
        │
        ├─pages
        │      Cart.vue
        │      Classify.vue
        │      Classifylist.vue
        │      Detail.vue
        │      Index.vue
        │      List.vue
        │      Load.vue
        │      Login.vue
        │      Mine.vue
        │      Nation.vue
        │      Reg.vue
        │      Service.vue
        │
        ├─router
        │      index.js
        │
        └─store
                cart.js
                common.js
                index.js