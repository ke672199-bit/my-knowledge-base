import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 网站基础信息
  title: "柯南的知识库", // 👈 这里改网站的大标题
  description: "记录生活，探索世界", // 网站的描述
  lang: 'zh-CN', // 设置语言为中文

  // 2. 主题配置（核心装修部分）
  themeConfig: {
    // 网站的 Logo（如果有图片可以配置，没有这就显示文字标题）
    siteTitle: 'Kenan\'s Wiki', 

    // A. 顶部导航栏 (页面右上角)
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🛠️ 效率工具', link: '/tools/app-list' },
      { text: '📚 学习笔记', link: '/study/notes' },
      { 
        text: 'Bg 更多', 
        items: [
          { text: '关于我', link: '/about' },
          { text: '联系方式', link: '/contact' }
        ]
      }
    ],

    // B. 搜索功能 (最实用的功能！)
    search: {
      provider: 'local' 
    },

    // C. 左侧侧边栏 (目录结构)
    sidebar: {
      '/tools/': [
        {
          text: '📲 软件推荐',
          collapsed: false, // 是否默认折叠
          items: [
            { text: 'APP 列表', link: '/tools/app-list' },
            { text: '网站收藏', link: '/tools/websites' }
          ]
        }
      ],
      '/study/': [
        {
          text: '📖 学习资料',
          items: [
            { text: '学习计划', link: '/study/notes' }
          ]
        }
      ]
    },

    // D. 社交链接 (右上角)
    socialLinks: [
      { icon: 'github', link: 'https://github.com' } // 可以换成别的
    ],

    // E. 页脚
    footer: {
      message: '用心记录每一天',
      copyright: 'Copyright © 2024 Kenan'
    },

    // F. 文章页面的配置
    outline: {
      level: [2, 3], // 右侧大纲显示 H2 和 H3
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})