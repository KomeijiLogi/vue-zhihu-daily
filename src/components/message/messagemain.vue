<template>
    <div class="messagemain">
       <span>通知列表</span>
       <section class="notice-area">
           <div class="notice-area-true" v-if="hasNotice">
              
           </div>
           <div class="notice-area-false" v-else>
              <span>没有内容</span>
           </div>
       </section>
    </div>
</template>

<script>
    export default {
        //name: "messagemain"
        data(){
           return{
              hasNotice:true   //是否有通知内容
           }
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .messagemain{
     span{

     }
  }
</style>
