<template>
  <div class="v_main">
    <div class="v_main_wrapper">
  
        <v-header />
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
     
    </div>
    <v-footer />
  </div>
</template>

<script>
import vHeader from "./v-header";
import vFooter from "./v-footer";
export default {
  name: "v-main-wrapper",
  components: {
    vHeader,
    vFooter,
  },
};
``;
</script>

<style lang="less" scoped>
.v_main {
  display: flex;
  flex-direction: column;
  height: 100vh;

}
.v_main_wrapper {
    max-width: 1200px;
    width: 100%;
  margin: 0 auto;
  .el-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>