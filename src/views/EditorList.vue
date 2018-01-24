<template>
    <div class="editorlist">
       <v-header class="editor-header">
         <h2 slot="title">
            主编
         </h2>
       </v-header>
       <ul class="editor-list">
          <li v-for="k in datas.editors">
             <img :src="attachImgUrl(k.avatar)"/>
            <div>
              <span>{{k.name}}</span>
              <span>{{k.bio}}</span>
            </div>
          </li>
       </ul>
    </div>
</template>

<script>
    import Header from '@/common/header.vue'
    export default {
        components:{
            'v-header':Header
        },
        data(){
           return{
              datas:''
           }
        },
        created(){
           let id=this.$route.params.id;
           this.$axios.get('/api/theme/'+id)
             .then((res)=>{
                console.log(res);
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
  .editorlist{
    .editor-header{

    }
    .editor-list{
       list-style-type: none;
       li{
          margin-bottom: 3vw;
          display: flex;
          flex-direction: row;
          img{
             border-radius: 50%;
             width: 40px;
             height: 40px;
          }
          div{
             padding-left: 3vw;
             display: flex;
             flex-direction: column;
             span{
                text-align: left;
                .fz(font-size,30);
                &:nth-child(2){
                   .fz(font-size,28);
                   color: #acacac;
                }
             }
          }
       }
    }
  }
</style>
