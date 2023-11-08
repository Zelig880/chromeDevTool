import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChromeDevTools",
  description: "Learn your way to become a ChromeDevTools master with our interactive tutorials, blogs and documentation.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorial/introduction/what-is-chromedevtools' },
      { text: 'Blog', link: '/blog/the-start-of-a-journey' }
    ],

    sidebar: {
      "/tutorial/": [
        {
          text: 'Introduction',
          items: [
            { text: 'What is ChromeDevTools', link: '/tutorial/introduction/what-is-chromedevtools' },
            { text: 'Getting started', link: '/tutorial/introduction/getting-started' },
            { text: 'When to use the debugger', link: '/tutorial/introduction/when-to-use-chrome-debugger' },
            { text: 'Chrome Debugger Navigation Bar - The basic', link: '/tutorial/introduction/exploring-the-debugger-navigation-bar-part-1' },
            { text: 'Chrome Debugger Navigation Bar - Advanced Tabs', link: '/tutorial/introduction/exploring-the-debugger-navigation-bar-part-2' }
          ]
        },
        {
          text: 'Debugger Structure',
          items: [
            { text: 'coming soon...' }
          ]
        }
      ],
      "/blog/": [
        {
          text: 'Blog',
          items: [
            { text: 'The start of a journey', link: '/blog/the-start-of-a-journey' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zelig880/chromeDevTool' }
    ],
    sitemap: {
      hostname: 'https://chromedevtools.co.uk'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/apple-icon-57x57.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/apple-icon-60x60.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/apple-icon-72x72.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/apple-icon-76x76.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/apple-icon-114x114.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/apple-icon-120x120.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/apple-icon-144x144.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/apple-icon-152x152.png' } ],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-icon-180x180.png' } ],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192' , href: '/images/android-icon-192x192.png' } ],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' } ],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon-96x96.png' } ],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' } ],
    ['link', { rel: 'manifest', href: '/manifest.json' } ],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-REG61HPHTJ' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-REG61HPHTJ');`
    ]
  ]
})
