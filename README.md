# vue-axios

`yarn add axios`

## json-server

`$ npm i -g json-server`  
`$ json-server --watch db.json`

  Resources  
  http://localhost:3000/posts  
  http://localhost:3000/comments  
  http://localhost:3000/profile  

  Home  
  http://localhost:3000  


es6 的 promise 逐步解決了層層回調的問題，
es8 的 async await 讓異步變成了同步的寫法，

在 vue 中，可以通過封裝 axios, 使得所有的請求都可以使用同步寫法

[async 和 await 封裝 axios](https://www.axihe.com/anbang/blog/vue/using-async-and-await-to-encapsulate-axios.html)

特別注意，引入 async 以後，results 會是一堆的 Promise 物件，而不是一個數值陣列。

## References

[vue中Axios的封装和API接口的管理](https://juejin.im/post/5b55c118f265da0f6f1aa354)
[聊聊 Vue 中 axios 的封装](https://juejin.im/post/5da90c3e6fb9a04e031c0413)
[vue-cli axios.all 如何让请求按顺序执行](https://segmentfault.com/q/1010000018122601)
[JavaScript async/await 的奇淫技巧](https://fred-zone.blogspot.com/2017/04/javascript-asyncawait.html)  實現 delay 函數

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
