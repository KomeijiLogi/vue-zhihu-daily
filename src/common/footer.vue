<template>
   <footer class="footer" @click.stop="gotoRoute">
      <mt-tabbar v-model="selected" fixed>
         <mt-tab-item id="首页">
            <i slot="icon" class="iconfont icon-all"></i>
            首页
         </mt-tab-item>
         <mt-tab-item id="收藏">
            <i slot="icon" class="iconfont icon-favorite"></i>
            收藏
         </mt-tab-item>
         <mt-tab-item id="消息">
             <i slot="icon" class="iconfont icon-email"></i>
             消息
         </mt-tab-item>
         <mt-tab-item id="设置">
            <i slot="icon" class="iconfont icon-set"></i>
            设置
         </mt-tab-item>
      </mt-tabbar>
   </footer>
</template>

<script>
    export default {
        data(){
          return{
             selected:''
          }
        },
        methods:{
           gotoRoute(){

           }
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/icons/iconfont";
  @import "../assets/fz";
</style>
