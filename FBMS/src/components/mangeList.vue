<template>
    <div>
        <header class="managelist-head">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    .managelist-head{
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