import axios from 'axios'


const api=axios.create({
   baseURL:'http://news-at.zhihu.com',
   timeout:5000,
   headers:{
      // 'Content-Type':'application/x-www-form-urlencoded',
      'X-Requested-With':'XMLHttpRequest',
     'Access-Control-Allow-Origin':'http://news-at.zhihu.com',
     'Access-Control-Allow-Credentials':true,     //是否允许发送cookies,但是需要服务器端和ajax中设置,现在这么配置依然不会处理cookies

   }
})





