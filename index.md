---
# 首页布局模式
layout: home

# 1. 封面大图文区域
hero:
  name: "Kenan's Knowledge"
  text: "构建我的第二大脑"
  tagline: "收集 · 整理 · 思考 · 输出"
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp # 这里可以换成你的图片链接
    alt: Logo
  actions:
    - theme: brand
      text: "🚀 开始浏览"
      link: /tools/app-list
    - theme: alt
      text: "✨ 访问 Github"
      link: https://github.com

# 2. 特性介绍卡片 (三列布局)
features:
  - title: 🛠️ 效率工具
    details: 搜罗全网最好用的 APP 和 网站，让工作生活事半功倍。
    link: /tools/app-list
  
  - title: 📚 终身学习
    details: 英语、编程、阅读笔记，记录点滴进步。
    link: /study/notes
  
  - title: 💡 随想随笔
    details: 记录当下的灵感与思考，留住时间的痕迹。
---