<template>
   <footer class="footer" @click.stop="gotoRoute">
      <mt-tabbar v-model="selected" fixed>
         <mt-tab-item id="首页">
            <i slot="icon" class="iconfont icon-all"></i>
            首页
         </mt-tab-item>
         <mt-tab-item id="收藏页">
            <i slot="icon" class="iconfont icon-favorite"></i>
            收藏
         </mt-tab-item>
         <mt-tab-item id="消息页">
             <i slot="icon" class="iconfont icon-email"></i>
             消息
         </mt-tab-item>
         <mt-tab-item id="用户页">
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
             this.$router.push({
               name:this.selected
             })
           }
        },
        mounted(){
           let Rname =this.$route.name;
           switch (Rname){
             case '首页':
               this.selected='首页';
               break;
             case '收藏页':
               this.selected='收藏页';
               break;
             case '消息页':
               this.selected='消息页';
               break;
             case '用户页':
               this.selected='用户页';
               break;
             default:
               break;
           }
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/icons/iconfont";
  @import "../assets/fz";
</style>
