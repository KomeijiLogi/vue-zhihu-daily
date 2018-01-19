export  default {
    props:{
       scroller:{
           type:[HTMLDocument,Element,Window],
           default:window
       },
       mounted(){
          this.$bindScroll();
       },
       methods:{
          //绑定回滚按钮
          bindScroll(){
            //如果已经绑定，防止重复绑定
             if(!this.scroller) return;
             this._handleScroll=(e)=>{
                if(this.onScroll()) this.onScroll();   //屏幕回滚回调函数
             }
             this.scroller.addEventListener('scroll',this._handleScroll());
          },
          //解除绑定
          unbindScroll(scroller){
              scroller=scroller||this.scroller;

              if(this._handleScroll()) scroller.removeEventListener('scroll',this._handleScroll());
          }

       },
       beforeDestroy(){
         //销毁前解绑
          this.$unbindScroll();
       },
       watch:{
          scroller( scroller , oldScroller ){
             if(scroller===oldScroller) return;
             this.$unbindScroll(oldScroller);
             this.$bindScroll(scroller);
          }
       }
    }

}
