import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的资源库",
  description: "个人收藏的网站和资料",
  
  // 这里配置主题外观
  themeConfig: {
    // 1. 顶部导航栏 (页面右上角)
    nav: [
      { text: '首页', link: '/' },
      { text: '工具推荐', link: '/tools/app-list' },
      { text: '学习资料', link: '/study/notes' }
    ],

    // 2. 左侧侧边栏 (页面左边)
    sidebar: {
      // 当你点进“工具推荐”时，左边显示这些：
      '/tools/': [
        {
          text: '好用的工具',
          items: [
            { text: 'APP推荐', link: '/tools/app-list' },
            { text: '网站收藏', link: '/tools/websites' }
          ]
        }
      ],
      // 当你点进“学习资料”时，左边显示这些：
      '/study/': [
        {
          text: '学习笔记',
          items: [
            { text: '英语资料', link: '/study/notes' }
          ]
        }
      ]
    },

    // 社交链接 (右上角Github图标，不想显示可以删掉这行)
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})