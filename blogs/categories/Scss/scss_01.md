---
title: Scss的使用
date: 2021-12-06
categories:
  - css
tags:
  - css
---

## SCSS 的使用

### 1.@mixin 和@include 的使用 混入

```scss
$color:#ccc
//可变参数$color...
@mixin btn($color) {
  width: 120px;
  height: 65px;
  color: $color;
  border: 1px solid #ccc;
}

.cancelBtn {
  @include btn($color);
  font-size: 16px;
}
//将以上代码转换为 CSS 代码，如下所示：
.cancelBtn {
  width: 120px;
  height: 65px;
  color: #ccc;
  border: 1px solid #ccc;
  font-size: 16px;
}
```

### 2.@extend 的使用 继承

```scss
.button-basic {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report {
  @extend .button-basic;
  background-color: red;
}

.button-submit {
  @extend .button-basic;
  background-color: green;
  color: white;
}
将以上代码转换为 CSS 代码，如下所示： Css 代码： .button-basic,
.button-report,
.button-submit {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report {
  background-color: red;
}

.button-submit {
  background-color: green;
  color: white;
}
```
