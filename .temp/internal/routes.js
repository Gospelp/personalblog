/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\个人学习项目\\15-vuepress\\my-blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-6efbadd8",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6efbadd8").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c157d9d8",
    path: "/blogs/categories/Miniprogram/wechat01.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c157d9d8").then(next)
    },
  },
  {
    name: "v-0d20bf84",
    path: "/blogs/categories/JS/mockjs.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0d20bf84").then(next)
    },
  },
  {
    name: "v-131aee4c",
    path: "/blogs/categories/Server/sever.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-131aee4c").then(next)
    },
  },
  {
    name: "v-171fd64c",
    path: "/blogs/categories/JS/JS_01.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-171fd64c").then(next)
    },
  },
  {
    name: "v-38e13e9a",
    path: "/blogs/categories/Scss/scss_01.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-38e13e9a").then(next)
    },
  },
  {
    name: "v-7cd2b24c",
    path: "/blogs/categories/React/react.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7cd2b24c").then(next)
    },
  },
  {
    name: "v-280155d4",
    path: "/blogs/categories/Vue/vue_01.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-280155d4").then(next)
    },
  },
  {
    name: "v-228172d4",
    path: "/blogs/categories/Webpack/webpack.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-228172d4").then(next)
    },
  },
  {
    name: "v-3d5e01f4",
    path: "/blogs/categories/Vue/vue_02.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3d5e01f4").then(next)
    },
  },
  {
    name: "v-b1f33ee0",
    path: "/docs/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b1f33ee0").then(next)
    },
  },
  {
    name: "v-4ef83070",
    path: "/blogs/categories/Vue/vue.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ef83070").then(next)
    },
  },
  {
    name: "v-5dce1052",
    path: "/blogs/categories/Work/work.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5dce1052").then(next)
    },
  },
  {
    name: "v-5cb75766",
    path: "/blogs/other/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5cb75766").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-1426b364",
    path: "/tag/mini/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1426b364").then(next)
    },
    meta: {"pid":"tags","id":"mini"}
  },
  {
    path: "/tag/mini/index.html",
    redirect: "/tag/mini/"
  },
  {
    name: "v-e8d965c8",
    path: "/tag/JS/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-e8d965c8").then(next)
    },
    meta: {"pid":"tags","id":"JS"}
  },
  {
    path: "/tag/JS/index.html",
    redirect: "/tag/JS/"
  },
  {
    name: "v-642d6b62",
    path: "/tag/server/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-642d6b62").then(next)
    },
    meta: {"pid":"tags","id":"server"}
  },
  {
    path: "/tag/server/index.html",
    redirect: "/tag/server/"
  },
  {
    name: "v-323b9794",
    path: "/tag/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-323b9794").then(next)
    },
    meta: {"pid":"tags","id":"css"}
  },
  {
    path: "/tag/css/index.html",
    redirect: "/tag/css/"
  },
  {
    name: "v-cd52144c",
    path: "/tag/React/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-cd52144c").then(next)
    },
    meta: {"pid":"tags","id":"React"}
  },
  {
    path: "/tag/React/index.html",
    redirect: "/tag/React/"
  },
  {
    name: "v-fee16492",
    path: "/tag/Vue2.0/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-fee16492").then(next)
    },
    meta: {"pid":"tags","id":"Vue2.0"}
  },
  {
    path: "/tag/Vue2.0/index.html",
    redirect: "/tag/Vue2.0/"
  },
  {
    name: "v-b53ec9e8",
    path: "/tag/webpack/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-b53ec9e8").then(next)
    },
    meta: {"pid":"tags","id":"webpack"}
  },
  {
    path: "/tag/webpack/index.html",
    redirect: "/tag/webpack/"
  },
  {
    name: "v-fee07bd4",
    path: "/tag/Vue3.0/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-fee07bd4").then(next)
    },
    meta: {"pid":"tags","id":"Vue3.0"}
  },
  {
    path: "/tag/Vue3.0/index.html",
    redirect: "/tag/Vue3.0/"
  },
  {
    name: "v-13074a58",
    path: "/tag/work/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-13074a58").then(next)
    },
    meta: {"pid":"tags","id":"work"}
  },
  {
    path: "/tag/work/index.html",
    redirect: "/tag/work/"
  },
  {
    name: "v-63287c5a",
    path: "/categories/mini/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-63287c5a").then(next)
    },
    meta: {"pid":"categories","id":"mini"}
  },
  {
    path: "/categories/mini/index.html",
    redirect: "/categories/mini/"
  },
  {
    name: "v-35a53628",
    path: "/categories/JS/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-35a53628").then(next)
    },
    meta: {"pid":"categories","id":"JS"}
  },
  {
    path: "/categories/JS/index.html",
    redirect: "/categories/JS/"
  },
  {
    name: "v-71cbee6e",
    path: "/categories/server/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-71cbee6e").then(next)
    },
    meta: {"pid":"categories","id":"server"}
  },
  {
    path: "/categories/server/index.html",
    redirect: "/categories/server/"
  },
  {
    name: "v-7f0d6caa",
    path: "/categories/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-7f0d6caa").then(next)
    },
    meta: {"pid":"categories","id":"css"}
  },
  {
    path: "/categories/css/index.html",
    redirect: "/categories/css/"
  },
  {
    name: "v-58d43d64",
    path: "/categories/React/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-58d43d64").then(next)
    },
    meta: {"pid":"categories","id":"React"}
  },
  {
    path: "/categories/React/index.html",
    redirect: "/categories/React/"
  },
  {
    name: "v-7f0789a7",
    path: "/categories/Vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-7f0789a7").then(next)
    },
    meta: {"pid":"categories","id":"Vue"}
  },
  {
    path: "/categories/Vue/index.html",
    redirect: "/categories/Vue/"
  },
  {
    name: "v-4b927980",
    path: "/categories/webpack/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-4b927980").then(next)
    },
    meta: {"pid":"categories","id":"webpack"}
  },
  {
    path: "/categories/webpack/index.html",
    redirect: "/categories/webpack/"
  },
  {
    name: "v-76b278e8",
    path: "/categories/工作杂记/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-76b278e8").then(next)
    },
    meta: {"pid":"categories","id":"工作杂记"}
  },
  {
    path: "/categories/工作杂记/index.html",
    redirect: "/categories/工作杂记/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]