<template>
  <div class="message">
    <v-messagemain></v-messagemain>
    <v-footer></v-footer>
  </div>

</template>

<script>
    import Footer from '@/common/footer'
    import MessageMain from '@/components/message/messagemain.vue'
    export default {
      components:{
        'v-footer':Footer,
        'v-messagemain':MessageMain
      }
    }
</script>

<style lang="less" scoped>
.message{

}
</style>
