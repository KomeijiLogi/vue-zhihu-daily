<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="k in topStories" :key="k.id" @click.native="toDetail(k.id)">
            <img :src="attachImgUrl(k.image)" :alt="k.title">
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
          this.$axios({
             url:'api/news/latest',
             method:'get'
          }).then((response)=>{
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
              query:{id:id}
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

<style scoped>

</style>
