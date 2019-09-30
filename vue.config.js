'use strict'
const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: '首页',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '',
  outputDir: 'dist',
  // 打包后的地址
  indexPath: path.join(__dirname, './index.html'),
  // chainWebpack: config => config.plugins.delete('named-chunks'),
  devServer: {
    port: 4758,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}