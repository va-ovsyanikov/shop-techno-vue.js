<template>
  <div class="v_search">
    <el-input 
    type="text" 
    placeholder="Please input" 
    v-model.trim="searchValue"
    ></el-input>

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "v-search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    ...mapActions(["SEARCH_PRODUCTS"]),
  },
    watch: {
    searchValue(val) {
    this.SEARCH_PRODUCTS(val);
    },
  },
};
</script>

<style lang="less" scoped>
</style>