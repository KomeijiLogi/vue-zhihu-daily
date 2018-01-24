<template>
    <div class="editor">

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
          let editorId=this.$route.query.editorId;
         console.log(editorId);
       }
    }
</script>

<style lang="less" scoped>

</style>
