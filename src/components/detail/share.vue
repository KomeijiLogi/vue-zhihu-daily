<template>
  <div class="share">
    <div class="social-share" data-initialized="true">
      <a href="#" class="social-share-icon icon-weibo"></a>
      <a href="#" class="social-share-icon icon-qq"></a>
      <a href="#" class="social-share-icon icon-qzone"></a>
      <a href="#" class="social-share-icon icon-douban"></a>
      <a href="#" class="social-share-icon icon-twitter"></a>
      <a href="#" class="social-share-icon icon-google"></a>
      <a href="#" class="social-share-icon icon-facebook"></a>
    </div>
  </div>
</template>


<script>
    import share from '@/util/social-share2.js'
    export default {
       created(){
          //创建时调用share

       }
    }
</script>

<style lang="less" scoped>
@import "../../assets/share/share";
@import "../../assets/fz";
div{
   background-color: white;
   white-space: normal;
   line-break: auto;
   div{
      a{

      }
   }
}

</style>
