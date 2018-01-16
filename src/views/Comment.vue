<template>
  <div class="comment">
      <ul class="comment-ul">
         <li v-for="k in commitDatas.comments" class="comment-li">
            <div class="comment-user">
               <span>{{k.author}}</span>
               <img v-lazy="attachImgUrl(k.avatar)"/>
            </div>
            <p>{{k.content}}</p>
         </li>
      </ul>
      <footer class="comment-footer">

           <div >
              去评论
           </div>
        <router-link to="/">
          <span class="iconfont icon-back" ></span>
        </router-link>

      </footer>
  </div>
</template>

<script>
    export default {
       data(){
          return{
             commitDatas:'',  //评论集合

          }
       },
       created(){
          //获取短评论详情
          let id=this.$route.params.id;
          this.$axios.get('/api/story/'+id+'/short-comments')
            .then((res)=>{
                this.commitDatas=res.data;
            })
            .catch((err)=>{
              console.log(err);
            })
       },
       methods:{
         //修改图片链接
         attachImgUrl(url){
           if(url!=undefined){
             //将图片链接替换，直接访问知乎图片会返回403，这是对应知乎防盗链的操作
             return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
           }
         },
       }

    }
</script>

<style lang="less" scoped>
@import "../assets/fz";
@import "../assets/icons/iconfont";
  .comment{
     .comment-ul{
       z-index: 1;
       list-style-type: none;
       .comment-li{
          border: #00a2ed 1px solid;
         margin: 1vw;
          div{
             text-align: right;
             span{
                .fz(font-size,20);
             }
             img{
               border-radius: 50%;
               width: 10vw;
               height: 10vw;
             }
          }
          p{
             text-indent: 2vw;
             text-align: left;
             .fz(font-size,30);
          }
       }
     }
     .comment-footer{
        .bt();
        .bd();
        height: 10vw;
        z-index: 999;
        bottom: 0;
        display: flex;
        flex-direction: row;
        a{

           width: 25%;
          span{
            .fz(font-size,50);
          }
        }
        div{
          padding: 1vw;
          width: 75%;
           .fz(font-size,30);
          text-align: center;
          /*border: #acacac 1px solid;*/
          /*border-radius: 40%;*/
        }
     }
  }
</style>
