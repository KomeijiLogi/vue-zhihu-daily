<template>
    <transition name="popup">
       <div class="popup-all">
          <header class="header" @click="togglePush">
            <router-link to="/">
              <div class="header-icon">
                <span class="iconfont icon-account"></span>
              </div>
              <span class="header-user">{{username}}</span>
            </router-link>
          </header>
          <ul class="popup-content">
            <router-link to="/">
            <li>
              <i class="iconfont icon-all"></i>
              <span>主页</span>
            </li>
          </router-link>
            <router-link :to="{name:'主题页',params:{id:k.id}}" v-for="k in this.datas">
              <li>
                  <i class="iconfont icon-add"></i>
                  <span>{{k.name}}</span>
              </li>
            </router-link>
          </ul>
       </div>
    </transition>
</template>

<script>
    export default {
       data(){
          return{
             //username:'请登录',
             datas:''    //用于接受请求的栏目列表数据
          }

       },
       created(){
          this.$axios.get('/api/themes')
            .then((res)=>{
                this.datas=res.data.others;
            })
            .catch((err)=>{
               console.log(err);
            })
       },
       computed:{
         username(){
            if(this.$store.state.loginFlag){
               return this.$store.state.account+'|已登录';
            }else {
               return '未登录';
            }
         }
       },
       methods:{
         togglePush(){
           if(this.$store.state.loginFlag){
             this.$router.push({
                path:'/user'
             });
           }else {
             this.$router.push({
               path:'/login'
             });
           }
         }
       }

    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .popup-all{
     width: 80vw;
     height: 100vh;
     margin-top: 0;
     overflow: auto;
     .header{
       background-color: #00a2ed;
       color: whitesmoke;
       display: flex;
       flex-direction: row;
       padding: 5vw;
       -webkit-box-align: center;
       a{
         display: flex;
         flex-direction: row;
         text-decoration: none;
         color: white;
         .header-icon{
           border: .4vw solid #ffffff;
           background-color: #00a2ed;
           margin-left: 4vw;
           -webkit-box-sizing: border-box;
           box-sizing: border-box;
           width: 7vw;
           height: 7vw;
           line-height: 6vw;
           text-align: center;
           border-radius: 50%;
           span{
             .fz(font-size,26);

             &::before{
               color: #ffffff;

             }

           }
         }
         span{
           .fz(font-size,30);
           padding: 2vw;
         }
       }

     }
    .popup-content{
       list-style-type: none;
       text-align: left;

          a{
             text-decoration: none;
             color: black;

            li {
              padding: 2vw;
              line-height: 4vw;
              .bt();
              span{
                .fz(margin-left,20);
              }
            }
          }

    }
    .icon-all::before{
       color: #00a2ed;
    }
  }
</style>
