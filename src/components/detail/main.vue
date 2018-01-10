<template>
    <div class="detail">
       <div  class="detail-wrapper">
           <img  v-lazy="attachImgUrl(this.datas.image)"/>
           <span class="detail-source">图片来源:{{datas.image_source}}</span>
           <span class="detail-title">{{datas.title}}</span>
       </div>
      <div class="detail-body" v-html="this.datas.body">
      </div>
    </div>
</template>

<script>
    export default {
       data(){
          return{
             datas:'',
             cssStyle:''
          }
       },
       methods:{
         fetchData(){
            let id =this.$route.params.id;
            this.$axios.get('/api/news/'+id)
              .then((res)=>{
                  console.log(res);
                  res.data.body=this.attachBodyContent(res.data.body);
                  this.datas=res.data;
                  this.cssStyle=(res.data.css)[0];

              })
              .catch((err)=>{
                 console.log(err);
              });
         },
         //修改图片链接
         attachImgUrl(url){
           if(url!=undefined){
             //将图片链接替换，直接访问知乎图片会返回403，这是对应知乎防盗链的操作
             return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
           }
         },
         //修改返回数据中图片链接
          attachBodyContent(body){
            return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=');
          }
       },
       created(){
          this.fetchData();
       }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  @import "../../assets/news_qa";
.detail{
  margin-top: -160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .detail-wrapper{
    display: flex;
    flex-direction: column;
    img{
      width: 100%;
      -webkit-clip-path: inset(25% 0  round 0 0%);     //裁剪
      position: relative;
      /*margin-top: -160px;*/
    }
    .detail-title{
      z-index: 99;
      position: relative;
      //color: whitesmoke;
      .fz(font-size,36);
      font-weight: 700;
      top:-75px;
    }
    .detail-source{
       .fz(font-size,24);
       z-index: 99;
       position: absolute;
       top:200px;
       right: 10px;
       color: white;
    }

  }
  .detail-body{
    text-align: left;
    padding: 3vw;
    position: relative;
    top:-75px;
   figure{

   }

  }

}
</style>
