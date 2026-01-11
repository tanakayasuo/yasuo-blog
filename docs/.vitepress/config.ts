import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'やすおのブログ',
  description: '住まいの修繕の仕事と日々の経験を綴ります',
  lang: 'ja-JP',
  base: '/yasuo-blog/',
  
  themeConfig: {
    // サイトロゴ（オプション）
    // logo: '/logo.png',
    
    // サイト名
    siteTitle: 'やすおのブログ',
    
    // ナビゲーションバー
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '記事一覧', link: '/articles/' },
      { text: 'ガイド', link: '/guide/' },
      { text: 'このサイトについて', link: '/about' }
    ],

    // サイドバー（カテゴリー表示用）
    sidebar: {
      '/articles/': [
        {
          text: '修繕記事',
          items: [
            { text: '記事一覧', link: '/articles/' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: 'VitePress 使い方', link: '/guide/' }
          ]
        }
      ]
    },

    // ソーシャルリンク（オプション）
    socialLinks: [
      // { icon: 'github', link: 'https://github.com' }
    ],

    // フッター（オプション）
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2025 やすおのブログ'
    }
  }
})
