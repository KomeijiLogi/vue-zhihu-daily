<template>
  <div class="comment">

  </div>
</template>

<script>
    export default {
       data(){
          return{
             commitDatas:''  //评论集合
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
       }

    }
</script>

<style lang="less" scoped>
@import "../assets/fz";
@import "../assets/icons/iconfont";
  .comment{

  }
</style>
