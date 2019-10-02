'use strict'
const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      // chunks: ['chunk-vendors', 'chunk-common', 'index'],
      title: '首页'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '',
  outputDir: 'dist',
  // 打包后的地址
  indexPath: path.join(__dirname, './index.html'),
  chainWebpack: config => config.plugins.delete('named-chunks'),
  transpileDependencies: [
    // 'resize-detector',
    'element-ui'
  ],
  devServer: {
    port: 4758,
    open: true,
    overlay: true,
    contentBase: 'public',
    proxy: {
      '/public': {
        target: 'http://127.0.0.1:4758',
        changeOrigin: true,
        pathRewrite: {
          '^/public': ''
        }
      }
    }
  }
}
