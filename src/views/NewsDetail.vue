<template>
   <div>
      <v-main></v-main>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Main from '@/components/detail/main.vue'
    import Footer from '@/components/detail/footer.vue'
    export default {
        components:{
          'v-main':Main,
          'v-footer':Footer
        }
    }
</script>

<style scoped>

</style>
