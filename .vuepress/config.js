module.exports = {
  title: "mikoyan",
  description: "mikoyan 的个人博客",
  dest: "public",
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
        title: "mikoyan",
        desc: "Contact Author",
        email: "1365813771@qq.com",
        link: "tencent://message/?Site=baidu.com&uin=1365813771&Menu=yes",
      },
      {
        title: "小猪校园跑腿",
        desc: "一款集快递代拿、二手闲置、校园交友于一体的小程序",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://47.108.212.244.com",
      },
    ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "mikoyan",
    authorAvatar: "/avatar.png",
    startYear: "2021",
    valineConfig: {
      appId: "qCotgRe6cJbrmI63r2fB0Ird-gzGzoHsz", // your appId
      appKey: "8oNihGOQygEi3KNu8aL5daFB", // your appKey
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
