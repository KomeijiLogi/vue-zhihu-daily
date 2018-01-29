<template>
  <div class="index">
     <v-header ></v-header>
     <v-swiper></v-swiper>
     <v-section ></v-section>
     <v-backscroll :scroller="scroller" :flag="circleFlag"  @click.native="top()">
     </v-backscroll>
     <v-footer></v-footer>
  </div>
</template>

<script>
    import Footer from '@/common/footer.vue'
    import Header from '@/components/index/header.vue'
    import Swiper from '@/components/index/swiper.vue'
    import Section from '@/components/index/section.vue'
    import BackSrocll from '@/components/backScroll/backScroll.vue'
    import state from "../vuex/state";
    import { mapState } from 'vuex';
    import {Toast} from 'mint-ui'
    export default {
        components:{
          'v-footer':Footer,
          'v-header':Header,
          'v-swiper':Swiper,
          'v-section':Section,
          'v-backscroll':BackSrocll
        },
        data(){
           return{
             scroller:null
           }
        },
        computed:mapState({
          circleFlag:state=>state.circleFlag      //映射vuex中的circleFlag
        }),
        mounted(){
            this.scroller=this.$el;     //将当前根元素给scroller
        },
        methods:{
           //回到顶部方法
           top(){

             const top=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
             //console.log(top+'|'+document.documentElement.scrollTop+'|'+document.body.scrollTop);
              this.$nextTick(()=>{
                //dom.scrollTop=0;
                 document.documentElement.scrollTop=0;
              })
           }
        }
    }
</script>

<style lang="less" scoped>

</style>
