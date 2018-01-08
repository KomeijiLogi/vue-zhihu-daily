import * as types from './mutations-types'

export default {
   //添加新闻
   addNews({commit},res){
      commit(types.ADD_NEWS,res);
   },
   //修改第一次加载首页时的flag
   changeLoadState({commit}){
     commit(types.CHANGE_LOAD_STATE);
   },
   //刷新页面内容
   refreshNews({commit}){
      commit(types.REFRESH_NEWS);
   },
   //修改当前新闻详情页id
   changeCurrentNewsId({commit},id){
      commit(types.CHANGE_CURRENT_NEWSID,id);
   },
   //收藏新闻
   toggleCollect({commit}){
      commit(types.TOGGLE_COLLECT);
   },
   //判断当前新闻收藏状态
   judgeCollectState({commit}){
     commit(types.JUDGE_COLLECT_STATE);
   },
   //修改新闻类型
   changeNewsType({commit},res){
     commit(types.CHANGE_NEWS_TYPE,res);
   },
   //修改当前主题
   changeCurrentTheme({commit},res){
      commit(types.CHANGE_CURRENT_THEME,res);
   }
}
