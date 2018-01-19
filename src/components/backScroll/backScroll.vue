<template>
</template>
<script>
    import Scroll from './backScroll'
    export default {
        mixins:[Scroll],
        props:{
           flag:{
              type:Boolean,
              default:false
           }
        },
        methods:{
          onScroll(){
              const  scroller=this.scroller;
              const  isWindow= (scroller===window);
              const height= Math.ceil(window.screen.height/2);
              const scrollTop=isWindow? scroller.scrollY:scroller.scrollTop;
              //监听页面滑动位置，如果页面滑动过半就显示按钮
              if(scrollTop>height){
                 this.$store.commit('CHANGE_CIRCLE_FLAG',true);
              }else {
                 this.$store.commit('CHANGE_CIRCLE_FLAG',false);
              }
          }
        }
    }
</script>

<style lang="less" scoped>

</style>
