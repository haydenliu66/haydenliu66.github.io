'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      // fileName: resolve('./index.html'),
      // chunks: ['chunk-vendors', 'chunk-common', 'index'],
      title: '首页'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './dist/' : '',
  outputDir: 'dist',
  // 打包后的地址
  indexPath: resolve('./index.html'),
  chainWebpack: config => {
    // 修复HMR
    // config.resolve.symlinks(true)
    // 多页应用自定义name chunks
    config.plugins.delete('named-chunks')
    // 添加别名
    config.resolve.alias
    .set('@', resolve('src'))
  },
  transpileDependencies: [
    // 'resize-detector',
    'web-inject',
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
