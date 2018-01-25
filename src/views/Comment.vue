<template>
  <div class="comment">
      <span v-if="commitLongDatas.comments.length!=0">长评论</span>
      <ul class="comment-ul" v-if="commitLongDatas.length!=0">
        <li v-for="j in commitLongDatas.comments" class="comment-li">
            <div class="comment-user">
                <span>{{j.author}}</span>
                <img v-lazy="attachImgUrl(j.avatar)"/>
            </div>
            <p>{{j.content}}</p>

            <!--<div v-for="i in j.reply_to" v-if="j.reply_to">-->
               <!--<p>{{i.author}}</p>-->
               <!--<p>{{i.content}}</p>-->
            <!--</div>-->
           <div v-if="j.reply_to" class="replytolong">
              <p>{{j.reply_to.author}}</p>
              <p>{{j.reply_to.content}}</p>
           </div>
          <p class="time">{{timestampToDate(j.time)}}</p>
        </li>
      </ul>


      <span>短评论</span>
      <ul class="comment-ul">
         <li v-for="k in commitDatas.comments" class="comment-li">
            <div class="comment-user">
               <span>{{k.author}}</span>
               <img v-lazy="attachImgUrl(k.avatar)"/>
            </div>
            <p>{{k.content}}</p>
           <p class="time">{{timestampToDate(k.time)}}</p>
         </li>
      </ul>
      <v-footer></v-footer>
  </div>
</template>

<script>
    import Footer from '@/components/comment/footer.vue'
    export default {
       data(){
          return{
             commitDatas:'',  //短评论集合
             commitLongDatas:''  //长评论集合
          }
       },
       components:{
          'v-footer':Footer
       },
       created(){
          //获取短评论详情
          let id=this.$route.params.id;
          this.$axios.get('/api/story/'+id+'/short-comments')
            .then((res)=>{
                console.log(res.data);
                this.commitDatas=res.data;
            })
            .catch((err)=>{
              console.log(err);
            });
          this.$axios.get('/api/story/'+id+'/long-comments')
            .then((res)=>{
               console.log(res.data);
               this.commitLongDatas=res.data;
            })
            .catch((err)=>{
              console.log(err);
            });
       },
       methods:{
         //修改图片链接
         attachImgUrl(url){
           if(url!=undefined){
             //将图片链接替换，直接访问知乎图片会返回403，这是对应知乎防盗链的操作
             return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
           }
         },
         //将时间戳转成时间str
         timestampToDate(timestamp){
           //获取时间戳转换的日期
          return  new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');

         }
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
       margin-bottom: 15vw;
       .comment-li{
          border: #acacac 1px solid;
          border-radius: 3vw;
          box-shadow: 10px 10px 5px #888888;
         margin: 3vw;
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
         .time{
           .fz(font-size,20);
           color: #acacac;
           text-align: right;
         }
         .replytolong{


           p:nth-child(1){
             color: #a7a7a7;
             text-align: right;
             .fz(font-size,25);
             font-weight: 900;
           }
           p:nth-child(2){
              .fz(font-size,27);
              color: #7f7f7f;
           }
         }
         &:nth-child(2){
            //margin-bottom:8vw;
         }
       }
     }

  }
</style>
