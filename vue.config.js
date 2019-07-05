// vue.config.js
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/apis': {
                target: 'https://w88asiapay.epspci.com/',  // target host
                secure: false,  // 如果是https接口，需要配置这个参数
                ws: true,  // proxy websockets 
                changeOrigin: true,   // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
