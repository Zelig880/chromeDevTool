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
            { text: 'Getting started', link: '/tutorial/introduction/getting-started' }
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
