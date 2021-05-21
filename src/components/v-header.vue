<template>
  <el-header>
    <a class="logo" href="/">TECHNO</a>
    <el-menu mode="horizontal">
      <el-menu-item >
        <router-link :to="{ name: 'catalog' }">Catalog</router-link>
      </el-menu-item>
      <el-menu-item >
        <router-link :to="{ name: 'about' }">About</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </el-menu-item>
      <el-menu-item class="cart">
        <router-link :to="{ name: 'cart' }">
          <i class="el-icon-shopping-cart-full"></i>
          <span>{{ CART.length }}</span>
        </router-link>
      </el-menu-item>
      <div></div>
    </el-menu>
  </el-header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "v-header",
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="less">
.v_main_wrapper {
  .el-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .el-menu.el-menu--horizontal {
      border: none;
    }
  }
  .el-menu-item {
    font-size: 16px;
    text-transform: uppercase;
    a {
      text-decoration: none;
      display: block;
    }
  }
  .el-main {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    padding: 40px;
  }
  .el-menu-item [class^="el-icon-"] {
    font-size: 25px;
  }
}
.logo {
  margin-left: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}
.cart {
  span {
    padding: 3px 4px;
    background-color: red;
    border-radius: 50%;
    color: #fff;
    margin-left: -6px;
  }
}
</style>