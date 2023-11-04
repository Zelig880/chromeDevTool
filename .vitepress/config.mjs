import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/chromeDevTool/",
  title: "ChromeDevTools",
  description: "Learn your way to become a ChromeDevTools master with our interactive tutorials, blogs and documentation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      "/tutorial/": [
        {
          text: 'Introduction',
          items: [
            { text: 'What is ChromeDevTools', link: '/tutorial/introduction/what-is-chromedevtools' },
            { text: 'Getting started', link: '/tutorial/introduction/getting-started' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/tutorial/markdown-examples' },
            { text: 'Runtime API Examples', link: '/tutorial/api-examples' }
          ]
        }
      ],
      "/blog/": [
        {
          text: 'Blog',
          items: [
            { text: 'Markdown Examples', link: '/blog/markdown-examples' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sitemap: {
      hostname: 'https://chromedevtools.co.uk'
    },
    head: [
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
  }
})
