<template>
  <div class="user">
    <v-user></v-user>
    <v-setting></v-setting>
    <v-footer></v-footer>
  </div>

</template>

<script>
    import User from '@/components/user/userinfo.vue'
    import Setting from '@/components/user/setting.vue'
    import Footer from '@/common/footer'
    export default {
        components:{
          'v-footer':Footer,
          'v-user':User,
          'v-setting':Setting
        }
    }
</script>

<style lang="less" scoped>

</style>
