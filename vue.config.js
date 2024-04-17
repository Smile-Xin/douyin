const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', 
  transpileDependencies: true,
   // 跨域配置
   devServer: {
    
    // 跨域问题解决 代理（关键部分）
    proxy: {
      '/oauth': {
        target: 'https://open.douyin.com', // 注意！此处为后端提供的真实接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 如果接口中是没有api的，那就直接置空，'^/api': ''，
          // 如果接口中有api，那就得写成{'^/api':'/api'}
          '^/oauth': '/oauth'
        }
      },
      '/data': {
        target: 'https://open.douyin.com', // 注意！此处为后端提供的真实接口
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 如果接口中是没有api的，那就直接置空，'^/api': ''，
          // 如果接口中有api，那就得写成{'^/api':'/api'}
          '^/data': '/data'
        }
      },
    }
  },
})
