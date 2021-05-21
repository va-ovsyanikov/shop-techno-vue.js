<template>
  <el-select v-model="value" @change="sortChange(value)">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
      options: [
        {
          value: 0,
          label: "All",
        },
        {
          value: 1,
          label: "Notebook",
        },
        {
          value: 2,
          label: "Phone",
        },
        {
          value: 3,
          label: "Video",
        },
      ],
      value: 0,
    };
  },
  methods: {
...mapActions(["SORT_PRODUCTS"]),
    sortChange() {
      this.$emit("sortChange");
      this.SORT_PRODUCTS(this.value)
    },
  },
  created(){
    this.SORT_PRODUCTS(this.value)
  }
};
</script>
<style lang="less" scoped>

</style>