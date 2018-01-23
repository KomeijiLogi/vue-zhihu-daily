<template>
   <section class="section">

       <ul class="section-list"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10"
       >
         <li v-for="k in stories"  @click.stop="toDetail(k.id)">
           <div class="section-line">
             <h5 class="section-line-content">
               {{k.title}}
             </h5>
             <img v-lazy="attachImgUrl((k.images)[0])"/>
           </div>
         </li>
       </ul>


   </section>
</template>

<script>

    import { Indicator } from 'mint-ui'

    export default {
       data(){
         return{
           date:Date,
           dateStr:'',          //日期字符串
           loading:false,
           allLoaded:false

         }
       },
      created(){
          //判断是否是第一次进入index
         if(this.$store.state.isFirstLoad){
           //加载最近N条数据
           this.fetchDatas();
           this.$store.dispatch('changeLoadState');
         }
         this.initDate();

          this.$on('refresh',()=>{
            //清空数据
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

              this.loading=true;

              Indicator.open({
                 text:'加载中...',
                 spinnerType:'double-bounce'
              });


              //请求数据
              this.$nextTick(()=>{
                this.fetchMoreDatas();
              });
              this.loading=false;
         },
         //跳转到详情页
         toDetail(id){
            this.$store.dispatch('changeCurrentNewsId',id);
            this.$store.dispatch('changeNewsType',0);
            this.$router.push({name:'详情页',params:{id:id}});
         },
         //请求最近N条数据
         fetchDatas(){
           this.$axios.get('/api/news/latest')
             .then((res)=>{
                let stories=res.data.stories;
                let ids=res.data.stories.map((story)=>{story.id});

                this.$store.dispatch('addNews',{
                  stories:stories,
                  ids:ids
                })
             })
             .catch((err)=>{
               console.log(err);
             });
         },
         //根据日期请求过往数据 >=20130520
         fetchMoreDatas(){
             //this.decrDate();
             this.$axios.get('/api/news/before/'+this.dateStr)
               .then((res)=>{
                 //合并数据
                 let stories=res.data.stories;
                 let ids=res.data.stories.map((story)=>{story.id});

                 this.$store.dispatch('addNews',{
                   stories:stories,
                   ids:ids
                 });
                 //关闭Indicator
                 Indicator.close();
                 this.decrDate();
               })
               .catch((err)=>{
                  console.log(err);
               });
         },
         //初始化时间
         initDate(){
            this.date=new Date();
            this.changeDate2String(this.date);
         },
         //日期前推
         decrDate(){
            //console.log((this.date).toLocaleString());
            this.date.setDate(this.date.getDate()-1);
            this.changeDate2String(this.date);
         },
         //刷新数据
         refreshData(){
            this.$store.dispatch('refreshNews');
            //重新获取数据,nextTick更新内容后立即获取更新后的Dom
            this.$nextTick(()=>{
              this.fetchDatas();
            });
         },
         //将date转换成string
         changeDate2String(date){
            //console.log(date.toLocaleString());
            let year=date.getFullYear();
            let month=date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
            let day=date.getDate()<10?'0'+date.getDate():date.getDate();
            //强转成str型，防止当成数字运算
            let dateStr=String(year)+String(month)+String(day);
            //console.log('year:'+year+'month:'+month+'day:'+day);
            this.dateStr=dateStr;
         }
       },
       computed:{
          stories(){
             return this.$store.state.stories;
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
      box-shadow: 10px 10px 5px #888888;
       border: #a7a7a7 1px solid;
       border-radius: 2.5vw;
       margin: 3vw;
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
