<template>
   <div class="login">
      <v-header class="header">
         <h2 slot="title">登录</h2>
      </v-header>
     <div class="login-content">
       <mt-field label="账号" placeholder="请输入账号" v-model="account"></mt-field>
       <mt-field label="密码" placeholder="请输入密码" v-model="password" type="password"></mt-field>
     </div>
     <span class="login-tips">tips:账号和密码需要包含admin</span>
     <div class="login-button">
       <mt-button type="primary"  @click="login" size="normal">
         登录
       </mt-button>
       <mt-button type="danger" size="normal" @click="reset">
         重置
       </mt-button>
     </div>
   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import {Toast} from 'mint-ui'
    export default {
      components:{
        'v-header':Header
      },
      data(){
         return{
           account:'',
           password:''

         }
      },
      methods:{
        login(){
            //正式应该为调用用户接口，通过后台返回的数据验证用户的合法性，
            //但介于安全原因考虑，这里仅在前端做些简单处理模拟用户登录
            if(this.account!=''&&this.password!=''){
               //定义登录规则
               if(!(new RegExp(this.account).test('admin'))){
                   //账号需要包含admin
                   Toast(`账号不正确`);
                   return;
               }
               if(!(new RegExp(this.password)).test('admin')){
                   Toast(`密码不正确`);
                   return;
               }
               //改变登录flag
               this.$store.commit('CHANGE_LOGIN_FLAG',true);
               Toast(`登录成功，即将跳转`);
               //延迟3秒跳转到用户页
               setTimeout(()=>{
                   this.$router.replace(
                     {
                       path:'user'
                     }
                   )
               },3000);

            }else {
               Toast(`账号密码不能为空`);
            }
        },
        reset(){
          this.account='';
          this.password='';
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../assets/fz";
  @import "../assets/icons/iconfont";
  .login{
    .header{

    }

    .login-content{
      padding: 2vw;
      .mint-field{

      }
    }
    .login-tips{
       .bd();
      .fz(font-size,25);

    }
    .login-button{

      .bd();
      text-align: center;
      width: 100%;
      .mint-button{

        width: 40%;
        padding: 2vw;
      }

    }

  }
</style>
