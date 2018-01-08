<template>
  <div class="index">
     <v-header></v-header>
     <v-swiper></v-swiper>
     <v-footer></v-footer>
  </div>
</template>

<script>
    import Footer from '@/common/footer.vue'
    import Header from '@/components/index/header.vue'
    import Swiper from '@/components/index/swiper.vue'
    export default {
        components:{
          'v-footer':Footer,
          'v-header':Header,
          'v-swiper':Swiper
        }
    }
</script>

<style lang="less" scoped>

</style>
