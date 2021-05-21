<template>
  <div class="v_catalog_item_info">
    <img :src="product.image" alt="alt" />
    <div class="v_catalog_item_info_content">
      <h3>
        {{ product.name }}
      </h3>
      <div class="v_wrapp_item_color">
        <button
          class="v_item_color"
          v-for="color in product.color"
          :key="color.id"
          :style="{ backgroundColor: color }"
        ></button>
      </div>
      <span class="v_item_info_price"
        >Price: <b>{{ product.price }} &#8381;</b></span
      >
      <p>{{ product.description }}</p>
      <router-link :to="{ name: 'cart' }">
        <el-button type="primary" @click="addToCart"> Add to card </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "v-catalog-item-info",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      color: [],
    };
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart() {
      this.ADD_TO_CART(this.product);
    },
  },
};
</script>

<style lang="less">
.v_catalog_item_info {
  display: flex;
}

img {
  width: 400px;
}

.v_item_info_price {
  b {
    color: #f56c6c;
  }
}

.v_catalog_item_info_content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
}
p {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
}
a {
  margin-top: auto;
}
</style> 