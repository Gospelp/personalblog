---
title: Jenkins的使用
date: 2022-1-20
categories:
 - server
tags:
 - server
---
## Jenkins
#### 1.安装

官网下载安装 注意：需要Java安装Java环境

安装完成后在浏览器输入127.0.0.1:9090，根据提示完成Jenkins是的安装配置

#### 2.配置

生成 github token

![image-20220121143729839](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121143729839.png)

![image-20220121143759972](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121143759972.png)

![image-20220121143845319](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121143845319.png)

选择repo和admin:repo_hook就行了

![image-20220121144134345](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121144134345.png)

进入Jenkins首页选择系统配置

![](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121143222591.png)

下面回到Jenkins勾选管理Hook，配置token信息，拿到Hook URL再到github配置webhook

![image-20220121144526388](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121144526388.png)

![image-20220121144616196](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121144616196.png)

![image-20220121144729524](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121144729524.png)

新建一个空项目

![image-20220121144804375](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121144804375.png)

配置项目地址，输入git地址配置token，保证分支名称正确，勾选GitHub hook trigger for GITScm polling，点击增加构建步骤选择第一个输入命令

```bash
npm install
npm run build
npm run serve
```

![image-20220121144908718](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\image-20220121144908718.png)



最后你就可以push您的代码，Jenkins就是帮你自动构建啦
