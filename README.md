# vue-axios

`$ cd vue-axios`
`$ yarn serve`

[axios](https://github.com/axios/axios)  


[Vue.js + Node.js + OpenAPI 帶你一次了解 CORS 跨域請求](https://medium.com/@moojing/vue-js-node-js-openapi-%E5%B8%B6%E4%BD%A0%E4%B8%80%E6%AC%A1%E4%BA%86%E8%A7%A3cors%E8%B7%A8%E5%9F%9F%E8%AB%8B%E6%B1%82-b37cd926551f)  
✓ [利用google apps script做中繼點跨網域遠端取得api資料](https://mtwmt.github.io/blog/api_cors_error/)  
[Google Apps Script](https://developers.google.com/apps-script/)  

HTTP 的 CORS Request  
就像前面說的，CORS Request並非完全不可行，只是在Server端必須要有一些設定。既然我們不可能修改OpenAPI的Server內容，又因為後端資料交互是不會碰到瀏覽器的（因此就不會因為跨域問題被阻擋），我們就自己架一個Proxy Server來修改Http相關的設定，讓前端可以順利拿到資料。

[vue浏览器跨域问题及解决办法](https://segmentfault.com/a/1190000014396546)
[vue2.0 proxyTable配置，解决跨域](https://segmentfault.com/a/1190000014396546)
[解決 AJAX 沒辦法取得 CORS（跨網域存取）資料的問題](https://noob.tw/js-cors/)  
[Day19 純、手工系列 JS(Vue Axios篇)](https://ithelp.ithome.com.tw/articles/10194612) 

[vue 设置了简单请求，仍然存在跨域问题](https://segmentfault.com/q/1010000017902908)  
[vue-cli3.0 axios跨域请求代理配置及端口修改](https://blog.csdn.net/m0_37285193/article/details/83176597) 
[Vue使用Axios实现http请求以及解決](https://blog.csdn.net/LJJ1338/article/details/81812035)  
[解决 axios 跨域时，发送 post 请求变 options 的问题](https://learnku.com/laravel/t/6321/the-problem-of-sending-post-requests-to-options-when-axios-cross-domain-is-solved)  



[Financial Modeling Prep API Documentation](https://financialmodelingprep.com/developer/docs/)


By default, `axios` serializes JavaScript objects to `JSON`. To send data in the `application/x-www-form-urlencoded` format instead, you can use one of the following options.

# 第三方金流

由前端form表單提交  

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
