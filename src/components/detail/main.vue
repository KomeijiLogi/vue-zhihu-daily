<template>
    <div class="detail">
       <div v-if="this.$store.state.newsType===0" class="top-wrapper">

       </div>
    </div>
</template>

<script>
    export default {
       data(){
          return{
            
          }
       },
       methods:{
         fetchData(){
            let id =this.$route.params.id;
            this.$axios.get('/api/news/'+id)
              .then((res)=>{

              })
              .catch((err)=>{
                 console.log(err);
              });
         }
       }
    }
</script>

<style scoped>

</style>
