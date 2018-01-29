<template>
  <div class="header">
    <mt-header title="首页" fixed>
      <mt-button icon="more" slot="left" @click.stop="showPopup"></mt-button>
    </mt-header>
    <mt-popup v-model="popupVisible" position="left">
      <v-popup></v-popup>
    </mt-popup>
  </div>


</template>

<script>
    import Popup from '@/components/index/popup.vue'
    export default {
      data(){
        return {
          popupVisible:false
        }
      },
      components:{
         'v-popup':Popup
      },
      methods:{
        showPopup(){
           //控制左侧弹出侧边栏
           this.popupVisible=!this.popupVisible;

        }
      }
    }
</script>

<style lang="less" scoped>
  .mint-header{
    /*opacity: 0.8;*/
    background-color: rgba(255,255,255,0.4);
    //color: #76B4ED;
    color: #3C74F7;
    filter:contrast(2);    //对比度
    -webkit-filter: contrast(2);
  }
</style>
