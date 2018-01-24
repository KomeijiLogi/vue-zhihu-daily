<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="k in topStories" :key="k.id" @click.native="toDetail(k.id)">
            <img :src="attachImgUrl(k.image)" :alt="k.title">
            <h3 class="top-title">{{k.title}}</h3>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>

    export default {
       data(){
          return{
             topStories:''
          }
       },
       created(){
          this.$axios.get('/api/news/latest').then((response)=>{
              this.topStories=response.data.top_stories;
          }).catch((err)=>{
               console.log(err);
          });
       },
       methods:{
         //跳转到详情页
         toDetail(id){
            this.$router.push({
              name:'详情页',
              params:{id:id}
            })
         },
         //修改图片链接
         attachImgUrl(url){
            if(url!=undefined){
              //将图片链接替换，直接访问知乎图片会返回403，这是对应知乎防盗链的操作
              return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
            }
         }
       }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .mint-swipe {
    width: 97%;
    height:80vw;
    top: -100px;
    padding: 0;
    position: absolute;

    a,img {
      display: block;
      width: 100%;
      height:100%;

    }
    img{
       //调整亮度
       filter: brightness(.7);
       -webkit-filter: brightness(.7);
    }
    .top-title{

      z-index: 9;
      color: whitesmoke;     //调整字体颜色，突出字体
      .fz(font-size,35);
      position: absolute;
      bottom: 0;
      padding: 20px 20px;
     text-align: center;

    }
  }
</style>
