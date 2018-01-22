import {
  API_ROOT
} from './config.js'

const apiZhihu={
    //定义知乎api接口
    news:'/4/news/latest',               //最新消息接口
    newsbyid:'/4/news/',                 //消息内容获取
    newsbydate:'/4/news/before/',       //过往消息获取
    newsinfo:'/4/story-extra/',         //新闻额外消息
    newscomments:'/4/story/',           //新闻评论查看  --long-comments 长评论  --short-comments 短评论
    themes:'/4/themes',                  //主题日报列表查看
    themesbyid:'/4/theme/',              //主题日报内容查看

}

const NEWSLIST =API_ROOT.concat(apiZhihu.news);
const NEWSDETAIL=API_ROOT.concat(apiZhihu.newsbyid);
const NEWSHISTORY=API_ROOT.concat(apiZhihu.newsbydate);
const NEWSEXTRAINFO=API_ROOT.concat(apiZhihu.newsinfo);
const NEWSCOMMENT=API_ROOT.concat(apiZhihu.newscomments);
const THEMES=API_ROOT.concat(apiZhihu.themes);
const THEMESDETAIL=API_ROOT.concat(apiZhihu.themesbyid);

export  default  {
  NEWSLIST,
  NEWSDETAIL,
  NEWSHISTORY,
  NEWSEXTRAINFO,
  NEWSCOMMENT,
  THEMES,
  THEMESDETAIL
}
