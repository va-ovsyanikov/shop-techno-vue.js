<template>
  <div class="v_cart_item">
    <img :src="cart_data.image" alt="alt" />
    <div class="v_cart_item_info">
      <h3>{{ cart_data.name }}</h3>
      <div class="v_wrapp_item_color">
        <button
          class="v_item_color"
          v-for="color in cart_data.color"
          :key="color.id"
          :style="{ backgroundColor: color }"
        ></button>
      </div>
      <span class="v_cart_item_price">
        Price: <b>{{ cart_data.price * cart_data.quantity }} &#8381;</b></span
      >
      <div class="v_cart_item_quantity">
        <el-button type="primary" @click="decrementCartItem">
          <i class="el-icon-minus"></i>
        </el-button>
        <span>{{ cart_data.quantity }}</span>
        <el-button type="primary" @click="incrementCartItem">
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
    </div>

    <el-button  class="v_item_delete" type="danger" @click="deleteFromCart">Delete</el-button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    incrementCartItem() {
      this.$emit("incrementCartItem");
    },
    decrementCartItem() {
      this.$emit("decrementCartItem");
    },
  },
  mounted() {
    this.$set(this.cart_data, "quantity", 1);
  },
};
</script>

<style lang="less" scoped>
.v_cart_item {
  min-width: 300px;
  width: 100%;
  border: 1px solid #ebeef5;
  transition: all 0.3s;
  padding: 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
img {
  margin-bottom: 10px;
  width: 250px;
}
span {
  display: block;
}
.v_cart_item_info {
  text-align: left;
  margin-left: 20%;
}
.v_cart_item_quantity {
  display: flex;
  align-items: center;
  span {
    margin: 0 10px;
  }
}
.v_cart_item_price {
  margin-bottom: 10px;
  b {
    color: #f56c6c;
  }
}
.v_item_delete{
  margin-left: auto;
}
</style>