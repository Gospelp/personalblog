---
title: Mockjs 使用
date: 2021-12-06
categories:
  - JS
tags:
  - JS
---

# Mockjs使用

## 安装

```js
npm install mockjs --save-dev
// 引入 Mock
var Mock = require('mockjs')
```
```js
//Mockjs实例地址
//http://mockjs.com/examples.html

```

## 一、mockjs的数据类型 及 语法规范

### 1. 属性值是字符串 String

1. `'name|min-max': string`

   通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

2. `'name|count': string`

   通过重复 `string` 生成一个字符串，重复次数等于 `count`。

### 2. 属性值是数字 Number

1. `'name|+1': number`

   属性值自动加 1，初始值为 `number`。

2. `'name|min-max': number`

   生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

3. `'name|min-max.dmin-dmax': number`

   生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

### 3. 属性值是布尔型 Boolean

1. `'name|1': boolean`

   随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

2. `'name|min-max': value`

   随机生成一个布尔值，值为 `value` 的概率是 `min / (min + max)`，值为 `!value` 的概率是 `max / (min + max)`。

### 4. 属性值是对象 Object

1. `'name|count': object`

   从属性值 `object` 中随机选取 `count` 个属性。

2. `'name|min-max': object`

   从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

### 5. 属性值是数组 Array

1. `'name|1': array`

   从属性值 `array` 中随机选取 1 个元素，作为最终值。

2. `'name|+1': array`

   从属性值 `array` 中顺序选取 1 个元素，作为最终值。

3. `'name|min-max': array`

   通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

4. `'name|count': array`

   通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

### 6. 属性值是函数 Function

1. `'name': function`

   执行函数 `function`，取其返回值作为最终的属性值，函数的上下文为属性 `'name'` 所在的对象。

### 7. 属性值是正则表达式 RegExp

1. `'name': regexp`

   根据正则表达式 `regexp` 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。

   

   ```js
   Mock.mock({
       'regexp1': /[a-z][A-Z][0-9]/,
       'regexp2': /\w\W\s\S\d\D/,
       'regexp3': /\d{5,10}/
   })
   // =>
   {
       "regexp1": "pJ7",
       "regexp2": "F)\fp1G",
       "regexp3": "561659409"
   }
   ```

## 二、 Mock.setup()

Mock.setup( settings )

配置拦截 Ajax 请求时的行为。支持的配置项有：timeout
 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。
 值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；
 也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。



```js
  Mock.setup({
    timeout: 400
})
Mock.setup({
    timeout: '200-600'
})
目前，接口 Mock.setup( settings ) 仅用于配置 Ajax 请求，将来可能用于配置 Mock 的其他行为。
```

## 三、Mock.Random 扩展方法

```js
// 引入 Mock
var Mock = require('mockjs')

var random = Mock.Random;

//扩展数据模板
random.extend({
  type: function (index:number) {
    const types = ['products', 'industryApp', 'solution', 'experts'];
    return this.pick(types[index])
  }
});

// 定义数据类型
const  menuSource:Array<any> = [];
 menuSource[0] = Mock.mock({
  "type": "@type(0)",
   'data|3-4':[{
     'id|+1': 1,
     name: "@ctitle( 4,6)",
     "childs|5-10": [{
       'id|+1': 1,
       name: "@ctitle(4,6)",
     }]
   }]
});
// 输出结果
 console.log(data);
```

## 四、mockjs获取前端传递的数据



```js
axios({
      method: "get",
      url: "/getGoods",
      data: {
        id:2
      }
    }).then(data => {
      //成功的回调函数，返回的是增加的数据
      console.log(data.data.data);
      this.url = data.data.data[0].goodsImg
    });
  }

  Mock.mock("/getGoods", "get", (config) => {
  console.log(config);
  return data;
})

###mockjs可以通过option.body获取前端传递的数据
```

置拦截 Ajax 请求时的行为。支持的配置项有：timeout
 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。
 值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；
 也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。



```css
  Mock.setup({
    timeout: 400
})
Mock.setup({
    timeout: '200-600'
})
目前，接口 Mock.setup( settings ) 仅用于配置 Ajax 请求，将来可能用于配置 Mock 的其他行为。
```

## 五、Mock.Random 扩展方法



```js
// 引入 Mock
var Mock = require('mockjs')

var random = Mock.Random;

//扩展数据模板
random.extend({
  type: function (index:number) {
    const types = ['products', 'industryApp', 'solution', 'experts'];
    return this.pick(types[index])
  }
});

// 定义数据类型
const  menuSource:Array<any> = [];
 menuSource[0] = Mock.mock({
  "type": "@type(0)",
   'data|3-4':[{
     'id|+1': 1,
     name: "@ctitle( 4,6)",
     "childs|5-10": [{
       'id|+1': 1,
```



链接：https://www.jianshu.com/p/d812ce349265