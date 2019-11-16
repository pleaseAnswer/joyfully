<template>
    <div>
        <header class="adduser-head">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>编辑用户信息</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <main class="adduser-main">
            <el-form>
                <el-form-item label="用户名" style="width:100%; padding-left:25px;">
                    <el-input v-model="username" style="width:70%;"></el-input>
                </el-form-item>
                <el-form-item label="密码" style="width:100%; padding-left:25px;">
                    <el-input type="password" v-model="password" style="width:70%; margin-left:12px;"></el-input>
                </el-form-item>
                <el-form-item style="padding: 10px 0 0 40px;">
                    <el-button style="background:#00bebf; color:#fff;" @click="onSubmit">确认修改</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                username:'',
                password:''
            }
        },
        methods: {
            onSubmit() {
                window.console.log('submit!');
            }
        }
    }
</script>
<style lang="scss" scoped>
   .adduser-head{
        width: 100%;
        height: 40px;
        .el-breadcrumb{
            padding: 5px 20px;
            font-size: 18px;
            line-height: 40px;
            // background: #963;
        }
    }
    .adduser-main{
       margin-top: 40px;
       width: 100%;
       height: calc(100% - 40px);
    }
</style>