<template>
  <div class="v_catalog">
    <h2>Catalog</h2>
    <div class="v_catalog_filter">
      <v-sort @sortChange="sortChange" />
      <v-search />
    </div>
    <!-- <div class="v_catalog_container"> -->
      <div class="v_catalog_row">
        <v-catalog-item
          v-for="product in sortedProducs"
          :key="product.id"
          :product="product"
          @addToCart="addToCart"
        />
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import vSearch from "../search/v-search";
import vSort from "../sort/v-sort";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vCatalogItem,
    vSearch,
    vSort,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE", "PRODUCTS", "SORT_VALUE"]),

    sortedProducs() {
      if (this.searchProduct.length) {
        console.log(this.searchProduct);
        return this.searchProduct;
      } else {
        return this.PRODUCTS;
      }
    },
    searchProduct() {
      let sValue = this.SEARCH_VALUE;
      return this.products.filter((el) =>
        el.name.toLowerCase().includes(sValue.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "ADD_TO_CART"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
    sortChange() {
      this.products = [];
      let sortChange = this.SORT_VALUE;
      if (sortChange > 0) {
        return this.PRODUCTS.map((product) => {
          if (product.category === sortChange) {
            this.products.push(product);
          }
        });
      } else {
        this.products = this.PRODUCTS;
      }
    },
  },

  watch: {
    SORT_VALUE() {
      this.sortChange(this.SORT_VALUE);
    },
    SEARCH_VALUE() {
      this.sortChange(this.SORT_VALUE);
    },
  },
  mounted() {
    this.FETCH_PRODUCTS();
    this.sortChange(this.SORT_VALUE);
  },
};
</script>

<style lang="less" >
.v_catalog_row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.v_catalog_filter {
  display: flex;
  margin: 0 auto;
  width: 420px;
}
</style>