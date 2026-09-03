const url = 'https://benoitardiet.com'
const title = 'Benoit Ardiet, senior software engineer, fintech payments'
const description = 'Senior software engineer behind a Swiss money-transfer platform: .NET APIs and forty payment-partner integrations, SQL Server performance, a React Native app in both stores, and the infrastructure. Every number on the page has its evidence.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${url}/#person`,
      name: 'Benoit Ardiet',
      jobTitle: 'Senior Software Engineer',
      url,
      email: 'mailto:benoitardiet@gmail.com',
      sameAs: ['https://github.com/VirtuaChamp', 'https://www.linkedin.com/in/benoit-ardiet/'],
      address: { '@type': 'PostalAddress', addressLocality: 'Quito', addressCountry: 'EC' },
      knowsLanguage: ['en', 'fr', 'es'],
      knowsAbout: [
        '.NET and C#',
        'Payment API integration',
        'SQL Server performance tuning',
        'React Native',
        'Azure',
        'DevSecOps',
        'Agentic coding with Claude Code'
      ]
    }
  ]
}

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: { colorMode: false },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-07-03',
  devtools: { enabled: false },
  nitro: { preset: 'cloudflare_module' },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'author', content: 'Benoit Ardiet' },
        { name: 'theme-color', content: '#0a1020' },
        { property: 'og:site_name', content: 'Benoit Ardiet' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }
      ]
    }
  }
})
