<template>
    <div class="editor">
        <iframe>

        </iframe>
    </div>
</template>

<script>
    export default {
       data(){
          return{
             datas:''
          }
       },
       created(){
          //在create钩子里获取editorId，通过请求对应api获取编辑的信息
          let editorId=this.$route.params.editorId;
          this.$axios.get('/api/editor/'+editorId+'/profile-page/android')
            .then((res)=>{
                console.log(res.data);
                document.querySelector('iframe').setAttribute('srcdoc',res.data);

            })
            .catch((err)=>{

            });


       }
    }
</script>

<style lang="less" scoped>
  @import "../assets/fz";
  @import "../assets/icons/iconfont";
  .editor{
     iframe{
        width: 100%;
        height: 120vw;
     }
  }
</style>
