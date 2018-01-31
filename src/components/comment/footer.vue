<template>
    <footer class="comment-footer">
      <router-link :to="{name:'详情页',params:{id:this.$route.params.id}}">
         <i class="iconfont icon-back"></i>
         <span>返回</span>
      </router-link>
      <router-link :to="{name:'写评论页',params:{id:this.$route.params.id}}">
        <div class="comment-jump">
          去评论
          <span class="iconfont icon-arrow-right"></span>
        </div>
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
  .comment-footer{
     .bt();
     .bd();
      width: 100%;
      display: flex;
      flex-direction: row;
      bottom: 0;
      position: fixed;
      box-sizing: border-box;
      background-color: white;
      padding: 3vw;
      z-index: 9999;
      a{

         border: 1px #81C1EF solid;
         box-shadow: 0px 0px 10px #888888;
         i{
            .fz(font-size,40);

         }
         &:nth-child(1){
            width: 50%;
           text-align: left;

         }
         &:nth-child(2){
            width: 50%;
            padding: 1vw;
         }
      }
  }
</style>
