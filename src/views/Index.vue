<template>
  <div>
     <v-header ></v-header>
     <v-swiper></v-swiper>
     <v-section></v-section>
     <v-footer></v-footer>
  </div>
</template>

<script>
    import Footer from '@/common/footer.vue'
    import Header from '@/components/index/header.vue'
    import Swiper from '@/components/index/swiper.vue'
    import Section from '@/components/index/section.vue'

    export default {
        components:{
          'v-footer':Footer,
          'v-header':Header,
          'v-swiper':Swiper,
          'v-section':Section
        }
    }
</script>

<style lang="less" scoped>

</style>
