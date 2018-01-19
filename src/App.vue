<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div v-if="circle" class="circle" onclick="top">
       <i class="iconfont icon-more"></i>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    circle(){
       return this.$store.state.circleFlag;
    }
  },
  methods:{
     top(){
       //回弹到顶部
       
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

</style>
