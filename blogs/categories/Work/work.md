---
title: 工作知识
date: 2021-11-24
categories:
 - 工作杂记
tags:
 - work
---
## tips

### 1.设置字体渐变

```css
 background-image: linear-gradient(135deg, red, blue);
 background-clip: text;
 color: transparent;
```

### 2.拖拽排序

使用awe-dnd插件，通过指令的方式。后期如果想要配合后端，可以通过后端返回的序号用computed属性进行排序，使用列表的sort

```javascript
 this.$dragging.$on('dragged', ({ value }) => {
      console.log(value.item)
      console.log(value.list)
      // console.log(value.otherData)
    })
    this.$dragging.$on('dragend', (res) => {
        console.log(res);
    })
```



### 3.浏览器去掉滚动条

```css
/*火狐*/
scrollbar-width: none;
/*谷歌*/
div::-webkit-scrollbar {
    display: none;
}
```

### 4.背景虚化

```css
  /* 背景虚化 */
backdrop-filter: blur(2px) brightness(50%);
background-color: rgba(0, 0, 0, .1);
```

### 5.文本超出...

```css
/*css一行文本超出...*/ 
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
/*多行文本超出显示...*/
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

### 6.解析GET参数

```javascript
//通过replace方法获取url中的参数键值对，可以快速解析get参数。
const q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
console.log(q); 
```

### 7.移动端去除点击背景

 

```css
 -webkit-tap-highlight-color: rgba(255,255,255,0);
```

### 8.对象属性访问的两种方式

```javascript
//对象属性访问的两种方式 . 不适用于动态属性，[]适用于动态属性，常用语组件封装

//例子
let person = {
    name:"moyut"
}
person.name
person["name"]
```

### 9.vue异步传参

异步传参使用watch函数 或者v-if判断是否拿到值 在进行后面的操作
