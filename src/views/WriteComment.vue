<template>
    <div class="write-comment">
        <v-header class="write-comment-header">
           <h2 slot="title">写评论</h2>
        </v-header>
       <textarea placeholder="请填写评论..." rows="20" cols="50" class="write-comment-area" v-model="discuss">

       </textarea>
       <mt-button size="large" type="primary" @click="postDiscuss()">
            提交
       </mt-button>
    </div>

</template>

<script>
    import Header from '@/common/header.vue'
    import {Toast} from 'mint-ui'
    export default {
        components:{
          'v-header':Header
        },
        data(){
           return{
             discuss:''
           }
        },
        methods:{
          //提交评论函数,实际上应该登录后通过接口反向传递数值回去
          postDiscuss(){
               Toast(`模拟提交评论成功`);
               setTimeout(()=>{
                 this.discuss='';
               },1000);

          }
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/fz";
  @import "../assets/icons/iconfont";
  .write-comment{

     .write-comment-area{
        padding: 1vw;
        margin: 1vw;
     }

  }
</style>
