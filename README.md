## 项目名称：喜地(webAPP)+后台管理系统
>喜地是一款基于vue框架开发的关于纯进口家具生活用品的线上商城。
> 后台管理系统提供各部门管理员信息查看、用户注册信息管理、商品信息管理以及用户订单信息管理。

### 技术栈
* 前端：Vue Vue-Router Vue-cli Vuex axios elementUI/Vant/ git
* 后端：nodejs Express MongoDB

### 项目职责：
* 首页：使用antd框架以及elementUI框架实现页面；编写数据接口拿取数据渲染页面；利用懒加载原理实现页面图片的加载；
* 详情页：实现静态页面的编写；
* 数据爬取：爬取首页数据并整理数据格式；
* 后台管理系统：利用vue-cli搭建框架，实现组件化；使用vue-router实现页面切换；利用axios请求数据实现各个页面的数据渲染、分页效果、分页切换效果、分页切换禁用状态的小细节以及实现数据的删除功能；
* 编文档写

### 项目页面截图：
* webAPP
    ![home](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-home.png)
    ![分类](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-fenlei.png)
    ![国家馆](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-nation.png)
    ![我的](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-mine.png)
    ![购物车](https://github.com/gzh51910/Joyfully/blob/dev/project_img/Joyfully-cart.png)

* 后台管理系统
   ![登录](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-login.png)
   ![管理员管理](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-mangelist.png)
   ![用户信息](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-userlist.png)
   ![商品信息](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-goodslist.png)
   ![订单信息](https://github.com/gzh51910/Joyfully/blob/dev/project_img/FBMS-orderlist.png)

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
