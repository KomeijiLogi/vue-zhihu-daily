<template>
  <div>
    <v-collect></v-collect>
    <v-footer></v-footer>
  </div>


</template>

<script>
  import CollectMain from '@/components/collect/collectmain.vue'
  import Footer from '@/common/footer'
  export default {
    components:{
      'v-footer':Footer,
      'v-collect':CollectMain
    }
  }
</script>

<style scoped>

</style>
