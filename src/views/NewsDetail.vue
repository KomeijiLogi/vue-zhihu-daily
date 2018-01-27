<template>
   <div>
      <v-main></v-main>
      <v-share v-show="shareFlag" class="share"></v-share>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Main from '@/components/detail/main.vue'
    import Footer from '@/components/detail/footer.vue'
    import Share from '@/components/detail/share.vue'
    export default {
        components:{
          'v-main':Main,
          'v-footer':Footer,
          'v-share':Share
        },
        computed:{
           shareFlag(){

              return this.$store.state.shareFlag;
          }
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/fz";

div{
   .share{
      z-index: 9999;
      bottom:18vw;
      position: fixed;
      right: 0;
      left: 0;
      height: 10vw;
      .bt();
      .bd();
   }
}

</style>
