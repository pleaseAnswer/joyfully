<template>
  <div>
    <div>
    <!-- 输入框 -->
    <van-search placeholder="去喜地，逛世界" v-model="value"/>
    </div>
    <div>
      <el-tabs type="border-card" tabPosition="left">
      <el-tab-pane label="饮食厨房">
        <ul class="">
          <li class="list" v-for="item in 9" :key="item">
            <img src="https://4-image.xidibuy.com/shop/shop.b898da88e7cd463f50914c5d8b2828358bbb67b48ac1bf540b9ea2f179c2bb0b.jpeg/1500x1500/240/webp" alt="">
            <p>锅具</p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="母婴用品">母婴用品</el-tab-pane>
      <el-tab-pane label="鞋包配饰">鞋包配饰</el-tab-pane>
      <el-tab-pane label="卫浴个护">卫浴个护</el-tab-pane>
      <el-tab-pane label="家居生活">家居生活</el-tab-pane>
      <el-tab-pane label="办公通勤">办公通勤</el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>



<script>

export default {
  data(){
    return{
      value:'',
      
    };
  },
  // methods:{
  //   goto(path){
  //     this.$router.push(path)
  //   }
  // },async created(){
  //    let {data} = await this.$axios.get('https://8-image.xidibuy.com/shop/shop.8c0602c6ef7be9d74f806593d320d6aa0a9b93739a306e2b3500842dd515aa3d.jpeg/1500x1500/240/webp');
  
  //   window.console.log(data)
  
  // }




  

};
</script>
<style lang="scss" scoped>

.el-tabs{
    width: 100%;
    float: left;
    // background-color: #f3f3f3;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 3.16667rem;
}

// 列表
.list{
     width: 79px;
    float: left;
    display: block;
    text-align: center;
    padding-right: 12px;
    box-sizing: border-box;
    // padding-top: 1.66667rem;
    padding-bottom: 0.83333rem;
    img{
    width: 100%;
    height: 100%;
    }
    p{
    font-size:  0.83333rem;
    padding-top: 0.83333rem;
    }
    
}

</style>