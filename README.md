1、主题色选取活泼色二级#fff1b8
2、对主题进行配置，使用craco作为方案  yarn add @craco/craco
更改配置
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
创建craco.config.js文件进行配置,并更改以下信息
/* src/App.js */
- import './App.css';
+ import './App.less';
/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';
安装$ yarn add craco-less，并将官方的配置加入craco.config.js中

