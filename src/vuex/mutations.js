import * as types from './mutations-types'

export default {
    //新增新闻内容
   [types.ADD_NEWS](state,res){
       state.stories=state.stories.concat(res.stories);
       state.ids=state.ids.concat(res.ids);
   },
   //刷新页面内容
   [types.REFRESH_NEWS](state,res){
      state.stories=[];
   },
   //第一次加载时修改flag状态
   [types.CHANGE_LOAD_STATE](state){
     state.isFirstLoad=!state.isFirstLoad;
   },
   //修改当前新闻详情页id
   [types.CHANGE_CURRENT_NEWSID](state,id){
      state.id=id;
      let index =state.ids.indexOf(state.id);
      state.next_id=state.ids[++index];
   },
   //收藏新闻
   [types.TOGGLE_COLLECT](state){
      let index=state.collect_storyids.indexOf(state.id);
      //判断当前id是否在收藏id数组里
      if(index<0){
        state.collect_storyids.push(state.id);
        //遍历新闻数组
        state.stories.map((item)=>{
          if(item.id==state.id){
            state.collect_stories.push(item);
          }
        });

      }else {
         //从收藏列表中删除
         state.collect_storyids.splice(index,1);
         state.collect_stories.splice(index,1);
      }
      state.isCollect=!state.isCollect;
   },
   //判断新闻当前收藏状态
   [types.JUDGE_COLLECT_STATE](state){
      if(state.collect_storyids.indexOf(state.id)<0){
         isCollect=false;
      }else {
         isCollect=true;
      }
   },
   //修改新闻类型
   [types.CHANGE_NEWS_TYPE](state,res){
      state.newsType=res;
   },
   //修改当前主题
   [types.CHANGE_CURRENT_THEME](state,res){
      state.currentThemeId=res;
   },
   //修改登录状态
   [types.CHANGE_LOGIN_FLAG](state,res){
      state.loginFlag=res;
   },
   //保存用户信息
   [types.SAVE_LOGIN_USERINFO](state,res){
     state.account=res.account;
     state.password=res.password;
   },
   //修改回弹按钮状态
   [types.CHANGE_CIRCLE_FLAG](state,res){
      state.circleFlag=res;
   },
   //修改分享弹出层状态
   [types.CHANGE_SHARE_FLAG](state,res){
      state.shareFlag=!state.shareFlag;
   },


}
