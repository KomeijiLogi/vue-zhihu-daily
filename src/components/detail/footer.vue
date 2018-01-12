<template>
   <footer class="footer">
      <router-link to="/">
          <i class="iconfont icon-back"></i>
      </router-link>
      <i class="iconfont icon-process"></i>
      <i class="iconfont icon-favorite"></i>
      <router-link to="/message">
        <i class="iconfont icon-email"></i>
      </router-link>
   </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .footer{
     width: 100%;
     .bt();
     .bd();
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #fff;
     a,i{
       .fz(font-size,50);
       width: 25%;
       text-align: left;
       color: black;
       padding: 1vw;
    }

  }
</style>
