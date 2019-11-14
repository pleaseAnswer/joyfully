<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="flag-o" to="/nation">国家馆</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active:'index'
    };
  },
  components: {}
};
</script>

<style>
</style>
