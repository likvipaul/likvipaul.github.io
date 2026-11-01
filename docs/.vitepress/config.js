export default {
  title: "TechDocs",
  description: "Блог на VitePress",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Статьи', link: '/guide' }
    ],
    sidebar: [
      {
        text: 'Разделы',
        items: [
          { text: 'О проекте', link: '/' },
          { text: 'Все статьи', link: '/guide' }
        ]
      }
    ]
  }
}
