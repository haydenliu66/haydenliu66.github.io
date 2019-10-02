# GITHUB.IO

> https://haydenliu66.github.io

## 环境
建议
- 环境: node8或以上版本 + yarn/npm
- 编辑器：vscode

注：推荐使用node-v8.x的最新版本[https://nodejs.org/zh-cn/download/](https://nodejs.org/dist/latest-v8.x/)

## 开始
```bash
yarn
yarn run dev
```

### 代码规范
- https://github.com/airbnb/javascript
- `.vue`文件及相关文件夹命名为全小写，以`-`分隔，例如：`button-group`

### 部署

此配置仅针对于user.github.io项目，github是固定使用master分支的index.html作为入口文件
因此打包后需要把打包文件直接推送master分支，并且需要把编译后的index.html放到根目录
```bash
yarn run build
git pull && git push
```

### More Config
[Vue-cli 3](https://cli.vuejs.org/)
