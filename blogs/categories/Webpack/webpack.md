---
title: webpack基础配置
date: 2021-11-23
categories:
 - webpack
tags:
 - webpack
---
## webpack配置
```js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  // 项目打包的相对路径,必须是绝对路径
  // context:process.cwd(),
  // 入口
  entry: "./src/index.js",
  //   entry:[],//合并为一个
  //   entry:{
  //     index:"./src/index.js",
  //     other:"./src/other.js"
  //     },//多入口

  // 出口
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    // 占位符
    // hash 整个项目的hash值 [hash:8]指定位数，最多20位
    // chunkhash 根据不同入口进行依赖解析，构建对应的chunk，只有entry发生改变，hash值才会改变
    // name
    // id
  },
  //   构建模式
  mode: "development", //development production none,
  //module 处理不认识的模块，webpack默认只支持js，json
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader 把css内容 加入到js模块中去
        //style-loader 从js中提取css的loader 在HTML中创建style标签 再把css放进style标签中
        //执行顺序，从后往前执行
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // 开启css模块化
              modules: true,
            },
          },
          { loader: "postcss-loader" },
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:8].[ext]",
            outputPath: "images",
            //推荐小体积转成base64
            limit: 12 * 1024,
          },
        },
        // file-loader 推荐使用url-loader 因为支持limit
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash:8].[ext]",
            outputPath: "fonts",
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              // 语法转换插件
              ["@babel/preset-env",{
                targets:{
                  chrome:"67",
                  firefox:"60",
                  safari:"11.1",
                  edge:"17",
                  ie:"11"
                },
                corejs:2,
                useBuiltIns:"usage",
              }],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    // 开发服务器
    port: 8080,
    // HMR
    hot: true,
    // hotOnly: true,
    // 开启服务器自动打开浏览器
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:9542",
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
    //mock server
    // before(app,server){
    //   console.log("devServer before");
    // },
    // after(){
    //   console.log("devServer after");
    // }
  },
  //   插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

```