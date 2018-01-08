export default {
  width: 0,               //浏览器宽度
  height: 0,              //浏览器高度
  loading_flag: false,   //loading动画显示状态
  stories: [],            //新闻内容数组
  ids: [],           //新闻id数组
  current_id: '',         //当前新闻id
  next_id: '',            //下一条新闻id
  isFirstLoad: true,     //是否第一次加载
  collect_stories: [],    //收藏新闻内容数组
  collect_storyids: [],   //收藏新闻id数组
  isCollect: false,       //当前文章收藏状态
  commentCount: 0,         //评论总数
  longCommentCount: 0,     //长评论数
  shortCommentCount:0,     //短评论数
  favorable:0,              //点赞数
  currentThemeId:-1,        //当前主体id
  newsType:-1                //新闻类型  0:普通新闻 1:主体新闻 2:收藏新闻
}
