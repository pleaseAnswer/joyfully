<template>
  <div>
    <router-view />

    <footer class="footer">
      <van-tabbar
        v-model="active"
        active-color="#4ed6d1"
        inactive-color="#000"
        style=" position: fixed;left: 0;bottom: 0;z-index:1200"
      >
        <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="flag-o" to="/nation">国家馆</van-tabbar-item>
        <van-tabbar-item icon="qr" to="/classify">分类</van-tabbar-item>

        <van-tabbar-item icon="shopping-cart-o" to="/cart" :info="cartlength">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/mine">我</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      info: "0",
      active: "index"
    };
  },
  computed: {
    cartlength() {
      return this.$store.getters.cartlength;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
</style>
