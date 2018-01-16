# vzhihu-daily

> 基于vue2.x全家桶实现的知乎日报


>版权声明:
### App调用知乎日报的接口，仅供学习练习所用，涉及到的知乎相关内容归知乎所有

>技术栈

##### vue2.x
##### vuex
##### axios
##### less
##### es6
##### vue-router

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


>说明:
##### 算是刚开个头吧，有些东西还需要之后完善实现，现在的效果图如下
![](https://github.com/KomeijiLogi/vzhihu-daily/tree/master/gif/zhihu1.gif) <br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/tree/master/gif/zhihu2.gif) <br/>
![](https://github.com/KomeijiLogi/vzhihu-daily/tree/master/gif/zhihu3.gif) <br/>






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
