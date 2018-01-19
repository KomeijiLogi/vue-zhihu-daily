var config={
  //heroku 上设置的zhihu 接口代理网址node.js
  site: 'zhihu-agent.herokuapp.com',
  method: '/get?api='
}
export const API_ROOT='https://'.concat( config.site, config.method )
