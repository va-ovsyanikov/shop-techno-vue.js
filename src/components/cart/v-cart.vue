<template>
  <div class="v_cart">
    <h2>Cart</h2>
    <div v-if="CART.length">
      <v-cart-item
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @incrementCartItem="incrementCartItem(index)"
        @decrementCartItem="decrementCartItem(index)"
      />
      <div class="v_cart_bottom">
        <el-button type="success">Payment</el-button>
        <span>Total price:{{ cartTotal }} &#8381;</span>
      </div>
    </div>
    <div v-else>
      <h3>There are no products in cart...</h3>
      <i class="cart_icon el-icon-shopping-cart-2"></i>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotal() {
      return this.CART.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    incrementCartItem(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrementCartItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style lang="less" scoped>
.v_cart_bottom {
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.cart_icon{
  font-size: 50px;
}
</style>