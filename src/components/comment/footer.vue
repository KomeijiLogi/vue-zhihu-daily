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
      a{


         i{
            .fz(font-size,40);

         }
         &:nth-child(1){
            width: 25%;
           text-align: center;
         }
         &:nth-child(2){
            width: 75%;
         }
      }
  }
</style>
