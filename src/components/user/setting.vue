<template>
    <div class="setting">
      <section class="my-setting">
        <router-link :to="{name:''}">
          <div>
            <span class="iconfont icon-process"></span>
          </div>
          <p>
            <span>最近浏览</span><i class="iconfont icon-more"></i>
          </p>
        </router-link>
        <router-link :to="{name:''}">
          <div>
            <span class="iconfont icon-set"></span>
          </div>
          <p>
            <span>设置</span><i class="iconfont icon-more"></i>
          </p>
        </router-link>
      </section>
      <section class="my-service">
        <router-link :to="{name:''}">
          <div>
            <span class="iconfont icon-help"></span>
          </div>
          <p>
            <span>帮助</span><i class="iconfont icon-more"></i>
          </p>
        </router-link>
        <router-link :to="{name:''}">
          <div>
            <span class="iconfont icon-information"></span>
          </div>
          <p>
            <span>版本信息</span><i class="iconfont icon-more"></i>
          </p>
        </router-link>
      </section>
       <mt-button type="primary" size="large" @click="logout">
           退出登录
       </mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {

       methods:{
          logout(){
            //变更登录flag
            this.$store.commit('CHANGE_LOGIN_FLAG',false);
            Toast(`退出登录`);
            //延迟2秒跳转
            setTimeout(()=>{
              this.$router.push({
                 path:'/login'
              })
            },2000);
          }
       }
    }
</script>

<style lang="less" scoped>
@import "../../assets/fz";
@import "../../assets/icons/iconfont";

 .setting{
   margin-bottom: 15vw;
   .my-setting,.my-service{
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
       text-decoration: none;
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
</style>
