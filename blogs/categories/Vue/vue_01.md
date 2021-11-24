---
title: Vue国际化配置
date: 2021-11-24
categories:
 - Vue
tags:
 - Vue2.0
---
### Vue-i18n

```javascript
// 如果使用模块系统 (例如通过 vue-cli)，则需要导入 Vue 和 VueI18n ，然后调用 Vue.use(VueI18n)。
// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
//
// Vue.use(VueI18n)

// 准备翻译的语言环境信息
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'ja', // 设置地区
  messages, // 设置地区信息
})


// 通过 `i18n` 选项创建 Vue 实例
new Vue({ i18n }).$mount('#app')

// 现在应用程序已经准备好了！
```

