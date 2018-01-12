<template>
   <header class="header">
      <router-link to="/">
          <i class="iconfont icon-back"></i>
      </router-link>
      <i class="iconfont icon-vote"></i>
      <i class="iconfont icon-favorite"></i>
      <router-link to="/message">
        <i class="iconfont icon-email"></i>
      </router-link>

   </header>
</template>

<script>
    export default {
       data(){
          return {

          }
       }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .header{

  }
</style>
