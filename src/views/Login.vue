<template>
   <div class="login">
      <v-header class="header">
         <h2 slot="title">登录</h2>
      </v-header>
     <div class="login-content">
       <mt-field label="账号" placeholder="请输入账号" v-model="account"></mt-field>
       <mt-field label="密码" placeholder="请输入密码" v-model="password" type="password"></mt-field>
     </div>
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
