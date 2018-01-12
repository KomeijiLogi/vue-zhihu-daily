<template>
   <div class="theme">
      <v-header class="header-theme">
          <h2 slot="title">
             {{datas.name}}
          </h2>
      </v-header>
       <img :src="attachImgUrl(datas.background)" class="theme-bg" />
       <span class="theme-title">{{datas.description}}</span>
       <div class="theme-editor">
          <router-link to="/">
            <span>主编</span>
            <div v-for="n in datas.editors">
              <img v-lazy="attachImgUrl(n.avatar)"/>
            </div>
          </router-link>

       </div>
       <ul class="theme-list">
         <router-link :to="{name:'详情页',params:{id:k.id}}" v-for="k in datas.stories" >
           <li class="theme-li">
             <span>{{k.title}}</span>
             <img v-lazy="attachImgUrl(k.images)" />
           </li>
         </router-link>
       </ul>
   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    export default {
      data(){
        return{
           datas:''
        }
      },
      components:{
        'v-header':Header
      },
      created(){
        //通过路由取到当前页面id
         let id=this.$route.params.id;
         this.$axios.get('/api/theme/'+id)
           .then((res)=>{
              console.log(res.data);
              this.datas=res.data;
           })
           .catch((err)=>{
              console.log(err);
           })

      },
      methods:{
        //修改图片链接
        attachImgUrl(url){
          if(url!=undefined){
            //将图片链接替换，直接访问知乎图片会返回403，这是对应知乎防盗链的操作
            return String(url).replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
          }
        },
      }
    }
</script>

<style lang="less" scoped>
  @import "../assets/fz";
  @import "../assets/icons/iconfont";
  .theme{
    display: flex;
    flex-direction: column;
    .header-theme{
       background-color: #00a2ed;
       color: white;
    }
    .theme-bg{
      height: 60vw;
      padding: 1vw;

    }
    .theme-title{
       font-weight: 800;
       .fz(font-size,40);

    }
    .theme-editor{
       display: flex;
      flex-direction: row;
      a{
        display: flex;
        flex-direction: row;
      }
      span{
        text-indent: 2vw;
         margin-left:6vw;
         margin-top: 4vw;
         color: black;
      }
      div{


         img{
            border-radius: 50%;
            width: 5vw;
            height: 5vw;
            margin-left: 2vw;
           margin-top: 4vw;
         }
      }
    }
    .theme-list{
       list-style-type: none;
       a{
         text-decoration: none;
       }
       li{
         text-align: left;
         display: flex;
         flex-direction: row;
         padding:2vw;
         line-height: 6vw;
         border: #acacac 1px solid;
         border-radius: 2.5vw;
         margin: 3vw;
         color: black;
         justify-content: flex-end;

         span{
            .fz(font-size,28);
            font-weight: 700;
            color:gray;
            padding: 2vw;
         }
         img{
            width: 20vw;
            height: 20vw;
         }

       }
    }
  }

</style>
