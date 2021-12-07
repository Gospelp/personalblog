module.exports = {
  title: "劝君惜取少年时",
  description: "Loading...",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "Guide",
            "link": "/docs/guide/"
          }
        ]
      },
      {
        text: "联系作者",
        icon: "reco-message",
        items: [
          {
            text: "Gitee",
            link: "https://gitee.com/tonystark0",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/blogs/categories/Vue/": ["vue", "vue_01", "vue_02"],
      "/blogs/categories/React/": ["react"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [
      {
        title: "Miko Yan",
        desc: "Contact Author",
        email: "1365813771@qq.com",
        link: "tencent://message/?Site=baidu.com&uin=1365813771&Menu=yes",
      },
      {
        title: "小猪校园跑腿",
        desc: "一款集快递代拿、二手闲置、校园交友于一体的小程序",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "http://www.mikoyan.top",
      },
    ],
    logo: "/book.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Miko Yan",
    authorAvatar: "/avatar.png",
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    startYear: "2021",
    valineConfig: {
      appId: "qCotgRe6cJbrmI63r2fB0Ird-gzGzoHsz", 
      appKey: "8oNihGOQygEi3KNu8aL5daFB", 
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
