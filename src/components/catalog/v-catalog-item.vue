<template>
  <div class="v_catalog_item">
    <img
     @click="onCartInfo" 
     :src="product.image" alt="alt" />
    <div class="v_catalog_item_bottom">
      <h3>{{ product.name }}</h3>
      <span class="v_item_price"
        >Price: <b>{{ product.price }} &#8381;</b></span
        
      >
      <el-button type="primary" @click="addToCart">Add to card</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "v-catalog-item",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
   
    };
  },

  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    },
    onCartInfo() {
      this.PRODUCTS.map((item) => {
        if (item.id === this.product.id) {
          this.$router.push({
            name: "info",
            query: { id: this.product.id },
            params: { product: this.product },
          });
        }
      });
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style lang="less"  scoped>
.v_catalog_item {
  min-width: 250px;
  width: 25%;
  margin: 20px 20px;
  border: 1px solid #ebeef5;
  transition: all 0.3s;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
.v_catalog_item_bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  margin-bottom: 15px;
  cursor: pointer;
}
h3 {
  margin-bottom: 15px;
}
.v_item_price {
  margin-bottom: 20px;
  b {
    color: #f56c6c;
  }
}
</style> 