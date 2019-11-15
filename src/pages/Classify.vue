<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div>
    <div>
      <!-- 输入框 -->
      <van-search placeholder="去喜地，逛世界" v-model="value" />
    </div>
    <div>
      <el-tabs type="border-card" tabPosition="left">
        <el-tab-pane :label="item.name" v-for="item in datalist" :key="item.name">
          <ul class>
            <li
              class="list"
              v-for="item1 in item.children"
              :key="item1.name"
              @click="goto('/Classifylist')"
            >
              <img :src="item1.image" />
              <p>{{item1.name}}</p>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
=======
  <div>分类</div>
>>>>>>> b8b342a9d338c6cdf5e7f92ca3bd10485e7b7484
=======
  <div>分类</div>
>>>>>>> b8b342a9d338c6cdf5e7f92ca3bd10485e7b7484
</template>



<script>
<<<<<<< HEAD
<<<<<<< HEAD
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
    let { data } = await this.$axios.get("http://localhost:1910/fenlei");
    this.datalist = data[0].data;
    let datas = data[0].data.cats;
    window.console.log(datas);
    this.datalist = datas;
    //  window.console.log(this.datalist)
  }
};
</script>
<style lang="scss" scoped>
.el-tabs {
  width: 100%;
  float: left;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 3.16667rem;
}

// 列表
.list {
  width: 79px;
  float: left;
  display: block;
  text-align: center;
  padding-right: 12px;
  box-sizing: border-box;
  padding-bottom: 0.83333rem;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 0.83333rem;
    padding-top: 0.83333rem;
  }
}
=======
export default {};
</script>
<style>
>>>>>>> b8b342a9d338c6cdf5e7f92ca3bd10485e7b7484
=======
export default {};
</script>
<style>
>>>>>>> b8b342a9d338c6cdf5e7f92ca3bd10485e7b7484
</style>