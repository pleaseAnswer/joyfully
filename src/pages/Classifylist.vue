<template>
  <div>
    <header>
      <i class="el-icon-arrow-left" @click="goto('/Classify')"></i>
      <p>锅具</p>
      <i class="el-icon-search"></i>
      <i class="el-icon-shopping-cart-full"></i>
    </header>
    <nav>
      <el-tabs type="card">
        <el-tab-pane label="全部">
          <div class="show">
            <li>综合</li>
            <li>销量</li>
            <li>新品</li>
            <li>
              价格
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
            </li>
          </div>
          <!--  -->
          <div v-for="item in datalist.lists" :key="item.id" class="goods">
            <img :src="item.attrImg" alt />
            <a href>{{item.name}}</a>
            <p class="text01">{{item.price}}</p>
            <p class="text02">{{item.countryName}}</p>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="item.name" v-for="item in datalist.tabs" :key="item.filterId">
          <div class="show">
            <li>综合</li>
            <li>销量</li>
            <li>新品</li>
            <li>
              价格
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
            </li>
          </div>
          <!-- 列表 -->
          <div v-for="item in datalist.lists" :key="item.id" class="goods">
            <img :src="item.attrImg" alt />
            <a href>{{item.name}}</a>
            <p class="text01">{{item.price}}</p>
            <p class="text02">{{item.countryName}}</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      datalist: []
    };
  },

  methods: {
    goto(path) {
      this.$router.push(path);
    }
  },
  async created() {
    let {
      if()
      data: { data }
    } = await this.$axios.get(
      "https://api.m.xidibuy.com/v2/aggregation/home?cid=890&title=%E9%94%85%E5%85%B7&from=1&order=0&filterId=0&page=1&token="
    );

    this.datalist = data;
    window.console.log(this.datalist);
    // let top=data.tabs
    // this.tabs=top;
    // window.console.log(top)

    // let goods=data.lists
    // this.lists=goods;
    // window.console.log(goods)

    // let{data1}=await this.$axios.get('https://analysis.xidibuy.com/piwik.php?action_name=%E5%96%9C%E5%9C%B0%E2%80%94%E7%BA%AF%E8%BF%9B%E5%8F%A3%E5%AE%B6%E5%B1%85%E7%94%9F%E6%B4%BB%E7%94%A8%E5%93%81%E8%B4%AD%E4%B9%B0%E5%B9%B3%E5%8F%B0&idsite=3&rec=1&r=245976&h=10&m=1&s=18&url=https%3A%2F%2Fm.xidibuy.com%2F&_id=86c9d150cbbd7088&_idts=1573563250&_idvc=16&_idn=0&_refts=0&_viewts=1573778847&send_image=1&cookie=1&res=375x667&cvar=%7B%225%22%3A%5B%22_pkc%22%2C%22%E5%88%86%E7%B1%BB%E5%90%8D%E7%A7%B0%22%5D%7D&gt_ms=589&pv_id=jEaM4s');
    // window.console.log(data1);
  }
};
</script>
<style lang="scss" scoped>
header {
  width: 240px;
  height: 48px;
  position: relative;
  top: 0;
  z-index: 995;

  i {
    font-size: 1.6rem;
    line-height: 48px;
    color: #999;
    width: 4rem;
  }
  .el-icon-arrow-left {
    width: 10px;
    position: absolute;
    left: 10px;
    line-height: 48px;
    color: #999;
  }
  p {
    font-size: 1.1rem;
    color: #333;
    text-align: center;
    display: block;
    width: 10rem;
    box-sizing: border-box;
    overflow: hidden;
    height: 48px;
    line-height: 48px;
    position: absolute;
    top: 0px;
    left: 120px;
  }
  .el-icon-search {
    position: absolute;
    top: -2px;
    right: -120px;
  }
  .el-icon-shopping-cart-full {
    position: absolute;
    top: -2px;
    right: -150px;
  }
}

//导航
.el-tab-pane label {
  width: 100%;
}

.show {
  // color: #00bebf;
  // font-weight: bold;
  width: 100%;
  height: 30px;
  float: left;
  // background: pink;
  li {
    float: left;
    padding: 0 26px 0 20px;
    font-size: 16px;
  }
  .el-icon-arrow-up {
    position: relative;
    top: -4px;
    left: 10px;
  }
  .el-icon-arrow-down {
    position: relative;
    top: 7px;
    left: -6px;
  }
}

// 列表
.goods {
  width: 50%;
  border-bottom: 1px solid #f3f3f3;
  border-right: 1px solid #f3f3f3;
  display: block;
  float: left;
  box-sizing: border-box;
  padding: 12px;
  padding-top: 0;
  img {
    width: 100%;
  }
  a {
    color: #000;
    font-size: 11.5px;
    overflow: hidden;
    padding-top: 12px;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: hidden;
  }
  .text01 {
    font-size: 12px;
    color: #00bebf;
    padding-top: 12px;
  }
  .text02 {
    font-size: 12px;
    color: #777;
    position: relative;
    right: -130px;
    top: -16px;
  }
}
</style>