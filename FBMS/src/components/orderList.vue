<template>
    <div>
        <header class="orderlist-head">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
  .orderlist-head{
        width: 100%;
        height: 40px;
        .el-breadcrumb{
            padding: 5px 20px;
            font-size: 18px;
            line-height: 40px;
            // background: #963;
        }
    }
</style>