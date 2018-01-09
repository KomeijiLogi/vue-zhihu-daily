<template>
   <section class="section" v-if="sectionDatas">
   <mt-loadmore ref="loadmore" :bottom-method="loadMore" :buttom-all-loaded="allLoaded">
     <ul class="section-list" >
       <li v-for="k in stories" :key="k.id" @click.stop="toDetail(k.id)">
           <div class="section-line">
             <h5 class="section-line-content">
               {{k.title}}
             </h5>
             <img :src="attachImgUrl((k.images)[0])"/>
           </div>
       </li>
     </ul>
   </mt-loadmore>

   </section>
</template>

<script>
    import {Loadmore} from 'mint-ui'
    import {Indicator } from 'mint-ui'
    export default {
       props:['sectionDatas'],
       data(){
         return{
           allLoaded:false,
           stories:[],
           date:Date,
           dateStr:'',          //日期字符串
           loading:false
         }
       },
      created(){
          //判断是否是第一次进入index
         if(this.$store.state.isFirstLoad){
           //加载最近6条数据
           this.fetchDatas();
           this.$store.dispatch('changeLoadState');
         }
         this.initDate();

          this.$on('refresh',()=>{
            refreshData();
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
         //加载更多
         loadMore(){
              //请求数据

             //this.allLoaded=true; //数据全部加载完
             this.$refs.loadmore.onBottomLoaded(); //重新定位
         },
         //跳转到详情页
         toDetail(id){
            this.$store.dispatch('changeCurrentNewsId',id);
            this.$store.dispatch('changeNewsType',0);
            this.$router.push({name:'详情页',params:{id:id}});
         },
         //请求最近6条数据
         fetchDatas(){
           this.$axios.get('/api/news/latest')
             .then((res)=>{
                this.stories=res.data.stories;
                let ids=res.data.stories.map((story)=>{story.id});

                this.$store.dispatch('addNews',{
                  stories:this.stories,
                  ids:ids
                })
             })
             .catch((err)=>{
               console.log(err);
             });
         },
         //根据日期请求过往数据 >=20130520
         fetchMoreDatas(){

         },
         //初始化时间
         initDate(){

         },
         //日期前推
         descDate(){

         },
         //刷新数据
         refreshData(){
            this.$store.dispatch('refreshNews');
         },
         //将date转换成string
         changeDate2String(){

         }
       }
    }
</script>

<style lang="less" scoped>
@import "../../assets/fz";
@import "../../assets/icons/iconfont";
.section{
  margin-top:60vw ;
  margin-bottom: 20vw;
  .section-list{
    text-align: left;
    list-style-type: none;
    padding: 0;
    li{

       border: #a7a7a7 1px solid;
       border-radius: 2.5vw;
       margin: 1vw;
       .section-line{
         display: flex;
         justify-content: flex-end;

         flex-direction: row;

         .section-line-content{
             padding: 2vw;
         }
         img{
            height: 20%;
            width: 20%;
         }
       }
    }
  }
}

</style>
