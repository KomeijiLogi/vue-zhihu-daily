<template>
   <div>
      <v-main></v-main>
      <v-share v-if="shareFlag" class="share"></v-share>
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
   }
}

</style>
