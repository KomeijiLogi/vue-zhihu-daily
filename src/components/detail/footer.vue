<template>
   <footer class="footer">
      <router-link to="/">
          <i class="iconfont icon-back"></i>
      </router-link>
      <div @click="share()">
        <i class="iconfont icon-process"></i>
      </div>
      <div>
        <i class="iconfont icon-favorite"></i>
        <mt-badge size="small" type="primary">{{favorite}}</mt-badge>
      </div>
      <router-link :to="{name:'评论页',params:{id:this.$route.params.id}}">
        <i class="iconfont icon-email"></i>
        <mt-badge size="small" type="primary">{{commit}}</mt-badge>
      </router-link>
   </footer>
</template>

<script>
    export default {
       data(){
         return{
            commit:0,
            favorite:0


         }
       },
        created(){
           let id=this.$route.params.id;

           this.$axios.get('/api/story-extra/'+id)
             .then((res)=>{
                this.commit=res.data.comments;
                this.favorite=res.data.popularity;

             })
             .catch((err)=>{
                console.log(err);
             })
        },
        methods:{
          share(){
             //分享按钮点击事件,修改弹出层状态,显示弹出层，然后调用social-share.js来实现分享
             this.$store.dispatch('changeShareFlag',true);
          }
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .footer{
     width: 100%;
     .bt();
     .bd();
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #fff;
     a,i{
       .fz(font-size,50);
       width: 25%;
       text-align: center;
       color: black;
       padding: 1vw;

       span{
         position: relative;
         top: -3vw;
         left:-4vw;
       }
    }
    div{
      .fz(font-size,50);
      width: 25%;
      text-align: center;
      color: black;
      padding: 1vw;
      span{
         position: relative;
        top: -3vw;
        left:-4vw;
      }
    }
  }
</style>
