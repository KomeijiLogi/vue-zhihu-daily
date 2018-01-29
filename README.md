# vzhihu-daily

> 基于vue2.x全家桶实现的知乎日报


>版权声明:
### App调用知乎日报的接口，仅供学习练习所用，涉及到的知乎相关内容归知乎所有

>技术栈

#### vue2.x       --项目前端核心框架
#### vuex         --vue状态管理
#### vue-router   --vue路由控制
#### axios        --vue中ajax实现,官方推荐,vue-resource已停止更新
#### less         --动态样式语言  
#### es6          --js新标准 
#### webpack      --打包工具
#### vue-cli      --vue项目构建工具
#### iconfont     --字体图标样式文件
#### normalize.css  --css标准化文件，对html元素预处理

##### 主要使用了vue2.x全家桶，vue路由控制跳转以及访问页面控制，用vuex管理状态，样式方面使用less来布局，用iconfont阿里图片库提供素材，用axios实现与接口通信

>难点:
##### 1.知乎api的调用，这里参考了[cccyb的知乎日报](https://github.com/cccyb/vue-zhihu-daily)中开发环境调用接口的方法
##### 具体为在config/index.js里dev下配置vue-cli的proxyTable参数,以解决开发环境下跨域访问问题
<pre>
   <code>
      proxyTable: {
      '/api':{
        target:'http://news-at.zhihu.com',
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/api/4'
        }

      },
      '/api7':{
        target:'http://news-at.zhihu.com',
        changeOrigin:true,
        pathRewrite:{
          '^/api7':'/api/7'
        }
      }
   </code>  
</pre>

#####  2.知乎Api的开发文档参考的是izzyleung对于知乎api的分析，感谢izzyleung提供了api详情以让我专注于移动端开发<br/>
#####  这里是[izzyleung关于知乎Api的分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

#####  3.关于知乎获取图片的问题，如果直接访问会返回403 ，这是知乎防盗链机制，在参考cccyb的知乎日报时，用了以下函数替换连接来间接访问知乎的图片，
#####  但依然存在有时加载过慢的情况，会在后续改善
<pre>
  <code>
        attachImgUrl(url){
           if(url!=undefined){
             //将图片链接替换，直接访问知乎图片会返回403，这是对应知乎防盗链的操作
             return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
           }
         },
  </code> 
</pre>

>说明:
##### 现阶段主要实现通过vue来展现一些从知乎日报中获取的内容数据和评论数据，还有很多地方没有实现，会在后续的版本中完善实现
##### 现在的效果图如下:<br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/blob/master/gif/zhihu1.gif)<br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/blob/master/gif/zhihu2.gif)<br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/blob/master/gif/zhihu3.gif)<br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/blob/master/gif/zhihu4.gif)<br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/blob/master/gif/zhihu5.gif)<br/>

>项目结构:
##### (待补充)


>By KoimeijiLogi 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
