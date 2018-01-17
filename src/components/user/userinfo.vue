<template>
    <div class="userinfo">
        <header class="userinfo-header">
             <div class="userinfo-icon">
                <span class="iconfont icon-account"></span>
             </div>
             <span>用户名</span>
        </header>
        <section class="my-func">
          <router-link :to="{name:''}">
            <div>
              <span class="iconfont icon-favorite"></span>
            </div>
            <p>
              <span>我的收藏</span><i class="iconfont icon-more"></i>
            </p>
          </router-link>
          <router-link :to="{name:''}">
            <div>
              <span class="iconfont icon-electronics"></span>
            </div>
            <p>
              <span>我的关注</span><i class="iconfont icon-more"></i>
            </p>
          </router-link>
          <router-link :to="{name:''}">
            <div>
              <span class="iconfont icon-edit"></span>
            </div>
            <p>
              <span>我的邀请回答</span><i class="iconfont icon-more"></i>
            </p>
          </router-link>
        </section>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
@import "../../assets/fz";
@import "../../assets/icons/iconfont";
 .userinfo{
    padding: 1vw;
   .userinfo-header{
     width: 100%;
     height: 16vw;
     background: url(../../assets/carbg.png) center 0 #f37d0f;
     background-size: auto 100%;
     padding: 3.2vw 0;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     .userinfo-icon{
       border: .4vw solid #ffffff;
       background-color: @bg;
       margin-left: 4vw;
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
       width: 14vw;
       height: 14vw;
       line-height: 16vw;
       text-align: center;
       border-radius: 50%;
       span{
         .fz(font-size,54);

         &::before{
           color: #ffffff;
         }
       }
     }
     >span{
        text-align: center;
        padding: 2vw;
     }
   }
   .my-func{
     width:100%;
     .mt();
     .bd();
     .bt();
     >a{
       background-color: #fff;
       display: block;
       width: 100%;
       display: -ms-flex;
       display: -webkit-box;
       display: -ms-flexbox;
       display: flex;
       height: 15vw;
       -webkit-box-align: center;
       -ms-flex-align: center;
       align-items: center;
       -webkit-box-pack: justify;
       -ms-flex-pack: justify;
       justify-content: space-between;
       padding: 0 6vw;
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
       text-align: left;
       &:active {
         background-color: rgb(224, 227, 230);
       }
       >div{
         -ms-flex: 2;
         -webkit-box-flex: 2;
         flex: 2;
         padding-top: 1.3vw;
       }
       .my-vip-top-div{
         padding-top: 0;
       }
       >p {
         -ms-flex: 10;
         -webkit-box-flex: 10;
         flex: 10;
         position: relative;

         &:active {
           background-color: rgb(224, 227, 230);
         }

         i {
           position: absolute;
           right: 0;
           top: .4vw;
         }
       }
     }

   }
 }
.iconfont::before{
  .fz(font-size,50);
}
.icon-favorite::before{
   color: #F76300;
}

</style>
