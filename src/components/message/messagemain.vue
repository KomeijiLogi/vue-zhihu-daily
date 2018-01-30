<template>
    <div class="messagemain">
      <div>
        <span>通知列表</span>
      </div>

       <section class="notice-area">
           <div class="notice-area-true" v-if="hasNotice">
              <ul class="notice-area-ul">
                 <li class="notice-area-li" v-for="k in datas">

                 </li>
              </ul>
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
              hasNotice:true,   //是否有通知内容
              datas:'',          //通知信息数组
           }
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .messagemain{
      div{
         .bt();
         .bd();
         span{
            .fz(font-size,36);

         }
      }
  }
</style>
