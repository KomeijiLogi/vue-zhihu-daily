<template>
    <div class="messagemain">
      <div>
        <span>通知列表</span>
        <mt-badge size="normal" type="primary">10</mt-badge>
      </div>

       <section class="notice-area">
           <div class="notice-area-true" v-if="hasNotice">
              <ul class="notice-area-ul">
                 <li class="notice-area-li" v-for="n in 10">
                    通知内容通知内容通知内容通知内容通知内容
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
              //datas:'',          //通知信息数组
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
            &:nth-child(1){
              .fz(font-size,36);
            }


         }
      }
     .notice-area{
       .notice-area-true{
         .notice-area-ul{
            list-style-type: none;
            padding: 0;
            .notice-area-li{
               border: 1px #7f7f7f dashed;
               padding: 2vw;
               height: 20vw;
               text-align: left;
               margin: 1vw;
            }
            margin-bottom: 20vw;

         }
       }
     }
  }
</style>
