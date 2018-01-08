<template>
   <header>
      <router-link class="iconfont icon-back" :to="{name:'首页'}"
      v-if="$route.matched[0].path=='/index'"
      >
      </router-link>
     <span class="iconfont icon-back" @click="$router.go(-1)" v-else></span>
     <slot name="title"></slot>
   </header>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
  @import "../assets/icons/iconfont.less";
  @import "../assets/fz.less";

  header{
    background-color: #00a0ea;
    text-align: center;
    position: relative;
    height: 11vw;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0.4vw;
    h2{
      .fz(font-size,34);
      letter-spacing: .2vw;
      font-weight: 500;
      margin-right: 44vw;
      color: #ffffff;
    }
    span,a{
      display: inline-block;

      padding: 6vw;
      transform: rotate(0deg);
      &::before{
        color: #ffffff;
        .fz(font-size,46);
      }
    }
  }
</style>
